/**
 * Business Studies: competing in a market and operating globally.
 *
 * Advantage, positioning, market entry, supply chains and operations practice.
 */
import type { StudyEntry } from '../types';

export const businessStrategyEntries: StudyEntry[] = [
    {
        id: 'bus-market-share-measurement',
        subject: 'business-studies',
        question: 'How is market share measured and why does it matter?',
        aliases: ['market share', 'measuring market share', 'share of sales'],
        answer:
            'Sales as a percentage of total industry sales, by value or volume. It matters because scale lowers unit ' +
            'costs and because share won from a competitor is harder for them to regain than growth in a new market.',
    },
    {
        id: 'bus-competitive-advantage',
        subject: 'business-studies',
        question: 'What gives a business a competitive advantage?',
        aliases: ['competitive advantage', 'cost leadership'],
        answer:
            'Either lower costs than rivals, or something customers value that rivals cannot easily copy, such as ' +
            'brand, location, expertise or service. An advantage that can be copied cheaply is a temporary one.',
    },
    {
        id: 'bus-pricing-and-elasticity',
        subject: 'business-studies',
        question: 'How does elasticity affect a pricing decision?',
        aliases: ['elasticity and pricing', 'raising price and revenue', 'price sensitive customers'],
        answer:
            'If demand is elastic, raising price lowers revenue, so competing on price is dangerous and ' +
            'differentiation matters more. If demand is inelastic, a price rise raises revenue, which is why ' +
            'essential and branded goods are priced differently.',
    },
    {
        id: 'bus-product-positioning',
        subject: 'business-studies',
        question: 'What is product positioning?',
        aliases: ['positioning', 'perceptual map', 'premium versus budget positioning'],
        answer:
            'The place a product holds in the customer mind relative to rivals, on the dimensions they care about. A ' +
            'perceptual map plots it, and repositioning is slow because it means changing a belief, not a label.',
    },
    {
        id: 'bus-marketing-plan',
        subject: 'business-studies',
        question: 'What goes into a marketing plan?',
        aliases: ['marketing plan', 'marketing objectives'],
        answer:
            'A situational analysis, the target market, measurable objectives, the strategies across the mix, the ' +
            'budget, and how results will be monitored. Objectives without a number and a date cannot be evaluated.',
    },
    {
        id: 'bus-market-share-vs-profit',
        subject: 'business-studies',
        question: 'Should a business chase market share or profit?',
        aliases: ['market share versus profit', 'discounting to win share', 'profitable growth'],
        answer:
            'Share won by discounting can be unprofitable and trains customers to wait for sales. Share is worth ' +
            'pursuing where scale lowers costs or where the customer relationship is long lived, and otherwise margin ' +
            'matters more.',
    },
    {
        id: 'bus-global-market-entry',
        subject: 'business-studies',
        question: 'How does a business enter an overseas market?',
        aliases: ['entering a global market', 'exporting versus licensing', 'joint venture entry'],
        answer:
            'Exporting is lowest risk and lowest control, licensing and franchising transfer the work to a local ' +
            'partner, a joint venture shares both, and direct investment gives full control at the highest risk and ' +
            'cost.',
    },
    {
        id: 'bus-supply-chain-risk',
        subject: 'business-studies',
        question: 'What are the risks in a global supply chain?',
        aliases: ['supply chain risk', 'single supplier risk', 'disruption to supply'],
        answer:
            'Dependence on one supplier or one country, long lead times that hide problems, currency movements, ' +
            'transport disruption, and the reputational exposure of a supplier labour practices. Holding more ' +
            'inventory and dual sourcing are the usual hedges.',
    },
    {
        id: 'bus-inventory-methods',
        subject: 'business-studies',
        question: 'What inventory approaches do businesses use?',
        aliases: ['inventory management methods', 'just in time versus just in case', 'holding costs of stock'],
        answer:
            'Just in time minimises holding costs but leaves no buffer for disruption. Just in case holds safety ' +
            'stock, which ties up cash but protects service. Most businesses now sit somewhere between the two after ' +
            'recent supply shocks.',
    },
    {
        id: 'bus-continuous-improvement',
        subject: 'business-studies',
        question: 'What is continuous improvement in practice?',
        aliases: ['kaizen', 'small incremental improvements', 'improvement suggestions from staff'],
        answer:
            'Many small changes proposed by the people doing the work, implemented and measured, rather than ' +
            'occasional large projects. It works only where staff are asked, are given time, and see their ' +
            'suggestions acted on.',
    },
    {
        id: 'bus-productivity-in-operations',
        subject: 'business-studies',
        question: 'How is productivity improved in operations?',
        aliases: ['improving productivity', 'output per worker in a business', 'process improvement'],
        answer:
            'Better equipment and technology, training, removing steps that add no value, reducing rework, and ' +
            'improving layout and scheduling. Pushing staff to work faster raises errors, which usually cancels the ' +
            'gain.',
    },
    {
        id: 'bus-technology-adoption-costs',
        subject: 'business-studies',
        question: 'What are the costs of adopting new technology?',
        aliases: ['cost of new technology', 'retraining staff', 'disruption during implementation'],
        answer:
            'The capital outlay, retraining, lost output during changeover, resistance from staff, and the risk that ' +
            'the system does not deliver what was promised. Phasing it in and running the old system in parallel ' +
            'reduce that risk.',
    },
    {
        id: 'bus-employee-relations-approaches',
        subject: 'business-studies',
        question: 'What is the difference between a cooperative and an adversarial approach?',
        aliases: ['cooperative employment relations', 'adversarial approach', 'partnership with employees'],
        answer:
            'A cooperative approach treats employees as partners, consults early and shares information, which suits ' +
            'workplaces needing flexibility and skill. An adversarial approach treats the relationship as a contest, ' +
            'which raises the cost of every change.',
    },
];
