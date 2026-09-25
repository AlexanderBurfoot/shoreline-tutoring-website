/** Physics, gathered from the module banks. */
import { physicsAtomEntries } from './atom';
import { physicsDynamicsEntries } from './dynamics';
import { physicsElectricityEntries } from './electricity';
import { physicsElectromagnetismEntries } from './electromagnetism';
import { physicsKinematicsEntries } from './kinematics';
import { physicsLightEntries } from './light';
import { physicsMechanicsEntries } from './mechanics';
import { physicsNuclearEntries } from './nuclear';
import { physicsSkillsEntries } from './skills';
import { physicsThermalEntries } from './thermal';
import { physicsWavesEntries } from './waves';
import { physicsWavesDetailEntries } from './wavesDetail';
import type { StudyEntry } from '../types';

export const physicsEntries: StudyEntry[] = [
    ...physicsKinematicsEntries,
    ...physicsDynamicsEntries,
    ...physicsWavesEntries,
    ...physicsWavesDetailEntries,
    ...physicsThermalEntries,
    ...physicsElectricityEntries,
    ...physicsMechanicsEntries,
    ...physicsElectromagnetismEntries,
    ...physicsLightEntries,
    ...physicsAtomEntries,
    ...physicsNuclearEntries,
    ...physicsSkillsEntries,
];
