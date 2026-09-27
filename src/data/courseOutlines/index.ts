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
    SCHOOL_TERM_START_ISO,
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
 * The course page's title. It carries the course, the year and the term, which
 * leaves no room for the site name the layout appends elsewhere: with it, the
 * longest of these runs past what search results display and is cut. The page
 * sets it as an absolute title for that reason.
 */
export const courseTitle = (course: CourseWithOutline) =>
    `Year 12 ${course.name}: ${TERM_LABEL} Class Plan`;

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

/** "Saturday 3 October", for prose that names a date in full. */
const LONG_DATE_FORMAT = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'UTC',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
});

const longDate = (isoDate: string, weeksLater: number) => {
    const instant = Date.parse(isoDate) + weeksLater * DAYS_PER_WEEK * MILLISECONDS_PER_DAY;
    const parts = LONG_DATE_FORMAT.formatToParts(instant);
    const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)?.value ?? '';
    return `${part('weekday')} ${part('day')} ${part('month')}`;
};

/**
 * When the term runs, for both cohorts. The online class sits a day after the
 * in-person one, so a single range would be wrong for half the students.
 */
export const termRangeSummary = (): string => {
    const lastIndex = TERM_SESSIONS - 1;
    return (
        `In person ${longDate(FIRST_LESSON_DATE_ISO, 0)} to ${longDate(FIRST_LESSON_DATE_ISO, lastIndex)}, ` +
        `online ${longDate(ONLINE_FIRST_LESSON_DATE_ISO, 0)} to ${longDate(ONLINE_FIRST_LESSON_DATE_ISO, lastIndex)}.`
    );
};

/** Small numbers read better as words in a sentence than as digits. */
const NUMBER_WORDS = ['no', 'one', 'two', 'three', 'four', 'five'];

/**
 * How many lessons run before school goes back. Classes start in the holidays,
 * which is a selling point, so the number is counted rather than written into
 * each course's copy where a change of start date would leave it wrong.
 */
export const lessonsBeforeSchoolTerm = (): number => {
    const schoolStart = Date.parse(SCHOOL_TERM_START_ISO);
    const firstLesson = Date.parse(FIRST_LESSON_DATE_ISO);
    if (!(firstLesson < schoolStart)) {
        return 0;
    }

    const weeks = Math.ceil((schoolStart - firstLesson) / (DAYS_PER_WEEK * MILLISECONDS_PER_DAY));
    return Math.min(weeks, TERM_SESSIONS);
};

/** The holidays line, or nothing once the term starts before the first lesson. */
const schoolHolidayNote = (): string => {
    const lessons = lessonsBeforeSchoolTerm();
    if (lessons === 0) {
        return '';
    }

    const count = NUMBER_WORDS[lessons] ?? String(lessons);
    const plural = lessons === 1 ? 'lesson falls' : 'lessons fall';
    return (
        `The first ${count} ${plural} in the school holidays, so students start ` +
        `${TERM_LABEL} already ahead of their class.`
    );
};

/**
 * A course's overview, with the holidays line added while it applies. The
 * course files hold only what their own term covers, so none of them can go
 * stale against the schedule.
 */
export const courseOverview = (course: CourseWithOutline): string =>
    [course.outline.overview, schoolHolidayNote()].filter(Boolean).join(' ');
