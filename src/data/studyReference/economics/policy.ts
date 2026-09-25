/**
 * Economics: fiscal, monetary and microeconomic policy.
 */
import type { StudyEntry } from '../types';

export const economicsPolicyEntries: StudyEntry[] = [
    {
        id: 'econ-fiscal-policy',
        subject: 'economics',
        question: 'What is fiscal policy?',
        aliases: ['fiscal policy', 'budget', 'deficit surplus', 'automatic stabilisers', 'government spending'],
        answer:
            'Fiscal policy is the government using taxation and spending to influence the economy. ' +
            'An expansionary budget spends more or taxes less to lift demand; a contractionary one does the reverse. ' +
            'Automatic stabilisers, such as unemployment benefits, act without any new decision.',
    },
    {
        id: 'econ-monetary-policy',
        subject: 'economics',
        question: 'What is monetary policy?',
        aliases: ['monetary policy', 'cash rate', 'reserve bank', 'interest rates', 'transmission mechanism'],
        answer:
            'The Reserve Bank sets the cash rate to influence interest rates through the economy. ' +
            'Raising it slows borrowing and spending to curb inflation; cutting it does the opposite. ' +
            'It works with a lag, usually of six to eighteen months, through borrowing, asset prices and the exchange rate.',
    },
    {
        id: 'econ-budget-outcomes',
        subject: 'economics',
        question: 'What do a budget deficit and surplus mean?',
        aliases: ['budget deficit', 'budget surplus', 'government debt', 'structural deficit', 'cyclical deficit'],
        answer:
            'A deficit means spending exceeds revenue in a year, adding to debt; a surplus is the reverse. ' +
            'A cyclical deficit comes from a downturn, since revenue falls and welfare spending rises; a structural ' +
            'one remains even at full employment and signals a longer-term imbalance.',
    },
    {
        id: 'econ-crowding-out',
        subject: 'economics',
        question: 'What is crowding out?',
        aliases: ['crowding out', 'government borrowing effect', 'private investment', 'fiscal policy limits'],
        answer:
            'Heavy government borrowing can raise interest rates and absorb funds that would otherwise finance ' +
            'private investment, reducing the stimulus the spending was meant to provide. ' +
            'It matters most when the economy is near capacity, and least in a deep downturn.',
    },
    {
        id: 'econ-microeconomic-reform',
        subject: 'economics',
        question: 'What is microeconomic reform?',
        aliases: ['microeconomic reform', 'deregulation', 'privatisation', 'competition policy', 'productivity'],
        answer:
            'Policies aimed at how markets work rather than at overall demand: deregulation, privatisation, ' +
            'competition policy and tariff reduction. ' +
            'The goal is higher productivity and efficiency, though the adjustment can cost jobs in protected industries.',
    },
];
