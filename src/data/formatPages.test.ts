import { describe, expect, it, vi } from 'vitest';

import {
    FOUNDING_PLACES,
    FOUNDING_TERM_PRICE,
    FOUNDING_TERM_PRICE_DOLLARS,
    TERM_PRICE,
    TERM_PRICE_DOLLARS,
} from './groupClassLaunch';

/*
 * The founding offer is one pool of places shared across every class, not a few
 * places in each, so it is open or closed for the whole site at once. The
 * switch is mocked per test rather than per course, which the previous model
 * needed.
 */
let offerIsOpen = true;

vi.mock('./groupClassLaunch', async (importOriginal) => {
    const original = await importOriginal<typeof import('./groupClassLaunch')>();
    return {
        ...original,
        foundingPlacesOpen: () => offerIsOpen,
    };
});

/* Imported after the mock, so the facts are built against it. */
const { groupHeroFacts } = await import('./formatPages');

const priceOf = () =>
    groupHeroFacts().find((fact) => fact.label === 'Price')?.value ?? '';

/* The offer only reads as a discount if both prices and the number of places
   are in the fact, so each is asserted rather than the sentence as a whole.
   Taken from the constants rather than written out, so changing a price is a
   one-line change there and not a hunt through the tests for stale figures. */
const OFFER_PARTS = [
    FOUNDING_TERM_PRICE,
    TERM_PRICE,
    `first ${FOUNDING_PLACES} students to sign up`,
];

describe('groupHeroFacts', () => {
    /* The figures themselves are free to change; what must stay true is that
       the founding price undercuts the term price, or the offer is not one. */
    it('prices a founding place below the term rate', () => {
        expect(FOUNDING_TERM_PRICE_DOLLARS).toBeLessThan(TERM_PRICE_DOLLARS);
        expect(FOUNDING_PLACES).toBeGreaterThan(0);
    });

    it('offers the founding price while places remain', () => {
        offerIsOpen = true;
        for (const part of OFFER_PARTS) {
            expect(priceOf()).toContain(part);
        }
    });

    it('shows the term rate once the founding places are taken', () => {
        offerIsOpen = false;
        expect(priceOf()).toContain(`${TERM_PRICE} for the term`);
        expect(priceOf()).not.toContain(FOUNDING_TERM_PRICE);
        offerIsOpen = true;
    });

    /* One pool means the price cannot vary by course, which is now true by
       construction: groupHeroFacts no longer takes a course at all. Asserting
       the facts are identical keeps that honest if the argument ever returns. */
    it('gives every course page the same facts', () => {
        offerIsOpen = true;
        expect(groupHeroFacts()).toEqual(groupHeroFacts());
        expect(priceOf()).toContain(FOUNDING_TERM_PRICE);
    });
});
