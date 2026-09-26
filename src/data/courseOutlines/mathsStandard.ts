import type { CourseOutline } from './types';

/**
 * Order follows NESA's sample Year 12 scope and sequence A for Mathematics
 * Standard 2 under the 2024 syllabus: probability, then trigonometry, then
 * network flow in Term 4. The spare lesson gets ahead on investment, which
 * NESA's other sample also places early in the course.
 */
export const mathsStandardOutline: CourseOutline = {
    courseId: 'maths-standard',
    overview:
        'Probability, trigonometry with the sine and cosine rules and bearings, and network flow, with a head start on investment.',
    metaFocus: 'probability, trigonometry and bearings, and network flow',
    syllabusNote:
        'Follows the new NESA Mathematics Standard 11–12 Syllabus (2024) for Standard 2, which this cohort is the first to sit in the 2027 HSC, in the order most schools teach it.',
    lessons: [
        {
            topic: 'Relative frequency and probability',
            title: 'Probability basics',
            syllabusRefs: ['Year 11 review', 'MST-12-S2-09'],
            points: [
                'A quick review of rearranging formulas and working with percentages',
                'Listing a sample space',
                'Writing probabilities as fractions, decimals and percentages',
                'The probability that something does not happen',
            ],
            keySkill: 'Listing every possible outcome systematically.',
        },
        {
            topic: 'Relative frequency and probability',
            title: 'Events in more than one step',
            syllabusRefs: ['Probability', 'MST-12-S2-09'],
            points: [
                'Tree diagrams and tables of outcomes',
                'Multiplying along the branches of a tree diagram',
                '“At least one” problems',
            ],
            keySkill: 'Drawing a tree diagram and reading probabilities from it.',
        },
        {
            topic: 'Relative frequency and probability',
            title: 'Relative frequency and expected outcomes',
            syllabusRefs: ['Probability', 'MST-12-S2-09'],
            points: [
                'Relative frequency as an estimate of probability',
                'Expected frequency: how many times an outcome should occur',
                'Two-way tables and Venn diagrams',
                'How probability is used, and misused, in the media and by governments',
            ],
            keySkill: 'Reading probabilities from a two-way table.',
        },
        {
            topic: 'Trigonometry',
            title: 'Right-angled triangles, elevation and bearings',
            syllabusRefs: ['Trigonometry', 'MST-12-S2-04'],
            points: [
                'Finding sides and angles, working in degrees and minutes',
                'Angles of elevation and depression',
                'True bearings and compass bearings, and converting between them',
            ],
            keySkill: 'Turning a worded question into a clearly labelled diagram.',
        },
        {
            topic: 'Trigonometry',
            title: 'The sine rule and the area of a triangle',
            syllabusRefs: ['Trigonometry', 'MST-12-S2-04'],
            points: [
                'Using the sine rule to find a side',
                'Using the sine rule to find an angle, including obtuse angles',
                'The area of a triangle using two sides and the included angle',
            ],
            keySkill: 'Labelling a triangle so the rule can be applied correctly.',
        },
        {
            topic: 'Trigonometry',
            title: 'The cosine rule',
            syllabusRefs: ['Trigonometry', 'MST-12-S2-04'],
            points: [
                'Using the cosine rule to find a side',
                'Using the cosine rule to find an angle',
                'Deciding whether a question needs the sine rule or the cosine rule',
            ],
            keySkill: 'Choosing the right rule from the information given.',
        },
        {
            topic: 'Trigonometry',
            title: 'Trigonometry in real problems',
            syllabusRefs: ['Trigonometry', 'MST-12-S2-04'],
            points: [
                'Multi-step bearings problems',
                'Navigation and surveying questions',
                'Mixed practice across every rule from the topic',
            ],
            keySkill: 'Breaking a larger problem into triangles that can each be solved.',
        },
        {
            topic: 'Network flow',
            title: 'Flow networks',
            syllabusRefs: ['Network flow', 'MST-12-S2-06'],
            points: [
                'Sources, sinks and directed networks',
                'Drawing a flow network from a table of information',
                'Flow capacity, cuts and the capacity of a cut',
            ],
            keySkill: 'Setting up a flow network from a real situation.',
        },
        {
            topic: 'Network flow',
            title: 'Maximum flow and minimum cut',
            syllabusRefs: ['Network flow', 'MST-12-S2-06'],
            points: [
                'Finding the maximum flow using the minimum cut',
                'What happens when the capacity of one edge changes',
                'Deciding whether a network can meet demand',
            ],
            keySkill: 'Finding the minimum cut in a network.',
        },
        {
            topic: 'Investment',
            title: 'Getting ahead: interest and investment',
            syllabusRefs: ['Investment and loans', 'MST-12-S2-02'],
            points: [
                'Simple interest',
                'Compound interest and the future value formula',
                'Comparing simple and compound interest with a spreadsheet',
                'Shares and dividends',
            ],
            keySkill: 'Matching the interest rate and number of periods to how often interest is paid.',
        },
        {
            topic: 'Term review',
            title: 'Consolidation and term test',
            syllabusRefs: ['MST-12-S2-02', 'MST-12-S2-04', 'MST-12-S2-06', 'MST-12-S2-09'],
            points: [
                'Mixed HSC-style questions on probability, the sine and cosine rules, bearings and network flow, including the mistakes that cost marks most often',
                'A short test under exam conditions, marked with written feedback',
                'A plan for the summer holidays, built around the investment and annuities work that opens Term 1',
            ],
            keySkill: 'Setting out working clearly enough to earn every mark.',
        },
    ],
    laterTerms: [
        {
            term: 'Term 1, 2027',
            focus: 'Investment in full, bivariate data and lines of best fit, and ratios and rates.',
        },
        {
            term: 'Term 2, 2027',
            focus: 'Critical path analysis, depreciation, loans and credit cards, simultaneous equations, and exponential, quadratic and reciprocal models.',
        },
        {
            term: 'Term 3, 2027',
            focus: 'The normal distribution and annuities. Then trial exams and revision for the HSC.',
        },
    ],
};
