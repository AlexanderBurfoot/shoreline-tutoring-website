import type { CourseOutline } from './types';

/**
 * Order follows NESA's sample Year 12 scope and sequence A for the 2024
 * syllabus (graph transformations, then sequences and series, then
 * differential calculus in Term 4) and Pearson New Senior Mathematics 4e
 * Advanced Year 12, whose teaching program covers the same three topics in
 * Term 4.
 */
export const mathsAdvancedOutline: CourseOutline = {
    courseId: 'maths-advanced',
    overview:
        'Transformed trigonometric graphs and modelling, sequences and series, and differentiating exponential, logarithmic and trigonometric functions.',
    metaFocus: 'trigonometric graphs, sequences and series, and calculus',
    syllabusNote:
        'Follows the new NESA Mathematics Advanced 11–12 Syllabus (2024), which this cohort is the first to sit in the 2027 HSC, in the order most schools teach it.',
    lessons: [
        {
            topic: 'Further graph transformations and modelling',
            title: 'The Year 11 toolkit for Year 12',
            syllabusRefs: ['Year 11 review', 'MAV-12-01'],
            points: [
                'Radians and exact trigonometric values',
                'Solving trigonometric equations within a given domain',
                'Transformations of y = f(x): shifts, stretches and reflections',
                'The sine and cosine curves drawn in radians',
            ],
            keySkill: 'Describing a transformation both in words and in function notation.',
        },
        {
            topic: 'Further graph transformations and modelling',
            title: 'Transforming trigonometric graphs',
            syllabusRefs: ['Graph transformations', 'MAV-12-01'],
            points: [
                'Amplitude, period, phase shift and vertical shift in y = a sin(b(x − c)) + d',
                'The same transformations applied to cosine and tangent',
                'Domain and range of a transformed function',
                'Sketching accurately over a set domain',
            ],
            keySkill: 'Reading the amplitude and period straight from an equation.',
        },
        {
            topic: 'Further graph transformations and modelling',
            title: 'Trigonometric equations and graphical solutions',
            syllabusRefs: ['Graph transformations', 'MAV-12-01'],
            points: [
                'Solving equations such as 2 sin 2x = 1 within a domain',
                'Adjusting the domain when the angle is ax + b',
                'Counting solutions by sketching two graphs on the same axes',
                'Checking solutions with graphing technology',
            ],
            keySkill: 'Finding every solution in a domain, not just the first one.',
        },
        {
            topic: 'Further graph transformations and modelling',
            title: 'Modelling with functions',
            syllabusRefs: ['Modelling', 'MAV-12-02'],
            points: [
                'Modelling tides, daylight hours and other repeating data with trigonometric functions',
                'Choosing a suitable Year 11 function to model a practical problem',
                'Logarithmic scales: decibels, earthquakes, pH and star magnitude',
            ],
            keySkill: 'Building a model from a real situation and interpreting what it predicts.',
        },
        {
            topic: 'Sequences and series',
            title: 'Sequences, sigma notation and arithmetic series',
            syllabusRefs: ['Sequences and series', 'MAV-12-03'],
            points: [
                'Sequence notation and partial sums',
                'Writing and evaluating sums in sigma notation',
                'The nth term and the sum of an arithmetic series',
                'Problems involving linear growth',
            ],
            keySkill: 'Choosing the right arithmetic series formula for the information given.',
        },
        {
            topic: 'Sequences and series',
            title: 'Geometric series and limiting sums',
            syllabusRefs: ['Sequences and series', 'MAV-12-03'],
            points: [
                'The nth term and the sum of a geometric series',
                'When a limiting sum exists, and finding it',
                'Writing recurring decimals as fractions',
            ],
            keySkill: 'Testing whether a series has a limiting sum before using the formula.',
        },
        {
            topic: 'Sequences and series',
            title: 'Applying series',
            syllabusRefs: ['Sequences and series', 'MAV-12-03'],
            points: [
                'Growth and decay problems modelled with arithmetic and geometric series',
                'Mixed word problems that need both kinds of series',
                'Using logarithms to find the number of terms',
                'How series lead into loans and annuities later in the year',
            ],
            keySkill: 'Turning a worded problem into a series and solving it.',
        },
        {
            topic: 'Differential calculus',
            title: 'Differentiating exponential functions',
            syllabusRefs: ['Differential calculus', 'MAV-12-04'],
            points: [
                'The derivatives of eˣ and of e raised to a linear function',
                'The derivative of aˣ for any base',
                'Using the chain rule on e raised to a function',
                'Tangents to exponential curves',
            ],
            keySkill: 'Differentiating exponential functions quickly and without errors.',
        },
        {
            topic: 'Differential calculus',
            title: 'Differentiating logarithmic functions',
            syllabusRefs: ['Differential calculus', 'MAV-12-04'],
            points: [
                'The derivative of ln x, and of logarithms to other bases',
                'Differentiating the logarithm of a function',
                'Using the log laws to simplify before differentiating',
            ],
            keySkill: 'Simplifying with the log laws first, so the derivative is short.',
        },
        {
            topic: 'Differential calculus',
            title: 'Differentiating trigonometric functions',
            syllabusRefs: ['Differential calculus', 'MAV-12-04'],
            points: [
                'The derivatives of sin x, cos x and tan x',
                'The chain rule with trigonometric functions',
                'Products and quotients that mix exponential, logarithmic and trigonometric functions',
                'Equations of tangents and normals',
            ],
            keySkill: 'Deciding which of the product, quotient and chain rules a question needs.',
        },
        {
            topic: 'Term review',
            title: 'Consolidation and term test',
            syllabusRefs: ['MAV-12-01 to MAV-12-04'],
            points: [
                'Mixed HSC-style questions on graph transformations, sequences and series, and calculus, including the mistakes that cost marks most often',
                'A short test under exam conditions, marked with written feedback',
                'A plan for the summer holidays, built around the integration work that opens Term 1',
            ],
            keySkill: 'Working accurately under time pressure.',
        },
    ],
    laterTerms: [
        {
            term: 'Term 1, 2027',
            focus: 'Integral calculus: primitives, definite integrals, the fundamental theorem, and areas under and between curves.',
        },
        {
            term: 'Term 2, 2027',
            focus: 'Applications of calculus to curve sketching, optimisation, growth and decay, and motion in a straight line. Then financial mathematics, with loans and annuities.',
        },
        {
            term: 'Term 3, 2027',
            focus: 'Random variables, continuous distributions and the normal distribution. Then trial exams and revision for the HSC.',
        },
    ],
};
