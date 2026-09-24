/**
 * What the assistant replies, and where the reply came from.
 *
 * Kept apart from the chat window so the decisions can be tested on their own:
 * answer from the site's own content, ask the AI fallback, or point to the
 * enquiry form.
 */
import { findEntryById, type KnowledgeLink } from '../data/chatbotKnowledge';
import { findBestMatch } from './chatbotMatching';
import { MAX_QUESTION_LENGTH } from './chatbotFallback';
import { redactPersonalDetails } from './redactPersonalDetails';

/**
 * Where an answer came from. Both 'knowledge' and 'ai' show wording from this
 * site; they differ only in what chose it, keyword matching or the model, and
 * an AI choice is labelled so a visitor can tell.
 */
export type ReplySource = 'knowledge' | 'ai' | 'fallback';

export interface ChatReply {
    text: string;
    link?: KnowledgeLink;
    source: ReplySource;
}

export interface ResolvedQuestion {
    /** What is shown as the visitor's message, with contact details removed. */
    question: string;
    /** True when something was removed, so the chat can say so once. */
    redacted: boolean;
    reply: ChatReply;
}

export const ENQUIRY_FALLBACK_LINK: KnowledgeLink = { label: 'Send an enquiry', href: '/#contact' };

/** Said when nothing matches and the AI cannot help either. */
export const FALLBACK_TEXT =
    'That one is beyond me, I am afraid. Our team can answer it properly:';

/** Shown once when contact details were taken out of a question. */
export const REDACTION_NOTICE =
    'I have taken the contact details out of your message. Please send those through the enquiry form instead.';

const TOO_LONG_TEXT = `Could you shorten that to under ${MAX_QUESTION_LENGTH} characters? Or send it to our team as it is:`;

/**
 * Asks the server which approved answer fits, returning its name, or null
 * whenever no answer is available. Only a name crosses the wire, so no text a
 * model wrote can reach the page.
 */
export async function requestAiAnswerId(question: string, fetchImpl: typeof fetch = fetch): Promise<string | null> {
    try {
        const response = await fetchImpl('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question }),
        });

        if (!response.ok) {
            return null;
        }

        const payload = (await response.json()) as { entryId?: string | null };
        return payload.entryId ?? null;
    } catch {
        /* Offline, blocked or a server error: the enquiry form is the answer. */
        return null;
    }
}

export interface ResolveOptions {
    /** Swapped out in tests; defaults to asking the chat route. */
    askAi?: (question: string) => Promise<string | null>;
}

/**
 * Works out the reply to a typed question. Contact details are removed first,
 * then the site's own answers are searched by keyword, and only a question that
 * matches nothing is sent on for the model to place against the same answers.
 */
export async function resolveQuestion(
    rawQuestion: string,
    { askAi = requestAiAnswerId }: ResolveOptions = {},
): Promise<ResolvedQuestion> {
    const { text: question, redacted } = redactPersonalDetails(rawQuestion.trim());

    if (question.length > MAX_QUESTION_LENGTH) {
        return {
            question,
            redacted,
            reply: { text: TOO_LONG_TEXT, link: ENQUIRY_FALLBACK_LINK, source: 'fallback' },
        };
    }

    const match = findBestMatch(question);
    if (match) {
        return {
            question,
            redacted,
            reply: { text: match.entry.answer, link: match.entry.link, source: 'knowledge' },
        };
    }

    const chosen = findEntryById((await askAi(question)) ?? '');
    if (chosen) {
        return {
            question,
            redacted,
            reply: { text: chosen.answer, link: chosen.link, source: 'ai' },
        };
    }

    return {
        question,
        redacted,
        reply: { text: FALLBACK_TEXT, link: ENQUIRY_FALLBACK_LINK, source: 'fallback' },
    };
}
