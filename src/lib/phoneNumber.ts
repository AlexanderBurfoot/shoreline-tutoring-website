/**
 * A deliberately loose check for the enquiry form's phone field. It accepts any
 * real number, Australian or foreign, local or international, and only catches
 * the mistakes that happen in practice: too few or too many digits, letters, or
 * an Australian mobile with a digit missing. It cannot tell whether a number
 * actually exists, only whether its shape is plausible.
 */

/** Enough for any number written with its country code, the shortest being 7. */
const MIN_DIGITS = 7;

/** The international maximum set by ITU-T E.164. */
const MAX_DIGITS = 15;

/** Australian mobiles written locally are always ten digits: 04xx xxx xxx. */
const AU_MOBILE_PREFIX = '04';
const AU_MOBILE_DIGITS = 10;

/** Digits and the separators people type between groups, after an optional "+". */
const ALLOWED_CHARACTERS = /^\+?[\d\s().-]+$/;

export function isPlausiblePhoneNumber(input: string): boolean {
    const trimmed = input.trim();
    if (!ALLOWED_CHARACTERS.test(trimmed)) return false;

    const digits = trimmed.replace(/\D/g, '');
    const isLocalAustralianMobile = !trimmed.startsWith('+') && digits.startsWith(AU_MOBILE_PREFIX);
    if (isLocalAustralianMobile) return digits.length === AU_MOBILE_DIGITS;

    return digits.length >= MIN_DIGITS && digits.length <= MAX_DIGITS;
}
