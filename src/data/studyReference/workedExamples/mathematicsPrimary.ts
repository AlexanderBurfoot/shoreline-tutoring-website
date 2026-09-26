/**
 * Worked examples: primary and junior secondary mathematics.
 *
 * The arithmetic and early algebra a student meets between Year 3 and Year 9,
 * each solved with the numbers shown and checked. Written by hand and shown
 * exactly as written, so the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleMathsPrimaryEntries: StudyEntry[] = [
    {
        id: 'maths-example-long-multiplication',
        subject: 'mathematics',
        question: 'Can you show me a worked example of long multiplication?',
        aliases: ['worked example long multiplication', 'example of multiplying two large numbers', 'multiplying by a two digit number example'],
        answer:
            'Work out 46 × 23. Split the 23 into 20 and 3: 46 × 20 = 920 and 46 × 3 = 138. Add them: 920 + 138 = ' +
            '1058. Splitting one factor into tens and ones is the same as the vertical method and is easier to check.',
    },
    {
        id: 'maths-example-long-division',
        subject: 'mathematics',
        question: 'Can you show me a worked example of long division?',
        aliases: ['worked example long division', 'example of dividing by a two digit number', 'long division method example'],
        answer:
            'Work out 754 ÷ 8. Take it in parts: 8 goes into 75 nine times with 3 left, so bring down the 4 to make ' +
            '34, and 8 goes into 34 four times with 2 left. The answer is 94 remainder 2. Check by multiplying back: 94 ' +
            '× 8 = 752, plus 2 gives 754.',
    },
    {
        id: 'maths-example-multiplying-decimals',
        subject: 'mathematics',
        question: 'Can you show me a worked example of multiplying decimals?',
        aliases: ['worked example multiplying decimals', 'example of a decimal multiplication', 'where does the decimal point go example'],
        answer:
            'Work out 0.4 × 0.3. Ignore the points and multiply the digits: 4 × 3 = 12. Then count the decimal places ' +
            'in the question, which is two, so the answer has two: 0.12. The answer is smaller than both numbers, ' +
            'which is normal when multiplying by less than one.',
    },
    {
        id: 'maths-example-dividing-decimals',
        subject: 'mathematics',
        question: 'Can you show me a worked example of dividing by a decimal?',
        aliases: ['worked example dividing by a decimal', 'example of decimal division', 'moving the decimal point to divide example'],
        answer:
            'Work out 6 ÷ 0.2. Make the divisor whole by multiplying both numbers by 10: 60 ÷ 2 = 30. The answer is ' +
            'bigger than 6, which makes sense because you are asking how many lots of 0.2 fit into 6.',
    },
    {
        id: 'maths-example-multiplying-fractions',
        subject: 'mathematics',
        question: 'Can you show me a worked example of multiplying fractions?',
        aliases: ['worked example multiplying fractions', 'example of a fraction times a fraction', 'multiply tops and bottoms example'],
        answer:
            'Work out 2/3 × 3/4. Multiply the tops and the bottoms: 2 × 3 = 6 and 3 × 4 = 12, giving 6/12, which ' +
            'simplifies to 1/2. Cancelling the 3s before multiplying gets there in one step and keeps the numbers ' +
            'small.',
    },
    {
        id: 'maths-example-dividing-fractions',
        subject: 'mathematics',
        question: 'Can you show me a worked example of dividing fractions?',
        aliases: ['worked example dividing fractions', 'example of a fraction divided by a fraction', 'flip and multiply example'],
        answer:
            'Work out 3/4 ÷ 2/5. Turn the second fraction upside down and multiply: 3/4 × 5/2 = 15/8, which is 1 and ' +
            '7/8. Dividing by a fraction less than one gives a bigger answer, which is the check to run.',
    },
    {
        id: 'maths-example-mixed-numbers',
        subject: 'mathematics',
        question: 'Can you show me a worked example of adding mixed numbers?',
        aliases: ['worked example adding mixed numbers', 'example of adding whole numbers and fractions', 'mixed number addition example'],
        answer:
            'Work out 2 1/3 + 1 1/2. Add the wholes: 2 + 1 = 3. Add the fractions with a common bottom: 1/3 is 2/6 and ' +
            '1/2 is 3/6, so together 5/6. The answer is 3 and 5/6. When the fractions pass 1, carry the extra whole ' +
            'across.',
    },
    {
        id: 'maths-example-percentage-to-fraction',
        subject: 'mathematics',
        question: 'Can you show me a worked example of converting between fractions, decimals and percentages?',
        aliases: ['worked example fraction decimal percentage', 'example of converting a percentage', 'changing between forms example'],
        answer:
            'Write 35% as a decimal and a fraction. Divide by 100 for the decimal: 0.35. For the fraction put it over ' +
            '100 and simplify: 35/100 becomes 7/20. Going back the other way, multiply the decimal by 100 to return ' +
            'to the percentage.',
    },
    {
        id: 'maths-example-percentage-of-a-total',
        subject: 'mathematics',
        question: 'Can you show me a worked example of expressing one number as a percentage of another?',
        aliases: ['worked example one number as a percentage of another', 'example of what percentage is this', 'mark out of a total as a percentage example'],
        answer:
            'A student scores 18 out of 24. Make a fraction, then multiply by 100: 18 ÷ 24 = 0.75, and 0.75 × 100 = ' +
            '75%. Putting the numbers the other way round would give 133%, which is the sign the fraction was ' +
            'inverted.',
    },
    {
        id: 'maths-example-integers-subtraction',
        subject: 'mathematics',
        question: 'Can you show me a worked example of subtracting a negative number?',
        aliases: ['worked example subtracting a negative', 'example of two minus signs together', 'minus a negative example'],
        answer:
            'Work out 5 − (−3). Subtracting a negative is the same as adding, so 5 + 3 = 8. Two signs beside each ' +
            'other combine: two the same make a plus, two different make a minus. So 5 + (−3) would be 2.',
    },
    {
        id: 'maths-example-order-of-operations-brackets',
        subject: 'mathematics',
        question: 'Can you show me a worked example of order of operations with brackets and powers?',
        aliases: ['worked example order of operations with brackets', 'example of bodmas with powers', 'brackets then indices example'],
        answer:
            'Work out 3 + 2 × (7 − 4)². Brackets first: 7 − 4 = 3. Then the power: 3² = 9. Then the multiplication: 2 ' +
            '× 9 = 18. Then the addition: 3 + 18 = 21. Doing the addition first would give a different answer, which ' +
            'is what the question is checking.',
    },
    {
        id: 'maths-example-collecting-like-terms',
        subject: 'mathematics',
        question: 'Can you show me a worked example of collecting like terms?',
        aliases: ['worked example collecting like terms', 'example of simplifying an expression', 'adding algebra terms example'],
        answer:
            'Simplify 5a + 3b − 2a + b. Group the same letters: 5a − 2a = 3a, and 3b + b = 4b, giving 3a + 4b. Terms ' +
            'with different letters cannot be combined, so 3a + 4b will not simplify to 7ab.',
    },
    {
        id: 'maths-example-expanding-brackets',
        subject: 'mathematics',
        question: 'Can you show me a worked example of expanding brackets?',
        aliases: ['worked example expanding brackets', 'example of multiplying out a bracket', 'expand and simplify example'],
        answer:
            'Expand 3(2x − 5) + 4x. Multiply everything inside by the 3: 6x − 15. Then add the 4x: 10x − 15. ' +
            'Forgetting to multiply the second term, and writing 6x − 5, is the most common slip.',
    },
    {
        id: 'maths-example-expanding-two-brackets',
        subject: 'mathematics',
        question: 'Can you show me a worked example of expanding two brackets?',
        aliases: ['worked example expanding two brackets', 'example of multiplying two brackets', 'foil method example'],
        answer:
            'Expand (x + 3)(x − 5). Multiply each term in the first by each in the second: x², then −5x, then 3x, then ' +
            '−15. Collect the middle terms: x² − 2x − 15. Four products always come first, then the collecting.',
    },
    {
        id: 'maths-example-factorising-common-factor',
        subject: 'mathematics',
        question: 'Can you show me a worked example of factorising with a common factor?',
        aliases: ['worked example common factor', 'example of taking out a common factor', 'factorising an expression example'],
        answer:
            'Factorise 12x + 18. The largest number dividing both is 6, so take it out: 6(2x + 3). Check by expanding ' +
            'back: 6 × 2x = 12x and 6 × 3 = 18. Always take the largest common factor, since 2(6x + 9) is not fully ' +
            'factorised.',
    },
    {
        id: 'maths-example-solving-with-fractions',
        subject: 'mathematics',
        question: 'Can you show me a worked example of solving an equation with a fraction?',
        aliases: ['worked example equation with a fraction', 'example of solving when x is over a number', 'fraction equation example'],
        answer:
            'Solve x/3 + 2 = 7. Subtract the 2 first: x/3 = 5. Then multiply both sides by 3: x = 15. Check by putting ' +
            'it back: 15 ÷ 3 + 2 = 7.',
    },
    {
        id: 'maths-example-equation-both-sides',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an equation with the unknown on both sides?',
        aliases: ['worked example unknown on both sides', 'example of x on both sides', 'equation with letters on each side example'],
        answer:
            'Solve 5x − 4 = 2x + 11. Move the smaller letter term across: 5x − 2x = 3x, so 3x − 4 = 11. Then 3x = 15 ' +
            'and x = 5. Check both sides separately: 5 × 5 − 4 = 21 and 2 × 5 + 11 = 21.',
    },
    {
        id: 'maths-example-inequality',
        subject: 'mathematics',
        question: 'Can you show me a worked example of solving an inequality?',
        aliases: ['worked example solving an inequality', 'example of an inequality question', 'when to flip the inequality sign example'],
        answer:
            'Solve −2x + 1 < 7. Subtract 1: −2x < 6. Now divide by −2, and because the number is negative the sign ' +
            'turns round: x > −3. Dividing by a negative without flipping the sign is the one error that matters here.',
    },
    {
        id: 'maths-example-substitution-two-values',
        subject: 'mathematics',
        question: 'Can you show me a worked example of substituting two values into an expression?',
        aliases: ['worked example substituting two values', 'example of substituting a and b', 'evaluate the expression example'],
        answer:
            'Find 2a² − 3b when a = 4 and b = 5. Do the power before the multiplication: 4² = 16, then 2 × 16 = 32. ' +
            'Next 3 × 5 = 15, so the answer is 32 − 15 = 17. Squaring after multiplying would give 64, which is the ' +
            'usual mistake.',
    },
    {
        id: 'maths-example-index-laws-junior',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the index laws at junior level?',
        aliases: ['worked example index laws junior', 'example of adding powers', 'multiplying powers of the same base example'],
        answer:
            'Simplify x⁵ × x³ ÷ x². Multiplying adds the powers: 5 + 3 = 8, giving x⁸. Dividing subtracts: 8 − 2 = 6, ' +
            'so the answer is x⁶. The laws only apply when the base is the same, so x³ × y² will not combine.',
    },
    {
        id: 'maths-example-gradient-from-two-points',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a gradient from two points?',
        aliases: ['worked example gradient from two points', 'example of finding the slope', 'rise over run example'],
        answer:
            'Find the gradient through (2, 3) and (6, 11). Gradient is the change in height over the change across: ' +
            '11 − 3 = 8 and 6 − 2 = 4, so the gradient is 8 ÷ 4 = 2. Take the points in the same order top and ' +
            'bottom, or the sign comes out wrong.',
    },
    {
        id: 'maths-example-straight-line-equation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding the equation of a straight line?',
        aliases: ['worked example equation of a line', 'example of y equals mx plus b', 'finding the line through two points example'],
        answer:
            'A line has gradient 3 and passes through (0, −4). Since it crosses the vertical axis at −4, the equation ' +
            'is y = 3x − 4. If the given point were not on the axis, substitute it into y = 3x + b and solve for b.',
    },
    {
        id: 'maths-example-midpoint',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a midpoint?',
        aliases: ['worked example midpoint', 'example of the middle of two points', 'midpoint of an interval example'],
        answer:
            'Find the midpoint of (1, 4) and (7, 10). Average each coordinate separately: 1 + 7 = 8, then 8 ÷ 2 = 4, ' +
            'and 4 + 10 = 14, then 14 ÷ 2 = 7. The midpoint is (4, 7), and it should look halfway along when plotted.',
    },
    {
        id: 'maths-example-distance-between-points',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the distance between two points?',
        aliases: ['worked example distance between two points', 'example of finding a length on a grid', 'distance formula example'],
        answer:
            'Find the distance from (1, 2) to (4, 6). The across change is 3 and the up change is 4, so use ' +
            'Pythagoras: 3² + 4² = 9 + 16 = 25, and the square root of 25 is 5. The distance is 5 units.',
    },
    {
        id: 'maths-example-area-of-a-circle',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the area of a circle?',
        aliases: ['worked example area of a circle', 'example of pi r squared', 'circle area from the radius example'],
        answer:
            'A circle has radius 7 cm. Area is π times the radius squared: 7² = 49, then 49 × 3.14 = 153.9 cm², which ' +
            'rounds to 154 cm². If the question gives the diameter, halve it first, since using the diameter would ' +
            'make the answer four times too large.',
    },
    {
        id: 'maths-example-circumference',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the circumference of a circle?',
        aliases: ['worked example circumference', 'example of the distance around a circle', 'circumference from the diameter example'],
        answer:
            'A wheel has diameter 60 cm. The circumference is π times the diameter: 60 × 3.14 = 188.4 cm. So one turn ' +
            'moves the wheel about 1.88 m, and ten turns move it about 18.8 m.',
    },
    {
        id: 'maths-example-area-of-a-trapezium',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the area of a trapezium?',
        aliases: ['worked example area of a trapezium', 'example of a trapezium area question', 'parallel sides area example'],
        answer:
            'A trapezium has parallel sides 8 cm and 12 cm, and height 5 cm. Average the parallel sides and multiply ' +
            'by the height: 8 + 12 = 20, then 20 ÷ 2 = 10, then 10 × 5 = 50 cm². Only the perpendicular height may be ' +
            'used.',
    },
    {
        id: 'maths-example-surface-area-prism',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the surface area of a prism?',
        aliases: ['worked example surface area of a prism', 'example of surface area of a box', 'total surface area example'],
        answer:
            'A box is 5 cm by 3 cm by 2 cm. The faces come in pairs: 5 × 3 = 15, 5 × 2 = 10 and 3 × 2 = 6, so one of ' +
            'each is 31 cm², and doubling gives 62 cm². Counting the pairs stops a face being missed.',
    },
    {
        id: 'maths-example-volume-cylinder-junior',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the volume of a cylinder?',
        aliases: ['worked example volume of a cylinder', 'example of a cylinder volume question', 'volume of a can example'],
        answer:
            'A can has radius 4 cm and height 10 cm. Find the circular area, then multiply by the height: 4² = 16, ' +
            'then 16 × 3.14 = 50.24 cm², then 50.24 × 10 = 502.4 cm³. Since 1 cm³ is 1 mL, that is about 502 mL.',
    },
    {
        id: 'maths-example-angles-parallel-lines',
        subject: 'mathematics',
        question: 'Can you show me a worked example of angles in parallel lines?',
        aliases: ['worked example angles in parallel lines', 'example of alternate angles', 'co-interior angles example'],
        answer:
            'A transversal crosses two parallel lines and one angle is 115°. The angle in the matching position is ' +
            'also 115° because corresponding angles are equal. The angle beside it is 180 − 115 = 65°, and the ' +
            'co-interior angle is 65° too, since co-interior angles add to 180°.',
    },
    {
        id: 'maths-example-angle-sum-polygon',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the angle sum of a polygon?',
        aliases: ['worked example angle sum of a polygon', 'example of interior angles of a hexagon', 'polygon angle sum example'],
        answer:
            'Find the angle sum of a hexagon. Split it into triangles from one corner: a hexagon gives 4 triangles, ' +
            'and each holds 180°, so 4 × 180 = 720°. In a regular hexagon each angle is then 720 ÷ 6 = 120°.',
    },
    {
        id: 'maths-example-similar-triangles',
        subject: 'mathematics',
        question: 'Can you show me a worked example of similar triangles?',
        aliases: ['worked example similar triangles', 'example of finding a side in similar triangles', 'scale factor of triangles example'],
        answer:
            'Two similar triangles have matching sides 6 cm and 9 cm, and the smaller has another side of 4 cm. The ' +
            'scale factor is 9 ÷ 6 = 1.5, so the matching side is 4 × 1.5 = 6 cm. Pair the sides opposite equal ' +
            'angles, not simply the sides that look alike.',
    },
    {
        id: 'maths-example-scale-factor-area',
        subject: 'mathematics',
        question: 'Can you show me a worked example of how area changes when a shape is enlarged?',
        aliases: ['worked example area scale factor', 'example of enlarging a shape and its area', 'area when lengths double example'],
        answer:
            'A shape with area 12 cm² is enlarged so its lengths double. Area grows by the square of the length ' +
            'factor, so 2² = 4, and the new area is 12 × 4 = 48 cm². Volume grows by the cube, so it would be eight ' +
            'times larger.',
    },
    {
        id: 'maths-example-time-calculation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of adding times in hours and minutes?',
        aliases: ['worked example adding times', 'example of adding hours and minutes', 'total time worked example'],
        answer:
            'Add 2 h 45 min and 1 h 35 min. Add the hours and minutes separately: 3 hours and 80 minutes. Since 80 ' +
            'minutes is 1 h 20 min, the total is 4 h 20 min. Times carry at 60, not at 100, which is the trap when ' +
            'using a calculator.',
    },
    {
        id: 'maths-example-speed-distance-time-junior',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a distance from a speed?',
        aliases: ['worked example distance from speed', 'example of speed times time', 'how far did it travel example'],
        answer:
            'A car travels at 80 km/h for 45 minutes. Turn the time into hours first: 45 minutes is 0.75 hours. Then ' +
            'distance is speed times time: 80 × 0.75 = 60 km. Using 45 instead of 0.75 would give an impossible ' +
            'answer.',
    },
    {
        id: 'maths-example-simple-interest',
        subject: 'mathematics',
        question: 'Can you show me a worked example of simple interest?',
        aliases: ['worked example simple interest', 'example of simple interest calculation', 'interest on a loan example junior'],
        answer:
            'Find the simple interest on $2000 at 4% a year for 3 years. One year of interest is 2000 × 0.04 = $80, ' +
            'and simple interest does not compound, so three years is 80 × 3 = $240. The total owed is 2000 + 240 = ' +
            '$2240.',
    },
    {
        id: 'maths-example-ratio-to-percentage',
        subject: 'mathematics',
        question: 'Can you show me a worked example of turning a ratio into a percentage?',
        aliases: ['worked example ratio to percentage', 'example of a ratio as a percentage', 'what share of the total example'],
        answer:
            'A mix is in the ratio 2:3. The total is 2 + 3 = 5 parts, so the first share is 2 out of 5, which is 2 ÷ 5 ' +
            '= 0.4, or 40%. The second is 60%, and the two must add to 100%.',
    },
    {
        id: 'maths-example-unitary-method',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the unitary method?',
        aliases: ['worked example unitary method', 'example of finding the cost of one then many', 'work out one first example'],
        answer:
            'If 7 pens cost $8.40, what do 12 cost? Find one first: 8.40 ÷ 7 = $1.20. Then multiply up: 1.20 × 12 = ' +
            '$14.40. Going through one item works whatever the numbers, which is why it is worth the extra line.',
    },
    {
        id: 'maths-example-stem-and-leaf',
        subject: 'mathematics',
        question: 'Can you show me a worked example of reading a stem and leaf plot?',
        aliases: ['worked example stem and leaf', 'example of a stem and leaf plot', 'reading a stem plot example'],
        answer:
            'A stem of 3 with leaves 2, 5 and 7 means the values 32, 35 and 37. Count the leaves to find how many ' +
            'values there are, then read the middle one for the median. The plot keeps the actual values, which a ' +
            'histogram does not.',
    },
    {
        id: 'maths-example-frequency-table-mean',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the mean from a frequency table?',
        aliases: ['worked example mean from a frequency table', 'example of an average from grouped data', 'frequency table mean example'],
        answer:
            'Scores of 1, 2 and 3 occur 4, 5 and 1 times. Multiply each score by its frequency and add: 1 × 4 = 4, 2 ' +
            '× 5 = 10 and 3 × 1 = 3, giving 17. Divide by the total frequency: 17 ÷ 10 = 1.7. Dividing by 3 instead ' +
            'of 10 is the usual error.',
    },
    {
        id: 'maths-example-range-and-spread',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding the range?',
        aliases: ['worked example range', 'example of the spread of a data set', 'highest minus lowest example'],
        answer:
            'For 12, 15, 15, 19, 27 the range is the highest minus the lowest: 27 − 12 = 15. The range uses only two ' +
            'values, so one unusual result changes it completely, which is why the interquartile range is often ' +
            'preferred.',
    },
    {
        id: 'maths-example-two-dice-outcomes',
        subject: 'mathematics',
        question: 'Can you show me a worked example of probability with two dice?',
        aliases: ['worked example two dice probability', 'example of a sample space for two dice', 'chance of a total of 7 example'],
        answer:
            'Two dice are rolled. There are 6 × 6 = 36 equally likely outcomes. A total of 7 happens six ways, from 1 ' +
            'and 6 through to 6 and 1, so the probability is 6 out of 36, which is 1/6. List or tabulate the outcomes ' +
            'before counting.',
    },
    {
        id: 'maths-example-complementary-probability',
        subject: 'mathematics',
        question: 'Can you show me a worked example of complementary probability?',
        aliases: ['worked example complementary probability', 'example of one minus the probability', 'probability of not happening example'],
        answer:
            'If the chance of rain is 0.3, the chance of no rain is 1 − 0.3 = 0.7. Probabilities of an event and its ' +
            'opposite always add to 1, which makes at least one questions much quicker when you work out none first.',
    },
    {
        id: 'maths-example-pie-chart',
        subject: 'mathematics',
        question: 'Can you show me a worked example of reading a pie chart?',
        aliases: ['worked example pie chart', 'example of a sector graph question', 'angle in a pie chart example'],
        answer:
            'A sector of a pie chart is 90° and the whole survey had 200 people. A right angle is a quarter of 360°, ' +
            'so the sector is 200 ÷ 4 = 50 people. To go the other way, a group of 25 out of 200 would need 25 ÷ 200 ' +
            '× 360 = 45°.',
    },
    {
        id: 'maths-example-estimating-square-root',
        subject: 'mathematics',
        question: 'Can you show me a worked example of estimating a square root?',
        aliases: ['worked example estimating a square root', 'example of a square root between two numbers', 'root 50 estimate example'],
        answer:
            'Estimate the square root of 50. The nearest square numbers are 49 and 64, whose roots are 7 and 8, and 50 ' +
            'is just above 49, so the root is a little over 7. To one decimal place it is 7.1, since 7.1 × 7.1 = ' +
            '50.41.',
    },
    {
        id: 'maths-example-prime-factorisation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of prime factorisation?',
        aliases: ['worked example prime factorisation', 'example of writing a number as primes', 'prime factor tree example'],
        answer:
            'Write 180 as a product of primes. Divide by the smallest primes in turn: 180 ÷ 2 = 90, 90 ÷ 2 = 45, 45 ÷ ' +
            '3 = 15, 15 ÷ 3 = 5. So 180 = 2² × 3² × 5. Check by multiplying back: 4 × 9 = 36, then 36 × 5 = 180.',
    },
    {
        id: 'maths-example-hcf-and-lcm',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding the highest common factor and lowest common multiple?',
        aliases: ['worked example hcf and lcm', 'example of highest common factor', 'lowest common multiple example'],
        answer:
            'For 12 and 18, write them as primes: 12 = 2² × 3 and 18 = 2 × 3². For the highest common factor take the ' +
            'lower power of each shared prime: 2 × 3 = 6. For the lowest common multiple take the higher power: 4 × 9 ' +
            '= 36.',
    },
];
