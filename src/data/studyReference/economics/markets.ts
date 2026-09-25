/**
 * Economics: markets, prices and market structures.
 */
import type { StudyEntry } from '../types';

export const economicsMarketsEntries: StudyEntry[] = [
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
        aliases: ['elasticity', 'price elasticity of demand', 'elastic inelastic'],
        answer:
            'Elasticity measures how much quantity responds to a change in price: the percentage change in quantity ' +
            'divided by the percentage change in price. Greater than one is elastic, less than one inelastic. ' +
            'Necessities and goods with few substitutes are inelastic, which is why they can be taxed heavily.',
    },
    {
        id: 'econ-opportunity-cost',
        subject: 'economics',
        question: 'What is opportunity cost?',
        aliases: ['opportunity cost', 'trade off'],
        answer:
            'The value of the next best alternative given up when a choice is made. ' +
            'It exists because resources are scarce and wants are unlimited, which is the economic problem. ' +
            'A production possibility frontier shows it graphically: producing more of one good means less of the ' +
            'other.',
    },
    {
        id: 'econ-price-controls',
        subject: 'economics',
        question: 'What happens with a price ceiling or floor?',
        aliases: ['price ceiling', 'price floor', 'rent control', 'minimum price', 'shortage surplus'],
        answer:
            'A price ceiling set below equilibrium, such as rent control, creates a shortage and often a queue or a ' +
            'black market. ' +
            'A price floor set above it, such as a minimum wage, creates a surplus, which in labour markets means ' +
            'unemployment among the least experienced.',
    },
    {
        id: 'econ-labour-market',
        subject: 'economics',
        question: 'How does the labour market work?',
        aliases: ['labour market', 'derived demand', 'trade unions', 'enterprise bargaining'],
        answer:
            'Demand for labour is derived from demand for what it produces. ' +
            'Wages are set by awards, enterprise agreements or individual contracts, with the Fair Work Commission ' +
            'setting the minimum. Productivity growth is what allows real wages to rise without inflation.',
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
        id: 'econ-government-intervention',
        subject: 'economics',
        question: 'Why do governments intervene in markets?',
        aliases: ['merit goods', 'monopoly regulation'],
        answer:
            'To correct market failure: public goods nobody would supply privately, externalities the price ignores, ' +
            'merit goods that are under-consumed, and market power that lets a firm raise prices. ' +
            'Tools include taxes, subsidies, regulation and direct provision.',
    },
    {
        id: 'econ-scarcity',
        subject: 'economics',
        question: 'What is the economic problem?',
        aliases: ['scarcity', 'unlimited wants limited resources', 'economic problem'],
        answer:
            'Wants are unlimited but resources are not, so every society must decide what to produce, how to produce it ' +
            'and who receives it. ' +
            'Every choice therefore has a cost in the alternative given up, which is why economics is described as the ' +
            'study of choice under scarcity.',
    },
    {
        id: 'econ-production-possibility',
        subject: 'economics',
        question: 'What is a production possibility frontier?',
        aliases: ['production possibility frontier', 'ppf', 'points inside the curve'],
        answer:
            'A curve showing the maximum combinations of two goods an economy can produce with its current resources ' +
            'and technology. ' +
            'Points on it are efficient, points inside show unemployed resources, and points outside are unattainable ' +
            'until the economy grows and the curve shifts outward.',
    },
    {
        id: 'econ-factors-of-production',
        subject: 'economics',
        question: 'What are the factors of production?',
        aliases: ['factors of production', 'land labour capital enterprise', 'resources of an economy'],
        answer:
            'Land, meaning all natural resources; labour, the human effort available; capital, the produced goods used ' +
            'to make other goods; and enterprise, which organises the others and takes the risk. ' +
            'Each earns a return: rent, wages, interest and profit.',
    },
    {
        id: 'econ-consumer-sovereignty',
        subject: 'economics',
        question: 'What is consumer sovereignty?',
        aliases: ['consumer sovereignty', 'consumers direct production', 'spending as a vote'],
        answer:
            'The idea that consumer spending decides what gets produced, since firms chase the goods people buy. ' +
            'It is limited in practice by advertising, brand loyalty, limited information and market power, all of ' +
            'which shape preferences rather than simply serving them.',
    },
    {
        id: 'econ-equilibrium-change',
        subject: 'economics',
        question: 'How do I show a change in equilibrium on a diagram?',
        aliases: ['shifting a curve', 'new equilibrium', 'movement along versus a shift'],
        answer:
            'Decide first whether the cause changes price, which moves you along the curve, or changes something else, ' +
            'which shifts the whole curve. ' +
            'Shift one curve only, label it D1 or S1, mark the new intersection, then state the direction of change in ' +
            'both price and quantity.',
    },
    {
        id: 'econ-elasticity-calculation',
        subject: 'economics',
        question: 'How do I calculate price elasticity of demand?',
        aliases: ['elasticity formula', 'percentage change in quantity over price', 'elasticity value meaning'],
        answer:
            'Divide the percentage change in quantity demanded by the percentage change in price, and ignore the sign. ' +
            'Greater than one is elastic, less than one inelastic, exactly one unit elastic. ' +
            'Revenue rises with a price cut only when demand is elastic.',
    },
    {
        id: 'econ-income-cross-elasticity',
        subject: 'economics',
        question: 'What are income and cross elasticity of demand?',
        aliases: ['income elasticity', 'cross elasticity', 'inferior good'],
        answer:
            'Income elasticity measures how demand responds to income: positive for normal goods, negative for ' +
            'inferior ones, and above one for luxuries. ' +
            'Cross elasticity measures response to another price: positive for substitutes, negative for complements.',
    },
    {
        id: 'econ-supply-elasticity',
        subject: 'economics',
        question: 'What determines the elasticity of supply?',
        aliases: ['elasticity of supply', 'time to adjust production', 'spare capacity'],
        answer:
            'Mainly time and capacity. ' +
            'Supply is inelastic when production takes a long time, capacity is already full, or inputs are hard to ' +
            'obtain, which is why farm output cannot respond within a season but manufacturing often can within weeks.',
    },
    {
        id: 'econ-costs-of-production',
        subject: 'economics',
        question: 'What are fixed, variable and marginal costs?',
        aliases: ['fixed cost', 'variable cost', 'total cost'],
        answer:
            'Fixed costs do not change with output, such as rent. ' +
            'Variable costs rise with output, such as materials. ' +
            'Total cost is the sum, and marginal cost is the extra cost of one more unit, which is the figure a firm ' +
            'compares with price when deciding whether to produce it.',
    },
    {
        id: 'econ-economies-of-scale',
        subject: 'economics',
        question: 'What are economies of scale?',
        aliases: ['economies of scale', 'falling average cost', 'diseconomies of scale'],
        answer:
            'Cost advantages that come with size: spreading fixed costs, buying in bulk, specialised labour and ' +
            'equipment. ' +
            'Average cost falls as output rises until the firm becomes hard to coordinate, at which point ' +
            'diseconomies set in and average cost turns back up.',
    },
    {
        id: 'econ-perfect-competition',
        subject: 'economics',
        question: 'What is perfect competition?',
        aliases: ['perfect competition', 'price taker', 'many small firms'],
        answer:
            'Many small firms selling an identical product, with free entry and full information, so no firm can ' +
            'influence the price and each is a price taker. ' +
            'It is a benchmark rather than a description: it shows the efficiency real markets are compared against.',
    },
    {
        id: 'econ-monopoly',
        subject: 'economics',
        question: 'What is a monopoly and why is it a problem?',
        aliases: ['monopoly', 'price maker', 'barriers to entry', 'natural monopoly'],
        answer:
            'One firm supplies the whole market and sets the price, protected by barriers to entry. ' +
            'Output is lower and price higher than under competition, so consumers lose. ' +
            'A natural monopoly, such as a rail network, is cheaper as one firm, so it is regulated rather than split.',
    },
    {
        id: 'econ-oligopoly',
        subject: 'economics',
        question: 'What is an oligopoly?',
        aliases: ['oligopoly', 'few large firms', 'non price competition', 'collusion'],
        answer:
            'A market dominated by a few large firms, each watching the others, so prices tend to be sticky and ' +
            'competition runs through advertising, loyalty schemes and product differences. ' +
            'Australian banking, groceries and airlines are the usual examples.',
    },
    {
        id: 'econ-wage-determination',
        subject: 'economics',
        question: 'How are wages determined in Australia?',
        aliases: ['wage determination', 'award wage', 'enterprise agreement', 'minimum wage'],
        answer:
            'Through a mix of the national minimum wage and modern awards set by the Fair Work Commission, enterprise ' +
            'agreements bargained at the workplace, and individual common law contracts above those floors. ' +
            'Most employees are covered by an agreement or an award rather than negotiating alone.',
    },
    {
        id: 'econ-unions',
        subject: 'economics',
        question: 'What role do unions and employer associations play?',
        aliases: ['trade union', 'employer association', 'collective bargaining', 'fair work commission'],
        answer:
            'Unions bargain collectively for wages and conditions, which gives employees more power than bargaining ' +
            'alone; employer associations do the same for firms. ' +
            'Union membership has fallen a long way since the 1980s, shifting bargaining towards the enterprise level.',
    },
    {
        id: 'econ-participation-rate',
        subject: 'economics',
        question: 'What is the participation rate?',
        aliases: ['participation rate', 'labour force definition', 'discouraged workers'],
        answer:
            'The labour force as a percentage of the working age population, where the labour force is everyone ' +
            'employed plus everyone actively looking. ' +
            'It rises when conditions look good and falls when discouraged job seekers stop searching, which also ' +
            'lowers measured unemployment.',
    },
    {
        id: 'econ-superannuation',
        subject: 'economics',
        question: 'Why does superannuation matter to the economy?',
        aliases: ['superannuation', 'retirement savings', 'national pool of savings'],
        answer:
            'Compulsory contributions build a very large pool of savings, which funds investment domestically and ' +
            'abroad and reduces reliance on foreign capital. ' +
            'It also eases the budget pressure of an ageing population by reducing future pension dependence.',
    },
];
