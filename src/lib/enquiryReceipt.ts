/**
 * One identity per enquiry, shared by everything that records or reports it.
 *
 * An enquiry can land in five places: the email to Shoreline, the confirmation
 * to the enquirer, the Upstash record, the webhook and, if all else fails, the
 * logs. Each used to stamp its own `new Date()`, or no date at all, so the same
 * submission could not be matched across them and the two emails were identical
 * every time the same person wrote in. Mail clients can collapse or suppress
 * messages that are identical in every byte, which is the likeliest reason a
 * repeat enquirer stopped seeing their confirmation.
 *
 * Both emails now carry the reference and the time, which makes each one
 * distinct and gives a parent something to quote back.
 */

const SYDNEY_TIME_ZONE = 'Australia/Sydney';

/**
 * Characters a reference may contain. No vowels, so it cannot spell a word, and
 * no 0/O or 1/I, which are the pairs misread when someone reads one aloud.
 */
const REFERENCE_ALPHABET = '23456789BCDFGHJKLMNPQRSTVWXYZ';

const REFERENCE_LENGTH = 6;

export interface EnquiryReceipt {
    /** Machine form, for the stored record and the logs. */
    receivedAt: string;
    /** Short, human-quotable, e.g. "K4P7QX". */
    reference: string;
    /** Sydney local time for anything a person reads. */
    receivedAtLocal: string;
}

/** A short reference with enough range that two in one day will not collide. */
function makeReference(random: () => number): string {
    let reference = '';
    for (let index = 0; index < REFERENCE_LENGTH; index += 1) {
        reference += REFERENCE_ALPHABET[Math.floor(random() * REFERENCE_ALPHABET.length)];
    }
    return reference;
}

/**
 * Formats in Sydney time, because a timestamp a person reads should match the
 * clock they are looking at. A UTC time on an afternoon enquiry reads as the
 * morning, which is worse than showing nothing.
 */
function formatSydney(date: Date): string {
    return new Intl.DateTimeFormat('en-AU', {
        timeZone: SYDNEY_TIME_ZONE,
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }).format(date);
}

/**
 * Called once per enquiry, at the top of the request, and then passed to
 * everything that needs it. Taking the clock and the randomness as arguments
 * keeps it testable without mocking globals.
 */
export function createEnquiryReceipt(
    now: Date = new Date(),
    random: () => number = Math.random,
): EnquiryReceipt {
    return {
        receivedAt: now.toISOString(),
        reference: makeReference(random),
        receivedAtLocal: formatSydney(now),
    };
}
