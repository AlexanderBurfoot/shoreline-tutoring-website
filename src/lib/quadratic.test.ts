import { describe, expect, it } from 'vitest';

import { readQuadratic, solveQuadratic } from './quadratic';
import { answerQuadratic } from './quadraticAnswer';
import { knowledgeEntries } from '../data/chatbotKnowledge';
import { studyEntries } from '../data/studyReference';

describe('readQuadratic', () => {
    it.each([
        ['y = 2x^2 + 4x - 7', { a: 2, b: 4, c: -7 }],
        ['2x^2 + 4x - 7 = 0', { a: 2, b: 4, c: -7 }],
        ['solve x^2 - 5x + 6 = 0', { a: 1, b: -5, c: 6 }],
        ['x^2 + 2x + 1 = 0', { a: 1, b: 2, c: 1 }],
        ['x² - 9 = 0', { a: 1, b: 0, c: -9 }],
        ['x^2 + 4x = 0', { a: 1, b: 4, c: 0 }],
        ['-x^2 + 3x - 2 = 0', { a: -1, b: 3, c: -2 }],
        ['find the roots of 3x^2 - 12', { a: 3, b: 0, c: -12 }],
        ['f(x) = x^2 - 6x + 9', { a: 1, b: -6, c: 9 }],
    ])('reads "%s"', (question, expected) => {
        const read = readQuadratic(question);
        expect({ a: read?.a, b: read?.b, c: read?.c }).toEqual(expected);
    });

    /* Terms on the right move across, so an equation need not be tidied first. */
    it.each([
        ['2x^2 + 4x = 7', { a: 2, b: 4, c: -7 }],
        ['x^2 = 9', { a: 1, b: 0, c: -9 }],
        ['x^2 + 5x = 2x - 4', { a: 1, b: 3, c: 4 }],
    ])('moves the right side across in "%s"', (question, expected) => {
        const read = readQuadratic(question);
        expect({ a: read?.a, b: read?.b, c: read?.c }).toEqual(expected);
    });

    it('marks the function form so the vertex is reported', () => {
        expect(readQuadratic('y = x^2 - 4')?.asFunction).toBe(true);
        expect(readQuadratic('x^2 - 4 = 0')?.asFunction).toBe(false);
    });

    it.each([
        'what is a quadratic equation',
        'how do I use the quadratic formula',
        '2x + 3 = 11',
        'x^3 - 2x^2 + 1 = 0',
        'x^2 + y^2 = 9',
        'what is 9 x 7',
        'how much does tutoring cost',
        'y = sin(2x) + 1',
        '',
    ])('declines "%s"', (question) => {
        expect(readQuadratic(question)).toBeNull();
        expect(answerQuadratic(question)).toBeNull();
    });
});

