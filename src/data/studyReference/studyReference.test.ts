import { describe, expect, it } from 'vitest';

import { studyEntries, subjectPath } from './index';
import { findBestMatch } from '../../lib/chatbotMatching';
import { findEntryById } from '../chatbotKnowledge';
import { subjects } from '../subjectData';

describe('study reference bank', () => {
    it('gives every entry a unique name', () => {
        const ids = studyEntries.map((entry) => entry.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('gives every entry a question, an answer and ways to find it', () => {
        for (const entry of studyEntries) {
            expect(entry.question.length, entry.id).toBeGreaterThan(10);
            expect(entry.answer.length, entry.id).toBeGreaterThan(40);
            expect(entry.aliases.length, entry.id).toBeGreaterThan(0);
        }
    });

    it('covers every subject the bank claims', () => {
        const covered = new Set(studyEntries.map((entry) => entry.subject));
        expect([...covered].sort()).toEqual(['biology', 'chemistry', 'english', 'mathematics', 'physics']);
    });

    it('links each entry to a subject page that exists', () => {
        const slugs = new Set(subjects.map((subject) => subject.slug));
        for (const entry of studyEntries) {
            expect(slugs.has(entry.subject), `${entry.id} -> ${entry.subject}`).toBe(true);
            expect(subjectPath(entry.subject)).toBe(`/subjects/${entry.subject}`);
        }
    });

    it('follows the house style: no em dashes', () => {
        for (const entry of studyEntries) {
            expect(entry.answer, entry.id).not.toContain('—');
            expect(entry.question, entry.id).not.toContain('—');
        }
    });

    it('reaches every entry from its own question', () => {
        for (const entry of studyEntries) {
            expect(findBestMatch(entry.question)?.entry.id, entry.question).toBe(entry.id);
        }
    });

    it('is offered by the assistant alongside the answers about the business', () => {
        for (const entry of studyEntries) {
            expect(findEntryById(entry.id), entry.id).toBeDefined();
        }
    });
});

describe('the questions students actually type', () => {
    it.each([
        ['formula for the volume of a sphere', 'maths-sphere-volume'],
        ['what does delta G mean', 'chem-gibbs-free-energy'],
        ['ΔG', 'chem-gibbs-free-energy'],
        ['quadratic formula', 'maths-quadratic-formula'],
        ['what is the sine rule', 'maths-sine-rule'],
        ['area of a circle', 'maths-circle'],
        ['pythagoras theorem', 'maths-pythagoras'],
        ['what is a z score', 'maths-normal-distribution'],
        ['half life', 'phys-half-life'],
        ['what is the photoelectric effect', 'phys-photoelectric'],
        ['le chatelier', 'chem-le-chatelier'],
        ['how do I calculate pH', 'chem-ph'],
        ['difference between mitosis and meiosis', 'bio-mitosis-meiosis'],
        ['punnett square', 'bio-punnett'],
        ['what is TEEL', 'eng-essay-structure'],
        ['what does analyse mean in a question', 'eng-common-verbs'],
    ])('answers "%s" from the bank', (question, expectedId) => {
        expect(findBestMatch(question)?.entry.id).toBe(expectedId);
    });
});
