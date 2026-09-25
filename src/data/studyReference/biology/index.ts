/** Biology, gathered from the module banks. */
import { biologyCellsEntries } from './cells';
import { biologyOrganisationEntries } from './organisation';
import { biologyDiversityEntries } from './diversity';
import { biologyEcosystemsEntries } from './ecosystems';
import { biologyHeredityEntries } from './heredity';
import { biologyEvolutionEntries } from './evolution';
import { biologyGeneticChangeEntries } from './geneticChange';
import { biologyPlantsEntries } from './plants';
import { biologyImmunityEntries } from './immunity';
import { biologyInfectiousDiseaseEntries } from './infectiousDisease';
import { biologyNonInfectiousEntries } from './nonInfectious';
import { biologySkillsEntries } from './skills';
import type { StudyEntry } from '../types';

export const biologyEntries: StudyEntry[] = [
    ...biologyCellsEntries,
    ...biologyOrganisationEntries,
    ...biologyDiversityEntries,
    ...biologyEvolutionEntries,
    ...biologyPlantsEntries,
    ...biologyEcosystemsEntries,
    ...biologyHeredityEntries,
    ...biologyGeneticChangeEntries,
    ...biologyInfectiousDiseaseEntries,
    ...biologyImmunityEntries,
    ...biologyNonInfectiousEntries,
    ...biologySkillsEntries,
];
