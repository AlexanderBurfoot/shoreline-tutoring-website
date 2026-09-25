/**
 * Selective High School Placement Test: mathematical reasoning.
 *
 * The number, measurement, space and data skills the paper assumes, each with
 * the method that gets it done inside the time allowed.
 */
import type { StudyEntry } from '../types';

export const selectiveReasoningEntries: StudyEntry[] = [
    {
        id: 'sel-adding-fractions',
        subject: 'selective-high-school',
        question: 'How do I add and subtract fractions in the test?',
        aliases: ['adding fractions in the selective test', 'subtracting fractions quickly', 'common denominator shortcut'],
        answer:
            'Find the lowest common denominator, convert both, then add or subtract the numerators only. For two ' +
            'unlike denominators the product always works even if it is not lowest, and simplifying at the end is ' +
            'faster than hunting for the smallest denominator first.',
    },
    {
        id: 'sel-multiplying-fractions',
        subject: 'selective-high-school',
        question: 'How do I multiply and divide fractions under time pressure?',
        aliases: ['multiplying fractions', 'dividing fractions', 'flip and multiply', 'cancelling before multiplying'],
        answer:
            'Multiply numerators and denominators straight across, cancelling common factors first to keep the ' +
            'numbers small. To divide, flip the second fraction and multiply. Convert mixed numbers to improper ' +
            'fractions before starting.',
    },
    {
        id: 'sel-fraction-of-quantity',
        subject: 'selective-high-school',
        question: 'How do I find a fraction of a quantity?',
        aliases: ['fraction of an amount', 'two thirds of a number', 'fraction of a group'],
        answer:
            'Divide by the denominator, then multiply by the numerator: two thirds of 45 is 45 ÷ 3 × 2 = 30. Doing ' +
            'the division first keeps the numbers small enough to hold in your head.',
    },
    {
        id: 'sel-percentage-of-amount',
        subject: 'selective-high-school',
        question: 'How do I find a percentage of an amount without a calculator?',
        aliases: ['percentage of an amount', 'ten per cent trick', 'mental percentages'],
        answer:
            'Build it from 10% and 1%. Ten per cent is the number with the decimal point moved one place left, 5% is ' +
            'half of that, and 1% is two places. So 35% is 10% three times plus half of 10%.',
    },
    {
        id: 'sel-percentage-change',
        subject: 'selective-high-school',
        question: 'How do I calculate a percentage increase or decrease?',
        aliases: ['percentage increase', 'percentage decrease', 'percentage change formula', 'discount calculation'],
        answer:
            'Divide the change by the original amount, then multiply by 100. The original is always the denominator, ' +
            'which is why a rise from 40 to 50 is 25% but the fall back from 50 to 40 is only 20%.',
    },
    {
        id: 'sel-ratio-sharing',
        subject: 'selective-high-school',
        question: 'How do I share an amount in a given ratio?',
        aliases: ['sharing in a ratio', 'dividing in the ratio', 'total parts method'],
        answer:
            'Add the parts to get the total number of shares, divide the amount by that, then multiply by each part. ' +
            'Sharing $60 in the ratio 2:3 gives five shares of $12, so $24 and $36.',
    },
    {
        id: 'sel-ratio-problems',
        subject: 'selective-high-school',
        question: 'How do I handle a ratio when only one part is given?',
        aliases: ['ratio with one part known', 'scaling a ratio up', 'equivalent ratios'],
        answer:
            'Work out what one share is worth, then multiply for whatever the question asks. If the ratio is 3:5 and ' +
            'the smaller part is 12, one share is 4, so the larger part is 20 and the total is 32.',
    },
    {
        id: 'sel-unit-price',
        subject: 'selective-high-school',
        question: 'How do I compare which item is better value?',
        aliases: ['unit price', 'best value comparison', 'price per hundred grams'],
        answer:
            'Bring both to the same unit: price per gram, per litre or per item. Divide the price by the quantity for ' +
            'each, then compare. The larger pack is not automatically cheaper per unit, which is exactly what these ' +
            'questions test.',
    },
    {
        id: 'sel-speed-distance-time',
        subject: 'selective-high-school',
        question: 'How do I do speed, distance and time questions?',
        aliases: ['speed distance time', 'average speed problem', 'how long will the journey take'],
        answer:
            'Speed = distance ÷ time, and rearranging gives distance = speed × time and time = distance ÷ speed. ' +
            'Check that the units match before dividing: minutes and hours mixed together is the most common error.',
    },
    {
        id: 'sel-average-problems',
        subject: 'selective-high-school',
        question: 'How do I work with averages?',
        aliases: ['average problems', 'finding a missing score', 'mean of a set'],
        answer:
            'The mean is the total divided by how many there are, so the total is the mean times the count. To find a ' +
            'missing score, work out the total you need, then subtract the scores you already have.',
    },
    {
        id: 'sel-working-backwards',
        subject: 'selective-high-school',
        question: 'How do I solve a working backwards problem?',
        aliases: ['working backwards', 'reverse the operations', 'i think of a number'],
        answer:
            'Start from the final value and undo each step in reverse order, swapping each operation for its ' +
            'opposite. If the answer came from doubling then adding 5, undo by subtracting 5 then halving.',
    },
    {
        id: 'sel-number-patterns',
        subject: 'selective-high-school',
        question: 'How do I work out what a number pattern is doing?',
        aliases: ['number pattern rule', 'finding the next term', 'difference between terms'],
        answer:
            'Look at the differences first. A constant difference means the rule adds the same amount each time; a ' +
            'doubling or halving pattern means it multiplies. If the differences themselves form a pattern, the rule ' +
            'involves squares.',
    },
    {
        id: 'sel-nth-term',
        subject: 'selective-high-school',
        question: 'How do I find the value of a distant term in a pattern?',
        aliases: ['hundredth term', 'rule for any term', 'position to term rule'],
        answer:
            'Write the rule in terms of the position: if the pattern adds 4 each time and starts at 7, the nth term ' +
            'is 4n + 3. Test it on a term you already know before using it for the hundredth.',
    },
    {
        id: 'sel-divisibility-rules',
        subject: 'selective-high-school',
        question: 'What are the divisibility rules?',
        aliases: ['divisibility rules', 'divisible by 3', 'divisible by 9', 'divisible by 4'],
        answer:
            'A number divides by 2 if it ends in an even digit, by 5 if it ends in 0 or 5, by 3 or 9 if its digits ' +
            'sum to a multiple of 3 or 9, by 4 if the last two digits do, and by 6 if it passes both the 2 and 3 ' +
            'tests.',
    },
    {
        id: 'sel-factors-multiples',
        subject: 'selective-high-school',
        question: 'What is the difference between HCF and LCM?',
        aliases: ['highest common factor', 'lowest common multiple', 'hcf and lcm'],
        answer:
            'The HCF is the largest number that divides both, useful for simplifying and for sharing into equal ' +
            'groups. The LCM is the smallest number both divide into, useful for when two repeating events next ' +
            'coincide.',
    },
    {
        id: 'sel-prime-numbers',
        subject: 'selective-high-school',
        question: 'How do I test whether a number is prime?',
        aliases: ['prime number test', 'is it prime', 'prime factorisation'],
        answer:
            'Try dividing by each prime up to the square root: 2, 3, 5, 7, 11 and so on. If none divides it, it is ' +
            'prime. For 91 you only need to test up to 9, and 7 divides it, so it is not prime.',
    },
    {
        id: 'sel-order-of-operations',
        subject: 'selective-high-school',
        question: 'What catches students out in order of operations questions?',
        aliases: ['order of operations', 'brackets first', 'which operation comes first'],
        answer:
            'Brackets, then indices, then multiplication and division left to right, then addition and subtraction ' +
            'left to right. Multiplication does not always come before division: whichever is further left goes ' +
            'first.',
    },
    {
        id: 'sel-negative-numbers',
        subject: 'selective-high-school',
        question: 'How do I handle negatives without a calculator?',
        aliases: ['negative numbers', 'subtracting a negative', 'two minuses make a plus'],
        answer:
            'Adding a negative moves left on the number line, subtracting a negative moves right. Two negatives ' +
            'multiplied give a positive. Drawing a quick number line is faster than trying to remember rules under ' +
            'pressure.',
    },
    {
        id: 'sel-estimation',
        subject: 'selective-high-school',
        question: 'When should I estimate instead of calculating?',
        aliases: ['estimation', 'rounding to check', 'approximate answer'],
        answer:
            'Whenever the options are far apart, or as a check on a long calculation. Round each number to one ' +
            'significant figure, work it out, then pick the closest option. It often eliminates three of the four ' +
            'choices in seconds.',
    },
    {
        id: 'sel-place-value',
        subject: 'selective-high-school',
        question: 'How do I work with place value in decimals?',
        aliases: ['place value of decimals', 'tenths hundredths', 'ordering decimals'],
        answer:
            'Each place to the right of the point is ten times smaller: tenths, hundredths, thousandths. To order ' +
            'decimals, line up the points and compare digit by digit from the left, adding zeros so all have the same ' +
            'length.',
    },
    {
        id: 'sel-decimal-operations',
        subject: 'selective-high-school',
        question: 'How do I multiply and divide decimals?',
        aliases: ['multiplying decimals', 'dividing decimals', 'moving the decimal point'],
        answer:
            'Multiply as whole numbers, then place the point so the answer has as many decimal places as both numbers ' +
            'had together. To divide, shift the point in both numbers until the divisor is whole, then divide ' +
            'normally.',
    },
    {
        id: 'sel-money-problems',
        subject: 'selective-high-school',
        question: 'How do I handle money problems in the test?',
        aliases: ['money problems', 'change from a purchase', 'cost of several items'],
        answer:
            'Work in cents if the decimals are awkward, then convert back at the end. Read carefully whether the ' +
            'question wants the total, the change, or the cost per item, since all three are usually among the ' +
            'options.',
    },
    {
        id: 'sel-time-calculations',
        subject: 'selective-high-school',
        question: 'How do I calculate elapsed time?',
        aliases: ['elapsed time', 'time difference', 'adding hours and minutes'],
        answer:
            'Count up to the next whole hour, then in hours, then the remaining minutes. From 10:40 to 14:15 is 20 ' +
            'minutes to 11:00, three hours to 14:00, then 15 minutes: three hours 35 minutes. Remember 60 minutes, ' +
            'not 100.',
    },
    {
        id: 'sel-timetables',
        subject: 'selective-high-school',
        question: 'How do I read a timetable question?',
        aliases: ['reading a timetable', 'bus timetable question', 'which train to catch'],
        answer:
            'Find the row for the place and the column for the service, then read across carefully. Check whether ' +
            'times are on a 24 hour clock, and work out the journey duration rather than assuming every service takes ' +
            'the same time.',
    },
    {
        id: 'sel-calendar-problems',
        subject: 'selective-high-school',
        question: 'How do I answer calendar and day of the week questions?',
        aliases: ['calendar problems', 'what day will it be', 'days of the week pattern'],
        answer:
            'Days repeat every 7, so divide the number of days by 7 and use the remainder. 30 days later is 4 weeks ' +
            'and 2 days, so the day moves forward two. Check for leap years when the span covers February.',
    },
    {
        id: 'sel-perimeter-area',
        subject: 'selective-high-school',
        question: 'How do I find perimeter and area of rectangles?',
        aliases: ['perimeter of a rectangle', 'area of a rectangle', 'perimeter versus area'],
        answer:
            'Perimeter is the distance around, so add all sides, or use 2(length + width). Area is the space inside, ' +
            'length × width, measured in square units. Two shapes can share a perimeter and have very different ' +
            'areas.',
    },
    {
        id: 'sel-area-triangles',
        subject: 'selective-high-school',
        question: 'Which height do I use for the area of a triangle?',
        aliases: ['area of a triangle', 'half base times height', 'perpendicular height'],
        answer:
            'Half the base times the perpendicular height. The height must be at right angles to the base, not the ' +
            'slanted side, which is the mistake these questions are built to catch.',
    },
    {
        id: 'sel-composite-area',
        subject: 'selective-high-school',
        question: 'How do I find the area of an unusual shape?',
        aliases: ['composite area', 'irregular shape area', 'splitting a shape up'],
        answer:
            'Split it into rectangles and triangles, find each area, then add. Alternatively, find the area of the ' +
            'whole rectangle around it and subtract the pieces not included, which is quicker for shapes with one ' +
            'corner cut out.',
    },
    {
        id: 'sel-volume-prisms',
        subject: 'selective-high-school',
        question: 'How is volume tested in the Selective paper?',
        aliases: ['volume of a prism', 'length times width times height', 'cubic units'],
        answer:
            'For a rectangular prism, multiply length by width by height. More generally, volume is the area of the ' +
            'cross-section times the length. Volume is measured in cubic units, so all three measurements must be in ' +
            'the same unit first.',
    },
    {
        id: 'sel-unit-conversion',
        subject: 'selective-high-school',
        question: 'How do I convert between units of measurement?',
        aliases: ['converting units', 'metres to centimetres', 'grams to kilograms', 'litres to millilitres'],
        answer:
            'Multiply when moving to a smaller unit, divide when moving to a larger one. The factors are 10, 100 and ' +
            '1000: 1 km is 1000 m, 1 m is 100 cm, 1 L is 1000 mL. Ask whether the answer should be a bigger or ' +
            'smaller number as a check.',
    },
    {
        id: 'sel-scale-and-maps',
        subject: 'selective-high-school',
        question: 'How do I use a scale on a map or plan?',
        aliases: ['map scale', 'scale drawing', 'real distance from a plan'],
        answer:
            'A scale of 1:200 means every unit on the plan is 200 in reality. Multiply plan measurements by the scale ' +
            'for real distances, and divide real distances by it to find plan measurements. Convert units at the end, ' +
            'not partway.',
    },
    {
        id: 'sel-angle-rules',
        subject: 'selective-high-school',
        question: 'What angle rules do I need?',
        aliases: ['angles on a line', 'angles at a point', 'vertically opposite angles'],
        answer:
            'Angles on a straight line add to 180 degrees, angles at a point to 360, and vertically opposite angles ' +
            'are equal. Marking every angle you can work out, even ones you do not need, usually reveals the one you ' +
            'do.',
    },
    {
        id: 'sel-triangle-angles',
        subject: 'selective-high-school',
        question: 'What are the angle rules for triangles and quadrilaterals?',
        aliases: ['angle sum of a triangle', 'angle sum of a quadrilateral', 'isosceles triangle angles'],
        answer:
            'A triangle sums to 180 degrees, a quadrilateral to 360. An isosceles triangle has two equal angles ' +
            'opposite the two equal sides, and an equilateral triangle has three angles of 60.',
    },
    {
        id: 'sel-parallel-line-angles',
        subject: 'selective-high-school',
        question: 'How do I find angles in parallel lines?',
        aliases: ['parallel line angles', 'alternate angles', 'corresponding angles', 'co interior angles'],
        answer:
            'Corresponding angles in F shapes are equal, alternate angles in Z shapes are equal, and co-interior ' +
            'angles in C shapes add to 180. Look for the letter shape in the diagram rather than trying to recall the ' +
            'names.',
    },
    {
        id: 'sel-symmetry',
        subject: 'selective-high-school',
        question: 'How do I answer symmetry questions?',
        aliases: ['line symmetry', 'rotational symmetry', 'axis of symmetry'],
        answer:
            'A line of symmetry folds the shape onto itself exactly. Rotational symmetry means it looks the same ' +
            'after turning less than a full circle, and the order is how many times that happens in one full turn.',
    },
    {
        id: 'sel-nets',
        subject: 'selective-high-school',
        question: 'How do I work out which net folds into a solid?',
        aliases: ['net of a solid', 'folding a net', 'which net makes a cube'],
        answer:
            'Pick a face to be the base, then track where each attached face lands. For a cube, opposite faces are ' +
            'never next to each other in the net, so any net with two of the same pattern adjacent can be ruled out ' +
            'quickly.',
    },
    {
        id: 'sel-coordinates',
        subject: 'selective-high-school',
        question: 'How do I use coordinates on a grid?',
        aliases: ['coordinates', 'x and y axis order', 'plotting a point'],
        answer:
            'Read across before up: the first number is the horizontal position, the second the vertical. To find the ' +
            'distance between two points on the same row or column, subtract the coordinates that differ.',
    },
    {
        id: 'sel-transformations',
        subject: 'selective-high-school',
        question: 'How are slides, flips and turns tested?',
        aliases: ['translation', 'reflection of a shape', 'rotating a shape', 'transformations on a grid'],
        answer:
            'A translation slides without turning, a reflection flips across a line so it is the mirror image, and a ' +
            'rotation turns about a point. All three keep the shape and size, so only the position or orientation ' +
            'changes.',
    },
    {
        id: 'sel-simple-probability',
        subject: 'selective-high-school',
        question: 'How do I calculate a simple probability?',
        aliases: ['simple probability', 'chance as a fraction', 'favourable outcomes'],
        answer:
            'Count the favourable outcomes and divide by the total number of equally likely outcomes. Answers sit ' +
            'between 0 and 1, and the probability of something not happening is 1 minus the probability that it does.',
    },
    {
        id: 'sel-two-step-probability',
        subject: 'selective-high-school',
        question: 'How do I handle two-step chance questions?',
        aliases: ['two step probability', 'with and without replacement', 'listing outcomes'],
        answer:
            'List the outcomes systematically, or multiply along the branches of a tree. If an item is not replaced, ' +
            'the second fraction has a smaller denominator, which is the detail these questions rely on.',
    },
    {
        id: 'sel-reading-tables',
        subject: 'selective-high-school',
        question: 'How do I answer questions from a table of data?',
        aliases: ['reading a table', 'data table question', 'finding a total in a table'],
        answer:
            'Read the heading of every row and column before looking for numbers, then locate the single cell the ' +
            'question needs. For totals, check whether a total row already exists rather than adding the column ' +
            'yourself.',
    },
    {
        id: 'sel-column-graphs',
        subject: 'selective-high-school',
        question: 'How do I read a column graph accurately?',
        aliases: ['column graph', 'bar graph question', 'reading a scale on a graph'],
        answer:
            'Check what one gridline is worth before reading any bar, since the scale rarely goes up in ones. For ' +
            'comparisons, work out the difference rather than eyeballing the heights, and watch for an axis that does ' +
            'not start at zero.',
    },
    {
        id: 'sel-line-graphs',
        subject: 'selective-high-school',
        question: 'How do I interpret a line graph?',
        aliases: ['line graph', 'trend on a graph', 'steepest part of a graph'],
        answer:
            'The line going up means increasing, down means decreasing, and flat means unchanged. The steeper the ' +
            'line, the faster the change. Questions often ask for the period of greatest change rather than the ' +
            'highest value.',
    },
    {
        id: 'sel-pie-charts',
        subject: 'selective-high-school',
        question: 'How do I work with a pie chart?',
        aliases: ['pie chart', 'sector of a circle graph', 'fraction of a pie chart'],
        answer:
            'The whole circle is the total, so each sector is a fraction of it. A quarter of the circle means a ' +
            'quarter of the total, and 90 degrees of the 360 is that same quarter. You cannot compare two pie charts ' +
            'unless you know both totals.',
    },
    {
        id: 'sel-venn-diagrams',
        subject: 'selective-high-school',
        question: 'How do I use a Venn diagram?',
        aliases: ['venn diagram', 'overlap of two groups', 'both and neither'],
        answer:
            'Fill the overlap first, then subtract it from each circle total so nobody is counted twice. Anything ' +
            'outside both circles is the neither group, and the four regions must add to the total.',
    },
    {
        id: 'sel-logic-grids',
        subject: 'selective-high-school',
        question: 'How do I solve a logic grid puzzle?',
        aliases: ['logic grid', 'matching puzzle', 'process of elimination'],
        answer:
            'Draw a grid of the categories and mark what each clue rules out rather than only what it confirms. ' +
            'Crosses accumulate faster than ticks, and a row or column with one blank left gives you a tick for free.',
    },
];
