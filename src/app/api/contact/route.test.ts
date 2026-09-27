import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { POST } from './route';

const verifyHuman = vi.hoisted(() => vi.fn());

vi.mock('../../../lib/turnstile', () => ({ verifyHuman }));

/**
 * The confirmation email is the only thing here that sends mail to an address a
 * stranger typed, so it must go out only on a positive human check.
 *
 * It used to test `humanCheck !== 'failed'`, which let the 'not-configured'
 * case through: with no TURNSTILE_SECRET_KEY set, anyone could post any email
 * address and the business mailbox would send to it. These tests pin the
 * fail-closed behaviour so that cannot come back.
 */

/** A fresh address per test, since the limiter allows five a minute per IP. */
let visitorCount = 0;

/** Every sendMail body the route posted to Graph, in order. */
let sentMail: { to: string; subject: string; html: string; savesToSent: boolean }[] = [];

/** Whatever was pushed to the store and to the webhook, for the shared reference. */
let stored: string[] = [];
let webhookPosts: string[] = [];

function enquiry(overrides: Record<string, unknown> = {}) {
    return new Request('https://shorelinetutoring.com.au/api/contact', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-forwarded-for': `198.51.100.${(visitorCount += 1)}`,
        },
        body: JSON.stringify({
            name: 'Parent Name',
            email: 'stranger@example.com',
            message: 'Please call me.',
            turnstileToken: 'a-token',
            ...overrides,
        }),
    });
}

/** Stands in for Microsoft Graph: hands out a token, accepts sendMail. */
function graphFetch(url: string | URL | Request) {
    const href = typeof url === 'string' ? url : url.toString();
    if (href.includes('login.microsoftonline.com')) {
        return Promise.resolve(new Response(
            JSON.stringify({ access_token: 'graph-token', expires_in: 3600 }),
            { status: 200, headers: { 'content-type': 'application/json' } },
        ));
    }
    return Promise.resolve(new Response('', { status: 202 }));
}

