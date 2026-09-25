/**
 * Economics: trade, the exchange rate and the global economy.
 */
import type { StudyEntry } from '../types';

export const economicsGlobalEntries: StudyEntry[] = [
    {
        id: 'econ-trade',
        subject: 'economics',
        question: 'Why do countries trade, and what is comparative advantage?',
        aliases: ['free trade', 'comparative advantage', 'protection', 'globalisation'],
        answer:
            'A country has a comparative advantage where its opportunity cost of producing something is lowest, so ' +
            'both sides gain by specialising and trading. Protection, through tariffs, subsidies and quotas, shields ' +
            'local industry but raises prices and reduces efficiency.',
    },
    {
        id: 'econ-balance-of-payments',
        subject: 'economics',
        question: 'What is the balance of payments?',
        aliases: ['balance of payments', 'current account', 'capital account', 'current account deficit'],
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
        id: 'econ-market-types',
        subject: 'economics',
        question: 'What are the types of market structure?',
        aliases: ['market structures', 'perfect competition', 'monopoly', 'oligopoly', 'monopolistic competition'],
        answer:
            'Perfect competition has many small firms selling identical products and no price-setting power. ' +
            'Monopoly has one firm and substantial power. ' +
            'Oligopoly has a few large firms whose decisions depend on each other. ' +
            'Monopolistic competition has many firms with differentiated products.',
    },
    {
        id: 'econ-firm-behaviour',
        subject: 'economics',
        question: 'How does a firm decide what to produce?',
        aliases: ['profit maximisation', 'marginal cost', 'marginal revenue', 'economies of scale', 'firm output'],
        answer:
            'A firm maximises profit where marginal revenue equals marginal cost, since beyond that point each extra ' +
            'unit costs more than it earns. ' +
            'Economies of scale lower average cost as output grows, until diseconomies set in through complexity and ' +
            'coordination costs.',
    },
    {
        id: 'econ-demand-factors',
        subject: 'economics',
        question: 'What shifts the demand curve?',
        aliases: ['factors affecting demand', 'shift in demand', 'substitutes and complements', 'income effect', 'tastes'],
        answer:
            'Income, the price of substitutes and complements, tastes and preferences, population, and expectations ' +
            'about future prices. ' +
            'A price change moves along the curve; anything else shifts it. ' +
            'For a normal good, demand rises with income; for an inferior good, it falls.',
    },
    {
        id: 'econ-supply-factors',
        subject: 'economics',
        question: 'What shifts the supply curve?',
        aliases: ['factors affecting supply', 'shift in supply', 'input costs', 'technology supply', 'producer expectations'],
        answer:
            'Input costs, technology, the number of producers, the prices of related goods, taxes and subsidies, and ' +
            'expectations. ' +
            'Cheaper inputs or better technology shift supply right, so more is offered at every price, and the ' +
            'equilibrium price falls.',
    },
    {
        id: 'econ-taxation-types',
        subject: 'economics',
        question: 'What are progressive, regressive and proportional taxes?',
        aliases: ['progressive tax', 'regressive tax', 'proportional tax', 'direct and indirect tax', 'gst regressive'],
        answer:
            'A progressive tax takes a larger share as income rises, like income tax. ' +
            'A regressive tax takes a larger share from lower incomes, which is the criticism of the GST. ' +
            'A proportional tax takes the same share from everyone. ' +
            'Direct taxes fall on income, indirect ones on spending.',
    },
    {
        id: 'econ-unconventional-policy',
        subject: 'economics',
        question: 'What happens when interest rates cannot fall further?',
        aliases: ['quantitative easing', 'zero lower bound', 'unconventional monetary policy', 'liquidity trap'],
        answer:
            'Near zero, cutting the cash rate loses its power. ' +
            'Central banks then buy government bonds to lower longer-term rates and expand the money supply, which is ' +
            'quantitative easing, or give forward guidance about how long rates will stay low.',
    },
    {
        id: 'econ-protection-methods',
        subject: 'economics',
        question: 'What are the methods of protection?',
        aliases: ['tariff', 'quota', 'subsidy', 'local content rules', 'protection methods'],
        answer:
            'A tariff taxes imports, raising their price. ' +
            'A quota limits the quantity allowed in. ' +
            'A subsidy lowers local producers\u2019 costs. ' +
            'All three shift activity towards domestic producers at the cost of higher prices and less efficiency for ' +
            'consumers.',
    },
    {
        id: 'econ-globalisation-effects',
        subject: 'economics',
        question: 'What are the effects of globalisation?',
        aliases: ['globalisation effects', 'trade liberalisation', 'foreign investment', 'global supply chains', 'inequality globalisation'],
        answer:
            'Trade, investment, technology and labour move more freely, which raises efficiency and lowers prices, ' +
            'and has lifted many out of poverty. ' +
            'The costs fall unevenly: some industries and regions lose, inequality within countries can widen, and ' +
            'shocks transmit faster.',
    },
    {
        id: 'econ-development-measures',
        subject: 'economics',
        question: 'How is economic development different from growth?',
        aliases: ['economic development', 'growth vs development', 'developing economies', 'hdi measure', 'poverty'],
        answer:
            'Growth is an increase in output; development is a broader improvement in living standards, including ' +
            'health, education and equality. ' +
            'A country can grow without developing if the gains concentrate narrowly, which is why the Human ' +
            'Development Index is used alongside GDP.',
    },
    {
        id: 'econ-australia-economy',
        subject: 'economics',
        question: 'What are the main features of the Australian economy?',
        aliases: ['australian economy', 'commodity dependence', 'services sector', 'two speed economy', 'structural change'],
        answer:
            'A high-income, services-dominated economy that exports commodities and education, floats its currency, ' +
            'and runs an independent central bank. ' +
            'Structural change has moved employment from manufacturing to services, and commodity prices remain a ' +
            'major influence on national income.',
    },
    {
        id: 'econ-market-failure-examples',
        subject: 'economics',
        question: 'What are examples of market failure in Australia?',
        aliases: ['market failure examples', 'negative externality', 'public good example', 'natural monopoly', 'asymmetric information'],
        answer:
            'Pollution is a negative externality whose cost the price ignores. ' +
            'Defence and street lighting are public goods nobody would supply privately. ' +
            'Electricity networks are natural monopolies, so they are regulated. ' +
            'Health insurance suffers asymmetric information, which is why it is regulated too.',
    },
];
