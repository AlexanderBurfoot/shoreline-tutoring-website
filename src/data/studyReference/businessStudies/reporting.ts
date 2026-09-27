/**
 * Business Studies: financial control and reporting.
 *
 * Controls, budgets, depreciation, working capital and what must be reported.
 */
import type { StudyEntry } from '../types';

export const businessReportingEntries: StudyEntry[] = [
    {
        id: 'bus-financial-controls',
        subject: 'business-studies',
        question: 'What financial controls should a business have?',
        aliases: ['financial controls', 'separation of duties', 'authorisation limits', 'bank reconciliation'],
        answer:
            'Separation of who authorises, who pays and who records; approval limits; regular bank reconciliation; ' +
            'independent audit; and secured access to systems. Most internal fraud is possible because one person ' +
            'controlled all three steps.',
    },
    {
        id: 'bus-budgeting-in-business',
        subject: 'business-studies',
        question: 'What kinds of budget does a business prepare?',
        aliases: ['types of business budget', 'operating budget', 'cash budget', 'capital expenditure budget'],
        answer:
            'Operating budgets for revenue and expenses, cash budgets for the timing of receipts and payments, and ' +
            'capital expenditure budgets for asset purchases. A business can be profitable on the operating budget ' +
            'and still fail on the cash one.',
    },
    {
        id: 'bus-interpreting-financial-reports',
        subject: 'business-studies',
        question: 'How do I interpret a set of financial statements?',
        aliases: ['interpreting financial statements', 'reading a balance sheet', 'comparing years'],
        answer:
            'Compare with the previous year and with the industry, look at the trend rather than one figure, and ' +
            'reconcile the three statements: profit that never becomes cash, or assets that grow faster than sales, ' +
            'both need explaining.',
    },
    {
        id: 'bus-depreciation-methods',
        subject: 'business-studies',
        question: 'Why does depreciation matter to a business?',
        aliases: ['depreciation methods', 'straight line depreciation', 'reducing balance method'],
        answer:
            'It spreads the cost of an asset over its useful life so profit reflects the resources actually consumed, ' +
            'and it affects tax. Straight line spreads it evenly; reducing balance charges more early, which suits ' +
            'assets that lose value fast.',
    },
    {
        id: 'bus-working-capital-cycle',
        subject: 'business-studies',
        question: 'What is the working capital cycle?',
        aliases: ['working capital cycle', 'cash conversion cycle', 'time from stock to cash'],
        answer:
            'The time from paying for inventory to collecting cash from the customer. The longer it is, the more cash ' +
            'the business must fund, which is why growing businesses can run out of money while profitable.',
    },
    {
        id: 'bus-break-even-limitations',
        subject: 'business-studies',
        question: 'What are the limitations of break-even analysis?',
        aliases: ['limitations of break even', 'assumptions of break even', 'constant price assumption'],
        answer:
            'It assumes a constant selling price and constant variable cost per unit, a clean split between fixed and ' +
            'variable costs, and that everything produced is sold. It is a planning guide rather than a forecast.',
    },
    {
        id: 'bus-cost-control',
        subject: 'business-studies',
        question: 'How do businesses control costs without damaging the business?',
        aliases: ['controlling costs', 'cost cutting risks', 'reducing waste not capability'],
        answer:
            'Remove waste and rework, renegotiate supply, improve process, and match staffing to demand. Cutting ' +
            'training, maintenance and marketing improves this year and weakens the next, which is why those cuts are ' +
            'the ones to justify carefully.',
    },
    {
        id: 'bus-ratio-benchmarking',
        subject: 'business-studies',
        question: 'What should financial ratios be compared against?',
        aliases: ['benchmarking ratios', 'industry average comparison', 'trend over time'],
        answer:
            'The same business over time, the industry average, and any target the business set. A current ratio of ' +
            '1.5 means little alone: it is either an improvement or a decline, and either typical for the industry or ' +
            'not.',
    },
    {
        id: 'bus-financial-reporting-obligations',
        subject: 'business-studies',
        question: 'What must a business report, and to whom?',
        aliases: ['financial reporting obligations', 'asic reporting', 'bas and tax reporting'],
        answer:
            'Business activity statements and tax returns to the ATO, superannuation to funds, and for companies, ' +
            'financial reports to ASIC and shareholders. Reporting requirements scale with size, and a public company ' +
            'faces continuous disclosure.',
    },
];
