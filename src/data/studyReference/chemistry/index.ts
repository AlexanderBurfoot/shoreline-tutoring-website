/** Chemistry, Years 11 and 12. */
import { chemistryYear11Entries } from './year11';
import { chemistryYear12Entries } from './year12';
import type { StudyEntry } from '../types';

export const chemistryEntries: StudyEntry[] = [...chemistryYear11Entries, ...chemistryYear12Entries];
