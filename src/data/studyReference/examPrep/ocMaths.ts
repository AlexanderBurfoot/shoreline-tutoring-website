/**
 * Opportunity Class Placement Test: mathematical reasoning.
 *
 * The number, measurement, space and data skills a Year 4 student needs, with
 * the method each question type rewards.
 */
import type { StudyEntry } from '../types';

export const ocMathsEntries: StudyEntry[] = [
    {
        id: 'oc-place-value-large',
        subject: 'oc-prep',
        question: 'How do I read and write large numbers?',
        aliases: ['reading large numbers', 'thousands and millions', 'writing numbers in words'],
        answer:
            'Group the digits in threes from the right and name each group: 45,208 is forty five thousand, two ' +
            'hundred and eight. Each place is ten times the one to its right, which is why a zero holding a place ' +
            'matters.',
    },
    {
        id: 'oc-mental-addition',
        subject: 'oc-prep',
        question: 'How can I add quickly in my head?',
        aliases: ['adding quickly', 'mental maths addition', 'friendly numbers'],
        answer:
            'Round one number to the nearest ten, add, then adjust. For 58 + 26, add 60 and 26 to get 86, then take ' +
            'off the 2. Looking for pairs that make ten also speeds up a long list.',
    },
    {
        id: 'oc-mental-subtraction',
        subject: 'oc-prep',
        question: 'How can I subtract quickly in my head?',
        aliases: ['subtracting quickly', 'mental maths subtraction', 'counting on'],
        answer:
            'Count on from the smaller number instead of taking away. From 47 to 92 is 3 to 50, then 42 more, giving ' +
            '45. This avoids borrowing, which is where most mistakes happen.',
    },
    {
        id: 'oc-times-tables-tricks',
        subject: 'oc-prep',
        question: 'What tricks help with times tables?',
        aliases: ['times table tricks', 'nine times table', 'doubling to multiply'],
        answer:
            'To multiply by 9, multiply by 10 and subtract the number. To multiply by 4, double twice. To multiply by ' +
            '5, halve the number and multiply by 10. The answers in the 9 times table always have digits adding to 9.',
    },
    {
        id: 'oc-division-facts',
        subject: 'oc-prep',
        question: 'How do I divide when the numbers are not friendly?',
        aliases: ['dividing larger numbers', 'division with a remainder', 'sharing equally'],
        answer:
            'Break the number into parts you can divide easily: 84 ÷ 6 becomes 60 ÷ 6 plus 24 ÷ 6, giving 10 + 4 = ' +
            '14. A remainder means the sharing was not equal, so read what the question wants done with it.',
    },
    {
        id: 'oc-fractions-of-groups',
        subject: 'oc-prep',
        question: 'How do I find a fraction of a group of objects?',
        aliases: ['fraction of a group', 'three quarters of twenty', 'fraction of a set'],
        answer:
            'Divide the total by the bottom number to find one part, then multiply by the top. Three quarters of 20 ' +
            'is 20 ÷ 4 = 5, then 5 × 3 = 15.',
    },
    {
        id: 'oc-equivalent-fractions',
        subject: 'oc-prep',
        question: 'How do I find equivalent fractions?',
        aliases: ['equivalent fractions', 'same fraction different numbers', 'multiplying top and bottom'],
        answer:
            'Multiply or divide the top and bottom by the same number and the value does not change: 2/3 is the same ' +
            'as 4/6 and 6/9. This is how fractions are compared and added.',
    },
    {
        id: 'oc-decimals-basics',
        subject: 'oc-prep',
        question: 'What do tenths and hundredths mean?',
        aliases: ['decimals for year 4', 'tenths and hundredths', 'decimal point meaning'],
        answer:
            'The first place after the point is tenths, the second hundredths. So 0.4 is four tenths, the same as ' +
            '2/5, and 0.40 is the same value as 0.4 because the extra zero adds nothing.',
    },
    {
        id: 'oc-percentages-intro',
        subject: 'oc-prep',
        question: 'What does percentage mean?',
        aliases: ['what is a percentage', 'per cent means out of 100', 'simple percentages'],
        answer:
            'Per cent means out of one hundred, so 25% is 25 out of 100, which is a quarter. To find 50% halve it, ' +
            'for 25% halve twice, and for 10% divide by ten.',
    },
    {
        id: 'oc-number-facts-practice',
        subject: 'oc-prep',
        question: 'Which number facts should I know instantly?',
        aliases: ['number facts', 'facts to know by heart', 'quick recall maths'],
        answer:
            'Tables to 12, doubles to 20, pairs that make 100, the fraction, decimal and percentage forms of a half, ' +
            'quarter and tenth, and squares to 12. Recall frees your thinking for the actual problem.',
    },
    {
        id: 'oc-word-problem-approach',
        subject: 'oc-prep',
        question: 'How do I start a word problem?',
        aliases: ['starting a word problem', 'what is being asked', 'underlining the question'],
        answer:
            'Read it twice. Underline the numbers and circle what is being asked, then decide whether things are ' +
            'being combined, shared, compared or repeated. The operation follows from that, not from keywords alone.',
    },
    {
        id: 'oc-multi-step-problems',
        subject: 'oc-prep',
        question: 'How do I handle a problem with more than one step?',
        aliases: ['multi step problem', 'two part question', 'showing each step'],
        answer:
            'Write down the answer to each step with a label, so you can see what you have and what is still missing. ' +
            'Most of these questions are two simple steps, not one hard one.',
    },
    {
        id: 'oc-guess-and-check',
        subject: 'oc-prep',
        question: 'When should I try guess and check?',
        aliases: ['guess and check', 'trial and improvement', 'testing an answer'],
        answer:
            'When the question gives a total and a relationship, such as two numbers adding to 20 with a difference ' +
            'of 4. Start with a sensible guess, see which way you are out, and adjust. Two or three tries usually ' +
            'lands it.',
    },
    {
        id: 'oc-working-systematically',
        subject: 'oc-prep',
        question: 'How do I list possibilities without missing any?',
        aliases: ['listing systematically', 'all the combinations', 'organised list'],
        answer:
            'Fix one thing and vary the rest in order, then move on. Starting with the smallest and working up means ' +
            'you can see where you are, which is how you know you have them all.',
    },
    {
        id: 'oc-patterns-shapes',
        subject: 'oc-prep',
        question: 'How do I continue a growing shape pattern?',
        aliases: ['growing shape pattern', 'matchstick shapes', 'next picture in a pattern'],
        answer:
            'Count the pieces at each stage, find how many are added each time, then check that the same number is ' +
            'added again. Saying the rule aloud, such as three more each time, makes the next stage easy.',
    },
    {
        id: 'oc-missing-number',
        subject: 'oc-prep',
        question: 'How do I find a missing number in a calculation?',
        aliases: ['missing number', 'fill in the box', 'inverse operation'],
        answer:
            'Use the opposite operation. If something plus 17 makes 42, subtract: 42 − 17 = 25. If something times 6 ' +
            'makes 54, divide. Checking by putting your answer back in takes two seconds.',
    },
    {
        id: 'oc-number-sentences',
        subject: 'oc-prep',
        question: 'How do I turn a story into a number sentence?',
        aliases: ['number sentence', 'writing an equation from words', 'translating a problem'],
        answer:
            'Name what you do not know, then write what the story says about it in symbols. Three more than twice a ' +
            'number is 17 becomes 2 × n + 3 = 17, which is then solved backwards.',
    },
    {
        id: 'oc-money-oc',
        subject: 'oc-prep',
        question: 'How do I handle money questions?',
        aliases: ['money questions for year 4', 'adding amounts of money', 'giving change'],
        answer:
            'Keep dollars and cents lined up, or work entirely in cents if that is easier, converting at the end. For ' +
            'change, count up from the cost to the amount paid.',
    },
    {
        id: 'oc-length-measurement',
        subject: 'oc-prep',
        question: 'How do I work with length units?',
        aliases: ['millimetres and centimetres', 'metres and kilometres', 'measuring with a ruler'],
        answer:
            '10 mm make a centimetre, 100 cm a metre, 1000 m a kilometre. Multiply going to smaller units, divide ' +
            'going to larger. Always measure from the zero mark, not from the edge of the ruler.',
    },
    {
        id: 'oc-area-perimeter-basics',
        subject: 'oc-prep',
        question: 'What is the difference between area and perimeter?',
        aliases: ['area and perimeter difference', 'distance around', 'space inside'],
        answer:
            'Perimeter is the distance around the outside, measured in units of length. Area is the space inside, ' +
            'measured in squares. A fence needs perimeter, turf needs area.',
    },
    {
        id: 'oc-volume-capacity',
        subject: 'oc-prep',
        question: 'What is the difference between volume and capacity?',
        aliases: ['volume and capacity', 'litres and cubic centimetres', 'how much it holds'],
        answer:
            'Volume is the space something takes up; capacity is how much a container can hold. They meet neatly in ' +
            'water: one cubic centimetre holds one millilitre, and 1000 mL is a litre.',
    },
    {
        id: 'oc-mass-measurement',
        subject: 'oc-prep',
        question: 'How do I work with mass?',
        aliases: ['grams and kilograms for year 4', 'measuring mass', 'balance scales'],
        answer:
            '1000 g make a kilogram and 1000 kg a tonne. On balance scales, both sides hold the same mass, so a ' +
            'question about what balances what is really a question about equal totals.',
    },
    {
        id: 'oc-time-oc',
        subject: 'oc-prep',
        question: 'How do I work out how long something takes?',
        aliases: ['how long did it take', 'elapsed time for year 4', 'start and finish time'],
        answer:
            'Count up to the next hour, then in whole hours, then the extra minutes. Remember that an hour is 60 ' +
            'minutes, so 1.5 hours is 90 minutes rather than 150.',
    },
    {
        id: 'oc-timetables-oc',
        subject: 'oc-prep',
        question: 'Which service do I need from a timetable?',
        aliases: ['timetable for year 4', 'bus times', 'which service to take'],
        answer:
            'Find the row for the stop and follow the column for the service. Check whether the times use a 24 hour ' +
            'clock, and remember that not every service stops everywhere.',
    },
    {
        id: 'oc-calendar-oc',
        subject: 'oc-prep',
        question: 'How many days are in each month?',
        aliases: ['calendar for year 4', 'days in each month', 'what date will it be'],
        answer:
            'Thirty days have September, April, June and November; the rest have 31 except February with 28, or 29 in ' +
            'a leap year. Days of the week repeat every 7, so use the remainder after dividing by 7.',
    },
    {
        id: 'oc-2d-shapes-oc',
        subject: 'oc-prep',
        question: 'How do I name and sort 2D shapes?',
        aliases: ['naming 2d shapes', 'sorting shapes', 'sides and corners'],
        answer:
            'Count the sides and corners, then look for equal sides, parallel sides and right angles. A square is a ' +
            'special rectangle, and a rectangle is a special parallelogram, so shapes belong to more than one group.',
    },
    {
        id: 'oc-3d-shapes-oc',
        subject: 'oc-prep',
        question: 'How do I describe 3D objects?',
        aliases: ['naming 3d objects', 'faces edges corners', 'cube and cuboid'],
        answer:
            'Count faces, edges and vertices. A cube has 6 faces, 12 edges and 8 vertices. A prism keeps the same ' +
            'cross-section all the way along; a pyramid narrows to a point.',
    },
    {
        id: 'oc-angles-oc',
        subject: 'oc-prep',
        question: 'What kinds of angle are there?',
        aliases: ['angles for year 4', 'right angle', 'bigger or smaller than a right angle'],
        answer:
            'A right angle is a square corner. Smaller than that is acute, larger is obtuse, and a straight line is ' +
            'two right angles. Comparing with the corner of a page is enough for most questions.',
    },
    {
        id: 'oc-symmetry-oc',
        subject: 'oc-prep',
        question: 'How do I find lines of symmetry?',
        aliases: ['lines of symmetry', 'folding a shape in half', 'symmetrical shapes'],
        answer:
            'A line of symmetry folds the shape so both halves match exactly. A square has four, a rectangle two, and ' +
            'a circle has an infinite number. Turning the page can make a diagonal line easier to see.',
    },
    {
        id: 'oc-position-direction',
        subject: 'oc-prep',
        question: 'How do I answer position and direction questions?',
        aliases: ['position and direction', 'grid reference for year 4', 'left right turns'],
        answer:
            'Give the column then the row for a grid reference, and work out turns from the direction the person is ' +
            'facing rather than from the page. Quarter turn is 90 degrees, half turn is 180.',
    },
    {
        id: 'oc-tables-and-graphs',
        subject: 'oc-prep',
        question: 'How do I read information from a table or graph?',
        aliases: ['reading a table for year 4', 'column graph question', 'what the graph shows'],
        answer:
            'Read the title and the labels before the numbers, and work out what one gridline is worth. Then find the ' +
            'single piece of information the question needs rather than reading everything.',
    },
    {
        id: 'oc-chance-oc',
        subject: 'oc-prep',
        question: 'How do I describe chance?',
        aliases: ['chance for year 4', 'likely or unlikely', 'certain and impossible'],
        answer:
            'From impossible through unlikely, even chance and likely to certain. Two outcomes are equally likely ' +
            'only if they are the same size, so a spinner with unequal sectors is not fair.',
    },
    {
        id: 'oc-estimation-oc',
        subject: 'oc-prep',
        question: 'When is estimating better than calculating?',
        aliases: ['estimating for year 4', 'about how many', 'sensible answer check'],
        answer:
            'When the question says about, or when the options are far apart. Round each number to something easy, ' +
            'work it out, then check which option is closest. It also catches answers that are wildly wrong.',
    },
    {
        id: 'oc-odd-even-properties',
        subject: 'oc-prep',
        question: 'What do I need to know about odd and even numbers?',
        aliases: ['odd and even numbers', 'even plus even', 'odd times odd'],
        answer:
            'Even plus even and odd plus odd both give even; odd plus even gives odd. Even times anything is even. ' +
            'These facts answer many questions without any calculation.',
    },
    {
        id: 'oc-factors-multiples-oc',
        subject: 'oc-prep',
        question: 'What is the difference between a factor and a multiple?',
        aliases: ['factors and multiples', 'what divides into a number', 'times table of a number'],
        answer:
            'A factor divides into the number exactly; a multiple is the number multiplied by something. 3 is a ' +
            'factor of 12, and 12 is a multiple of 3. Factors come in pairs, which helps you list them all.',
    },
    {
        id: 'oc-magic-squares',
        subject: 'oc-prep',
        question: 'How do I solve a magic square or grid puzzle?',
        aliases: ['magic square', 'grid puzzle', 'rows and columns with the same total'],
        answer:
            'Find the total from a complete row or column first, then use it to fill any line with one number ' +
            'missing. Each filled square usually unlocks another, so work in that order rather than guessing.',
    },
    {
        id: 'oc-logic-deduction',
        subject: 'oc-prep',
        question: 'How do I solve a puzzle from a set of clues?',
        aliases: ['clue puzzle', 'deduction puzzle', 'ruling out possibilities'],
        answer:
            'Make a grid and record what each clue rules out as well as what it proves. Negative information narrows ' +
            'the puzzle faster, and a row with one possibility left gives an answer for free.',
    },
    {
        id: 'oc-spatial-visualising',
        subject: 'oc-prep',
        question: 'How do I answer questions about folding and turning shapes?',
        aliases: ['folding paper question', 'which shape when turned', 'visualising a shape'],
        answer:
            'Follow one corner or one mark through the movement rather than the whole shape, and rule out options ' +
            'where that mark cannot end up there. Turning the page is allowed and quicker than imagining it.',
    },
    {
        id: 'oc-cube-nets',
        subject: 'oc-prep',
        question: 'How do I tell whether a net folds into a cube?',
        aliases: ['net of a cube', 'which net folds up', 'opposite faces of a cube'],
        answer:
            'Choose a square to be the base and track the others as they fold. Opposite faces of a cube are never ' +
            'joined in the net, so two identical patterns next to each other means the net cannot work.',
    },
    {
        id: 'oc-graph-interpretation',
        subject: 'oc-prep',
        question: 'How do I answer a question about change over time?',
        aliases: ['line graph for year 4', 'change over time', 'increase and decrease on a graph'],
        answer:
            'Up means more, down means less, and flat means no change. The steeper the line, the faster the change. ' +
            'Read the horizontal axis carefully, since the intervals may be months or years rather than days.',
    },
];
