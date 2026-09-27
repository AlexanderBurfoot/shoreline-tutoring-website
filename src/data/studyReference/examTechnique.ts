/**
 * How to answer, subject by subject.
 *
 * What each command word requires, how to lay out a calculation or proof, and
 * what a long response is expected to contain.
 */
import type { StudyEntry } from './types';

export const examTechniqueEntries: StudyEntry[] = [
    {
        id: 'chem-answering-long-response',
        subject: 'chemistry',
        question: 'How do I answer a six mark chemistry question?',
        aliases: ['six mark chemistry question', 'long response chemistry', 'structuring a chemistry extended answer'],
        answer:
            'Count the marks and plan that many distinct points. Include a balanced equation, the relevant chemistry ' +
            'named precisely, and a link back to the question wording. Six marks is never one idea explained at ' +
            'length.',
    },
    {
        id: 'chem-structuring-a-calculation',
        subject: 'chemistry',
        question: 'How should I lay out a chemistry calculation?',
        aliases: ['laying out a chemistry calculation', 'setting out working chemistry', 'showing working in chemistry'],
        answer:
            'State the equation, then each step with the substance labelled: n(HCl) = cV, then the ratio, then the ' +
            'conversion. Carry units through and round once at the end. A marker who can follow the path awards ' +
            'method marks even when the arithmetic slips.',
    },
    {
        id: 'chem-explain-command',
        subject: 'chemistry',
        question: 'What does explain require in a chemistry answer?',
        aliases: ['explain in chemistry', 'chemistry command words', 'explain versus describe chemistry'],
        answer:
            'A cause, not a restatement. Describe says what happens; explain says why, in terms of particles, bonding ' +
            'or energy. An answer that names the observation without the mechanism has described it.',
    },
    {
        id: 'phys-answering-long-response',
        subject: 'physics',
        question: 'How do I answer a six mark physics question?',
        aliases: ['six mark physics question', 'long response physics', 'structuring a physics extended answer'],
        answer:
            'Plan one point per mark, include a labelled diagram where the situation is physical, name the principle ' +
            'you are applying, and finish by answering the actual question rather than the topic. A calculation ' +
            'inside a discussion question still needs the reasoning stated.',
    },
    {
        id: 'phys-structuring-a-derivation',
        subject: 'physics',
        question: 'How do I set out a derivation in physics?',
        aliases: ['setting out a derivation', 'deriving an equation in physics', 'show that in physics'],
        answer:
            'Start from a named principle, state each substitution and why it is valid, and finish at the required ' +
            'expression without skipping algebra. A show that question is marked on the path, so arriving at the ' +
            'answer with gaps earns little.',
    },
    {
        id: 'phys-analyse-command',
        subject: 'physics',
        question: 'What does analyse require in a physics answer?',
        aliases: ['analyse in physics', 'physics command words', 'analyse versus explain physics'],
        answer:
            'Identify the components of the situation and how they relate, usually with a quantitative link. Explain ' +
            'asks why; analyse asks how the parts act together, which often means resolving forces or comparing two ' +
            'effects.',
    },
    {
        id: 'bio-answering-long-response',
        subject: 'biology',
        question: 'How do I answer a seven mark biology question?',
        aliases: ['seven mark biology question', 'long response biology', 'structuring a biology extended answer'],
        answer:
            'Plan the parts the question names, give each a paragraph, and use a named example in each. Biology ' +
            'extended responses reward specific terminology and a real organism or disease over general statements, ' +
            'however well written.',
    },
    {
        id: 'bio-named-examples',
        subject: 'biology',
        question: 'Why do biology answers need a named example?',
        aliases: ['named example in biology', 'using a specific example', 'why examples matter in biology'],
        answer:
            'Because the syllabus asks for application rather than recall, and a named organism, disease or ' +
            'technology is the evidence that you can apply it. Collecting one example per topic through the year is ' +
            'more efficient than finding them during revision.',
    },
    {
        id: 'bio-exam-diagram',
        subject: 'biology',
        question: 'When should I draw a diagram in a biology exam?',
        aliases: ['diagram in a biology exam', 'drawing in an answer', 'when a diagram helps'],
        answer:
            'When it conveys structure or a sequence faster than prose: a nephron, a feedback loop, a cross. Label it ' +
            'and refer to it in the writing, since an unreferenced diagram usually earns nothing on its own.',
    },
    {
        id: 'maths-structuring-a-proof',
        subject: 'mathematics',
        question: 'How do I set out a proof?',
        aliases: ['setting out a proof', 'writing a mathematical proof', 'proof structure marks'],
        answer:
            'State what you are proving and what you are assuming, work in clear steps with a reason where the move ' +
            'is not obvious, and finish with a line stating that the result is established. For induction, name the ' +
            'base case, the assumption and the inductive step explicitly.',
    },
    {
        id: 'maths-multipart-questions',
        subject: 'mathematics',
        question: 'How do I handle a multi-part mathematics question?',
        aliases: ['multi part question', 'parts a b c in maths', 'using an earlier part'],
        answer:
            'Later parts almost always use earlier ones, so a part you cannot do does not stop the next: state what ' +
            'you would have found and continue. If a part says hence, the previous result is required rather than ' +
            'optional.',
    },
    {
        id: 'maths-stuck-in-an-exam',
        subject: 'mathematics',
        question: 'What do I do when I am stuck in a mathematics exam?',
        aliases: ['stuck in a maths exam', 'cannot do a maths question', 'what to write when stuck'],
        answer:
            'Write down what is given and the formula that relates it, draw the diagram, and try a simpler case or ' +
            'substitute a number to see the structure. Partial working earns method marks; a blank earns nothing, and ' +
            'moving on protects the questions you can do.',
    },
    {
        id: 'econ-extended-response',
        subject: 'economics',
        question: 'How do I structure a fifteen mark economics response?',
        aliases: ['fifteen mark economics response', 'economics extended response structure', 'long economics answer'],
        answer:
            'An introduction defining the terms and stating the position, then one idea per paragraph with a ' +
            'mechanism, a diagram or statistic, and a link to the question, then a conclusion that answers it. Four ' +
            'developed paragraphs beat seven thin ones.',
    },
    {
        id: 'econ-choosing-a-diagram',
        subject: 'economics',
        question: 'Which diagram should I use in an economics answer?',
        aliases: ['choosing an economics diagram', 'which diagram to draw', 'diagram for a policy question'],
        answer:
            'Match it to the mechanism: supply and demand for a market effect, the business cycle for growth and ' +
            'inflation, the circular flow for leakages and injections, and a Lorenz curve for distribution. Draw only ' +
            'what you will refer to.',
    },
    {
        id: 'econ-quoting-statistics',
        subject: 'economics',
        question: 'How do I quote statistics properly in economics?',
        aliases: ['quoting statistics in economics', 'using data in an economics answer', 'citing figures correctly'],
        answer:
            'Give the figure, the period and the direction, then explain what it shows: unemployment rising from 3.5 ' +
            'to 4.2% over the year indicates a softening labour market. A figure without a period cannot be ' +
            'interpreted and earns little.',
    },
    {
        id: 'econ-currency-of-examples',
        subject: 'economics',
        question: 'How current do my economics examples need to be?',
        aliases: ['how current should examples be', 'using recent statistics', 'out of date economics examples'],
        answer:
            'Recent enough to show you follow the economy, so figures from the last year or two and events from the ' +
            'last decade. An older episode is fine where it is the standard illustration, such as the 1970s oil ' +
            'shocks for stagflation, but every answer needs at least one current figure.',
    },
    {
        id: 'bus-using-a-case-study',
        subject: 'business-studies',
        question: 'How do I use a case study across the whole paper?',
        aliases: ['using a case study', 'one business for every function', 'case study in business studies'],
        answer:
            'Choose one business you know in detail and collect material on all four functions through the year, so ' +
            'any question can be answered with specifics. A second smaller business is useful for contrast, ' +
            'especially on scale or global operations.',
    },
    {
        id: 'bus-twenty-mark-question',
        subject: 'business-studies',
        question: 'How do I answer a twenty mark business studies question?',
        aliases: ['twenty mark business question', 'business studies extended response', 'long business answer'],
        answer:
            'Plan four or five distinct points, each with a business example, and address the command word directly. ' +
            'Where the question names two functions, structure by the link between them rather than covering one and ' +
            'then the other.',
    },
    {
        id: 'bus-stimulus-question',
        subject: 'business-studies',
        question: 'How do I handle a stimulus-based business question?',
        aliases: ['stimulus question business', 'using the stimulus material', 'business case in an exam'],
        answer:
            'Use the stimulus rather than your prepared case study: quote figures or details from it, since marks are ' +
            'awarded for applying theory to that business. Bring in your own example only where the question invites ' +
            'additional evidence.',
    },
    {
        id: 'bus-linking-functions',
        subject: 'business-studies',
        question: 'How do I link two business functions in an answer?',
        aliases: ['linking business functions', 'operations and finance together', 'interdependence of functions'],
        answer:
            'Show the causal chain: a lean operations decision lowers inventory, which frees working capital, which ' +
            'improves liquidity. Interdependence questions are common, and a chain with a named consequence at each ' +
            'step is what earns the top band.',
    },
];
