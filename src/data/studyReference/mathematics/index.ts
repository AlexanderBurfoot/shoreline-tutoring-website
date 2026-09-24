/** Mathematics: junior, senior, Standard-specific and Extension banks. */
import { mathematicsExtensionEntries } from './extension';
import { mathematicsJuniorEntries } from './junior';
import { mathematicsSeniorEntries } from './senior';
import { mathematicsStandardEntries } from './standard';
import type { StudyEntry } from '../types';

export const mathematicsEntries: StudyEntry[] = [
    ...mathematicsJuniorEntries,
    ...mathematicsSeniorEntries,
    ...mathematicsStandardEntries,
    ...mathematicsExtensionEntries,
];
