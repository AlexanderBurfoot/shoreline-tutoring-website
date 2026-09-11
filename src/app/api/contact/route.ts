import { NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

// Best-effort in-memory rate limiter, scoped to a single server instance.
// For multi-instance or serverless deployments, back this with a shared
// store (e.g. Redis) so limits hold across instances.
const requestTimestamps = new Map<string, number[]>();

function getClientIp(request: Request) {
    const forwarded = request.headers.get('x-forwarded-for');
    return forwarded?.split(',')[0]?.trim() || 'unknown';
}

function isRateLimited(ip: string) {
    const now = Date.now();
    const recent = (requestTimestamps.get(ip) || []).filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
    );
    recent.push(now);
    requestTimestamps.set(ip, recent);
    return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

/** Transient failures worth retrying: throttling and gateway errors. */
const RETRYABLE_STATUSES = new Set([408, 429, 500, 502, 503, 504]);
const MAX_SEND_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 400;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Total time this handler will spend on outbound calls, kept under the
 * platform's function limit, with a slice always held back so the webhook can
 * still fire after a slow or hanging email attempt.
 */
const TOTAL_OUTBOUND_BUDGET_MS = 8000;
const WEBHOOK_RESERVE_MS = 2500;
const GRAPH_TOKEN_TIMEOUT_MS = 3000;
const GRAPH_SEND_TIMEOUT_MS = 3000;

/**
 * fetch with a hard timeout. Without this, a hanging endpoint (as opposed to
 * one returning an error) blocks until the platform kills the function, so
 * the later capture paths never run at all.
 */
async function fetchWithTimeout(
    url: string,
    options: RequestInit,
    timeoutMs: number
): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        return await fetch(url, { ...options, signal: controller.signal });
    } finally {
        clearTimeout(timer);
    }
}

let cachedToken: string | null = null;
let tokenExpiry = 0;

