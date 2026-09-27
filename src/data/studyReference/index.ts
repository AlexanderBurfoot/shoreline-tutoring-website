/**
 * The study reference bank, gathered from the subject files.
 *
 * Every entry becomes an answer the assistant can offer, alongside the answers
 * about the business itself. Each carries a link to its subject page, so a
 * student who wanted the formula is one click from the tutoring that explains it.
 */
import { beyondSyllabusEntries } from './beyondSyllabus';
import { biologyEntries } from './biology';
import { businessEntries } from './businessStudies';
import { chemistryEntries } from './chemistry';
import { commonMistakeEntries } from './commonMistakes';
import { courseOverviewEntries } from './courseOverviews';
import { examStructureEntries } from './examStructure';
import { examTechniqueEntries } from './examTechnique';
import { economicsEntries } from './economics';
import { examPrepEntries } from './examPrep';
import { englishConventionEntries } from './english/conventions';
import { englishEntries } from './english';
import { mathematicsEntries } from './mathematics';
import { physicsEntries } from './physics';
import { scientificMethodEntries } from './scientificMethod';
import { workedExampleEntries } from './workedExamples';
import type { StudyEntry, StudySubject } from './types';
import { SUBJECTS_PATH } from '../../lib/site';

export type { StudyEntry, StudySubject } from './types';

export const studyEntries: StudyEntry[] = [
    ...mathematicsEntries,
    ...physicsEntries,
    ...chemistryEntries,
    ...biologyEntries,
    ...englishEntries,
    ...economicsEntries,
    ...businessEntries,
    ...examPrepEntries,
    ...workedExampleEntries,
    ...beyondSyllabusEntries,
    ...commonMistakeEntries,
    ...scientificMethodEntries,
    ...courseOverviewEntries,
    ...examStructureEntries,
    ...examTechniqueEntries,
    /* Last on purpose. A one-word query such as "comma" scores 1.000 against
       every entry containing that word, and the tie falls to whichever comes
       first, so these narrow rules must not displace the general entries. */
    ...englishConventionEntries,
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
    economics: 'Economics tutoring',
    'business-studies': 'Business Studies tutoring',
    'selective-high-school': 'Selective High School preparation',
    'oc-prep': 'Opportunity Class preparation',
    naplan: 'NAPLAN preparation',
};

export function subjectLinkLabel(subject: StudySubject): string {
    return `See ${SUBJECT_LABELS[subject].toLowerCase()}`;
}
