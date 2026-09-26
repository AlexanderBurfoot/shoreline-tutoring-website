/** Mathematics, gathered from the stage and topic banks. */
import { mathematicsPrimaryEntries } from './primary';
import { mathematicsMistakeEntries } from './mistakes';
import { mathematicsLanguageEntries } from './language';
import { mathematicsAlgebraEntries } from './algebra';
import { mathematicsCalculusEntries } from './calculus';
import { mathematicsExtensionEntries } from './extension';
import { mathematicsFunctionsEntries } from './functions';
import { mathematicsGeometryEntries } from './geometry';
import { mathematicsJuniorEntries } from './junior';
import { mathematicsNumberEntries } from './number';
import { mathematicsProbabilityEntries } from './probability';
import { mathematicsSeniorEntries } from './senior';
import { mathematicsStandardEntries } from './standard';
import { mathematicsTrigonometryEntries } from './trigonometry';
import type { StudyEntry } from '../types';

export const mathematicsEntries: StudyEntry[] = [
    ...mathematicsJuniorEntries,
    ...mathematicsNumberEntries,
    ...mathematicsAlgebraEntries,
    ...mathematicsGeometryEntries,
    ...mathematicsSeniorEntries,
    ...mathematicsFunctionsEntries,
    ...mathematicsTrigonometryEntries,
    ...mathematicsCalculusEntries,
    ...mathematicsProbabilityEntries,
    ...mathematicsStandardEntries,
    ...mathematicsExtensionEntries,
    ...mathematicsLanguageEntries,
    ...mathematicsMistakeEntries,
    ...mathematicsPrimaryEntries,
];
