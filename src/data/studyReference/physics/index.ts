/** Physics, Years 11 and 12. */
import { physicsYear11Entries } from './year11';
import { physicsYear12Entries } from './year12';
import type { StudyEntry } from '../types';

export const physicsEntries: StudyEntry[] = [...physicsYear11Entries, ...physicsYear12Entries];
