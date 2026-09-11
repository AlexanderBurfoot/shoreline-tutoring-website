import type { Metadata } from 'next';
import FormatPage from '../../components/FormatPage';
import { oneOnOnePage } from '../../data/formatPages';

const TITLE = 'One-on-One Tutoring';
const DESCRIPTION =
    'Private one-on-one tutoring across Years 1–12, live online with your tutor and a learning plan built around a single student. The first trial lesson is free, with no lock-in contract.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: '/one-on-one',
    },
    openGraph: {
        type: 'website',
        title: TITLE,
        description: DESCRIPTION,
        url: '/one-on-one',
    },
};

export default function OneOnOneRoute() {
    return <FormatPage content={oneOnOnePage} />;
}
