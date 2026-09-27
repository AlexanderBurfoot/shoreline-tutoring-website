import { describe, expect, it } from 'vitest';

import { evaluateArithmetic } from './arithmetic';
import { answerArithmetic } from './arithmeticAnswer';
import { studyEntries } from '../data/studyReference';
import { knowledgeEntries } from '../data/chatbotKnowledge';
import { looksLikeAssessmentRequest } from './assessmentGuard';

/** The value a question should produce, whatever wording it arrives in. */
describe('evaluateArithmetic', () => {
    it.each([
        ['what is 9 x 7', 63],
        ['9 x 7', 63],
        ['what is 9 times 7', 63],
        ['calculate 9 × 7', 63],
        ['whats 9*7', 63],
        ['what is 12 + 15', 27],
        ['what is 100 - 37', 63],
        ['what is 144 divided by 12', 12],
        ['what is 144 / 12', 12],
        ['what is 7 multiplied by 8', 56],
        ['what is 20 take away 6', 14],
    ])('reads "%s" as %i', (question, expected) => {
        expect(evaluateArithmetic(question)?.value).toBe(expected);
    });

    /* Order of operations is the whole point of a calculator that shows method:
       a student who answers 42 to the second one has learned the wrong thing. */
    it.each([
        ['what is 6 + 4 x 3', 18],
        ['what is 2 + 3 x 4', 14],
        ['what is (2 + 3) x 4', 20],
        ['what is 100 - 20 / 4', 95],
        ['what is 2 ^ 3 ^ 2', 512],
        ['what is 12 / 4 / 3', 1],
        ['what is 20 - 5 - 3', 12],
    ])('applies precedence in "%s" to give %i', (question, expected) => {
        expect(evaluateArithmetic(question)?.value).toBe(expected);
    });

    it.each([
        ['what is 15% of 80', 12],
        ['what is 25% of 64', 16],
        ['what is 10 percent of 250', 25],
        ['what is 150% of 40', 60],
    ])('reads the percentage in "%s" as %i', (question, expected) => {
        expect(evaluateArithmetic(question)?.value).toBe(expected);
    });

    it.each([
        ['what is the square root of 81', 9],
        ['square root of 144', 12],
        ['what is √49', 7],
        ['what is 5 squared', 25],
        ['what is 3 cubed', 27],
        ['what is 2 to the power of 5', 32],
    ])('reads "%s" as %i', (question, expected) => {
        expect(evaluateArithmetic(question)?.value).toBe(expected);
    });

    it('keeps decimals to a sensible precision', () => {
        expect(evaluateArithmetic('what is 10 / 3')?.value).toBeCloseTo(3.3333, 4);
        expect(answerArithmetic('what is 10 / 3')).toContain('about 3.3333');
        expect(answerArithmetic('what is 7.5 x 4')).toContain('= 30');
    });

    /* Anything that is not purely a sum must decline, so a concept question is
       never answered with a number. This is the guard the whole design rests on. */
    it.each([
        'what is a z score',
        'how do I add fractions',
        'what is the quadratic formula',
        'solve 2x + 3 = 11',
        'what is x times 7',
        'how much does tutoring cost',
        'what is 9 x 7 and also explain why',
        'what is the area of a circle with radius 7',
        'my friend has 9 apples and 7 oranges, how many pieces of fruit',
        'what is 7',
        'what is 3 + ',
        'what is () + 2',
        'what is 5 / 0',
        'what is the square root of -9',
        '',
        '?',
    ])('declines "%s"', (question) => {
        expect(evaluateArithmetic(question)).toBeNull();
        expect(answerArithmetic(question)).toBeNull();
    });

    it('declines a result too large to be meaningful', () => {
        expect(evaluateArithmetic('what is 99 ^ 99')).toBeNull();
    });
});

describe('answerArithmetic', () => {
    it('states the sum and the result', () => {
        expect(answerArithmetic('what is 9 x 7')).toContain('9 × 7 = 63');
    });

    it('shows the ten per cent step for a percentage', () => {
        const reply = answerArithmetic('what is 15% of 80');
        expect(reply).toContain('15% of 80 = 12');
        expect(reply).toContain('Ten per cent of 80 is 8 and five per cent is 4');
    });

    it('proves an exact square root by multiplying back', () => {
        expect(answerArithmetic('what is the square root of 81')).toContain('9 × 9 = 81');
    });

    it('explains what an index counts', () => {
        expect(answerArithmetic('what is 2 to the power of 5')).toContain('2 × 2 × 2 × 2 × 2');
    });

    it('never claims an exact value for a rounded one', () => {
        const reply = answerArithmetic('what is 22 / 7');
        expect(reply).toContain('about');
        expect(reply).not.toMatch(/= 3\.1429\b/);
    });
});

/* The calculator runs before the reference bank, so any bank question it
   swallowed would make that entry unreachable. None may parse as a sum. */
describe('the calculator and the reference bank', () => {
    it('does not answer any bank entry question as arithmetic', () => {
        const swallowed = knowledgeEntries
            .filter((entry) => evaluateArithmetic(entry.question) !== null)
            .map((entry) => `${entry.id}: ${entry.question}`);
        expect(swallowed).toEqual([]);
    });

    it('does not answer any study entry alias as arithmetic', () => {
        const swallowed = studyEntries
            .flatMap((entry) => entry.aliases.map((alias) => ({ id: entry.id, alias })))
            .filter(({ alias }) => evaluateArithmetic(alias) !== null)
            .map(({ id, alias }) => `${id}: ${alias}`);
        expect(swallowed).toEqual([]);
    });

    /* A request to complete assessed work must still be refused, so the
       calculator must not accept anything the guard would have caught. */
    it('leaves assessment requests to the guard', () => {
        const questions = [
            'do this question 3 for me',
            'answer the following: 9 x 7',
            'solve my homework 12 + 15',
            'complete these 5 x 5',
        ];
        for (const question of questions) {
            expect(looksLikeAssessmentRequest(question), question).toBe(true);
        }
    });
});
