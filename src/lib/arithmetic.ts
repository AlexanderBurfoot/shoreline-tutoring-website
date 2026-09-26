/**
 * Works out a plain arithmetic question, in code rather than by asking a model.
 *
 * "What is 9 x 7" used to reach the enquiry fallback, because the reference bank
 * holds written answers and no written answer says 63. This computes it instead,
 * which keeps the rule that no wording a model produced is ever shown: the model
 * is not involved here at all, and every sentence below is a fixed template.
 *
 * The parse is deliberately all or nothing. A question only gets an answer when
 * the whole of it, after the opening phrase is removed, is an expression this
 * grammar accepts. Anything left over returns null and the caller falls back to
 * the reference bank, so a concept question that happens to contain a number is
 * never hijacked.
 *
 * Nothing with a variable in it is accepted. Solving 2x + 3 = 11 is the kind of
 * thing a student is asked to submit, which src/lib/assessmentGuard.ts exists to
 * refuse, so it stays out of scope on purpose.
 */

/** Beyond this the result stops being meaningful to a student, so decline it. */
const MAX_MAGNITUDE = 1e15;

/** Decimal places kept before the result is called approximate. */
const MAX_DECIMALS = 4;

/** Openings a student types before the sum itself. Longest first so that
 *  "what is the" is removed before "what is" can match part of it. */
const QUESTION_OPENINGS = [
    'can you work out',
    'can you calculate',
    'please calculate',
    'please work out',
    'what does',
    'what is the',
    'what is',
    'whats the',
    'whats',
    'how much is',
    'how many is',
    'work out',
    'calculate',
    'compute',
    'evaluate',
    'solve',
];

/** Wordings that mean an operator, longest first for the same reason. */
const WORD_OPERATORS: [RegExp, string][] = [
    [/\bto the power of\b/g, '^'],
    [/\bmultiplied by\b/g, '*'],
    [/\bdivided by\b/g, '/'],
    [/\bdivide by\b/g, '/'],
    [/\bmultiply by\b/g, '*'],
    [/\btake away\b/g, '-'],
    [/\bsquare root of\b/g, 'sqrt'],
    [/\bsquare root\b/g, 'sqrt'],
    [/\bsquared\b/g, '^2'],
    [/\bcubed\b/g, '^3'],
    [/\bplus\b/g, '+'],
    [/\bminus\b/g, '-'],
    [/\btimes\b/g, '*'],
    [/\bpercent of\b/g, '% of'],
    [/√/g, 'sqrt'],
    [/×/g, '*'],
    [/÷/g, '/'],
    [/−/g, '-'],
];

/** What the question turned out to be, which decides how the answer is worded. */
export type ArithmeticShape = 'percentage' | 'root' | 'power' | 'plain';

export interface ArithmeticResult {
    /** The expression as this module reads it, for showing back to the student. */
    expression: string;
    value: number;
    shape: ArithmeticShape;
    /** True when the displayed value was rounded, so the wording says "about". */
    rounded: boolean;
}

/**
 * Strips the opening phrase and normalises the words for operators. Returns the
 * bare expression, still as text.
 */
function normalise(question: string): string {
    let text = question.toLowerCase().trim().replace(/[?.!]+$/, '').trim();

    for (const opening of QUESTION_OPENINGS) {
        if (text.startsWith(`${opening} `)) {
            text = text.slice(opening.length).trim();
            break;
        }
    }

    for (const [pattern, replacement] of WORD_OPERATORS) {
        text = text.replace(pattern, replacement);
    }

    /* "9 x 7" and "(2 + 3) x 4" use x as a multiplication sign. Anywhere else x
       is a variable, which this module declines to handle. */
    text = text.replace(/([\d)])\s*x\s*(?=[\d(])/g, '$1*');

    /* "15% of 80" is the one phrase where a word sits inside the expression. */
    text = text.replace(/%\s*of\b/g, '%*');

    /* Spaces carry no meaning once the words are gone, and removing them makes
       the expression canonical so "2 ^ 5", "2^5" and "5 squared" are all shaped
       the same way for the wording that follows. Two numbers left side by side
       run together into one, which then has no operator and is declined. */
    return text.replace(/\s+/g, '');
}

type Token = { kind: 'number'; value: number } | { kind: 'op'; value: string };

/** Splits the expression into numbers and operators, or null on any stray text. */
function tokenise(text: string): Token[] | null {
    const tokens: Token[] = [];
    let index = 0;

    while (index < text.length) {
        const rest = text.slice(index);

        if (rest.startsWith(' ')) {
            index += 1;
            continue;
        }
        if (rest.startsWith('sqrt')) {
            tokens.push({ kind: 'op', value: 'sqrt' });
            index += 4;
            continue;
        }
        const number = /^\d+(?:\.\d+)?/.exec(rest);
        if (number) {
            tokens.push({ kind: 'number', value: Number(number[0]) });
            index += number[0].length;
            continue;
        }
        if ('+-*/^()%'.includes(rest[0])) {
            tokens.push({ kind: 'op', value: rest[0] });
            index += 1;
            continue;
        }
        /* A letter, a comma, a currency sign: not something to compute. */
        return null;
    }

    return tokens.length > 0 ? tokens : null;
}

