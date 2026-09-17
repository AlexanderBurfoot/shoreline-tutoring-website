/**
 * Rates for both learning formats.
 *
 * Shared so the pricing page and the group-class landing page cannot drift
 * apart: a rate change here updates every table that shows it.
 */

export interface PricingRow {
    yearLevel: string;
    /** Compact form, for chips and other places the full band will not fit. */
    shortLabel: string;
    price: string;
}

/** Lessons in a bundle, used to derive the per-lesson figure in each table. */
export const LESSONS_PER_BUNDLE = 20;

export const bundlePricing: PricingRow[] = [
    { yearLevel: 'Year 1 – Year 6 / Selective High School / Opportunity Classes', shortLabel: 'Yr 1–6', price: '$2,400' },
    { yearLevel: 'Year 7 – Year 8', shortLabel: 'Yr 7–8', price: '$2,600' },
    { yearLevel: 'Year 9 – Year 10', shortLabel: 'Yr 9–10', price: '$2,600' },
    { yearLevel: 'Year 11', shortLabel: 'Yr 11', price: '$2,800' },
    { yearLevel: 'Year 12', shortLabel: 'Yr 12', price: '$3,000' },
];

export const hourlyPricing: PricingRow[] = [
    { yearLevel: 'Year 1 – Year 6 / Selective High School / Opportunity Classes', shortLabel: 'Yr 1–6', price: '$130' },
    { yearLevel: 'Year 7 – Year 8', shortLabel: 'Yr 7–8', price: '$140' },
    { yearLevel: 'Year 9 – Year 10', shortLabel: 'Yr 9–10', price: '$140' },
    { yearLevel: 'Year 11', shortLabel: 'Yr 11', price: '$150' },
    { yearLevel: 'Year 12', shortLabel: 'Yr 12', price: '$160' },
];

/*
 * Group rates are not priced per year level. Small-group classes run for Year 12
 * only and cost the same per lesson whichever course a student takes, so the one
 * rate lives with the rest of the class settings; see SESSION_PRICE in
 * groupClassLaunch.ts.
 */

/** Bundle price divided across its lessons, formatted as a whole-dollar rate. */
export function perLessonRate(bundlePrice: string): string {
    const total = Number(bundlePrice.replace(/[$,]/g, ''));
    return `$${(total / LESSONS_PER_BUNDLE).toFixed(0)}`;
}
