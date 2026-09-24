import { describe, expect, it } from 'vitest';

import { COURSES_WITH_OUTLINES, courseMetaDescription } from './index';
import { COURSES, TERM_SESSIONS } from '../groupClassLaunch';
import { META_DESCRIPTION_MAX_LENGTH, truncateForMeta } from '../../lib/metadata';

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
