/**
 * Biology: Working Scientifically.
 *
 * Designing biological investigations and presenting their data.
 */
import type { StudyEntry } from '../types';

export const biologySkillsEntries: StudyEntry[] = [
    {
        id: 'bio-scientific-method-bio',
        subject: 'biology',
        question: 'How do I write a hypothesis and design a biology experiment?',
        aliases: ['hypothesis', 'controlled experiment', 'depth study', 'variables biology', 'sample size'],
        answer:
            'A hypothesis is a testable prediction linking the independent and dependent variables. ' +
            'Control every other variable, use a control group, and keep the sample large enough for the result to ' +
            'mean something. Living things vary, so repeats matter more here than in physics.',
    },
    {
        id: 'bio-depth-study-data',
        subject: 'biology',
        question: 'How do I analyse a set of results?',
        aliases: ['analysing results', 'mean and range', 'anomalous results', 'interpreting a trend'],
        answer:
            'Calculate a mean from the repeats and note the range, then describe the pattern using figures from your ' +
            'own results. ' +
            'Explain it with biology rather than restating the numbers. ' +
            'Identify anomalies and say what might have caused them rather than quietly dropping them.',
    },
    {
        id: 'bio-graphing-biology',
        subject: 'biology',
        question: 'How should I present biological data?',
        aliases: ['graphing biology', 'choosing a graph', 'error bars biology', 'tables of results', 'trends in data'],
        answer:
            'Put the independent variable on the x-axis, label both axes with units, and choose a line graph for ' +
            'continuous data or a column graph for categories. ' +
            'Plot means from repeats, show the spread if you can, and describe the trend with figures from your own ' +
            'data before explaining it.',
    },
    {
        id: 'bio-controls-biology',
        subject: 'biology',
        question: 'Why does a biology experiment need a control?',
        aliases: ['control group', 'controlled experiment biology', 'placebo', 'comparison group'],
        answer:
            'A control provides the comparison that shows the change came from the variable you altered rather than ' +
            'from something else. ' +
            'In trials a placebo group controls for the effect of believing you are treated, and blinding stops ' +
            'expectations from shifting the measurements.',
    },
    {
        id: 'bio-ethics-animals',
        subject: 'biology',
        question: 'What ethical rules apply to biological investigations?',
        aliases: ['ethics biology', 'animal ethics', 'informed consent', 'working with living things'],
        answer:
            'Work with living things needs a justification, the minimum number of organisms, and care to avoid harm. ' +
            'Human participants must give informed consent and have their data kept private. ' +
            'School investigations usually substitute models or existing data where the ethical cost would be real.',
    },
];
