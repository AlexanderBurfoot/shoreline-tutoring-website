/** Chemistry, gathered from the module banks. */
import { chemistryLaboratoryEntries } from './laboratory';
import { chemistryComparisonEntries } from './comparisons';
import { chemistryAcidsEquilibriumEntries } from './acidsEquilibrium';
import { chemistryAnalysisEntries } from './analysis';
import { chemistryAppliedEntries } from './applied';
import { chemistryCalculationEntries } from './calculations';
import { chemistryOrganicEntries } from './organic';
import { chemistryPolymersEntries } from './polymers';
import { chemistryPracticalEntries } from './practical';
import { chemistryEnergyEntries } from './energy';
import { chemistryPropertiesEntries } from './properties';
import { chemistryQuantitiesEntries } from './quantities';
import { chemistryReactionsEntries } from './reactions';
import type { StudyEntry } from '../types';

export const chemistryEntries: StudyEntry[] = [
    ...chemistryPropertiesEntries,
    ...chemistryQuantitiesEntries,
    ...chemistryReactionsEntries,
    ...chemistryEnergyEntries,
    ...chemistryCalculationEntries,
    ...chemistryAcidsEquilibriumEntries,
    ...chemistryOrganicEntries,
    ...chemistryPolymersEntries,
    ...chemistryAnalysisEntries,
    ...chemistryPracticalEntries,
    ...chemistryAppliedEntries,
    ...chemistryComparisonEntries,
    ...chemistryLaboratoryEntries,
];
