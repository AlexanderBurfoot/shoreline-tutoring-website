/**
 * Selective High School, Opportunity Class and NAPLAN preparation.
 *
 * These are tests rather than syllabuses, so the bank covers what is assessed,
 * how each paper is structured, and the techniques that earn marks under time
 * pressure. Content questions belong in the subject banks.
 */
import type { StudyEntry } from './types';

export const examPrepEntries: StudyEntry[] = [
    {
        id: 'sel-test-structure',
        subject: 'selective-high-school',
        question: 'What is in the Selective High School Placement Test?',
        aliases: ['selective test', 'selective high school test', 'placement test', 'test sections', 'selective exam'],
        answer:
            'Four parts: reading, mathematical reasoning, thinking skills, and a writing task. ' +
            'Scores combine with school assessment for placement. ' +
            'The questions are designed so few students finish comfortably, which makes pacing part of the test.',
    },
    {
        id: 'sel-thinking-skills',
        subject: 'selective-high-school',
        question: 'What are thinking skills questions?',
        aliases: ['thinking skills', 'critical thinking questions', 'logical reasoning', 'assumption question', 'flaw in argument'],
        answer:
            'Short logic and reasoning puzzles: find the conclusion, the assumption it rests on, or the flaw in an ' +
            'argument, and solve deduction problems from a set of clues. ' +
            'Read the question before the passage, and answer only from what is stated, not from what you know.',
    },
    {
        id: 'sel-reading-strategy',
        subject: 'selective-high-school',
        question: 'How do I approach the reading section?',
        aliases: ['reading test strategy', 'comprehension strategy', 'cloze passage', 'matching paragraphs', 'inference question'],
        answer:
            'Skim for structure first, then read the question and hunt for the evidence. ' +
            'Every answer must be supported by the text, so eliminate options that are true in general but not stated. ' +
            'For paragraph-matching, use the linking words at the start of each option.',
    },
    {
        id: 'sel-maths-reasoning',
        subject: 'selective-high-school',
        question: 'How do I prepare for mathematical reasoning?',
        aliases: ['mathematical reasoning', 'problem solving maths', 'word problems', 'working backwards', 'estimation'],
        answer:
            'These reward method, not speed of calculation: work backwards from the options, estimate to rule out, ' +
            'draw the situation, and look for a pattern. ' +
            'Fluency with fractions, percentages, ratio and area is assumed, so practise those until they are automatic.',
    },
    {
        id: 'sel-writing-task',
        subject: 'selective-high-school',
        question: 'How is the writing task marked?',
        aliases: ['selective writing', 'writing task', 'writing marking criteria', 'persuasive writing test'],
        answer:
            'Markers look at ideas and their development, structure, language and expression, and accuracy in ' +
            'spelling, punctuation and grammar. ' +
            'Plan for two minutes, keep to one clear idea per paragraph, and leave time to reread. ' +
            'A short polished piece beats a long unfinished one.',
    },
    {
        id: 'oc-test-structure',
        subject: 'oc-prep',
        question: 'What is in the Opportunity Class Placement Test?',
        aliases: ['oc test', 'opportunity class test', 'oc placement', 'year 4 test', 'oc exam structure'],
        answer:
            'Reading, mathematical reasoning and thinking skills, sat in Year 4 for entry in Year 5. ' +
            'There is no writing task. ' +
            'The content sits near the top of the Year 4 curriculum, with the difficulty coming from reasoning rather ' +
            'than from unfamiliar topics.',
    },
    {
        id: 'oc-preparation-approach',
        subject: 'oc-prep',
        question: 'How should a Year 4 student prepare for the OC test?',
        aliases: ['oc preparation', 'how to prepare for oc', 'oc practice', 'year 4 preparation'],
        answer:
            'Short, regular practice beats long sessions, and wide reading helps more than any workbook. ' +
            'Work through mistakes rather than counting scores, since the reason an answer was wrong is the thing ' +
            'worth learning. Build up to full timed papers only in the last stretch.',
    },
    {
        id: 'naplan-structure',
        subject: 'naplan',
        question: 'What does NAPLAN test?',
        aliases: ['naplan', 'naplan structure', 'naplan year 3 5 7 9', 'naplan bands', 'naplan online'],
        answer:
            'Reading, writing, language conventions covering spelling, grammar and punctuation, and numeracy, in ' +
            'Years 3, 5, 7 and 9. ' +
            'It is adaptive online, so questions get harder or easier as a student answers. ' +
            'Results report against national proficiency levels.',
    },
    {
        id: 'naplan-writing-rubric',
        subject: 'naplan',
        question: 'How is the NAPLAN writing task marked?',
        aliases: ['naplan writing', 'writing rubric', 'narrative or persuasive', 'naplan writing criteria'],
        answer:
            'Ten criteria, including audience, text structure, ideas, vocabulary, cohesion, paragraphing, sentence ' +
            'structure, punctuation and spelling. ' +
            'The prompt may ask for a narrative or a persuasive piece. ' +
            'Structure and punctuation carry real weight, so planning pays more than extra length.',
    },
    {
        id: 'naplan-numeracy',
        subject: 'naplan',
        question: 'How do I prepare for NAPLAN numeracy?',
        aliases: ['naplan numeracy', 'numeracy practice', 'mental strategies', 'naplan maths'],
        answer:
            'Most marks come from number sense: fractions, decimals, percentages and multiplication facts. ' +
            'Practise reading graphs and tables, and interpreting worded problems into an operation. ' +
            'Mental strategies matter, since a calculator is not available for every section.',
    },
    {
        id: 'exam-time-management',
        subject: 'selective-high-school',
        question: 'How do I manage time in a test?',
        aliases: ['time management exam', 'running out of time', 'pacing a test', 'skipping questions'],
        answer:
            'Work out the seconds per mark before you start, then keep moving: leave anything that stalls you and ' +
            'come back. ' +
            'An unanswered easy question later in the paper costs the same as a hard one you laboured over. ' +
            'If there is no penalty for guessing, never leave a blank.',
    },
    {
        id: 'exam-nerves',
        subject: 'selective-high-school',
        question: 'How do I handle exam nerves?',
        aliases: ['exam nerves', 'test anxiety', 'stress before an exam', 'staying calm'],
        answer:
            'Nerves are normal and mostly useful. Practise under real conditions so the room feels familiar, sleep ' +
            'properly the night before rather than cramming, and slow your breathing before you start. ' +
            'If you freeze, answer an easy question first to get moving again.',
    },
    {
        id: 'sel-vocabulary',
        subject: 'selective-high-school',
        question: 'How do I build vocabulary for the test?',
        aliases: ['vocabulary', 'word knowledge', 'prefix suffix', 'context clues', 'synonyms test'],
        answer:
            'Read widely and look up what you cannot infer, since most test words appear in ordinary books rather ' +
            'than in word lists. ' +
            'Learn common prefixes and roots, so an unfamiliar word can still be narrowed down, and use the sentence ' +
            'around a word for context.',
    },
    {
        id: 'sel-practice-papers',
        subject: 'selective-high-school',
        question: 'How should I use practice papers?',
        aliases: ['practice papers', 'past papers', 'mock test', 'reviewing mistakes', 'trial test'],
        answer:
            'Sit one under real conditions, then spend longer marking it than sitting it. ' +
            'Sort every mistake into careless, method, or did not know, because each needs a different fix. ' +
            'Repeat the same paper a fortnight later to see which fixes held.',
    },
];
