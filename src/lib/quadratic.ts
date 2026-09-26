/**
 * Reads a quadratic and works out its roots, discriminant and vertex, in code.
 *
 * Typing "y = 2x^2 + 4x - 7" used to be answered from an entry about
 * trigonometric graphs, because nothing matched on keywords and the model was
 * asked to pick the nearest thing. This computes the real answer instead, and
 * like src/lib/arithmetic.ts no model is involved: every sentence is a fixed
 * template filled with numbers worked out here.
 *
 * Exact values come first, since an examination asks for (−2 + 3√2)/2 rather
 * than 1.12, and the surd is simplified and the fraction reduced the way a
 * student is expected to present it.
 *
 * Only the quadratic shape is accepted. A cubic, a second variable or anything
 * the term reader does not recognise returns null, and the caller carries on to
 * the reference bank.
 */

/** Coefficients of ax² + bx + c, with a never zero. */
export interface Quadratic {
    a: number;
    b: number;
    c: number;
    /** True when the question was written as y = …, so the vertex is worth giving. */
    asFunction: boolean;
}

export interface QuadraticSolution {
    quadratic: Quadratic;
    discriminant: number;
    /** Vertex form, e.g. "(x \u2212 2)\u00b2" or "2(x + 1)\u00b2 \u2212 9". */
    completedSquare: string;
    /** Factorised over the integers, or null when the roots are not rational. */
    factorised: string | null;
    /** Exact roots as written for a student, longest form first. */
    exactRoots: string[];
    /** The same roots as decimals, for a sense of size. */
    decimalRoots: number[];
    vertex: { x: number; y: number };
    opensUpwards: boolean;
}

/**
 * Swaps the keyboard hyphen for the minus sign the rest of the bank uses, so a
 * root reads the way it would in a textbook and matches the worked examples.
 */
function minus(text: string): string {
    return text.replace(/-/g, '\u2212');
}

function gcd(first: number, second: number): number {
    let [a, b] = [Math.abs(first), Math.abs(second)];
    while (b) {
        [a, b] = [b, a % b];
    }
    return a || 1;
}

/** Splits √n into k√m with m holding no square factor. */
function simplifySurd(n: number): { outside: number; inside: number } {
    let outside = 1;
    let inside = n;
    for (let factor = 2; factor * factor <= inside; factor += 1) {
        const square = factor * factor;
        while (inside % square === 0) {
            inside /= square;
            outside *= factor;
        }
    }
    return { outside, inside };
}

/** Writes p/q in lowest terms, as an integer where it divides exactly. */
export function fraction(numerator: number, denominator: number): string {
    const sign = denominator < 0 ? -1 : 1;
    const top = numerator * sign;
    const bottom = denominator * sign;
    const divisor = gcd(top, bottom);
    const reducedTop = top / divisor;
    const reducedBottom = bottom / divisor;
    return minus(reducedBottom === 1 ? `${reducedTop}` : `${reducedTop}/${reducedBottom}`);
}

/**
 * Reads the coefficients out of one side of the equation. Returns null on any
 * term it does not recognise, which includes a power above two and any letter
 * other than x.
 */
function readSide(side: string): { a: number; b: number; c: number } | null {
    if (!side) {
        return null;
    }
    let a = 0;
    let b = 0;
    let c = 0;

    /* Each term carries its own sign, so a leading + makes the split uniform. */
    const normalised = side.startsWith('-') || side.startsWith('+') ? side : `+${side}`;
    const terms = normalised.match(/[+-][^+-]*/g);
    if (!terms) {
        return null;
    }

    for (const term of terms) {
        const sign = term.startsWith('-') ? -1 : 1;
        const body = term.slice(1);
        if (!body) {
            return null;
        }

        const squared = /^(\d*\.?\d*)\*?x\^2$/.exec(body);
        if (squared) {
            a += sign * (squared[1] === '' ? 1 : Number(squared[1]));
            continue;
        }
        const linear = /^(\d*\.?\d*)\*?x$/.exec(body);
        if (linear) {
            b += sign * (linear[1] === '' ? 1 : Number(linear[1]));
            continue;
        }
        const constant = /^(\d+\.?\d*)$/.exec(body);
        if (constant) {
            c += sign * Number(constant[1]);
            continue;
        }
        return null;
    }

    return { a, b, c };
}

