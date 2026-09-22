import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SubjectPage from '../../../components/SubjectPage';
import JsonLd from '../../../components/JsonLd';
import { getSubjectBySlug, subjects } from '../../../data/subjectData';
import { truncateForMeta } from '../../../lib/metadata';
import { SHARE_IMAGE } from '../../../lib/site';
import { breadcrumbSchema } from '../../../lib/structuredData';

export function generateStaticParams() {
    return subjects.map((subject) => ({ slug: subject.slug }));
}

// Subjects are compiled in from subjectData, so the slug set is fixed at build
// time. Anything outside it is a 404 rather than an on-demand render.
export const dynamicParams = false;

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
    const { slug } = await params;
    const subject = getSubjectBySlug(slug);

    // No canonical for an unknown slug, since it must not claim to be a real page.
    if (!subject) {
        return { title: 'Subject Not Found' };
    }

    const title = `${subject.title} Tutoring`;
    const description = truncateForMeta(subject.shortDescription);
    const url = `/subjects/${subject.slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            title,
            description,
            url,
            images: [SHARE_IMAGE],
        },
    };
}

export default async function SubjectRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const subject = getSubjectBySlug(slug);

    if (!subject) {
        notFound();
    }

    return (
        <>
            <JsonLd data={breadcrumbSchema([
                { name: 'Home', path: '/' },
                { name: 'Subjects', path: '/subjects' },
                { name: subject.title, path: `/subjects/${subject.slug}` },
            ])} />
            <SubjectPage />
        </>
    );
}
