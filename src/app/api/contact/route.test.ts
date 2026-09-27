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
let sentMail: { to: string; subject: string }[] = [];

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
        verifyHuman.mockReset();
        vi.stubEnv('AZURE_TENANT_ID', 'tenant');
        vi.stubEnv('AZURE_CLIENT_ID', 'client');
        vi.stubEnv('AZURE_CLIENT_SECRET', 'secret');
        vi.stubEnv('EMAIL_FROM', 'noreply@example.com');
        vi.stubEnv('EMAIL_TO', 'owner@example.com');
        vi.stubEnv('ENQUIRY_FALLBACK_WEBHOOK_URL', '');
        vi.stubEnv('UPSTASH_REDIS_REST_URL', '');

        vi.spyOn(globalThis, 'fetch').mockImplementation(async (url, init) => {
            const href = typeof url === 'string' ? url : url.toString();
            if (href.includes('/sendMail')) {
                const body = JSON.parse(String((init as RequestInit)?.body ?? '{}'));
                sentMail.push({
                    to: body?.message?.toRecipients?.[0]?.emailAddress?.address ?? '',
                    subject: body?.message?.subject ?? '',
                });
            }
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
