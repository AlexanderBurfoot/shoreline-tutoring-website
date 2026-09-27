/** The placement and national tests, gathered from their banks. */
import { naplanEntries } from './naplan';
import { naplanLiteracyEntries } from './naplanLiteracy';
import { naplanNumeracyEntries } from './naplanNumeracy';
import { ocEnglishEntries } from './ocEnglish';
import { ocMathsEntries } from './ocMaths';
import { ocPrepEntries } from './ocPrep';
import { naplanApproachEntries } from './naplanApproach';
import { naplanPracticeEntries } from './naplanPractice';
import { ocApproachEntries } from './ocApproach';
import { ocReadingEntries } from './ocReading';
import { selectiveEntries } from './selective';
import { selectivePrepEntries } from './selectivePrep';
import { selectiveReadingEntries } from './selectiveReading';
import { selectiveReasoningEntries } from './selectiveReasoning';
import { selectiveThinkingEntries } from './selectiveThinking';
import { selectiveWritingEntries } from './selectiveWriting';
import type { StudyEntry } from '../types';

export const examPrepEntries: StudyEntry[] = [
    ...selectiveEntries,
    ...selectivePrepEntries,
    ...selectiveReasoningEntries,
    ...selectiveThinkingEntries,
    ...selectiveReadingEntries,
    ...selectiveWritingEntries,
    ...ocPrepEntries,
    ...ocApproachEntries,
    ...ocReadingEntries,
    ...ocMathsEntries,
    ...ocEnglishEntries,
    ...naplanEntries,
    ...naplanApproachEntries,
    ...naplanPracticeEntries,
    ...naplanNumeracyEntries,
    ...naplanLiteracyEntries,
];
