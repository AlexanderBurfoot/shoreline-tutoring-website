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
        aliases: ['sketching a line', 'x and y intercepts', 'gradient intercept method'],
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
        question: 'How do I know a problem has two unknowns?',
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
    {
        id: 'maths-expanding-binomials',
        subject: 'mathematics',
        question: 'How do I expand two brackets?',
        aliases: ['expanding two brackets', 'foil method', 'perfect square expansion', 'difference of two squares expansion'],
        answer:
            'Multiply every term in the first bracket by every term in the second, then collect like terms. Learn the ' +
            'two patterns: (a + b)² = a² + 2ab + b², and (a + b)(a − b) = a² − b², which saves time in both ' +
            'directions.',
    },
    {
        id: 'maths-factorising-methods',
        subject: 'mathematics',
        question: 'Which factorising method should I try first?',
        aliases: ['which factorising method', 'order of factorising', 'grouping in pairs'],
        answer:
            'Always take out the highest common factor first. Then check for a difference of two squares, then a ' +
            'quadratic trinomial, then grouping in pairs for four terms. A fully factorised answer often needs two of ' +
            'these in sequence.',
    },
    {
        id: 'maths-quadratic-non-monic',
        subject: 'mathematics',
        question: 'How do I factorise a quadratic when the leading coefficient is not one?',
        aliases: ['non monic quadratic', 'factorising 2x squared'],
        answer:
            'Find two numbers multiplying to the product of the first and last coefficients and adding to the middle ' +
            'one, split the middle term with them, then factorise in pairs. Checking by expanding takes ten seconds ' +
            'and is worth it.',
    },
    {
        id: 'maths-algebraic-fraction-operations',
        subject: 'mathematics',
        question: 'How do I add and subtract algebraic fractions?',
        aliases: ['common denominator with algebra', 'subtracting algebraic fractions'],
        answer:
            'Factorise every denominator first, then build the lowest common denominator from the distinct factors. ' +
            'Multiply each numerator by what its denominator was missing, combine, then factorise the result to see ' +
            'if anything cancels.',
    },
    {
        id: 'maths-surd-operations',
        subject: 'mathematics',
        question: 'How do I add, multiply and rationalise surds?',
        aliases: ['adding surds', 'multiplying surds', 'rationalising the denominator'],
        answer:
            'Simplify each surd first, then add only like surds. Multiplying uses √a × √b = √(ab). To rationalise, ' +
            'multiply by the surd itself, or by the conjugate when the denominator is a binomial.',
    },
    {
        id: 'maths-index-negative-fractional',
        subject: 'mathematics',
        question: 'What do negative and fractional indices mean?',
        aliases: ['negative index', 'fractional index', 'index as a root'],
        answer:
            'A negative index means the reciprocal, so x⁻² is 1/x². A fractional index means a root: x^(1/2) is √x ' +
            'and x^(2/3) is the cube root of x squared. The index laws still apply unchanged.',
    },
    {
        id: 'maths-simultaneous-nonlinear',
        subject: 'mathematics',
        question: 'How do I solve simultaneous equations when one is not linear?',
        aliases: ['non linear simultaneous equations', 'line and parabola intersection', 'substitution with a quadratic'],
        answer:
            'Substitute the linear equation into the other so you get one quadratic in one variable, solve it, then ' +
            'find the matching values. Two solutions mean the line cuts the curve twice, one means it is tangent, and ' +
            'none means they never meet.',
    },
    {
        id: 'maths-inequalities-quadratic',
        subject: 'mathematics',
        question: 'How do I solve a quadratic inequality?',
        aliases: ['quadratic inequality', 'sign of a quadratic', 'when is the parabola positive'],
        answer:
            'Factorise, find the roots, then sketch the parabola and read off where it lies above or below the axis. ' +
            'Testing a single value in each region is the safest check, and the answer is usually two intervals or ' +
            'one between the roots.',
    },
    {
        id: 'maths-inequalities-fractions',
        subject: 'mathematics',
        question: 'How do I solve an inequality with a variable in the denominator?',
        aliases: ['inequality with a fraction', 'variable in the denominator inequality', 'multiplying by an unknown sign'],
        answer:
            'Do not multiply by the denominator, since its sign is unknown. Move everything to one side, combine into ' +
            'a single fraction, then use a sign diagram of the numerator and denominator, excluding where the ' +
            'denominator is zero.',
    },
    {
        id: 'maths-absolute-value-equations',
        subject: 'mathematics',
        question: 'How do I solve an equation with absolute value?',
        aliases: ['absolute value equation', 'modulus equation', 'two cases for absolute value'],
        answer:
            'Split it into two cases, one with the bracket as written and one with its sign reversed, solve both, ' +
            'then check each against the original, since one may not satisfy it.',
    },
    {
        id: 'maths-word-problem-setup',
        subject: 'mathematics',
        question: 'How do I set up a problem where two quantities are related?',
        aliases: ['setting up a word problem', 'two related quantities'],
        answer:
            'Name the smaller quantity with a letter, write the other in terms of it, then write the sentence the ' +
            'question gives you as an equation. Always state what your letter stands for, including the units.',
    },
    {
        id: 'maths-checking-algebra',
        subject: 'mathematics',
        question: 'How do I check an algebraic answer?',
        aliases: ['checking an algebra answer', 'substituting back', 'verifying a solution'],
        answer:
            'Substitute the answer into the original equation, not into a line of your own working, since an error ' +
            'earlier would be confirmed rather than caught. For a word problem, also check it makes sense: a negative ' +
            'number of people is a signal.',
    },
];
