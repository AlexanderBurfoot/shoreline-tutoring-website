/**
 * Economics reference, Years 11 and 12.
 *
 * The models, measures and policy tools students are asked to define, explain
 * and apply to the Australian economy.
 */
import type { StudyEntry } from './types';

export const economicsEntries: StudyEntry[] = [
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
        id: 'econ-circular-flow',
        subject: 'economics',
        question: 'What is the circular flow of income?',
        aliases: ['circular flow', 'leakages injections', 'five sector model', 'equilibrium economy'],
        answer:
            'Income flows between households, firms, the financial sector, government and overseas. ' +
            'Savings, taxation and imports are leakages; investment, government spending and exports are injections. ' +
            'The economy is in equilibrium when total leakages equal total injections.',
    },
    {
        id: 'econ-gdp',
        subject: 'economics',
        question: 'What is GDP and how is economic growth measured?',
        aliases: ['gdp', 'economic growth', 'real gdp', 'gdp per capita', 'recession definition'],
        answer:
            'GDP is the total value of final goods and services produced in a year. ' +
            'Real GDP removes inflation, and GDP per capita divides by population to show living standards. ' +
            'A technical recession is two consecutive quarters of falling real GDP.',
    },
    {
        id: 'econ-inflation',
        subject: 'economics',
        question: 'What is inflation and how is it measured?',
        aliases: ['inflation', 'cpi', 'consumer price index', 'demand pull', 'cost push', 'deflation'],
        answer:
            'Inflation is a sustained rise in the general price level, measured by the Consumer Price Index. ' +
            'Demand-pull inflation comes from spending outrunning capacity; cost-push comes from rising input costs. ' +
            'The Reserve Bank targets 2 to 3 per cent on average over the cycle.',
    },
    {
        id: 'econ-unemployment',
        subject: 'economics',
        question: 'What are the types of unemployment?',
        aliases: ['unemployment', 'cyclical unemployment', 'structural unemployment', 'participation rate', 'nairu'],
        answer:
            'Cyclical unemployment follows the business cycle, structural comes from a mismatch of skills, and ' +
            'frictional is people between jobs. The unemployment rate counts those without work who are actively ' +
            'looking, as a share of the labour force, so discouraged workers are left out.',
    },
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
        id: 'econ-trade',
        subject: 'economics',
        question: 'Why do countries trade, and what is comparative advantage?',
        aliases: ['free trade', 'comparative advantage', 'protection', 'tariff', 'globalisation', 'terms of trade'],
        answer:
            'A country has a comparative advantage where its opportunity cost of producing something is lowest, so ' +
            'both sides gain by specialising and trading. Protection, through tariffs, subsidies and quotas, shields ' +
            'local industry but raises prices and reduces efficiency.',
    },
    {
        id: 'econ-balance-of-payments',
        subject: 'economics',
        question: 'What is the balance of payments?',
        aliases: ['balance of payments', 'current account', 'capital account', 'current account deficit', 'exchange rate'],
        answer:
            'It records all transactions with the rest of the world. The current account covers goods, services, ' +
            'income and transfers; the capital and financial account covers investment flows. ' +
            'The two offset each other, so a current account deficit is financed by a financial account surplus.',
    },
    {
        id: 'econ-income-distribution',
        subject: 'economics',
        question: 'How is inequality measured?',
        aliases: ['income distribution', 'lorenz curve', 'gini coefficient', 'inequality', 'poverty line'],
        answer:
            'The Lorenz curve plots the share of income against the share of households; the further it bows from ' +
            'the line of equality, the more unequal the distribution. ' +
            'The Gini coefficient summarises that in one number, from 0 for perfect equality to 1 for perfect inequality.',
    },
    {
        id: 'econ-environment',
        subject: 'economics',
        question: 'What is ecologically sustainable development?',
        aliases: ['sustainability economics', 'externalities', 'market failure', 'public goods', 'carbon pricing'],
        answer:
            'Development that meets present needs without preventing future generations meeting theirs. ' +
            'Pollution is a negative externality: a cost borne by others and not priced by the market, which is a ' +
            'market failure. Governments respond with taxes, permits or regulation.',
    },
];
