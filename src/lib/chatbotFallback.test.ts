import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { buildRouterPrompt, chooseAnswerId, MAX_QUESTION_LENGTH } from './chatbotFallback';
import { knowledgeEntries } from '../data/chatbotKnowledge';

const ACCOUNT_ID = 'test-account';
const API_TOKEN = 'test-token';

function stubFetch(implementation: () => Promise<unknown>) {
    const fetchMock = vi.fn(implementation);
    vi.stubGlobal('fetch', fetchMock);
    return fetchMock;
}

function jsonResponse(body: unknown, ok = true, status = 200) {
    return Promise.resolve({ ok, status, json: () => Promise.resolve(body) });
}

function modelReplies(reply: string) {
    return () => jsonResponse({ result: { response: reply } });
}

describe('buildRouterPrompt', () => {
    it('offers every answer the site has, by name', () => {
        const prompt = buildRouterPrompt();

        for (const entry of knowledgeEntries) {
            expect(prompt).toContain(`${entry.id}: ${entry.question}`);
        }
    });

    it('asks for a name only, and for none when in doubt', () => {
        const prompt = buildRouterPrompt();

        expect(prompt).toContain('never write an answer yourself');
        expect(prompt).toContain('Reply with one id from the list');
        expect(prompt).toContain('reply exactly: none');
        expect(prompt).toContain('A wrong match is worse than none');
    });

    it('does not send the answers themselves, only the questions', () => {
        /* The model chooses; it is never given wording it could copy or adapt. */
        expect(buildRouterPrompt()).not.toContain('$160 per hour');
    });
});

describe('chooseAnswerId', () => {
    beforeEach(() => {
        vi.stubEnv('CLOUDFLARE_ACCOUNT_ID', ACCOUNT_ID);
        vi.stubEnv('CLOUDFLARE_AI_API_TOKEN', API_TOKEN);
    });

    afterEach(() => {
        vi.unstubAllEnvs();
        vi.unstubAllGlobals();
    });

    it('returns the chosen answer name', async () => {
        const fetchMock = stubFetch(modelReplies('one-on-one-price'));

        await expect(chooseAnswerId('what are your rates')).resolves.toBe('one-on-one-price');

        const [url, options] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
        expect(url).toContain(`/accounts/${ACCOUNT_ID}/ai/run/`);
        expect((options.headers as Record<string, string>).Authorization).toBe(`Bearer ${API_TOKEN}`);
    });

    it.each([
        ['surrounding punctuation or quotes', '"one-on-one-price".'],
        ['different capitalisation', 'One-On-One-Price'],
        ['surrounding whitespace', '  one-on-one-price\n'],
    ])('accepts a name with %s', async (_label, reply) => {
        stubFetch(modelReplies(reply));
        await expect(chooseAnswerId('what are your rates')).resolves.toBe('one-on-one-price');
    });

    it('sends only the current question, with no conversation history', async () => {
        const fetchMock = stubFetch(modelReplies('contact'));

        await chooseAnswerId('how do I book');

        const [, options] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
        const body = JSON.parse(String(options.body));
        expect(body.messages).toHaveLength(2);
        expect(body.messages[1]).toEqual({ role: 'user', content: 'how do I book' });
    });

    it('returns nothing when the keys are not configured, without calling out', async () => {
        vi.stubEnv('CLOUDFLARE_ACCOUNT_ID', '');
        vi.stubEnv('CLOUDFLARE_AI_API_TOKEN', '');
        const fetchMock = stubFetch(modelReplies('contact'));

        await expect(chooseAnswerId('Anything')).resolves.toBeNull();
        expect(fetchMock).not.toHaveBeenCalled();
    });

    it.each([
        ['the model says none fits', modelReplies('none')],
        ['the model names an answer that does not exist', modelReplies('sibling-discount')],
        ['the model writes prose instead of a name', modelReplies('We do offer sibling discounts!')],
        ['the reply is empty', modelReplies('   ')],
        ['an error status, such as a spent daily allowance', () => jsonResponse({}, false, 429)],
        ['a reply in an unexpected shape', () => jsonResponse({ unexpected: true })],
        ['a network failure', () => Promise.reject(new Error('network down'))],
    ])('returns nothing when %s', async (_label, implementation) => {
        stubFetch(implementation);
        await expect(chooseAnswerId('Anything')).resolves.toBeNull();
    });
});

describe('MAX_QUESTION_LENGTH', () => {
    it('is long enough for a real question and short enough to stay cheap', () => {
        expect(MAX_QUESTION_LENGTH).toBeGreaterThanOrEqual(200);
        expect(MAX_QUESTION_LENGTH).toBeLessThanOrEqual(500);
    });
});
