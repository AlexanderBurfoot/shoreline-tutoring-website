/**
 * Business: the nature of business and management.
 */
import type { StudyEntry } from '../types';

export const businessNatureEntries: StudyEntry[] = [
    {
        id: 'bus-influences',
        subject: 'business-studies',
        question: 'What influences a business?',
        aliases: ['influences on business', 'external influences', 'internal influences', 'pestle'],
        answer:
            'External influences include economic conditions, financial markets, geography, social attitudes, legal ' +
            'and political settings, institutions, technology and competition. ' +
            'Internal ones include products, location, resources, management and business culture. ' +
            'Stakeholders are everyone affected, from shareholders to the community.',
    },
    {
        id: 'bus-management-styles',
        subject: 'business-studies',
        question: 'What are the management styles?',
        aliases: ['management style', 'autocratic', 'democratic', 'participative', 'laissez faire'],
        answer:
            'Autocratic managers decide alone, which is fast and suits a crisis but can demotivate. ' +
            'Participative or democratic managers involve staff, which builds commitment and takes longer. ' +
            'Laissez-faire leaves decisions to the team, which works with experts and fails without them.',
    },
];
