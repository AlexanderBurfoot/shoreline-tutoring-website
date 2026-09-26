/**
 * Per-visitor request limits for the public API routes.
 *
 * Best-effort and in-memory, so limits hold within a single server instance.
 * For multi-instance or serverless deployments, back this with a shared store
 * (e.g. Redis) so they hold across instances.
 */

/** The address a request came from, as the platform's proxy reports it. */
export function getClientIp(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for');
    return forwarded?.split(',')[0]?.trim() || 'unknown';
}

export interface RateLimitOptions {
    windowMs: number;
    maxRequests: number;
}

/**
 * Returns a function that records a request and reports whether the caller has
 * now exceeded its allowance. Each limiter keeps its own counts, so one route
 * running hot does not lock visitors out of another.
 */
export function createRateLimiter({ windowMs, maxRequests }: RateLimitOptions) {
    const requestTimestamps = new Map<string, number[]>();

    return function isRateLimited(ip: string): boolean {
        const now = Date.now();
        const recent = (requestTimestamps.get(ip) || []).filter(
            (timestamp) => now - timestamp < windowMs
        );
        recent.push(now);
        requestTimestamps.set(ip, recent);
        return recent.length > maxRequests;
    };
}
