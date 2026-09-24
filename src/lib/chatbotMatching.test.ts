import { describe, expect, it } from 'vitest';

import { findBestMatch, MATCH_THRESHOLD, scoreEntry, tokenise } from './chatbotMatching';
import { findEntryById, knowledgeEntries, knowledgeTopics } from '../data/chatbotKnowledge';

describe('tokenise', () => {
    it('drops common words and punctuation', () => {
        expect(tokenise('How much does it cost?')).toEqual(['much', 'price']);
    });

    it('folds wordings parents use onto the words answers are written with', () => {
        expect(tokenise('What are your fees')).toEqual(['price']);
        expect(tokenise('my daughter')).toEqual(['child']);
        expect(tokenise('maths')).toEqual(['mathematics']);
    });
});

describe('findBestMatch', () => {
    it.each([
        ['How much does tutoring cost?', 'one-on-one-price'],
        ['what are your hourly rates', 'one-on-one-price'],
        ['how much are the group classes', 'group-price'],
        ['when do group classes start', 'group-start-dates'],
        ['what time do the sunday classes run', 'group-start-dates'],
        ['which subjects do you teach', 'subjects'],
        ['where are you located', 'location'],
        ['is the first lesson free', 'trial'],
        ['can you tutor online', 'one-on-one-format'],
        ['how do I book a lesson', 'contact'],
    ])('answers "%s" from the site content', (question, expectedId) => {
        expect(findBestMatch(question)?.entry.id).toBe(expectedId);
    });

    it.each([
        'Do you offer a discount for two siblings taking different subjects?',
        'My son has dyspraxia, can your tutors adapt to that?',
        'Can we pause lessons over the school holidays and resume in February?',
    ])('passes "%s" to the AI fallback rather than guessing', (question) => {
        expect(findBestMatch(question)).toBeNull();
    });

    it('returns nothing for an empty or meaningless question', () => {
        expect(findBestMatch('')).toBeNull();
        expect(findBestMatch('   ???   ')).toBeNull();
    });

    it('scores an exact question at or above the threshold', () => {
        for (const entry of knowledgeEntries) {
            expect(scoreEntry(entry.question, entry)).toBeGreaterThanOrEqual(MATCH_THRESHOLD);
        }
    });
});

describe('knowledge data', () => {
    it('gives every entry a unique id', () => {
        const ids = knowledgeEntries.map((entry) => entry.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('points every topic button at an entry that exists', () => {
        for (const topic of knowledgeTopics) {
            for (const entryId of topic.entryIds) {
                expect(findEntryById(entryId), `${topic.id} -> ${entryId}`).toBeDefined();
            }
        }
    });

    it('builds answers from the real site data', () => {
        expect(findEntryById('one-on-one-price')?.answer).toContain('$160 per hour');
        expect(findEntryById('location')?.answer).toContain('558 Pacific Highway');
    });
});
