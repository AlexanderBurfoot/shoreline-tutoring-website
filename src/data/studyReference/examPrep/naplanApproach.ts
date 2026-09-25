/**
 * NAPLAN: how the tests work and how to approach them.
 *
 * The format, the online platform, timing, and what preparation actually helps.
 */
import type { StudyEntry } from '../types';

export const naplanApproachEntries: StudyEntry[] = [
    {
        id: 'nap-writing-setting-economy',
        subject: 'naplan',
        question: 'How much description does a setting need?',
        aliases: ['how much description', 'setting in a short piece', 'describing economically'],
        answer:
            'Two or three specific details, chosen for the mood you want, and then get on with the story. A paragraph ' +
            'of description before anything happens loses the reader and the marks for structure.',
    },
    {
        id: 'nap-writing-punctuation-marks',
        subject: 'naplan',
        question: 'Which punctuation earns marks in NAPLAN writing?',
        aliases: ['punctuation marks in writing criteria', 'using a range of punctuation', 'commas and apostrophes in writing'],
        answer:
            'Correct sentence punctuation first, then commas in lists and after introductory phrases, apostrophes, ' +
            'and speech punctuation. A range used correctly scores above a wider range used wrongly.',
    },
    {
        id: 'nap-writing-spelling-strategy',
        subject: 'naplan',
        question: 'What should I do about a word I cannot spell?',
        aliases: ['word i cannot spell', 'spelling in the writing task', 'choosing a simpler word'],
        answer:
            'Write it as close as you can, or choose a word you know, but do not avoid the idea. Spelling is one ' +
            'criterion among ten, so losing the idea to protect the spelling is a bad trade.',
    },
    {
        id: 'nap-numeracy-question-format',
        subject: 'naplan',
        question: 'What kinds of numeracy question appear?',
        aliases: ['numeracy question formats', 'multiple choice and typed answers', 'drag and drop numeracy'],
        answer:
            'Multiple choice, typed numerical answers, and interactive formats such as dragging items or marking a ' +
            'point. For typed answers, check the unit asked for and whether a decimal or fraction is expected.',
    },
    {
        id: 'nap-numeracy-working-out',
        subject: 'naplan',
        question: 'Should I show working in NAPLAN numeracy?',
        aliases: ['showing working in naplan', 'rough paper for numeracy', 'working out on screen'],
        answer:
            'Only the answer is marked, but working on the provided paper prevents errors and lets you check. Holding ' +
            'a multi-step calculation in your head is where most avoidable mistakes come from.',
    },
    {
        id: 'nap-numeracy-unit-check',
        subject: 'naplan',
        question: 'Why do I keep losing marks on units?',
        aliases: ['losing marks on units', 'answer in the wrong unit', 'checking the unit asked for'],
        answer:
            'Because the question and the data often use different units, and the answer must match the one ' +
            'requested. Circle the unit in the question before calculating, then check the answer against it.',
    },
    {
        id: 'nap-numeracy-diagram-reading',
        subject: 'naplan',
        question: 'How do I read a diagram in a numeracy question?',
        aliases: ['reading a diagram', 'not to scale diagram', 'labels on a diagram'],
        answer:
            'Read every label and note anything marked not to scale, since the drawing may mislead deliberately. Add ' +
            'the information from the text onto the diagram before starting, so everything is in one place.',
    },
    {
        id: 'nap-numeracy-multi-part',
        subject: 'naplan',
        question: 'How do I handle a question with several pieces of information?',
        aliases: ['question with lots of information', 'multi part numeracy question', 'organising the information'],
        answer:
            'List what you are given and what is asked, then work out what connects them. Some information is ' +
            'deliberately not needed, so identifying what the question actually wants is part of the task.',
    },
    {
        id: 'nap-parents-role',
        subject: 'naplan',
        question: 'How can a parent help with NAPLAN?',
        aliases: ['how parents can help naplan', 'supporting a child for naplan', 'parent role naplan'],
        answer:
            'Keep it in proportion, ensure sleep and breakfast, read with or near the child, and follow up any gap ' +
            'the report reveals. Treating it as a major event raises anxiety, which lowers the result it was meant to ' +
            'improve.',
    },
    {
        id: 'nap-results-use',
        subject: 'naplan',
        question: 'What should we do with the NAPLAN report?',
        aliases: ['using naplan results', 'reading the report', 'acting on naplan results'],
        answer:
            'Use it to find specific gaps, comparing the areas within the report rather than the overall band, then ' +
            'raise those with the teacher. It describes one morning of work and is most useful as a prompt for a ' +
            'conversation.',
    },
];
