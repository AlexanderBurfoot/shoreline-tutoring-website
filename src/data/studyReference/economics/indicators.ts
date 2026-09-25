/**
 * Economics: measuring economic performance.
 */
import type { StudyEntry } from '../types';

export const economicsIndicatorsEntries: StudyEntry[] = [
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
