/** The placement and national tests, gathered from their banks. */
import { naplanEntries } from './naplan';
import { ocPrepEntries } from './ocPrep';
import { selectiveEntries } from './selective';
import type { StudyEntry } from '../types';

export const examPrepEntries: StudyEntry[] = [...selectiveEntries, ...ocPrepEntries, ...naplanEntries];
