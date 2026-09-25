/**
 * Mathematics: what the words in a question are asking for.
 *
 * Simplify against solve, exact against approximate, and the conventions that
 * cost marks when they are read loosely.
 */
import type { StudyEntry } from '../types';

export const mathematicsLanguageEntries: StudyEntry[] = [
    {
        id: 'maths-simplify-versus-solve',
        subject: 'mathematics',
        question: 'What is the difference between simplify and solve?',
        aliases: ['simplify versus solve', 'does simplify mean solve', 'what simplify asks for'],
        answer:
            'Simplify means rewrite the expression in a neater equivalent form, and the answer is an expression. ' +
            'Solve means find the values that make an equation true, and the answer is a number or numbers. An ' +
            'expression has no equals sign, so it cannot be solved.',
    },
    {
        id: 'maths-flipping-inequality',
        subject: 'mathematics',
        question: 'Why do I flip the inequality sign?',
        aliases: ['flipping the inequality', 'reversing an inequality sign', 'dividing an inequality by a negative'],
        answer:
            'Because multiplying or dividing by a negative reverses the order of the number line: 2 < 3 but −2 > −3. ' +
            'Adding or subtracting never reverses it, and neither does multiplying by a positive.',
    },
    {
        id: 'maths-exact-versus-approximate',
        subject: 'mathematics',
        question: 'What is the difference between an exact and an approximate answer?',
        aliases: ['exact versus approximate', 'when to leave an answer in surd form', 'exact value question'],
        answer:
            'An exact answer keeps surds, fractions and π as they are, so √2 and π/3 are exact while 1.41 and 1.05 ' +
            'are approximations. If a question says exact value, rounding loses the mark however accurate it is.',
    },
    {
        id: 'maths-radians-versus-degrees',
        subject: 'mathematics',
        question: 'When do I use radians instead of degrees?',
        aliases: ['radians or degrees', 'when to use radians', 'why calculus uses radians'],
        answer:
            'Use radians for arc length and sector area, since l = rθ and A = ½r²θ only hold in radians, and for all ' +
            'calculus with trigonometric functions, because the derivative of sin x is cos x only in radians. Check ' +
            'the calculator mode before starting.',
    },
    {
        id: 'maths-variable-versus-constant',
        subject: 'mathematics',
        question: 'What is the difference between a variable and a constant?',
        aliases: ['variable versus constant', 'what a parameter is', 'letters that do not change'],
        answer:
            'A variable stands for a quantity that changes, usually x or y. A constant has a fixed value, whether a ' +
            'number or a letter such as g or c standing for one. A parameter is constant within a problem but changes ' +
            'between problems, such as the a in y = ax².',
    },
    {
        id: 'maths-order-of-subtraction',
        subject: 'mathematics',
        question: 'Why does the order matter in subtraction and division?',
        aliases: ['does order matter in subtraction', 'is subtraction commutative', 'why a minus b is not b minus a'],
        answer:
            'Addition and multiplication give the same result either way, but subtraction and division do not: 7 − 3 ' +
            'is not 3 − 7. In a word problem the order comes from the situation, which is why reading which quantity ' +
            'is being reduced matters.',
    },
    {
        id: 'maths-null-factor-law',
        subject: 'mathematics',
        question: 'What is the null factor law?',
        aliases: ['null factor law', 'if a product is zero', 'why we set each bracket to zero'],
        answer:
            'If a product equals zero then at least one factor must be zero. That is why (x − 4)(x + 2) = 0 gives x = ' +
            '4 or x = −2. It works only against zero: if the product were 8, neither bracket has to equal 8.',
    },
    {
        id: 'maths-radical',
        subject: 'mathematics',
        question: 'What is a radical?',
        aliases: ['radical', 'root symbol', 'radicand'],
        answer:
            'The root sign and the expression under it, so √(x + 1) is a radical and x + 1 is the radicand. A radical ' +
            'with no perfect square factor is in simplest form, and an answer keeping a radical is exact rather than ' +
            'rounded.',
    },
    {
        id: 'maths-numerator',
        subject: 'mathematics',
        question: 'What is the numerator?',
        aliases: ['numerator', 'top of a fraction', 'how many parts'],
        answer:
            'The number above the line, counting how many parts you have, while the denominator below says how many ' +
            'parts make a whole. A numerator larger than the denominator means the fraction is greater than one.',
    },
    {
        id: 'maths-triangular-number',
        subject: 'mathematics',
        question: 'What is a triangular number?',
        aliases: ['triangular number', '1 3 6 10', 'sum of consecutive integers'],
        answer:
            'A total made by adding consecutive whole numbers: 1, 3, 6, 10, 15 and so on, since each can be drawn as ' +
            'a triangle of dots. The nth one is n(n + 1)/2, which is also the number of handshakes among n + 1 ' +
            'people.',
    },
    {
        id: 'maths-divisor',
        subject: 'mathematics',
        question: 'What is a divisor?',
        aliases: ['divisor', 'number you divide by', 'dividend and divisor'],
        answer:
            'The number you are dividing by, while the dividend is the number being divided and the quotient is the ' +
            'answer. In 84 ÷ 6 = 14, the divisor is 6. A divisor of a whole number with no remainder is also called a ' +
            'factor of it.',
    },
];
