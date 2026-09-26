/**
 * Worked examples: the Opportunity Class placement test.
 *
 * Reading, mathematical reasoning and thinking skills at Year 4 level, each
 * solved with the numbers shown. Written by hand and shown exactly as written,
 * so the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleOcEntries: StudyEntry[] = [
    {
        id: 'oc-example-times-table-gap',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a missing number multiplication?',
        aliases: ['worked example missing number multiplication', 'example of a missing factor question', 'what times 7 makes 91 example'],
        answer:
            'What number times 7 gives 91? Work up from a fact you know: 7 × 10 = 70, leaving 21 to find, and 7 × 3 = ' +
            '21, so the answer is 13. Building from a ten times fact is faster than guessing and checking.',
    },
    {
        id: 'oc-example-order-of-operations',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of order of operations?',
        aliases: ['worked example order of operations', 'example of bodmas', 'which operation comes first example'],
        answer:
            'Work out 6 + 4 × 3. Multiplication comes before addition, so do 4 × 3 = 12 first, then 6 + 12 = 18. ' +
            'Working left to right instead would give 30, which is the answer the question is testing for.',
    },
    {
        id: 'oc-example-equivalent-fractions',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of equivalent fractions?',
        aliases: ['worked example equivalent fractions', 'example of the same fraction written differently', 'equal fractions example'],
        answer:
            'Which is the same as 3/4: 6/9, 9/12 or 12/20? Multiply top and bottom by the same number. Three times ' +
            'both parts of 3/4 gives 9/12, so that is the match. Checking that the bottom multiplied by the same ' +
            'amount as the top is the whole test.',
    },
    {
        id: 'oc-example-comparing-fractions',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of comparing two fractions?',
        aliases: ['worked example comparing fractions', 'example of which fraction is bigger', 'ordering fractions example'],
        answer:
            'Which is larger, 2/3 or 3/5? Give them the same bottom number: 2/3 is 10/15 and 3/5 is 9/15, so 2/3 is ' +
            'larger. When the tops are equal instead, the fraction with the smaller bottom is the larger one, since ' +
            'the pieces are bigger.',
    },
    {
        id: 'oc-example-rounding',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of rounding a number?',
        aliases: ['worked example rounding', 'example of rounding to the nearest hundred', 'round 3847 example'],
        answer:
            'Round 3847 to the nearest hundred. Look at the digit after the hundreds, which is 4, and 4 is less than ' +
            '5, so the hundreds digit stays: 3800. Rounding to the nearest ten instead would look at the 7 and give ' +
            '3850.',
    },
    {
        id: 'oc-example-number-line',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of reading a number line?',
        aliases: ['worked example number line', 'example of finding a point on a number line', 'what number is the arrow pointing to example'],
        answer:
            'A number line runs from 0 to 50 with ten equal gaps, and an arrow sits three gaps along. Each gap is 50 ' +
            '÷ 10 = 5, so the arrow is at 3 × 5 = 15. Work out the size of one gap before reading any scale.',
    },
    {
        id: 'oc-example-perimeter',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of the perimeter of a rectangle?',
        aliases: [
            'worked example perimeter of a rectangle',
            'example of the distance around a shape',
            'adding up the sides of a rectangle example',
        ],
        answer:
            'A rectangle is 9 cm by 4 cm. The perimeter is the distance all the way round, so add the two lengths and ' +
            'the two widths: 9 + 9 + 4 + 4 = 26 cm. A quicker route is 2 × 9 + 2 × 4, which gives the same 26 cm.',
    },
    {
        id: 'oc-example-symmetry',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a line of symmetry question?',
        aliases: ['worked example line of symmetry', 'example of how many lines of symmetry', 'symmetry of a shape example'],
        answer:
            'How many lines of symmetry does a rectangle have? Two: one across the middle horizontally and one ' +
            'vertically. The diagonals are not lines of symmetry, because folding along one does not match the halves, ' +
            'which is the answer most often chosen by mistake.',
    },
    {
        id: 'oc-example-three-d-faces',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of counting faces on a solid?',
        aliases: ['worked example counting faces', 'example of faces edges and vertices', 'how many faces on a prism example'],
        answer:
            'A triangular prism has how many faces? Two triangles at the ends and three rectangles around the sides, ' +
            'so 2 + 3 = 5 faces. Count the ends first, then the sides, so none is missed on the hidden side of the ' +
            'drawing.',
    },
    {
        id: 'oc-example-column-graph',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of reading a column graph?',
        aliases: ['worked example reading a column graph', 'example of a bar graph question', 'difference between two columns example'],
        answer:
            'A graph shows 18 for Monday and 25 for Tuesday, and asks how many more on Tuesday. Read both values, ' +
            'then subtract: 25 − 18 = 7. Check the scale first, because a graph that counts in twos or fives is where ' +
            'these questions hide the difficulty.',
    },
    {
        id: 'oc-example-mean-of-a-list',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of finding the average of a list of numbers?',
        aliases: [
            'worked example average of a list',
            'example of adding up and dividing to get a mean',
            'average of five numbers example',
        ],
        answer:
            'Find the average of 4, 7, 9, 12 and 13. Add them: 4 + 7 + 9 + 12 + 13 = 45, then divide by how many ' +
            'there are: 45 ÷ 5 = 9. The average should sit somewhere in the middle of the list, which is a quick way ' +
            'to check.',
    },
    {
        id: 'oc-example-multiplication-word',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a multiplication word problem?',
        aliases: ['worked example multiplication word problem', 'example of a grouping word problem', 'boxes of pencils example'],
        answer:
            'There are 8 boxes with 24 pencils in each. Split the multiplication: 8 × 20 = 160 and 8 × 4 = 32, so the ' +
            'total is 160 + 32 = 192 pencils. Breaking one number into tens and ones keeps it all doable in your ' +
            'head.',
    },
    {
        id: 'oc-example-division-remainder',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a division with a remainder?',
        aliases: ['worked example division with a remainder', 'example of sharing with some left over', 'how many buses needed example'],
        answer:
            'A group of 94 students travels in buses holding 30 each. Divide: 94 ÷ 30 is 3 with 4 left over. Those 4 ' +
            'still need a seat, so 4 buses are needed. When a remainder is people or objects, decide whether to round ' +
            'up rather than reporting the remainder.',
    },
    {
        id: 'oc-example-money-total',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of adding money amounts?',
        aliases: ['worked example adding money', 'example of a total cost question', 'adding dollars and cents example'],
        answer:
            'Add $6.45, $2.80 and $1.25. Line up the decimal points and add: the cents come to 45 + 80 + 25 = 150, ' +
            'which is $1.50, and the dollars come to 9, giving $10.50. Adding the cents as a separate total avoids ' +
            'losing a carry.',
    },
    {
        id: 'oc-example-pattern-shapes',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a growing shape pattern?',
        aliases: ['worked example growing pattern', 'example of a matchstick pattern', 'how many squares in the next shape example'],
        answer:
            'A pattern uses 4 matches for one square, 7 for two and 10 for three. Each new square adds 3, so the ' +
            'rule is 3 times the number of squares plus 1. Ten squares would need 3 × 10 + 1 = 31 matches. Find what ' +
            'is added each time, then what is left over.',
    },
    {
        id: 'oc-example-clock-reading',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a clock question?',
        aliases: ['worked example clock question', 'example of telling the time', 'quarter to the hour example'],
        answer:
            'A clock shows quarter to four in the afternoon. In digital form that is 3:45 pm, not 4:45, because ' +
            'quarter to counts back from the coming hour. Half an hour later is 4:15 pm.',
    },
    {
        id: 'oc-example-capacity',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a capacity question?',
        aliases: ['worked example capacity', 'example of millilitres and litres', 'how many glasses from a jug example'],
        answer:
            'A 2 litre jug fills glasses of 250 mL. Put both in the same unit: 2 litres is 2000 mL, so the number of ' +
            'glasses is 2000 ÷ 250 = 8. Converting to the smaller unit first keeps the division whole.',
    },
    {
        id: 'oc-example-odd-even-reasoning',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of reasoning about odd and even numbers?',
        aliases: ['worked example odd and even reasoning', 'example of an odd plus even question', 'must the answer be even example'],
        answer:
            'Is an odd number plus an odd number always even? Try several: 3 + 5 = 8 and 7 + 9 = 16, both even. It ' +
            'holds because each odd number is one more than an even one, and the two extra ones pair up. Testing ' +
            'three cases and then explaining why is stronger than testing ten.',
    },
    {
        id: 'oc-example-reading-main-idea',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a main idea question?',
        aliases: ['worked example main idea', 'example of finding the main idea of a passage', 'what is the passage mainly about example'],
        answer:
            'A passage describes three ways bees find flowers, then says beekeepers use this to place hives. The main ' +
            'idea is how bees locate flowers, not beekeeping, because the last sentence is one detail while the rest ' +
            'builds the topic. The main idea is what most of the text supports.',
    },
    {
        id: 'oc-example-reading-word-meaning',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of working out a word from context?',
        aliases: ['worked example word from context', 'example of guessing a word meaning', 'what does the word mean in the passage example'],
        answer:
            'The sentence reads: the path was so narrow it was almost impassable, and they turned back. Impassable ' +
            'must mean impossible to get through, because they turned back and the path was narrow. Use the ' +
            'consequence in the sentence, not what the word looks like.',
    },
    {
        id: 'oc-example-reading-authors-purpose',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of an author purpose question?',
        aliases: ['worked example author purpose', 'example of why the author wrote this', 'purpose of the text example'],
        answer:
            'A text lists reasons a library should stay open later and ends by asking readers to sign a petition. The ' +
            'purpose is to persuade, not to inform, and the petition is the giveaway. Ask what the writer wants the ' +
            'reader to do or feel by the end.',
    },
    {
        id: 'oc-example-sentence-order',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of putting sentences in order?',
        aliases: ['worked example sentence order', 'example of ordering a paragraph', 'which sentence comes first example'],
        answer:
            'Four sentences must form a paragraph. Find the one that introduces something new by name rather than by ' +
            '"it" or "this", and that goes first. Then follow the linking words: however, then and finally each point ' +
            'to where their sentence sits.',
    },
    {
        id: 'oc-example-fact-or-opinion',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of fact or opinion?',
        aliases: ['worked example fact or opinion', 'example of telling fact from opinion', 'is it a fact or an opinion example'],
        answer:
            'The whale is the largest animal on Earth is a fact, because it can be checked. Whales are the most ' +
            'interesting animals is an opinion, because interesting differs between people. Ask whether anyone could ' +
            'disagree without being wrong.',
    },
    {
        id: 'oc-example-which-must-be-true',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a must be true question?',
        aliases: ['worked example must be true', 'example of what follows from the clues', 'which statement must be true example'],
        answer:
            'Every student in the team plays hockey, and Tom is in the team. It must be true that Tom plays hockey. ' +
            'It does not follow that everyone who plays hockey is in the team. Check each option against the clues ' +
            'only, never against what seems likely.',
    },
    {
        id: 'oc-example-grid-position',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a grid reference question?',
        aliases: ['worked example grid reference', 'example of finding a position on a map grid', 'grid coordinates example'],
        answer:
            'On a grid the library is at B3. Read across for the letter and up or down for the number, in that order. ' +
            'Something described as two squares east is then at D3, since each step east moves one letter along.',
    },
    {
        id: 'oc-example-missing-shape-matrix',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a missing shape puzzle?',
        aliases: ['worked example missing shape', 'example of a shape matrix question', 'which shape completes the pattern example'],
        answer:
            'A three by three grid of shapes has one missing. Read across the rows first: if each row adds a side, ' +
            'the missing shape needs the next number of sides. Then check the columns agree with your answer. Both ' +
            'directions must work, which usually rules out all but one option.',
    },
    {
        id: 'oc-example-elapsed-days',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of counting days between dates?',
        aliases: ['worked example counting days', 'example of days between two dates', 'how many days until example'],
        answer:
            'How many days from 26 March to 8 April? Count to the end of March first: 31 − 26 = 5 days, then add the ' +
            '8 days of April, giving 13 days. Splitting at the month boundary avoids having to remember how the ' +
            'months run on.',
    },
    {
        id: 'oc-example-sharing-equally',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of sharing equally?',
        aliases: ['worked example sharing equally', 'example of dividing items between people', 'sharing marbles example'],
        answer:
            'Share 156 marbles between 4 children. Halve twice, since dividing by 4 is halving twice: half of 156 is ' +
            '78, and half of 78 is 39. So each child gets 39. Check by multiplying back: 39 × 4 = 156.',
    },
    {
        id: 'oc-example-estimating',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of estimating an answer?',
        aliases: ['worked example estimating', 'example of an estimation question', 'roughly how much example'],
        answer:
            'Estimate 297 × 4. Round to a friendly number: 300 × 4 = 1200, and since 297 is a little under 300, the ' +
            'real answer is a little under 1200. In multiple choice this is often enough to pick the answer without ' +
            'the full calculation.',
    },
    {
        id: 'oc-example-two-way-comparison',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a comparison word problem?',
        aliases: ['worked example comparison word problem', 'example of how many more than', 'difference word problem example'],
        answer:
            'Ella has 47 stickers and Noah has 19 fewer. Noah has 47 − 19 = 28, and together they have 47 + 28 = 75. ' +
            'The words fewer and more decide the operation, so underline them before calculating anything.',
    },
    {
        id: 'oc-example-spotting-the-irrelevant',
        subject: 'oc-prep',
        question: 'Can you show me a worked example of a question with extra information?',
        aliases: ['worked example extra information', 'example of a question with information you do not need', 'which numbers do I use example'],
        answer:
            'A shop sells 24 apples at 60c each and has been open 12 years. What do the apples cost? The 12 years is ' +
            'there to distract: the answer is 24 × 60c = $14.40. Ask what each number is for before using it, since ' +
            'not every number in a question belongs in the working.',
    },
];
