import type { Metadata } from 'next';
import FormatPage from '../../components/FormatPage';
import StudentTestimonials from '../../components/StudentTestimonials';
import { oneOnOnePage } from '../../data/formatPages';
import { SHARE_IMAGE } from '../../lib/site';

const TITLE = 'One-on-One Tutoring';
const DESCRIPTION =
    'Private one-on-one tutoring across Years 1–12, at your home or live online, with a learning plan built around a single student. The first trial lesson is free, with no lock-in contract.';

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
        images: [SHARE_IMAGE],
    },
};

export default function OneOnOneRoute() {
    return (
        <FormatPage content={oneOnOnePage}>
            {/* Every quote we hold is from a one-on-one student, so the proof
                sits on the page for the format they actually studied under. */}
            <StudentTestimonials />
        </FormatPage>
    );
}