describe('POST /api/contact, the parent confirmation', () => {
    beforeEach(() => {
        sentMail = [];
        stored = [];
        webhookPosts = [];
        verifyHuman.mockReset();
        vi.stubEnv('AZURE_TENANT_ID', 'tenant');
        vi.stubEnv('AZURE_CLIENT_ID', 'client');
        vi.stubEnv('AZURE_CLIENT_SECRET', 'secret');
        vi.stubEnv('EMAIL_FROM', 'noreply@example.com');
        vi.stubEnv('EMAIL_TO', 'owner@example.com');
        vi.stubEnv('ENQUIRY_FALLBACK_WEBHOOK_URL', 'https://hooks.example.com/enquiries');
        vi.stubEnv('UPSTASH_REDIS_REST_URL', 'https://store.example.com');
        vi.stubEnv('UPSTASH_REDIS_REST_TOKEN', 'store-token');

        vi.spyOn(globalThis, 'fetch').mockImplementation(async (url, init) => {
            const href = typeof url === 'string' ? url : url.toString();
            const raw = String((init as RequestInit)?.body ?? '');
            if (href.includes('/sendMail')) {
                const body = JSON.parse(raw || '{}');
                sentMail.push({
                    to: body?.message?.toRecipients?.[0]?.emailAddress?.address ?? '',
                    subject: body?.message?.subject ?? '',
                    html: body?.message?.body?.content ?? '',
                    savesToSent: body?.saveToSentItems === true,
                });
            }
            if (href.includes('store.example.com')) stored.push(raw);
            if (href.includes('hooks.example.com')) webhookPosts.push(raw);
            return graphFetch(url);
        });
        vi.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        vi.unstubAllEnvs();
        vi.restoreAllMocks();
    });

    it('sends the confirmation when the visitor is verified', async () => {
        verifyHuman.mockResolvedValue('verified');

        const response = await POST(enquiry());

        expect(response.status).toBe(200);
        expect(sentMail.map((mail) => mail.to)).toEqual(['owner@example.com', 'stranger@example.com']);
    });

    /* The case that was open: no secret key set, so nothing was checked. */
    it('sends no confirmation when the check is not configured', async () => {
        verifyHuman.mockResolvedValue('not-configured');

        const response = await POST(enquiry());

        expect(response.status).toBe(200);
        expect(sentMail.map((mail) => mail.to)).toEqual(['owner@example.com']);
    });

    it('sends no confirmation when the check failed', async () => {
        verifyHuman.mockResolvedValue('failed');

        await POST(enquiry());

        expect(sentMail.map((mail) => mail.to)).toEqual(['owner@example.com']);
    });

    /* Skipping it must never be silent, or a misconfigured key looks like a
       working site that quietly stops confirming anything. */
    it('logs why a confirmation was skipped', async () => {
        verifyHuman.mockResolvedValue('not-configured');

        await POST(enquiry());

        expect(console.warn).toHaveBeenCalledWith(
            expect.stringContaining('[ENQUIRY_CONFIRMATION_SKIPPED]'),
        );
    });

    /* The enquiry itself still has to arrive, whatever the check said: a blocked
       script must not cost a real lead. */
    it.each(['verified', 'failed', 'not-configured'])(
        'still delivers the enquiry to the owner when the check is %s',
        async (check) => {
            verifyHuman.mockResolvedValue(check);

            const response = await POST(enquiry());

            expect(response.status).toBe(200);
            expect(sentMail[0]?.to).toBe('owner@example.com');
        },
    );

    /* One enquiry, one identity. Before this the two emails carried no date at
       all, so a repeat enquirer received messages identical in every byte and a
       mail client could treat the later ones as duplicates of the first. */
    it('puts the same reference on both emails, the stored record and the webhook', async () => {
        verifyHuman.mockResolvedValue('verified');

        await POST(enquiry());

        const [owner, confirmation] = sentMail;
        const reference = /Ref ([A-Z2-9]{6})/.exec(owner.html)?.[1];
        expect(reference, 'the owner email should carry a reference').toBeDefined();

        expect(confirmation.html).toContain(reference!);
        expect(stored.join(' ')).toContain(reference!);
        expect(webhookPosts.join(' ')).toContain(reference!);
    });

    it('gives two enquiries from the same person different bodies', async () => {
        verifyHuman.mockResolvedValue('verified');

        await POST(enquiry());
        const first = sentMail.map((mail) => mail.html);
        sentMail = [];
        await POST(enquiry());
        const second = sentMail.map((mail) => mail.html);

        expect(second[0]).not.toBe(first[0]);
        expect(second[1]).not.toBe(first[1]);
    });

    /* A parent who says they never got it can now be checked against the mailbox. */
    it('keeps a sent copy of the confirmation', async () => {
        verifyHuman.mockResolvedValue('verified');

        await POST(enquiry());

        expect(sentMail[1].savesToSent).toBe(true);
    });

    it('shows the enquirer a readable Sydney time, not a UTC stamp', async () => {
        verifyHuman.mockResolvedValue('verified');

        await POST(enquiry());

        expect(sentMail[1].html).toMatch(/Received \d{1,2} \w+ \d{4}/);
        expect(sentMail[1].html).not.toMatch(/\d{4}-\d{2}-\d{2}T/);
    });

    /* Only a check that ran and failed marks the subject, so the prefix keeps
       meaning something once a key is set. */
    it('marks the subject unverified only when the check actually failed', async () => {
        verifyHuman.mockResolvedValue('failed');
        await POST(enquiry());
        expect(sentMail[0].subject).toMatch(/^\[Unverified\]/);

        sentMail = [];
        verifyHuman.mockResolvedValue('not-configured');
        await POST(enquiry());
        expect(sentMail[0].subject).not.toMatch(/^\[Unverified\]/);
    });
});
