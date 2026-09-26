/**
 * Economics: terms and concepts named one at a time.
 *
 * The vocabulary a student is expected to use precisely in an extended response.
 */
import type { StudyEntry } from '../types';

export const economicsTermEntries: StudyEntry[] = [
    {
        id: 'econ-cartel',
        subject: 'economics',
        question: 'What is a cartel?',
        aliases: ['cartel', 'colluding firms', 'price fixing'],
        answer:
            'An agreement between competing firms to fix prices or divide a market, which lets them behave as a ' +
            'monopoly without merging. It is illegal in Australia under competition law, and because it is hidden the ' +
            'ACCC offers immunity to the first member to report it.',
    },
    {
        id: 'econ-price-discrimination',
        subject: 'economics',
        question: 'What is price discrimination?',
        aliases: ['price discrimination', 'charging different prices', 'student and concession pricing'],
        answer:
            'Charging different prices to different buyers for the same good, based on what each will pay. Student ' +
            'and off-peak fares are examples. It needs some market power and a way to separate the groups, and it ' +
            'raises revenue by capturing sales that one price would lose.',
    },
    {
        id: 'econ-economies-of-scope',
        subject: 'economics',
        question: 'What are economies of scope?',
        aliases: ['economies of scope', 'shared costs across products', 'scope versus scale'],
        answer:
            'Cost savings from producing several different products together, by sharing facilities, distribution or ' +
            'a brand. Economies of scale come from making more of one thing; economies of scope come from making more ' +
            'kinds of thing.',
    },
    {
        id: 'econ-diminishing-returns',
        subject: 'economics',
        question: 'What is the law of diminishing marginal returns?',
        aliases: ['diminishing marginal returns', 'adding more workers', 'why output growth slows'],
        answer:
            'Adding more of one input to a fixed quantity of others eventually raises output by less each time. A ' +
            'second worker in a small kitchen helps a lot, a fifth very little, because the fixed equipment is the ' +
            'binding constraint.',
    },
    {
        id: 'econ-black-market',
        subject: 'economics',
        question: 'What is a black market?',
        aliases: ['black market', 'underground market', 'illegal trade after price controls'],
        answer:
            'Trade outside the legal framework, often appearing when a price ceiling holds the official price below ' +
            'the equilibrium so demand exceeds supply. It reintroduces the higher price without the tax revenue, the ' +
            'consumer protections or the legal recourse.',
    },
    {
        id: 'econ-indirect-tax',
        subject: 'economics',
        question: 'What is the difference between direct and indirect tax?',
        aliases: ['indirect tax', 'direct tax', 'tax on spending versus income'],
        answer:
            'A direct tax is levied on income or wealth and paid by the person it falls on, such as income tax. An ' +
            'indirect tax is levied on a transaction and collected by the seller, such as the GST, and it can be ' +
            'passed on in the price.',
    },
    {
        id: 'econ-welfare-state',
        subject: 'economics',
        question: 'What is the welfare state?',
        aliases: ['welfare state', 'social safety net', 'transfer payments and services'],
        answer:
            'The system of transfer payments and public services that supports people through unemployment, illness, ' +
            'disability and old age. It redistributes income, stabilises demand in a downturn, and is the largest ' +
            'single area of federal spending.',
    },
    {
        id: 'econ-long-term-unemployment',
        subject: 'economics',
        question: 'What is long-term unemployment?',
        aliases: ['long term unemployment', 'unemployed for over a year', 'hysteresis'],
        answer:
            'Being out of work for a year or more, after which skills decay, networks weaken and employers ' +
            'discriminate against the gap in the record. It is why a recession leaves a lasting mark on employment ' +
            'even after growth resumes.',
    },
    {
        id: 'econ-capital-and-financial-account',
        subject: 'economics',
        question: 'What is the capital and financial account?',
        aliases: ['capital and financial account', 'financial account balance of payments', 'other side of the current account'],
        answer:
            'The part of the balance of payments recording the movement of capital and financial assets, including ' +
            'foreign investment and borrowing. Under a floating exchange rate it offsets the current account, which ' +
            'is why a current account deficit is matched by a financial account surplus.',
    },
    {
        id: 'econ-net-foreign-liabilities',
        subject: 'economics',
        question: 'What are net foreign liabilities?',
        aliases: ['net foreign liabilities', 'net foreign debt and equity', 'what australia owes overseas'],
        answer:
            'The total owed to the rest of the world less what is owed to Australia, covering both debt and foreign ' +
            'ownership of equity. Servicing them appears as the net primary income outflow, which is the largest ' +
            'component of the current account deficit.',
    },
    {
        id: 'econ-net-primary-income',
        subject: 'economics',
        question: 'What is the net primary income balance?',
        aliases: ['net primary income', 'income outflow', 'interest and dividends paid overseas'],
        answer:
            'The interest, profits and dividends paid to foreign owners of Australian assets, less what Australians ' +
            'receive from assets abroad. It is persistently in deficit because Australia has drawn on foreign capital ' +
            'for a long time.',
    },
    {
        id: 'econ-forex-market',
        subject: 'economics',
        question: 'What is the foreign exchange market?',
        aliases: ['foreign exchange market', 'forex market', 'who buys and sells currency'],
        answer:
            'The market in which currencies are traded, largely by banks and institutions rather than by travellers. ' +
            'Demand for the Australian dollar comes from exports and from capital inflow, and the daily turnover is ' +
            'many times the value of trade itself.',
    },
    {
        id: 'econ-speculation',
        subject: 'economics',
        question: 'What role does speculation play in the exchange rate?',
        aliases: ['speculation', 'speculators in currency', 'short term capital flows'],
        answer:
            'Buying or selling a currency to profit from expected movements rather than to fund trade. It adds ' +
            'liquidity and can move a rate towards where fundamentals point, but it can also overshoot, which is why ' +
            'sharp movements often reverse.',
    },
    {
        id: 'econ-trade-weighted-index',
        subject: 'economics',
        question: 'What is the trade weighted index?',
        aliases: ['trade weighted index', 'currency against a basket'],
        answer:
            'A measure of the Australian dollar against a basket of currencies, each weighted by its share of ' +
            'Australian trade. It shows the overall movement, which a single pair such as the US dollar can ' +
            'misrepresent.',
    },
    {
        id: 'econ-absolute-advantage',
        subject: 'economics',
        question: 'What is absolute advantage?',
        aliases: ['absolute advantage', 'producing more with the same resources', 'absolute versus comparative advantage'],
        answer:
            'Producing more of a good than another country from the same resources. Comparative advantage is the ' +
            'stronger idea, because trade still benefits both even when one country has an absolute advantage in ' +
            'everything, provided their opportunity costs differ.',
    },
    {
        id: 'econ-transnational-corporation',
        subject: 'economics',
        question: 'What is a transnational corporation?',
        aliases: ['transnational corporation', 'multinational company', 'tnc'],
        answer:
            'A firm operating in several countries, with production, sales and often research spread between them. ' +
            'Their internal transfers make up a large share of world trade, and their scale gives them bargaining ' +
            'power with governments over tax and conditions.',
    },
    {
        id: 'econ-hdi',
        subject: 'economics',
        question: 'What is the Human Development Index?',
        aliases: ['human development index', 'hdi', 'measuring development beyond income'],
        answer:
            'A composite measure combining income per capita, life expectancy and education into a single figure ' +
            'between 0 and 1. It captures development that GDP alone misses, though as one number it still conceals ' +
            'inequality within a country.',
    },
    {
        id: 'econ-tragedy-of-the-commons',
        subject: 'economics',
        question: 'What is the tragedy of the commons?',
        aliases: ['tragedy of the commons', 'overuse of a shared resource', 'common property problem'],
        answer:
            'A shared resource with no ownership is overused, because each user gains the whole benefit of taking ' +
            'more while the cost is spread across everyone. Fisheries and the atmosphere are the standard examples, ' +
            'and the answers are quotas, pricing or enforceable ownership.',
    },
    {
        id: 'econ-competition-policy-national',
        subject: 'economics',
        question: 'What was National Competition Policy?',
        aliases: ['national competition policy', 'competitive neutrality', 'opening protected industries'],
        answer:
            'A coordinated reform program from the 1990s opening previously protected or publicly run industries to ' +
            'competition, including electricity, telecommunications and transport. It aimed to lift productivity, and ' +
            'its effects are still the standard case study in microeconomic reform.',
    },
    {
        id: 'econ-trade-diversion',
        subject: 'economics',
        question: 'What is trade diversion?',
        aliases: ['trade diversion', 'trade creation', 'effect of a trade agreement on third countries'],
        answer:
            'When a preferential agreement shifts trade away from a cheaper outside producer towards a partner inside ' +
            'the agreement. Trade creation adds new trade and raises welfare; diversion merely moves it, which is why ' +
            'bilateral deals are not automatically beneficial.',
    },
    {
        id: 'econ-resource-allocation',
        subject: 'economics',
        question: 'What does resource allocation mean?',
        aliases: ['resource allocation', 'allocating scarce resources', 'who decides what is produced'],
        answer:
            'How an economy decides what to produce, how, and for whom. Markets allocate through prices, governments ' +
            'through direction and spending, and every real economy mixes the two, which is what the study of ' +
            'economics is ultimately about.',
    },
    {
        id: 'econ-sunk-cost',
        subject: 'economics',
        question: 'What is a sunk cost?',
        aliases: ['sunk cost', 'sunk cost fallacy', 'money already spent'],
        answer:
            'Money already spent that cannot be recovered. Because it cannot be changed, it should not influence the ' +
            'next decision, yet it routinely does, which is the sunk cost fallacy: continuing a failing project ' +
            'because of what it has already consumed.',
    },
    {
        id: 'econ-reading-indicator-table',
        subject: 'economics',
        question: 'How do I read a table of economic indicators?',
        aliases: ['reading an economic indicator table', 'interpreting economic data', 'table of statistics economics'],
        answer:
            'Check the period and the units first, then read across for one indicator over time and down for the same ' +
            'period across indicators. The useful observation is usually a divergence, such as growth rising while ' +
            'employment does not.',
    },
];