/**
 * Recursive descent over the tokens. Each method returns null rather than
 * throwing, so a malformed expression simply declines to be an answer.
 */
class Parser {
    private position = 0;

    private shapes = new Set<ArithmeticShape>();

    constructor(private readonly tokens: Token[]) {}

    /** Parses the whole token list, failing if anything is left unconsumed. */
    parse(): { value: number; shapes: Set<ArithmeticShape> } | null {
        const value = this.expression();
        if (value === null || this.position !== this.tokens.length) {
            return null;
        }
        return { value, shapes: this.shapes };
    }

    private peek(): Token | undefined {
        return this.tokens[this.position];
    }

    private takeOp(...values: string[]): string | null {
        const token = this.peek();
        if (token && token.kind === 'op' && values.includes(token.value)) {
            this.position += 1;
            return token.value;
        }
        return null;
    }

    private expression(): number | null {
        let left = this.term();
        if (left === null) {
            return null;
        }
        for (let op = this.takeOp('+', '-'); op !== null; op = this.takeOp('+', '-')) {
            const right = this.term();
            if (right === null) {
                return null;
            }
            left = op === '+' ? left + right : left - right;
        }
        return left;
    }

    private term(): number | null {
        let left = this.power();
        if (left === null) {
            return null;
        }
        for (let op = this.takeOp('*', '/'); op !== null; op = this.takeOp('*', '/')) {
            const right = this.power();
            if (right === null) {
                return null;
            }
            if (op === '/' && right === 0) {
                return null;
            }
            left = op === '*' ? left * right : left / right;
        }
        return left;
    }

    /** Powers bind tighter than multiplication and associate to the right. */
    private power(): number | null {
        const base = this.unary();
        if (base === null) {
            return null;
        }
        if (this.takeOp('^') === null) {
            return base;
        }
        const exponent = this.power();
        if (exponent === null) {
            return null;
        }
        this.shapes.add('power');
        return base ** exponent;
    }

    private unary(): number | null {
        if (this.takeOp('-') !== null) {
            const value = this.unary();
            return value === null ? null : -value;
        }
        if (this.takeOp('sqrt') !== null) {
            const value = this.unary();
            if (value === null || value < 0) {
                return null;
            }
            this.shapes.add('root');
            return Math.sqrt(value);
        }
        return this.primary();
    }

    private primary(): number | null {
        if (this.takeOp('(') !== null) {
            const value = this.expression();
            if (value === null || this.takeOp(')') === null) {
                return null;
            }
            return value;
        }

        const token = this.peek();
        if (!token || token.kind !== 'number') {
            return null;
        }
        this.position += 1;

        /* A trailing % turns the number into a hundredth of itself, so
           "15%*80" evaluates as 0.15 * 80. */
        if (this.takeOp('%') !== null) {
            this.shapes.add('percentage');
            return token.value / 100;
        }
        return token.value;
    }
}

/** Formats a number the way a student would write it. */
export function formatNumber(value: number): { text: string; rounded: boolean } {
    if (Number.isInteger(value)) {
        return { text: value.toLocaleString('en-AU'), rounded: false };
    }
    const rounded = Number(value.toFixed(MAX_DECIMALS));
    const text = rounded.toString();
    return { text, rounded: rounded !== value };
}

/**
 * Reads a question as arithmetic, returning null unless the whole of it is an
 * expression this grammar accepts.
 */
export function evaluateArithmetic(question: string): ArithmeticResult | null {
    const expression = normalise(question);
    if (!expression || !/\d/.test(expression)) {
        return null;
    }

    const tokens = tokenise(expression);
    if (!tokens) {
        return null;
    }

    /* A bare number is not a question, and neither is a number with nothing to
       do to it, so require at least one operator. */
    const hasOperator = tokens.some((token) => token.kind === 'op' && token.value !== '(' && token.value !== ')');
    if (!hasOperator) {
        return null;
    }

    const parsed = new Parser(tokens).parse();
    if (!parsed || !Number.isFinite(parsed.value) || Math.abs(parsed.value) > MAX_MAGNITUDE) {
        return null;
    }

    const shape: ArithmeticShape = parsed.shapes.has('percentage')
        ? 'percentage'
        : parsed.shapes.has('root')
            ? 'root'
            : parsed.shapes.has('power')
                ? 'power'
                : 'plain';

    return {
        expression,
        value: parsed.value,
        shape,
        rounded: formatNumber(parsed.value).rounded,
    };
}
