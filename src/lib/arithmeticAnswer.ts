/**
 * Turns a computed result into the sentence the assistant says.
 *
 * Every sentence here is a fixed template filled with numbers this code worked
 * out, so the guarantee that no model-written wording reaches a visitor still
 * holds. The wording shows the method as well as the result, because a tutoring
 * assistant that only returns a number teaches nothing.
 */
import { evaluateArithmetic, formatNumber, type ArithmeticResult } from './arithmetic';

const SUPERSCRIPTS = '\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079';

/**
 * Writes the expression back using the signs a student would see. The stored
 * form has no spaces, so this is where they go back in.
 */
function displayExpression(expression: string): string {
    return expression
        /* A single-digit index reads better raised, as it would in a textbook. */
        .replace(/\^(\d)(?!\d)/g, (_match, digit: string) => SUPERSCRIPTS[Number(digit)])
        .replace(/\^/g, ' ^ ')
        .replace(/sqrt/g, '\u221a')
        .replace(/%\*/g, '% of ')
        .replace(/\*/g, ' \u00d7 ')
        .replace(/\//g, ' \u00f7 ')
        .replace(/\+/g, ' + ')
        /* Only a minus between two values is spaced; a leading one stays put. */
        .replace(/(?<=[\d)])-/g, ' \u2212 ')
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * The 10% and 1% steps a student can do without a calculator. Only offered when
 * the percentage is a whole number of tens or fives, where the shortcut is
 * genuinely quicker than multiplying.
 */
function percentageMethod(expression: string): string | null {
    const parts = /^(\d+(?:\.\d+)?)%\*(\d+(?:\.\d+)?)$/.exec(expression);
    if (!parts) {
        return null;
    }
    const percent = Number(parts[1]);
    const amount = Number(parts[2]);
    if (!Number.isInteger(percent) || percent % 5 !== 0 || percent > 100) {
        return null;
    }

    const ten = formatNumber(amount / 10).text;
    if (percent % 10 === 0) {
        const lots = percent / 10;
        return lots === 1
            ? `Ten per cent of ${formatNumber(amount).text} is ${ten}.`
            : `Ten per cent of ${formatNumber(amount).text} is ${ten}, and there are ${lots} of those.`;
    }
    const five = formatNumber(amount / 20).text;
    return `Ten per cent of ${formatNumber(amount).text} is ${ten} and five per cent is ${five}, which add to the answer.`;
}

/** For an exact square root, the multiplication that proves it. */
function rootMethod(result: ArithmeticResult): string | null {
    if (result.rounded || !Number.isInteger(result.value)) {
        return null;
    }
    const squared = result.value * result.value;
    const inner = /^sqrt\s*(\d+(?:\.\d+)?)$/.exec(result.expression);
    if (!inner || Number(inner[1]) !== squared) {
        return null;
    }
    const shown = formatNumber(result.value).text;
    return `${shown} × ${shown} = ${formatNumber(squared).text}, which is what makes it exact.`;
}

/** For a whole-number power, what the index is counting. */
function powerMethod(result: ArithmeticResult): string | null {
    const parts = /^(\d+(?:\.\d+)?)\^(\d+)$/.exec(result.expression);
    if (!parts) {
        return null;
    }
    const base = parts[1];
    const index = Number(parts[2]);
    if (index < 2 || index > 8) {
        return null;
    }
    return `The index says how many times to multiply ${base} by itself, so ${Array(index).fill(base).join(' × ')}.`;
}

/**
 * The reply for an arithmetic question, or null when the question is not one.
 * Callers treat null as "carry on to the reference bank".
 */
export function answerArithmetic(question: string): string | null {
    const result = evaluateArithmetic(question);
    if (!result) {
        return null;
    }

    const shown = formatNumber(result.value).text;
    const sum = displayExpression(result.expression);
    const opening = result.rounded
        ? `${sum} is about ${shown}.`
        : `${sum} = ${shown}.`;

    const method = result.shape === 'percentage'
        ? percentageMethod(result.expression)
        : result.shape === 'root'
            ? rootMethod(result)
            : result.shape === 'power'
                ? powerMethod(result)
                : null;

    /* No standing reminder to show working: it would repeat on every sum and
       read as nagging by the second one. The method line carries the teaching
       where there is any, and assessmentGuard.ts handles the real risk. */
    return [opening, method].filter(Boolean).join(' ');
}
