import type { Metadata } from 'next';
import FormatPage from '../../components/FormatPage';
import JsonLd from '../../components/JsonLd';
import { groupClassesPage } from '../../data/formatPages';
import { FIRST_LESSON_DATE_LONG } from '../../data/groupClassLaunch';
import { groupClassInstances, groupClassOffers } from '../../lib/groupClassSchema';
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

/** Course details for search results, built from the same class data as the page. */
const COURSE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Year 12 Small-Group Classes',
    description: DESCRIPTION,
    url: PAGE_URL,
    provider: { '@type': 'EducationalOrganization', name: 'Shoreline Tutoring', url: SITE_URL },
    // Every way of paying that is currently open, so search results never show
    // a price the page no longer offers.
    offers: groupClassOffers(PAGE_URL),
    hasCourseInstance: groupClassInstances(),
};

export default function GroupClassesRoute() {
    return (
        <>
            <JsonLd data={COURSE_SCHEMA} />
            <FormatPage content={groupClassesPage} />
        </>
    );
}
