/**
 * Economics reference, Years 11 and 12, gathered by topic.
 */
import { economicsGlobalEntries } from './globalEconomy';
import { economicsIndicatorsEntries } from './indicators';
import { economicsMarketsEntries } from './markets';
import { economicsPolicyEntries } from './policy';
import type { StudyEntry } from '../types';

export const economicsEntries: StudyEntry[] = [
    ...economicsMarketsEntries,
    ...economicsIndicatorsEntries,
    ...economicsPolicyEntries,
    ...economicsGlobalEntries,
];
