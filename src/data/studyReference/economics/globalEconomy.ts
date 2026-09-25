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
        aliases: ['balance of payments', 'current account', 'capital account'],
        answer:
            'It records all transactions with the rest of the world. The current account covers goods, services, ' +
            'income and transfers; the capital and financial account covers investment flows. ' +
            'The two offset each other, so a current account deficit is financed by a financial account surplus.',
    },
    {
        id: 'econ-income-distribution',
        subject: 'economics',
        question: 'How is inequality measured?',
        aliases: ['income distribution', 'lorenz curve', 'gini coefficient', 'inequality'],
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
        aliases: ['exchange rate', 'appreciation depreciation', 'currency demand', 'twi'],
        answer:
            'Under a float, the rate is set by demand for and supply of the currency, driven by trade, interest rate ' +
            'differences, commodity prices and expectations. ' +
            'Appreciation makes imports cheaper and exports dearer; depreciation does the reverse.',
    },
    {
        id: 'econ-australia-trade',
        subject: 'economics',
        question: 'What does Australia trade, and with whom?',
        aliases: ['australias trade', 'trade patterns', 'commodity exports', 'free trade agreements'],
        answer:
            'Australia exports mostly commodities, such as iron ore, coal and gas, plus services including education ' +
            'and tourism, and trades most with Asia. ' +
            'The terms of trade is export prices over import prices, and a rise lifts national income.',
    },
    {
        id: 'econ-market-types',
        subject: 'economics',
        question: 'What are the types of market structure?',
        aliases: ['market structures', 'types of market', 'degrees of competition'],
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
        aliases: ['profit maximisation', 'marginal cost', 'marginal revenue', 'firm output'],
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
        aliases: ['factors affecting demand', 'shift in demand', 'substitutes and complements', 'tastes'],
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
        aliases: ['zero lower bound', 'unconventional monetary policy', 'liquidity trap'],
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
        aliases: ['globalisation effects', 'global supply chains', 'inequality globalisation'],
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
        aliases: ['market failure examples', 'negative externality', 'public good example', 'asymmetric information'],
        answer:
            'Pollution is a negative externality whose cost the price ignores. ' +
            'Defence and street lighting are public goods nobody would supply privately. ' +
            'Electricity networks are natural monopolies, so they are regulated. ' +
            'Health insurance suffers asymmetric information, which is why it is regulated too.',
    },
    {
        id: 'econ-measuring-globalisation',
        subject: 'economics',
        question: 'How is globalisation measured?',
        aliases: ['indicators of globalisation', 'trade as a share of gdp', 'transnational corporations'],
        answer:
            'By trade volumes and trade as a share of world output, financial flows and foreign investment, the size ' +
            'and reach of transnational corporations, technology transfer, and labour migration. ' +
            'Financial flows have grown far faster than trade in goods.',
    },
    {
        id: 'econ-trade-liberalisation',
        subject: 'economics',
        question: 'What is trade liberalisation?',
        aliases: ['trade liberalisation', 'free trade agreement', 'world trade organisation', 'tariff reduction'],
        answer:
            'Reducing barriers to trade, through multilateral rounds under the World Trade Organisation, regional ' +
            'blocs, or bilateral agreements. ' +
            'Australia cut protection sharply from the 1970s, which lowered prices and forced industries to become ' +
            'competitive or shrink.',
    },
    {
        id: 'econ-appreciation-effects',
        subject: 'economics',
        question: 'What are the effects of an appreciation of the dollar?',
        aliases: ['appreciation', 'depreciation', 'exchange rate and exporters'],
        answer:
            'A stronger dollar makes imports cheaper, which lowers inflation and helps consumers, but makes exports ' +
            'dearer abroad, squeezing exporters and tourism. ' +
            'A depreciation reverses both, improving competitiveness while adding to imported inflation.',
    },
    {
        id: 'econ-current-account-deficit',
        subject: 'economics',
        question: 'Why does Australia run a current account deficit?',
        aliases: ['current account deficit', 'savings investment gap', 'net foreign debt'],
        answer:
            'Because domestic saving has been below what the country wants to invest, so the shortfall is funded from ' +
            'overseas. ' +
            'Servicing that funding shows up as a net income deficit, which is the largest part of the current account ' +
            'deficit, rather than a trade shortfall.',
    },
    {
        id: 'econ-terms-of-trade',
        subject: 'economics',
        question: 'What are the terms of trade?',
        aliases: ['terms of trade', 'export prices to import prices', 'commodity boom'],
        answer:
            'An index of export prices divided by import prices. ' +
            'When it rises, the same volume of exports buys more imports, which raises national income without any ' +
            'extra production. ' +
            'Australia is unusually exposed to it because exports are concentrated in commodities.',
    },
    {
        id: 'econ-foreign-investment',
        subject: 'economics',
        question: 'What role does foreign investment play in Australia?',
        aliases: ['foreign investment', 'foreign direct investment', 'portfolio investment'],
        answer:
            'It fills the gap between national saving and investment, funding mines, infrastructure and housing. ' +
            'Direct investment brings management and technology with it and is long term; portfolio investment is ' +
            'financial and can leave quickly, which is why the mix matters.',
    },
    {
        id: 'econ-protection-arguments',
        subject: 'economics',
        question: 'What are the arguments for and against protection?',
        aliases: ['arguments for protection', 'infant industry', 'dumping', 'case for free trade'],
        answer:
            'For: protecting infant industries until they reach scale, defending against dumping, saving jobs during ' +
            'adjustment, and national security in essential goods. ' +
            'Against: higher prices, resources kept in industries that cannot compete, retaliation, and the loss of the ' +
            'gains from specialisation.',
    },
    {
        id: 'econ-globalisation-inequality',
        subject: 'economics',
        question: 'Has globalisation reduced inequality?',
        aliases: ['globalisation and inequality', 'convergence between countries', 'winners and losers'],
        answer:
            'Between countries, partly: hundreds of millions in East Asia moved out of poverty through export-led ' +
            'growth. ' +
            'Within countries it has often widened, since gains flow to capital and skilled labour while regions ' +
            'dependent on exposed industries fall behind.',
    },
    {
        id: 'econ-emerging-economies',
        subject: 'economics',
        question: 'What are emerging and developing economies?',
        aliases: ['emerging economy', 'developing economy', 'newly industrialised'],
        answer:
            'Emerging economies are industrialising fast and integrating into world markets, with rising incomes but ' +
            'weaker institutions than developed economies. ' +
            'Developing economies have low incomes and often depend on a few primary exports, which leaves them exposed ' +
            'to price swings.',
    },
    {
        id: 'econ-international-organisations',
        subject: 'economics',
        question: 'What do the IMF, World Bank and WTO do?',
        aliases: ['imf', 'world bank', 'role of the wto', 'international economic organisations'],
        answer:
            'The IMF lends to countries in balance of payments crisis and monitors stability, usually with conditions ' +
            'attached. ' +
            'The World Bank funds development projects. ' +
            'The WTO sets and enforces trade rules and hears disputes between members.',
    },
    {
        id: 'econ-china-trade',
        subject: 'economics',
        question: 'How important is China to the Australian economy?',
        aliases: ['china trade', 'iron ore exports', 'trade concentration risk'],
        answer:
            'It is by far the largest export market, taking roughly a third of exports, especially iron ore, coal, gas ' +
            'and education. ' +
            'That concentration lifted national income through the resources boom and leaves Australia exposed to ' +
            'Chinese growth and to political disputes.',
    },
    {
        id: 'econ-global-financial-crisis',
        subject: 'economics',
        question: 'What did the global financial crisis show?',
        aliases: ['global financial crisis', 'gfc', 'financial contagion', 'stimulus response'],
        answer:
            'That financial linkages transmit shocks faster than trade does, and that under-regulated lending can ' +
            'threaten the whole system. ' +
            'Australia avoided recession through rapid fiscal stimulus, sharp rate cuts, deposit guarantees and ' +
            'continued Chinese demand for resources.',
    },
    {
        id: 'econ-exchange-rate-systems',
        subject: 'economics',
        question: 'What are fixed, floating and managed exchange rates?',
        aliases: ['floating exchange rate', 'fixed exchange rate', 'managed float'],
        answer:
            'A floating rate is set by supply and demand in the foreign exchange market, which is the Australian ' +
            'system since 1983 and lets the currency absorb shocks. ' +
            'A fixed rate is pegged and defended by the central bank. ' +
            'A managed float floats but with intervention to smooth movements.',
    },
];
