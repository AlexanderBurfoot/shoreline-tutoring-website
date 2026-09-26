import { describe, expect, it } from 'vitest';

import { redactPersonalDetails } from './redactPersonalDetails';

describe('redactPersonalDetails', () => {
    it('removes email addresses', () => {
        const { text, redacted } = redactPersonalDetails('Email me at jane.smith@example.com.au please');
        expect(text).toBe('Email me at [email removed] please');
        expect(redacted).toBe(true);
    });

    it.each([
        ['0452 360 688', 'Call me on 0452 360 688'],
        ['0452360688', 'My number is 0452360688'],
        ['(02) 9411 1234', 'Home is (02) 9411 1234'],
        ['+61 452 360 688', 'Try +61 452 360 688'],
        ['0452-360-688', 'Mobile 0452-360-688 thanks'],
    ])('removes the phone number %s', (phone, question) => {
        const { text, redacted } = redactPersonalDetails(question);
        expect(text).not.toContain(phone);
        expect(text).toContain('[phone removed]');
        expect(redacted).toBe(true);
    });

    it.each([
        '12 Oak Street',
        '5/118 Pacific Hwy',
        '3 Bay View Road',
        '27a Wilson Ave',
    ])('removes the street address %s', (address) => {
        const { text, redacted } = redactPersonalDetails(`We live at ${address} and want home visits`);
        expect(text).not.toContain(address);
        expect(text).toContain('[address removed]');
        expect(redacted).toBe(true);
    });

    it('leaves a question with no contact details untouched', () => {
        const question = 'How much is tutoring for Year 11 chemistry?';
        expect(redactPersonalDetails(question)).toEqual({ text: question, redacted: false });
    });

    it.each([
        'Is my Year 9 son too late to start?',
        'Do you cover the 2026 HSC?',
        'Is it $160 per hour for Year 12?',
        'Can we do 90 minute sessions?',
    ])('does not mistake the figures in "%s" for contact details', (question) => {
        expect(redactPersonalDetails(question).redacted).toBe(false);
    });

    it('removes every detail when a question contains several', () => {
        const { text } = redactPersonalDetails('I am at 12 Oak Street, call 0452 360 688 or a@b.com');
        expect(text).toBe('I am at [address removed], call [phone removed] or [email removed]');
    });
});
