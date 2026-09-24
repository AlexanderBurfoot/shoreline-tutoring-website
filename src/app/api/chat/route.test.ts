import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { POST } from './route';
import { DAILY_ANSWER_LIMIT, MAX_QUESTION_LENGTH } from '../../../lib/chatbotFallback';

const chooseAnswerId = vi.hoisted(() => vi.fn());

vi.mock('../../../lib/chatbotFallback', async (importOriginal) => ({
    ...(await importOriginal<typeof import('../../../lib/chatbotFallback')>()),
    chooseAnswerId,
}));

/** A fresh address per test, so one test's rate limit does not affect the next. */
let visitorCount = 0;

function chatRequest(body: unknown, ip = `203.0.113.${(visitorCount += 1)}`) {
    return new Request('https://shorelinetutoring.com.au/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
        body: typeof body === 'string' ? body : JSON.stringify(body),
    });
}

describe('POST /api/chat', () => {
    beforeEach(() => {
        chooseAnswerId.mockReset();
        chooseAnswerId.mockResolvedValue('trial');
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('names the answer that fits a question keyword matching could not place', async () => {
        const response = await POST(chatRequest({ question: 'Do you offer sibling discounts?' }));

        expect(response.status).toBe(200);
        await expect(response.json()).resolves.toEqual({ entryId: 'trial' });
    });

    it('strips contact details before the question is sent on', async () => {
        await POST(chatRequest({ question: 'Call me on 0452 360 688 about Year 9 maths' }));

        expect(chooseAnswerId).toHaveBeenCalledWith('Call me on [phone removed] about Year 9 maths');
    });

    it.each([
        ['a missing question', {}],
        ['a question that is not text', { question: 42 }],
        ['an empty question', { question: '   ' }],
        ['a question that is too long', { question: 'x'.repeat(MAX_QUESTION_LENGTH + 1) }],
        ['a body that is not valid JSON', 'not json'],
    ])('refuses %s without calling the model', async (_label, body) => {
        const response = await POST(chatRequest(body));

        expect(response.status).toBe(400);
        await expect(response.json()).resolves.toEqual({ entryId: null });
        expect(chooseAnswerId).not.toHaveBeenCalled();
    });

    it('limits how many questions one visitor can send in a minute', async () => {
        const ip = '203.0.113.200';
        const send = () => POST(chatRequest({ question: 'Do you offer sibling discounts?' }, ip));

        const statuses: number[] = [];
        for (let attempt = 0; attempt < 7; attempt += 1) {
            statuses.push((await send()).status);
        }

        expect(statuses.filter((status) => status === 200).length).toBeGreaterThan(0);
        expect(statuses.at(-1)).toBe(429);
    });

    it('reports nothing available when no answer fits', async () => {
        chooseAnswerId.mockResolvedValue(null);

        const response = await POST(chatRequest({ question: 'Do you offer sibling discounts?' }));

        /* A success carrying no answer, so visitors' browsers log no error for
           what is an expected state. */
        expect(response.status).toBe(200);
        await expect(response.json()).resolves.toEqual({ entryId: null });
    });

    it('never passes a question to the model once the daily allowance is spent', async () => {
        /* Walks the day's allowance up to the ceiling, then checks what the
           request after it does. */
        for (let attempt = 0; attempt < DAILY_ANSWER_LIMIT; attempt += 1) {
            await POST(chatRequest({ question: 'Do you offer sibling discounts?' }));
        }

        chooseAnswerId.mockClear();
        const response = await POST(chatRequest({ question: 'Do you offer sibling discounts?' }));

        expect(response.status).toBe(200);
        await expect(response.json()).resolves.toEqual({ entryId: null });
        expect(chooseAnswerId).not.toHaveBeenCalled();
    });
});
