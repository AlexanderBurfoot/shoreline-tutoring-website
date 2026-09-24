import { describe, expect, it, vi } from 'vitest';

import { COURSES } from './groupClassLaunch';

/** The founding offer is open for every course except this one. */
const FULL_COURSE = 'physics';

vi.mock('./groupClassLaunch', async (importOriginal) => {
    const original = await importOriginal<typeof import('./groupClassLaunch')>();
    return {
        ...original,
        hasFoundingPlaces: (courseId: string) => courseId !== FULL_COURSE,
        anyFoundingPlaces: () => true,
    };
});

/* Imported after the mock, so the facts are built against it. */
const { groupHeroFacts } = await import('./formatPages');

const priceOf = (courseId?: string) =>
    groupHeroFacts(courseId as never).find((fact) => fact.label === 'Price')?.value ?? '';

describe('groupHeroFacts', () => {
    it('shows the term rate on the page of a class whose founding places are gone', () => {
        expect(priceOf(FULL_COURSE)).toContain('$2,000 for the term');
        expect(priceOf(FULL_COURSE)).not.toContain('Founding');
    });

    it('still offers founding places on the pages of classes that have them', () => {
        for (const course of COURSES.filter((candidate) => candidate.id !== FULL_COURSE)) {
            expect(priceOf(course.id), course.name).toContain('Founding places $1,500');
        }
    });

    it('offers founding places on the page covering every course while any class has them', () => {
        expect(priceOf()).toContain('Founding places $1,500');
    });

    it('gives every page the same class times', () => {
        const times = (courseId?: string) => groupHeroFacts(courseId as never).slice(0, 3);
        expect(times(FULL_COURSE)).toEqual(times());
    });
});
