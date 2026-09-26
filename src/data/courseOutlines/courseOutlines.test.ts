import { describe, expect, it } from 'vitest';

import {
    COURSES_WITH_OUTLINES,
    courseMetaDescription,
    courseOverview,
    courseTitle,
    lessonsBeforeSchoolTerm,
    termRangeSummary,
} from './index';
import { COURSES, TERM_LAST_LESSON_LONG, TERM_SESSIONS } from '../groupClassLaunch';
import {
    META_DESCRIPTION_MAX_LENGTH,
    SEARCH_TITLE_MAX_LENGTH,
    truncateForMeta,
} from '../../lib/metadata';

describe('course outlines', () => {
    it('covers every course that classes run for', () => {
        expect(COURSES_WITH_OUTLINES).toHaveLength(COURSES.length);
    });

    it('plans one lesson for every session in the term', () => {
        for (const course of COURSES_WITH_OUTLINES) {
            expect(course.outline.lessons, course.name).toHaveLength(TERM_SESSIONS);
        }
    });
});

describe('courseMetaDescription', () => {
    it.each(COURSES_WITH_OUTLINES.map((course) => [course.name, course] as const))(
        'fits %s into what search engines display, uncut',
        (_name, course) => {
            const description = courseMetaDescription(course);

            expect(description.length).toBeLessThanOrEqual(META_DESCRIPTION_MAX_LENGTH);
            /* Truncation would leave an ellipsis and a dangling clause. */
            expect(truncateForMeta(description)).toBe(description);
            expect(description.endsWith('.')).toBe(true);
        },
    );

    it('describes each course differently', () => {
        const descriptions = COURSES_WITH_OUTLINES.map(courseMetaDescription);
        expect(new Set(descriptions).size).toBe(descriptions.length);
    });

    it('names the course, the term and where classes run', () => {
        const description = courseMetaDescription(COURSES_WITH_OUTLINES[0]);

        expect(description).toContain(COURSES_WITH_OUTLINES[0].name);
        expect(description).toContain('Term 4');
        expect(description).toContain('St Leonards');
    });
});

describe('courseOverview', () => {
    it('counts the lessons that fall before school goes back', () => {
        /* Classes start Sat 3 October; NSW Term 4 starts Mon 12 October. */
        expect(lessonsBeforeSchoolTerm()).toBe(2);
    });

    it('adds the holidays line to every course, without it being written into the copy', () => {
        for (const course of COURSES_WITH_OUTLINES) {
            expect(course.outline.overview, course.name).not.toContain('school holidays');
            expect(courseOverview(course), course.name).toContain(
                'The first two lessons fall in the school holidays',
            );
        }
    });

    it("keeps each course's own wording at the front", () => {
        for (const course of COURSES_WITH_OUTLINES) {
            expect(courseOverview(course).startsWith(course.outline.overview)).toBe(true);
        }
    });
});

describe('termRangeSummary', () => {
    it('gives each cohort its own dates', () => {
        expect(termRangeSummary()).toBe(
            'In person Saturday 3 October to Saturday 12 December, ' +
                'online Sunday 4 October to Sunday 13 December.',
        );
    });

    it('agrees with the last lesson date the rest of the site shows', () => {
        expect(termRangeSummary()).toContain(TERM_LAST_LESSON_LONG);
    });
});

describe('courseTitle', () => {
    it.each(COURSES_WITH_OUTLINES.map((course) => [course.name, course] as const))(
        'fits %s into what search results display',
        (_name, course) => {
            expect(courseTitle(course).length).toBeLessThanOrEqual(SEARCH_TITLE_MAX_LENGTH);
        },
    );

    it('names the course, the year and the term', () => {
        for (const course of COURSES_WITH_OUTLINES) {
            const title = courseTitle(course);
            expect(title, course.name).toContain(course.name);
            expect(title, course.name).toContain('Year 12');
            expect(title, course.name).toContain('Term 4');
        }
    });
});

describe('term review lessons', () => {
    /* The last lesson of every course is a review, and was once the same copy on
       all six pages. Each now names what that course actually covered. */
    it('gives each course its own review lesson', () => {
        const reviews = COURSES_WITH_OUTLINES.map(
            (course) => course.outline.lessons.at(-1)?.points.join(' ') ?? '',
        );

        expect(new Set(reviews).size).toBe(reviews.length);
    });
});

describe('lesson detail', () => {
    it('describes every lesson in at least three points', () => {
        for (const course of COURSES_WITH_OUTLINES) {
            for (const [index, lesson] of course.outline.lessons.entries()) {
                expect(lesson.points.length, `${course.name} lesson ${index + 1}`).toBeGreaterThanOrEqual(3);
            }
        }
    });

    it('lists syllabus references one code at a time', () => {
        for (const course of COURSES_WITH_OUTLINES) {
            for (const lesson of course.outline.lessons) {
                for (const ref of lesson.syllabusRefs) {
                    expect(ref, `${course.name}: ${lesson.title}`).not.toContain(',');
                }
            }
        }
    });
});