/** Turns the typed question into coefficients, or null if it is not a quadratic. */
export function readQuadratic(question: string): Quadratic | null {
    let text = question
        .toLowerCase()
        .replace(/[?.!]+$/, '')
        .replace(/²/g, '^2')
        .replace(/³/g, '^3')
        .replace(/\*\*/g, '^')
        .replace(/\s+/g, '');

    for (const opening of ['solvefortheroots', 'findtherootsof', 'findtheroots', 'solvetheequation',
        'whataretherootsof', 'whataretheroots', 'wherearetheroots', 'factorise', 'factorize',
        'solvefor x', 'solvefor', 'solve', 'roots of', 'rootsof']) {
        if (text.startsWith(opening)) {
            text = text.slice(opening.length);
            break;
        }
    }

    /* "y = …" describes a curve; the same coefficients, plus a vertex worth saying. */
    let asFunction = false;
    if (/^(y|f\(x\))=/.test(text)) {
        asFunction = true;
        text = text.replace(/^(y|f\(x\))=/, '');
    }

    const sides = text.split('=');
    if (sides.length > 2) {
        return null;
    }

    const left = readSide(sides[0]);
    if (!left) {
        return null;
    }
    let { a, b, c } = left;

    if (sides.length === 2) {
        const right = readSide(sides[1]);
        if (!right) {
            return null;
        }
        /* Everything moves to the left so the equation reads ax² + bx + c = 0. */
        a -= right.a;
        b -= right.b;
        c -= right.c;
    }

    /* No x² term means it is not a quadratic, and a bare number is not a
       question. Both are left for something else to answer. */
    if (a === 0 || !Number.isFinite(a + b + c)) {
        return null;
    }

    return { a, b, c, asFunction };
}

/** The exact roots, written the way a student is expected to present them. */
function exactRoots(a: number, b: number, c: number, discriminant: number): string[] {
    if (discriminant < 0) {
        return [];
    }
    if (discriminant === 0) {
        return [`x = ${fraction(-b, 2 * a)}`];
    }

    const integerCoefficients = [a, b, c].every(Number.isInteger);
    const root = Math.sqrt(discriminant);

    /* A perfect square means the roots are rational, so no surd is needed. */
    if (integerCoefficients && Number.isInteger(root)) {
        return [`x = ${fraction(-b + root, 2 * a)}`, `x = ${fraction(-b - root, 2 * a)}`];
    }

    if (!integerCoefficients) {
        return [];
    }

    const { outside, inside } = simplifySurd(discriminant);
    const denominator = 2 * a;
    const divisor = gcd(gcd(b, outside), denominator);
    const top = -b / divisor;
    const surd = outside / divisor;
    let bottom = denominator / divisor;

    /* Keep the denominator positive so the sign sits where a reader expects it. */
    const flip = bottom < 0 ? -1 : 1;
    bottom *= flip;
    const shownTop = top * flip;
    const shownSurd = surd * flip;

    const surdPart = `${Math.abs(shownSurd) === 1 ? '' : Math.abs(shownSurd)}√${inside}`;
    const sign = shownSurd < 0 ? '−' : '+';
    const otherSign = shownSurd < 0 ? '+' : '−';
    const numerator = shownTop === 0 ? '' : `${minus(String(shownTop))} `;

    if (bottom === 1) {
        return [
            `x = ${numerator}${numerator ? `${sign} ` : ''}${surdPart}`.replace(/^x = \+ /, 'x = '),
            `x = ${numerator}${numerator ? `${otherSign} ` : '−'}${surdPart}`,
        ];
    }
    return [
        `x = (${minus(String(shownTop))} ${sign} ${surdPart})/${bottom}`,
        `x = (${minus(String(shownTop))} ${otherSign} ${surdPart})/${bottom}`,
    ];
}

/**
 * Writes a(x \u2212 h)\u00b2 + k, the form that shows the vertex directly. Fractions are
 * kept exact, since h is b/2a and rarely whole.
 */
