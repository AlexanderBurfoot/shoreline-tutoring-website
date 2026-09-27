/**
 * Economics: fiscal, monetary and microeconomic policy.
 */
import type { StudyEntry } from '../types';

export const economicsPolicyEntries: StudyEntry[] = [
    {
        id: 'econ-fiscal-policy',
        subject: 'economics',
        question: 'What is fiscal policy?',
        aliases: ['fiscal policy', 'budget', 'deficit surplus', 'government spending'],
        answer:
            'Fiscal policy is the government using taxation and spending to influence the economy. ' +
            'An expansionary budget spends more or taxes less to lift demand; a contractionary one does the reverse. ' +
            'Automatic stabilisers, such as unemployment benefits, act without any new decision.',
    },
    {
        id: 'econ-monetary-policy',
        subject: 'economics',
        question: 'What is monetary policy?',
        aliases: ['monetary policy', 'reserve bank', 'interest rates'],
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
        aliases: ['microeconomic reform', 'deregulation', 'privatisation'],
        answer:
            'Policies aimed at how markets work rather than at overall demand: deregulation, privatisation, ' +
            'competition policy and tariff reduction. ' +
            'The goal is higher productivity and efficiency, though the adjustment can cost jobs in protected industries.',
    },
    {
        id: 'econ-automatic-stabilisers',
        subject: 'economics',
        question: 'What are automatic stabilisers?',
        aliases: ['automatic stabilisers', 'cyclical component of the budget', 'structural component'],
        answer:
            'Parts of the budget that move against the cycle without any decision: tax receipts fall and welfare ' +
            'payments rise in a downturn, cushioning demand. ' +
            'The cyclical component of the budget is this automatic movement; the structural component is what policy ' +
            'decisions caused.',
    },
    {
        id: 'econ-financing-a-deficit',
        subject: 'economics',
        question: 'How is a budget deficit financed?',
        aliases: ['financing a deficit', 'selling government bonds', 'borrowing from overseas'],
        answer:
            'Mainly by selling government bonds to the private sector, domestically or overseas, which adds to public ' +
            'debt and interest costs. ' +
            'Selling assets is a one-off alternative. ' +
            'Financing by simply creating money is avoided because of its inflationary effect.',
    },
    {
        id: 'econ-public-debt',
        subject: 'economics',
        question: 'Is government debt a problem?',
        aliases: ['public debt', 'debt to gdp ratio', 'intergenerational equity'],
        answer:
            'What matters is the ratio to GDP and what the borrowing bought. ' +
            'Debt that funds infrastructure raises future capacity and can pay for itself; debt that funds recurrent ' +
            'spending does not. ' +
            'Australian public debt is moderate by developed country standards, but interest costs crowd out other ' +
            'spending.',
    },
    {
        id: 'econ-cash-rate',
        subject: 'economics',
        question: 'What is the cash rate and how does the RBA change it?',
        aliases: ['cash rate', 'open market operations', 'reserve bank board decision'],
        answer:
            'The cash rate is the interest rate on overnight loans between banks. ' +
            'The Reserve Bank sets a target and hits it by buying or selling government securities, which changes the ' +
            'cash banks hold. ' +
            'Every other interest rate in the economy is priced off it.',
    },
    {
        id: 'econ-transmission-mechanism',
        subject: 'economics',
        question: 'How does a change in interest rates affect the economy?',
        aliases: ['transmission mechanism', 'interest rates and spending', 'mortgage repayments and demand'],
        answer:
            'A higher cash rate raises lending rates, so mortgage repayments rise and disposable income falls, ' +
            'borrowing for investment becomes dearer, asset prices soften and the currency tends to appreciate. ' +
            'Demand slows, then inflation, but the full effect takes twelve to eighteen months.',
    },
    {
        id: 'econ-inflation-targeting',
        subject: 'economics',
        question: 'What is inflation targeting?',
        aliases: ['inflation targeting', 'two to three per cent', 'medium term target'],
        answer:
            'The Reserve Bank aims to keep consumer price inflation between 2 and 3% on average over the cycle. ' +
            'Averaging over time rather than each quarter allows it to look through one-off shocks and to weigh ' +
            'employment alongside prices.',
    },
    {
        id: 'econ-policy-mix',
        subject: 'economics',
        question: 'What is the policy mix?',
        aliases: ['policy mix', 'complementary policies', 'fiscal and monetary together'],
        answer:
            'How fiscal, monetary and microeconomic policies are combined. ' +
            'They work best pulling the same way: expansionary fiscal policy while rates are being raised sets the two ' +
            'against each other. ' +
            'Microeconomic reform raises capacity, which lets demand grow without inflation.',
    },
    {
        id: 'econ-policy-lags',
        subject: 'economics',
        question: 'Why do economic policies take time to work?',
        aliases: ['policy lags', 'implementation lag', 'impact lag'],
        answer:
            'Data arrive late, so the problem is recognised late; decisions take time, and a budget runs annually; then ' +
            'the effect spreads through spending slowly. ' +
            'Monetary policy acts faster than fiscal policy to implement but still takes a year or more to bite.',
    },
    {
        id: 'econ-labour-market-policy',
        subject: 'economics',
        question: 'What are labour market policies?',
        aliases: ['labour market policy', 'skills and training policy', 'participation policy'],
        answer:
            'Measures aimed at the supply side of employment: training and apprenticeships, job search assistance, ' +
            'migration settings for skill shortages, childcare to raise participation, and the wage and conditions ' +
            'framework itself. ' +
            'They target structural unemployment, which demand policy cannot reach.',
    },
    {
        id: 'econ-environmental-policy',
        subject: 'economics',
        question: 'What policies address environmental problems?',
        aliases: ['environmental policy', 'market based instruments', 'regulation of pollution'],
        answer:
            'Market based instruments put a price on the externality through taxes or tradeable permits, letting firms ' +
            'find the cheapest abatement. ' +
            'Regulation bans or caps directly. ' +
            'Subsidies and targets steer investment. ' +
            'Most schemes combine them, since each works best for different problems.',
    },
    {
        id: 'econ-competition-policy',
        subject: 'economics',
        question: 'What is competition policy?',
        aliases: ['competition policy', 'accc'],
        answer:
            'Rules and reforms that keep markets contestable: the ACCC policing anti-competitive conduct and mergers, ' +
            'deregulation of protected industries, and privatisation of public monopolies with a regulator attached. ' +
            'The aim is lower prices and stronger incentives to improve.',
    },
    {
        id: 'econ-tax-reform',
        subject: 'economics',
        question: 'What are the arguments in tax reform?',
        aliases: ['tax reform', 'broadening the base', 'efficiency versus equity in tax'],
        answer:
            'Efficiency favours broad bases and low rates on things that cannot easily move, such as consumption and ' +
            'land; equity favours progressive taxes on income and wealth. ' +
            'Simplicity favours fewer concessions. ' +
            'Reform usually trades one against another, which is why it is politically hard.',
    },
    {
        id: 'econ-limits-of-policy',
        subject: 'economics',
        question: 'What limits economic policy?',
        aliases: ['limits of policy', 'global constraints', 'political constraints on policy'],
        answer:
            'Global conditions set much of the outcome for a small open economy, since commodity prices and world ' +
            'interest rates are given. ' +
            'Add time lags, imperfect data, conflicting objectives, and the political cost of measures that hurt before ' +
            'they help.',
    },
    {
        id: 'econ-trade-diagram',
        subject: 'economics',
        question: 'How do I show the effect of a tariff on a diagram?',
        aliases: ['tariff diagram', 'effect of a tariff', 'domestic and world price'],
        answer:
            'Draw domestic supply and demand with the world price below equilibrium. A tariff raises the price paid, ' +
            'so domestic production rises, consumption falls, imports shrink, and the government collects revenue on ' +
            'the remaining imports while consumers pay more.',
    },
    {
        id: 'econ-subsidy-effects',
        subject: 'economics',
        question: 'What are the effects of a subsidy to producers?',
        aliases: ['production subsidy', 'effect of a subsidy', 'subsidy versus tariff'],
        answer:
            'It lowers producers costs, so domestic output rises and imports fall, but the cost falls on taxpayers ' +
            'rather than consumers, who keep paying the world price. That makes it less visible than a tariff and ' +
            'harder to remove.',
    },
    {
        id: 'econ-quota-effects',
        subject: 'economics',
        question: 'How does a quota differ from a tariff?',
        aliases: ['import quota', 'quota versus tariff', 'quantity restriction on imports'],
        answer:
            'A quota caps the quantity imported rather than raising its price, so the price rises through scarcity ' +
            'and the gain goes to whoever holds the import licence rather than to government revenue.',
    },
    {
        id: 'econ-dumping-and-response',
        subject: 'economics',
        question: 'What is dumping and how do countries respond?',
        aliases: ['dumping', 'anti dumping duty', 'selling below cost'],
        answer:
            'Selling exports below cost or below the home market price, which can destroy an industry that would ' +
            'otherwise be competitive. Countries respond with anti-dumping duties, which is one of the few forms of ' +
            'protection WTO rules permit.',
    },
    {
        id: 'econ-trade-agreements-types',
        subject: 'economics',
        question: 'What are the types of trade agreement?',
        aliases: ['bilateral agreement', 'multilateral agreement', 'regional trade bloc'],
        answer:
            'Bilateral between two countries, regional between a group such as ASEAN, and multilateral through the ' +
            'WTO. Bilateral deals are quicker to negotiate but create a web of different rules, which raises costs ' +
            'for exporters.',
    },
    {
        id: 'econ-australian-industry-structure',
        subject: 'economics',
        question: 'How has the structure of the Australian economy changed?',
        aliases: ['structural change in australia', 'decline of manufacturing', 'growth of services'],
        answer:
            'Manufacturing has shrunk as a share of output and employment, while services, mining and education ' +
            'exports have grown. Lower protection, technology and Asian demand drove it, and the adjustment fell ' +
            'unevenly on particular regions.',
    },
    {
        id: 'econ-mining-boom-effects',
        subject: 'economics',
        question: 'What did the mining boom do to the Australian economy?',
        aliases: ['mining boom', 'dutch disease'],
        answer:
            'It lifted the terms of trade, national income and the exchange rate. The high dollar squeezed ' +
            'manufacturing, tourism and education, producing a two-speed economy, and the later fall in prices ' +
            'required a second adjustment.',
    },
    {
        id: 'econ-housing-market-economics',
        subject: 'economics',
        question: 'Why are Australian house prices an economic issue?',
        aliases: ['house prices', 'housing affordability', 'housing and wealth inequality'],
        answer:
            'Housing is the largest asset for most households, so prices drive wealth inequality and consumer ' +
            'spending. Supply constraints, tax treatment and low interest rates all raised prices relative to income, ' +
            'which shifts wealth between generations.',
    },
    {
        id: 'econ-migration-economics',
        subject: 'economics',
        question: 'What are the economic effects of migration?',
        aliases: ['economic effects of migration', 'skilled migration', 'migration and wages'],
        answer:
            'It raises the labour force and aggregate demand, fills skill shortages, and lowers the average age of ' +
            'the population. It also adds pressure on housing and infrastructure, and effects on wages depend on ' +
            'whether migrants substitute for or complement local workers.',
    },
    {
        id: 'econ-infrastructure-investment',
        subject: 'economics',
        question: 'Why does infrastructure matter economically?',
        aliases: ['infrastructure investment', 'productivity and infrastructure', 'transport bottlenecks'],
        answer:
            'Transport, energy and communications reduce the cost of everything else, so bottlenecks limit ' +
            'productivity across the economy. Because the benefits are long term and widely spread, much of it is ' +
            'publicly funded.',
    },
    {
        id: 'econ-regional-differences',
        subject: 'economics',
        question: 'Why do economic outcomes differ between regions?',
        aliases: ['regional economic differences', 'rural and urban economies', 'regional unemployment'],
        answer:
            'Industry mix, distance from markets, access to services and education, and the mobility of labour. A ' +
            'region dependent on one industry suffers disproportionately when that industry declines, and labour does ' +
            'not move as freely as theory assumes.',
    },
    {
        id: 'econ-indigenous-economic-outcomes',
        subject: 'economics',
        question: 'What explains the gap in Indigenous economic outcomes?',
        aliases: ['indigenous economic outcomes', 'closing the gap economics', 'employment gap'],
        answer:
            'Lower employment, income, education completion and health outcomes, compounded by remoteness, ' +
            'discrimination and dispossession. Policy responses target education, employment programs and ' +
            'community-controlled service delivery.',
    },
    {
        id: 'econ-data-sources',
        subject: 'economics',
        question: 'Where does Australian economic data come from?',
        aliases: ['economic data sources', 'australian bureau of statistics', 'rba statistics'],
        answer:
            'The Australian Bureau of Statistics publishes the national accounts, CPI and labour force survey; the ' +
            'Reserve Bank publishes financial and monetary data; Treasury publishes the budget papers. Citing the ' +
            'source and period strengthens an answer.',
    },
    {
        id: 'econ-forecasting-limits',
        subject: 'economics',
        question: 'Why are economic forecasts often wrong?',
        aliases: ['economic forecasting', 'why forecasts fail', 'uncertainty in economics'],
        answer:
            'They assume relationships that shift, they cannot predict shocks, and expectations change behaviour in ' +
            'ways models capture poorly. Forecasts are used as a base case to plan against rather than as a ' +
            'prediction.',
    },
    {
        id: 'econ-essay-structure',
        subject: 'economics',
        question: 'How do I structure an economics essay?',
        aliases: ['economics essay structure', 'using diagrams in an essay', 'economics extended response'],
        answer:
            'Define the terms, state the position, then one idea per paragraph with a mechanism, a diagram or ' +
            'statistic, and a link back to the question. A labelled diagram that is referred to in the text earns ' +
            'marks; one left unexplained does not.',
    },
];