describe('solveQuadratic', () => {
    it('solves the case that used to be answered from a trigonometry entry', () => {
        const solved = solveQuadratic('y = 2x^2 + 4x - 7');
        expect(solved?.discriminant).toBe(72);
        expect(solved?.exactRoots).toEqual(['x = (−2 + 3√2)/2', 'x = (−2 − 3√2)/2']);
        expect(solved?.decimalRoots[0]).toBeCloseTo(1.1213, 4);
        expect(solved?.decimalRoots[1]).toBeCloseTo(-3.1213, 4);
        expect(solved?.vertex).toEqual({ x: -1, y: -9 });
        expect(solved?.opensUpwards).toBe(true);
    });

    it('gives rational roots with no surd when the discriminant is a perfect square', () => {
        const solved = solveQuadratic('x^2 - 5x + 6 = 0');
        expect(solved?.discriminant).toBe(1);
        expect(solved?.exactRoots).toEqual(['x = 3', 'x = 2']);
    });

    it('reports one repeated root when the discriminant is zero', () => {
        const solved = solveQuadratic('x^2 - 6x + 9 = 0');
        expect(solved?.discriminant).toBe(0);
        expect(solved?.exactRoots).toEqual(['x = 3']);
        expect(solved?.decimalRoots).toEqual([3]);
    });

    it('reports no real roots when the discriminant is negative', () => {
        const solved = solveQuadratic('x^2 + x + 5 = 0');
        expect(solved?.discriminant).toBe(-19);
        expect(solved?.exactRoots).toEqual([]);
        expect(solved?.decimalRoots).toEqual([]);
    });

    it('reduces the fraction and the surd together', () => {
        /* 2x² + 4x + 1: discriminant 8, roots (-2 ± √2)/2 after dividing by 2. */
        const solved = solveQuadratic('2x^2 + 4x + 1 = 0');
        expect(solved?.exactRoots).toEqual(['x = (−2 + √2)/2', 'x = (−2 − √2)/2']);
    });

    it('handles a negative leading coefficient', () => {
        const solved = solveQuadratic('-x^2 + 3x - 2 = 0');
        expect(solved?.discriminant).toBe(1);
        expect(solved?.opensUpwards).toBe(false);
        expect(solved?.decimalRoots.map((r) => Math.round(r)).sort()).toEqual([1, 2]);
    });

    /* Every exact root must actually satisfy the equation, checked numerically
       so a tidy-looking but wrong surd cannot pass. */
    it.each([
        'y = 2x^2 + 4x - 7',
        '2x^2 + 4x + 1 = 0',
        'x^2 - 5x + 6 = 0',
        '3x^2 - 7x + 2 = 0',
        'x^2 - 2 = 0',
        '5x^2 + 3x - 8 = 0',
    ])('the roots of "%s" satisfy the equation', (question) => {
        const solved = solveQuadratic(question)!;
        const { a, b, c } = solved.quadratic;
        for (const root of solved.decimalRoots) {
            expect(a * root * root + b * root + c).toBeCloseTo(0, 8);
        }
    });
});

describe('answerQuadratic', () => {
    it('shows the coefficients, the discriminant and both forms of the roots', () => {
        const reply = answerQuadratic('y = 2x^2 + 4x - 7')!;
        expect(reply).toContain('a = 2, b = 4 and c = −7');
        expect(reply).toContain('is 72, which is positive');
        expect(reply).toContain('(−2 + 3√2)/2');
        expect(reply).toContain('about 1.12 and −3.12');
        expect(reply).toContain('vertex is at (−1, −9)');
        expect(reply).toContain('opens upwards');
    });

    it('omits the vertex when the question was an equation to solve', () => {
        const reply = answerQuadratic('x^2 - 5x + 6 = 0')!;
        expect(reply).not.toContain('vertex');
        expect(reply).toContain('x = 3');
    });

    /* A negative coefficient bigger than one must still use the minus sign the
       rest of the bank uses, not a keyboard hyphen. */
    it('writes a negative leading coefficient with a proper minus sign', () => {
        const reply = answerQuadratic('y = -2x^2 + 4x + 1')!;
        expect(reply).toContain('\u22122x\u00b2');
        expect(reply).not.toContain('-2x');
        expect(reply).toContain('opens downwards');
    });

    it('says plainly when there are no real roots', () => {
        expect(answerQuadratic('x^2 + x + 5 = 0')).toContain('never crosses the x-axis');
    });
});

/* The solver runs before the reference bank, so a bank question it swallowed
   would make that entry unreachable. */
describe('the solver and the reference bank', () => {
    it('does not read any bank entry question as a quadratic', () => {
        const swallowed = knowledgeEntries
            .filter((entry) => readQuadratic(entry.question) !== null)
            .map((entry) => `${entry.id}: ${entry.question}`);
        expect(swallowed).toEqual([]);
    });

    it('does not read any study entry alias as a quadratic', () => {
        const swallowed = studyEntries
            .flatMap((entry) => entry.aliases.map((alias) => ({ id: entry.id, alias })))
            .filter(({ alias }) => readQuadratic(alias) !== null)
            .map(({ id, alias }) => `${id}: ${alias}`);
        expect(swallowed).toEqual([]);
    });
});
