import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CourseOutlinePage from '../../../components/CourseOutlinePage';
import JsonLd from '../../../components/JsonLd';
import {
    COURSES_WITH_OUTLINES,
    COURSE_OUTLINES_PUBLISHED,
    courseMetaDescription,
    courseOutlinePath,
    getCourseWithOutline,
    type CourseWithOutline,
} from '../../../data/courseOutlines';
import { GROUP_CLASSES_PATH, TERM_LABEL } from '../../../data/groupClassLaunch';
import { truncateForMeta } from '../../../lib/metadata';
import { SHARE_IMAGE, SITE_URL } from '../../../lib/site';
import { breadcrumbSchema } from '../../../lib/structuredData';

type RouteParams = { params: Promise<{ course: string }> };

export function generateStaticParams() {
    return COURSES_WITH_OUTLINES.map((course) => ({ course: course.id }));
}

// Courses are compiled in, so anything outside the list is a 404.
export const dynamicParams = false;

const pageTitle = (course: CourseWithOutline) => `Year 12 ${course.name} Class: ${TERM_LABEL} Plan`;

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
    const course = getCourseWithOutline((await params).course);
    if (!course) {
        return { title: 'Course Not Found' };
    }

    const title = pageTitle(course);
    const description = truncateForMeta(courseMetaDescription(course));
    const url = courseOutlinePath(course.id);

    return {
        title,
        description,
        alternates: { canonical: url },
        // Draft plans stay out of search results until they are published.
        robots: COURSE_OUTLINES_PUBLISHED ? undefined : { index: false, follow: false },
        openGraph: { type: 'website', title, description, url, images: [SHARE_IMAGE] },
    };
}

/** The course and the topics its term covers, for search results. */
const courseSchema = (course: CourseWithOutline) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Year 12 ${course.name} Small-Group Class`,
    description: course.outline.overview,
    url: `${SITE_URL}${courseOutlinePath(course.id)}`,
    educationalLevel: 'Year 12',
    teaches: [...new Set(course.outline.lessons.map((lesson) => lesson.topic))],
    provider: { '@type': 'EducationalOrganization', name: 'Shoreline Tutoring', url: SITE_URL },
});

export default async function CourseOutlineRoute({ params }: RouteParams) {
    const course = getCourseWithOutline((await params).course);
    if (!course) {
        notFound();
    }

    return (
        <>
            <JsonLd data={courseSchema(course)} />
            <JsonLd data={breadcrumbSchema([
                { name: 'Home', path: '/' },
                { name: 'Group Classes', path: GROUP_CLASSES_PATH },
                { name: course.name, path: courseOutlinePath(course.id) },
            ])} />
            <CourseOutlinePage course={course} />
        </>
    );
}
