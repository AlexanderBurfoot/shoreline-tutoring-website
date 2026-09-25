/**
 * NAPLAN numeracy.
 *
 * The number, measurement, space, statistics and algebra skills tested from
 * Year 3 to Year 9, with the method each question type rewards.
 */
import type { StudyEntry } from '../types';

export const naplanNumeracyEntries: StudyEntry[] = [
    {
        id: 'nap-addition-strategies',
        subject: 'naplan',
        question: 'What are the quickest ways to add mentally?',
        aliases: ['mental addition', 'adding in your head', 'bridging to ten', 'partitioning numbers'],
        answer:
            'Split the numbers into tens and ones and add the tens first, or round one number up and take the extra ' +
            'off at the end. For 48 + 37, add 50 and 37 to get 87, then subtract the 2 you borrowed.',
    },
    {
        id: 'nap-subtraction-strategies',
        subject: 'naplan',
        question: 'What are the quickest ways to subtract mentally?',
        aliases: ['mental subtraction', 'counting up to subtract', 'taking away in your head'],
        answer:
            'Count up from the smaller number to the larger one, which avoids borrowing entirely. For 83 − 67, count ' +
            '3 to 70 and 13 more to 83, giving 16.',
    },
    {
        id: 'nap-multiplication-facts',
        subject: 'naplan',
        question: 'How do I get faster at times tables?',
        aliases: ['multiplication facts', 'learning tables quickly'],
        answer:
            'Learn them in families rather than in order, and use the ones you know to reach the ones you do not: 7 × ' +
            '8 is 7 × 4 doubled. The squares and the nines pattern are worth memorising outright.',
    },
    {
        id: 'nap-long-multiplication',
        subject: 'naplan',
        question: 'How do I multiply larger numbers on paper?',
        aliases: ['long multiplication', 'multiplying two digit numbers', 'setting out multiplication'],
        answer:
            'Split the second number into tens and ones, multiply by each, then add. For 24 × 36, work out 24 × 30 = ' +
            '720 and 24 × 6 = 144, then add to get 864.',
    },
    {
        id: 'nap-division-strategies',
        subject: 'naplan',
        question: 'How do I divide without a calculator?',
        aliases: ['short division', 'dividing on paper', 'remainders in division'],
        answer:
            'Work left to right, asking how many times the divisor fits into each digit and carrying the remainder to ' +
            'the next. Check by multiplying your answer back, which takes seconds and catches most errors.',
    },
    {
        id: 'nap-fraction-equivalents',
        subject: 'naplan',
        question: 'Which fraction, decimal and percentage equivalents should I know?',
        aliases: ['fraction decimal percentage equivalents', 'half as a decimal', 'quarter as a percentage'],
        answer:
            'A half is 0.5 and 50%, a quarter 0.25 and 25%, a fifth 0.2 and 20%, a tenth 0.1 and 10%, a third about ' +
            '0.333 and 33%. Knowing these turns many questions into a single step.',
    },
    {
        id: 'nap-comparing-fractions',
        subject: 'naplan',
        question: 'How do I tell which fraction is larger?',
        aliases: ['comparing fractions', 'which fraction is bigger', 'same numerator different denominator'],
        answer:
            'With the same denominator, the larger numerator wins. With the same numerator, the smaller denominator ' +
            'wins, since the pieces are bigger. Otherwise convert both to the same denominator or compare each with a ' +
            'half.',
    },
    {
        id: 'nap-simplifying-fractions',
        subject: 'naplan',
        question: 'How do I reduce a fraction to its lowest terms?',
        aliases: ['simplifying fractions', 'lowest terms', 'cancelling a fraction down'],
        answer:
            'Divide the top and bottom by the same number until nothing divides both. Looking for the highest common ' +
            'factor does it in one step, but halving repeatedly works too.',
    },
    {
        id: 'nap-fraction-of-a-shape',
        subject: 'naplan',
        question: 'What fraction of a shape is shaded?',
        aliases: ['fraction of a shape shaded', 'shaded part of a diagram', 'equal parts of a shape'],
        answer:
            'Count the equal parts in the whole shape for the denominator and the shaded ones for the numerator. ' +
            'Check the parts really are equal in area, since an unequal split is the usual trick, and simplify at the ' +
            'end.',
    },
    {
        id: 'nap-rounding-rules',
        subject: 'naplan',
        question: 'How do I round numbers correctly?',
        aliases: ['rounding', 'rounding to the nearest ten', 'when to round up'],
        answer:
            'Look at the digit one place to the right of where you are rounding. Five or more rounds up, four or less ' +
            'stays. Rounding 4,850 to the nearest hundred gives 4,900.',
    },
    {
        id: 'nap-number-lines',
        subject: 'naplan',
        question: 'How do I use a number line to answer a question?',
        aliases: ['number line', 'point on a number line', 'reading a scale on a line'],
        answer:
            'Work out what one interval is worth by dividing the labelled gap by the number of spaces, then count. ' +
            'The intervals are often not ones, which is exactly what the question is checking.',
    },
    {
        id: 'nap-word-problem-steps',
        subject: 'naplan',
        question: 'What steps should I follow in a word problem?',
        aliases: ['word problem method', 'what is the question asking', 'choosing the operation'],
        answer:
            'Read it twice, underline the numbers and the question, decide which operation the situation needs, ' +
            'calculate, then check the answer makes sense in the story. An answer of 2.5 buses means something went ' +
            'wrong.',
    },
    {
        id: 'nap-two-step-problems',
        subject: 'naplan',
        question: 'How do I handle a problem with two steps?',
        aliases: ['two step problem', 'more than one operation', 'multi step word problem'],
        answer:
            'Write down the result of the first step before starting the second, so you do not lose it. Most NAPLAN ' +
            'problems that look hard are two easy steps hidden in one sentence.',
    },
    {
        id: 'nap-money-change',
        subject: 'naplan',
        question: 'How do I work out change and totals?',
        aliases: ['working out change', 'total cost of items', 'money word problem'],
        answer:
            'Add the items first, then subtract from what was paid. Count up from the total to the amount handed over ' +
            'if subtracting decimals is awkward: from $13.40 to $20 is 60c then $6.',
    },
    {
        id: 'nap-measuring-length',
        subject: 'naplan',
        question: 'How do I measure and compare lengths?',
        aliases: ['measuring length', 'millimetres centimetres metres', 'comparing lengths'],
        answer:
            'Start from zero on the ruler, not from the end of the plastic. To compare, convert both to the same unit ' +
            'first: 45 cm and 0.5 m are easier to compare as 45 cm and 50 cm.',
    },
    {
        id: 'nap-perimeter-problems',
        subject: 'naplan',
        question: 'How do I find a missing side from the perimeter?',
        aliases: ['missing side from perimeter', 'perimeter working backwards', 'finding a side length'],
        answer:
            'Add the sides you know, subtract from the total perimeter, and if two unknown sides are equal, halve ' +
            'what is left. Drawing the shape and labelling every side prevents counting one twice.',
    },
    {
        id: 'nap-area-counting',
        subject: 'naplan',
        question: 'How do I find area by counting squares?',
        aliases: ['counting squares for area', 'area on a grid', 'half squares'],
        answer:
            'Count the whole squares first, then pair up the part squares, treating two halves as one. Check what one ' +
            'square represents: on a plan it may be 2 metres, so the area is not the number of squares.',
    },
    {
        id: 'nap-mass-and-capacity',
        subject: 'naplan',
        question: 'How do I work with mass and capacity units?',
        aliases: ['grams and kilograms', 'millilitres and litres', 'mass and capacity'],
        answer:
            '1000 g is 1 kg and 1000 mL is 1 L, so multiply when going to the smaller unit and divide when going to ' +
            'the larger. A tonne is 1000 kg. Estimating helps: a small drink bottle is about 600 mL.',
    },
    {
        id: 'nap-temperature',
        subject: 'naplan',
        question: 'How do I read and compare temperatures?',
        aliases: ['temperature question', 'reading a thermometer', 'temperature difference'],
        answer:
            'Check what each mark on the scale is worth before reading. For a difference that crosses zero, count up ' +
            'to zero and then onward: from −3 to 8 degrees is 11 degrees.',
    },
    {
        id: 'nap-clock-reading',
        subject: 'naplan',
        question: 'How do I read analogue and digital time?',
        aliases: ['reading a clock', 'quarter past and to', 'digital and analogue time'],
        answer:
            'The short hand gives the hour, the long hand the minutes, each numbered mark being five minutes. Quarter ' +
            'past is 15 minutes, half past is 30, quarter to is 45 past the previous hour.',
    },
    {
        id: 'nap-24-hour-time',
        subject: 'naplan',
        question: 'How does 24 hour time work?',
        aliases: ['24 hour time', 'converting to am and pm', 'military time'],
        answer:
            'Add 12 to afternoon hours: 3 pm is 1500. After midday subtract 12 to convert back, so 1930 is 7:30 pm. ' +
            'Midnight is 0000 and midday is 1200, which is where most errors happen.',
    },
    {
        id: 'nap-3d-shape-names',
        subject: 'naplan',
        question: 'What are the names and properties of 3D shapes?',
        aliases: ['names of 3d shapes', 'faces edges vertices', 'prism and pyramid difference'],
        answer:
            'Count faces, edges and vertices to identify a solid. A prism has two identical parallel ends and ' +
            'rectangular sides; a pyramid has one base and triangular sides meeting at a point.',
    },
    {
        id: 'nap-2d-shape-properties',
        subject: 'naplan',
        question: 'How do I identify 2D shapes by their properties?',
        aliases: ['properties of 2d shapes', 'quadrilateral names', 'rhombus and parallelogram'],
        answer:
            'Count sides, then check for equal sides, parallel sides and right angles. A rhombus has four equal ' +
            'sides, a rectangle four right angles, and a square both, which is why a square is also a rectangle and a ' +
            'rhombus.',
    },
    {
        id: 'nap-angles-estimating',
        subject: 'naplan',
        question: 'How do I estimate and classify angles?',
        aliases: ['types of angle', 'acute obtuse reflex', 'estimating an angle'],
        answer:
            'Acute is less than 90 degrees, right is exactly 90, obtuse is between 90 and 180, straight is 180, and ' +
            'reflex is more than 180. Compare with the corner of a page to estimate.',
    },
    {
        id: 'nap-grid-references',
        subject: 'naplan',
        question: 'How do I use grid references and directions?',
        aliases: ['grid reference', 'map directions', 'north east south west', 'compass directions'],
        answer:
            'Give the column letter then the row number, and remember north is up unless the map says otherwise. For ' +
            'directions, work out the turn from where the person is facing, not from the page.',
    },
    {
        id: 'nap-chance-language',
        subject: 'naplan',
        question: 'How do I describe chance in words?',
        aliases: ['chance words', 'likely unlikely certain', 'impossible outcome'],
        answer:
            'Impossible, unlikely, even chance, likely and certain, in order from 0 to 1. Equally likely means the ' +
            'same chance, which needs the outcomes to be genuinely the same size, not just two in number.',
    },
    {
        id: 'nap-chance-experiments',
        subject: 'naplan',
        question: 'How do I answer questions about a chance experiment?',
        aliases: ['chance experiment', 'spinner question', 'dice probability question'],
        answer:
            'Count all the equally likely outcomes, then how many give the result you want. On a spinner, the sectors ' +
            'must be equal in size for the count to work, so check the picture rather than the labels.',
    },
    {
        id: 'nap-data-collection',
        subject: 'naplan',
        question: 'How is data collected and displayed?',
        aliases: ['collecting data', 'tally marks', 'frequency table', 'survey question'],
        answer:
            'Tally in groups of five, total into a frequency table, then choose a display: a column graph for ' +
            'categories, a line graph for change over time, and a picture graph where the key tells you what each ' +
            'symbol is worth.',
    },
    {
        id: 'nap-picture-graphs',
        subject: 'naplan',
        question: 'How do I read a picture graph?',
        aliases: ['picture graph', 'pictograph key', 'half a symbol'],
        answer:
            'Read the key first: one symbol may stand for 10, so half a symbol is 5. Multiply the number of symbols ' +
            'by the key value rather than counting symbols as ones.',
    },
    {
        id: 'nap-dot-plots',
        subject: 'naplan',
        question: 'How do I read a dot plot or stem and leaf plot?',
        aliases: ['dot plot', 'stem and leaf plot', 'clusters and outliers'],
        answer:
            'Each dot is one result, so stacked dots show how often a value occurred. In a stem and leaf plot the ' +
            'stem is the tens and each leaf the ones, so 3 | 4 7 means 34 and 37.',
    },
    {
        id: 'nap-comparing-data-sets',
        subject: 'naplan',
        question: 'How do I tell which group did better from a graph?',
        aliases: ['comparing two data sets', 'which group did better', 'comparing two graphs'],
        answer:
            'Compare like with like: the same measure for both, such as the typical value, and then the spread. A ' +
            'group can have a higher total simply because it has more members, so compare averages rather than ' +
            'totals.',
    },
    {
        id: 'nap-patterns-shapes',
        subject: 'naplan',
        question: 'How do I continue a shape pattern?',
        aliases: ['shape pattern', 'growing pattern', 'matchstick pattern'],
        answer:
            'Count the number of items at each stage and find the difference, then check whether the same difference ' +
            'continues. Describing how the pattern grows in words first makes the rule easy to write.',
    },
    {
        id: 'nap-function-machines',
        subject: 'naplan',
        question: 'How do I use a function machine or input and output table?',
        aliases: ['function machine', 'input output table', 'finding the rule from a table'],
        answer:
            'Compare each input with its output and test one operation at a time, then check the rule on every row. ' +
            'Rules with two steps, such as double then add one, are common from Year 7 onward.',
    },
    {
        id: 'nap-algebra-basics',
        subject: 'naplan',
        question: 'What algebra does NAPLAN expect?',
        aliases: ['algebra in naplan', 'using a letter for a number', 'substituting a value'],
        answer:
            'Writing a rule with a letter, substituting a number into it, and solving simple one-step equations. If a ' +
            'pencil costs p dollars, three pencils cost 3p, and if 3p = 12 then p = 4.',
    },
    {
        id: 'nap-number-properties',
        subject: 'naplan',
        question: 'What number properties are tested?',
        aliases: ['odd and even', 'square numbers', 'multiples and factors in naplan'],
        answer:
            'Odd and even behaviour under addition and multiplication, square numbers up to 144, factors, multiples ' +
            'and primes. Even times anything is even, and odd plus odd is even, which answers many questions without ' +
            'calculation.',
    },
    {
        id: 'nap-ordering-numbers',
        subject: 'naplan',
        question: 'How do I order numbers from smallest to largest?',
        aliases: ['ordering numbers', 'smallest to largest', 'ascending and descending order'],
        answer:
            'Compare the number of digits first for whole numbers, then go left to right. For decimals, line up the ' +
            'decimal points and pad with zeros so every number has the same number of places, then compare digit by ' +
            'digit.',
    },
    {
        id: 'nap-integers-context',
        subject: 'naplan',
        question: 'Where do negative numbers appear in NAPLAN?',
        aliases: ['negative numbers in context', 'temperature below zero', 'below sea level'],
        answer:
            'In temperature, elevation, bank balances and on number lines. To find a difference across zero, count up ' +
            'to zero and then on, so −4 to 6 is a difference of 10.',
    },
    {
        id: 'nap-ratio-basics',
        subject: 'naplan',
        question: 'How is ratio tested in NAPLAN?',
        aliases: ['ratio in naplan', 'for every three', 'simplifying a ratio'],
        answer:
            'Usually as a for every statement: three red for every two blue means 5 parts in total, so in 20 counters ' +
            'there are 12 red. Find the value of one part first.',
    },
    {
        id: 'nap-scale-and-enlargement',
        subject: 'naplan',
        question: 'How do I answer scale and enlargement questions?',
        aliases: ['enlargement', 'scale factor', 'doubling a shape'],
        answer:
            'Multiply every length by the scale factor. Note that doubling the lengths multiplies the area by four, ' +
            'which is the point of many of these questions.',
    },
    {
        id: 'nap-calculator-and-non',
        subject: 'naplan',
        question: 'What is the difference between the calculator and non-calculator sections?',
        aliases: ['calculator allowed', 'non calculator section', 'when a calculator is given'],
        answer:
            'Numeracy is split: an early section without a calculator tests mental strategies with friendly numbers, ' +
            'and a later section allows one for untidy figures. In the calculator section, estimate first so you ' +
            'notice a mistyped number.',
    },
    {
        id: 'nap-checking-answers',
        subject: 'naplan',
        question: 'How do I check a numeracy answer quickly?',
        aliases: ['checking an answer', 'estimating to check', 'does the answer make sense'],
        answer:
            'Estimate what the answer should be near, check the units, and read the question again to confirm what ' +
            'was asked. Many marks are lost by answering correctly for a different question.',
    },
];
