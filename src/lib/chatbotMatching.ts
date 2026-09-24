/**
 * Matches a typed question against the assistant's own answers.
 *
 * This runs in the browser, so a question that matches never leaves the
 * visitor's device. Only questions with no confident match are sent on to the
 * server, which keeps both the daily AI allowance and what parents type to a
 * minimum.
 */
import { knowledgeEntries, type KnowledgeEntry } from '../data/chatbotKnowledge';

/**
 * How much of a question has to be recognised before an answer is offered.
 * Raising it makes the assistant quieter and sends more questions to the AI
 * fallback; lowering it risks confidently wrong answers.
 *
 * Measured over a set of real questions: at 0.45 every question the bank covers
 * was answered correctly, but two questions it does not cover were answered
 * anyway. At 0.5 the correct answers all survive and one of those goes away, so
 * 0.5 is the better trade. Above 0.6 genuine questions start being refused.
 */
export const MATCH_THRESHOLD = 0.45;

/** Added to the score for each whole keyword phrase found in the question. */
const PHRASE_BONUS = 0.15;

/**
 * A whole keyword phrase found in the question is strong evidence on its own:
 * someone who types "z score" or "chain rule" wants that entry, even though
 * neither word alone means much. Such a match scores at least this.
 */
const PHRASE_MATCH_FLOOR = 0.8;

/** Words too common to tell two questions apart. */
const STOP_WORDS = new Set([
    'a', 'about', 'am', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'been', 'by', 'can', 'could',
    'did', 'do', 'does', 'for', 'from', 'get', 'go', 'had', 'has', 'have', 'he', 'her', 'his', 'how',
    'i', 'if', 'in', 'is', 'it', 'its', 'me', 'my', 'of', 'on', 'or', 'our', 'out', 'she', 'should',
    'so', 'the', 'their', 'them', 'there', 'they', 'this', 'to', 'up', 'us', 'was', 'we', 'what',
    'when', 'where', 'which', 'who', 'why', 'will', 'with', 'would', 'you', 'your',
]);

/** Parents' wordings mapped onto the words the answers are written with. */
const SYNONYMS = new Map<string, string>([
    ['cost', 'price'],
    ['costs', 'price'],
    ['charge', 'price'],
    ['charges', 'price'],
    ['fee', 'price'],
    ['fees', 'price'],
    ['rate', 'price'],
    ['rates', 'price'],
    ['expensive', 'price'],
    ['cheap', 'price'],
    ['tutor', 'tutoring'],
    ['tutors', 'tutoring'],
    ['teach', 'tutoring'],
    ['teaches', 'tutoring'],
    ['teaching', 'tutoring'],
    ['cover', 'tutoring'],
    ['covers', 'tutoring'],
    ['lessons', 'lesson'],
    ['classes', 'class'],
    ['sessions', 'session'],
    ['kid', 'child'],
    ['kids', 'child'],
    ['son', 'child'],
    ['daughter', 'child'],
    ['children', 'child'],
    ['student', 'child'],
    ['maths', 'mathematics'],
    ['math', 'mathematics'],
    ['book', 'booking'],
    ['enrol', 'booking'],
    ['enroll', 'booking'],
    ['signup', 'booking'],
    ['start', 'starting'],
    ['begin', 'starting'],
    ['begins', 'starting'],
    ['zoom', 'online'],
    ['located', 'location'],
    ['locate', 'location'],
    ['based', 'location'],
    ['remote', 'online'],
    ['virtual', 'online'],
    ['face-to-face', 'person'],
    ['home', 'house'],
    ['free', 'trial'],
]);

/**
 * Symbols students type, spelled out so they survive the strip below. Without
 * this, "ΔG" becomes "g" and "πr²" becomes "r", and a question about Gibbs free
 * energy or the area of a circle matches nothing.
 */
const SYMBOL_WORDS = new Map<string, string>([
    ['Δ', ' delta '],
    ['δ', ' delta '],
    ['π', ' pi '],
    ['θ', ' theta '],
    ['λ', ' lambda '],
    ['μ', ' mu '],
    ['σ', ' sigma '],
    ['Σ', ' sum '],
    ['ω', ' omega '],
    ['Ω', ' ohms '],
    ['α', ' alpha '],
    ['β', ' beta '],
    ['γ', ' gamma '],
    ['√', ' root '],
    ['∫', ' integral '],
    ['∞', ' infinity '],
    ['°', ' degrees '],
    ['±', ' plus minus '],
    ['²', '2'],
    ['³', '3'],
    ['⁻', '-'],
]);

