import type { Metadata } from 'next';
import FormatPage from '../../components/FormatPage';
import JsonLd from '../../components/JsonLd';
import { groupClassesPage } from '../../data/formatPages';
import {
    FIRST_LESSON_DATE_ISO,
    FIRST_LESSON_DATE_LONG,
    LESSON_TEACHING_HOURS,
    FOUNDING_TERM_PRICE_DOLLARS,
    ONLINE_FIRST_LESSON_DATE_ISO,
    SESSION_PRICE_DOLLARS,
    TERM_PRICE_DOLLARS,
    VENUE_POSTAL_ADDRESS,
    anyFoundingPlaces,
    VENUE_SUBURB,
} from '../../data/groupClassLaunch';
import { SHARE_IMAGE, SITE_URL } from '../../lib/site';

const TITLE = 'Year 12 Small-Group Classes';
const DESCRIPTION =
    `Weekly small-group classes for Year 12 Mathematics Standard, Advanced and Extension 1, Physics, Chemistry and Biology. In person at St Leonards on Saturdays or online on Sundays, from ${FIRST_LESSON_DATE_LONG}. The first lesson is free.`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: '/group-classes',
    },
    openGraph: {
        type: 'website',
        title: TITLE,
        description: DESCRIPTION,
        url: '/group-classes',
        images: [SHARE_IMAGE],
    },
};

const PAGE_URL = `${SITE_URL}/group-classes`;

/** Zone the published class times are given in, for the schedule below. */
const SCHEDULE_TIME_ZONE = 'Australia/Sydney';

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

/** Course details for search results, built from the same class data as the page. */
/** One way of paying for the classes, as schema.org describes a price. */
const offer = (name: string, price: number, unitText: 'term' | 'lesson') => ({
    '@type': 'Offer',
    name,
    category: 'Paid',
    price,
    priceCurrency: 'AUD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'AUD', unitText },
    url: PAGE_URL,
});

const COURSE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Year 12 Small-Group Classes',
    description: DESCRIPTION,
    url: PAGE_URL,
    provider: { '@type': 'EducationalOrganization', name: 'Shoreline Tutoring', url: SITE_URL },
    // Every way of paying that is currently open, so search results never show
    // a price the page no longer offers.
    offers: [
        ...(anyFoundingPlaces() ? [offer('Founding place, whole term', FOUNDING_TERM_PRICE_DOLLARS, 'term')] : []),
        offer('Whole term, paid up front', TERM_PRICE_DOLLARS, 'term'),
        offer('Pay weekly', SESSION_PRICE_DOLLARS, 'lesson'),
    ],
    hasCourseInstance: [
        courseInstance('Onsite', FIRST_LESSON_DATE_ISO, 'Saturday'),
        courseInstance('Online', ONLINE_FIRST_LESSON_DATE_ISO, 'Sunday'),
    ],
};

export default function GroupClassesRoute() {
    return (
        <>
            <JsonLd data={COURSE_SCHEMA} />
            <FormatPage content={groupClassesPage} />
        </>
    );
}
