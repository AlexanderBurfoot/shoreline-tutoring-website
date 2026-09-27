/**
 * The AI fallback, used only for questions the assistant's own keyword matching
 * cannot place.
 *
 * The model never writes a reply. It is given the list of approved answers and
 * asked which one fits, so a visitor only ever reads wording from this site. A
 * small model will otherwise fill a gap with a plausible guess, and a guess
 * about what a tutoring service allows or promises is a commitment made in the
 * owner's name.
 *
 * It runs on Cloudflare Workers AI, whose terms state that customer content is
 * not used to train models and is not stored unless a storage service is used.
 * The free plan fails the request rather than billing once the daily allowance
 * is spent, which is why every failure here is treated the same way: the caller
 * shows the enquiry form instead.
 *
 * One question is sent at a time, with no conversation history, so the least
 * possible text leaves the site.
 */
import { knowledgeEntries, type KnowledgeEntry } from '../data/chatbotKnowledge';

/** Longer than any real question, and short enough to keep the cost down. */
export const MAX_QUESTION_LENGTH = 300;

/**
 * A ceiling on AI-assisted answers per day. One question costs about 5.7 of
 * Cloudflare's 10,000 free daily neurons (measured September 2026), so the free
 * allowance covers roughly 1,750. This sits well below that, because the chat
 * route counts per server instance: several instances running at once each keep
 * their own tally, and the ceiling that matters is the total across them.
 *
 * The point is not cost, which the Free plan rules out by refusing requests
 * rather than billing. It is that a burst of spam should not spend the day's
 * allowance and leave real visitors without it.
 */
export const DAILY_ANSWER_LIMIT = 500;

/**
 * A small instruct model, which is all this needs: it is choosing from a short
 * list, not reasoning or writing.
 */
const MODEL = '@cf/meta/llama-3.1-8b-instruct-fp8';

/** An answer is one short identifier, so the reply has no room to ramble. */
const MAX_OUTPUT_TOKENS = 16;

/**
 * No randomness: this is a classification, and the same question should get the
 * same answer every time. Left at the model's default, one question can pick an
 * answer on one visit and nothing on the next.
 */
const TEMPERATURE = 0;

/** What the model replies when no answer on the list fits the question. */
const NO_MATCH = 'none';

/** Abandoned rather than left hanging, so the chat answers or falls back fast. */
const REQUEST_TIMEOUT_MS = 8000;

function apiUrl(accountId: string): string {
    return `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`;
}

/** The most a shortlist may hold, so one request can never grow unbounded. */
export const MAX_CANDIDATES = 12;

/**
 * The candidate questions, each with the name to reply with. The answers
 * themselves are not sent: the model's whole job is to name one.
 */
function answerList(candidates: KnowledgeEntry[]): string {
    return candidates.map((entry) => `${entry.id}: ${entry.question}`).join('\n');
}

export function buildRouterPrompt(candidates: KnowledgeEntry[]): string {
    return [
        'You match a parent\'s question to one answer on a tutoring website. You never write an answer yourself.',
        '',
        'Reply with one id from the list, and nothing else. No punctuation, no explanation.',
        `If no answer on the list really fits, reply exactly: ${NO_MATCH}`,
        'Choose an answer only if it directly answers the question that was asked.',
        'A specific problem to work out is not the same as the idea behind it. One equation, expression or',
        `set of numbers to solve is never a match for an answer about the method, so reply ${NO_MATCH}.`,
        'If the question is about something none of the answers mention, such as swapping tutors, refunds,',
        `cancelling, guarantees or discounts, reply ${NO_MATCH}. A wrong match is worse than none.`,
        '',
        'Examples:',
        'Question: how much for year 11 -> one-on-one-price',
        'Question: can we swap tutors if it is not a good fit -> none',
        'Question: can we pause lessons over the holidays -> none',
        'Question: do you set homework -> faq-homework-and-notes',
        `Question: y = 2x^2 + 4x - 7 -> ${NO_MATCH}`,
        `Question: solve 3x^2 - 5x + 1 = 0 -> ${NO_MATCH}`,
        '',
        'Answers available:',
        answerList(candidates),
    ].join('\n');
}

interface WorkersAiResponse {
    result?: { response?: string };
}

/** The model's reply is only useful if it names one of the offered answers. */
function validEntryId(reply: string | undefined, candidates: KnowledgeEntry[]): string | null {
    if (!reply) {
        return null;
    }

    const cleaned = reply.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    return candidates.some((entry) => entry.id === cleaned) ? cleaned : null;
}

/** The shortlisted entries for these names, ignoring anything unrecognised. */
export function candidatesFromIds(ids: unknown): KnowledgeEntry[] {
    if (!Array.isArray(ids)) {
        return [];
    }

    return ids
        .filter((id): id is string => typeof id === 'string')
        .map((id) => knowledgeEntries.find((entry) => entry.id === id))
        .filter((entry): entry is KnowledgeEntry => entry !== undefined)
        .slice(0, MAX_CANDIDATES);
}

/**
 * Asks which approved answer fits a question, returning its id, or null when
 * none fits or an answer cannot be produced for any reason: unconfigured keys,
 * a spent daily allowance, a timeout, an error status, or an unusable reply.
 */
export async function chooseAnswerId(
    question: string,
    candidates: KnowledgeEntry[],
): Promise<string | null> {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_AI_API_TOKEN;
    if (!accountId || !apiToken || candidates.length === 0) {
        return null;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
        const response = await fetch(apiUrl(accountId), {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: buildRouterPrompt(candidates) },
                    { role: 'user', content: question },
                ],
                max_tokens: MAX_OUTPUT_TOKENS,
                temperature: TEMPERATURE,
            }),
            signal: controller.signal,
        });

        if (!response.ok) {
            return null;
        }

        const payload = (await response.json()) as WorkersAiResponse;
        return validEntryId(payload.result?.response, candidates);
    } catch {
        /* Timeouts, aborts and network failures all mean the same thing here. */
        return null;
    } finally {
        clearTimeout(timer);
    }
}
