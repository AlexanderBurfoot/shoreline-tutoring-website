/**
 * Business Studies: terms and concepts named one at a time.
 *
 * The vocabulary a case study answer is expected to use precisely.
 */
import type { StudyEntry } from '../types';

export const businessTermEntries: StudyEntry[] = [
    {
        id: 'bus-span-of-control',
        subject: 'business-studies',
        question: 'What is span of control?',
        aliases: ['span of control', 'how many staff report to a manager', 'wide and narrow span'],
        answer:
            'The number of employees reporting directly to one manager. A wide span suits routine work and flat ' +
            'structures but stretches supervision; a narrow span allows close oversight and adds layers, cost and ' +
            'slower communication.',
    },
    {
        id: 'bus-delegation',
        subject: 'business-studies',
        question: 'What is delegation, and why do managers avoid it?',
        aliases: ['delegation', 'delegating tasks', 'why managers do not delegate'],
        answer:
            'Passing authority for a task to someone else while keeping accountability for the outcome. Managers ' +
            'avoid it from fear of mistakes or loss of control, at the cost of their own capacity and of the ' +
            'development the task would have given someone.',
    },
    {
        id: 'bus-chain-of-command',
        subject: 'business-studies',
        question: 'What is the chain of command?',
        aliases: ['chain of command', 'reporting line', 'who reports to whom'],
        answer:
            'The line of authority running from the top of an organisation to the bottom, showing who reports to ' +
            'whom. A clear chain prevents conflicting instructions; a matrix structure deliberately breaks it, which ' +
            'is why it needs agreement about priorities.',
    },
    {
        id: 'bus-centralisation',
        subject: 'business-studies',
        question: 'What is the difference between centralisation and decentralisation?',
        aliases: ['centralisation', 'decentralisation', 'where decisions are made'],
        answer:
            'Centralisation keeps decisions with senior management, which gives consistency and control. ' +
            'Decentralisation pushes them to the people closest to the situation, which gives speed and local ' +
            'judgement. Most businesses centralise finance and decentralise service.',
    },
    {
        id: 'bus-brand-equity',
        subject: 'business-studies',
        question: 'What is brand equity?',
        aliases: ['brand equity', 'value of a brand', 'why a name is worth money'],
        answer:
            'The commercial value carried by a brand name itself: the price premium customers accept, the loyalty ' +
            'that reduces marketing cost, and the trust that makes a new product easier to launch. It appears on a ' +
            'balance sheet only when a business is bought.',
    },
    {
        id: 'bus-product-mix',
        subject: 'business-studies',
        question: 'What is a product mix?',
        aliases: ['product mix', 'product range', 'width and depth of a range'],
        answer:
            'The full set of products a business sells, described by its width, the number of lines, and its depth, ' +
            'the variants within each line. A wide mix spreads risk; a deep mix serves one market thoroughly and is ' +
            'cheaper to support.',
    },
    {
        id: 'bus-differentiation',
        subject: 'business-studies',
        question: 'What is product differentiation?',
        aliases: ['product differentiation', 'making a product distinct', 'differentiation strategy'],
        answer:
            'Making a product distinguishable from competitors on something customers value: quality, design, ' +
            'service, convenience or image. It is the alternative to competing on price, and the more easily it is ' +
            'copied the shorter the advantage lasts.',
    },
    {
        id: 'bus-usp',
        subject: 'business-studies',
        question: 'What is a unique selling proposition?',
        aliases: ['unique selling proposition', 'usp', 'what makes a product different'],
        answer:
            'The single reason a customer should choose this product over any other, stated plainly enough to repeat. ' +
            'If a competitor could claim the same thing, it is not unique, and a business with no USP usually ' +
            'competes on price by default.',
    },
    {
        id: 'bus-market-penetration',
        subject: 'business-studies',
        question: 'What is market penetration?',
        aliases: ['market penetration', 'selling more to existing customers', 'growth in the current market'],
        answer:
            'Selling more of an existing product in an existing market, through price, promotion, distribution or ' +
            'taking share from competitors. It is the lowest risk growth option because both the product and the ' +
            'market are already understood.',
    },
    {
        id: 'bus-market-development',
        subject: 'business-studies',
        question: 'What is market development?',
        aliases: ['market development', 'new market for an existing product', 'expanding geographically'],
        answer:
            'Taking an existing product into a new market, whether a new region, a new age group or a new use. The ' +
            'product is proven but the customers are not, so the risk sits in whether the need is the same.',
    },
    {
        id: 'bus-diversification',
        subject: 'business-studies',
        question: 'What is diversification?',
        aliases: ['diversification', 'new product in a new market', 'spreading business risk'],
        answer:
            'Entering a new market with a new product, the riskiest growth path because neither is familiar. It is ' +
            'chosen to spread risk across unrelated activities, so that a downturn in one does not threaten the whole ' +
            'business.',
    },
    {
        id: 'bus-psychological-pricing',
        subject: 'business-studies',
        question: 'What is psychological pricing?',
        aliases: ['psychological pricing', 'price points', 'why prices end in 99'],
        answer:
            'Setting prices for the impression they create rather than by cost: $9.99 reads as nine-something, a ' +
            'round premium price signals quality, and a price just under a round number sits below a mental ' +
            'threshold.',
    },
    {
        id: 'bus-channel-conflict',
        subject: 'business-studies',
        question: 'What is channel conflict?',
        aliases: ['channel conflict', 'competing with your own retailers', 'direct sales versus distributors'],
        answer:
            'Tension between a producer and its distributors, most often when the producer sells directly online at ' +
            'prices its retailers cannot match. It threatens the shelf space and service those retailers provide, so ' +
            'pricing and range are usually separated.',
    },
    {
        id: 'bus-licensing',
        subject: 'business-studies',
        question: 'What is licensing in business?',
        aliases: ['licensing', 'licensing a brand', 'royalty agreement'],
        answer:
            'Granting another firm the right to use intellectual property, a brand or a process, for a fee or ' +
            'royalty. It earns income from an asset without capital outlay, and the risk is that the licensee quality ' +
            'reflects on the brand.',
    },
    {
        id: 'bus-benchmarking',
        subject: 'business-studies',
        question: 'What is benchmarking?',
        aliases: ['benchmarking', 'comparing against best practice', 'industry standard comparison'],
        answer:
            'Comparing performance against a standard: a competitor, the industry average or the best performer in ' +
            'any industry. It converts a vague sense that something could be better into a specific gap with a number ' +
            'attached.',
    },
    {
        id: 'bus-capacity-utilisation',
        subject: 'business-studies',
        question: 'What is capacity utilisation?',
        aliases: ['capacity utilisation', 'using full capacity', 'idle capacity cost'],
        answer:
            'The proportion of available capacity actually being used. Low utilisation spreads fixed costs over fewer ' +
            'units and raises unit cost; running at or near full leaves no room for a surge and no time for ' +
            'maintenance.',
    },
    {
        id: 'bus-logistics',
        subject: 'business-studies',
        question: 'What does logistics cover in a business?',
        aliases: ['logistics', 'moving and storing goods', 'distribution management'],
        answer:
            'The movement and storage of goods from supplier to customer: transport, warehousing, handling and the ' +
            'information that tracks it. It is where a great deal of cost and most customer disappointment sit, which ' +
            'is why it is managed as a discipline.',
    },
    {
        id: 'bus-solvency',
        subject: 'business-studies',
        question: 'What is solvency, and how does it differ from liquidity?',
        aliases: ['solvency', 'solvency versus liquidity', 'able to pay long term debts'],
        answer:
            'Solvency is the ability to meet long-term obligations, judged by whether assets exceed liabilities. ' +
            'Liquidity is the ability to meet short-term ones. A business can be solvent and illiquid, which is how a ' +
            'profitable firm fails.',
    },
    {
        id: 'bus-budget-variance',
        subject: 'business-studies',
        question: 'What is a budget variance?',
        aliases: ['budget variance', 'actual versus budget', 'favourable and unfavourable variance'],
        answer:
            'The difference between the budgeted figure and the actual result, favourable when it helps profit and ' +
            'unfavourable when it does not. The useful step is explaining it: a favourable cost variance caused by ' +
            'skipped maintenance is not good news.',
    },
    {
        id: 'bus-audit',
        subject: 'business-studies',
        question: 'What is an audit?',
        aliases: ['audit', 'auditing accounts', 'internal and external audit'],
        answer:
            'An independent examination of records and controls to confirm the accounts present a true and fair view. ' +
            'An external audit is required for public companies; an internal audit reports to management on whether ' +
            'controls are working.',
    },
    {
        id: 'bus-kpi',
        subject: 'business-studies',
        question: 'What is a key performance indicator?',
        aliases: ['key performance indicator', 'kpi', 'measuring business performance'],
        answer:
            'A measure chosen because it tracks progress towards an objective, such as market share, staff turnover ' +
            'or on-time delivery. A good one is specific, measurable and influenced by what the business actually ' +
            'does; too many at once obscure which matters.',
    },
    {
        id: 'bus-reading-financial-extract',
        subject: 'business-studies',
        question: 'How do I read an extract from a financial statement?',
        aliases: ['reading a financial statement extract', 'interpreting accounts in an exam', 'stimulus financial data'],
        answer:
            'Identify which statement it is, since an income statement shows a period and a balance sheet a single ' +
            'date. Then calculate only the ratios the question needs, and comment on the change rather than the ' +
            'figure.',
    },
];
