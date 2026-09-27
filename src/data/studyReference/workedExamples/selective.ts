/**
 * Worked examples: the Selective High School Placement Test.
 *
 * Mathematical reasoning and thinking skills at the level Year 6 candidates
 * meet them, each solved with the numbers shown and checked. Written by hand and
 * shown exactly as written, so the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleSelectiveEntries: StudyEntry[] = [
    {
        id: 'sel-example-number-pattern',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a number pattern question?',
        aliases: ['worked example number pattern', 'example of a number sequence question', 'find the next term example'],
        answer:
            'Find the next term in 3, 7, 15, 31. The gaps are 4, 8, 16, which double, so test a rule: each term is ' +
            'double the one before plus 1. Check it: 3 × 2 + 1 = 7, and 15 × 2 + 1 = 31. So the next term is 31 × 2 ' +
            '+ 1 = 63.',
    },
    {
        id: 'sel-example-fraction-of-amount',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of finding a fraction of an amount?',
        aliases: ['worked example fraction of an amount', 'example of a fraction of a number', 'three eighths of 96 example'],
        answer:
            'Find 3/8 of 96. Divide by the bottom, then multiply by the top: 96 ÷ 8 = 12, then 12 × 3 = 36. Doing it ' +
            'in that order keeps the numbers small, which matters when there is no calculator.',
    },
    {
        id: 'sel-example-sharing-ratio',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of sharing an amount in a ratio?',
        aliases: ['worked example sharing in a ratio', 'example of dividing money in a ratio', 'share 120 in ratio 3 to 5'],
        answer:
            'Share $120 between two people in the ratio 3:5. Add the parts: 3 + 5 = 8. One part is 120 ÷ 8 = $15. So ' +
            'the shares are 3 × 15 = $45 and 5 × 15 = $75. Check they add back to $120.',
    },
    {
        id: 'sel-example-percentage-discount',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a discount question?',
        aliases: ['worked example discount', 'example of a percentage off question', 'fifteen percent off example'],
        answer:
            'A jacket costs $80 and is reduced by 15%. Find 10% first, which is $8, then half of that for 5%, which ' +
            'is $4, so the discount is $12. The sale price is 80 − 12 = $68. Splitting a percentage into 10% and 5% ' +
            'is faster than multiplying.',
    },
    {
        id: 'sel-example-average-missing',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of finding a missing mark from an average?',
        aliases: ['worked example missing mark from an average', 'example of a missing score question', 'average missing value example'],
        answer:
            'Four tests average 78, and three of them are 72, 85 and 80. The total must be 4 × 78 = 312. The three ' +
            'known marks add to 237, so the fourth is 312 − 237 = 75. Work through the total, never through the ' +
            'average itself.',
    },
    {
        id: 'sel-example-speed',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a speed question?',
        aliases: ['worked example speed', 'example of an average speed question', 'kilometres per hour example'],
        answer:
            'A cyclist rides 45 km in 1 hour 30 minutes. Turn the time into hours first: 1 hour 30 minutes is 1.5 ' +
            'hours. Then speed is distance ÷ time = 45 ÷ 1.5 = 30 km/h. Leaving the time as 1.30 is the usual way to ' +
            'get this wrong.',
    },
    {
        id: 'sel-example-composite-area',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of the area of an L-shape?',
        aliases: ['worked example area of an l shape', 'example of a composite area question', 'area of an irregular shape example'],
        answer:
            'An L-shape is a 10 cm by 6 cm rectangle with a 4 cm by 3 cm corner cut out. Find the whole rectangle, ' +
            'then subtract: 10 × 6 = 60 cm², and 4 × 3 = 12 cm², so the area is 60 − 12 = 48 cm². Subtracting a ' +
            'missing piece is usually quicker than splitting the shape up.',
    },
    {
        id: 'sel-example-perimeter-from-area',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of finding a perimeter from an area?',
        aliases: ['worked example perimeter from area', 'example of working back from an area', 'area 81 square perimeter example'],
        answer:
            'A square has area 81 cm². The side is the number that multiplies by itself to give 81, which is 9 cm. ' +
            'The perimeter is 4 × 9 = 36 cm. Questions that give the area and want a length always need this step ' +
            'backwards first.',
    },
    {
        id: 'sel-example-volume-box',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of the volume of a box?',
        aliases: ['worked example volume of a box', 'example of a rectangular prism volume', 'volume of a cuboid example'],
        answer:
            'A box is 12 cm long, 5 cm wide and 4 cm high. Volume is length × width × height = 12 × 5 × 4 = 240 cm³. ' +
            'Volume is always in cubic units, so writing cm² here would lose the mark even with the right number.',
    },
    {
        id: 'sel-example-angles-on-a-line',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of angles on a straight line?',
        aliases: ['worked example angles on a line', 'example of an angle question with algebra', 'angles adding to 180 example'],
        answer:
            'Three angles on a straight line are 3x, 2x and x. Angles on a line add to 180°, so 3x + 2x + x = 6x = ' +
            '180, giving x = 30. The angles are 90°, 60° and 30°. Check they add to 180° before writing the answer.',
    },
    {
        id: 'sel-example-time-interval',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of working out a time interval?',
        aliases: ['worked example time interval', 'example of how long between two times', 'time difference question example'],
        answer:
            'How long from 9:45 am to 2:20 pm? Count to the next hour first: 15 minutes takes you to 10:00 am. From ' +
            '10:00 am to 2:00 pm is 4 hours, then 20 more minutes. Total 4 hours 35 minutes. Counting in stages ' +
            'avoids the mistake of subtracting the clock numbers.',
    },
    {
        id: 'sel-example-change',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a money and change question?',
        aliases: ['worked example change from a purchase', 'example of a money question', 'how much change example'],
        answer:
            'Three items cost $12.75 each and you pay with $50. The cost is 12.75 × 3 = $38.25, so the change is 50 ' +
            '− 38.25 = $11.75. Round to check: three items near $13 is about $39, so change near $11 is sensible.',
    },
    {
        id: 'sel-example-unit-conversion',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of converting between metres and kilometres?',
        aliases: [
            'worked example converting kilometres to metres',
            'example of changing kilometres to metres',
            'grams to kilograms example',
        ],
        answer:
            'Convert 2.4 km to metres and 3500 g to kilograms. There are 1000 m in a kilometre, so multiply: 2.4 × ' +
            '1000 = 2400 m. Going the other way you divide: 3500 ÷ 1000 = 3.5 kg. Ask whether the answer should be a ' +
            'bigger or smaller number, and let that decide multiply or divide.',
    },
    {
        id: 'sel-example-simple-probability',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a simple probability question?',
        aliases: ['worked example simple probability', 'example of probability from a bag', 'chance of picking a red example'],
        answer:
            'A bag holds 4 red and 6 blue counters. The chance of red is the reds over the total: 4 out of 10, which ' +
            'simplifies to 2/5. Counting only the reds against the blues and writing 4/6 is the common error, since ' +
            'probability is always out of the whole.',
    },
    {
        id: 'sel-example-two-step-word',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a two step word problem?',
        aliases: ['worked example two step word problem', 'example of a shopping word problem', 'two operations word problem example'],
        answer:
            'Pens cost $3 and notebooks $8. What do 5 pens and 2 notebooks cost? Do each group separately, then add: ' +
            '5 × 3 = 15 and 2 × 8 = 16, so the total is 15 + 16 = $31. Writing the two products down before adding ' +
            'stops one of them being forgotten.',
    },
    {
        id: 'sel-example-working-backwards',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of working backwards?',
        aliases: ['worked example working backwards', 'example of a think of a number question', 'reversing the operations example'],
        answer:
            'I think of a number, double it, add 7 and get 31. Undo the steps in reverse and use the opposite ' +
            'operation each time: 31 − 7 = 24, then 24 ÷ 2 = 12. Check forwards: 12 doubled is 24, plus 7 is 31.',
    },
    {
        id: 'sel-example-consecutive-numbers',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a consecutive numbers question?',
        aliases: ['worked example consecutive numbers', 'example of three numbers in a row', 'consecutive integers sum example'],
        answer:
            'Three consecutive whole numbers add to 72. The middle one is the average, so it is 72 ÷ 3 = 24, making ' +
            'the numbers 23, 24 and 25. This shortcut works for any odd count of consecutive numbers, because the ' +
            'ones either side of the middle cancel out.',
    },
    {
        id: 'sel-example-age-problem',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of an age problem?',
        aliases: ['worked example age problem', 'example of an ages question', 'three times as old example'],
        answer:
            'Sam is three times as old as Ben and together they are 32. Think in parts: Ben is one part, Sam is ' +
            'three, so there are four parts in total. One part is 32 ÷ 4 = 8, so Ben is 8 and Sam is 24. Check: 24 is ' +
            'three times 8, and they add to 32.',
    },
    {
        id: 'sel-example-handshakes',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a handshake counting question?',
        aliases: ['worked example handshake problem', 'example of counting pairs', 'how many handshakes example'],
        answer:
            'Six people each shake hands once with everyone else. Each person shakes five hands, giving 6 × 5 = 30, ' +
            'but that counts every handshake from both sides, so halve it: 30 ÷ 2 = 15. The same halving applies to ' +
            'counting lines between points or games in a round robin.',
    },
    {
        id: 'sel-example-day-of-the-week',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a day of the week question?',
        aliases: ['worked example day of the week', 'example of a calendar counting question', 'what day in 100 days example'],
        answer:
            'If today is Tuesday, what day is it in 100 days? Days repeat every 7, so divide and keep the remainder: ' +
            '100 ÷ 7 is 14 with 2 left over. Count 2 on from Tuesday to get Thursday. Only the remainder matters, so ' +
            'the whole weeks can be ignored.',
    },
    {
        id: 'sel-example-divisibility',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a divisibility test?',
        aliases: ['worked example divisibility test', 'example of testing if a number divides', 'divisible by 9 example'],
        answer:
            'Is 4536 divisible by 9? Add the digits: 4 + 5 + 3 + 6 = 18, and 18 is a multiple of 9, so yes. The same ' +
            'trick with a digit sum works for 3. For 4, look at the last two digits, and for 8, the last three.',
    },
    {
        id: 'sel-example-tap-rate',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a filling rate question?',
        aliases: ['worked example filling a tank', 'example of a rate of filling question', 'two taps filling a tank example'],
        answer:
            'A tap delivers 3 litres a minute into a 45 litre tank, so it fills in 45 ÷ 3 = 15 minutes. With a second ' +
            'identical tap the rate doubles to 6 litres a minute, so the time halves to 45 ÷ 6 = 7.5 minutes. Add ' +
            'the rates, never the times.',
    },
    {
        id: 'sel-example-nth-term',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of finding a rule for a pattern?',
        aliases: ['worked example rule for a pattern', 'example of finding the nth term', 'pattern rule example'],
        answer:
            'The pattern 5, 8, 11, 14 goes up by 3 each time, so the rule involves 3 times the position. Three times ' +
            'the position gives 3, 6, 9, 12, which is 2 short each time, so the rule is 3n + 2. The 20th term is 3 × ' +
            '20 + 2 = 62.',
    },
    {
        id: 'sel-example-counting-squares',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of counting squares in a grid?',
        aliases: ['worked example counting squares', 'example of how many squares in a grid', 'squares of all sizes example'],
        answer:
            'How many squares of any size are in a 3 by 3 grid? Count by size: nine 1 by 1, four 2 by 2 and one 3 by ' +
            '3, giving 9 + 4 + 1 = 14. Counting only the small ones is the trap, because the question says any size.',
    },
    {
        id: 'sel-example-scale-map',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a map scale question?',
        aliases: ['worked example map scale', 'example of a scale question', 'distance on a map example'],
        answer:
            'A map has scale 1:50 000, so 1 cm on the map is 50 000 cm in real life, which is 0.5 km. A distance of ' +
            '4 cm on the map is therefore 4 × 0.5 = 2 km. Converting the scale into kilometres once, before using it, ' +
            'saves handling long strings of zeros.',
    },
    {
        id: 'sel-example-timetable-arrival',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a timetable question?',
        aliases: ['worked example timetable question', 'example of a bus journey time', 'arrival time example'],
        answer:
            'A bus leaves at 8:12 am and the trip takes 47 minutes. Add to the next hour first: 48 minutes would ' +
            'reach 9:00, so 47 minutes lands one minute short, at 8:59 am. Adding to the hour and adjusting beats ' +
            'adding 47 to 12 and carrying.',
    },
    {
        id: 'sel-example-reflecting-a-point',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of reflecting a point?',
        aliases: ['worked example reflecting a point', 'example of a reflection on a grid', 'reflect in the y axis example'],
        answer:
            'Reflect the point (3, 2) in the vertical axis. Reflecting sideways changes the sign of the across ' +
            'coordinate and leaves the up coordinate alone, giving (−3, 2). Reflecting in the horizontal axis would ' +
            'do the opposite and give (3, −2).',
    },
    {
        id: 'sel-example-adding-fractions',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of adding fractions with different denominators?',
        aliases: ['worked example adding fractions', 'example of adding unlike fractions', 'two thirds plus a quarter example'],
        answer:
            'Add 2/3 + 1/4. The smallest number both 3 and 4 divide into is 12, so rewrite both: 2/3 is 8/12 and 1/4 ' +
            'is 3/12. Now add the tops only: 11/12. Adding the bottoms as well is the mistake to watch for.',
    },
    {
        id: 'sel-example-best-buy',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a best buy question?',
        aliases: ['worked example best buy', 'example of comparing value for money', 'which is better value example'],
        answer:
            'Which is better value, 500 g for $4.20 or 750 g for $6.00? Bring both to the same amount. Per 100 g the ' +
            'first is 4.20 ÷ 5 = $0.84 and the second is 6.00 ÷ 7.5 = $0.80, so the larger pack is better. Always ' +
            'compare a price for one common quantity, not the totals.',
    },
    {
        id: 'sel-example-percentage-increase',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a percentage increase?',
        aliases: ['worked example percentage increase', 'example of a price rise question', 'increase by 20 percent example'],
        answer:
            'A $45 ticket rises by 20%. Ten per cent is $4.50, so 20% is $9, and the new price is 45 + 9 = $54. You ' +
            'can also multiply by 1.2 in one step: 45 × 1.2 = 54. Both are correct, and the second is faster once ' +
            'you trust it.',
    },
    {
        id: 'sel-example-logical-order',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a logical ordering question?',
        aliases: ['worked example logical ordering', 'example of ranking from clues', 'who is tallest puzzle example'],
        answer:
            'Ana is taller than Ben. Cara is shorter than Ben. Dev is taller than Ana. Build one line as you read: ' +
            'Ana above Ben, Cara below Ben, Dev above Ana. That gives Dev, Ana, Ben, Cara from tallest to shortest. ' +
            'Placing each new person into a single list beats holding the clues in your head.',
    },
    {
        id: 'sel-example-seating-puzzle',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a seating arrangement puzzle?',
        aliases: ['worked example seating puzzle', 'example of a seating arrangement question', 'who sits where example'],
        answer:
            'Four friends sit in a row. Mia is not at either end. Raj is on Mia’s immediate left. Two seats sit ' +
            'between Raj and Tom. Start with the most restrictive clue: Mia is in seat 2 or 3. If Mia is in seat 3, ' +
            'Raj is in 2 and Tom cannot be two seats away, so Mia is in 2, Raj in 1, and Tom in 4.',
    },
    {
        id: 'sel-example-assumption',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of finding an assumption?',
        aliases: ['worked example finding an assumption', 'example of an unstated assumption question', 'what does the argument assume example'],
        answer:
            'Claim: the new bus lane will cut travel times, because more people will take the bus. This assumes the ' +
            'buses have room for those extra passengers. Test a candidate by denying it: if the buses were already ' +
            'full, the argument collapses, so that is the assumption it rests on.',
    },
    {
        id: 'sel-example-flaw-in-reasoning',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of finding the flaw in an argument?',
        aliases: ['worked example flaw in an argument', 'example of finding the weakness in reasoning', 'what is wrong with the argument example'],
        answer:
            'Claim: sales rose after the new sign went up, so the sign caused the rise. The flaw is treating one ' +
            'thing following another as proof it was caused by it. A school holiday or a competitor closing would ' +
            'explain the same rise, and the argument never rules those out.',
    },
    {
        id: 'sel-example-conclusion-follows',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of deciding whether a conclusion follows?',
        aliases: ['worked example does the conclusion follow', 'example of a valid conclusion question', 'which must be true example'],
        answer:
            'All the members of the choir can read music. Priya can read music. It does not follow that Priya is in ' +
            'the choir, because the statement runs one way only. Reversing a statement that says all of one group ' +
            'has a feature is the error these questions are built on.',
    },
    {
        id: 'sel-example-some-and-all',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a some and all question?',
        aliases: ['worked example some and all', 'example of a some all none question', 'overlapping groups example'],
        answer:
            'All violinists are musicians. Some musicians are teachers. Can we say some violinists are teachers? No. ' +
            'Draw it as circles: violinists sit inside musicians, and the teachers overlap musicians somewhere that ' +
            'need not touch the violinists. Some means at least one, never all.',
    },
    {
        id: 'sel-example-coded-language',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a code question?',
        aliases: ['worked example code question', 'example of a coded word question', 'letter shift code example'],
        answer:
            'If CAT is written ECV, what is DOG? Each letter has moved forward two places in the alphabet: C to E, A ' +
            'to C, T to V. Apply the same shift to DOG and it becomes FQI. Find the rule from the letters you are ' +
            'given, then apply it once, rather than guessing.',
    },
    {
        id: 'sel-example-shape-sequence',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a shape sequence question?',
        aliases: ['worked example shape sequence', 'example of the next shape in a pattern', 'rotating shape pattern example'],
        answer:
            'A square with a dot in one corner appears four times, the dot moving clockwise each step. Track one ' +
            'feature at a time: here only the dot moves, and it moves a quarter turn clockwise, so the next picture ' +
            'has the dot in the following corner. When two features change, describe each separately before choosing.',
    },
    {
        id: 'sel-example-odd-one-out',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of an odd one out question?',
        aliases: ['worked example odd one out', 'example of which does not belong', 'odd one out reasoning example'],
        answer:
            'Which does not belong: 16, 25, 36, 40? The first three are square numbers, 4², 5² and 6², so 40 is the ' +
            'odd one. State the rule the others share before choosing, because several answers can look odd for ' +
            'weaker reasons, such as being the only one above 39.',
    },
    {
        id: 'sel-example-balance-puzzle',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a balance scales puzzle?',
        aliases: ['worked example balance scales', 'example of a weighing puzzle', 'scales balancing shapes example'],
        answer:
            'Three circles balance one square, and two squares balance twelve triangles. Work in one unit: one ' +
            'square is 12 ÷ 2 = 6 triangles, so three circles are 6 triangles, making one circle 2 triangles. Convert ' +
            'everything into the smallest item before comparing.',
    },
    {
        id: 'sel-example-sample-criticism',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of criticising a survey?',
        aliases: ['worked example criticising a survey', 'example of a biased sample question', 'what is wrong with the survey example'],
        answer:
            'A club surveys its own members and reports that 90% of people want longer opening hours. The sample is ' +
            'the problem: only members were asked, and they are the people most likely to want more hours. A claim ' +
            'about people in general needs a sample drawn from people in general.',
    },
    {
        id: 'sel-example-misleading-percentage',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a misleading statistic?',
        aliases: ['worked example misleading statistic', 'example of a misleading percentage', 'percentage without the total example'],
        answer:
            'An advertisement says complaints fell by 50%. Without the starting number this says little: a fall from ' +
            '4 to 2 and a fall from 400 to 200 are both 50%. A percentage change always needs the size it started ' +
            'from before it means anything.',
    },
    {
        id: 'sel-example-strengthen-an-argument',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of strengthening an argument?',
        aliases: ['worked example strengthening an argument', 'example of which fact supports the claim', 'best support for the argument example'],
        answer:
            'Claim: the library should open on Sundays because students need study space at weekends. The fact that ' +
            'most strengthens it is evidence that students currently have nowhere to study on Sundays. A fact about ' +
            'Saturday numbers is close but supports a different day, which is how the wrong options are built.',
    },
    {
        id: 'sel-example-reading-inference',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of a reading inference question?',
        aliases: ['worked example reading inference', 'example of an inference from a passage', 'what does the passage suggest example'],
        answer:
            'A passage says a character checked the lock twice, then turned back at the gate to check again. Asked ' +
            'what this suggests, the answer is anxiety, not forgetfulness, because the repetition is deliberate ' +
            'rather than absent-minded. An inference must be the smallest step beyond the words, supported by ' +
            'something you can point to.',
    },
    {
        id: 'sel-example-writing-plan',
        subject: 'selective-high-school',
        question: 'Can you show me a worked example of planning the writing task?',
        aliases: ['worked example planning the writing task', 'example of a writing plan', 'how to plan the selective writing example'],
        answer:
            'For the prompt "a decision you regret", spend two minutes planning: one decision, one moment it went ' +
            'wrong, one image to return to at the end. That gives four paragraphs, a beginning in the moment rather ' +
            'than in the background, and an ending that echoes the opening image. A plan this small still prevents ' +
            'the story drifting.',
    },
];
