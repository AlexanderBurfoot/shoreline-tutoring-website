/**
 * Spots a request to complete assessed work rather than to understand something.
 *
 * Archimedes explains and points to the reference bank; he does not hand over
 * answers to a task a student will submit as their own. That protects the
 * student, and it protects a tutoring business whose reputation rests on
 * teaching rather than on doing the work for them.
 *
 * It errs towards letting questions through: a false positive turns an ordinary
 * question into an offer of help, which is a smaller cost than quietly doing
 * someone's assessment.
 */

/** Phrases that describe work being handed in rather than a concept to learn. */
const ASSESSMENT_PATTERNS: RegExp[] = [
    /\b(assessment|assignment|take[- ]home)\b/i,
    /\bmy (homework|essay|report|prac|practical|task)\b/i,
    /\b(do|answer|solve|complete|write|finish) (this|my|these|the following)\b/i,
    /\bquestion \d+\b/i,
    /\bpart [a-d]\b/i,
    /\bdue (today|tomorrow|tonight|in an hour)\b/i,
    /\bwrite (me )?(an?|the) (essay|paragraph|report|speech)\b/i,
];

export function looksLikeAssessmentRequest(question: string): boolean {
    return ASSESSMENT_PATTERNS.some((pattern) => pattern.test(question));
}
