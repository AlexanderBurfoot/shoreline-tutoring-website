/**
 * Mathematics Standard, Years 11 and 12.
 *
 * The topics Standard carries that Advanced does not: networks, scale and
 * measurement in context, and the financial and statistical work that makes up
 * most of the course.
 */
import type { StudyEntry } from '../types';

export const mathematicsStandardEntries: StudyEntry[] = [
    {
        id: 'maths-std-networks',
        subject: 'mathematics',
        question: 'What is a network diagram?',
        aliases: ['network diagram', 'vertices edges', 'graph theory', 'connected graph', 'degree of a vertex'],
        answer:
            'A network is vertices joined by edges, used for maps, schedules and flows. ' +
            'The degree of a vertex is how many edges meet it. ' +
            'A path visits edges without repeating a vertex; a connected network has a route between every pair.',
    },
    {
        id: 'maths-std-minimum-spanning-tree',
        subject: 'mathematics',
        question: 'What is a minimum spanning tree?',
        aliases: ['minimum spanning tree', 'prims algorithm', 'kruskals algorithm', 'shortest network'],
        answer:
            'A tree that connects every vertex with no cycles, at the lowest total weight. ' +
            'Prim’s algorithm grows outward from a vertex, always adding the cheapest edge to a new vertex. ' +
            'Kruskal’s adds the cheapest edge anywhere, skipping any that would form a cycle.',
    },
    {
        id: 'maths-std-critical-path',
        subject: 'mathematics',
        question: 'How does critical path analysis work?',
        aliases: ['critical path', 'float time', 'earliest start time', 'project scheduling', 'forward backward scanning'],
        answer:
            'Forward scanning gives the earliest start times, backward scanning the latest. ' +
            'Float is the difference, so an activity with zero float sits on the critical path and cannot be delayed ' +
            'without delaying the project. The critical path is the longest path through the network.',
    },
    {
        id: 'maths-std-flow-networks',
        subject: 'mathematics',
        question: 'How do I find the maximum flow in a network?',
        aliases: ['maximum flow', 'minimum cut', 'flow capacity', 'network flow'],
        answer:
            'The maximum flow equals the minimum cut: the smallest total capacity of edges that, if removed, would ' +
            'separate the source from the sink. Check a cut by making sure every path crosses it exactly once.',
    },
    {
        id: 'maths-std-scale-plans',
        subject: 'mathematics',
        question: 'How do I work with scale drawings and plans?',
        aliases: ['scale drawing', 'floor plan', 'scale factor length', 'site plan', 'elevation view'],
        answer:
            'A scale of 1:100 means one unit on the plan is a hundred in reality. ' +
            'Convert on the drawing first, then apply the scale. ' +
            'For areas, the scale factor squares, so a 1:100 plan represents areas ten thousand times larger.',
    },
    {
        id: 'maths-std-trapezoidal-area',
        subject: 'mathematics',
        question: 'How do I estimate an irregular area?',
        aliases: ['trapezoidal rule area', 'irregular block', 'offset survey', 'estimating area'],
        answer:
            'Use the trapezoidal rule: A ≈ (h/2)(first + last + 2 × each middle measurement), where h is the spacing. ' +
            'More strips give a better estimate. It is the usual method for a block of land measured by offsets from ' +
            'a straight line.',
    },
    {
        id: 'maths-std-body-measures',
        subject: 'mathematics',
        question: 'What are the common rate and measurement formulas in context?',
        aliases: ['bmi', 'blood alcohol content', 'medication dosage', 'fuel consumption', 'heart rate formula'],
        answer:
            'BMI = mass ÷ height², in kilograms and metres. Fuel consumption is litres per 100 km. ' +
            'Medication dosages scale with body mass or age. ' +
            'Always check the units a formula expects before substituting, since these formulas are unit-specific.',
    },
    {
        id: 'maths-std-depreciation',
        subject: 'mathematics',
        question: 'How do I calculate depreciation?',
        aliases: ['depreciation', 'straight line depreciation', 'declining balance', 'salvage value', 'book value'],
        answer:
            'Straight line: S = V₀ − Dn, losing the same amount each year. ' +
            'Declining balance: S = V₀(1 − r)ⁿ, losing a percentage of what is left. ' +
            'Declining balance drops faster early, which usually matches how an asset really loses value.',
    },
    {
        id: 'maths-std-taxation',
        subject: 'mathematics',
        question: 'How does income tax work?',
        aliases: ['income tax', 'tax brackets', 'medicare levy', 'gross and net pay', 'paye'],
        answer:
            'Tax is charged in brackets: each slice of income is taxed at its own rate, not all of it at the top rate. ' +
            'Taxable income is gross income less allowable deductions, and the Medicare levy is added on top. ' +
            'Net pay is what remains after tax and other deductions.',
    },
    {
        id: 'maths-std-normal-applications',
        subject: 'mathematics',
        question: 'How do I use the normal distribution in context?',
        aliases: ['z score standard', 'normal distribution application', 'comparing scores', 'standardised test score'],
        answer:
            'Convert a value to a z-score with z = (x − μ)/σ, then use the 68, 95 and 99.7 per cent rule or a table. ' +
            'Z-scores also compare results from different tests, since they put both on the same scale of standard ' +
            'deviations from the mean.',
    },
    {
        id: 'maths-std-simpsons-rule',
        subject: 'mathematics',
        question: 'What is Simpson’s rule?',
        aliases: ['simpsons rule', 'area under a curve estimate', 'approximating area'],
        answer:
            'Simpson’s rule fits parabolas through the points instead of straight lines, so it is usually more ' +
            'accurate than the trapezoidal rule for a curved boundary. ' +
            'It needs an even number of strips, which means an odd number of measurements.',
    },
    {
        id: 'maths-std-data-displays',
        subject: 'mathematics',
        question: 'Which data display should I use?',
        aliases: ['histogram', 'dot plot', 'stem and leaf', 'pareto chart', 'data display', 'bimodal'],
        answer:
            'Dot plots and stem-and-leaf keep the individual values and suit small sets. ' +
            'Histograms group continuous data into classes. Box plots compare spread across groups. ' +
            'Describe shape as symmetric, skewed or bimodal, then centre and spread.',
    },
];
