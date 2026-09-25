/**
 * Business Studies and Commerce reference, gathered by topic.
 */
import { businessConsumerLegalEntries } from './consumerLegal';
import { businessFinanceEntries } from './finance';
import { businessManagementEntries } from './management';
import { businessPeopleEntries } from './people';
import { businessReportingEntries } from './reporting';
import { businessStrategyEntries } from './strategy';
import { businessHumanResourcesEntries } from './humanResources';
import { businessMarketingEntries } from './marketing';
import { businessNatureEntries } from './nature';
import { businessOperationsEntries } from './operations';
import type { StudyEntry } from '../types';

export const businessEntries: StudyEntry[] = [
    ...businessNatureEntries,
    ...businessManagementEntries,
    ...businessStrategyEntries,
    ...businessMarketingEntries,
    ...businessFinanceEntries,
    ...businessOperationsEntries,
    ...businessHumanResourcesEntries,
    ...businessPeopleEntries,
    ...businessReportingEntries,
    ...businessConsumerLegalEntries,
];
