import { describe, expect, it, vi } from 'vitest';

import {
    COURSES,
    FOUNDING_PLACES_PER_CLASS,
    FOUNDING_TERM_PRICE,
    FOUNDING_TERM_PRICE_DOLLARS,
    TERM_PRICE,
    TERM_PRICE_DOLLARS,
} from './groupClassLaunch';

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

/* The offer only reads as a discount if both prices and the number of places
   are in the fact, so each is asserted rather than the sentence as a whole.
   Taken from the constants rather than written out, so changing a price is a
   one-line change there and not a hunt through the tests for stale figures. */
const OFFER_PARTS = [
    FOUNDING_TERM_PRICE,
    TERM_PRICE,
    `first ${FOUNDING_PLACES_PER_CLASS} students in each class`,
];

describe('groupHeroFacts', () => {
    /* The figures themselves are free to change; what must stay true is that
       the founding price undercuts the term price, or the offer is not one. */
    it('prices a founding place below the term rate', () => {
        expect(FOUNDING_TERM_PRICE_DOLLARS).toBeLessThan(TERM_PRICE_DOLLARS);
        expect(FOUNDING_PLACES_PER_CLASS).toBeGreaterThan(0);
    });

    it('shows the term rate on the page of a class whose founding places are gone', () => {
        expect(priceOf(FULL_COURSE)).toContain(`${TERM_PRICE} for the term`);
        expect(priceOf(FULL_COURSE)).not.toContain(FOUNDING_TERM_PRICE);
    });

    it('still offers founding places on the pages of classes that have them', () => {
        for (const course of COURSES.filter((candidate) => candidate.id !== FULL_COURSE)) {
            for (const part of OFFER_PARTS) {
                expect(priceOf(course.id), course.name).toContain(part);
            }
        }
    });

    it('offers founding places on the page covering every course while any class has them', () => {
        for (const part of OFFER_PARTS) {
            expect(priceOf()).toContain(part);
        }
    });

    it('gives every page the same class times', () => {
        const times = (courseId?: string) => groupHeroFacts(courseId as never).slice(0, 3);
        expect(times(FULL_COURSE)).toEqual(times());
    });
});
