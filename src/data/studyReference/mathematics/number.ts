/**
 * Mathematics: number skills, Years 7 to 10.
 *
 * Fractions, decimals, percentages, integers and indices: the arithmetic every
 * later topic assumes.
 */
import type { StudyEntry } from '../types';

export const mathematicsNumberEntries: StudyEntry[] = [
    {
        id: 'maths-order-of-operations',
        subject: 'mathematics',
        question: 'What is the order of operations?',
        aliases: ['order of operations', 'bodmas', 'bidmas', 'brackets first', 'pemdas'],
        answer:
            'Brackets first, then indices, then multiplication and division from left to right, then addition and ' +
            'subtraction from left to right. ' +
            'Multiplication does not outrank division: work left to right between them, and the same for addition ' +
            'and subtraction.',
    },
    {
        id: 'maths-fractions-operations',
        subject: 'mathematics',
        question: 'How do I add, multiply and divide fractions?',
        aliases: ['adding fractions', 'multiplying fractions', 'dividing fractions', 'common denominator', 'reciprocal fraction'],
        answer:
            'To add or subtract, rewrite both with a common denominator, then combine the numerators only. ' +
            'To multiply, multiply the tops and the bottoms. ' +
            'To divide, multiply by the reciprocal: flip the second fraction and multiply. Simplify at the end.',
    },
    {
        id: 'maths-mixed-numbers',
        subject: 'mathematics',
        question: 'How do I convert between mixed numbers and improper fractions?',
        aliases: ['mixed number', 'improper fraction', 'converting fractions', 'whole and a fraction'],
        answer:
            'To make an improper fraction, multiply the whole number by the denominator and add the numerator, ' +
            'keeping the same denominator. ' +
            'To reverse it, divide: the quotient is the whole number and the remainder is the new numerator. ' +
            'Convert to improper form before multiplying or dividing.',
    },
    {
        id: 'maths-decimals-fractions-percentages',
        subject: 'mathematics',
        question: 'How do I convert between fractions, decimals and percentages?',
        aliases: ['fraction to decimal', 'decimal to percentage', 'percentage to fraction', 'converting between forms'],
        answer:
            'Fraction to decimal: divide the top by the bottom. ' +
            'Decimal to percentage: multiply by 100. ' +
            'Percentage to fraction: put it over 100 and simplify. ' +
            'Knowing the common ones by heart, such as 1/4 = 0.25 = 25%, saves time in every topic.',
    },
    {
        id: 'maths-percentage-of',
        subject: 'mathematics',
        question: 'How do I find a percentage of an amount?',
        aliases: ['percentage of an amount', 'finding a percentage', 'discount', 'percentage increase amount'],
        answer:
            'Convert the percentage to a decimal and multiply: 15% of 80 is 0.15 × 80 = 12. ' +
            'To increase by 15%, multiply by 1.15; to decrease, multiply by 0.85. ' +
            'To find the original before an increase, divide rather than multiply.',
    },
    {
        id: 'maths-integers',
        subject: 'mathematics',
        question: 'How do I work with negative numbers?',
        aliases: ['negative numbers', 'integers', 'subtracting a negative', 'multiplying negatives'],
        answer:
            'Subtracting a negative is the same as adding, so 5 − (−3) = 8. ' +
            'Two negatives multiplied or divided give a positive; one negative gives a negative. ' +
            'A number line helps for addition and subtraction: to the right for adding, to the left for subtracting.',
    },
    {
        id: 'maths-rounding-estimation',
        subject: 'mathematics',
        question: 'How do I round and estimate?',
        aliases: ['rounding', 'significant figures junior', 'decimal places', 'estimating an answer', 'approximation'],
        answer:
            'Look at the digit after the place you are rounding to: 5 or more rounds up, less rounds down. ' +
            'Significant figures count from the first non-zero digit. ' +
            'Estimate by rounding each number to one significant figure first, which is a quick check that an answer ' +
            'is sensible.',
    },
    {
        id: 'maths-index-notation',
        subject: 'mathematics',
        question: 'What is index notation?',
        aliases: ['index notation', 'powers', 'squared cubed', 'base and exponent', 'index form'],
        answer:
            'A power shows repeated multiplication: 2⁵ means 2 × 2 × 2 × 2 × 2 = 32, where 2 is the base and 5 the ' +
            'index. ' +
            'Squaring is the index 2 and cubing is 3. ' +
            'The square root undoes squaring, and the cube root undoes cubing.',
    },
    {
        id: 'maths-prime-factors',
        subject: 'mathematics',
        question: 'How do I find prime factors, HCF and LCM?',
        aliases: ['prime factors', 'factor tree', 'highest common factor', 'lowest common multiple', 'hcf lcm'],
        answer:
            'Break the number down with a factor tree until every branch is prime, then write it in index form. ' +
            'The highest common factor takes the lowest power of each shared prime; the lowest common multiple takes ' +
            'the highest power of every prime that appears.',
    },
    {
        id: 'maths-ratio-sharing',
        subject: 'mathematics',
        question: 'How do I divide an amount in a given ratio?',
        aliases: ['sharing in a ratio', 'dividing in a ratio', 'ratio problems', 'parts of a ratio'],
        answer:
            'Add the parts to find the total number of shares, divide the amount by that to get one share, then ' +
            'multiply by each part. ' +
            'Sharing $60 in the ratio 2:3 means five shares of $12, so $24 and $36. Check the parts add back to the ' +
            'original.',
    },
    {
        id: 'maths-best-buy',
        subject: 'mathematics',
        question: 'How do I work out the best buy?',
        aliases: ['best buy', 'unit price', 'value for money', 'comparing prices', 'cost per unit'],
        answer:
            'Find the price per unit for each option by dividing cost by quantity, then compare. ' +
            'Use the same unit for both, such as dollars per 100 g. ' +
            'The larger pack is not always cheaper per unit, which is the point of the question.',
    },
    {
        id: 'maths-speed-distance-time',
        subject: 'mathematics',
        question: 'How do I use the speed, distance and time formula?',
        aliases: ['speed distance time', 'average speed', 'distance formula time', 'travel graphs', 'km per hour'],
        answer:
            'Speed = distance ÷ time, and rearranging gives distance = speed × time and time = distance ÷ speed. ' +
            'Keep the units consistent: minutes must become hours before using km/h. ' +
            'On a distance-time graph, the gradient is the speed and a flat section means stopped.',
    },
    {
        id: 'maths-time-calculations',
        subject: 'mathematics',
        question: 'How do I calculate with time?',
        aliases: ['time calculations', '24 hour time', 'adding times', 'timetables', 'duration'],
        answer:
            'Time is in base 60, so 90 minutes is 1 hour 30 minutes, not 1.9 hours. ' +
            'To convert minutes to a decimal of an hour, divide by 60. ' +
            'For durations that cross midday or midnight, count to the hour first, then add the remaining minutes.',
    },
    {
        id: 'maths-scientific-calculator',
        subject: 'mathematics',
        question: 'How do I avoid calculator mistakes?',
        aliases: ['calculator tips', 'brackets on a calculator', 'fraction key', 'common calculator errors'],
        answer:
            'Put brackets around any whole numerator or denominator, since the calculator follows order of ' +
            'operations rather than the layout you see on paper. ' +
            'Check the angle mode before trigonometry. ' +
            'Keep full accuracy in memory and round only the final answer.',
    },
];
