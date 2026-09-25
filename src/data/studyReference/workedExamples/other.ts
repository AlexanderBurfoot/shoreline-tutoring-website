/**
 * Worked examples: biology, economics and business studies.
 *
 * The calculations these courses actually ask for, worked through.
 */
import type { StudyEntry } from '../types';

export const workedExampleOtherEntries: StudyEntry[] = [
    {
        id: 'bio-example-dihybrid',
        subject: 'biology',
        question: 'Can you show me a worked example of a dihybrid cross?',
        aliases: ['worked example dihybrid cross', 'example of a two trait cross', 'nine three three one example'],
        answer:
            'Cross RrYy with RrYy. Each parent makes four gamete types, RY, Ry, rY and ry, giving a 4 by 4 grid of 16 ' +
            'boxes. The result is 9 round yellow, 3 round green, 3 wrinkled yellow and 1 wrinkled green, the 9:3:3:1 ' +
            'ratio.',
    },
    {
        id: 'bio-example-surface-area-volume',
        subject: 'biology',
        question: 'Can you show me a worked example of surface area to volume ratio?',
        aliases: ['worked example surface area to volume', 'example of a sa vol calculation', 'cube ratio example'],
        answer:
            'A cube of side 2 cm has surface area 24 cm² and volume 8 cm³, a ratio of 3 to 1. Double the side to 4 cm ' +
            'and it becomes 96 cm² to 64 cm³, a ratio of 1.5 to 1. Growing larger halves the ratio, which is why ' +
            'large cells cannot rely on diffusion.',
    },
    {
        id: 'bio-example-capture-recapture',
        subject: 'biology',
        question: 'Can you show me a worked example of capture-recapture?',
        aliases: ['worked example capture recapture', 'example of estimating a population', 'lincoln index example'],
        answer:
            'Mark 60 animals, then catch 80 later of which 15 are marked. The estimated population is (60 × 80) ÷ 15 ' +
            '= 320. It assumes the marked animals mixed back in and that none were born, died or moved in between.',
    },
    {
        id: 'bio-example-pedigree',
        subject: 'biology',
        question: 'Can you show me a worked example of reading a pedigree?',
        aliases: ['worked example pedigree', 'example of working out inheritance from a family tree', 'carrier parents example'],
        answer:
            'Two unaffected parents have an affected son. Since the trait skipped a generation it must be recessive, ' +
            'so both parents are carriers. If daughters are never affected in the wider family, it is X-linked ' +
            'recessive rather than autosomal.',
    },
    {
        id: 'econ-example-multiplier',
        subject: 'economics',
        question: 'Can you show me a worked example of the multiplier?',
        aliases: ['worked example multiplier', 'example of a multiplier calculation', 'mpc multiplier example'],
        answer:
            'If the marginal propensity to consume is 0.8, the simple multiplier is 1 ÷ (1 − 0.8) = 5. So a $2 ' +
            'billion injection eventually raises national income by about $10 billion. Taxation and imports leak from ' +
            'each round, so the real figure is smaller.',
    },
    {
        id: 'econ-example-inflation-rate',
        subject: 'economics',
        question: 'Can you show me a worked example of calculating an inflation rate?',
        aliases: ['worked example inflation rate', 'example of a cpi calculation', 'percentage change in cpi example'],
        answer:
            'The CPI rises from 105.0 to 108.2 over a year. Inflation = (108.2 − 105.0) ÷ 105.0 × 100 = 3.0%. The ' +
            'base year matters: always divide by the earlier figure, not the later one.',
    },
    {
        id: 'econ-example-exchange-rate',
        subject: 'economics',
        question: 'Can you show me a worked example of an exchange rate conversion?',
        aliases: ['worked example exchange rate', 'example of converting currency', 'aud to usd example'],
        answer:
            'With one Australian dollar buying 67 US cents, goods priced at US$335 cost 335 ÷ 0.67 = A$500. If the ' +
            'dollar then falls to 60 US cents, the same goods cost A$558, which is how a depreciation raises import ' +
            'prices.',
    },
    {
        id: 'bus-example-current-ratio',
        subject: 'business-studies',
        question: 'Can you show me a worked example of the current ratio?',
        aliases: ['worked example current ratio', 'example of a liquidity calculation', 'current assets over liabilities example'],
        answer:
            'Current assets are $180,000 and current liabilities $90,000, so the current ratio is 2 to 1. That means ' +
            'twice the short-term resources needed to meet short-term debts, which is comfortable for most ' +
            'industries.',
    },
    {
        id: 'bus-example-inventory-turnover',
        subject: 'business-studies',
        question: 'Can you show me a worked example of inventory turnover?',
        aliases: ['worked example inventory turnover', 'example of stock turnover', 'days of inventory example'],
        answer:
            'Cost of goods sold is $480,000 with average inventory of $60,000, so turnover is 8 times a year. ' +
            'Dividing 365 by 8 gives about 46 days of stock on hand. Slower turnover ties up cash even while sales ' +
            'look healthy.',
    },
];
