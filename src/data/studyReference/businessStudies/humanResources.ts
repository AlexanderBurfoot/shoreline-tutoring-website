/**
 * Business: human resources and employment relations.
 */
import type { StudyEntry } from '../types';

export const businessHumanResourcesEntries: StudyEntry[] = [
    {
        id: 'bus-human-resources',
        subject: 'business-studies',
        question: 'What does human resource management involve?',
        aliases: ['human resources', 'recruitment', 'employment contract', 'workplace dispute', 'training'],
        answer:
            'The cycle is acquisition, development, maintenance and separation. ' +
            'It covers recruitment, training, pay and conditions, and resolving disputes through negotiation, ' +
            'mediation, grievance procedures or, if needed, the Fair Work Commission.',
    },
    {
        id: 'bus-employment-relations',
        subject: 'business-studies',
        question: 'How are employment relations managed?',
        aliases: ['employment relations', 'industrial relations', 'award', 'enterprise agreement', 'dispute resolution', 'unfair dismissal'],
        answer:
            'Pay and conditions come from the National Employment Standards, awards and enterprise agreements. ' +
            'Disputes are resolved by negotiation, mediation, grievance procedures, conciliation or arbitration. ' +
            'Dismissal must follow a fair process, or it may be found unfair.',
    },
];