function completedSquareForm(a: number, b: number, c: number): string {
    const lead = a === 1 ? '' : a === -1 ? '\u2212' : `${minus(String(a))}`;

    /* The bracket holds x minus h, where h is \u2212b/2a, so the sign follows the
       sign of h and not of b. Reading it off b alone inverted every curve with a
       negative leading coefficient, against its own reported vertex. */
    const hIsPositive = -b / (2 * a) > 0;
    const inside = b === 0
        ? 'x'
        : `x ${hIsPositive ? '\u2212' : '+'} ${fraction(Math.abs(b), Math.abs(2 * a))}`;
    const bracket = b === 0 ? 'x\u00b2' : `(${inside})\u00b2`;

    /* k is c \u2212 b\u00b2/4a, kept over a common denominator of 4a. */
    const kTop = 4 * a * c - b * b;
    const kBottom = 4 * a;
    if (kTop === 0) {
        return `${lead}${bracket}`;
    }
    const size = fraction(Math.abs(kTop), Math.abs(kBottom));
    const sign = (kTop / kBottom) > 0 ? '+' : '\u2212';
    return `${lead}${bracket} ${sign} ${size}`;
}

/**
 * Factorises over the integers when both roots are rational, as
 * (q\u2081x \u2212 p\u2081)(q\u2082x \u2212 p\u2082) with any leftover factor in front.
 */
function factorisedForm(a: number, b: number, c: number, discriminant: number): string | null {
    if (![a, b, c].every(Number.isInteger) || discriminant < 0) {
        return null;
    }
    const root = Math.sqrt(discriminant);
    if (!Number.isInteger(root)) {
        return null;
    }

    /**
     * A root p/q becomes the factor (qx \u2212 p). The denominator's sign is moved
     * onto the numerator first: reducing \u22122/\u22122 without doing so gave p = \u22121 and
     * printed (x + 1) for a root of +1, so a negative leading coefficient came
     * out factorised into something that expanded to the wrong quadratic.
     */
    const reduce = (numerator: number, denominator: number): { p: number; q: number } => {
        const flip = denominator < 0 ? -1 : 1;
        const top = numerator * flip;
        const bottom = denominator * flip;
        const divisor = gcd(top, bottom);
        return { p: top / divisor, q: bottom / divisor };
    };

    const bracket = ({ p, q }: { p: number; q: number }): string => {
        const term = q === 1 ? 'x' : `${q}x`;
        return p === 0 ? `(${term})` : `(${term} ${p > 0 ? '\u2212' : '+'} ${Math.abs(p)})`;
    };

    const firstRoot = reduce(-b + root, 2 * a);
    const secondRoot = reduce(-b - root, 2 * a);
    const first = bracket(firstRoot);
    const second = bracket(secondRoot);

    /* Each bracket contributed its own denominator, so what is left of a goes
       in front. It is a whole number whenever the roots are rational. */
    const q1 = firstRoot.q;
    const q2 = secondRoot.q;
    const leftover = a / (q1 * q2);
    if (!Number.isInteger(leftover) || leftover === 0) {
        return null;
    }
    const lead = leftover === 1 ? '' : leftover === -1 ? '\u2212' : minus(String(leftover));
    return `${lead}${first}${second}`;
}

/** Solves the quadratic, or returns null when the question is not one. */
export function solveQuadratic(question: string): QuadraticSolution | null {
    const quadratic = readQuadratic(question);
    if (!quadratic) {
        return null;
    }
    const { a, b, c } = quadratic;
    const discriminant = b * b - 4 * a * c;

    const decimalRoots = discriminant < 0
        ? []
        : discriminant === 0
            ? [-b / (2 * a)]
            : [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];

    const vertexX = -b / (2 * a);
    return {
        quadratic,
        discriminant,
        completedSquare: completedSquareForm(a, b, c),
        factorised: factorisedForm(a, b, c, discriminant),
        exactRoots: exactRoots(a, b, c, discriminant),
        decimalRoots,
        vertex: { x: vertexX, y: a * vertexX * vertexX + b * vertexX + c },
        opensUpwards: a > 0,
    };
}
