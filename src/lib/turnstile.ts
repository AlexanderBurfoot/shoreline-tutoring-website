/**
 * Server-side check of a Cloudflare Turnstile token, which the enquiry form
 * sends to show a real person filled it in.
 *
 * Set TURNSTILE_SECRET_KEY to turn it on; unset, every enquiry is treated as
 * before. The browser half lives in src/components/TurnstileWidget.tsx.
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * - verified: Cloudflare confirmed a person.
 * - failed: no token, a bad token, or no answer in time.
 * - not-configured: no secret key, so there is nothing to check against.
 */
export type HumanCheck = 'verified' | 'failed' | 'not-configured';

export async function verifyHuman(token: unknown, ip: string, timeoutMs: number): Promise<HumanCheck> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) return 'not-configured';
    if (typeof token !== 'string' || !token) return 'failed';

    const body = new URLSearchParams({ secret, response: token });
    if (ip !== 'unknown') body.set('remoteip', ip);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetch(VERIFY_URL, { method: 'POST', body, signal: controller.signal });
        const result = await response.json();
        return result.success === true ? 'verified' : 'failed';
    } catch {
        // Cloudflare unreachable or slow: treated as unverified, never as an error.
        return 'failed';
    } finally {
        clearTimeout(timer);
    }
}
