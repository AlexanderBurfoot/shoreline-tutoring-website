/**
 * Business: marketing.
 */
import type { StudyEntry } from '../types';

export const businessMarketingEntries: StudyEntry[] = [
    {
        id: 'bus-marketing-mix',
        subject: 'business-studies',
        question: 'What is the marketing mix?',
        aliases: ['marketing mix', 'four ps', 'product price promotion place', 'market segmentation'],
        answer:
            'Product, price, promotion and place, chosen together to reach a target market. ' +
            'Pricing can be cost-plus, market-based or competition-based, and can skim or penetrate on launch. ' +
            'Segmentation divides a market so the mix can be aimed at one group.',
    },
    {
        id: 'bus-marketing-strategies',
        subject: 'business-studies',
        question: 'What are the marketing strategies?',
        aliases: ['marketing strategies', 'positioning', 'branding', 'product life cycle', 'e marketing', 'market research'],
        answer:
            'Segment the market, target a group and position the product in their minds. ' +
            'Strategies cover the product life cycle, branding, packaging, pricing methods, promotion mix and ' +
            'distribution channels. Market research informs each one, and ethics limits what is acceptable.',
    },
    {
        id: 'bus-global-business',
        subject: 'business-studies',
        question: 'What does global business involve?',
        aliases: ['global business', 'exporting', 'global sourcing', 'transnational corporation', 'exchange rate business'],
        answer:
            'Ways in include exporting, licensing, franchising, joint ventures and direct investment, each trading ' +
            'control against risk. ' +
            'Global businesses must manage exchange rate movements, differing regulations and cultural expectations, ' +
            'and decide whether to standardise or customise for each market.',
    },
];
