/** Worked examples, gathered by subject. */
import { workedExampleChemistryEntries } from './chemistry';
import { workedExampleCoreEntries } from './core';
import { workedExampleEnglishEntries } from './english';
import { workedExampleEnglishModelEntries } from './englishModels';
import { workedExampleMathsEntries } from './mathematics';
import { workedExampleMathsAppliedEntries } from './mathematicsApplied';
import { workedExampleMathsPrimaryEntries } from './mathematicsPrimary';
import { workedExampleMathsSeniorEntries } from './mathematicsSenior';
import { workedExampleNaplanEntries } from './naplan';
import { workedExampleOcEntries } from './ocPrep';
import { workedExampleOtherEntries } from './other';
import { workedExamplePhysicsEntries } from './physics';
import { workedExampleSelectiveEntries } from './selective';
import type { StudyEntry } from '../types';

export const workedExampleEntries: StudyEntry[] = [
    ...workedExampleCoreEntries,
    ...workedExampleMathsEntries,
    ...workedExampleMathsAppliedEntries,
    ...workedExampleChemistryEntries,
    ...workedExamplePhysicsEntries,
    ...workedExampleOtherEntries,
    ...workedExampleEnglishEntries,
    ...workedExampleSelectiveEntries,
    ...workedExampleOcEntries,
    ...workedExampleNaplanEntries,
    ...workedExampleEnglishModelEntries,
    ...workedExampleMathsPrimaryEntries,
    ...workedExampleMathsSeniorEntries,
];
