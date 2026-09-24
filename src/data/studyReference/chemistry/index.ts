/** Chemistry, Years 11 and 12. */
import { chemistryAcidsEquilibriumEntries } from './acidsEquilibrium';
import { chemistryOrganicAnalysisEntries } from './organicAnalysis';
import { chemistryYear11Entries } from './year11';
import type { StudyEntry } from '../types';

export const chemistryEntries: StudyEntry[] = [
    ...chemistryYear11Entries,
    ...chemistryAcidsEquilibriumEntries,
    ...chemistryOrganicAnalysisEntries,
];
