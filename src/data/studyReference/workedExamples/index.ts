/** Worked examples, gathered by subject. */
import { workedExampleChemistryEntries } from './chemistry';
import { workedExampleCoreEntries } from './core';
import { workedExampleMathsEntries } from './mathematics';
import { workedExampleOtherEntries } from './other';
import { workedExamplePhysicsEntries } from './physics';
import type { StudyEntry } from '../types';

export const workedExampleEntries: StudyEntry[] = [
    ...workedExampleCoreEntries,
    ...workedExampleMathsEntries,
    ...workedExampleChemistryEntries,
    ...workedExamplePhysicsEntries,
    ...workedExampleOtherEntries,
];
