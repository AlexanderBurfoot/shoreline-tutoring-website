import type { Metadata } from 'next';
import Resources from '../../components/Resources';
import { SHARE_IMAGE } from '../../lib/site';

const TITLE = 'Study Resources & HSC Guides';
const DESCRIPTION =
    'Free study guides, HSC strategy and subject breakdowns written by Shoreline Tutoring, with practical advice on exams, study habits and university pathways.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: '/resources',
    },
    openGraph: {
        type: 'website',
        title: TITLE,
        description: DESCRIPTION,
        url: '/resources',
        images: [SHARE_IMAGE],
    },
};

export default function ResourcesRoute() {
    return <Resources />;
}
