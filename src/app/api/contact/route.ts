import { NextResponse } from 'next/server';

import { CONTACT_EMAIL } from '../../../lib/site';
import { ownerEnquiryEmailHtml, parentConfirmationEmailHtml, type ConfirmationFields } from '../../../lib/enquiryEmails';
import { verifyHuman } from '../../../lib/turnstile';
import { createRateLimiter, getClientIp } from '../../../lib/rateLimit';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const isRateLimited = createRateLimiter({
    windowMs: RATE_LIMIT_WINDOW_MS,
    maxRequests: RATE_LIMIT_MAX_REQUESTS,
});

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
 * The confirmation to the parent is a courtesy, not the enquiry itself, so it
 * gets one attempt on whatever time is left and never holds up the response.
 */
const AUTO_REPLY_TIMEOUT_MS = 2500;

/** Runs alongside the Graph token request, so it adds no waiting of its own. */
const HUMAN_CHECK_TIMEOUT_MS = 2500;

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


/**
 * Confirms to the parent that their enquiry arrived, so they are not left
 * wondering whether the form worked.
 *
 * Deliberately echoes only their name and the choices they ticked, never their
 * free-text message: this endpoint will send to any address given to it, and a
 * mostly fixed body makes it useless for relaying content to someone else.
 * Failure is logged and ignored, because the enquiry itself is already safe.
 */
async function sendParentConfirmation(
    token: string,
    { email, ...fields }: ConfirmationFields & { email: string },
    timeoutMs: number,
): Promise<boolean> {
    const html = parentConfirmationEmailHtml(fields);

    try {
        const response = await fetchWithTimeout(
            `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_FROM}/sendMail`,
            {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: {
                        subject: 'Thank you for contacting Shoreline Tutoring',
                        body: { contentType: 'HTML', content: html },
                        toRecipients: [{ emailAddress: { address: email } }],
                        // Replies land in the enquiry mailbox, not the sending account.
                        replyTo: [{ emailAddress: { address: process.env.EMAIL_TO || CONTACT_EMAIL } }],
                    },
                    saveToSentItems: false,
                }),
            },
            timeoutMs,
        );
        return response.ok;
    } catch {
        return false;
    }
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
        const { name, email, phone, format, subjects, course, day, message, company, turnstileToken } = body;
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

        const htmlBody = ownerEnquiryEmailHtml({ enquiryLabel, name, email, phone, learningFormat, courseChoice, dayChoice, subjectsList, message });

        // A failed check never turns an enquiry away, since a blocked script or a
        // slow connection must not cost a real lead. It is delivered marked as
        // unverified, and the confirmation email, the one thing a bot could use
        // to send mail to a stranger, is not sent.
        const [token, humanCheck] = await Promise.all([
            getGraphToken(),
            verifyHuman(turnstileToken, ip, HUMAN_CHECK_TIMEOUT_MS),
        ]);
        const isUnverified = humanCheck === 'failed';

        const msg = {
            message: {
                subject: isUnverified ? `[Unverified] ${subjectLine}` : subjectLine,
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

        // Only with time left over: the enquiry is delivered either way, and
        // the webhook's reserve is not spent on a courtesy email.
        const replyBudget = Math.min(AUTO_REPLY_TIMEOUT_MS, deadline - Date.now());
        if (replyBudget > 0 && token && !isUnverified) {
            const confirmed = await sendParentConfirmation(
                token,
                { name, email, learningFormat, subjectsList, courseChoice, dayChoice },
                replyBudget,
            );
            if (!confirmed) {
                console.warn('[ENQUIRY_CONFIRMATION_FAILED] Enquiry delivered; the confirmation to the enquirer was not.');
            }
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
