import type { Metadata } from 'next';
import FormatPage from '../../components/FormatPage';
import JsonLd from '../../components/JsonLd';
import { groupClassesPage } from '../../data/formatPages';
import {
    FIRST_LESSON_DATE_ISO,
    FIRST_LESSON_DATE_LONG,
    LESSON_TEACHING_HOURS,
    ONLINE_FIRST_LESSON_DATE_ISO,
    SESSION_PRICE_DOLLARS,
    VENUE_POSTAL_ADDRESS,
    VENUE_SUBURB,
} from '../../data/groupClassLaunch';
import { SITE_URL } from '../../lib/site';

const TITLE = 'Year 12 Small-Group Classes';
const DESCRIPTION =
    `Weekly small-group classes for Year 12 Mathematics Standard, Advanced and Extension 1, Physics and Chemistry. In person at St Leonards on Saturdays or online on Sundays, from ${FIRST_LESSON_DATE_LONG}. The first lesson is free.`;

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
const COURSE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Year 12 Small-Group Classes',
    description: DESCRIPTION,
    url: PAGE_URL,
    provider: { '@type': 'EducationalOrganization', name: 'Shoreline Tutoring', url: SITE_URL },
    offers: {
        '@type': 'Offer',
        category: 'Paid',
        price: SESSION_PRICE_DOLLARS,
        priceCurrency: 'AUD',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: SESSION_PRICE_DOLLARS,
            priceCurrency: 'AUD',
            unitText: 'lesson',
        },
        url: PAGE_URL,
    },
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
