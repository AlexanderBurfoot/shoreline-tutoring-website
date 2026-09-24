/** Mathematics, junior and senior banks combined. */
import { mathematicsJuniorEntries } from './junior';
import { mathematicsSeniorEntries } from './senior';
import type { StudyEntry } from '../types';

export const mathematicsEntries: StudyEntry[] = [
    ...mathematicsJuniorEntries,
    ...mathematicsSeniorEntries,
];
