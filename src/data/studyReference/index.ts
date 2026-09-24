/**
 * The study reference bank, gathered from the subject files.
 *
 * Every entry becomes an answer the assistant can offer, alongside the answers
 * about the business itself. Each carries a link to its subject page, so a
 * student who wanted the formula is one click from the tutoring that explains it.
 */
import { biologyEntries } from './biology';
import { chemistryEntries } from './chemistry';
import { englishEntries } from './english';
import { mathematicsEntries } from './mathematics';
import { physicsEntries } from './physics';
import type { StudyEntry, StudySubject } from './types';
import { SUBJECTS_PATH } from '../../lib/site';

export type { StudyEntry, StudySubject } from './types';

export const studyEntries: StudyEntry[] = [
    ...mathematicsEntries,
    ...physicsEntries,
    ...chemistryEntries,
    ...biologyEntries,
    ...englishEntries,
];

/** The page to send a student to after an answer, by subject. */
export function subjectPath(subject: StudySubject): string {
    return `${SUBJECTS_PATH}/${subject}`;
}

const SUBJECT_LABELS: Record<StudySubject, string> = {
    mathematics: 'Mathematics tutoring',
    physics: 'Physics tutoring',
    chemistry: 'Chemistry tutoring',
    biology: 'Biology tutoring',
    english: 'English tutoring',
};

export function subjectLinkLabel(subject: StudySubject): string {
    return `See ${SUBJECT_LABELS[subject].toLowerCase()}`;
}
