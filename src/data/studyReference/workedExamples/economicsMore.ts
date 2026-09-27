/**
 * Worked examples: economics and business studies, second set.
 *
 * The calculations and stimulus readings both courses ask for, each solved with
 * the numbers shown and checked. Figures are illustrative rather than current,
 * so a student quoting a real statistic should take it from a recent source.
 * Written by hand and shown exactly as written.
 */
import type { StudyEntry } from '../types';

export const workedExampleEconomicsMoreEntries: StudyEntry[] = [
    {
        id: 'econ-example-nominal-to-real-gdp',
        subject: 'economics',
        question: 'Can you show me a worked example of converting nominal GDP to real GDP?',
        aliases: ['worked example real gdp', 'example of adjusting gdp for prices', 'nominal to real gdp example'],
        answer:
            'Nominal GDP is $2400 billion and the price index has risen from 100 to 120. Real GDP is the nominal figure ' +
            'divided by the index, times 100: 2400 ÷ 120 × 100 = $2000 billion. So output grew less than the headline ' +
            'figure suggests, because part of it was price rises.',
    },
    {
        id: 'econ-example-cpi-from-basket',
        subject: 'economics',
        question: 'Can you show me a worked example of calculating a price index?',
        aliases: ['worked example price index', 'example of building a cpi', 'index from a basket of goods example'],
        answer:
            'A basket cost $250 in the base year and $275 now. The index is 275 ÷ 250 × 100 = 110, so prices have risen ' +
            '10% since the base year. The index measures the change from the base, which is why the base year always ' +
            'reads exactly 100.',
    },
    {
        id: 'econ-example-inflation-between-years',
        subject: 'economics',
        question: 'Can you show me a worked example of inflation between two non-consecutive years?',
        aliases: ['worked example inflation over several years', 'example of price change across years', 'inflation from two index numbers example'],
        answer:
            'The index moves from 105 to 126 over three years. The total rise is 126 − 105 = 21, so 21 ÷ 105 × 100 = ' +
            '20% over the period. That is not 20% a year: the annual rate compounds, working out near 6.3% a year.',
    },
    {
        id: 'econ-example-unemployment-participation',
        subject: 'economics',
        question: 'Can you show me a worked example of the unemployment rate and participation rate together?',
        aliases: ['worked example unemployment and participation', 'example of labour force calculations', 'labour force rates example'],
        answer:
            'A population of working age is 1000, with 620 employed and 80 unemployed. The labour force is 620 + 80 = ' +
            '700, so participation is 700 ÷ 1000 × 100 = 70% and unemployment is 80 ÷ 700 × 100 = 11.4%. Unemployment ' +
            'is out of the labour force, not the population.',
    },
    {
        id: 'econ-example-hidden-unemployment',
        subject: 'economics',
        question: 'Can you show me a worked example of why unemployment can fall for the wrong reason?',
        aliases: ['worked example unemployment falling for the wrong reason', 'example of discouraged workers', 'hidden unemployment example'],
        answer:
            'Unemployed falls from 80 to 70 but the labour force falls from 700 to 680, because ten people stopped ' +
            'looking. The rate falls from 11.4% to 10.3%, yet no one gained a job. Check the participation rate ' +
            'whenever the unemployment rate improves.',
    },
    {
        id: 'econ-example-marginal-propensity',
        subject: 'economics',
        question: 'Can you show me a worked example of the marginal propensity to consume?',
        aliases: ['worked example marginal propensity to consume', 'example of mpc from income and spending', 'mpc calculation example'],
        answer:
            'Income rises by $500 and consumption rises by $400. The marginal propensity to consume is 400 ÷ 500 = 0.8, ' +
            'so the propensity to save is 0.2. The simple multiplier is then 1 ÷ 0.2 = 5, since the two propensities ' +
            'must add to one.',
    },
    {
        id: 'econ-example-multiplier-effect-on-gdp',
        subject: 'economics',
        question: 'Can you show me a worked example of the multiplier applied to government spending?',
        aliases: ['worked example multiplier applied to spending', 'example of the effect of government spending', 'multiplier on gdp example'],
        answer:
            'Government spending rises by $2 billion where the multiplier is 2.5. The eventual rise in national income ' +
            'is 2 × 2.5 = $5 billion. The effect takes time and assumes spare capacity, since at full capacity the ' +
            'extra demand raises prices rather than output.',
    },
    {
        id: 'econ-example-budget-balance',
        subject: 'economics',
        question: 'Can you show me a worked example of a budget balance as a share of GDP?',
        aliases: ['worked example budget balance share of gdp', 'example of a deficit as a percentage', 'deficit to gdp ratio example'],
        answer:
            'Revenue is $580 billion, spending $615 billion and GDP $2400 billion. The deficit is 615 − 580 = $35 ' +
            'billion, which is 35 ÷ 2400 × 100 = 1.5% of GDP. Expressing it as a share allows comparison across years ' +
            'and countries.',
    },
    {
        id: 'econ-example-public-debt-ratio',
        subject: 'economics',
        question: 'Can you show me a worked example of a debt to GDP ratio?',
        aliases: ['worked example debt to gdp ratio', 'example of government debt as a share of output', 'debt ratio example'],
        answer:
            'Debt is $960 billion and GDP is $2400 billion, so the ratio is 960 ÷ 2400 × 100 = 40%. The ratio can fall ' +
            'with no debt repaid at all if GDP grows faster than the debt, which is why growth is central to any debt ' +
            'argument.',
    },
    {
        id: 'econ-example-current-account',
        subject: 'economics',
        question: 'Can you show me a worked example of a current account balance?',
        aliases: ['worked example current account balance', 'example of adding the current account items', 'balance of payments calculation example'],
        answer:
            'Exports are $420 billion, imports $450 billion, net primary income −$40 billion and net secondary income ' +
            '$2 billion. The goods and services balance is 420 − 450 = −$30 billion, and adding the income items gives ' +
            '−30 − 40 + 2 = −$68 billion. Net income is often the larger part of the deficit.',
    },
    {
        id: 'econ-example-exchange-rate-effect',
        subject: 'economics',
        question: 'Can you show me a worked example of the effect of a currency depreciation?',
        aliases: ['worked example currency depreciation effect', 'example of a falling dollar on import prices', 'depreciation price example'],
        answer:
            'The dollar falls from 0.75 to 0.60 against the US dollar. An item priced at US$300 cost 300 ÷ 0.75 = $400 ' +
            'before and now costs 300 ÷ 0.60 = $500. Imports rise in price and exports become cheaper abroad, which is ' +
            'the channel by which depreciation shifts the trade balance.',
    },
    {
        id: 'econ-example-terms-of-trade-change',
        subject: 'economics',
        question: 'Can you show me a worked example of a change in the terms of trade?',
        aliases: ['worked example change in terms of trade', 'example of export and import price indexes', 'terms of trade movement example'],
        answer:
            'Export prices rise from 100 to 115 while import prices rise from 100 to 105. The terms of trade become ' +
            '115 ÷ 105 × 100 = 109.5, an improvement of 9.5%. The same volume of exports now buys more imports, which ' +
            'raises national income without producing anything extra.',
    },
    {
        id: 'econ-example-income-distribution-lorenz',
        subject: 'economics',
        question: 'Can you show me a worked example of reading income distribution data?',
        aliases: ['worked example income distribution data', 'example of quintile shares', 'reading a lorenz curve example'],
        answer:
            'The lowest quintile receives 7% of income and the highest 41%. Perfect equality would give each quintile ' +
            '20%, so the top group receives almost six times the bottom. A Lorenz curve further from the diagonal, and ' +
            'a Gini closer to 1, say the same thing.',
    },
    {
        id: 'econ-example-opportunity-cost-ppf',
        subject: 'economics',
        question: 'Can you show me a worked example of opportunity cost from a production possibility table?',
        aliases: ['worked example opportunity cost from a table', 'example of a production possibility frontier calculation', 'opportunity cost of one more unit example'],
        answer:
            'Moving from 10 tonnes of wheat and 40 of wool to 14 of wheat and 34 of wool gains 4 wheat and gives up 6 ' +
            'wool. So the opportunity cost of one tonne of wheat is 6 ÷ 4 = 1.5 tonnes of wool. Opportunity cost is a ' +
            'ratio of what is lost to what is gained.',
    },
    {
        id: 'econ-example-price-ceiling',
        subject: 'economics',
        question: 'Can you show me a worked example of a price ceiling?',
        aliases: ['worked example price ceiling', 'example of a maximum price and shortage', 'rent control example'],
        answer:
            'Equilibrium rent is $500 with 1000 dwellings traded. A ceiling of $400 raises quantity demanded to 1200 ' +
            'and cuts quantity supplied to 850, so the shortage is 1200 − 850 = 350 dwellings. A ceiling below ' +
            'equilibrium always creates a shortage; one above it changes nothing.',
    },
    {
        id: 'econ-example-tax-incidence',
        subject: 'economics',
        question: 'Can you show me a worked example of who bears a tax?',
        aliases: ['worked example tax incidence', 'example of who pays a tax', 'sharing a tax between buyer and seller example'],
        answer:
            'A $2 tax raises the price from $10 to $11.50. Buyers pay $1.50 more and sellers receive $9.50, so they ' +
            'absorb $0.50. Buyers bear the larger share because demand here is less elastic than supply, and the side ' +
            'less able to walk away pays more.',
    },
    {
        id: 'econ-example-subsidy-cost',
        subject: 'economics',
        question: 'Can you show me a worked example of the cost of a subsidy?',
        aliases: ['worked example cost of a subsidy', 'example of government spending on a subsidy', 'subsidy total cost example'],
        answer:
            'A $3 per unit subsidy raises the quantity traded from 4000 to 5000 units. The cost to government is the ' +
            'subsidy times the new quantity: 3 × 5000 = $15,000. Using the old quantity understates the cost, since the ' +
            'subsidy is paid on every unit now sold.',
    },
    {
        id: 'econ-example-real-wage-change',
        subject: 'economics',
        question: 'Can you show me a worked example of whether real wages rose?',
        aliases: ['worked example did real wages rise', 'example of nominal wage against inflation', 'real wage change example'],
        answer:
            'Nominal wages rise 3.0% while prices rise 4.2%. The real change is roughly 3.0 − 4.2 = −1.2%, so ' +
            'purchasing power fell despite the pay rise. Compare the two rates rather than the dollar figures, which is ' +
            'what makes a pay rise below inflation a real cut.',
    },
    {
        id: 'econ-example-elasticity-interpretation',
        subject: 'economics',
        question: 'Can you show me a worked example of interpreting an elasticity value?',
        aliases: ['worked example interpreting elasticity', 'example of what an elasticity number means', 'elastic or inelastic example'],
        answer:
            'A price rise of 10% cuts quantity demanded by 4%. Elasticity is 4 ÷ 10 = 0.4, which is below 1, so demand ' +
            'is inelastic and total revenue rises. Above 1 and revenue would fall, which is why the number decides the ' +
            'pricing advice.',
    },
    {
        id: 'econ-example-cross-elasticity',
        subject: 'economics',
        question: 'Can you show me a worked example of cross elasticity of demand?',
        aliases: ['worked example cross elasticity', 'example of substitutes and complements from data', 'cross price elasticity example'],
        answer:
            'Tea rises in price 10% and coffee demand rises 6%. Cross elasticity is 6 ÷ 10 = +0.6, and the positive ' +
            'sign says the goods are substitutes. A negative value would mean complements, so the sign matters more ' +
            'than the size here.',
    },
    {
        id: 'econ-example-income-elasticity',
        subject: 'economics',
        question: 'Can you show me a worked example of income elasticity of demand?',
        aliases: ['worked example income elasticity', 'example of a luxury or necessity from data', 'income elasticity calculation example'],
        answer:
            'Incomes rise 5% and demand for restaurant meals rises 9%. Income elasticity is 9 ÷ 5 = 1.8, above 1, so ' +
            'these are a luxury. A value between 0 and 1 marks a necessity, and a negative value an inferior good.',
    },
    {
        id: 'econ-example-economic-growth-per-capita',
        subject: 'economics',
        question: 'Can you show me a worked example of growth per person?',
        aliases: ['worked example growth per person', 'example of gdp growth against population growth', 'per capita growth example'],
        answer:
            'GDP grows 2.4% while population grows 1.6%. Growth per person is roughly 2.4 − 1.6 = 0.8%. Output rose ' +
            'meaningfully, but living standards improved far less, which is why per capita figures are used for welfare ' +
            'comparisons.',
    },
    {
        id: 'econ-example-reading-an-economic-graph',
        subject: 'economics',
        question: 'Can you show me a worked example of describing an economic trend from a graph?',
        aliases: ['worked example describing an economic trend', 'example of writing about a graph in economics', 'trend description example'],
        answer:
            'Unemployment falls from 6.2% to 4.0% over four years, then rises to 4.8%. Describe the direction, the ' +
            'size and the turning point: a sustained fall of 2.2 percentage points, then a reversal in the final year. ' +
            'Quote figures with units and name the turning point rather than listing every value.',
    },
    {
        id: 'bus-example-gross-and-net-profit',
        subject: 'business-studies',
        question: 'Can you show me a worked example of gross and net profit?',
        aliases: ['worked example gross and net profit', 'example of working down an income statement', 'gross profit then net profit example'],
        answer:
            'Sales are $800,000, cost of goods sold $480,000 and expenses $210,000. Gross profit is 800000 − 480000 = ' +
            '$320,000, and net profit is 320000 − 210000 = $110,000. Gross profit judges buying and pricing; net ' +
            'profit judges the running of the business.',
    },
    {
        id: 'bus-example-gross-profit-ratio',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a gross profit ratio?',
        aliases: ['worked example gross profit ratio', 'example of gross profit as a percentage of sales', 'gross profit margin example'],
        answer:
            'Gross profit is $320,000 on sales of $800,000, so the ratio is 320000 ÷ 800000 × 100 = 40%. A falling ' +
            'ratio points to rising supplier costs or discounting, and it is more informative than the dollar figure ' +
            'because it holds when sales change.',
    },
    {
        id: 'bus-example-net-profit-ratio',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a net profit ratio?',
        aliases: ['worked example net profit ratio', 'example of net profit as a percentage of sales', 'net profit margin example'],
        answer:
            'Net profit is $110,000 on sales of $800,000, so the ratio is 110000 ÷ 800000 × 100 = 13.75%. If the gross ' +
            'ratio held steady while this one fell, the problem is in expenses rather than in cost of goods sold.',
    },
    {
        id: 'bus-example-quick-ratio',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a liquid ratio?',
        aliases: ['worked example liquid ratio', 'example of the quick ratio', 'current assets without inventory example'],
        answer:
            'Current assets are $180,000 including $60,000 of inventory, and current liabilities are $100,000. The ' +
            'liquid ratio removes inventory: 180000 − 60000 = 120000, then 120000 ÷ 100000 = 1.2 to 1. It is the ' +
            'stricter test, because inventory may not sell quickly.',
    },
    {
        id: 'bus-example-gearing',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a gearing ratio?',
        aliases: ['worked example gearing ratio', 'example of debt to equity', 'gearing calculation example'],
        answer:
            'Debt is $360,000 and equity $240,000, so gearing is 360000 ÷ 240000 = 1.5 to 1, meaning $1.50 of debt for ' +
            'every dollar of owner funds. High gearing lifts returns when trading is good and threatens solvency when ' +
            'it is not.',
    },
    {
        id: 'bus-example-accounts-receivable-turnover',
        subject: 'business-studies',
        question: 'Can you show me a worked example of accounts receivable turnover?',
        aliases: ['worked example accounts receivable turnover', 'example of how long customers take to pay', 'debtors turnover example'],
        answer:
            'Credit sales are $600,000 and average receivables $50,000. Turnover is 600000 ÷ 50000 = 12 times a year, ' +
            'which is 365 ÷ 12 = 30 days to collect. Compare that with the credit terms offered: 30 days against terms ' +
            'of 14 days signals a collection problem.',
    },
    {
        id: 'bus-example-break-even-with-target',
        subject: 'business-studies',
        question: 'Can you show me a worked example of the sales needed for a target profit?',
        aliases: ['worked example sales for a target profit', 'example of break even plus profit', 'units needed for a profit example'],
        answer:
            'Fixed costs are $90,000, the price is $50 and the variable cost $30, so the contribution is $20 a unit. ' +
            'Break-even is 90000 ÷ 20 = 4500 units. For a $30,000 profit, add it to the fixed costs: 120000 ÷ 20 = ' +
            '6000 units.',
    },
    {
        id: 'bus-example-margin-of-safety',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a margin of safety?',
        aliases: ['worked example margin of safety', 'example of how far sales can fall', 'safety margin calculation example'],
        answer:
            'Break-even is 4500 units and current sales are 6000. The margin of safety is 6000 − 4500 = 1500 units, ' +
            'which is 1500 ÷ 6000 × 100 = 25% of sales. It says how far sales could fall before the business makes a ' +
            'loss.',
    },
    {
        id: 'bus-example-cash-flow-shortfall',
        subject: 'business-studies',
        question: 'Can you show me a worked example of spotting a cash shortfall?',
        aliases: ['worked example cash shortfall', 'example of reading a cash flow statement', 'negative cash balance example'],
        answer:
            'An opening balance of $12,000 with receipts of $40,000 and payments of $58,000 gives a closing balance of ' +
            '12000 + 40000 − 58000 = −$6000. The business is profitable on paper but cannot pay its bills this month, ' +
            'which is why cash flow is managed separately from profit.',
    },
    {
        id: 'bus-example-inventory-days',
        subject: 'business-studies',
        question: 'Can you show me a worked example of inventory days?',
        aliases: ['worked example inventory days', 'example of how long stock sits', 'turning inventory turnover into days example'],
        answer:
            'Cost of goods sold is $480,000 and average inventory $60,000. Turnover is 480000 ÷ 60000 = 8 times a year, ' +
            'so inventory sits 365 ÷ 8 = 46 days. Slower turnover ties up cash and raises the risk that stock becomes ' +
            'obsolete.',
    },
    {
        id: 'bus-example-return-on-assets',
        subject: 'business-studies',
        question: 'Can you show me a worked example of return on assets?',
        aliases: ['worked example return on assets', 'example of profit against total assets', 'return on assets calculation example'],
        answer:
            'Net profit is $110,000 and total assets $880,000, so the return is 110000 ÷ 880000 × 100 = 12.5%. It ' +
            'measures how hard the assets are working, which is why it is the fairer comparison between two businesses ' +
            'of different size.',
    },
    {
        id: 'bus-example-market-share-change',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a change in market share?',
        aliases: ['worked example change in market share', 'example of share falling while sales rise', 'market share calculation example'],
        answer:
            'Sales rise from $2.0m to $2.2m while the market grows from $20m to $25m. Share falls from 10% to 2.2 ÷ 25 ' +
            '× 100 = 8.8%. Growing sales in a faster growing market still means losing ground, which is the point of ' +
            'measuring share.',
    },
    {
        id: 'bus-example-markup-versus-margin',
        subject: 'business-studies',
        question: 'Can you show me a worked example of markup against margin?',
        aliases: ['worked example markup and margin', 'example of the difference between markup and margin', 'cost plus pricing example'],
        answer:
            'An item costs $40 and sells for $60. The markup on cost is 20 ÷ 40 × 100 = 50%, while the margin on the ' +
            'selling price is 20 ÷ 60 × 100 = 33.3%. The same dollar profit gives two different percentages, so state ' +
            'which base is being used.',
    },
    {
        id: 'bus-example-labour-turnover',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a staff turnover rate?',
        aliases: ['worked example staff turnover rate', 'example of labour turnover calculation', 'employees leaving rate example'],
        answer:
            'Eighteen staff leave during a year from an average workforce of 120. Turnover is 18 ÷ 120 × 100 = 15%. ' +
            'Judge it against the industry: 15% is high for skilled work and low for casual retail, so the figure ' +
            'alone proves nothing.',
    },
    {
        id: 'bus-example-absenteeism',
        subject: 'business-studies',
        question: 'Can you show me a worked example of an absenteeism rate?',
        aliases: ['worked example absenteeism rate', 'example of days lost calculation', 'absenteeism measurement example'],
        answer:
            'Across 50 staff over 220 working days there are 11,000 possible days, and 330 are lost to absence. The ' +
            'rate is 330 ÷ 11000 × 100 = 3%. A rising rate is often read as a symptom of morale or workload rather ' +
            'than of illness.',
    },
    {
        id: 'bus-example-productivity',
        subject: 'business-studies',
        question: 'Can you show me a worked example of measuring productivity?',
        aliases: ['worked example measuring productivity', 'example of output per worker', 'productivity calculation example'],
        answer:
            'Output rises from 9000 to 10,500 units while staff numbers rise from 30 to 32. Output per worker goes from ' +
            '9000 ÷ 30 = 300 to 10500 ÷ 32 = 328, a gain of about 9%. Rising output alone does not show rising ' +
            'productivity, since inputs rose too.',
    },
    {
        id: 'bus-example-depreciation-choice',
        subject: 'business-studies',
        question: 'Can you show me a worked example comparing two depreciation methods?',
        aliases: ['worked example comparing depreciation methods', 'example of straight line against reducing balance', 'depreciation method comparison example'],
        answer:
            'An asset costs $50,000 with a $5000 residual over 5 years. Straight line charges (50000 − 5000) ÷ 5 = ' +
            '$9000 a year. Reducing balance at 30% charges 50000 × 0.30 = $15,000 in year one, less thereafter. The ' +
            'choice shifts expense between years without changing the total.',
    },
];
