/**
 * Worked examples: NAPLAN numeracy, reading and language conventions.
 *
 * The question types that recur across Years 3, 5, 7 and 9, each solved with the
 * numbers shown. Written by hand and shown exactly as written, so the assistant
 * never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleNaplanEntries: StudyEntry[] = [
    {
        id: 'nap-example-place-value',
        subject: 'naplan',
        question: 'Can you show me a worked example of a place value question?',
        aliases: ['worked example place value', 'example of a place value question', 'what is the value of the digit example'],
        answer:
            'In 47,382 what is the value of the 7? Name the columns from the right: units, tens, hundreds, thousands. ' +
            'The 7 sits in the thousands, so its value is 7000, not 7. Questions asking for the value want the whole ' +
            'amount, while questions asking for the digit want just the 7.',
    },
    {
        id: 'nap-example-negative-numbers',
        subject: 'naplan',
        question: 'Can you show me a worked example of a negative number question?',
        aliases: ['worked example negative numbers', 'example of a temperature drop question', 'subtracting past zero example'],
        answer:
            'The temperature is 3°C and falls 8 degrees. Count down through zero: 3 down to 0 uses 3 degrees, leaving ' +
            '5 more, so the temperature is −5°C. The difference between 3 and −5 is 8, which is how to check it.',
    },
    {
        id: 'nap-example-percentage-of-amount',
        subject: 'naplan',
        question: 'Can you show me a worked example of finding a percentage of an amount?',
        aliases: ['worked example percentage of an amount', 'example of finding a percentage', 'twenty five percent of 64 example'],
        answer:
            'Find 25% of 64. A quarter is the same as 25%, so divide by 4: 64 ÷ 4 = 16. For 75% you would then take ' +
            'three of those quarters: 3 × 16 = 48. Turning common percentages into fractions is faster than ' +
            'multiplying by a decimal.',
    },
    {
        id: 'nap-example-fraction-to-decimal',
        subject: 'naplan',
        question: 'Can you show me a worked example of changing a fraction to a decimal?',
        aliases: ['worked example fraction to decimal', 'example of converting a fraction', 'three quarters as a decimal example'],
        answer:
            'Write 3/8 as a decimal. Divide the top by the bottom: 3 ÷ 8 = 0.375. The common ones are worth knowing ' +
            'outright, since 1/4 is 0.25, 1/5 is 0.2 and 1/8 is 0.125, and they appear in every paper.',
    },
    {
        id: 'nap-example-ratio-recipe',
        subject: 'naplan',
        question: 'Can you show me a worked example of scaling a recipe?',
        aliases: ['worked example scaling a recipe', 'example of a recipe ratio question', 'recipe for more people example'],
        answer:
            'A recipe for 4 people uses 300 g of flour. For 6 people, find the amount for one person first: 300 ÷ 4 = ' +
            '75 g, then 75 × 6 = 450 g. Finding the single unit before scaling up works even when the numbers do not ' +
            'divide neatly.',
    },
    {
        id: 'nap-example-area-triangle',
        subject: 'naplan',
        question: 'Can you show me a worked example of the area of a triangle from its base and height?',
        aliases: [
            'worked example area of a triangle from base and height',
            'example of half base times height',
            'half base times height example',
        ],
        answer:
            'A triangle has base 10 cm and height 6 cm. The area is half the base times the height: 10 × 6 = 60, then ' +
            'half of that is 30 cm². The height must be the perpendicular one, not a slanted side, which is what the ' +
            'diagram is testing.',
    },
    {
        id: 'nap-example-volume-from-layers',
        subject: 'naplan',
        question: 'Can you show me a worked example of counting cubes in a solid?',
        aliases: ['worked example counting cubes', 'example of volume by counting blocks', 'how many cubes in the stack example'],
        answer:
            'A stack is 4 cubes long, 3 wide and 2 high. Count one layer, then the layers: a layer is 4 × 3 = 12 ' +
            'cubes, and there are 2 layers, so 12 × 2 = 24 cubes. Counting only the cubes you can see is the mistake, ' +
            'since the hidden ones still count.',
    },
    {
        id: 'nap-example-angles-in-a-triangle',
        subject: 'naplan',
        question: 'Can you show me a worked example of finding an angle in a triangle?',
        aliases: ['worked example angle in a triangle', 'example of a missing angle question', 'angles in a triangle add to 180 example'],
        answer:
            'Two angles of a triangle are 47° and 68°. Angles in a triangle add to 180°, so the third is 180 − 47 − ' +
            '68 = 65°. Subtracting both known angles from 180 in one step is safer than adding them first and ' +
            'forgetting to subtract.',
    },
    {
        id: 'nap-example-line-graph-trend',
        subject: 'naplan',
        question: 'Can you show me a worked example of reading a line graph?',
        aliases: ['worked example reading a line graph', 'example of a trend on a graph', 'when did it increase the most example'],
        answer:
            'A line graph of sales asks when the biggest rise happened. Compare the steepness between each pair of ' +
            'points rather than the height: the steepest upward segment is the biggest rise, even if it sits low on ' +
            'the graph. Height shows how much, slope shows how fast.',
    },
    {
        id: 'nap-example-mean-median-mode',
        subject: 'naplan',
        question: 'Can you show me a worked example of mean, median and mode?',
        aliases: ['worked example mean median mode', 'example of finding the median', 'mode of a data set example'],
        answer:
            'For 3, 5, 5, 8, 9 the mean is the total over the count: 3 + 5 + 5 + 8 + 9 = 30, then 30 ÷ 5 = 6. The ' +
            'median is the middle value once ordered, which is 5, and the mode is the most common, also 5. Order the ' +
            'list before reading off a median.',
    },
    {
        id: 'nap-example-probability-spinner',
        subject: 'naplan',
        question: 'Can you show me a worked example of a spinner probability question?',
        aliases: ['worked example spinner probability', 'example of a chance question with a spinner', 'probability from a spinner example'],
        answer:
            'A spinner has 8 equal sections, 3 of them red. The chance of red is 3/8. If the spinner is used 40 ' +
            'times, the expected number of reds is 3/8 of 40, which is 40 ÷ 8 × 3 = 15. Expected does not mean it will ' +
            'happen exactly.',
    },
    {
        id: 'nap-example-algebra-substitution',
        subject: 'naplan',
        question: 'Can you show me a worked example of substituting into a formula?',
        aliases: ['worked example substituting into a formula', 'example of substitution', 'find the value when x equals example'],
        answer:
            'If y = 3x + 4, find y when x = 5. Replace x and work out the multiplication first: 3 × 5 = 15, then 15 + ' +
            '4 = 19. Writing the substitution out before calculating stops the multiplication and addition being ' +
            'done in the wrong order.',
    },
    {
        id: 'nap-example-solving-an-equation',
        subject: 'naplan',
        question: 'Can you show me a worked example of solving a simple equation?',
        aliases: ['worked example solving an equation', 'example of solving for x', 'two step equation example'],
        answer:
            'Solve 4x − 5 = 23. Undo the subtraction first: 23 + 5 = 28, so 4x = 28. Then undo the multiplication: 28 ' +
            '÷ 4 = 7, so x = 7. Check by substituting back: 4 × 7 − 5 = 23.',
    },
    {
        id: 'nap-example-index-notation',
        subject: 'naplan',
        question: 'Can you show me a worked example of a powers question?',
        aliases: ['worked example powers question', 'example of index notation', 'what does 2 to the power of 5 mean example'],
        answer:
            'Work out 2⁵. The power says how many times to multiply the base by itself, so 2 × 2 × 2 × 2 × 2 = 32. It ' +
            'does not mean 2 × 5, which would be 10, and that wrong answer is always among the options.',
    },
    {
        id: 'nap-example-rate-per-unit',
        subject: 'naplan',
        question: 'Can you show me a worked example of a unit rate question?',
        aliases: ['worked example unit rate', 'example of a cost per item question', 'price per kilogram example'],
        answer:
            'Six identical drinks cost $13.50. One costs 13.50 ÷ 6 = $2.25, so ten would cost 2.25 × 10 = $22.50. ' +
            'Going through the cost of one is the reliable route for any question that changes the quantity.',
    },
    {
        id: 'nap-example-coordinates-plotting',
        subject: 'naplan',
        question: 'Can you show me a worked example of plotting coordinates?',
        aliases: ['worked example plotting coordinates', 'example of reading coordinates', 'which point is at 2 3 example'],
        answer:
            'Plot (2, −3). The first number is across and the second is up or down, so go 2 right then 3 down. ' +
            'Reversing the pair and going 2 down and 3 right lands somewhere else entirely, which is the error these ' +
            'questions look for.',
    },
    {
        id: 'nap-example-pythagoras',
        subject: 'naplan',
        question: 'Can you show me a worked example of Pythagoras in a NAPLAN question?',
        aliases: ['worked example pythagoras naplan', 'example of finding the hypotenuse', 'right angled triangle side example'],
        answer:
            'A right-angled triangle has short sides 6 cm and 8 cm. Square and add: 6² + 8² = 36 + 64 = 100, and the ' +
            'square root of 100 is 10, so the longest side is 10 cm. Adding the sides to get 14 is the trap, and the ' +
            'longest side must be shorter than that.',
    },
    {
        id: 'nap-example-time-schedule',
        subject: 'naplan',
        question: 'Can you show me a worked example of a schedule question?',
        aliases: ['worked example schedule question', 'example of a train timetable question', 'which train should I catch example'],
        answer:
            'A meeting starts at 10:15 am and the journey takes 55 minutes. Work backwards from the deadline: 55 ' +
            'minutes before 10:15 is 9:20 am, so the last usable departure is 9:20 or earlier. Choose the latest ' +
            'listed time that is not after it, never the closest one.',
    },
    {
        id: 'nap-example-scale-drawing-naplan',
        subject: 'naplan',
        question: 'Can you show me a worked example of finding a real length from a plan?',
        aliases: [
            'worked example real length from a plan',
            'example of a plan drawn to scale',
            'real length from a plan example',
        ],
        answer:
            'A plan is drawn so that 1 cm represents 2 m, and a wall measures 7.5 cm. The real length is 7.5 × 2 = 15 ' +
            'm. Going the other way, a real 24 m wall would be drawn 24 ÷ 2 = 12 cm long.',
    },
    {
        id: 'nap-example-apostrophe',
        subject: 'naplan',
        question: 'Can you show me a worked example of an apostrophe question?',
        aliases: ['worked example apostrophe question', 'example of where the apostrophe goes', 'apostrophe for possession example'],
        answer:
            'Choose between the girls bags, the girl’s bags and the girls’ bags. If several girls own them, the ' +
            'apostrophe goes after the s: the girls’ bags. For one girl it goes before: the girl’s bags. Decide how ' +
            'many owners there are first, then place it.',
    },
    {
        id: 'nap-example-subject-verb-agreement',
        subject: 'naplan',
        question: 'Can you show me a worked example of subject and verb agreement?',
        aliases: ['worked example subject verb agreement', 'example of choosing the right verb', 'was or were example'],
        answer:
            'The box of old photographs was or were on the table? The subject is box, which is singular, so it is ' +
            'was. Photographs is part of a describing phrase, not the subject. Cross out the phrase between the ' +
            'subject and the verb, then read it again.',
    },
    {
        id: 'nap-example-commas-in-a-list',
        subject: 'naplan',
        question: 'Can you show me a worked example of a comma question?',
        aliases: ['worked example comma question', 'example of commas in a sentence', 'where do the commas go example'],
        answer:
            'After finishing her homework Mia packed her bag and walked to the bus. A comma belongs after the opening ' +
            'phrase: After finishing her homework, Mia packed her bag and walked to the bus. No comma is needed before ' +
            'and here, because it joins two actions by the same person.',
    },
    {
        id: 'nap-example-spelling-error',
        subject: 'naplan',
        question: 'Can you show me a worked example of a spelling error question?',
        aliases: ['worked example spelling error', 'example of finding the misspelt word', 'which word is spelled wrong example'],
        answer:
            'A sentence contains definately, and the task is to correct it. The word is built from definite, which ' +
            'ends in -ite, so the spelling is definitely. Look for the base word inside the long word, since most ' +
            'errors of this kind come from spelling by sound.',
    },
    {
        id: 'nap-example-word-class',
        subject: 'naplan',
        question: 'Can you show me a worked example of identifying a word class?',
        aliases: ['worked example word class', 'example of naming the part of speech', 'is it an adjective or adverb example'],
        answer:
            'In she ran quickly down the quiet street, quickly describes how she ran, so it is an adverb, and quiet ' +
            'describes the street, so it is an adjective. Ask what the word is describing: a verb means adverb, a ' +
            'noun means adjective.',
    },
    {
        id: 'nap-example-pronoun-reference',
        subject: 'naplan',
        question: 'Can you show me a worked example of a pronoun question?',
        aliases: ['worked example pronoun question', 'example of what the pronoun refers to', 'unclear pronoun example'],
        answer:
            'When Ravi met Josh, he was late. He is unclear, because either boy could be meant. A correct version ' +
            'names the person: when Ravi met Josh, Josh was late. If a pronoun could point to two people, the ' +
            'sentence needs rewriting.',
    },
    {
        id: 'nap-example-sentence-type',
        subject: 'naplan',
        question: 'Can you show me a worked example of identifying a complete sentence?',
        aliases: ['worked example complete sentence', 'example of a sentence fragment', 'which one is a full sentence example'],
        answer:
            'Because the rain had stopped is not a sentence, since because leaves it waiting for a result. Adding one ' +
            'completes it: because the rain had stopped, they went outside. A group of words needs a subject, a verb ' +
            'and a finished thought.',
    },
    {
        id: 'nap-example-reading-inference-naplan',
        subject: 'naplan',
        question: 'Can you show me a worked example of a NAPLAN reading inference question?',
        aliases: ['worked example naplan inference', 'example of an inference in reading', 'how does the character feel example'],
        answer:
            'A text says the boy read the letter twice, folded it carefully and put it in his pocket without a word. ' +
            'Asked how he feels, the support is in the care and the silence, so something like shaken or thoughtful ' +
            'fits. Point to the words that carry it rather than to what you would feel.',
    },
    {
        id: 'nap-example-text-purpose',
        subject: 'naplan',
        question: 'Can you show me a worked example of identifying a text type?',
        aliases: ['worked example identifying a text type', 'example of what kind of text this is', 'is it a report or a recount example'],
        answer:
            'A text with headings, present tense and general statements about how wombats live is an information ' +
            'report. A recount would use past tense and follow one sequence of events. Tense and whether it is about ' +
            'a general class or one occasion separate the two.',
    },
    {
        id: 'nap-example-persuasive-plan',
        subject: 'naplan',
        question: 'Can you show me a worked example of planning a persuasive response?',
        aliases: ['worked example planning a persuasive text', 'example of a naplan persuasive plan', 'how to plan the writing task naplan'],
        answer:
            'For the prompt "homework should be banned", plan a position and three reasons before writing: state the ' +
            'position in the first sentence, give one reason per paragraph with an example, answer one objection, then ' +
            'restate the position. Five minutes of planning buys a structure the marker can follow.',
    },
    {
        id: 'nap-example-narrative-opening',
        subject: 'naplan',
        question: 'Can you show me a worked example of a narrative opening?',
        aliases: ['worked example narrative opening', 'example of how to start a story', 'naplan story beginning example'],
        answer:
            'Instead of "one day I went to the beach and it was fun", begin inside the moment: "The tide had already ' +
            'taken the sandcastle by the time we came back." It gives a place, a change and a reason to read on, ' +
            'without spending a paragraph on background.',
    },
];
