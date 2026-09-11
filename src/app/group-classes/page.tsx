import type { Metadata } from 'next';
import FormatPage from '../../components/FormatPage';
import JsonLd from '../../components/JsonLd';
import { groupClassesPage } from '../../data/formatPages';
import {
    LAUNCH_DATE_ISO,
    LAUNCH_DATE_LONG,
    LESSON_TEACHING_HOURS,
    MAX_CLASS_SIZE,
    ONLINE_LAUNCH_DATE_ISO,
    PROGRAM_LENGTH,
    PROGRAM_LENGTH_TITLE,
    PROGRAM_PRICE_DOLLARS,
    PROGRAM_SESSIONS,
    VENUE_POSTAL_ADDRESS,
    VENUE_SUBURB,
} from '../../data/groupClassLaunch';
import { SITE_URL } from '../../lib/site';

const TITLE = 'Year 12 HSC Maths Small-Group Program';
const DESCRIPTION =
    `A ${PROGRAM_LENGTH} small-group HSC program for Year 12 Mathematics Standard, Advanced and Extension 1, starting ${LAUNCH_DATE_LONG}. Capped at ${MAX_CLASS_SIZE} students, in person at St Leonards or online. Week 1 is free.`;

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

/** One weekly instance of the program, in person or online. */
const courseInstance = (mode: 'Onsite' | 'Online', startDate: string, day: 'Saturday' | 'Sunday') => ({
    '@type': 'CourseInstance',
    courseMode: mode,
    startDate,
    courseWorkload: `PT${PROGRAM_SESSIONS * LESSON_TEACHING_HOURS}H`,
    courseSchedule: {
        '@type': 'Schedule',
        repeatFrequency: 'P1W',
        repeatCount: PROGRAM_SESSIONS,
        byDay: `https://schema.org/${day}`,
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

/** Course details for search results, built from the same launch data as the page. */
const COURSE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Year 12 HSC Maths ${PROGRAM_LENGTH_TITLE} Small-Group Program`,
    description: DESCRIPTION,
    url: PAGE_URL,
    provider: { '@type': 'EducationalOrganization', name: 'Shoreline Tutoring', url: SITE_URL },
    offers: {
        '@type': 'Offer',
        category: 'Paid',
        price: PROGRAM_PRICE_DOLLARS,
        priceCurrency: 'AUD',
        url: PAGE_URL,
    },
    hasCourseInstance: [
        courseInstance('Onsite', LAUNCH_DATE_ISO, 'Saturday'),
        courseInstance('Online', ONLINE_LAUNCH_DATE_ISO, 'Sunday'),
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
