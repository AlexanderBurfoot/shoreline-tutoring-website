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

    it('covers every subject it declares, so no subject is listed but empty', () => {
        const covered = new Set(studyEntries.map((entry) => entry.subject));
        expect([...covered].sort()).toEqual([
            'biology',
            'business-studies',
            'chemistry',
            'economics',
            'english',
            'mathematics',
            'naplan',
            'oc-prep',
            'physics',
            'selective-high-school',
        ]);
    });

    it('holds enough of each subject to be worth offering', () => {
        const counts = new Map<string, number>();
        for (const entry of studyEntries) {
            counts.set(entry.subject, (counts.get(entry.subject) ?? 0) + 1);
        }

        for (const [subject, count] of counts) {
            /* The exam-prep banks cover a test rather than a syllabus, so they
               are smaller by nature. */
            const minimum = ['oc-prep', 'naplan'].includes(subject) ? 2 : 8;
            expect(count, subject).toBeGreaterThanOrEqual(minimum);
        }
    });

    it('links each entry to a subject page that exists', () => {
        const slugs = new Set(subjects.map((subject) => subject.slug));
        for (const entry of studyEntries) {
            expect(slugs.has(entry.subject), `${entry.id} -> ${entry.subject}`).toBe(true);
            expect(subjectPath(entry.subject)).toBe(`/subjects/${entry.subject}`);
        }
    });

    it('gives each alias to one entry per subject, so entries stay distinct', () => {
        /* Two entries in the same subject claiming the same wording is how an
           entry becomes unreachable: one of them always wins and the other is
           dead. Across subjects it is fine, since "reflection" genuinely means
           different things in maths and physics. */
        const owners = new Map<string, string[]>();
        for (const entry of studyEntries) {
            for (const alias of entry.aliases) {
                const key = `${entry.subject}::${alias.toLowerCase().trim()}`;
                owners.set(key, [...(owners.get(key) ?? []), entry.id]);
            }
        }

        const shared = [...owners.entries()]
            .filter(([, ids]) => ids.length > 1)
            .map(([key, ids]) => `${key} claimed by ${ids.join(' and ')}`);

        expect(shared).toEqual([]);
    });

    it('follows the house style: no em dashes', () => {
        for (const entry of studyEntries) {
            expect(entry.answer, entry.id).not.toContain('—');
            expect(entry.question, entry.id).not.toContain('—');
        }
    });

    /* Every question is scored against every entry, so this grows with the square
       of the bank and needs longer than the default. A student types one question
       at a time, so the cost this measures is never paid in the browser. */
    it('reaches every entry from its own question', () => {
        for (const entry of studyEntries) {
            expect(findBestMatch(entry.question)?.entry.id, entry.question).toBe(entry.id);
        }
    }, 60_000);

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
