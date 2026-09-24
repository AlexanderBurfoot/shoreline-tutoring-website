import { NextResponse } from 'next/server';

import { chooseAnswerId, DAILY_ANSWER_LIMIT, MAX_QUESTION_LENGTH } from '../../../lib/chatbotFallback';
import { createRateLimiter, getClientIp } from '../../../lib/rateLimit';
import { redactPersonalDetails } from '../../../lib/redactPersonalDetails';

/**
 * Names which approved answer fits a question the browser's own matching could
 * not place.
 *
 * The reply is the name of an answer, never answer text: the chat looks the
 * wording up on the visitor's side, so nothing a model wrote is ever shown.
 * Every failure returns the same empty reply, which the chat turns into a
 * pointer to the enquiry form.
 *
 * What parents type is never logged.
 */

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const isRateLimited = createRateLimiter({
    windowMs: RATE_LIMIT_WINDOW_MS,
    maxRequests: RATE_LIMIT_MAX_REQUESTS,
});

/** Best-effort daily count, held per server instance like the rate limiter. */
const dailyUsage = { day: '', answers: 0 };

function currentDay(): string {
    return new Date().toISOString().slice(0, 10);
}

/** Records an answer against today's allowance, or reports it is used up. */
function withinDailyLimit(): boolean {
    const today = currentDay();
    if (dailyUsage.day !== today) {
        dailyUsage.day = today;
        dailyUsage.answers = 0;
    }

    if (dailyUsage.answers >= DAILY_ANSWER_LIMIT) {
        return false;
    }

    dailyUsage.answers += 1;
    return true;
}

/**
 * No answer: nothing on the list fitted, the fallback is not configured, the
 * daily allowance is spent, or the model did not reply. The chat shows its
 * enquiry-form fallback. Reported as a success because it is an expected state
 * rather than a failure, and an error status would log an error in every
 * visitor's browser console.
 */
function noAnswer() {
    return NextResponse.json({ entryId: null });
}

/** No answer because the request itself was refused. */
function refused(status: number) {
    return NextResponse.json({ entryId: null }, { status });
}

function readQuestion(body: unknown): string | null {
    if (typeof body !== 'object' || body === null) {
        return null;
    }

    const { question } = body as { question?: unknown };
    if (typeof question !== 'string') {
        return null;
    }

    const trimmed = question.trim();
    return trimmed.length > 0 && trimmed.length <= MAX_QUESTION_LENGTH ? trimmed : null;
}

export async function POST(request: Request) {
    if (isRateLimited(getClientIp(request))) {
        return refused(429);
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return refused(400);
    }

    const question = readQuestion(body);
    if (!question) {
        return refused(400);
    }

    if (!withinDailyLimit()) {
        return noAnswer();
    }

    /* Redacted again here: the browser does this too, but the browser's copy is
       not something the server can rely on. */
    const { text } = redactPersonalDetails(question);

    const entryId = await chooseAnswerId(text);
    if (!entryId) {
        return noAnswer();
    }

    return NextResponse.json({ entryId });
}
