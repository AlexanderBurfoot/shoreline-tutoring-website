import { LESSON_BREAK_MINUTES, LESSON_TEACHING_HOURS } from '../groupClassLaunch';

export interface LessonStage {
    title: string;
    description: string;
}

/** How every weekly lesson runs, whichever course it is. */
export const LESSON_STAGES: LessonStage[] = [
    {
        title: 'Check in',
        description:
            'A short quiz on last week’s content, and the homework questions that caused trouble worked through on the board before anything new is taught.',
    },
    {
        title: 'Teach',
        description:
            'The new content taught at the whiteboard, with worked examples that build from the first idea up to the standard of an HSC question.',
    },
    {
        title: 'Practise',
        description:
            'Questions at four levels: Assimilate, Consolidate, Integrate and Extend. Everyone starts together and moves up as they are ready, with written work checked as they go.',
    },
    {
        title: 'Exam practice',
        description:
            'Past HSC questions on the week’s topic, answered under time and marked against the NESA marking guidelines, so students learn what earns the marks.',
    },
    {
        title: 'Take home',
        description:
            'Session notes and homework set at each student’s level, so the week’s work is secure before the next lesson builds on it.',
    },
];

export const LESSON_STRUCTURE_SUMMARY = `${LESSON_TEACHING_HOURS} hours of teaching with a ${LESSON_BREAK_MINUTES}-minute break, following the same pattern every week.`;
