/** Mathematics, gathered from the stage and topic banks. */
import { mathematicsCalculusEntries } from './calculus';
import { mathematicsExtensionEntries } from './extension';
import { mathematicsFunctionsEntries } from './functions';
import { mathematicsJuniorEntries } from './junior';
import { mathematicsProbabilityEntries } from './probability';
import { mathematicsSeniorEntries } from './senior';
import { mathematicsStandardEntries } from './standard';
import { mathematicsTrigonometryEntries } from './trigonometry';
import type { StudyEntry } from '../types';

export const mathematicsEntries: StudyEntry[] = [
    ...mathematicsJuniorEntries,
    ...mathematicsSeniorEntries,
    ...mathematicsFunctionsEntries,
    ...mathematicsTrigonometryEntries,
    ...mathematicsCalculusEntries,
    ...mathematicsProbabilityEntries,
    ...mathematicsStandardEntries,
    ...mathematicsExtensionEntries,
];
