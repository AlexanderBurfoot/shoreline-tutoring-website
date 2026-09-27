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
    {
        id: 'bio-example-test-cross',
        subject: 'biology',
        question: 'Can you show me a worked example of a test cross?',
        aliases: ['worked example test cross', 'example of finding an unknown genotype', 'crossing with a recessive example'],
        answer:
            'A tall plant is either TT or Tt. Cross it with a short plant, tt. If it is TT every offspring is tall; ' +
            'if it is Tt about half are short. Seeing one short offspring is enough to prove it was Tt.',
    },
    {
        id: 'bio-example-sex-linked-cross',
        subject: 'biology',
        question: 'Can you show me a worked example of a sex-linked cross?',
        aliases: ['worked example sex linked cross', 'example of an x linked cross', 'carrier mother example'],
        answer:
            'A carrier mother XᴬXᵃ has children with an unaffected father XᴬY. Daughters receive Xᴬ from their ' +
            'father, so none are affected but half are carriers. Sons receive Y from their father, so half are ' +
            'affected. That is why the condition appears in boys.',
    },
    {
        id: 'bio-example-codominance-cross',
        subject: 'biology',
        question: 'Can you show me a worked example of codominance?',
        aliases: ['worked example codominance', 'example of a roan cross', 'both alleles expressed example'],
        answer:
            'Cross a red bull, CᴿCᴿ, with a white cow, CᵂCᵂ. Every calf is CᴿCᵂ, which shows both colours as roan ' +
            'rather than pink. Crossing two roans then gives 1 red to 2 roan to 1 white.',
    },
    {
        id: 'bio-example-blood-group-cross',
        subject: 'biology',
        question: 'Can you show me a worked example of blood group inheritance?',
        aliases: ['worked example blood group', 'example of abo inheritance', 'blood type cross example'],
        answer:
            'A group A mother, Iᴬi, and a group B father, Iᴮi, can have children of every group: IᴬIᴮ is AB, Iᴬi is ' +
            'A, Iᴮi is B and ii is O, each a quarter. Two parents who are neither AB nor O can therefore have an AB ' +
            'child.',
    },
    {
        id: 'bio-example-respiration-yield',
        subject: 'biology',
        question: 'Can you show me a worked example of comparing respiration yields?',
        aliases: ['worked example atp yield', 'example of aerobic versus anaerobic yield', 'atp from glucose example'],
        answer:
            'Aerobic respiration of one glucose molecule yields about 30 to 32 ATP, while anaerobic respiration ' +
            'yields 2. So aerobic release is roughly fifteen times greater, which is why muscles tire quickly once ' +
            'oxygen runs short.',
    },
    {
        id: 'bio-example-quadrat-estimate',
        subject: 'biology',
        question: 'Can you show me a worked example of estimating from quadrats?',
        aliases: ['worked example quadrat estimate', 'example of scaling up a quadrat count', 'population estimate from quadrats'],
        answer:
            'Ten quadrats of 1 m² give a mean of 6.4 plants. For a field of 500 m², the estimate is 6.4 × 500 = 3,200 ' +
            'plants. It assumes the quadrats were placed randomly and that the field is reasonably uniform.',
    },
    {
        id: 'bio-example-photosynthesis-rate',
        subject: 'biology',
        question: 'Can you show me a worked example of measuring photosynthesis rate?',
        aliases: ['worked example photosynthesis rate', 'example of counting bubbles', 'rate of oxygen production example'],
        answer:
            'Pondweed releases 45 bubbles in 3 minutes, so the rate is 15 bubbles per minute. Halving the distance to ' +
            'the lamp raises the light intensity fourfold and the rate climbs until another factor, usually carbon ' +
            'dioxide, becomes limiting.',
    },
    {
        id: 'econ-example-gdp-expenditure',
        subject: 'economics',
        question: 'Can you show me a worked example of calculating GDP?',
        aliases: ['worked example gdp', 'example of the expenditure approach', 'c plus i plus g example'],
        answer:
            'With consumption $600 bn, investment $150 bn, government spending $200 bn, exports $120 bn and imports ' +
            '$140 bn: GDP = 600 + 150 + 200 + (120 − 140) = $930 bn. Imports are subtracted because they were ' +
            'produced elsewhere.',
    },
    {
        id: 'econ-example-unemployment-rate',
        subject: 'economics',
        question: 'Can you show me a worked example of the unemployment rate?',
        aliases: ['worked example unemployment rate', 'example of calculating unemployment', 'labour force calculation example'],
        answer:
            'With 700,000 unemployed in a labour force of 14 million, the rate is 700,000 ÷ 14,000,000 × 100 = 5.0%. ' +
            'The denominator is the labour force, not the whole population, which is why the participation rate is ' +
            'reported alongside it.',
    },
    {
        id: 'econ-example-participation-rate',
        subject: 'economics',
        question: 'Can you show me a worked example of the participation rate?',
        aliases: ['worked example participation rate', 'example of calculating participation', 'working age population example'],
        answer:
            'A labour force of 14 million within a working age population of 21 million gives 14 ÷ 21 × 100 = 66.7%. ' +
            'If discouraged workers stop looking, both the labour force and this rate fall, and measured unemployment ' +
            'falls with them.',
    },
    {
        id: 'econ-example-terms-of-trade',
        subject: 'economics',
        question: 'Can you show me a worked example of the terms of trade?',
        aliases: ['worked example terms of trade', 'example of a terms of trade index', 'export price index example'],
        answer:
            'With an export price index of 110 and an import price index of 100, the terms of trade index is 110 ÷ ' +
            '100 × 100 = 110. Above 100 means the same exports buy more imports than in the base year, which raises ' +
            'national income with no extra production.',
    },
    {
        id: 'econ-example-budget-outcome',
        subject: 'economics',
        question: 'Can you show me a worked example of a budget outcome?',
        aliases: ['worked example budget outcome', 'example of a deficit as a share of gdp', 'budget deficit calculation'],
        answer:
            'Revenue of $500 bn against spending of $530 bn is a deficit of $30 bn. Against a GDP of $2,000 bn that ' +
            'is 1.5%. Expressing it as a share of GDP is what allows comparison between years and countries.',
    },
    {
        id: 'bus-example-contribution-margin',
        subject: 'business-studies',
        question: 'Can you show me a worked example of contribution margin?',
        aliases: ['worked example contribution margin', 'example of contribution per unit', 'contribution margin ratio example'],
        answer:
            'A product sells for $40 with variable costs of $25, so the contribution per unit is $15. As a ratio that ' +
            'is 15 ÷ 40 = 37.5%. Every unit sold contributes $15 towards fixed costs, and beyond break-even that $15 ' +
            'is profit.',
    },
    {
        id: 'bus-example-cash-budget',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a cash budget?',
        aliases: ['worked example cash budget', 'example of a cash flow calculation', 'closing cash balance example'],
        answer:
            'Opening cash is $20,000, receipts are $95,000 and payments are $80,000. The closing balance is 20,000 + ' +
            '95,000 − 80,000 = $35,000. A month of heavy payments can leave this negative even in a profitable year, ' +
            'which is the point of preparing it.',
    },
    {
        id: 'bus-example-working-capital',
        subject: 'business-studies',
        question: 'Can you show me a worked example of working capital?',
        aliases: ['worked example working capital', 'example of calculating working capital', 'current assets minus liabilities example'],
        answer:
            'Current assets of $180,000 less current liabilities of $90,000 gives working capital of $90,000. It is ' +
            'the buffer available for day-to-day operation, and a business can be profitable and still have too ' +
            'little of it.',
    },
    {
        id: 'bus-example-debt-to-equity',
        subject: 'business-studies',
        question: 'Can you show me a worked example of the debt to equity ratio?',
        aliases: ['worked example debt to equity', 'example of a gearing calculation', 'gearing ratio example'],
        answer:
            'Total liabilities of $120,000 against owners equity of $200,000 gives 120 ÷ 200 = 0.6, or 60%. Every ' +
            'dollar of equity is matched by 60 cents of borrowing, which is moderate gearing: higher magnifies both ' +
            'returns and losses.',
    },
    {
        id: 'bus-example-market-share',
        subject: 'business-studies',
        question: 'Can you show me a worked example of market share?',
        aliases: ['worked example market share', 'example of calculating market share', 'share of industry sales example'],
        answer:
            'Sales of $2.4 million in an industry worth $30 million give a share of 2.4 ÷ 30 × 100 = 8%. Watch ' +
            'whether the industry figure is by value or by volume, since a premium seller has a larger share by value ' +
            'than by units.',
    },
    {
        id: 'bio-example-percentage-cover',
        subject: 'biology',
        question: 'Can you show me a worked example of percentage cover?',
        aliases: ['worked example percentage cover', 'example of quadrat cover', 'cover estimate example'],
        answer:
            'A quadrat divided into 100 small squares has a species in 40 of them, so the cover is 40%. Cover suits ' +
            'plants that spread, where counting individuals is impossible, and it is estimated rather than counted ' +
            'exactly when a plant partly fills a square.',
    },
    {
        id: 'bio-example-cardiac-output',
        subject: 'biology',
        question: 'Can you show me a worked example of cardiac output?',
        aliases: ['worked example cardiac output', 'example of stroke volume calculation', 'heart output example'],
        answer:
            'Cardiac output is stroke volume times heart rate. With 70 mL per beat at 72 beats a minute, that is ' +
            '5,040 mL, about 5 L a minute. During exercise both figures rise, which is how output can reach four or ' +
            'five times this.',
    },
    {
        id: 'econ-example-supply-elasticity',
        subject: 'economics',
        question: 'Can you show me a worked example of elasticity of supply?',
        aliases: ['worked example supply elasticity', 'example of calculating supply elasticity', 'price and quantity supplied example'],
        answer:
            'Price rises from $10 to $12, a 20% rise, and quantity supplied rises from 100 to 110, a 10% rise. ' +
            'Elasticity is 10 ÷ 20 = 0.5, so supply is inelastic and producers cannot respond quickly.',
    },
    {
        id: 'bio-example-carrier-cross',
        subject: 'biology',
        question: 'Can you show me a worked example of a cross between two carriers?',
        aliases: ['worked example carrier cross', 'example of two carriers having children', 'probability of an affected child'],
        answer:
            'Two carriers, Aa × Aa, give AA, Aa, Aa and aa. So one in four is affected and three in four are ' +
            'unaffected. Among the unaffected children, two of the three are themselves carriers, which is the figure ' +
            'genetic counselling uses.',
    },
    {
        id: 'bio-example-hardy-weinberg-from-alleles',
        subject: 'biology',
        question: 'Can you show me a worked example of Hardy-Weinberg from allele frequencies?',
        aliases: ['worked example hardy weinberg from alleles', 'example of genotype frequencies', 'p squared two pq q squared'],
        answer:
            'With p = 0.6 and q = 0.4, the genotype frequencies are p² = 0.36 homozygous dominant, 2pq = 0.48 ' +
            'heterozygous and q² = 0.16 homozygous recessive. They sum to 1, which is the check.',
    },
    {
        id: 'bio-example-sex-linked-probability',
        subject: 'biology',
        question: 'Can you show me a worked example of a sex-linked probability?',
        aliases: ['worked example sex linked probability', 'example of probability of an affected son', 'chance of a carrier daughter'],
        answer:
            'A carrier mother and unaffected father: each child has a one in four chance of being an affected son and ' +
            'a one in four chance of being a carrier daughter. Among sons alone the chance of being affected is one ' +
            'in two.',
    },
    {
        id: 'bio-example-oxygen-consumption',
        subject: 'biology',
        question: 'Can you show me a worked example of a respiration rate?',
        aliases: ['worked example respiration rate', 'example of oxygen consumption calculation', 'respirometer calculation'],
        answer:
            'A respirometer shows the fluid moving 24 mm along a 1.0 mm² capillary in 4 minutes. That is 24 mm³ of ' +
            'oxygen used, or 6.0 mm³ per minute. Dividing by the organism mass allows comparison between organisms of ' +
            'different size.',
    },
    {
        id: 'econ-example-real-wage',
        subject: 'economics',
        question: 'Can you show me a worked example of a real wage change?',
        aliases: ['worked example real wage', 'example of real versus nominal wage', 'wage growth minus inflation'],
        answer:
            'A nominal wage rise of 4.0% with inflation at 2.5% is a real rise of about 1.5%. If inflation were 5%, ' +
            'the same nominal rise would be a real cut of 1%, which is how workers can be worse off after a pay ' +
            'increase.',
    },
    {
        id: 'econ-example-elasticity-revenue',
        subject: 'economics',
        question: 'Can you show me a worked example of elasticity and revenue?',
        aliases: ['worked example elasticity and revenue', 'example of a price cut raising revenue', 'elastic demand revenue example'],
        answer:
            'Price falls from $20 to $18, a 10% cut, and quantity rises from 100 to 120, a 20% rise, so elasticity is ' +
            '2. Revenue moves from $2,000 to $2,160, so the cut raised revenue because demand was elastic.',
    },
    {
        id: 'econ-example-gdp-per-capita',
        subject: 'economics',
        question: 'Can you show me a worked example of GDP per capita?',
        aliases: ['worked example gdp per capita', 'example of income per person', 'gdp divided by population'],
        answer:
            'A GDP of $2,000 billion in a population of 26 million gives 2,000,000 ÷ 26 = about $76,900 per person. ' +
            'If GDP grows 2% while the population grows 1.5%, income per person grows only about 0.5%.',
    },
    {
        id: 'bus-example-target-profit',
        subject: 'business-studies',
        question: 'Can you show me a worked example of break-even with a target profit?',
        aliases: ['worked example target profit', 'example of units needed for a profit', 'break even plus profit'],
        answer:
            'Fixed costs are $8,000 and the contribution per unit is $10. Break-even is 800 units, and to make $5,000 ' +
            'profit the business needs (8,000 + 5,000) ÷ 10 = 1,300 units.',
    },
    {
        id: 'bus-example-return-on-equity',
        subject: 'business-studies',
        question: 'Can you show me a worked example of return on equity?',
        aliases: ['worked example return on equity', 'example of roe calculation', 'return to owners example'],
        answer:
            'A net profit of $60,000 on owners equity of $400,000 gives 60 ÷ 400 = 15%. It is compared with what the ' +
            'owners could earn elsewhere, so a 15% return is judged against the alternatives rather than in ' +
            'isolation.',
    },
    {
        id: 'bus-example-expense-ratio',
        subject: 'business-studies',
        question: 'Can you show me a worked example of the expense ratio?',
        aliases: ['worked example expense ratio', 'example of expenses to sales', 'expense ratio calculation'],
        answer:
            'Expenses of $120,000 against sales of $500,000 give 120 ÷ 500 = 24%. Tracking it over several years ' +
            'shows whether costs are growing faster than sales, which a single figure cannot.',
    },
    {
        id: 'econ-example-multiplier-leakages',
        subject: 'economics',
        question: 'Can you show me a worked example of the multiplier with leakages?',
        aliases: ['worked example multiplier with leakages', 'example of multiplier with tax and imports', 'smaller multiplier example'],
        answer:
            'If households spend 0.8 of extra income, but 0.1 leaks to tax and 0.1 to imports, the fraction respent ' +
            'domestically is 0.6. The multiplier is 1 ÷ (1 − 0.6) = 2.5, so a $2 bn injection raises income by about ' +
            '$5 bn rather than $10 bn.',
    },
    {
        id: 'bus-example-cash-flow-forecast',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a cash flow forecast?',
        aliases: ['worked example cash flow forecast', 'example of forecasting cash', 'projected cash balance example'],
        answer:
            'Opening cash $15,000; receipts of $60,000 in month one and $40,000 in month two; payments of $52,000 and ' +
            '$55,000. Month one closes at $23,000 and month two at $8,000. The declining balance is the warning, even ' +
            'though both months are positive.',
    },
];
