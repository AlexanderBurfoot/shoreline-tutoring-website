/** English, gathered from the topic banks. */
import { englishModulesEntries } from './modules';
import { englishSkillsEntries } from './skills';
import { englishTechniquesEntries } from './techniques';
import { englishWritingEntries } from './writing';
import type { StudyEntry } from '../types';

export const englishEntries: StudyEntry[] = [
    ...englishTechniquesEntries,
    ...englishWritingEntries,
    ...englishModulesEntries,
    ...englishSkillsEntries,
];
