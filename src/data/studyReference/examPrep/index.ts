/** The placement and national tests, gathered from their banks. */
import { naplanEntries } from './naplan';
import { naplanLiteracyEntries } from './naplanLiteracy';
import { naplanNumeracyEntries } from './naplanNumeracy';
import { ocPrepEntries } from './ocPrep';
import { selectiveEntries } from './selective';
import { selectiveReadingEntries } from './selectiveReading';
import { selectiveReasoningEntries } from './selectiveReasoning';
import { selectiveThinkingEntries } from './selectiveThinking';
import { selectiveWritingEntries } from './selectiveWriting';
import type { StudyEntry } from '../types';

export const examPrepEntries: StudyEntry[] = [
    ...selectiveEntries,
    ...selectiveReasoningEntries,
    ...selectiveThinkingEntries,
    ...selectiveReadingEntries,
    ...selectiveWritingEntries,
    ...ocPrepEntries,
    ...naplanEntries,
    ...naplanNumeracyEntries,
    ...naplanLiteracyEntries,
];