async function getGraphToken() {
    if (cachedToken && Date.now() < tokenExpiry - 300000) {
        return cachedToken;
    }

    const tokenUrl = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`;

    const params = new URLSearchParams({
        client_id: process.env.AZURE_CLIENT_ID!,
        client_secret: process.env.AZURE_CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
    });

    const response = await fetchWithTimeout(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    }, GRAPH_TOKEN_TIMEOUT_MS);

    if (!response.ok) {
        const detail = await response.text().catch(() => '<no body>');
        // Azure client secrets expire on a fixed date; without the body an
        // expired secret is indistinguishable from a network problem.
        throw new Error(`Token request failed (${response.status}): ${detail}`);
    }

    const data = await response.json();
    cachedToken = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000;
    return cachedToken;
}

/**
 * Durable copy of every enquiry, written before delivery is attempted so a
 * record survives even if both notification paths fail.
 *
 * Uses the Upstash REST API rather than a Redis driver: it is plain HTTP, so
 * there is no dependency to install and it works on any serverless host. Set
 * UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to enable it; unset, it
 * is skipped and behaviour is unchanged.
 */
const ENQUIRY_LIST_KEY = 'enquiries';
const PERSIST_TIMEOUT_MS = 3000;

async function persistEnquiry(enquiry: Record<string, unknown>): Promise<boolean> {
    const restUrl = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!restUrl || !token) return false;

    const record = JSON.stringify({ receivedAt: new Date().toISOString(), ...enquiry });
    try {
        const response = await fetchWithTimeout(restUrl, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            // Command as a JSON array, which keeps arbitrary values out of the URL.
            body: JSON.stringify(['LPUSH', ENQUIRY_LIST_KEY, record]),
        }, PERSIST_TIMEOUT_MS);
        return response.ok;
    } catch {
        return false;
    }
}

/**
 * Second, independent notification channel.
 *
 * Deliberately a different provider on a different network path, so it does
 * not share a failure mode with Graph: an expired Azure secret or a Graph
 * outage takes out the email path and leaves this one working.
 *
 * Set ENQUIRY_FALLBACK_WEBHOOK_URL to a Slack or Discord incoming webhook. If
 * it is unset the fallback is skipped and behaviour is unchanged.
 */
const FALLBACK_TIMEOUT_MS = 4000;
const FALLBACK_MAX_MESSAGE_CHARS = 1200;

async function notifyWebhook(
    enquiry: Record<string, unknown>,
    { emailDelivered }: { emailDelivered: boolean }
): Promise<boolean> {
    const webhookUrl = process.env.ENQUIRY_FALLBACK_WEBHOOK_URL;
    if (!webhookUrl) return false;

    const field = (label: string, value: unknown) => {
        const isEmptyList = Array.isArray(value) && value.length === 0;
        if (value === undefined || value === null || value === '' || isEmptyList) return null;
        const text = Array.isArray(value) ? value.join(', ') : String(value);
        return `${label}: ${text.slice(0, FALLBACK_MAX_MESSAGE_CHARS)}`;
    };

    const summary = [
        emailDelivered
            ? '🔔 New enquiry (also emailed to you)'
            : '🚨 New enquiry: EMAIL DELIVERY FAILED, please reply manually',
        field('Name', enquiry.name),
        field('Email', enquiry.email),
        field('Phone', enquiry.phone),
        field('Format', enquiry.format),
        field('Course', enquiry.course),
        field('Day', enquiry.day),
        field('Subjects', enquiry.subjects),
        field('Message', enquiry.message),
    ].filter(Boolean).join('\n');

    try {
        const response = await fetchWithTimeout(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // `text` is Slack's field and `content` is Discord's; each ignores
            // the other, so one payload works for either.
            body: JSON.stringify({ text: summary, content: summary }),
        }, FALLBACK_TIMEOUT_MS);
        return response.ok;
    } catch {
        return false;
    }
}

function escapeHtml(text: string) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/** One label and value row of the enquiry email, or nothing when the value is empty. */
function emailDetailRow(label: string, value: string) {
    if (!value) return '';
    return `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHtml(label)}</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;">${escapeHtml(value)}</td>
                    </tr>`;
}

export async function POST(request: Request) {
    /**
     * Kept outside the try so the catch can still reach the enquiry after a
     * delivery failure. Nothing else in this request holds a copy of it.
     */
    let submitted: Record<string, unknown> = {};
    let persisted = false;
    const deadline = Date.now() + TOTAL_OUTBOUND_BUDGET_MS - WEBHOOK_RESERVE_MS;

    try {
        const ip = getClientIp(request);
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please wait a minute and try again.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { name, email, phone, format, subjects, course, day, message, company } = body;
        submitted = { name, email, phone, format, subjects, course, day, message };

        // Honeypot: real users never fill this. Pretend success so bots get no signal.
        if (company) {
            return NextResponse.json({ success: true, message: 'Your enquiry has been sent! We\'ll be in touch soon.' });
        }

        if (!name || !name.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
        if (!email || !email.trim()) return NextResponse.json({ error: 'Email is required.' }, { status: 400 });

        // Written before delivery so a record exists even if everything after
        // this point fails. A store outage must never block a real enquiry, so
        // the result is recorded and the request continues either way.
        persisted = await persistEnquiry(submitted);
        if (!persisted && process.env.UPSTASH_REDIS_REST_URL) {
            console.error('[ENQUIRY_PERSIST_FAILED] Store configured but write failed.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });

        const subjectsList = Array.isArray(subjects) && subjects.length > 0 ? subjects.join(', ') : '';
        const learningFormat = typeof format === 'string' ? format.trim() : '';
        const enquiryLabel = learningFormat || 'Tutoring';
        const courseChoice = typeof course === 'string' ? course.trim() : '';
        const dayChoice = typeof day === 'string' ? day.trim() : '';
        // Group enquiries name the class to place the student in; others list subjects.
        const enquiryDetail = [courseChoice, dayChoice].filter(Boolean).join(', ') || subjectsList;
        const subjectLine = `New ${enquiryLabel} Enquiry: ${name}${enquiryDetail ? ` (${enquiryDetail})` : ''}`;

        const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #1a2332 0%, #243447 100%); padding: 32px; text-align: center;">
                <h1 style="color: #EAC54D; margin: 0; font-size: 22px; font-weight: 600;">New ${escapeHtml(enquiryLabel)} Enquiry</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">Submitted via shorelinetutoring.com.au</p>
            </div>
            <div style="padding: 32px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">Name</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;"><a href="mailto:${escapeHtml(email)}" style="color: #EAC54D; text-decoration: none;">${escapeHtml(email)}</a></td>
                    </tr>
                    ${phone ? `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;"><a href="tel:${escapeHtml(phone)}" style="color: #EAC54D; text-decoration: none;">${escapeHtml(phone)}</a></td>
                    </tr>` : ''}
                    ${emailDetailRow('Format', learningFormat)}
                    ${emailDetailRow('Course', courseChoice)}
                    ${emailDetailRow('Day', dayChoice)}
                    ${emailDetailRow('Subjects', subjectsList)}
                </table>
                ${message ? `
                <div style="margin-top: 24px;">
                    <p style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px;">Goals & Message</p>
                    <div style="background: #f9fafb; border-radius: 8px; padding: 16px; color: #1a2332; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
                </div>` : ''}
            </div>
            <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px;">Shoreline Tutoring: Contact Form</p>
            </div>
        </div>
        `;

        const token = await getGraphToken();

        const msg = {
            message: {
                subject: subjectLine,
                body: {
                    contentType: 'HTML',
                    content: htmlBody,
                },
                toRecipients: [{ emailAddress: { address: process.env.EMAIL_TO || 'contact@shorelinetutoring.com.au' } }],
                replyTo: [{ emailAddress: { address: email } }],
            },
            saveToSentItems: true,
        };

        // Graph throttles and occasionally returns gateway errors; a single
        // transient failure should not cost an enquiry.
        let lastError: Error | null = null;
        for (let attempt = 1; attempt <= MAX_SEND_ATTEMPTS; attempt++) {
            const response = await fetchWithTimeout(
                `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_FROM}/sendMail`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(msg),
                },
                GRAPH_SEND_TIMEOUT_MS
            );

            if (response.ok) {
                lastError = null;
                break;
            }

            const errorBody = await response.text().catch(() => '<no body>');
            lastError = new Error(`Graph API error (${response.status}): ${errorBody}`);

            const budgetLeft = deadline - Date.now();
            if (
                !RETRYABLE_STATUSES.has(response.status) ||
                attempt === MAX_SEND_ATTEMPTS ||
                budgetLeft <= 0
            ) {
                break;
            }
            await wait(Math.min(RETRY_BASE_DELAY_MS * 2 ** (attempt - 1), budgetLeft));
        }

        if (lastError) {
            throw lastError;
        }

        // Mirrored on every enquiry, not just failures, so each lead has two
        // independent copies in places a human actually reads.
        await notifyWebhook(submitted, { emailDelivered: true });

        return NextResponse.json({ success: true, message: 'Your enquiry has been sent! We\'ll be in touch soon.' });
    } catch (err) {
        console.error('[ENQUIRY_EMAIL_FAILED] Cause:', err);

        const notified = await notifyWebhook(submitted, { emailDelivered: false });
        if (notified) {
            console.warn('[ENQUIRY_VIA_WEBHOOK] Email failed; enquiry delivered to webhook instead.');
        }

        // The enquirer is told it worked whenever the enquiry is safe: either
        // someone was notified, or it is durably stored and we hold their
        // contact details. Turning them away would lose a lead we already have.
        if (notified || persisted) {
            if (!notified) {
                console.error('[ENQUIRY_STORED_UNNOTIFIED] Saved to the store but nobody was notified. Check the enquiry list.');
            }
            return NextResponse.json({
                success: true,
                message: 'Your enquiry has been sent! We\'ll be in touch soon.',
            });
        }

        // Nothing captured it, so the log is the only remaining copy. This puts
        // contact details in the runtime logs, so keep log access restricted
        // and retention short.
        console.error('[ENQUIRY_DELIVERY_FAILED] Recover manually:', JSON.stringify({
            receivedAt: new Date().toISOString(),
            ...submitted,
        }));
        return NextResponse.json({ error: 'Something went wrong. Please try emailing us directly at contact@shorelinetutoring.com.au' }, { status: 500 });
    }
}
