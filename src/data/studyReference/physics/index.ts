/** Physics, gathered from the module banks. */
import { physicsAtomEntries } from './atom';
import { physicsDynamicsEntries } from './dynamics';
import { physicsElectricityEntries } from './electricity';
import { physicsElectromagnetismEntries } from './electromagnetism';
import { physicsKinematicsEntries } from './kinematics';
import { physicsLightEntries } from './light';
import { physicsMechanicsEntries } from './mechanics';
import { physicsSkillsEntries } from './skills';
import { physicsWavesEntries } from './waves';
import type { StudyEntry } from '../types';

export const physicsEntries: StudyEntry[] = [
    ...physicsKinematicsEntries,
    ...physicsDynamicsEntries,
    ...physicsWavesEntries,
    ...physicsElectricityEntries,
    ...physicsMechanicsEntries,
    ...physicsElectromagnetismEntries,
    ...physicsLightEntries,
    ...physicsAtomEntries,
    ...physicsSkillsEntries,
];
