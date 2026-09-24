/** Chemistry, gathered from the module banks. */
import { chemistryAcidsEquilibriumEntries } from './acidsEquilibrium';
import { chemistryAnalysisEntries } from './analysis';
import { chemistryOrganicEntries } from './organic';
import { chemistryYear11Entries } from './year11';
import type { StudyEntry } from '../types';

export const chemistryEntries: StudyEntry[] = [
    ...chemistryYear11Entries,
    ...chemistryAcidsEquilibriumEntries,
    ...chemistryOrganicEntries,
    ...chemistryAnalysisEntries,
];
