/**
 * The parts of a Course entry in search results that every group-class page
 * shares: what a place costs, and when the classes run.
 *
 * Shared between the page covering all the classes and each course's own plan
 * page, so the two cannot describe the same offering differently. Both are
 * built from the class data, so a rate or date change carries through.
 */
import {
    FIRST_LESSON_DATE_ISO,
    FOUNDING_TERM_PRICE_DOLLARS,
    LESSON_TEACHING_HOURS,
    ONLINE_FIRST_LESSON_DATE_ISO,
    SESSION_PRICE_DOLLARS,
    TERM_PRICE_DOLLARS,
    VENUE_POSTAL_ADDRESS,
    VENUE_SUBURB,
    anyFoundingPlaces,
    hasFoundingPlaces,
    type Course,
} from '../data/groupClassLaunch';

/** Zone the published class times are given in, for the schedule below. */
const SCHEDULE_TIME_ZONE = 'Australia/Sydney';

/** One way of paying for the classes, as schema.org describes a price. */
const offer = (name: string, price: number, unitText: 'term' | 'lesson', url: string) => ({
    '@type': 'Offer',
    name,
    category: 'Paid',
    price,
    priceCurrency: 'AUD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'AUD', unitText },
    url,
});

/**
 * Every way of paying that is currently open, so search results never show a
 * price the page no longer offers. Pass a course id on a page about that one
 * course: its founding places may be gone while other classes still have them.
 */
export const groupClassOffers = (url: string, courseId?: Course['id']) => {
    const foundingOpen = courseId ? hasFoundingPlaces(courseId) : anyFoundingPlaces();

    return [
        ...(foundingOpen ? [offer('Founding place, whole term', FOUNDING_TERM_PRICE_DOLLARS, 'term', url)] : []),
        offer('Whole term, paid up front', TERM_PRICE_DOLLARS, 'term', url),
        offer('Pay weekly', SESSION_PRICE_DOLLARS, 'lesson', url),
    ];
};

/**
 * One weekly class, in person or online. The schedule carries the recurrence
 * rather than the start date, so search engines read this as a course that runs
 * every week and not as a one-off event that has already happened.
 */
const courseInstance = (mode: 'Onsite' | 'Online', startDate: string, day: 'Saturday' | 'Sunday') => ({
    '@type': 'CourseInstance',
    courseMode: mode,
    courseWorkload: `PT${LESSON_TEACHING_HOURS}H`,
    courseSchedule: {
        '@type': 'Schedule',
        repeatFrequency: 'P1W',
        byDay: `https://schema.org/${day}`,
        startDate,
        scheduleTimezone: SCHEDULE_TIME_ZONE,
    },
    ...(mode === 'Onsite'
        ? {
            location: {
                '@type': 'Place',
                name: `Shoreline Tutoring ${VENUE_SUBURB}`,
                address: VENUE_POSTAL_ADDRESS,
            },
        }
        : {}),
});

/** Both cohorts: in person on Saturdays, online on Sundays. */
export const groupClassInstances = () => [
    courseInstance('Onsite', FIRST_LESSON_DATE_ISO, 'Saturday'),
    courseInstance('Online', ONLINE_FIRST_LESSON_DATE_ISO, 'Sunday'),
];
