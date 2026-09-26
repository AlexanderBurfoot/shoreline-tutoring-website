import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CourseOutlinePage from '../../../components/CourseOutlinePage';
import JsonLd from '../../../components/JsonLd';
import {
    COURSES_WITH_OUTLINES,
    COURSE_OUTLINES_PUBLISHED,
    courseMetaDescription,
    courseOutlinePath,
    courseOverview,
    courseTitle,
    getCourseWithOutline,
    type CourseWithOutline,
} from '../../../data/courseOutlines';
import { GROUP_CLASSES_PATH } from '../../../data/groupClassLaunch';
import { groupClassInstances, groupClassOffers } from '../../../lib/groupClassSchema';
import { truncateForMeta } from '../../../lib/metadata';
import { SHARE_IMAGE, SITE_URL } from '../../../lib/site';
import { breadcrumbSchema } from '../../../lib/structuredData';

type RouteParams = { params: Promise<{ course: string }> };

export function generateStaticParams() {
    return COURSES_WITH_OUTLINES.map((course) => ({ course: course.id }));
}

// Courses are compiled in, so anything outside the list is a 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
    const course = getCourseWithOutline((await params).course);
    if (!course) {
        /* Unreachable while dynamicParams is false, but a page with no plan
           behind it should never be offered to search engines. */
        return { title: 'Course Not Found', robots: { index: false, follow: false } };
    }

    const title = courseTitle(course);
    const description = truncateForMeta(courseMetaDescription(course));
    const url = courseOutlinePath(course.id);

    return {
        title: { absolute: title },
        description,
        alternates: { canonical: url },
        // Draft plans stay out of search results until they are published.
        robots: COURSE_OUTLINES_PUBLISHED ? undefined : { index: false, follow: false },
        openGraph: { type: 'website', title, description, url, images: [SHARE_IMAGE] },
    };
}

/**
 * The course, the topics its term covers, what it costs and when it runs. The
 * price and schedule come from the same helpers as the page covering every
 * class, so the two entries cannot disagree, and the offers are this course's
 * own: its founding places may be gone while other classes still have them.
 */
const courseSchema = (course: CourseWithOutline) => {
    const url = `${SITE_URL}${courseOutlinePath(course.id)}`;

    return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: `Year 12 ${course.name} Small-Group Class`,
        description: courseOverview(course),
        url,
        educationalLevel: 'Year 12',
        teaches: [...new Set(course.outline.lessons.map((lesson) => lesson.topic))],
        provider: { '@type': 'EducationalOrganization', name: 'Shoreline Tutoring', url: SITE_URL },
        offers: groupClassOffers(url, course.id),
        hasCourseInstance: groupClassInstances(),
    };
};

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
