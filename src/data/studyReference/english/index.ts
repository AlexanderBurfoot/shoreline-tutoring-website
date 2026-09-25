/** English, gathered from the topic banks. */
import { englishCriticalEntries } from './critical';
import { englishModulesEntries } from './modules';
import { englishSkillsEntries } from './skills';
import { englishTechniquesEntries } from './techniques';
import { englishTextTypeEntries } from './textTypes';
import { englishWritingEntries } from './writing';
import type { StudyEntry } from '../types';

export const englishEntries: StudyEntry[] = [
    ...englishTechniquesEntries,
    ...englishTextTypeEntries,
    ...englishWritingEntries,
    ...englishCriticalEntries,
    ...englishModulesEntries,
    ...englishSkillsEntries,
];
