/**
 * Mathematics: algebra, Years 7 to 12.
 *
 * Manipulating expressions, solving equations and the algebraic technique the
 * senior courses assume.
 */
import type { StudyEntry } from '../types';

export const mathematicsAlgebraEntries: StudyEntry[] = [
    {
        id: 'maths-substitution',
        subject: 'mathematics',
        question: 'How do I substitute into a formula?',
        aliases: ['substitution', 'substituting values', 'evaluating an expression', 'putting numbers into a formula'],
        answer:
            'Replace each letter with its value in brackets, then follow the order of operations. ' +
            'Brackets matter with negatives: (−3)² is 9 while −3² is −9. ' +
            'Write the formula first, then the substitution, then the answer, since method marks come from those ' +
            'lines.',
    },
    {
        id: 'maths-like-terms',
        subject: 'mathematics',
        question: 'How do I collect like terms?',
        aliases: ['like terms', 'simplifying expressions', 'collecting terms', 'adding algebra'],
        answer:
            'Only terms with exactly the same variables and powers can be combined: 3x and 5x make 8x, but 3x and ' +
            '3x² cannot be joined. ' +
            'Keep the sign in front of each term with it when rearranging, which is where most errors happen.',
    },
    {
        id: 'maths-algebraic-fractions',
        subject: 'mathematics',
        question: 'How do I simplify algebraic fractions?',
        aliases: ['algebraic fractions', 'cancelling algebra', 'adding algebraic fractions', 'common denominator algebra'],
        answer:
            'Factorise the top and bottom first, then cancel whole factors, never individual terms. ' +
            'To add or subtract, use a common denominator as with numbers. ' +
            'To divide, multiply by the reciprocal. State any value of x that would make a denominator zero.',
    },
    {
        id: 'maths-factorising-quadratics',
        subject: 'mathematics',
        question: 'How do I factorise a quadratic?',
        aliases: ['factorising a quadratic', 'trinomial', 'cross method', 'two numbers that multiply', 'factorise x2 + bx + c'],
        answer:
            'For x² + bx + c, find two numbers that multiply to c and add to b, then write the two brackets. ' +
            'When the coefficient of x² is not 1, multiply it by c, find two numbers that multiply to that and add to ' +
            'b, split the middle term and factorise in pairs.',
    },
    {
        id: 'maths-completing-square',
        subject: 'mathematics',
        question: 'How do I complete the square?',
        aliases: ['completing the square', 'perfect square form', 'vertex form conversion', 'half the coefficient'],
        answer:
            'Take half the coefficient of x, square it, then add and subtract it. ' +
            'x² + 6x + 5 becomes (x + 3)² − 9 + 5 = (x + 3)² − 4. ' +
            'It gives the turning point directly and solves any quadratic, which is where the quadratic formula comes ' +
            'from.',
    },
    {
        id: 'maths-rearranging-formulas',
        subject: 'mathematics',
        question: 'How do I change the subject of a formula?',
        aliases: ['change the subject', 'rearranging a formula', 'making x the subject', 'transposing'],
        answer:
            'Undo operations in reverse order, doing the same to both sides. ' +
            'If the new subject appears twice, gather those terms on one side, factorise it out, then divide. ' +
            'Square roots and squares undo each other, but remember the plus or minus when you take a root.',
    },
    {
        id: 'maths-linear-graph-sketching',
        subject: 'mathematics',
        question: 'How do I sketch a straight line quickly?',
        aliases: ['sketching a line', 'x and y intercepts', 'gradient intercept method', 'plotting a linear graph'],
        answer:
            'From y = mx + b, plot b on the y-axis, then use the gradient as rise over run to find a second point. ' +
            'Alternatively find both intercepts: set x = 0 for the y-intercept and y = 0 for the x-intercept, then ' +
            'join them.',
    },
    {
        id: 'maths-word-problems',
        subject: 'mathematics',
        question: 'How do I turn a word problem into an equation?',
        aliases: ['word problems', 'forming an equation', 'defining a variable', 'translating words to algebra'],
        answer:
            'Define the variable in words first, such as "let x be the number of tickets". ' +
            'Translate each sentence into an expression, then set up the equality the question implies. ' +
            'Solve, then answer in a sentence with units, checking the answer makes sense in the context.',
    },
    {
        id: 'maths-simultaneous-word',
        subject: 'mathematics',
        question: 'When do I need two equations?',
        aliases: ['two unknowns', 'setting up simultaneous equations', 'two variables word problem'],
        answer:
            'Whenever a problem has two unknowns, you need two independent pieces of information. ' +
            'Define both variables, write one equation for each fact, then solve by substitution or elimination. ' +
            'Check the answer satisfies both equations, not just the one you used last.',
    },
    {
        id: 'maths-exponential-equations',
        subject: 'mathematics',
        question: 'How do I solve an equation with the unknown in the index?',
        aliases: ['exponential equation', 'unknown in the index', 'same base method', 'solving with logs'],
        answer:
            'If both sides can be written with the same base, equate the indices. ' +
            'If not, take logarithms of both sides and bring the index down as a multiplier, then divide. ' +
            'Check whether the question wants an exact answer or a decimal.',
    },
];
