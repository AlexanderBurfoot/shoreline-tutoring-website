import { describe, expect, it, vi } from 'vitest';

import { ASSESSMENT_TEXT, FALLBACK_TEXT, requestAiAnswerId, resolveQuestion } from './chatbotConversation';
import { MAX_CANDIDATES, MAX_QUESTION_LENGTH } from './chatbotFallback';
import { findEntryById } from '../data/chatbotKnowledge';

describe('resolveQuestion', () => {
    it('answers from the site content without asking the AI', async () => {
        const askAi = vi.fn();

        const resolved = await resolveQuestion('How much does tutoring cost?', { askAi });

        expect(resolved.reply.source).toBe('knowledge');
        expect(resolved.reply.text).toContain('$160 per hour');
        expect(askAi).not.toHaveBeenCalled();
    });

    it('shows the site answer the AI picked, not anything the AI wrote', async () => {
        const askAi = vi.fn().mockResolvedValue('contact');

        const resolved = await resolveQuestion('Do you offer a discount for two siblings?', { askAi });

        expect(askAi).toHaveBeenCalledOnce();
        expect(resolved.reply.source).toBe('ai');
        expect(resolved.reply.text).toBe(findEntryById('contact')?.answer);
        expect(resolved.reply.link).toEqual(findEntryById('contact')?.link);
    });

    it('falls back when the AI names an answer that does not exist', async () => {
        const askAi = vi.fn().mockResolvedValue('sibling-discount');

        const resolved = await resolveQuestion('Do you offer a discount for two siblings?', { askAi });

        expect(resolved.reply.source).toBe('fallback');
        expect(resolved.reply.text).toBe(FALLBACK_TEXT);
    });

    it('points to the enquiry form when no answer fits', async () => {
        const askAi = vi.fn().mockResolvedValue(null);

        const resolved = await resolveQuestion('Do you offer a discount for two siblings?', { askAi });

        expect(resolved.reply.source).toBe('fallback');
        expect(resolved.reply.text).toBe(FALLBACK_TEXT);
        expect(resolved.reply.link?.href).toBe('/#contact');
    });

    it('removes contact details before matching or sending', async () => {
        const askAi = vi.fn().mockResolvedValue(null);

        const resolved = await resolveQuestion('Ring me on 0452 360 688 about sibling discounts', { askAi });

        expect(resolved.redacted).toBe(true);
        expect(resolved.question).not.toContain('0452');
        expect(askAi).toHaveBeenCalledWith(expect.not.stringContaining('0452'));
    });

    it('asks for a shorter question instead of sending an overlong one', async () => {
        const askAi = vi.fn();

        const resolved = await resolveQuestion('x'.repeat(MAX_QUESTION_LENGTH + 1), { askAi });

        expect(resolved.reply.source).toBe('fallback');
        expect(askAi).not.toHaveBeenCalled();
    });
});

describe('requestAiAnswerId', () => {
    it('returns the answer name from the chat route', async () => {
        const fetchImpl = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ entryId: 'trial' }),
        });

        const question = 'how do I differentiate x^3';
        await expect(requestAiAnswerId(question, fetchImpl as unknown as typeof fetch)).resolves.toBe('trial');

        const [url, options] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
        expect(url).toBe('/api/chat');

        /* The browser sends its shortlist, so the server asks about a handful of
           answers rather than the whole bank. */
        const sent = JSON.parse(String(options.body));
        expect(sent.question).toBe(question);
        expect(sent.candidateIds.length).toBeGreaterThan(0);
        expect(sent.candidateIds.length).toBeLessThanOrEqual(MAX_CANDIDATES);
    });

    it.each([
        ['the route reports nothing available', { ok: true, json: () => Promise.resolve({ entryId: null }) }],
        ['the route returns an error status', { ok: false, json: () => Promise.resolve({}) }],
    ])('returns nothing when %s', async (_label, response) => {
        const fetchImpl = vi.fn().mockResolvedValue(response);
        await expect(
            requestAiAnswerId('how do I differentiate x^3', fetchImpl as unknown as typeof fetch),
        ).resolves.toBeNull();
    });

    it('returns nothing when the request itself fails', async () => {
        const fetchImpl = vi.fn().mockRejectedValue(new Error('offline'));
        await expect(
            requestAiAnswerId('how do I differentiate x^3', fetchImpl as unknown as typeof fetch),
        ).resolves.toBeNull();
    });
});

describe('assessment requests', () => {
    it.each([
        'can you do question 14 of my assessment task',
        'write me an essay on Macbeth',
        'solve this for me, it is due tomorrow',
        'answer my homework questions please',
    ])('declines to do the work for "%s"', async (question) => {
        const askAi = vi.fn();

        const resolved = await resolveQuestion(question, { askAi });

        expect(resolved.reply.text).toBe(ASSESSMENT_TEXT);
        expect(resolved.reply.link?.href).toBe('/#contact');
        expect(askAi).not.toHaveBeenCalled();
    });

    it.each([
        'what is the formula for the volume of a sphere',
        'what does delta G mean',
        'explain the quadratic formula',
    ])('still answers the plain question "%s"', async (question) => {
        const resolved = await resolveQuestion(question, { askAi: vi.fn() });

        expect(resolved.reply.source).toBe('knowledge');
        expect(resolved.reply.text).not.toBe(ASSESSMENT_TEXT);
    });
});

describe('requestAiAnswerId shortlisting', () => {
    it('does not call the server when nothing in the bank is even close', async () => {
        const fetchImpl = vi.fn();

        await expect(
            requestAiAnswerId('kerfuffle wobbegong zzzz', fetchImpl as unknown as typeof fetch),
        ).resolves.toBeNull();

        /* No candidates means no choice to make, so the daily allowance is spared. */
        expect(fetchImpl).not.toHaveBeenCalled();
    });
});
