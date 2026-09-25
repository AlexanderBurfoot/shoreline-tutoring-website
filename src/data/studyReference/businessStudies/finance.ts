/**
 * Business: finance and financial management.
 */
import type { StudyEntry } from '../types';

export const businessFinanceEntries: StudyEntry[] = [
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
        id: 'bus-financial-objectives',
        subject: 'business-studies',
        question: 'What are the financial objectives of a business?',
        aliases: ['financial objectives', 'profitability', 'liquidity', 'solvency', 'efficiency and growth'],
        answer:
            'Profitability, liquidity, efficiency, growth, return to owners and solvency. ' +
            'They pull against each other: holding cash protects liquidity but earns little, and rapid growth often ' +
            'consumes the cash that keeps a business solvent.',
    },
    {
        id: 'bus-internal-external-finance',
        subject: 'business-studies',
        question: 'What is the difference between internal and external finance?',
        aliases: ['internal finance', 'external finance', 'retained profits', 'owners equity'],
        answer:
            'Internal finance comes from inside: retained profits, owner contributions and the sale of unused assets. ' +
            'External finance comes from outside: overdrafts, loans, leases, factoring and new equity. ' +
            'Internal costs no interest but is limited by past performance.',
    },
    {
        id: 'bus-debt-versus-equity',
        subject: 'business-studies',
        question: 'Should a business use debt or equity?',
        aliases: ['debt versus equity', 'leverage', 'cost of finance'],
        answer:
            'Debt is repaid with interest but leaves ownership intact, and interest is deductible. ' +
            'Equity needs no repayment but dilutes control and profits. ' +
            'High gearing magnifies returns when trading is good and magnifies losses when it is not.',
    },
    {
        id: 'bus-working-capital',
        subject: 'business-studies',
        question: 'What is working capital management?',
        aliases: ['working capital', 'current assets and liabilities', 'managing receivables', 'controlling payables'],
        answer:
            'Managing current assets and current liabilities so the business can pay its bills: collecting receivables ' +
            'promptly, keeping inventory lean, negotiating supplier terms, and holding enough cash without leaving it ' +
            'idle. ' +
            'Most failures are working capital failures.',
    },
    {
        id: 'bus-cash-flow-statement',
        subject: 'business-studies',
        question: 'What does a cash flow statement show?',
        aliases: ['cash flow statement', 'operating investing financing', 'cash inflows and outflows'],
        answer:
            'Cash actually received and paid, grouped into operating, investing and financing activities. ' +
            'It differs from the income statement because sales on credit are revenue before they are cash, which is ' +
            'how a profitable business runs out of money.',
    },
    {
        id: 'bus-profitability-ratios',
        subject: 'business-studies',
        question: 'How do I interpret profitability ratios?',
        aliases: ['gross profit ratio', 'net profit ratio', 'return on equity', 'interpreting profitability'],
        answer:
            'Gross profit ratio shows the margin after cost of goods, so a fall points to pricing or supplier costs. ' +
            'Net profit ratio adds expenses, so a fall there with a steady gross margin points to overheads. ' +
            'Return on equity compares profit with what the owners put in.',
    },
    {
        id: 'bus-liquidity-ratios',
        subject: 'business-studies',
        question: 'What do liquidity and gearing ratios show?',
        aliases: ['debt to equity ratio', 'liquidity ratio interpretation'],
        answer:
            'The current ratio compares current assets with current liabilities; around 2:1 is comfortable, and below ' +
            '1:1 means bills may not be payable. ' +
            'The debt to equity ratio shows how much of the business is funded by borrowing, so a high figure means ' +
            'more risk in a downturn.',
    },
    {
        id: 'bus-efficiency-ratios',
        subject: 'business-studies',
        question: 'What do efficiency ratios measure?',
        aliases: ['expense ratio', 'accounts receivable turnover', 'inventory turnover ratio'],
        answer:
            'How well assets and costs are being used. ' +
            'The expense ratio shows expenses against sales; receivable turnover shows how quickly customers pay; ' +
            'inventory turnover shows how quickly stock sells. ' +
            'Slowing turnover ties up cash even while sales look healthy.',
    },
    {
        id: 'bus-limitations-of-ratios',
        subject: 'business-studies',
        question: 'What are the limitations of financial ratios?',
        aliases: ['limitations of ratio analysis', 'comparing across industries', 'historical data limits'],
        answer:
            'They use past figures, ignore the reasons behind a number, and say nothing about staff, reputation or ' +
            'product quality. ' +
            'Comparisons only hold within an industry and over a consistent accounting treatment, so one ratio in ' +
            'isolation proves very little.',
    },
    {
        id: 'bus-costs-classification',
        subject: 'business-studies',
        question: 'How are business costs classified?',
        aliases: ['fixed and variable costs in business', 'direct and indirect costs', 'cost of goods sold'],
        answer:
            'Fixed costs continue regardless of output, variable costs move with it. ' +
            'Direct costs trace to a product, indirect costs are shared overheads. ' +
            'The split matters for break-even, for pricing, and for deciding whether an extra order is worth taking.',
    },
    {
        id: 'bus-financial-risk',
        subject: 'business-studies',
        question: 'What financial risks does a business face, and how are they managed?',
        aliases: ['financial risk', 'insurance for a business', 'hedging currency risk', 'bad debts'],
        answer:
            'Bad debts, interest rate rises, exchange rate movements, theft, fraud and loss of key assets. ' +
            'Controls include credit checks, insurance, internal audit, separating who approves from who pays, and ' +
            'hedging foreign currency exposures with forward contracts.',
    },
    {
        id: 'bus-ethical-finance',
        subject: 'business-studies',
        question: 'What ethical issues arise in financial management?',
        aliases: ['ethical financial reporting', 'window dressing', 'audited accounts', 'tax minimisation'],
        answer:
            'Presenting accounts to flatter the position, recognising revenue early, hiding liabilities, and aggressive ' +
            'tax structuring that is legal but avoids a fair share. ' +
            'Independent audit exists because the people who prepare the accounts benefit from how they look.',
    },
    {
        id: 'bus-global-financial-management',
        subject: 'business-studies',
        question: 'What financial issues come with operating globally?',
        aliases: ['exchange rate risk', 'methods of international payment', 'letter of credit', 'transfer pricing'],
        answer:
            'Exchange rate movements change the value of a sale between order and payment, so firms hedge or invoice in ' +
            'their own currency. ' +
            'Payment methods trade risk against cost, from payment in advance to a letter of credit. ' +
            'Transfer pricing between subsidiaries attracts tax scrutiny.',
    },
];
