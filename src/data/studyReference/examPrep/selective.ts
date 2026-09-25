/**
 * Selective High School Placement Test.
 *
 * What the test assesses in reading, mathematical reasoning, thinking skills
 * and writing, at Year 6 level.
 */
import type { StudyEntry } from '../types';

export const selectiveEntries: StudyEntry[] = [
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
        aliases: ['thinking skills', 'critical thinking questions', 'logical reasoning', 'flaw in argument'],
        answer:
            'Short logic and reasoning puzzles: find the conclusion, the assumption it rests on, or the flaw in an ' +
            'argument, and solve deduction problems from a set of clues. ' +
            'Read the question before the passage, and answer only from what is stated, not from what you know.',
    },
    {
        id: 'sel-reading-strategy',
        subject: 'selective-high-school',
        question: 'How do I approach the reading section?',
        aliases: ['reading test strategy', 'comprehension strategy', 'cloze passage', 'inference question'],
        answer:
            'Skim for structure first, then read the question and hunt for the evidence. ' +
            'Every answer must be supported by the text, so eliminate options that are true in general but not stated. ' +
            'For paragraph-matching, use the linking words at the start of each option.',
    },
    {
        id: 'sel-maths-reasoning',
        subject: 'selective-high-school',
        question: 'How do I prepare for mathematical reasoning?',
        aliases: ['mathematical reasoning', 'problem solving maths', 'word problems'],
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
    {
        id: 'sel-number-reasoning',
        subject: 'selective-high-school',
        question: 'What number skills does the Selective test assume?',
        aliases: ['selective number', 'year 6 number', 'fractions decimals percentages test', 'ratio year 6'],
        answer:
            'Fluent work with fractions, decimals, percentages, ratio and rate, negative numbers and simple powers. ' +
            'Questions rarely ask for a calculation alone: they wrap it in a situation, so the skill is choosing the ' +
            'operation quickly and being accurate under time pressure.',
    },
    {
        id: 'sel-problem-strategies',
        subject: 'selective-high-school',
        question: 'What strategies help with hard problems?',
        aliases: ['problem solving strategies', 'trial and improvement', 'drawing a diagram', 'simplifying a problem'],
        answer:
            'Work backwards from the answer options, try a smaller version of the problem, draw a diagram, or look ' +
            'for a pattern. ' +
            'Substituting the options into the question is often faster than solving it directly, and the test ' +
            'rewards the fastest correct route, not the most elegant.',
    },
    {
        id: 'sel-ratio-proportion',
        subject: 'selective-high-school',
        question: 'How are ratio and proportion tested?',
        aliases: ['ratio selective', 'proportion problems', 'scaling recipes', 'sharing in a ratio test'],
        answer:
            'As recipes scaled up or down, sharing amounts, map scales, and rates such as speed or price per unit. ' +
            'Find the value of one part or one unit first, then multiply. ' +
            'Check whether the question asks for one share or the difference between two.',
    },
    {
        id: 'sel-area-volume-reasoning',
        subject: 'selective-high-school',
        question: 'What measurement reasoning appears in the test?',
        aliases: ['selective measurement', 'area of composite shapes test', 'volume reasoning', 'units conversion test'],
        answer:
            'Perimeter, area and volume of composite shapes, unit conversions, and questions where a dimension ' +
            'changes and you predict the effect. ' +
            'Doubling a length multiplies area by four and volume by eight, which is a favourite trap.',
    },
    {
        id: 'sel-data-interpretation',
        subject: 'selective-high-school',
        question: 'How do I handle data questions?',
        aliases: ['selective data', 'interpreting graphs test', 'averages test', 'comparing data test'],
        answer:
            'Check the scale and the units before reading values. ' +
            'Questions often ask for a difference, a total or a mean rather than a single reading. ' +
            'For an average, remember the total equals the mean times the count, which lets you work backwards to a ' +
            'missing value.',
    },
    {
        id: 'sel-conclusion-questions',
        subject: 'selective-high-school',
        question: 'How do I answer "which conclusion follows" questions?',
        aliases: ['conclusion question', 'what follows', 'valid conclusion', 'thinking skills conclusion'],
        answer:
            'Accept the stated information as true, even if it seems wrong in reality, then ask what must follow. ' +
            'Reject options that could be true but need extra information. ' +
            'Words such as all, some, only and never change everything, so read them precisely.',
    },
    {
        id: 'sel-assumption-questions',
        subject: 'selective-high-school',
        question: 'How do I find the assumption in an argument?',
        aliases: ['assumption question', 'unstated assumption', 'what the argument relies on', 'thinking skills assumption'],
        answer:
            'An assumption is what the argument needs to be true but never says. ' +
            'Test each option by negating it: if the argument collapses without it, that is the assumption. ' +
            'The right answer usually sounds obvious, which is why it is easy to skip past.',
    },
    {
        id: 'sel-flaw-questions',
        subject: 'selective-high-school',
        question: 'How do I spot the flaw in an argument?',
        aliases: ['flaw in an argument', 'weakness in reasoning', 'circular reasoning', 'confusing correlation'],
        answer:
            'Common flaws: treating correlation as cause, generalising from a small or unusual sample, attacking the ' +
            'person rather than the claim, and assuming two things are the same because they share one feature. ' +
            'Name the gap between the evidence given and the conclusion drawn.',
    },
    {
        id: 'sel-strengthen-weaken',
        subject: 'selective-high-school',
        question: 'How do I answer strengthen and weaken questions?',
        aliases: ['strengthen the argument', 'weaken the argument', 'supporting evidence question', 'undermine'],
        answer:
            'Find the conclusion, then the evidence, then the gap between them. ' +
            'Strengthening closes that gap or rules out an alternative explanation; weakening widens it or supplies ' +
            'one. ' +
            'Options that are merely related to the topic do neither.',
    },
    {
        id: 'sel-comprehension-poetry',
        subject: 'selective-high-school',
        question: 'How do I handle poetry in the reading test?',
        aliases: ['selective poetry', 'poem comprehension test', 'tone in a poem test', 'figurative language test'],
        answer:
            'Work out the situation first: who is speaking, about what. ' +
            'Then look for the shift, where the feeling or argument turns. ' +
            'Questions usually target tone, a figure of speech, or why a particular word was chosen, so read the ' +
            'options against specific lines.',
    },
    {
        id: 'sel-paragraph-matching',
        subject: 'selective-high-school',
        question: 'How do I do paragraph-matching questions?',
        aliases: ['matching paragraphs', 'missing sentence', 'cloze paragraph', 'which sentence fits'],
        answer:
            'Read the sentences either side of the gap and look for the link: a pronoun needing an antecedent, a ' +
            'connective such as however, or a repeated idea. ' +
            'The right option continues the topic and matches the tone, so eliminate any that introduce something ' +
            'the next sentence does not follow.',
    },
    {
        id: 'sel-writing-planning',
        subject: 'selective-high-school',
        question: 'How do I plan the Selective writing task quickly?',
        aliases: ['selective writing plan', 'two minute plan', 'writing task structure', 'planning under time'],
        answer:
            'Two minutes, no more: decide the text type the prompt implies, one clear idea per paragraph, and how it ' +
            'ends. ' +
            'For a narrative that means the complication and resolution; for a persuasive piece, three reasons. ' +
            'A plan stops the piece drifting, which is what costs structure marks.',
    },
    {
        id: 'sel-writing-openings',
        subject: 'selective-high-school',
        question: 'How do I start a piece of writing well?',
        aliases: ['writing opening', 'first sentence', 'hook', 'starting a story test'],
        answer:
            'Start inside the moment rather than setting the scene: an action, a line of dialogue or a sharp image. ' +
            'For persuasive writing, state the position immediately. ' +
            'Avoid opening with the weather or with "Hi, my name is", which markers see hundreds of times.',
    },
    {
        id: 'sel-writing-show-tell',
        subject: 'selective-high-school',
        question: 'What does "show, don\u2019t tell" mean?',
        aliases: ['show dont tell', 'describing emotion', 'writing description', 'imagery in writing test'],
        answer:
            'Instead of naming a feeling, give the detail that produces it: not "she was nervous" but "she read the ' +
            'same line three times". ' +
            'It takes fewer words than it seems and it is the single change that most lifts a piece under exam ' +
            'conditions.',
    },
];
