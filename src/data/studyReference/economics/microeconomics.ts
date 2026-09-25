/**
 * Economics: markets, firms, labour and finance in detail.
 *
 * Market structures, market failure, how wages are set and what financial
 * intermediaries do.
 */
import type { StudyEntry } from '../types';

export const economicsMicroEntries: StudyEntry[] = [
    {
        id: 'econ-market-economy-features',
        subject: 'economics',
        question: 'What are the features of a market economy?',
        aliases: ['market economy', 'price signals', 'private ownership and profit'],
        answer:
            'Private ownership, decisions guided by prices and the pursuit of profit, competition between producers, ' +
            'and consumer choice. Every real economy is mixed, since governments provide public goods and regulate ' +
            'where markets fail.',
    },
    {
        id: 'econ-command-and-mixed',
        subject: 'economics',
        question: 'How do market and planned economies differ?',
        aliases: ['planned economy', 'command economy', 'mixed economy'],
        answer:
            'A planned economy allocates resources by government direction rather than prices, which can pursue ' +
            'equity and stability but lacks the information and incentives prices provide. A mixed economy uses ' +
            'markets where they work and intervention where they do not.',
    },
    {
        id: 'econ-public-goods',
        subject: 'economics',
        question: 'What is a public good?',
        aliases: ['public good', 'non excludable', 'non rival good', 'free rider problem'],
        answer:
            'A good that is non-excludable and non-rival, such as street lighting or defence, so no one can be ' +
            'prevented from benefiting and one person use does not reduce another. Because of that, nobody will pay ' +
            'voluntarily, so government provides it.',
    },
    {
        id: 'econ-externalities',
        subject: 'economics',
        question: 'What is an externality?',
        aliases: ['externality', 'positive externality', 'social cost'],
        answer:
            'A cost or benefit falling on a third party rather than the buyer or seller, so the market price is ' +
            'wrong. Pollution is a negative externality and vaccination a positive one, which is why one is taxed and ' +
            'the other subsidised.',
    },
    {
        id: 'econ-merit-and-demerit-goods',
        subject: 'economics',
        question: 'What are merit and demerit goods?',
        aliases: ['merit good', 'demerit good', 'under consumed goods'],
        answer:
            'Merit goods such as education are under-consumed relative to their social benefit, so they are ' +
            'subsidised or provided. Demerit goods such as tobacco are over-consumed relative to their social cost, ' +
            'so they are taxed or restricted.',
    },
    {
        id: 'econ-price-mechanism-rationing',
        subject: 'economics',
        question: 'What functions does price serve in a market?',
        aliases: ['functions of price', 'rationing and signalling', 'incentive function of price'],
        answer:
            'It signals what consumers want, incentivises producers to supply it, and rations the scarce quantity to ' +
            'those willing to pay. Interfering with price interferes with all three at once, which is why price ' +
            'controls produce shortages or surpluses.',
    },
    {
        id: 'econ-shortage-and-surplus',
        subject: 'economics',
        question: 'What happens if price is not at equilibrium?',
        aliases: ['shortage', 'surplus', 'excess demand and supply'],
        answer:
            'Above equilibrium there is excess supply, so sellers cut prices or accumulate stock. Below it there is ' +
            'excess demand, so queues, waiting lists or unofficial markets appear until the price is allowed to rise.',
    },
    {
        id: 'econ-consumer-choice',
        subject: 'economics',
        question: 'How do consumers actually decide?',
        aliases: ['consumer decision making', 'utility', 'behavioural economics'],
        answer:
            'In theory by maximising satisfaction given income and prices. In practice habit, advertising, framing ' +
            'and limited information matter, which is what behavioural economics studies and why nudges can change ' +
            'behaviour without changing prices.',
    },
    {
        id: 'econ-income-and-substitution',
        subject: 'economics',
        question: 'Why does quantity demanded fall when price rises?',
        aliases: ['income effect', 'substitution effect', 'why demand slopes down'],
        answer:
            'Two reasons: the same income now buys less, and the good has become dear relative to substitutes, so ' +
            'buyers switch. The two together are why the demand curve slopes downward.',
    },
    {
        id: 'econ-firm-objectives',
        subject: 'economics',
        question: 'Do firms only maximise profit?',
        aliases: ['firm objectives', 'market share objective', 'satisficing'],
        answer:
            'Profit dominates, but firms also pursue growth, market share, survival, and increasingly social and ' +
            'environmental goals. Managers with separated ownership may also pursue their own interests, which is ' +
            'what corporate governance addresses.',
    },
    {
        id: 'econ-monopolistic-competition',
        subject: 'economics',
        question: 'What is monopolistic competition?',
        aliases: ['monopolistic competition', 'differentiated products', 'many firms with brands'],
        answer:
            'Many firms selling similar but differentiated products, such as cafes or hairdressers, each with a ' +
            'little pricing power from its brand and location. Entry is easy, so profits are competed away in the ' +
            'long run.',
    },
    {
        id: 'econ-barriers-to-entry-types',
        subject: 'economics',
        question: 'What are the barriers to entry?',
        aliases: ['barriers to entry', 'natural and artificial barriers', 'economies of scale as a barrier'],
        answer:
            'Large capital requirements, economies of scale, control of a resource or distribution, patents, brand ' +
            'loyalty, legal restrictions, and predatory pricing by incumbents. The higher they are, the more market ' +
            'power the existing firms keep.',
    },
    {
        id: 'econ-market-power-effects',
        subject: 'economics',
        question: 'What are the effects of market power?',
        aliases: ['effects of market power', 'higher prices lower output', 'consumer harm from concentration'],
        answer:
            'Higher prices, lower output, less choice and weaker incentives to innovate or improve service, with the ' +
            'gains going to the firm. Some concentration also brings scale efficiencies, which is why competition ' +
            'policy weighs both.',
    },
    {
        id: 'econ-labour-demand-supply',
        subject: 'economics',
        question: 'What determines the demand for and supply of labour?',
        aliases: ['demand for labour', 'supply of labour', 'derived demand'],
        answer:
            'Labour demand is derived from demand for the product and from productivity. Labour supply depends on the ' +
            'wage, population and participation, skills and training time, and the attractiveness of the work.',
    },
    {
        id: 'econ-wage-differentials',
        subject: 'economics',
        question: 'Why do wages differ between occupations?',
        aliases: ['wage differentials', 'why some jobs pay more', 'skill and scarcity in wages'],
        answer:
            'Skill and training required, the scarcity of those able to do it, productivity, working conditions, ' +
            'bargaining power and discrimination. A job may be socially essential and still poorly paid if the supply ' +
            'of workers is large.',
    },
    {
        id: 'econ-unemployment-types-detail',
        subject: 'economics',
        question: 'What causes each kind of joblessness?',
        aliases: ['cause of structural joblessness', 'cause of cyclical joblessness', 'frictional and seasonal causes'],
        answer:
            'Cyclical unemployment follows weak demand, structural unemployment follows a mismatch of skills or ' +
            'location, frictional unemployment is the time spent changing jobs, and seasonal unemployment follows the ' +
            'calendar. Each needs a different policy.',
    },
    {
        id: 'econ-labour-market-flexibility',
        subject: 'economics',
        question: 'What does labour market flexibility mean?',
        aliases: ['labour market flexibility', 'flexible wages and conditions', 'casualisation'],
        answer:
            'How readily wages, hours and conditions adjust to changing conditions. Greater flexibility helps firms ' +
            'respond and can preserve jobs in a downturn, but shifts risk onto employees through casual and insecure ' +
            'work.',
    },
    {
        id: 'econ-productivity-and-wages',
        subject: 'economics',
        question: 'Why are wages linked to productivity?',
        aliases: ['productivity and wages', 'real wage growth', 'why wages stagnate'],
        answer:
            'A firm can pay more from the same revenue only if output per hour rises, so sustained real wage growth ' +
            'requires productivity growth. When productivity growth slows, wage growth follows unless the share going ' +
            'to labour changes.',
    },
    {
        id: 'econ-financial-intermediation',
        subject: 'economics',
        question: 'What do financial intermediaries do?',
        aliases: ['financial intermediation', 'banks as intermediaries', 'borrowers and lenders'],
        answer:
            'They gather savings from many small lenders and lend to borrowers, transforming the size, term and risk ' +
            'of the funds and spreading risk across many loans. That function is why a banking failure damages the ' +
            'whole economy.',
    },
    {
        id: 'econ-share-market-role',
        subject: 'economics',
        question: 'What role does the share market play?',
        aliases: ['share market', 'primary and secondary market', 'raising equity capital'],
        answer:
            'The primary market raises new capital for firms by issuing shares; the secondary market lets investors ' +
            'trade existing ones, which provides the liquidity that makes buying them attractive in the first place.',
    },
];
