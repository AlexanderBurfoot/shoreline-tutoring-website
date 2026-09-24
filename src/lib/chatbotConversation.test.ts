import { describe, expect, it, vi } from 'vitest';

import { FALLBACK_TEXT, requestAiAnswerId, resolveQuestion } from './chatbotConversation';
import { MAX_QUESTION_LENGTH } from './chatbotFallback';
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

        await expect(requestAiAnswerId('Anything', fetchImpl as unknown as typeof fetch)).resolves.toBe('trial');

        const [url, options] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
        expect(url).toBe('/api/chat');
        expect(JSON.parse(String(options.body))).toEqual({ question: 'Anything' });
    });

    it.each([
        ['the route reports nothing available', { ok: true, json: () => Promise.resolve({ entryId: null }) }],
        ['the route returns an error status', { ok: false, json: () => Promise.resolve({}) }],
    ])('returns nothing when %s', async (_label, response) => {
        const fetchImpl = vi.fn().mockResolvedValue(response);
        await expect(requestAiAnswerId('Anything', fetchImpl as unknown as typeof fetch)).resolves.toBeNull();
    });

    it('returns nothing when the request itself fails', async () => {
        const fetchImpl = vi.fn().mockRejectedValue(new Error('offline'));
        await expect(requestAiAnswerId('Anything', fetchImpl as unknown as typeof fetch)).resolves.toBeNull();
    });
});
