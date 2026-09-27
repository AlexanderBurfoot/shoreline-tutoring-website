/**
 * The study reference bank: the formulas and definitions Archimedes can quote.
 *
 * Every answer here is written by hand and shown exactly as written. Nothing is
 * generated, so the assistant cannot state a formula that was never approved.
 * Adding a question means adding an entry to one of the subject files.
 */

/**
 * The subjects the bank covers. Each must be a published subject page, which
 * the tests check: a bank for a subject the site does not offer would link
 * students to a page that is not there.
 */
export type StudySubject =
    | 'mathematics'
    | 'physics'
    | 'chemistry'
    | 'biology'
    | 'english'
    | 'economics'
    | 'business-studies'
    | 'selective-high-school'
    | 'oc-prep'
    | 'naplan';

export interface StudyEntry {
    /** Unique across every subject, e.g. 'maths-sphere-volume'. */
    id: string;
    subject: StudySubject;
    /** The question as the bank asks it, shown when the answer is offered. */
    question: string;
    /**
     * Other ways students type it, including symbols and abbreviations, e.g.
     * 'ΔG', 'delta g', 'gibbs'. Matching is done on these as well as on the
     * question, so a student never has to guess our wording.
     */
    aliases: string[];
    /**
     * The answer, as one short paragraph: the formula or definition first, then
     * what it means in plain language. Written for a student to read on a
     * phone, so no more than a few sentences.
     */
    answer: string;
}
