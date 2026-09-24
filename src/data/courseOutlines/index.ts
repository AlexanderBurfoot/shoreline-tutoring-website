/**
 * Term plans for each small-group course, one page per course under
 * /group-classes/<course id>.
 *
 * Each course keeps its lessons in its own file so a plan can be revised
 * without touching the others. Lesson dates are derived from the first lesson
 * dates in groupClassLaunch, so moving the start date moves every lesson.
 */
import {
    COURSES,
    FIRST_LESSON_DATE_ISO,
    GROUP_CLASSES_PATH,
    ONLINE_FIRST_LESSON_DATE_ISO,
    TERM_LABEL,
    TERM_SESSIONS,
    VENUE_SUBURB,
    type Course,
} from '../groupClassLaunch';
import type { CourseOutline } from './types';
import { mathsStandardOutline } from './mathsStandard';
import { mathsAdvancedOutline } from './mathsAdvanced';
import { mathsExtension1Outline } from './mathsExtension1';
import { physicsOutline } from './physics';
import { chemistryOutline } from './chemistry';
import { biologyOutline } from './biology';

export type { CourseLesson, CourseOutline, LaterTerm } from './types';

/**
 * Whether the course pages are live. While false they are left out of the
 * sitemap, marked noindex, and not linked from the group classes page, so a
 * draft plan can be reviewed at its URL without parents finding it.
 */
export const COURSE_OUTLINES_PUBLISHED = false;

/** Anchor for the lesson-by-lesson plan on each course page. */
export const COURSE_PLAN_SECTION_ID = 'term-plan';

const OUTLINES: CourseOutline[] = [
    mathsStandardOutline,
    mathsAdvancedOutline,
    mathsExtension1Outline,
    physicsOutline,
    chemistryOutline,
    biologyOutline,
];

/** A course with its plan attached, in the same order as COURSES. */
export interface CourseWithOutline extends Course {
    outline: CourseOutline;
}

/**
 * Every course that has a plan. A plan whose lesson count disagrees with the
 * published schedule fails the build rather than showing the wrong dates.
 */
export const COURSES_WITH_OUTLINES: CourseWithOutline[] = COURSES.flatMap((course) => {
    const outline = OUTLINES.find((candidate) => candidate.courseId === course.id);
    if (!outline) return [];
    if (outline.lessons.length !== TERM_SESSIONS) {
        throw new Error(
            `${course.name} plan has ${outline.lessons.length} lessons; the schedule has ${TERM_SESSIONS}.`,
        );
    }
    return [{ ...course, outline }];
});

export const getCourseWithOutline = (courseId: string) =>
    COURSES_WITH_OUTLINES.find((course) => course.id === courseId);

export const courseOutlinePath = (courseId: Course['id']) => `${GROUP_CLASSES_PATH}/${courseId}`;

/**
 * The course page's search-result description, built from the term and the
 * venue so it follows a change to either. Written to fit what search engines
 * display in full; the test suite fails if one grows past that length.
 */
export const courseMetaDescription = (course: CourseWithOutline) =>
    `Year 12 ${course.name} small-group class, in ${VENUE_SUBURB} or online. ` +
    `${TERM_LABEL} covers ${course.outline.metaFocus}.`;

const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const DAYS_PER_WEEK = 7;

/** Calendar dates are formatted in UTC because the ISO dates parse as UTC midnight. */
const SHORT_DATE_FORMAT = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'UTC',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
});

/** "Sat 3 Oct", without the comma en-AU puts after the weekday. */
const shortDate = (isoDate: string, weeksLater: number) => {
    const instant = Date.parse(isoDate) + weeksLater * DAYS_PER_WEEK * MILLISECONDS_PER_DAY;
    const parts = SHORT_DATE_FORMAT.formatToParts(instant);
    const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)?.value ?? '';
    return `${part('weekday')} ${part('day')} ${part('month')}`;
};

/** The in-person and online dates of the lesson at `index`, counting from 0. */
export const lessonDates = (index: number) => ({
    inPerson: shortDate(FIRST_LESSON_DATE_ISO, index),
    online: shortDate(ONLINE_FIRST_LESSON_DATE_ISO, index),
});
