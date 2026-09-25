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
        aliases: ['inflation', 'demand pull', 'cost push'],
        answer:
            'Inflation is a sustained rise in the general price level, measured by the Consumer Price Index. ' +
            'Demand-pull inflation comes from spending outrunning capacity; cost-push comes from rising input costs. ' +
            'The Reserve Bank targets 2 to 3 per cent on average over the cycle.',
    },
    {
        id: 'econ-unemployment',
        subject: 'economics',
        question: 'What are the types of unemployment?',
        aliases: ['unemployment', 'cyclical unemployment', 'structural unemployment'],
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
        aliases: ['economic objectives', 'policy conflict', 'growth and inflation tradeoff'],
        answer:
            'Sustainable growth, low inflation, full employment, external stability, fair distribution and ' +
            'environmental sustainability. ' +
            'They conflict: growth that lowers unemployment can raise inflation and imports, which is why policy is ' +
            'a balancing act rather than a formula.',
    },
    {
        id: 'econ-cpi',
        subject: 'economics',
        question: 'How is the CPI calculated?',
        aliases: ['cpi', 'basket of goods', 'weighted price index', 'consumer price index'],
        answer:
            'The Australian Bureau of Statistics prices a fixed basket of goods and services each quarter in the eight ' +
            'capital cities, weighted by how much households actually spend on each. ' +
            'The change in the total cost of that basket, expressed against a base year of 100, is the CPI.',
    },
    {
        id: 'econ-underlying-inflation',
        subject: 'economics',
        question: 'What is underlying inflation?',
        aliases: ['underlying inflation', 'headline inflation', 'trimmed mean', 'volatile items excluded'],
        answer:
            'Inflation with the most volatile and one-off items stripped out, so the Reserve Bank can see the ' +
            'persistent trend rather than a petrol price spike or a change in childcare subsidy. ' +
            'Headline inflation is the full basket, which is what households actually face.',
    },
    {
        id: 'econ-causes-of-inflation',
        subject: 'economics',
        question: 'What causes inflation?',
        aliases: ['demand pull inflation', 'cost push inflation', 'imported inflation', 'inflationary expectations'],
        answer:
            'Demand pull, where spending outruns the capacity to produce; cost push, where wages, energy or materials ' +
            'become dearer; imported inflation through a lower exchange rate; and expectations, where firms and workers ' +
            'build expected inflation into prices and wage claims.',
    },
    {
        id: 'econ-effects-of-inflation',
        subject: 'economics',
        question: 'What are the effects of inflation?',
        aliases: ['effects of inflation', 'eroding purchasing power', 'wage price spiral'],
        answer:
            'It erodes the value of money and of savings, hurting those on fixed incomes most, distorts investment ' +
            'towards assets rather than production, and weakens international competitiveness. ' +
            'If wages chase prices, a spiral develops that is far harder to stop than to start.',
    },
    {
        id: 'econ-deflation',
        subject: 'economics',
        question: 'Why is deflation a problem?',
        aliases: ['deflation', 'falling prices problem', 'deferring purchases'],
        answer:
            'When prices are expected to fall, households delay spending and firms delay investing, which weakens ' +
            'demand further. ' +
            'Debts also become harder to repay in real terms. ' +
            'That is why central banks target low positive inflation rather than zero.',
    },
    {
        id: 'econ-nominal-versus-real',
        subject: 'economics',
        question: 'What is the difference between nominal and real values?',
        aliases: ['nominal versus real', 'adjusting for inflation'],
        answer:
            'Nominal values are measured in the prices of the day; real values are adjusted for inflation so they can ' +
            'be compared over time. ' +
            'A 4% nominal wage rise with 3% inflation is a 1% real rise, which is the figure that matters for living ' +
            'standards.',
    },
    {
        id: 'econ-gdp-limitations',
        subject: 'economics',
        question: 'What are the limitations of GDP as a measure?',
        aliases: ['limitations of gdp', 'unpaid work not counted', 'gdp and wellbeing'],
        answer:
            'It counts market output only, so unpaid and voluntary work is invisible, and it counts environmental ' +
            'damage repair as production. ' +
            'It says nothing about distribution, leisure or health. ' +
            'GDP per capita is better for comparing countries, but still not a measure of wellbeing.',
    },
    {
        id: 'econ-measuring-unemployment',
        subject: 'economics',
        question: 'How is unemployment measured in Australia?',
        aliases: ['measuring unemployment', 'who counts as unemployed', 'underemployment', 'hidden unemployment'],
        answer:
            'From a monthly household survey: the unemployed are those without work who are available and actively ' +
            'looking, as a percentage of the labour force. ' +
            'One hour of paid work a week counts as employed, so underemployment and discouraged workers are not ' +
            'captured by the headline rate.',
    },
    {
        id: 'econ-full-employment',
        subject: 'economics',
        question: 'What is full employment and the NAIRU?',
        aliases: ['full employment', 'natural rate of unemployment', 'nairu'],
        answer:
            'Full employment does not mean zero unemployment, since frictional and structural unemployment remain. ' +
            'The NAIRU is the rate at which inflation is stable: pushing unemployment below it tends to accelerate ' +
            'inflation, which is why it anchors policy.',
    },
    {
        id: 'econ-costs-of-unemployment',
        subject: 'economics',
        question: 'What are the costs of unemployment?',
        aliases: ['costs of unemployment', 'lost output', 'social effects of unemployment'],
        answer:
            'Economically: output never produced, lost tax revenue, higher welfare spending, and skills that decay the ' +
            'longer someone is out of work. ' +
            'Socially: lower health, higher family stress and crime, and inherited disadvantage where unemployment is ' +
            'concentrated in particular regions.',
    },
    {
        id: 'econ-inflation-unemployment-tradeoff',
        subject: 'economics',
        question: 'Is there a trade-off between inflation and unemployment?',
        aliases: ['phillips curve', 'inflation unemployment trade off'],
        answer:
            'In the short run, yes: stimulating demand lowers unemployment but adds to inflation, which is the Phillips ' +
            'curve relationship. ' +
            'In the long run the relationship breaks down, since expectations adjust, so sustained low unemployment ' +
            'depends on productivity and skills rather than demand.',
    },
    {
        id: 'econ-sources-of-growth',
        subject: 'economics',
        question: 'What causes economic growth?',
        aliases: ['sources of growth', 'investment and growth', 'growth in the workforce'],
        answer:
            'More inputs or better use of them: a growing workforce, investment in capital, education and skills, new ' +
            'technology, and reforms that move resources to where they are most productive. ' +
            'In the long run productivity growth matters most, since the workforce cannot expand indefinitely.',
    },
    {
        id: 'econ-productivity',
        subject: 'economics',
        question: 'What is productivity and why does it matter?',
        aliases: ['productivity', 'output per worker', 'why productivity matters'],
        answer:
            'Output per unit of input, usually per hour worked. ' +
            'It is the only sustainable source of rising real wages and living standards, because it lets an economy ' +
            'produce more without working longer. ' +
            'Australian productivity growth has slowed since the reforms of the 1990s.',
    },
    {
        id: 'econ-saving-investment',
        subject: 'economics',
        question: 'How are saving and investment linked?',
        aliases: ['saving and investment', 'national savings', 'savings as a leakage'],
        answer:
            'Saving is income not spent, which leaves the circular flow as a leakage; investment injects it back. ' +
            'Saving funds investment, so a country that saves less than it invests must borrow the difference from ' +
            'overseas, which is the root of the Australian current account deficit.',
    },
    {
        id: 'econ-poverty',
        subject: 'economics',
        question: 'How is poverty measured in Australia?',
        aliases: ['poverty line', 'relative poverty', 'absolute poverty'],
        answer:
            'Usually in relative terms, as households below a share of median income, commonly 50%. ' +
            'Absolute poverty measures a fixed subsistence standard and is more useful for developing economies. ' +
            'Relative measures rise when the median rises faster than the bottom.',
    },
];
