/**
 * Business: human resources and employment relations.
 */
import type { StudyEntry } from '../types';

export const businessHumanResourcesEntries: StudyEntry[] = [
    {
        id: 'bus-human-resources',
        subject: 'business-studies',
        question: 'What does human resource management involve?',
        aliases: ['human resources', 'employment contract', 'workplace dispute', 'training'],
        answer:
            'The cycle is acquisition, development, maintenance and separation. ' +
            'It covers recruitment, training, pay and conditions, and resolving disputes through negotiation, ' +
            'mediation, grievance procedures or, if needed, the Fair Work Commission.',
    },
    {
        id: 'bus-employment-relations',
        subject: 'business-studies',
        question: 'How are employment relations managed?',
        aliases: ['employment relations', 'industrial relations', 'award', 'enterprise agreement'],
        answer:
            'Pay and conditions come from the National Employment Standards, awards and enterprise agreements. ' +
            'Disputes are resolved by negotiation, mediation, grievance procedures, conciliation or arbitration. ' +
            'Dismissal must follow a fair process, or it may be found unfair.',
    },
    {
        id: 'bus-hr-cycle',
        subject: 'business-studies',
        question: 'What are the stages of the human resource cycle?',
        aliases: ['human resource cycle', 'acquisition development maintenance separation', 'stages of employment'],
        answer:
            'Acquisition: planning, recruiting and selecting. ' +
            'Development: induction, training and performance management. ' +
            'Maintenance: pay, conditions, safety and communication. ' +
            'Separation: resignation, retirement, redundancy or dismissal. ' +
            'Each stage carries legal obligations.',
    },
    {
        id: 'bus-recruitment-selection',
        subject: 'business-studies',
        question: 'How does recruitment and selection work?',
        aliases: ['recruitment', 'selection process', 'internal versus external recruitment', 'job interview process'],
        answer:
            'Define the role, advertise internally or externally, shortlist against the selection criteria, interview ' +
            'and check references. ' +
            'Internal recruitment is cheaper and motivating but narrows the field; external brings new skills and ' +
            'perspective at higher cost and risk.',
    },
    {
        id: 'bus-employment-contracts',
        subject: 'business-studies',
        question: 'What types of employment arrangement are there?',
        aliases: ['full time part time casual', 'fixed term contract', 'independent contractor', 'gig work'],
        answer:
            'Full time and part time employees have ongoing entitlements including leave; casuals are paid a loading ' +
            'instead and have less security. ' +
            'Fixed term contracts end on a date, and independent contractors run their own business, which changes tax, ' +
            'insurance and entitlements.',
    },
    {
        id: 'bus-workplace-disputes',
        subject: 'business-studies',
        question: 'How are workplace disputes resolved?',
        aliases: ['negotiation and mediation', 'arbitration', 'industrial action', 'dispute resolution'],
        answer:
            'Usually by negotiation, then mediation or conciliation with an independent third party, and arbitration ' +
            'where a decision is imposed. ' +
            'Industrial action such as a strike is lawful only in limited protected circumstances. ' +
            'Grievance procedures agreed in advance settle most matters quietly.',
    },
    {
        id: 'bus-performance-management',
        subject: 'business-studies',
        question: 'How is employee performance managed?',
        aliases: ['performance appraisal', 'performance management', 'feedback and review', 'key performance indicators for staff'],
        answer:
            'Agree clear expectations, measure against them, give regular feedback rather than one annual verdict, and ' +
            'link outcomes to development or reward. ' +
            'Appraisal fails where the criteria are vague, the reviewer is biased, or nothing follows from the ' +
            'conversation.',
    },
    {
        id: 'bus-workplace-safety',
        subject: 'business-studies',
        question: 'What are a business obligations for work health and safety?',
        aliases: ['work health and safety obligations', 'duty of care', 'hazard identification at work', 'workers compensation'],
        answer:
            'A duty of care to provide a safe workplace: identify hazards, control risks, train and supervise, consult ' +
            'staff, and report incidents. ' +
            'Employees must follow procedures too. ' +
            'Workers compensation insurance is compulsory, and breaches carry substantial penalties.',
    },
    {
        id: 'bus-workplace-diversity',
        subject: 'business-studies',
        question: 'Why does workplace diversity matter?',
        aliases: ['workplace diversity', 'equal employment opportunity', 'anti discrimination in employment'],
        answer:
            'Anti-discrimination and equal opportunity law prohibits decisions based on sex, race, age, disability and ' +
            'other attributes. ' +
            'Beyond compliance, a workforce that reflects the customer base brings a wider range of ideas and widens ' +
            'the pool of talent available.',
    },
    {
        id: 'bus-separation',
        subject: 'business-studies',
        question: 'What is the difference between resignation, redundancy and dismissal?',
        aliases: ['redundancy', 'voluntary and involuntary separation', 'notice period', 'unfair dismissal'],
        answer:
            'Resignation and retirement are voluntary. ' +
            'Redundancy is involuntary but the role is no longer needed, and entitlements follow. ' +
            'Dismissal is for conduct or performance and requires a valid reason and a fair process, or the employee ' +
            'may claim unfair dismissal.',
    },
    {
        id: 'bus-outsourcing-hr',
        subject: 'business-studies',
        question: 'Why do businesses outsource human resource functions?',
        aliases: ['outsourcing human resources', 'payroll outsourcing', 'using a recruitment agency'],
        answer:
            'To buy expertise they cannot justify employing, especially payroll, recruitment and specialist legal ' +
            'advice, and to convert a fixed cost to a variable one. ' +
            'The risk is losing the internal knowledge of the workforce that good people management depends on.',
    },
    {
        id: 'bus-global-hr',
        subject: 'business-studies',
        question: 'What human resource issues arise in global business?',
        aliases: ['global human resources', 'expatriate staff', 'cultural differences at work', 'local employment law'],
        answer:
            'Whether to staff overseas operations with local employees or expatriates, differing employment law and ' +
            'union structures, language and cultural expectations of management, and pay relativities between ' +
            'countries. ' +
            'Ethical exposure follows the lowest standard in the chain.',
    },
    {
        id: 'bus-employee-participation',
        subject: 'business-studies',
        question: 'How do businesses involve employees in decisions?',
        aliases: ['employee participation', 'consultation with staff', 'team based decisions', 'suggestion schemes'],
        answer:
            'Through consultative committees, team decision making, suggestion schemes, employee share ownership and ' +
            'genuine consultation before change. ' +
            'Participation improves the decisions, since the people doing the work see problems first, and it reduces ' +
            'resistance to what follows.',
    },
];
