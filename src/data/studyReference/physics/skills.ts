/**
 * Physics: Working Scientifically.
 *
 * The skills examined across every module: measurement, uncertainty and
 * experimental design.
 */
import type { StudyEntry } from '../types';

export const physicsSkillsEntries: StudyEntry[] = [
    {
        id: 'phys-units',
        subject: 'physics',
        question: 'How do I handle units and significant figures?',
        aliases: ['significant figures', 'si units', 'unit conversion', 'scientific notation'],
        answer:
            'Convert to SI units before substituting: metres, kilograms, seconds. ' +
            'Round the final answer to the fewest significant figures of the data you used, not at each step, and ' +
            'always write the unit. Marks are lost more often for units than for arithmetic.',
    },
    {
        id: 'phys-experiment-design',
        subject: 'physics',
        question: 'How do I design a valid, reliable experiment?',
        aliases: ['validity reliability accuracy'],
        answer:
            'Change one independent variable, measure the dependent one, and hold the rest constant: that is validity. ' +
            'Repeat trials for reliability, and use fine instruments for accuracy. ' +
            'Systematic errors shift every reading the same way; random errors scatter them, and repeats reduce those.',
    },
    {
        id: 'phys-uncertainty',
        subject: 'physics',
        question: 'How do I handle uncertainty in a measurement?',
        aliases: ['uncertainty', 'absolute uncertainty', 'percentage uncertainty', 'error bars', 'repeat measurements'],
        answer:
            'Absolute uncertainty is usually half the smallest scale division, or half the range of repeats. ' +
            'Percentage uncertainty is that divided by the measurement. ' +
            'When quantities are multiplied or divided, add the percentage uncertainties; when added or subtracted, ' +
            'add the absolute ones.',
    },
    {
        id: 'phys-systematic-random-error',
        subject: 'physics',
        question: 'What is the difference between systematic and random error?',
        aliases: ['systematic error', 'random error', 'zero error', 'parallax', 'improving accuracy'],
        answer:
            'A systematic error shifts every reading the same way, from a zero error or a poorly calibrated ' +
            'instrument, and repeats will not remove it. ' +
            'Random error scatters readings either side, from reaction time or parallax, and averaging repeats ' +
            'reduces it.',
    },
    {
        id: 'phys-variables',
        subject: 'physics',
        question: 'What are independent, dependent and controlled variables?',
        aliases: ['independent variable', 'dependent variable', 'controlled variables', 'fair test', 'experimental design'],
        answer:
            'The independent variable is the one you change, the dependent one is what you measure, and controlled ' +
            'variables are everything you hold constant. ' +
            'Changing only one at a time is what makes the experiment valid, since otherwise you cannot say which ' +
            'change caused the result.',
    },
    {
        id: 'phys-scientific-notation-units',
        subject: 'physics',
        question: 'How should I write units and answers in physics?',
        aliases: ['writing units', 'si prefixes', 'scientific notation physics', 'significant figures answer'],
        answer:
            'Use SI units with negative indices, such as m s⁻¹ and m s⁻², which is how NSW papers write them. ' +
            'Convert prefixes before substituting: kilo is 10³, milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹. ' +
            'Quote the answer to the significant figures of the least precise data, and always include the unit.',
    },
];
