import type { Course } from '../groupClassLaunch';

/** One weekly lesson in a course's term plan. */
export interface CourseLesson {
    /** The syllabus topic the lesson belongs to; consecutive lessons sharing one are grouped. */
    topic: string;
    title: string;
    /** Syllabus codes or module references, e.g. 'MA-C3' or 'Module 5'. */
    syllabusRefs: string[];
    /** What is taught, in plain language a parent can follow. */
    points: string[];
    /** The one skill a student should leave the lesson able to do. */
    keySkill: string;
}

/** What a later school term of Year 12 covers, for the "what comes next" section. */
export interface LaterTerm {
    term: string;
    focus: string;
}

/** The full term plan for one course. */
export interface CourseOutline {
    courseId: Course['id'];
    /** Two or three sentences on what the term achieves. */
    overview: string;
    /**
     * What the term covers, as one clause for the page's search-result
     * description, e.g. "probability, trigonometry and network flow". The
     * overview is written for the page and runs past the length search engines
     * display, so it would be cut mid-sentence if it were used instead.
     */
    metaFocus: string;
    /** Which NESA syllabus the plan follows, and how the order was chosen. */
    syllabusNote: string;
    /** One entry per lesson in the published schedule, in teaching order. */
    lessons: CourseLesson[];
    /** The rest of Year 12, so families can see where the term leads. */
    laterTerms: LaterTerm[];
}
