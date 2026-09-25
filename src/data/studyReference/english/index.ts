/** English, gathered from the topic banks. */
import { englishCriticalEntries } from './critical';
import { englishExamsEntries } from './exams';
import { englishLanguageEntries } from './language';
import { englishModulesEntries } from './modules';
import { englishPoetryEntries } from './poetry';
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
    ...englishLanguageEntries,
    ...englishPoetryEntries,
    ...englishExamsEntries,
    ...englishModulesEntries,
    ...englishSkillsEntries,
];
