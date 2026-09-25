/** The placement and national tests, gathered from their banks. */
import { naplanEntries } from './naplan';
import { ocPrepEntries } from './ocPrep';
import { selectiveEntries } from './selective';
import { selectiveReasoningEntries } from './selectiveReasoning';
import type { StudyEntry } from '../types';

export const examPrepEntries: StudyEntry[] = [
    ...selectiveEntries,
    ...selectiveReasoningEntries,
    ...ocPrepEntries,
    ...naplanEntries,
];
