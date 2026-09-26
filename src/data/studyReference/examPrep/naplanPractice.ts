/**
 * NAPLAN: the question types in detail.
 *
 * Number, measurement, space, chance and data as the tests present them, with
 * the method each rewards.
 */
import type { StudyEntry } from '../types';

export const naplanPracticeEntries: StudyEntry[] = [
    {
        id: 'nap-fractions-of-a-number',
        subject: 'naplan',
        question: 'How do I find a fraction of a whole number?',
        aliases: ['fraction of a whole number', 'two fifths of thirty', 'dividing then multiplying'],
        answer:
            'Divide by the bottom number, then multiply by the top. Two fifths of 30 is 30 ÷ 5 = 6, then 6 × 2 = 12. ' +
            'Doing the division first keeps the numbers manageable.',
    },
    {
        id: 'nap-adding-fractions-same',
        subject: 'naplan',
        question: 'How do I add fractions with the same bottom number?',
        aliases: ['adding fractions same denominator', 'adding parts of a whole', 'keeping the denominator'],
        answer:
            'Add the top numbers and keep the bottom one, then simplify. Two eighths plus three eighths is five ' +
            'eighths. Adding the bottoms as well is the most common error in this question type.',
    },
    {
        id: 'nap-percentage-of-quantity',
        subject: 'naplan',
        question: 'How do I find a percentage of a quantity quickly?',
        aliases: ['percentage of a quantity', 'finding fifty per cent', 'twenty five per cent of a number'],
        answer:
            'Use the easy ones and build: 50% is half, 25% is half again, 10% is one tenth, and 1% is one hundredth. ' +
            '30% is 10% three times, and 15% is 10% plus half of it.',
    },
    {
        id: 'nap-prime-and-composite',
        subject: 'naplan',
        question: 'What are prime and composite numbers?',
        aliases: ['prime number naplan', 'composite number', 'factors of a number naplan'],
        answer:
            'A prime has exactly two factors, itself and one, so 2, 3, 5, 7 and 11 are prime. A composite has more ' +
            'than two. One is neither, and 2 is the only even prime, which is a common question.',
    },
    {
        id: 'nap-ratio-word-problems',
        subject: 'naplan',
        question: 'How do I answer a ratio word problem?',
        aliases: ['ratio word problem', 'for every question', 'sharing in a ratio naplan'],
        answer:
            'Work out what one part is worth first. If red and blue counters are in the ratio 2:3 and there are 25 ' +
            'altogether, there are 5 parts, so one part is 5, giving 10 red and 15 blue.',
    },
    {
        id: 'nap-number-sentences-naplan',
        subject: 'naplan',
        question: 'How do I turn words into a number sentence?',
        aliases: ['turning words into a number sentence', 'writing an equation from a problem', 'number sentence from words'],
        answer:
            'Replace the unknown with a box or letter and write what the sentence says. Five more than three times a ' +
            'number is 20 becomes 3 × n + 5 = 20, which you then undo by subtracting and dividing.',
    },
    {
        id: 'nap-inverse-operations',
        subject: 'naplan',
        question: 'How do I check an answer using the opposite operation?',
        aliases: ['inverse operations', 'checking by working backwards', 'opposite operation check'],
        answer:
            'Undo what you did: check a subtraction by adding, a division by multiplying. It takes a few seconds and ' +
            'catches the kind of error that rereading the question will not.',
    },
    {
        id: 'nap-rounding-in-context',
        subject: 'naplan',
        question: 'When do I round up even though the rule says down?',
        aliases: ['rounding in context', 'how many buses needed', 'rounding up for a real situation'],
        answer:
            'When a part is no use: 3.2 buses means 4 buses, and 7.1 boxes means 8 boxes. The rounding rule applies ' +
            'to numbers, but the situation decides whether a remainder needs another whole one.',
    },
    {
        id: 'nap-order-of-operations-naplan',
        subject: 'naplan',
        question: 'Which operation do I do first?',
        aliases: ['order of operations naplan', 'brackets before multiplying', 'left to right rule'],
        answer:
            'Brackets, then multiplication and division from left to right, then addition and subtraction from left ' +
            'to right. A calculator follows this rule, so an answer that differs usually means brackets were needed.',
    },
    {
        id: 'nap-mixed-operations-problems',
        subject: 'naplan',
        question: 'How do I handle a problem needing two different operations?',
        aliases: ['two different operations', 'mixed operation problem', 'which step first'],
        answer:
            'Do the step the situation requires first, usually finding a total or a unit value, and write the result ' +
            'down before the second step. Reading the question twice tells you which order the story needs.',
    },
    {
        id: 'nap-area-of-composite',
        subject: 'naplan',
        question: 'How do I find the area of a shape made of rectangles?',
        aliases: ['area of a composite shape', 'splitting into rectangles', 'l shaped area'],
        answer:
            'Split it into rectangles, find each area, then add. Alternatively find the area of the whole enclosing ' +
            'rectangle and subtract the missing piece, which is quicker for an L shape.',
    },
    {
        id: 'nap-perimeter-of-composite',
        subject: 'naplan',
        question: 'How do I find the perimeter of an irregular shape?',
        aliases: ['perimeter of an irregular shape', 'missing sides in a perimeter', 'adding around the outside'],
        answer:
            'Work out any unlabelled sides from the ones given, since opposite sides of the whole shape must match, ' +
            'then add every side around the outside once. Marking each side as you add it prevents doubling one.',
    },
    {
        id: 'nap-volume-counting-cubes',
        subject: 'naplan',
        question: 'How do I find volume by counting cubes?',
        aliases: ['counting cubes for volume', 'volume from a drawing', 'hidden cubes'],
        answer:
            'Count the cubes in one layer, then multiply by the number of layers, remembering the hidden ones behind ' +
            'and underneath. For a solid block, that is the same as length times width times height.',
    },
    {
        id: 'nap-scale-on-a-map',
        subject: 'naplan',
        question: 'How do I use a scale to find a real distance?',
        aliases: ['using a map scale', 'one centimetre represents', 'real distance from a map naplan'],
        answer:
            'Read what one unit on the map represents, then multiply. If 1 cm represents 2 km, then 4.5 cm is 9 km. ' +
            'Convert the units at the end rather than partway through.',
    },
    {
        id: 'nap-angles-in-shapes',
        subject: 'naplan',
        question: 'How do I find a missing angle in a shape?',
        aliases: ['missing angle in a shape', 'angle sum of a triangle naplan', 'angles in a quadrilateral'],
        answer:
            'Use the angle sum: 180 degrees in a triangle, 360 in a quadrilateral, and 180 on a straight line. Mark ' +
            'every angle you can work out, even ones the question did not ask for.',
    },
    {
        id: 'nap-parallel-perpendicular',
        subject: 'naplan',
        question: 'What do parallel and perpendicular mean?',
        aliases: ['parallel lines naplan', 'perpendicular lines', 'right angles between lines'],
        answer:
            'Parallel lines stay the same distance apart and never meet; perpendicular lines cross at a right angle. ' +
            'Shapes are often identified by how many pairs of each they have.',
    },
    {
        id: 'nap-transformations-naplan',
        subject: 'naplan',
        question: 'How do I answer questions about flips, slides and turns?',
        aliases: ['flip slide turn', 'reflecting a shape naplan', 'rotating a shape question'],
        answer:
            'A slide moves without turning, a flip gives a mirror image, and a turn rotates about a point. Track one ' +
            'corner through the movement, since the whole shape is hard to follow at once.',
    },
    {
        id: 'nap-symmetry-naplan',
        subject: 'naplan',
        question: 'How do I find lines of symmetry in a shape?',
        aliases: ['lines of symmetry naplan', 'folding a shape', 'how many lines of symmetry'],
        answer:
            'Imagine folding the shape so both halves match exactly: each fold that works is a line of symmetry. A ' +
            'square has four and a rectangle two, and turning the page helps you see diagonal ones.',
    },
    {
        id: 'nap-probability-as-fraction',
        subject: 'naplan',
        question: 'How do I write a chance as a fraction?',
        aliases: ['chance as a fraction naplan', 'probability of an outcome', 'out of how many outcomes'],
        answer:
            'Count the outcomes that give what you want over all the equally likely outcomes. On a spinner the ' +
            'sections must be equal in size for the count to be valid, so check the picture rather than the labels.',
    },
    {
        id: 'nap-chance-comparison',
        subject: 'naplan',
        question: 'How do I compare two chances?',
        aliases: ['comparing two chances', 'which is more likely', 'comparing probabilities naplan'],
        answer:
            'Write both as fractions with the same bottom number, or convert both to decimals or percentages. ' +
            'Comparing raw counts is wrong when the totals differ: 3 out of 5 is more likely than 5 out of 10.',
    },
    {
        id: 'nap-average-from-data',
        subject: 'naplan',
        question: 'How do I find an average from a set of data?',
        aliases: ['finding the average', 'mean of a data set naplan', 'adding then dividing'],
        answer:
            'Add all the values and divide by how many there are. If a value is missing but the average is given, ' +
            'multiply the average by the count to get the total, then subtract the values you have.',
    },
    {
        id: 'nap-graph-scale-reading',
        subject: 'naplan',
        question: 'How do I read a value between the gridlines?',
        aliases: ['reading between gridlines', 'graph scale naplan', 'what one gridline is worth'],
        answer:
            'Work out what one gridline is worth by dividing the labelled gap by the number of spaces, then count ' +
            'from the nearest label. The scale is rarely in ones, which is exactly what the question tests.',
    },
    {
        id: 'nap-two-way-tables-naplan',
        subject: 'naplan',
        question: 'How do I use a table with categories across and down?',
        aliases: ['two way table naplan', 'rows and columns table', 'finding a value in a table'],
        answer:
            'Find the row and the column the question names and read the cell where they meet. Check whether the ' +
            'totals row is included before adding a column yourself, since it is easy to count it twice.',
    },
    {
        id: 'nap-patterns-with-numbers',
        subject: 'naplan',
        question: 'How do I find the rule in a sequence?',
        aliases: ['rule in a sequence naplan', 'next number in a sequence', 'difference between terms naplan'],
        answer:
            'Look at the difference between terms first. A constant difference means adding the same amount, and a ' +
            'constant ratio means multiplying. Test the rule on a term you already know before using it.',
    },
    {
        id: 'nap-function-tables',
        subject: 'naplan',
        question: 'How do I complete an input and output table?',
        aliases: ['input output table naplan', 'completing a table of values', 'finding a two step rule'],
        answer:
            'Compare each input with its output and test one operation, then two. The rule must work for every row, ' +
            'so checking it on the last row before filling in the gaps saves redoing the whole table.',
    },
    {
        id: 'nap-equivalent-expressions',
        subject: 'naplan',
        question: 'How do I tell whether two expressions are the same?',
        aliases: ['equivalent expressions', 'are these the same', 'checking an expression with numbers'],
        answer:
            'Substitute the same number into both. If the results differ, they are not equivalent. Trying two ' +
            'different numbers is enough to be confident for the expressions at this level.',
    },
    {
        id: 'nap-negative-numbers-naplan',
        subject: 'naplan',
        question: 'How do I work with numbers below zero?',
        aliases: ['numbers below zero', 'negative numbers naplan', 'temperature below zero naplan'],
        answer:
            'Use a number line: adding moves right, subtracting moves left. To find the gap between a negative and a ' +
            'positive, count up to zero and then onward, so −5 to 3 is a gap of 8.',
    },
    {
        id: 'nap-place-value-large-small',
        subject: 'naplan',
        question: 'How do I compare large numbers and decimals?',
        aliases: ['comparing large numbers', 'comparing decimals naplan', 'which number is bigger'],
        answer:
            'For whole numbers, compare the number of digits first, then work left to right. For decimals, line up ' +
            'the points and pad with zeros so both have the same number of places, then compare digit by digit.',
    },
    {
        id: 'nap-money-and-decimals',
        subject: 'naplan',
        question: 'How do I calculate with money?',
        aliases: ['money calculations naplan', 'adding dollars and cents', 'change naplan'],
        answer:
            'Keep the decimal points aligned, or work entirely in cents and convert at the end. For change, count up ' +
            'from the cost to the amount paid rather than subtracting decimals.',
    },
    {
        id: 'nap-time-problems-naplan',
        subject: 'naplan',
        question: 'How do I solve problems involving time?',
        aliases: ['time problems naplan', 'elapsed time naplan', 'timetable question naplan'],
        answer:
            'Count up to the next hour, then whole hours, then the remaining minutes. Remember that an hour is 60 ' +
            'minutes, so 2.25 hours is 2 hours 15 minutes rather than 2 hours 25.',
    },
    {
        id: 'nap-measurement-choosing-units',
        subject: 'naplan',
        question: 'Which unit should I use for a measurement?',
        aliases: ['choosing a unit', 'sensible unit for a measurement', 'millimetres or metres'],
        answer:
            'Choose the unit that gives a manageable number: millimetres for a pencil lead, metres for a room, ' +
            'kilometres for a journey, grams for an apple and kilograms for a person. An answer of 0.000004 km ' +
            'signals the wrong choice.',
    },
    {
        id: 'nap-word-problem-key-words',
        subject: 'naplan',
        question: 'Do key words tell me which operation to use?',
        aliases: ['key words in word problems', 'does more mean add', 'trusting key words'],
        answer:
            'Only partly, so use them as a hint rather than a rule. More can mean addition or subtraction depending ' +
            'on the sentence, so picture the situation and ask whether things are being combined, shared, compared or ' +
            'repeated.',
    },
    {
        id: 'nap-reading-a-scale',
        subject: 'naplan',
        question: 'How do I read a measuring scale accurately?',
        aliases: ['reading a measuring scale', 'reading a ruler or jug', 'value between markings'],
        answer:
            'Work out what one small division is worth by dividing the gap between two labels by the number of ' +
            'spaces, then count on from the nearest label. Read at eye level with a jug or cylinder, since looking ' +
            'down gives a reading that is too high.',
    },
    {
        id: 'nap-correct-sentence',
        subject: 'naplan',
        question: 'How do I choose the grammatically correct sentence?',
        aliases: ['which sentence is correct', 'choosing the correct sentence', 'grammar multiple choice'],
        answer:
            'Read each aloud in your head and listen for where it stumbles, then check the specifics: does the verb ' +
            'match the subject, is the tense consistent, and is each apostrophe doing a job. The wrong options ' +
            'usually differ in one small feature.',
    },
];
