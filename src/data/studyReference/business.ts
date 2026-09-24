/**
 * Business Studies reference, Years 9 to 12.
 *
 * The four business functions and the influences on them, plus the consumer,
 * financial and legal questions students bring from Commerce. Commerce is not
 * offered at the moment (see subjectData.ts), so those entries sit here and
 * point at Business Studies rather than at a page that is not published.
 */
import type { StudyEntry } from './types';

export const businessEntries: StudyEntry[] = [
    {
        id: 'bus-business-functions',
        subject: 'business-studies',
        question: 'What are the four key business functions?',
        aliases: ['key business functions', 'four functions of business', 'business functions', 'interdependence'],
        answer:
            'Operations turns inputs into outputs, marketing identifies and satisfies customer needs, finance manages ' +
            'the money, and human resources manages the people. ' +
            'They are interdependent: a marketing campaign that succeeds creates demands on operations and staffing.',
    },
    {
        id: 'bus-operations',
        subject: 'business-studies',
        question: 'What does the operations function involve?',
        aliases: ['operations management', 'transformation process', 'quality management', 'supply chain', 'outsourcing'],
        answer:
            'Operations is the transformation of inputs into outputs, with the four Vs of volume, variety, variation ' +
            'in demand and visibility. Strategies include supply chain management, outsourcing, technology and ' +
            'quality management through control, assurance and improvement.',
    },
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
        id: 'bus-finance-statements',
        subject: 'business-studies',
        question: 'What do the financial statements show?',
        aliases: ['balance sheet', 'income statement', 'cash flow statement', 'assets liabilities equity'],
        answer:
            'The balance sheet is a snapshot: assets equal liabilities plus owner\u2019s equity. ' +
            'The income statement shows revenue less expenses over a period, giving profit. ' +
            'The cash flow statement tracks money actually moving, which is why a profitable business can still fail.',
    },
    {
        id: 'bus-financial-ratios',
        subject: 'business-studies',
        question: 'What are the main financial ratios?',
        aliases: ['financial ratios', 'liquidity ratio', 'gearing', 'profitability ratio', 'current ratio'],
        answer:
            'Liquidity: current ratio = current assets / current liabilities. Gearing: debt to equity shows reliance ' +
            'on borrowing. Profitability: gross and net profit ratios, and return on equity. ' +
            'Efficiency: expense ratio and accounts receivable turnover.',
    },
    {
        id: 'bus-human-resources',
        subject: 'business-studies',
        question: 'What does human resource management involve?',
        aliases: ['human resources', 'recruitment', 'employment contract', 'workplace dispute', 'training'],
        answer:
            'The cycle is acquisition, development, maintenance and separation. ' +
            'It covers recruitment, training, pay and conditions, and resolving disputes through negotiation, ' +
            'mediation, grievance procedures or, if needed, the Fair Work Commission.',
    },
    {
        id: 'bus-business-lifecycle',
        subject: 'business-studies',
        question: 'What are the stages of the business life cycle?',
        aliases: ['business life cycle', 'establishment', 'growth stage', 'maturity', 'post maturity', 'voluntary administration'],
        answer:
            'Establishment, growth, maturity and post-maturity, where a business renews, steadies or declines. ' +
            'Each stage brings different challenges, from cash flow at the start to complacency at maturity. ' +
            'Ceasing operations may be voluntary or through liquidation.',
    },
    {
        id: 'bus-business-structures',
        subject: 'business-studies',
        question: 'What are the types of business structure?',
        aliases: ['sole trader', 'partnership', 'company', 'limited liability', 'business structure'],
        answer:
            'A sole trader is owned by one person with unlimited liability. A partnership shares ownership, usually ' +
            'two to twenty, also with unlimited liability. A company is a separate legal entity, so shareholders have ' +
            'limited liability, but it costs more to set up and report on.',
    },
    {
        id: 'com-consumer-rights',
        subject: 'business-studies',
        question: 'What are my consumer rights?',
        aliases: ['consumer rights', 'australian consumer law', 'refund', 'warranty', 'consumer guarantees'],
        answer:
            'Australian Consumer Law gives guarantees that goods are of acceptable quality, match their description ' +
            'and are fit for purpose. A major failure entitles you to a refund, replacement or repair at your choice; ' +
            'a minor one lets the business choose. A change of mind is not covered.',
    },
    {
        id: 'com-budgeting',
        subject: 'business-studies',
        question: 'How do I make a personal budget?',
        aliases: ['budget', 'income and expenses', 'fixed and variable costs', 'saving', 'financial planning'],
        answer:
            'List income, then expenses split into fixed, such as rent, and variable, such as food. ' +
            'Income less expenses is your surplus or deficit. ' +
            'Pay yourself first by setting savings aside before spending, and keep an emergency fund for surprises.',
    },
    {
        id: 'com-investment-options',
        subject: 'business-studies',
        question: 'What are the main investment options?',
        aliases: ['investing', 'shares', 'property investment', 'risk and return', 'superannuation', 'diversification'],
        answer:
            'Savings accounts are low risk and low return. Shares and property offer higher returns with more risk ' +
            'and, for property, less liquidity. Superannuation is long-term retirement saving with tax advantages. ' +
            'Diversifying spreads risk, since not everything falls at once.',
    },
    {
        id: 'com-legal-system',
        subject: 'business-studies',
        question: 'How does the Australian legal system work?',
        aliases: ['legal system', 'criminal vs civil', 'court hierarchy', 'statute law', 'common law'],
        answer:
            'Criminal law is the state prosecuting an offence, proved beyond reasonable doubt. Civil law resolves ' +
            'disputes between parties, decided on the balance of probabilities. ' +
            'Statute law is made by parliament; common law is made by judges through precedent.',
    },
    {
        id: 'com-employment',
        subject: 'business-studies',
        question: 'What should I know about my first job?',
        aliases: ['employment rights', 'award wage', 'casual vs part time', 'tax file number', 'payslip', 'superannuation guarantee'],
        answer:
            'Your pay rate comes from an award or agreement, and casual work pays a loading instead of leave. ' +
            'You need a tax file number, and your employer must pay superannuation on top of wages. ' +
            'A payslip should show hours, rate, tax withheld and super paid.',
    },
    {
        id: 'bus-nature-of-business',
        subject: 'business-studies',
        question: 'What are the types and sizes of business?',
        aliases: ['nature of business', 'small to medium enterprise', 'sme', 'industry sectors', 'business role'],
        answer:
            'Businesses are classified by size, by legal structure and by sector: primary extracts, secondary ' +
            'manufactures, tertiary provides services, quaternary handles information and quinary personal services. ' +
            'Small and medium enterprises employ fewer than 200 people and dominate by number.',
    },
    {
        id: 'bus-influences',
        subject: 'business-studies',
        question: 'What influences a business?',
        aliases: ['influences on business', 'external influences', 'internal influences', 'stakeholders', 'pestle'],
        answer:
            'External influences include economic conditions, financial markets, geography, social attitudes, legal ' +
            'and political settings, institutions, technology and competition. ' +
            'Internal ones include products, location, resources, management and business culture. ' +
            'Stakeholders are everyone affected, from shareholders to the community.',
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
        id: 'bus-finance-sources',
        subject: 'business-studies',
        question: 'Where can a business get finance?',
        aliases: ['sources of finance', 'debt vs equity', 'overdraft', 'leasing', 'factoring', 'venture capital'],
        answer:
            'Internal finance is retained profit and owner\u2019s funds. External debt is short-term, such as ' +
            'overdrafts and factoring, or long-term, such as mortgages and leasing. ' +
            'Equity means new owners and no repayments, but the profit is shared and control diluted.',
    },
    {
        id: 'bus-employment-relations',
        subject: 'business-studies',
        question: 'How are employment relations managed?',
        aliases: ['employment relations', 'industrial relations', 'award', 'enterprise agreement', 'dispute resolution', 'unfair dismissal'],
        answer:
            'Pay and conditions come from the National Employment Standards, awards and enterprise agreements. ' +
            'Disputes are resolved by negotiation, mediation, grievance procedures, conciliation or arbitration. ' +
            'Dismissal must follow a fair process, or it may be found unfair.',
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
    {
        id: 'bus-ethics-csr',
        subject: 'business-studies',
        question: 'What is corporate social responsibility?',
        aliases: ['corporate social responsibility', 'csr', 'business ethics', 'triple bottom line', 'greenwashing'],
        answer:
            'Going beyond legal compliance to consider the effect on people and the environment, often summarised as ' +
            'the triple bottom line of profit, people and planet. ' +
            'It can raise costs in the short term while building reputation and staff loyalty over time.',
    },
    {
        id: 'bus-planning-decision',
        subject: 'business-studies',
        question: 'How does business planning work?',
        aliases: ['business planning', 'swot analysis', 'strategic planning', 'situational analysis', 'business plan'],
        answer:
            'Planning runs from strategic, over years, through tactical to operational, over days. ' +
            'A situational analysis, such as SWOT, sets out strengths, weaknesses, opportunities and threats. ' +
            'The plan then sets goals, chooses strategies and defines how performance will be measured.',
    },
];
