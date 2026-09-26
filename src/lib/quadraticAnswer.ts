/**
 * The sentences said about a quadratic, as fixed templates filled with computed
 * numbers. No model wording reaches a visitor, same guarantee as everywhere else.
 *
 * The working is shown in the order a marker expects it: the coefficients, the
 * discriminant and what its sign means, then the exact roots, then a decimal so
 * the student knows roughly where they sit.
 */
import { formatNumber } from './arithmetic';
import { solveQuadratic, type Quadratic } from './quadratic';

/** The minus sign used throughout the bank, rather than a keyboard hyphen. */
function signed(value: number): string {
    return formatNumber(value).text.replace(/-/g, '\u2212');
}

/** Writes ax² + bx + c back with the signs tidied. */
function writeQuadratic({ a, b, c }: Quadratic): string {
    const squared = a === 1 ? 'x²' : a === -1 ? '−x²' : `${signed(a)}x²`;
    const parts = [squared];
    if (b !== 0) {
        const size = Math.abs(b) === 1 ? '' : formatNumber(Math.abs(b)).text;
        parts.push(`${b < 0 ? '−' : '+'} ${size}x`);
    }
    if (c !== 0) {
        parts.push(`${c < 0 ? '−' : '+'} ${formatNumber(Math.abs(c)).text}`);
    }
    return parts.join(' ');
}

/** Reads a decimal to two places, which is enough to place a root on an axis. */
function approx(value: number): string {
    return Number(value.toFixed(2)).toString().replace(/-/g, '\u2212');
}

/**
 * The reply for a quadratic, or null when the question is not one. The caller
 * treats null as "carry on to the reference bank".
 */
export function answerQuadratic(question: string): string | null {
    const solved = solveQuadratic(question);
    if (!solved) {
        return null;
    }
    const { quadratic, discriminant, exactRoots, decimalRoots, vertex, opensUpwards } = solved;
    const { completedSquare, factorised } = solved;
    const { a, b, c } = quadratic;

    const sentences: string[] = [];
    const written = writeQuadratic(quadratic);
    sentences.push(
        `For ${quadratic.asFunction ? `y = ${written}` : `${written} = 0`}, `
        + `a = ${signed(a)}, b = ${signed(b)} and c = ${signed(c)}.`,
    );

    const discriminantText = signed(discriminant);
    if (discriminant < 0) {
        sentences.push(
            `The discriminant b² − 4ac is ${discriminantText}, which is negative, so there are no real roots `
            + `and the parabola never crosses the x-axis.`,
        );
    } else if (discriminant === 0) {
        sentences.push(
            `The discriminant b² − 4ac is 0, so there is one repeated root: ${exactRoots[0]}. `
            + `The parabola touches the x-axis there rather than crossing it.`,
        );
    } else {
        sentences.push(
            `The discriminant b² − 4ac is ${discriminantText}, which is positive, so there are two real roots.`,
        );
        if (exactRoots.length === 2) {
            const decimals = decimalRoots.map(approx);
            sentences.push(`Exactly, ${exactRoots[0]} and ${exactRoots[1]}, which are about ${decimals[0]} and ${decimals[1]}.`);
        } else {
            sentences.push(`They are about ${decimalRoots.map(approx).join(' and ')}.`);
        }
    }

    /* Both rewritten forms, since a question about a quadratic is usually asking
       for one of them: the completed square shows the vertex, and the factorised
       form shows the roots. */
    const written2 = writeQuadratic(quadratic);
    if (factorised && factorised !== `(${written2})`) {
        sentences.push(`It factorises as ${factorised}, and in completed square form it is ${completedSquare}.`);
    } else {
        sentences.push(`In completed square form that is ${completedSquare}.`);
    }

    /* The vertex is the point of writing it as a function, so only then. */
    if (quadratic.asFunction) {
        sentences.push(
            `The vertex is at (${approx(vertex.x)}, ${approx(vertex.y)}) and the parabola opens `
            + `${opensUpwards ? 'upwards' : 'downwards'}, since a is ${opensUpwards ? 'positive' : 'negative'}.`,
        );
    }

    return sentences.join(' ');
}
