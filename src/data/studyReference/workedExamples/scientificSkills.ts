/**
 * Worked examples: investigation and reasoning skills.
 *
 * How to set up, judge and write up an investigation, and how to reason about
 * evidence, written as worked cases rather than as advice. Each is placed in the
 * science it most often appears in. Written by hand and shown exactly as written.
 */
import type { StudyEntry } from '../types';

export const workedExampleScientificSkillEntries: StudyEntry[] = [
    {
        id: 'phys-example-writing-a-hypothesis',
        subject: 'physics',
        question: 'Can you show me a worked example of writing a hypothesis?',
        aliases: ['worked example writing a hypothesis', 'example of a testable hypothesis', 'how to word a hypothesis example'],
        answer:
            'Weak: the spring will stretch. Better: as the load on the spring increases, the extension will increase in ' +
            'direct proportion, up to the elastic limit. A hypothesis names the independent and dependent variables, ' +
            'states the direction of the relationship, and could be shown to be false.',
    },
    {
        id: 'chem-example-identifying-variables',
        subject: 'chemistry',
        question: 'Can you show me a worked example of identifying variables in an investigation?',
        aliases: ['worked example identifying variables', 'example of independent and controlled variables', 'naming the variables example'],
        answer:
            'Testing how temperature affects reaction rate: the independent variable is temperature, the dependent is ' +
            'the time to a colour change, and the controlled variables are concentration, volume, catalyst and ' +
            'stirring. Name the controlled ones specifically, since "everything else" earns nothing.',
    },
    {
        id: 'bio-example-operationalising-a-variable',
        subject: 'biology',
        question: 'Can you show me a worked example of making a variable measurable?',
        aliases: ['worked example making a variable measurable', 'example of how to measure growth', 'operationalising a variable example'],
        answer:
            'Plant health cannot be measured directly, so choose something countable that stands for it: dry mass after ' +
            '48 hours at 60 °C, or leaf count, or height to the apical bud. Say which, and why it represents the thing ' +
            'you care about, before the method begins.',
    },
    {
        id: 'phys-example-validity-versus-reliability',
        subject: 'physics',
        question: 'Can you show me a worked example of the difference between validity and reliability?',
        aliases: ['worked example validity and reliability', 'example of valid but unreliable', 'reliable but not valid example'],
        answer:
            'Timing ten swings and dividing by ten, repeated five times with close agreement, is reliable. If the ' +
            'stopwatch starts at the wrong point of the swing every time, it is still invalid: consistently wrong. ' +
            'Reliability is about agreement between repeats, validity about measuring the right thing.',
    },
    {
        id: 'chem-example-accuracy-versus-precision',
        subject: 'chemistry',
        question: 'Can you show me a worked example of accuracy against precision?',
        aliases: ['worked example accuracy and precision', 'example of precise but not accurate', 'accuracy versus precision example'],
        answer:
            'Titres of 24.81, 24.83 and 24.82 mL are precise, agreeing to 0.02 mL. If the burette was misread by 0.5 mL ' +
            'each time, they are precise and inaccurate together. Precision is the spread of your own results; ' +
            'accuracy is closeness to the true value.',
    },
    {
        id: 'bio-example-identifying-a-confounding-variable',
        subject: 'biology',
        question: 'Can you show me a worked example of spotting a confounding variable?',
        aliases: ['worked example confounding variable', 'example of a second variable changing too', 'confounded experiment example'],
        answer:
            'Plants under a brighter lamp grow taller, but the brighter lamp is also warmer. Light and temperature ' +
            'changed together, so neither can be credited. The fix is a heat filter or matched temperatures, not more ' +
            'repeats, because repeating a confounded design repeats the problem.',
    },
    {
        id: 'phys-example-systematic-versus-random-error',
        subject: 'physics',
        question: 'Can you show me a worked example of systematic against random error?',
        aliases: ['worked example systematic and random error', 'example of a zero error', 'random versus systematic example'],
        answer:
            'A balance reading 0.3 g with nothing on it adds 0.3 g to every result: systematic, removable by zeroing, ' +
            'and not reduced by averaging. Hand timing that is sometimes early and sometimes late is random, and ' +
            'averaging many trials does reduce it. The two need different fixes.',
    },
    {
        id: 'chem-example-improving-a-method',
        subject: 'chemistry',
        question: 'Can you show me a worked example of improving a method?',
        aliases: ['worked example improving a method', 'example of suggesting an improvement', 'how to improve the experiment example'],
        answer:
            'Heat loss makes a calorimetry result too low. A useful improvement names the change and its effect: fit a ' +
            'lid and insulate the cup, so less energy escapes and the measured temperature rise is closer to the true ' +
            'one. "Be more careful" and "repeat it" are not improvements to a method.',
    },
    {
        id: 'bio-example-reading-a-results-table',
        subject: 'biology',
        question: 'Can you show me a worked example of laying out a results table?',
        aliases: ['worked example results table', 'example of how to set out a table', 'table headings and units example'],
        answer:
            'Put the independent variable in the first column and the dependent in those following, with units in the ' +
            'heading rather than beside each number, a column for the mean, and consistent decimal places down each ' +
            'column. Units repeated in every cell and ragged decimals both cost marks.',
    },
    {
        id: 'phys-example-choosing-a-graph',
        subject: 'physics',
        question: 'Can you show me a worked example of choosing the right graph?',
        aliases: ['worked example choosing a graph', 'example of which graph to draw', 'line graph or column graph example'],
        answer:
            'Extension against load, where both are numerical and continuous, calls for a scatter graph with a line of ' +
            'best fit. Mean growth for three different fertilisers, where the categories are separate, calls for a ' +
            'column graph. Continuous numbers on both axes means a line; categories mean columns.',
    },
    {
        id: 'chem-example-line-of-best-fit',
        subject: 'chemistry',
        question: 'Can you show me a worked example of drawing a line of best fit?',
        aliases: ['worked example line of best fit', 'example of drawing a trend line', 'best fit line example'],
        answer:
            'Draw one straight line with roughly equal numbers of points either side, ignoring any clear outlier but ' +
            'marking it. Do not join the dots, and do not force the line through the origin unless the theory requires ' +
            'it. Then take the gradient from two points on your line, not from two data points.',
    },
    {
        id: 'bio-example-anomalous-result',
        subject: 'biology',
        question: 'Can you show me a worked example of handling an anomalous result?',
        aliases: ['worked example anomalous result', 'example of what to do with an outlier in an experiment', 'handling an odd reading example'],
        answer:
            'Four readings are 12.1, 11.9, 12.0 and 18.4 mm. Exclude the 18.4 from the mean, but record it and say ' +
            'why: it is far outside the spread of the others and a cause can be suggested, such as a dislodged sample. ' +
            'Deleting it silently is the part that is wrong, not excluding it.',
    },
    {
        id: 'phys-example-significant-figures-in-a-result',
        subject: 'physics',
        question: 'Can you show me a worked example of rounding a calculated result properly?',
        aliases: ['worked example rounding a calculated result', 'example of significant figures in an answer', 'how many figures to quote example'],
        answer:
            'A distance of 1.5 m is divided by a time of 0.62 s, giving 2.4193548 on the calculator. The least precise ' +
            'measurement has two significant figures, so the answer is 2.4 m s⁻¹. Quoting all eight digits claims a ' +
            'precision the measurements never had.',
    },
    {
        id: 'chem-example-writing-a-conclusion',
        subject: 'chemistry',
        question: 'Can you show me a worked example of writing a conclusion?',
        aliases: ['worked example writing a conclusion', 'example of a conclusion using data', 'conclusion with evidence example'],
        answer:
            'Weak: the experiment worked and the rate increased. Better: the rate rose from 0.20 to 0.83 mL s⁻¹ as the ' +
            'concentration rose from 0.5 to 2.0 mol L⁻¹, supporting the hypothesis that rate increases with ' +
            'concentration. A conclusion answers the question with figures and says whether the hypothesis held.',
    },
    {
        id: 'bio-example-discussion-versus-conclusion',
        subject: 'biology',
        question: 'Can you show me a worked example of what belongs in a discussion?',
        aliases: ['worked example discussion section', 'example of discussion against conclusion', 'what goes in the discussion example'],
        answer:
            'The conclusion states what the data showed. The discussion explains it with biology, compares it with ' +
            'accepted values, and admits what limits it: here, that only one species was used, so the finding may not ' +
            'generalise. Limitations belong in the discussion, not in an apology at the end.',
    },
    {
        id: 'phys-example-evaluating-a-source',
        subject: 'physics',
        question: 'Can you show me a worked example of evaluating a source?',
        aliases: ['worked example evaluating a source', 'example of judging reliability of a source', 'assessing a secondary source example'],
        answer:
            'A blog post and a peer-reviewed paper make the same claim. Judge each on author expertise, whether method ' +
            'and data are given, date, and whether anyone had reason to favour the result. The paper wins on method ' +
            'and review, not because it is a paper, which is the reasoning the marks are for.',
    },
    {
        id: 'chem-example-risk-assessment',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a risk assessment entry?',
        aliases: ['worked example risk assessment', 'example of a hazard and control', 'risk assessment entry example'],
        answer:
            'Hazard: 2 mol L⁻¹ hydrochloric acid, corrosive to skin and eyes. Risk: splashing while pouring. Control: ' +
            'safety glasses and gloves, pour at bench height over a tray, and flood with water for 15 minutes if ' +
            'splashed. Name the substance, the way harm happens, and a control that addresses that way.',
    },
    {
        id: 'bio-example-ethical-consideration',
        subject: 'biology',
        question: 'Can you show me a worked example of an ethical consideration?',
        aliases: ['worked example ethical consideration', 'example of ethics in an investigation', 'ethical issue in an experiment example'],
        answer:
            'An investigation using live invertebrates should state how animals were handled and returned unharmed, ' +
            'and why the number used was the smallest that answers the question. A human study needs informed consent ' +
            'and anonymity. Say what you did about it, not merely that ethics matter.',
    },
    {
        id: 'phys-example-designing-a-fair-test',
        subject: 'physics',
        question: 'Can you show me a worked example of designing a fair test?',
        aliases: ['worked example designing a fair test', 'example of a valid experimental design', 'designing an investigation example'],
        answer:
            'To test whether ramp angle affects speed: use one trolley and one ramp, change only the angle across five ' +
            'values, release from the same marked point each time, and time over a fixed distance with light gates. ' +
            'Three trials per angle. One variable changing, everything measurable held fixed.',
    },
    {
        id: 'chem-example-choosing-a-range',
        subject: 'chemistry',
        question: 'Can you show me a worked example of choosing a range of values?',
        aliases: ['worked example choosing a range', 'example of how many values to test', 'choosing the range and interval example'],
        answer:
            'Testing concentrations, two values cannot show a trend and twenty wastes time. Five evenly spaced values ' +
            'from 0.2 to 1.0 mol L⁻¹ show the shape and allow a line. Choose a range wide enough for a visible effect, ' +
            'with equal intervals so the graph is readable.',
    },
    {
        id: 'bio-example-random-sampling',
        subject: 'biology',
        question: 'Can you show me a worked example of random sampling?',
        aliases: ['worked example random sampling', 'example of avoiding bias in sampling', 'random quadrat placement example'],
        answer:
            'Lay two tapes at right angles to form axes, generate coordinate pairs with a random number generator, and ' +
            'place a quadrat at each. Choosing spots that look representative introduces bias, which is exactly what ' +
            'random placement removes.',
    },
    {
        id: 'phys-example-interpreting-a-negative-gradient',
        subject: 'physics',
        question: 'Can you show me a worked example of interpreting a gradient physically?',
        aliases: ['worked example interpreting a gradient', 'example of what a gradient represents', 'meaning of a slope example'],
        answer:
            'On a distance against time graph the gradient is speed. On a velocity against time graph it is ' +
            'acceleration, and the area beneath is distance. A negative gradient on the second means slowing, not ' +
            'moving backwards. Name what the gradient is before reading a number off it.',
    },
    {
        id: 'chem-example-reading-a-graph-intercept',
        subject: 'chemistry',
        question: 'Can you show me a worked example of interpreting an intercept?',
        aliases: ['worked example interpreting an intercept', 'example of what the y intercept means', 'intercept meaning example'],
        answer:
            'A graph of volume against temperature in °C crosses the temperature axis at about −273. The intercept is ' +
            'not an artefact: it is absolute zero, where an ideal gas would occupy no volume. An intercept that should ' +
            'be zero but is not usually reveals a systematic error.',
    },
    {
        id: 'bio-example-correlation-not-causation',
        subject: 'biology',
        question: 'Can you show me a worked example of correlation not proving cause?',
        aliases: ['worked example correlation not causation', 'example of a spurious relationship', 'correlation does not prove cause example'],
        answer:
            'Ice cream sales and drowning deaths rise together across a year. Neither causes the other: warm weather ' +
            'raises both. To argue cause you need a mechanism, the right order in time, and other explanations ruled ' +
            'out, none of which a correlation supplies on its own.',
    },
    {
        id: 'phys-example-order-of-magnitude-check',
        subject: 'physics',
        question: 'Can you show me a worked example of checking an answer is reasonable?',
        aliases: ['worked example checking an answer is reasonable', 'example of an order of magnitude check', 'sanity check example'],
        answer:
            'A calculation gives a car speed of 4200 m s⁻¹. That is faster than a rifle bullet, so something is wrong, ' +
            'most likely a unit left in kilometres or a time in minutes. Ask what a sensible size looks like before ' +
            'writing the answer down.',
    },
    {
        id: 'chem-example-unit-check-on-a-formula',
        subject: 'chemistry',
        question: 'Can you show me a worked example of checking a formula by its units?',
        aliases: ['worked example checking units in a formula', 'example of dimensional check', 'do the units work out example'],
        answer:
            'For n = cV, the units are mol L⁻¹ times L, and the litres cancel to leave mol. Correct. Had the volume ' +
            'been left in millilitres the units would not cancel cleanly, which is the signal to convert. Units ' +
            'cancelling is a check that the rearrangement is right.',
    },
    {
        id: 'bio-example-percentage-change-direction',
        subject: 'biology',
        question: 'Can you show me a worked example of a percentage change in data?',
        aliases: ['worked example percentage change in data', 'example of calculating a change from a table', 'percentage increase from data example'],
        answer:
            'A count rises from 240 to 312. The change is 312 − 240 = 72, so the percentage increase is 72 ÷ 240 × 100 ' +
            '= 30%. Divide by the starting value, not the finishing one, which would give 23% and understate the ' +
            'change.',
    },
    {
        id: 'phys-example-graph-axes-mistake',
        subject: 'physics',
        question: 'Can you show me a worked example of a badly drawn graph corrected?',
        aliases: ['worked example correcting a graph', 'example of common graph mistakes', 'what is wrong with this graph example'],
        answer:
            'A graph has the independent variable up the side, an uneven scale, no units and dots joined with a zigzag. ' +
            'Corrected: independent variable along the bottom, even scale using more than half the grid, quantity and ' +
            'unit on each axis, and one straight line of best fit.',
    },
    {
        id: 'chem-example-scientific-notation-arithmetic',
        subject: 'chemistry',
        question: 'Can you show me a worked example of arithmetic in scientific notation?',
        aliases: ['worked example scientific notation arithmetic', 'example of multiplying powers of ten', 'dividing numbers in standard form example'],
        answer:
            'Divide 6.4 × 10⁻³ by 8.0 × 10⁻⁵. Handle the digits and the powers separately: 6.4 ÷ 8.0 = 0.8, and −3 − ' +
            '(−5) = 2, giving 0.8 × 10², which tidies to 80. Adjust the digit part to lie between 1 and 10 at the end.',
    },
    {
        id: 'bio-example-reading-a-flow-diagram',
        subject: 'biology',
        question: 'Can you show me a worked example of reading a cycle diagram?',
        aliases: ['worked example reading a cycle diagram', 'example of interpreting a flow diagram', 'reading a nutrient cycle example'],
        answer:
            'In a nitrogen cycle diagram, each arrow is a process and each box a store. Asked what a labelled arrow ' +
            'represents, name the process and the organisms doing it: ammonium to nitrate is nitrification, carried ' +
            'out by soil bacteria. Read arrows as verbs and boxes as nouns.',
    },
    {
        id: 'phys-example-estimating-with-assumptions',
        subject: 'physics',
        question: 'Can you show me a worked example of an estimate with stated assumptions?',
        aliases: ['worked example estimate with assumptions', 'example of a rough calculation with assumptions', 'stating your assumptions example'],
        answer:
            'Estimate the power of someone climbing stairs. Assume 60 kg, 3 m of height, 5 seconds. The work is 60 × ' +
            '9.8 × 3 = 1764 J, so the power is 1764 ÷ 5 = 353 W. State each assumption, because the estimate is only ' +
            'as good as they are and the marks are for the reasoning.',
    },
    {
        id: 'chem-example-explaining-an-unexpected-result',
        subject: 'chemistry',
        question: 'Can you show me a worked example of explaining an unexpected result?',
        aliases: ['worked example explaining an unexpected result', 'example of why the result was too low', 'accounting for a poor yield example'],
        answer:
            'A yield comes out at 64% when the reaction should be near complete. Offer specific causes with a ' +
            'direction: product left in the filter paper and on the glassware, and loss during transfer, both of which ' +
            'lower the mass recovered. A named loss beats a general statement about error.',
    },
    {
        id: 'bio-example-generalising-from-a-sample',
        subject: 'biology',
        question: 'Can you show me a worked example of how far a result can be generalised?',
        aliases: ['worked example generalising a result', 'example of how far a conclusion extends', 'can the result be generalised example'],
        answer:
            'An effect found in 30 seedlings of one variety, in one greenhouse, over two weeks, supports a claim about ' +
            'that variety under those conditions. Extending it to all plants needs more varieties and field ' +
            'conditions. State the population the conclusion covers, and stop there.',
    },
];
