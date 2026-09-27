import { describe, expect, it } from 'vitest';

import { createEnquiryReceipt } from './enquiryReceipt';

/** A fixed clock, so the formatted time can be asserted exactly. */
const OCTOBER_AFTERNOON = new Date('2026-10-03T04:42:00Z');

describe('createEnquiryReceipt', () => {
    it('keeps the machine form in ISO', () => {
        expect(createEnquiryReceipt(OCTOBER_AFTERNOON).receivedAt).toBe('2026-10-03T04:42:00.000Z');
    });

    /* Showing the UTC hour would put an afternoon enquiry in the morning. */
    it('formats the readable time in Sydney, not UTC', () => {
        const { receivedAtLocal } = createEnquiryReceipt(OCTOBER_AFTERNOON);
        expect(receivedAtLocal).toContain('3 October 2026');
        expect(receivedAtLocal).toContain('2:42');
        expect(receivedAtLocal.toLowerCase()).toContain('pm');
    });

    it('handles a time that falls on the previous day in UTC', () => {
        /* 22:30 UTC on 2 October is already 8:30am on 3 October in Sydney. */
        const { receivedAtLocal } = createEnquiryReceipt(new Date('2026-10-02T22:30:00Z'));
        expect(receivedAtLocal).toContain('3 October 2026');
        expect(receivedAtLocal.toLowerCase()).toContain('am');
    });

    /* Daylight saving starts on the first Sunday in October, which in 2026 falls
       between the in-person trial on Saturday the 3rd and the online one on
       Sunday the 4th. The same UTC instant is therefore an hour later in Sydney
       on the second day, and a hand-rolled offset would get one of them wrong. */
    it('follows the daylight saving change across the launch weekend', () => {
        const saturday = createEnquiryReceipt(new Date('2026-10-03T04:42:00Z'));
        const sunday = createEnquiryReceipt(new Date('2026-10-04T04:42:00Z'));
        expect(saturday.receivedAtLocal).toContain('2:42');
        expect(sunday.receivedAtLocal).toContain('3:42');
    });

    it('makes a reference of the expected shape', () => {
        const { reference } = createEnquiryReceipt(OCTOBER_AFTERNOON, () => 0.5);
        expect(reference).toHaveLength(6);
        expect(reference).toMatch(/^[A-Z2-9]{6}$/);
    });

    /* Read aloud over the phone, 0/O and 1/I are the pairs that go wrong, and a
       reference that spells a word invites its own problems. */
    it('leaves out the characters that are misread, and all vowels', () => {
        const references = Array.from({ length: 200 }, () => createEnquiryReceipt().reference);
        for (const reference of references) {
            expect(reference).not.toMatch(/[AEIOU01]/);
        }
    });

    it('gives a different reference each time', () => {
        const references = new Set(Array.from({ length: 500 }, () => createEnquiryReceipt().reference));
        /* 29^6 combinations, so 500 draws should essentially never repeat. */
        expect(references.size).toBeGreaterThan(495);
    });

    it('uses the clock it is given rather than the real one', () => {
        const first = createEnquiryReceipt(OCTOBER_AFTERNOON);
        const second = createEnquiryReceipt(OCTOBER_AFTERNOON);
        expect(first.receivedAt).toBe(second.receivedAt);
        expect(first.receivedAtLocal).toBe(second.receivedAtLocal);
    });
});
