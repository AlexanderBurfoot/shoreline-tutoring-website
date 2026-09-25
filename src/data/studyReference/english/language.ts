/**
 * English: grammar and language choices as objects of analysis.
 *
 * What sentence structure, voice, modality and punctuation do to a reader, and
 * how to write about them.
 */
import type { StudyEntry } from '../types';

export const englishLanguageEntries: StudyEntry[] = [
    {
        id: 'eng-sentence-types',
        subject: 'english',
        question: 'What are the sentence types and why do they matter?',
        aliases: ['simple compound complex sentence', 'sentence types', 'varying sentence structure'],
        answer:
            'Simple has one clause, compound joins two equal clauses, and complex attaches a subordinate clause. ' +
            'Complex sentences subordinate one idea to another, so choosing one is an argument about which idea ' +
            'matters, not only a stylistic choice.',
    },
    {
        id: 'eng-clause-analysis',
        subject: 'english',
        question: 'How do I write about clause structure in an analysis?',
        aliases: ['clause structure analysis', 'subordinate clause effect', 'delaying the main clause'],
        answer:
            'Say what the arrangement does to the reader: a long subordinate opening delays the main clause and ' +
            'builds anticipation, while a string of short main clauses creates urgency. Name the structure, then its ' +
            'effect.',
    },
    {
        id: 'eng-fragment-effect',
        subject: 'english',
        question: 'Can a sentence fragment be deliberate?',
        aliases: ['sentence fragment for effect', 'deliberate fragment', 'incomplete sentence in writing'],
        answer:
            'Yes, in creative and discursive writing, where a fragment isolates a word or image for emphasis. It ' +
            'reads as an error unless the surrounding sentences are controlled, which is why it works only ' +
            'occasionally.',
    },
    {
        id: 'eng-nominalisation',
        subject: 'english',
        question: 'What is nominalisation and when is it useful?',
        aliases: ['nominalisation', 'turning verbs into nouns', 'abstract noun style'],
        answer:
            'Turning a process into a noun, so decided becomes decision. It compresses information and sounds formal ' +
            'and objective, which suits analysis, but overused it removes the agent and makes prose abstract and ' +
            'evasive.',
    },
    {
        id: 'eng-active-passive-choice',
        subject: 'english',
        question: 'When should I use the passive voice?',
        aliases: ['passive voice use', 'when passive is better', 'hiding the agent'],
        answer:
            'When the agent is unknown, unimportant, or deliberately concealed. Mistakes were made is passive ' +
            'precisely to obscure who made them, which makes noticing the passive a tool of analysis as well as a ' +
            'writing choice.',
    },
    {
        id: 'eng-modality-scale',
        subject: 'english',
        question: 'How do I write about modality?',
        aliases: ['modality', 'high and low modality', 'degree of certainty in language'],
        answer:
            'Modality is the degree of certainty or obligation: must and never are high, might and sometimes are low. ' +
            'High modality asserts authority, low modality hedges, and a shift between them within a text is usually ' +
            'doing persuasive work.',
    },
    {
        id: 'eng-pronoun-positioning',
        subject: 'english',
        question: 'How do pronouns position a reader?',
        aliases: ['inclusive pronoun', 'second person address', 'us and them in a text'],
        answer:
            'Inclusive we builds a shared position with the reader, you addresses them directly and creates ' +
            'obligation, and they creates distance or opposition. A speech that moves from I to we is claiming to ' +
            'speak for the audience.',
    },
    {
        id: 'eng-tense-in-analysis',
        subject: 'english',
        question: 'What tense should I write my analysis in?',
        aliases: ['tense for essay writing', 'present tense for analysis', 'writing about a text tense'],
        answer:
            'Present tense for what a text does, since the text continues to do it, and past tense only for ' +
            'historical context. Orwell writes, not Orwell wrote, when you mean the effect on a reader now.',
    },
    {
        id: 'eng-punctuation-for-effect',
        subject: 'english',
        question: 'How can punctuation be analysed?',
        aliases: ['punctuation for effect', 'dash for interruption', 'colon before a revelation', 'ellipsis effect'],
        answer:
            'A dash interrupts, a colon announces, a semicolon balances two ideas as equals, and an ellipsis trails ' +
            'off. Each controls pace and expectation, so punctuation is part of the meaning rather than decoration on ' +
            'it.',
    },
    {
        id: 'eng-syntax-inversion',
        subject: 'english',
        question: 'What is the effect of unusual word order?',
        aliases: ['inversion', 'unusual syntax', 'word order for emphasis'],
        answer:
            'Moving a word out of its expected place emphasises it. Never have I seen such a thing puts the negation ' +
            'first and sounds heightened, which is why inversion is common in poetry and oratory.',
    },
    {
        id: 'eng-repetition-analysis',
        subject: 'english',
        question: 'How do I write about repetition without stating the obvious?',
        aliases: ['analysing repetition', 'what repetition achieves', 'cumulative effect of repetition'],
        answer:
            'Say what accumulates: insistence, inevitability, obsession, or a rhythm the reader starts to expect. ' +
            'Then note what happens when the pattern breaks, since the break is usually where the meaning turns.',
    },
    {
        id: 'eng-register',
        subject: 'english',
        question: 'What is register and how do I write about it?',
        aliases: ['register', 'formal and informal language', 'colloquial language effect'],
        answer:
            'The level of formality a text adopts for its audience and purpose. Colloquial language builds intimacy ' +
            'and trust, formal register claims authority, and a shift between them signals a change in the ' +
            'relationship being offered.',
    },
];
