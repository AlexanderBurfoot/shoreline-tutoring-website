import type { Metadata } from 'next';
import SubjectsIndex from '../../components/SubjectsIndex';
import JsonLd from '../../components/JsonLd';
import { SHARE_IMAGE } from '../../lib/site';
import { breadcrumbSchema } from '../../lib/structuredData';

const TITLE = 'Subjects We Tutor';
const DESCRIPTION =
    'Every subject Shoreline Tutoring covers, from English and Mathematics to Physics, Chemistry and selective school preparation, one-on-one or in small groups.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: '/subjects',
    },
    openGraph: {
        type: 'website',
        title: TITLE,
        description: DESCRIPTION,
        url: '/subjects',
        images: [SHARE_IMAGE],
    },
};

export default function SubjectsRoute() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([
                { name: 'Home', path: '/' },
                { name: 'Subjects', path: '/subjects' },
            ])} />
            <SubjectsIndex />
        </>
    );
}
