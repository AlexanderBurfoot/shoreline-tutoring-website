import { describe, expect, it } from 'vitest';

import { knowledgeEntries } from '../chatbotKnowledge';

/**
 * Checks the answers against themselves.
 *
 * Every figure in the bank is hand written, and a slip in an arithmetic step or a
 * physical constant survives proofreading easily. These tests found two entries
 * worth correcting when first written, and exist so that the next batch of
 * answers cannot reintroduce the same kind of error unnoticed.
 */

const SUPERSCRIPT_DIGITS: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-',
};

function toNumber(text: string): number | null {
    const cleaned = text.replace(/,/g, '').trim().replace(/\.$/, '');
    const power = /^(-?[\d.]+) ?× ?10(⁻?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/.exec(cleaned);
    if (power) {
        const exponent = [...power[2]].map((c) => SUPERSCRIPT_DIGITS[c] ?? c).join('');
        return Number(power[1]) * 10 ** Number(exponent);
    }
    return /^-?[\d.]+$/.test(cleaned) ? Number(cleaned) : null;
}

const NUMBER = String.raw`-?\d[\d,]*(?:\.\d+)?(?: ?× ?10⁻?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)?`;
const CHAIN = new RegExp(
    `(${NUMBER})((?: ?[×÷+−] ?${NUMBER})+) ?= ?(${NUMBER})(%| ?× ?10⁻?[⁰¹²³⁴⁵⁶⁷⁸⁹]+| ?× ?[A-Za-z])?`,
    'g',
);

/** Evaluates the chain with normal precedence, so × binds tighter than −. */
function evaluateChain(first: string, rest: string): number | null {
    let total = toNumber(first);
    if (total === null) {
        return null;
    }
    const steps = [...rest.matchAll(new RegExp(`([×÷+−]) ?(${NUMBER})`, 'g'))];
    const products: number[] = [total];
    const signs: number[] = [1];
    for (const [, operator, operand] of steps) {
        const value = toNumber(operand);
        if (value === null) {
            return null;
        }
        if (operator === '×') {
            products[products.length - 1] *= value;
        } else if (operator === '÷') {
            if (value === 0) {
                return null;
            }
            products[products.length - 1] /= value;
        } else {
            signs.push(operator === '+' ? 1 : -1);
            products.push(value);
        }
    }
    total = 0;
    products.forEach((product, index) => {
        total = (total ?? 0) + signs[index] * product;
    });
    return total;
}

describe('the figures in the answers', () => {
    it('states arithmetic that actually works out', () => {
        const wrong: string[] = [];
        for (const entry of knowledgeEntries) {
            const answer = entry.answer.replace(/\s+/g, ' ');
            for (const hit of answer.matchAll(CHAIN)) {
                /* A trailing %, power of ten or unknown means the captured number is
                   not the whole result; a following operator means the chain
                   continues. Neither can be compared in isolation. */
                if (hit[4]) {
                    continue;
                }
                const index = hit.index ?? 0;
                /* A slash either side means the number is part of a fraction, as in
                   "x/3 + 2 = 7", where the 3 is a denominator rather than the start
                   of a chain. Reading it as one gave a false failure. */
                if (/[×÷+−(/]\s*$|½\s*$|ln\s*$|log\s*$|√\s*$/.test(answer.slice(Math.max(0, index - 6), index))) {
                    continue;
                }
                if (/^\s*[×÷+−=/]/.test(answer.slice(index + hit[0].length))) {
                    continue;
                }
                const expected = evaluateChain(hit[1], hit[2]);
                const stated = toNumber(hit[3]);
                if (expected === null || stated === null) {
                    continue;
                }
                if (Math.abs(expected - stated) > Math.max(Math.abs(expected) * 0.02, 0.02)) {
                    wrong.push(`${entry.id}: "${hit[0]}" should be ${expected}`);
                }
            }
        }
        expect(wrong).toEqual([]);
    });

    /* Two entries quoting the same constant differently means one of them is
       wrong, which is cheaper to catch here than in a student's exam. */
    it.each([
        ['acceleration due to gravity', /\b9\.(\d+) m s/g, '8'],
        ['the speed of light', /\b(\d\.\d+) ?× ?10⁸ m/g, '3.00'],
        ['the Planck constant', /\b(\d\.\d+) ?× ?10⁻³⁴/g, '6.626'],
        ['the Avogadro constant', /\b(\d\.\d+) ?× ?10²³/g, '6.022'],
        ['the specific heat of water', /\b(\d\.\d+) J g⁻¹/g, '4.18'],
    ])('quotes %s consistently', (_name, pattern, expected) => {
        const values = new Set<string>();
        for (const entry of knowledgeEntries) {
            for (const hit of entry.answer.matchAll(pattern)) {
                values.add(hit[1]);
            }
        }
        expect([...values].sort()).toEqual([expected]);
    });
});
