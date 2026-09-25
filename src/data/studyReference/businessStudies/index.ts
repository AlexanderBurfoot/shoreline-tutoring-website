/**
 * Business Studies and Commerce reference, gathered by topic.
 */
import { businessConsumerLegalEntries } from './consumerLegal';
import { businessFinanceEntries } from './finance';
import { businessHumanResourcesEntries } from './humanResources';
import { businessMarketingEntries } from './marketing';
import { businessNatureEntries } from './nature';
import { businessOperationsEntries } from './operations';
import type { StudyEntry } from '../types';

export const businessEntries: StudyEntry[] = [
    ...businessNatureEntries,
    ...businessMarketingEntries,
    ...businessFinanceEntries,
    ...businessOperationsEntries,
    ...businessHumanResourcesEntries,
    ...businessConsumerLegalEntries,
];
