/**
 * Working scientifically: reports, variables and referencing.
 *
 * The parts of an investigation that are assessed the same way in every
 * science, gathered once rather than repeated per subject.
 */
import type { StudyEntry } from './types';

export const scientificMethodEntries: StudyEntry[] = [
    {
        id: 'chem-control-variable',
        subject: 'chemistry',
        question: 'What is a control variable in a chemistry experiment?',
        aliases: ['control variable in chemistry', 'controlled variables chemistry', 'keeping conditions constant chemistry'],
        answer:
            'A quantity kept the same so it cannot explain the result: temperature, concentration, volume, surface ' +
            'area, pressure and the mass of catalyst. Naming one earns little; saying how you kept it constant is ' +
            'what the marking guide rewards.',
    },
    {
        id: 'chem-report-structure',
        subject: 'chemistry',
        question: 'What is the structure of a scientific report?',
        aliases: ['scientific report structure', 'practical report sections', 'how to lay out a prac report'],
        answer:
            'Aim, hypothesis, materials, method, results, discussion, conclusion, and a reference list, with an ' +
            'abstract at the front for a longer report. Results present the data without interpreting it; the ' +
            'interpretation belongs in the discussion.',
    },
    {
        id: 'chem-discussion-section',
        subject: 'chemistry',
        question: 'What goes in the discussion section of a report?',
        aliases: ['discussion section', 'what to write in a discussion', 'analysing results in a report'],
        answer:
            'What the results show, whether they support the hypothesis, how they compare with accepted values, the ' +
            'sources of error and their likely direction, the limitations, and what would be done differently. It is ' +
            'the section where marks are concentrated.',
    },
    {
        id: 'chem-referencing-science',
        subject: 'chemistry',
        question: 'How do I reference a source in a science report?',
        aliases: ['referencing in science', 'citing a source in a report', 'reference list science'],
        answer:
            'Cite in the text where the information is used and list full details at the end, following one system ' +
            'consistently, usually author and date. Include the access date for a website, since online material ' +
            'changes.',
    },
    {
        id: 'bio-hypothesis-versus-prediction',
        subject: 'biology',
        question: 'What is the difference between a hypothesis and a prediction?',
        aliases: ['hypothesis versus prediction', 'is a hypothesis a prediction', 'testable statement'],
        answer:
            'A hypothesis is a testable proposed explanation, usually stating a relationship between variables. A ' +
            'prediction is what you expect to observe if it is true, often in if and then form. The hypothesis ' +
            'explains; the prediction is what the experiment checks.',
    },
];
