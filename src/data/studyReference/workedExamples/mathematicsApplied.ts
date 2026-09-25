/**
 * Worked examples: mathematics in applied and financial contexts.
 *
 * Money, measurement, rates, probability and statistics, kept separate from the
 * algebra and calculus examples so neither file grows unwieldy.
 */
import type { StudyEntry } from '../types';

export const workedExampleMathsAppliedEntries: StudyEntry[] = [
    {
        id: 'maths-example-z-score',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a z-score?',
        aliases: ['worked example z score', 'example of standardising a score', 'z score calculation example'],
        answer:
            'A mark of 82 in a test with mean 70 and standard deviation 8 gives z = (82 − 70)/8 = 1.5. That is one ' +
            'and a half standard deviations above the mean, which puts it above roughly 93% of results.',
    },
    {
        id: 'maths-example-binomial-probability',
        subject: 'mathematics',
        question: 'Can you show me a worked example of binomial probability?',
        aliases: ['worked example binomial probability', 'example of a binomial calculation', 'exactly two successes example'],
        answer:
            'Five independent trials each succeed with probability 0.2. For exactly two successes, P = ' +
            '⁵C₂(0.2)²(0.8)³ = 10 × 0.04 × 0.512 = 0.2048. The combination counts which two of the five trials ' +
            'succeeded.',
    },
    {
        id: 'maths-example-permutations',
        subject: 'mathematics',
        question: 'Can you show me a worked example of permutations and combinations?',
        aliases: ['worked example permutations', 'example of counting arrangements', 'combination calculation example'],
        answer:
            'From 7 people, the number of ways to fill 4 ranked positions is ⁷P₄ = 7 × 6 × 5 × 4 = 840. If the 4 ' +
            'chosen are simply a committee with no ranking, divide by the 4! orderings: ⁷C₄ = 35.',
    },
    {
        id: 'maths-example-venn',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a Venn diagram?',
        aliases: ['worked example venn diagram', 'example of a venn calculation', 'neither category example'],
        answer:
            'Of 30 students, 18 play sport, 14 play music and 6 do both. Those doing at least one number 18 + 14 − 6 ' +
            '= 26, so 4 do neither. Subtracting the overlap once is what stops those 6 being counted twice.',
    },
    {
        id: 'maths-example-conditional-probability',
        subject: 'mathematics',
        question: 'Can you show me a worked example of conditional probability?',
        aliases: ['worked example conditional probability', 'example of probability given that', 'restricting to a row example'],
        answer:
            'Of 60 students, 25 are girls and 15 of those play sport. P(plays sport given girl) = 15 ÷ 25 = 0.6. The ' +
            'phrase given that restricts the denominator to that group rather than the whole 60.',
    },
    {
        id: 'maths-example-depreciation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of depreciation?',
        aliases: ['worked example depreciation', 'example of reducing balance depreciation', 'declining value example'],
        answer:
            'A $24,000 vehicle depreciates 15% a year on the reducing balance. After 3 years its value is 24,000 × ' +
            '0.85³ = 24,000 × 0.6141 = $14,739. Straight line depreciation at the same rate would instead remove ' +
            '$3,600 each year.',
    },
    {
        id: 'maths-example-wages',
        subject: 'mathematics',
        question: 'Can you show me a worked example of calculating wages with overtime?',
        aliases: ['worked example wages', 'example of overtime pay', 'time and a half calculation example'],
        answer:
            'Thirty-eight hours at $24 an hour is $912. Six hours of overtime at time and a half is 6 × $36 = $216. ' +
            'The gross pay is $1,128, from which tax and superannuation are then deducted.',
    },
    {
        id: 'maths-example-gst',
        subject: 'mathematics',
        question: 'Can you show me a worked example of GST?',
        aliases: ['worked example gst', 'example of adding gst', 'finding the gst in a total'],
        answer:
            'A price of $250 before GST becomes 250 × 1.1 = $275. To find the GST inside that total, divide by 11: ' +
            '$25. Taking 10% of $275 would give $27.50, which is the common error.',
    },
    {
        id: 'maths-example-blood-alcohol',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a blood alcohol calculation?',
        aliases: ['worked example blood alcohol', 'example of a bac calculation', 'bac formula example'],
        answer:
            'For a male, BAC = (10N − 7.5H) ÷ (6.8M). With 4 standard drinks over 2 hours at 80 kg: (40 − 15) ÷ 544 = ' +
            '0.046. The formula is an estimate, and the time term means waiting is the only way to lower it.',
    },
    {
        id: 'maths-example-dosage',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a medication dosage?',
        aliases: ['worked example dosage', 'example of a medicine calculation', 'millilitres of a mixture example'],
        answer:
            'A mixture contains 250 mg per 5 mL and 400 mg is required. Volume = 400 ÷ 250 × 5 = 8 mL. Checking the ' +
            'direction matters: needing more than the stated dose must give more than 5 mL.',
    },
    {
        id: 'maths-example-scale-drawing',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a scale drawing?',
        aliases: ['worked example scale drawing', 'example of reading a plan', 'scale calculation example'],
        answer:
            'On a 1:50 plan a wall measures 6 cm. The real length is 6 × 50 = 300 cm, which is 3 m. Convert to ' +
            'sensible units only at the end, and note that an area on that plan scales by 50², not 50.',
    },
    {
        id: 'maths-example-time-zones',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a time zone calculation?',
        aliases: ['worked example time zones', 'example of a time difference between cities', 'utc offset example'],
        answer:
            'Sydney runs at UTC+10 in winter and London at UTC+0, a difference of 10 hours. A 9:00 am flight ' +
            'departure in London is 7:00 pm in Sydney. Daylight saving shifts either offset, so check the date before ' +
            'assuming the gap.',
    },
    {
        id: 'maths-example-reverse-percentage',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a reverse percentage?',
        aliases: ['worked example reverse percentage', 'example of finding the original price', 'price before discount example'],
        answer:
            'A jacket costs $64 after a 20% discount. That $64 is 80% of the original, so the original is 64 ÷ 0.8 = ' +
            '$80. Adding 20% of $64 would give $76.80, which is the wrong answer for the right-looking reason.',
    },
    {
        id: 'maths-example-area-units',
        subject: 'mathematics',
        question: 'Can you show me a worked example of converting area units?',
        aliases: ['worked example area conversion', 'example of square metre to square centimetre', 'squared unit conversion example'],
        answer:
            'Convert 2.5 m² to cm². Since 1 m is 100 cm, 1 m² is 100 × 100 = 10,000 cm², so 2.5 m² is 25,000 cm². ' +
            'Multiplying by 100 instead of 10,000 is the usual error.',
    },
    {
        id: 'maths-example-loan-interest',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a loan repayment?',
        aliases: ['worked example loan repayment', 'example of interest and principal', 'reducing balance repayment example'],
        answer:
            'A $200,000 loan at 6% a year charges 0.5% a month, so the first months interest is $1,000. A repayment ' +
            'of $1,400 therefore reduces the principal by $400. As the balance falls the interest portion shrinks and ' +
            'the principal portion grows.',
    },
    {
        id: 'maths-example-five-number-summary',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a five number summary?',
        aliases: ['worked example five number summary', 'example of finding quartiles', 'box plot from data example'],
        answer:
            'For 3, 5, 6, 8, 9, 11, 14 the median is 8. The lower half is 3, 5, 6 with median 5 and the upper half 9, ' +
            '11, 14 with median 11. So the summary is 3, 5, 8, 11, 14 and the interquartile range is 6.',
    },
    {
        id: 'maths-example-percentage-profit',
        subject: 'mathematics',
        question: 'Can you show me a worked example of percentage profit?',
        aliases: ['worked example percentage profit', 'example of profit as a percentage', 'markup calculation example'],
        answer:
            'An item costs $45 and sells for $63, so the profit is $18. As a percentage of cost that is 18 ÷ 45 × 100 ' +
            '= 40%. As a percentage of the selling price it would be 28.6%, so the question must say which basis it ' +
            'wants.',
    },
    {
        id: 'maths-example-three-part-ratio',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a three part ratio?',
        aliases: ['worked example three part ratio', 'example of sharing in three parts', 'ratio with three shares example'],
        answer:
            'Share $90 in the ratio 2:3:4. The parts total 9 shares, so one share is $10 and the amounts are $20, $30 ' +
            'and $40. Adding them back to $90 is the check.',
    },
    {
        id: 'maths-example-average-speed',
        subject: 'mathematics',
        question: 'Can you show me a worked example of average speed over two legs?',
        aliases: ['worked example average speed', 'example of average speed for a journey', 'why you cannot average the speeds'],
        answer:
            'Sixty kilometres at 60 km/h takes one hour; the next sixty at 30 km/h takes two. Average speed is total ' +
            'distance over total time: 120 ÷ 3 = 40 km/h, not the 45 that averaging the two speeds would give.',
    },
    {
        id: 'maths-example-monthly-compounding',
        subject: 'mathematics',
        question: 'Can you show me a worked example of monthly compounding?',
        aliases: ['worked example monthly compounding', 'example of compounding monthly', 'interest compounded monthly example'],
        answer:
            'Invest $3,000 at 4.8% a year compounded monthly for 3 years, so i = 0.004 and n = 36. A = 3000(1.004)³⁶ ' +
            '= 3000 × 1.1546 = $3,463.80. Annual compounding at 4.8% would give slightly less, $3,453.',
    },
    {
        id: 'maths-example-straight-line-depreciation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of straight line depreciation?',
        aliases: ['worked example straight line depreciation', 'example of depreciation to a salvage value', 'annual depreciation example'],
        answer:
            'An $18,000 asset is depreciated to a salvage value of $3,000 over 5 years. The annual amount is (18,000 ' +
            '− 3,000) ÷ 5 = $3,000, the same every year, which is what distinguishes it from the reducing balance ' +
            'method.',
    },
    {
        id: 'maths-example-percentile-mark',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a mark from a percentile?',
        aliases: ['worked example percentile mark', 'example of working back from a z score', 'mark at the 90th percentile'],
        answer:
            'For a mean of 65 and standard deviation 10, the 90th percentile sits at about z = 1.28. The mark is 65 + ' +
            '1.28(10) = 77.8. Working from the percentile back to the value is the reverse of the usual z-score ' +
            'calculation.',
    },
    {
        id: 'maths-example-at-least-one',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an at least one probability?',
        aliases: ['worked example at least one', 'example of the complement in probability', 'at least one success example'],
        answer:
            'Four independent trials each succeed with probability 0.3. P(at least one) = 1 − P(none) = 1 − 0.7⁴ = 1 ' +
            '− 0.2401 = 0.76. Adding the separate cases gives the same answer with far more work.',
    },
    {
        id: 'maths-example-with-replacement',
        subject: 'mathematics',
        question: 'Can you show me a worked example of drawing with replacement?',
        aliases: ['worked example with replacement', 'example of two draws with replacement', 'exactly one red example'],
        answer:
            'From 3 red and 2 blue counters, two are drawn with replacement. P(exactly one red) counts both orders: 2 ' +
            '× (3/5)(2/5) = 12/25. Because the counter is replaced, the denominators stay at 5 for both draws.',
    },
];
