/**
 * The study reference bank: the formulas and definitions Archimedes can quote.
 *
 * Every answer here is written by hand and shown exactly as written. Nothing is
 * generated, so the assistant cannot state a formula that was never approved.
 * Adding a question means adding an entry to one of the subject files.
 */

/** The subjects the bank covers, each mapping to a page on the site. */
export type StudySubject = 'mathematics' | 'physics' | 'chemistry' | 'biology' | 'english';

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
