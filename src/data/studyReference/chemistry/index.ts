/** Chemistry, gathered from the module banks. */
import { chemistryAcidsEquilibriumEntries } from './acidsEquilibrium';
import { chemistryAnalysisEntries } from './analysis';
import { chemistryCalculationEntries } from './calculations';
import { chemistryOrganicEntries } from './organic';
import { chemistryPracticalEntries } from './practical';
import { chemistryYear11Entries } from './year11';
import type { StudyEntry } from '../types';

export const chemistryEntries: StudyEntry[] = [
    ...chemistryYear11Entries,
    ...chemistryCalculationEntries,
    ...chemistryAcidsEquilibriumEntries,
    ...chemistryOrganicEntries,
    ...chemistryAnalysisEntries,
    ...chemistryPracticalEntries,
];
