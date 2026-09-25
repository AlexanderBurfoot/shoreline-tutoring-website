/** Worked examples, gathered by subject. */
import { workedExampleChemistryEntries } from './chemistry';
import { workedExampleCoreEntries } from './core';
import { workedExampleEnglishEntries } from './english';
import { workedExampleMathsEntries } from './mathematics';
import { workedExampleMathsAppliedEntries } from './mathematicsApplied';
import { workedExampleOtherEntries } from './other';
import { workedExamplePhysicsEntries } from './physics';
import type { StudyEntry } from '../types';

export const workedExampleEntries: StudyEntry[] = [
    ...workedExampleCoreEntries,
    ...workedExampleMathsEntries,
    ...workedExampleMathsAppliedEntries,
    ...workedExampleChemistryEntries,
    ...workedExamplePhysicsEntries,
    ...workedExampleOtherEntries,
    ...workedExampleEnglishEntries,
];
