/** English, gathered from the topic banks. */
import { englishPrimaryEntries } from './primary';
import { englishTermEntries } from './terms';
import { englishFurtherTextTypeEntries } from './textTypesExtra';
import { englishCriticalEntries } from './critical';
import { englishExamsEntries } from './exams';
import { englishLanguageEntries } from './language';
import { englishModulesEntries } from './modules';
import { englishMovementEntries } from './movements';
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
    ...englishMovementEntries,
    ...englishExamsEntries,
    ...englishModulesEntries,
    ...englishSkillsEntries,
    ...englishTermEntries,
    ...englishFurtherTextTypeEntries,
    ...englishPrimaryEntries,
];
