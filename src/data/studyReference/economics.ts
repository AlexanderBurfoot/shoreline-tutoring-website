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
    {
        id: 'econ-business-cycle',
        subject: 'economics',
        question: 'What is the business cycle?',
        aliases: ['business cycle', 'boom and bust', 'recession recovery', 'aggregate demand', 'output gap'],
        answer:
            'The swing of economic activity around its long-run trend: expansion, peak, contraction, trough. ' +
            'Aggregate demand is C + I + G + (X − M). ' +
            'Governments use fiscal and monetary policy to smooth the cycle rather than to remove it.',
    },
    {
        id: 'econ-multiplier',
        subject: 'economics',
        question: 'What is the multiplier effect?',
        aliases: ['multiplier', 'marginal propensity to consume', 'injection multiplier', 'mpc mps'],
        answer:
            'A new injection is spent, and part of that spending becomes someone else\u2019s income, which is spent ' +
            'again. The multiplier is 1/(1 − MPC), or 1/MPS. ' +
            'The more of each dollar people spend rather than save, the larger the final effect on output.',
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
        id: 'econ-exchange-rates',
        subject: 'economics',
        question: 'What determines the exchange rate?',
        aliases: ['exchange rate', 'appreciation depreciation', 'floating exchange rate', 'currency demand', 'twi'],
        answer:
            'Under a float, the rate is set by demand for and supply of the currency, driven by trade, interest rate ' +
            'differences, commodity prices and expectations. ' +
            'Appreciation makes imports cheaper and exports dearer; depreciation does the reverse.',
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
        id: 'econ-microeconomic-reform',
        subject: 'economics',
        question: 'What is microeconomic reform?',
        aliases: ['microeconomic reform', 'deregulation', 'privatisation', 'competition policy', 'productivity'],
        answer:
            'Policies aimed at how markets work rather than at overall demand: deregulation, privatisation, ' +
            'competition policy and tariff reduction. ' +
            'The goal is higher productivity and efficiency, though the adjustment can cost jobs in protected industries.',
    },
    {
        id: 'econ-government-intervention',
        subject: 'economics',
        question: 'Why do governments intervene in markets?',
        aliases: ['market failure', 'public goods', 'externalities', 'merit goods', 'monopoly regulation'],
        answer:
            'To correct market failure: public goods nobody would supply privately, externalities the price ignores, ' +
            'merit goods that are under-consumed, and market power that lets a firm raise prices. ' +
            'Tools include taxes, subsidies, regulation and direct provision.',
    },
    {
        id: 'econ-australia-trade',
        subject: 'economics',
        question: 'What does Australia trade, and with whom?',
        aliases: ['australias trade', 'trade patterns', 'terms of trade', 'commodity exports', 'free trade agreements'],
        answer:
            'Australia exports mostly commodities, such as iron ore, coal and gas, plus services including education ' +
            'and tourism, and trades most with Asia. ' +
            'The terms of trade is export prices over import prices, and a rise lifts national income.',
    },
    {
        id: 'econ-living-standards',
        subject: 'economics',
        question: 'How are living standards measured?',
        aliases: ['living standards', 'material and non material', 'hdi', 'gdp limitations', 'wellbeing'],
        answer:
            'Material living standards depend on income and consumption; non-material ones cover health, environment ' +
            'and leisure. ' +
            'GDP per capita misses both distribution and unpaid work, so measures such as the Human Development Index ' +
            'add life expectancy and education.',
    },
    {
        id: 'econ-economic-objectives',
        subject: 'economics',
        question: 'What are the government\u2019s economic objectives, and how do they conflict?',
        aliases: ['economic objectives', 'policy conflict', 'phillips curve', 'growth and inflation tradeoff'],
        answer:
            'Sustainable growth, low inflation, full employment, external stability, fair distribution and ' +
            'environmental sustainability. ' +
            'They conflict: growth that lowers unemployment can raise inflation and imports, which is why policy is ' +
            'a balancing act rather than a formula.',
    },
];