/** Lowercase, spell out symbols, drop punctuation, collapse whitespace. */
export function normalise(text: string): string {
    const spelled = [...text]
        .map((character) => SYMBOL_WORDS.get(character) ?? character)
        .join('');

    return spelled
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

/** Trailing plural "s" is dropped so "prices" and "price" match. */
function singularise(word: string): string {
    return word.length > 3 && word.endsWith('s') && !word.endsWith('ss') ? word.slice(0, -1) : word;
}

/**
 * The meaning-carrying words of a phrase, with wordings folded together.
 *
 * Single characters are kept: in this bank "g", "h" and "s" are the difference
 * between ΔG, ΔH and ΔS. On their own they are weak signals, which the weighting
 * further down already accounts for.
 */
export function tokenise(text: string): string[] {
    return normalise(text)
        .split(' ')
        .filter((word) => word.length > 0 && !STOP_WORDS.has(word))
        .map((word) => SYNONYMS.get(word) ?? singularise(word));
}

/**
 * What an entry can be recognised by, worked out once and kept.
 *
 * Scoring compares a question against every entry in the bank, so without this
 * the same entry is tokenised hundreds of times per keystroke. The bank is now
 * large enough for that to be felt.
 */
interface EntryIndex {
    /**
     * Every word: the question, plus the keywords that are single words.
     *
     * A keyword of several words counts only as a phrase, never as its separate
     * words. Otherwise "time and a half" lends an entry about wages the words
     * "time" and "half", and a question about what time the bus leaves finds it.
     */
    tokens: Set<string>;
    /** Multi-word keywords, matched against the question as whole phrases. */
    phrases: string[];
}

const entryIndexCache = new WeakMap<KnowledgeEntry, EntryIndex>();

function indexOf(entry: KnowledgeEntry): EntryIndex {
    const cached = entryIndexCache.get(entry);
    if (cached) {
        return cached;
    }

    const normalisedKeywords = entry.keywords.map(normalise);
    const index: EntryIndex = {
        tokens: new Set([
            ...tokenise(entry.question),
            ...normalisedKeywords.filter((keyword) => !keyword.includes(' ')).flatMap(tokenise),
        ]),
        phrases: normalisedKeywords.filter((keyword) => keyword.includes(' ')),
    };
    entryIndexCache.set(entry, index);
    return index;
}

/**
 * How telling each word is. A word in nearly every answer, such as "lesson",
 * says little about which answer is wanted; one in a single answer, such as
 * "booking", says almost everything. Without this, a question like "when do
 * group classes start" matches whichever answer happens to mention classes
 * first rather than the one about start dates.
 */
interface SearchIndex {
    weights: Map<string, number>;
    /** Weight for a word no answer contains, which is as telling as a word can be. */
    unknownWeight: number;
}

const indexCache = new WeakMap<KnowledgeEntry[], SearchIndex>();

function buildIndex(entries: KnowledgeEntry[]): SearchIndex {
    const entryCounts = new Map<string, number>();
    for (const entry of entries) {
        for (const token of indexOf(entry).tokens) {
            entryCounts.set(token, (entryCounts.get(token) ?? 0) + 1);
        }
    }

    const weights = new Map<string, number>();
    for (const [token, count] of entryCounts) {
        weights.set(token, Math.log(entries.length / count) + 1);
    }

    return { weights, unknownWeight: Math.log(entries.length) + 1 };
}

function indexFor(entries: KnowledgeEntry[]): SearchIndex {
    const cached = indexCache.get(entries);
    if (cached) {
        return cached;
    }

    const index = buildIndex(entries);
    indexCache.set(entries, index);
    return index;
}

function weightOf(token: string, index: SearchIndex): number {
    return index.weights.get(token) ?? index.unknownWeight;
}

/**
 * How much of a question an entry accounts for, from 0 to 1, counting each word
 * by how telling it is. A whole keyword phrase found in the question adds a
 * further bonus, so "group classes" beats an entry that merely mentions classes.
 */
export function scoreEntry(
    question: string,
    entry: KnowledgeEntry,
    entries: KnowledgeEntry[] = knowledgeEntries,
): number {
    const queryTokens = tokenise(question);
    if (queryTokens.length === 0) {
        return 0;
    }

    const index = indexFor(entries);
    const { tokens: recognised, phrases } = indexOf(entry);

    let matched = 0;
    let total = 0;
    for (const token of queryTokens) {
        const weight = weightOf(token, index);
        total += weight;
        if (recognised.has(token)) {
            matched += weight;
        }
    }

    const normalisedQuestion = normalise(question);
    const phraseMatches = phrases.filter((phrase) => normalisedQuestion.includes(phrase)).length;

    const score = matched / total + phraseMatches * PHRASE_BONUS;
    return Math.min(phraseMatches > 0 ? Math.max(score, PHRASE_MATCH_FLOOR) : score, 1);
}

export interface Match {
    entry: KnowledgeEntry;
    score: number;
}

/**
 * The best answer for a typed question, or null when nothing is a confident
 * enough match and the question should go to the AI fallback instead.
 */
export function findBestMatch(question: string, entries: KnowledgeEntry[] = knowledgeEntries): Match | null {
    let best: Match | null = null;

    for (const entry of entries) {
        const score = scoreEntry(question, entry, entries);
        if (!best || score > best.score) {
            best = { entry, score };
        }
    }

    return best && best.score >= MATCH_THRESHOLD ? best : null;
}

/**
 * The entries worth asking the model about, best first.
 *
 * Only these are sent to the server, and only their names: a shortlist keeps the
 * request small and the choice accurate, where a list of every answer would make
 * a small model guess.
 */
export function shortlist(
    question: string,
    limit: number,
    entries: KnowledgeEntry[] = knowledgeEntries,
): KnowledgeEntry[] {
    return entries
        .map((entry) => ({ entry, score: scoreEntry(question, entry, entries) }))
        .filter((candidate) => candidate.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((candidate) => candidate.entry);
}
