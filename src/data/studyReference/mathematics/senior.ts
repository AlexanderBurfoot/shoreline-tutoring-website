/**
 * Mathematics, Years 11 and 12: the rest.
 *
 * Series, finance and the topics that do not belong to the calculus,
 * functions, trigonometry or probability banks.
 */
import type { StudyEntry } from '../types';

export const mathematicsSeniorEntries: StudyEntry[] = [
    {
        id: 'maths-quadratic-formula',
        subject: 'mathematics',
        question: 'What is the quadratic formula?',
        aliases: ['quadratic formula', 'solve a quadratic', 'roots of a quadratic', 'ax2 + bx + c'],
        answer:
            'For ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / 2a. ' +
            'Try factorising first, since it is faster when it works, and keep the ± so you find both roots.',
    },
    {
        id: 'maths-discriminant',
        subject: 'mathematics',
        question: 'What does the discriminant tell me?',
        aliases: ['discriminant', 'b squared minus 4ac', 'how many roots', 'delta quadratic'],
        answer:
            'The discriminant is Δ = b² − 4ac. If Δ > 0 there are two real roots, if Δ = 0 there is one repeated ' +
            'root, and if Δ < 0 there are no real roots. It tells you how many times the parabola meets the x-axis.',
    },
    {
        id: 'maths-log-laws',
        subject: 'mathematics',
        question: 'What are the logarithm laws?',
        aliases: ['log laws', 'logarithm rules', 'ln rules', 'change of base'],
        answer:
            'log(ab) = log a + log b, log(a/b) = log a − log b, and log(aⁿ) = n log a. ' +
            'Change of base is log_b a = log a / log b. Logs are the inverse of powers: if aˣ = b then x = log_a b.',
    },
    {
        id: 'maths-arithmetic-series',
        subject: 'mathematics',
        question: 'What are the arithmetic sequence and series formulas?',
        aliases: ['arithmetic sequence', 'arithmetic series', 'common difference', 'sum of a sequence'],
        answer:
            'The nth term is Tₙ = a + (n − 1)d, where a is the first term and d the common difference. ' +
            'The sum of n terms is Sₙ = n/2 × (2a + (n − 1)d), or n/2 × (a + l) when you know the last term l.',
    },
    {
        id: 'maths-geometric-series',
        subject: 'mathematics',
        question: 'What are the geometric sequence and series formulas?',
        aliases: ['geometric sequence', 'geometric series', 'common ratio', 'limiting sum', 'sum to infinity'],
        answer:
            'The nth term is Tₙ = arⁿ⁻¹. The sum of n terms is Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1. ' +
            'When |r| < 1 the series has a limiting sum, S∞ = a/(1 − r).',
    },
    {
        id: 'maths-compound-interest',
        subject: 'mathematics',
        question: 'What is the compound interest formula?',
        aliases: ['compound interest', 'investment formula', 'interest on interest'],
        answer:
            'A = P(1 + r)ⁿ, where r is the rate per period as a decimal and n the number of periods. ' +
            'Interest is earned on interest already added, so the balance curves upward. ' +
            'Divide an annual rate by the number of compounding periods a year, and multiply n by the same.',
    },
    {
        id: 'maths-induction',
        subject: 'mathematics',
        question: 'How does proof by mathematical induction work?',
        aliases: ['proof by induction', 'mathematical induction', 'induction steps'],
        answer:
            'Three steps. Prove the statement for the first value, usually n = 1. Assume it true for n = k. ' +
            'Then prove it follows for n = k + 1, using the assumption somewhere. Say clearly where you used it.',
    },
    {
        id: 'maths-vectors',
        subject: 'mathematics',
        question: 'How do I work with vectors?',
        aliases: ['vectors', 'vector magnitude', 'component form', 'adding vectors', 'direction of a vector'],
        answer:
            'A vector in component form is (x, y). Its magnitude is |v| = √(x² + y²) and its direction comes from tan θ = y/x. ' +
            'The dot product is a·b = x₁x₂ + y₁y₂ = |a||b| cos θ, so a dot product of zero means the vectors are perpendicular.',
    },
    {
        id: 'maths-financial-annuities',
        subject: 'mathematics',
        question: 'How do loans and annuities work?',
        aliases: ['annuity', 'loan repayments'],
        answer:
            'Each period, interest is added and a repayment is subtracted, so Aₙ = Aₙ₋₁(1 + r) − M. ' +
            'An annuity builds the same way with deposits instead. ' +
            'Future value asks what an investment grows to; present value asks what it is worth today.',
    },
    {
        id: 'maths-logs-with-gp',
        subject: 'mathematics',
        question: 'How do I find how many terms or years using logarithms?',
        aliases: ['smallest n such that', 'how many years', 'solving exponential equations', 'logs to solve for n'],
        answer:
            'Set up the inequality, isolate the power, then take logarithms of both sides and divide. ' +
            'Because n counts whole terms or years, round up to the next whole number rather than to the nearest, and ' +
            'check by substituting that value back in.',
    },
];
