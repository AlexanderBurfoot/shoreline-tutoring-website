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
];
