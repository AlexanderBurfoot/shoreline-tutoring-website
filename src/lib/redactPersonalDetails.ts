/**
 * Removes contact details from a chat question before it is sent anywhere.
 *
 * Applied in the browser and again on the server, so a question that reaches
 * the AI provider carries no email address, phone number or street address even
 * if someone types one despite the warning next to the message box. It cannot
 * catch a name, which is why the warning is there as well.
 */

/** What each kind of detail is replaced with, so the question still reads. */
const EMAIL_PLACEHOLDER = '[email removed]';
const PHONE_PLACEHOLDER = '[phone removed]';
const ADDRESS_PLACEHOLDER = '[address removed]';

const EMAIL_PATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;

/**
 * Runs of digits that may be spaced, hyphenated or bracketed, e.g.
 * 0452 360 688, (02) 9411 1234 or +61 452 360 688. How the number is grouped
 * varies far too much to pin down in one pattern, so candidates are found
 * loosely here and then filtered by digit count below.
 */
const PHONE_CANDIDATE_PATTERN = /\+?\d[\d\s\-()]{6,}\d/g;

/**
 * Australian numbers carry 9 digits (a landline without its area code) to 11
 * (the +61 form). Anything shorter is a year level, price or date, and anything
 * longer is not a phone number either.
 */
const PHONE_MIN_DIGITS = 9;
const PHONE_MAX_DIGITS = 12;

function isPhoneNumber(candidate: string): boolean {
    const digitCount = (candidate.match(/\d/g) ?? []).length;
    return digitCount >= PHONE_MIN_DIGITS && digitCount <= PHONE_MAX_DIGITS;
}

/** Street types seen in an address a parent might type for a home visit. */
const STREET_TYPES = [
    'street', 'st', 'road', 'rd', 'avenue', 'ave', 'drive', 'dr', 'lane', 'ln', 'place', 'pl',
    'court', 'ct', 'crescent', 'cres', 'parade', 'pde', 'highway', 'hwy', 'terrace', 'tce',
    'close', 'cl', 'way', 'boulevard', 'bvd',
];

/**
 * A street number followed by a name and a street type, e.g. "12 Oak Street"
 * or "5/118 Pacific Hwy". The trailing full stop is optional so "st." matches.
 */
const ADDRESS_PATTERN = new RegExp(
    String.raw`\b\d+[a-z]?(?:\s*\/\s*\d+[a-z]?)?\s+(?:[a-z'-]+\s+){1,3}(?:${STREET_TYPES.join('|')})\b\.?`,
    'gi',
);

export interface RedactionResult {
    text: string;
    /** True when anything was removed, so the visitor can be told it happened. */
    redacted: boolean;
}

/**
 * Strips emails, phone numbers and street addresses from a question.
 *
 * Addresses go first, so a street number is not mistaken for the start of a
 * phone number.
 */
export function redactPersonalDetails(input: string): RedactionResult {
    const text = input
        .replace(EMAIL_PATTERN, EMAIL_PLACEHOLDER)
        .replace(ADDRESS_PATTERN, ADDRESS_PLACEHOLDER)
        .replace(PHONE_CANDIDATE_PATTERN, (candidate) =>
            isPhoneNumber(candidate) ? PHONE_PLACEHOLDER : candidate,
        );

    return { text, redacted: text !== input };
}
