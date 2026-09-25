/**
 * Economics: markets, prices and market structures.
 */
import type { StudyEntry } from '../types';

export const economicsMarketsEntries: StudyEntry[] = [
    {
        id: 'econ-supply-demand',
        subject: 'economics',
        question: 'How does the price mechanism work?',
        aliases: ['supply and demand', 'price mechanism', 'equilibrium price', 'shift vs movement', 'market forces'],
        answer:
            'Demand falls as price rises and supply rises with it, so the market settles where the curves cross. ' +
            'A price change moves you along a curve; a change in anything else, such as income or input costs, ' +
            'shifts the whole curve.',
    },
    {
        id: 'econ-elasticity',
        subject: 'economics',
        question: 'What is elasticity?',
        aliases: ['elasticity', 'price elasticity of demand', 'elastic inelastic', 'income elasticity'],
        answer:
            'Elasticity measures how much quantity responds to a change in price: the percentage change in quantity ' +
            'divided by the percentage change in price. Greater than one is elastic, less than one inelastic. ' +
            'Necessities and goods with few substitutes are inelastic, which is why they can be taxed heavily.',
    },
    {
        id: 'econ-opportunity-cost',
        subject: 'economics',
        question: 'What is opportunity cost?',
        aliases: ['opportunity cost', 'scarcity', 'economic problem', 'production possibility frontier', 'trade off'],
        answer:
            'The value of the next best alternative given up when a choice is made. ' +
            'It exists because resources are scarce and wants are unlimited, which is the economic problem. ' +
            'A production possibility frontier shows it graphically: producing more of one good means less of the ' +
            'other.',
    },
    {
        id: 'econ-price-controls',
        subject: 'economics',
        question: 'What happens with a price ceiling or floor?',
        aliases: ['price ceiling', 'price floor', 'rent control', 'minimum price', 'shortage surplus'],
        answer:
            'A price ceiling set below equilibrium, such as rent control, creates a shortage and often a queue or a ' +
            'black market. ' +
            'A price floor set above it, such as a minimum wage, creates a surplus, which in labour markets means ' +
            'unemployment among the least experienced.',
    },
    {
        id: 'econ-labour-market',
        subject: 'economics',
        question: 'How does the labour market work?',
        aliases: ['labour market', 'wage determination', 'derived demand', 'trade unions', 'minimum wage', 'enterprise bargaining'],
        answer:
            'Demand for labour is derived from demand for what it produces. ' +
            'Wages are set by awards, enterprise agreements or individual contracts, with the Fair Work Commission ' +
            'setting the minimum. Productivity growth is what allows real wages to rise without inflation.',
    },
    {
        id: 'econ-financial-markets',
        subject: 'economics',
        question: 'What do financial markets do?',
        aliases: ['financial markets', 'share market', 'bond market', 'financial intermediaries', 'apra asic'],
        answer:
            'They channel savings to borrowers. Primary markets issue new securities; secondary markets trade ' +
            'existing ones. ' +
            'Regulation is shared: the Reserve Bank for stability and monetary policy, APRA for institutions, and ' +
            'ASIC for market conduct.',
    },
    {
        id: 'econ-government-intervention',
        subject: 'economics',
        question: 'Why do governments intervene in markets?',
        aliases: ['merit goods', 'monopoly regulation'],
        answer:
            'To correct market failure: public goods nobody would supply privately, externalities the price ignores, ' +
            'merit goods that are under-consumed, and market power that lets a firm raise prices. ' +
            'Tools include taxes, subsidies, regulation and direct provision.',
    },
];
