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
        aliases: ['significant figures', 'si units', 'unit conversion'],
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
    {
        id: 'phys-linearising',
        subject: 'physics',
        question: 'How do I linearise data?',
        aliases: ['linearising', 'straight line from a curve', 'plotting against the reciprocal'],
        answer:
            'Rearrange the relationship into the form y = mx + b, then plot whatever combination makes it straight. ' +
            'For T = 2π√(l/g), plot T² against l, and the gradient is 4π²/g. ' +
            'A straight line is easier to judge by eye than a curve, and its gradient carries the constant.',
    },
    {
        id: 'phys-combining-uncertainties',
        subject: 'physics',
        question: 'How do uncertainties combine?',
        aliases: ['combining uncertainties', 'adding absolute uncertainties'],
        answer:
            'When quantities are added or subtracted, add their absolute uncertainties. ' +
            'When they are multiplied or divided, add their percentage uncertainties. ' +
            'A quantity raised to a power multiplies its percentage uncertainty by that power, so a squared term ' +
            'doubles it.',
    },
    {
        id: 'phys-scientific-notation',
        subject: 'physics',
        question: 'How do I work with scientific notation and prefixes?',
        aliases: ['scientific notation', 'standard form', 'nano micro milli kilo', 'unit prefixes'],
        answer:
            'Write one digit before the decimal point times a power of ten. ' +
            'Prefixes replace those powers: nano 10⁻⁹, micro 10⁻⁶, milli 10⁻³, kilo 10³, mega 10⁶, giga 10⁹. ' +
            'Convert prefixes to powers before substituting into a formula.',
    },
    {
        id: 'phys-line-of-best-fit',
        subject: 'physics',
        question: 'How do I draw a line of best fit?',
        aliases: ['line of best fit', 'gradient from a best fit line', 'outlier on a graph'],
        answer:
            'Draw a single straight line with points balanced either side, not a line joining dots. ' +
            'It need not pass through the origin unless the physics requires it. ' +
            'Circle an anomalous point and exclude it from the line rather than erasing it.',
    },
    {
        id: 'phys-assumptions',
        subject: 'physics',
        question: 'What assumptions do physics problems make?',
        aliases: ['assumptions in a physics problem', 'ignoring air resistance', 'point mass', 'frictionless surface'],
        answer:
            'Commonly: no air resistance, no friction, a point mass, a massless string, a uniform field, and constant ' +
            'acceleration. ' +
            'Each makes the maths tractable and each limits how well the answer matches reality, which is what an ' +
            'evaluation question is asking you to say.',
    },
    {
        id: 'phys-timing-equipment',
        subject: 'physics',
        question: 'When should I use a light gate or data logger?',
        aliases: ['light gate', 'data logger', 'ticker timer', 'measuring very short times'],
        answer:
            'Whenever the interval is too short to time by hand, since reaction time adds about 0.2 s of random error. ' +
            'Light gates and loggers also record many readings quickly, which is what allows a full motion graph from ' +
            'one run.',
    },
    {
        id: 'phys-unit-check',
        subject: 'physics',
        question: 'How do I check an equation using units?',
        aliases: ['dimensional analysis', 'checking the units of an equation', 'do the units work'],
        answer:
            'Substitute the base units for each quantity and simplify both sides. ' +
            'They must match: for v² = u² + 2as, both sides reduce to m² s⁻². ' +
            'Matching units do not prove an equation right, but mismatched units prove it wrong.',
    },
    {
        id: 'phys-writing-conclusion',
        subject: 'physics',
        question: 'How do I write a conclusion for a physics experiment?',
        aliases: ['writing a conclusion', 'does the data support the hypothesis', 'evaluating an experiment'],
        answer:
            'State what the data showed with a number from it, say whether that supports the hypothesis, compare with ' +
            'the accepted value as a percentage difference, then name the main source of error and one specific ' +
            'improvement. ' +
            'Avoid claiming proof from one experiment.',
    },
];
