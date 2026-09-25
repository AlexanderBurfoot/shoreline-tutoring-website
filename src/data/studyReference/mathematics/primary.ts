/**
 * Mathematics for primary years, which the site tutors from Year 1.
 *
 * The foundations that later work depends on, explained without secondary
 * notation.
 */
import type { StudyEntry } from '../types';

export const mathematicsPrimaryEntries: StudyEntry[] = [
    {
        id: 'maths-half-and-quarter',
        subject: 'mathematics',
        question: 'What are a half and a quarter?',
        aliases: ['half and quarter', 'simple fractions for kids', 'sharing into halves'],
        answer:
            'A half is one of two equal parts and a quarter one of four. The parts must be equal, which is the idea ' +
            'rather than the words: cutting a cake into two unequal pieces does not make halves, and two quarters ' +
            'make a half.',
    },
    {
        id: 'maths-comparing-fractions-primary',
        subject: 'mathematics',
        question: 'How do I compare fractions at primary school?',
        aliases: ['comparing fractions at primary school', 'which fraction is bigger for kids', 'fraction comparison with pictures'],
        answer:
            'Draw both as the same-sized bar divided into different numbers of parts. With the same number of parts, ' +
            'more shaded is bigger. With the same number shaded, fewer parts means bigger pieces, which is why a ' +
            'third beats a fifth.',
    },
    {
        id: 'maths-2d-and-3d-shapes',
        subject: 'mathematics',
        question: 'What is the difference between 2D and 3D shapes?',
        aliases: ['2d and 3d shapes for kids', 'flat and solid shapes', 'shape names for primary'],
        answer:
            'A 2D shape is flat, with sides and corners, such as a square or triangle. A 3D shape is solid, with ' +
            'faces, edges and vertices, such as a cube or cylinder. A square is the flat face; a cube is the solid ' +
            'built from six of them.',
    },
    {
        id: 'maths-measuring-with-a-ruler',
        subject: 'mathematics',
        question: 'How do I measure with a ruler properly?',
        aliases: ['measuring with a ruler', 'using a ruler', 'starting from zero'],
        answer:
            'Line the zero mark up with one end, not the edge of the plastic, and read at the other end. Check what ' +
            'the small marks are worth, usually millimetres, and read straight down rather than at an angle.',
    },
    {
        id: 'maths-array',
        subject: 'mathematics',
        question: 'What is an array in multiplication?',
        aliases: ['array multiplication', 'rows and columns for multiplying', 'dots in rows'],
        answer:
            'A rectangle of objects in equal rows, so three rows of four shows 3 × 4 = 12. It makes multiplication ' +
            'visible and shows why the order does not matter, since turning the array sideways gives 4 × 3 with the ' +
            'same total.',
    },
    {
        id: 'maths-checking-primary',
        subject: 'mathematics',
        question: 'How do I check my work at primary school?',
        aliases: ['checking work at primary school', 'checking an answer for kids', 'estimating to check for kids'],
        answer:
            'Do the opposite operation: check a subtraction by adding back, a division by multiplying. Then ask ' +
            'whether the answer looks sensible for the question, since a total larger than what you started with ' +
            'usually means an operation went the wrong way.',
    },
    {
        id: 'maths-partitioning',
        subject: 'mathematics',
        question: 'What does partitioning a number mean?',
        aliases: ['partitioning a number', 'splitting a number up', 'breaking a number into parts'],
        answer:
            'Splitting a number into parts that are easier to work with, usually tens and ones: 47 becomes 40 and 7. ' +
            'It is the basis of mental addition, since 47 + 35 is easier as 40 + 30 and then 7 + 5.',
    },
    {
        id: 'maths-multiplying-by-ten',
        subject: 'mathematics',
        question: 'What happens when I multiply by ten, a hundred or a thousand?',
        aliases: ['multiplying by ten', 'moving digits left', 'multiplying by a hundred'],
        answer:
            'Every digit moves one place to the left for each ten, so 3.6 × 100 = 360. Saying the decimal point moves ' +
            'works, but thinking of the digits moving explains why 0.05 × 10 is 0.5 rather than 0.050.',
    },
    {
        id: 'maths-reading-a-thermometer',
        subject: 'mathematics',
        question: 'How do I read a thermometer?',
        aliases: ['reading a thermometer', 'temperature scale', 'thermometer below zero'],
        answer:
            'Find what one small mark is worth by dividing the gap between two labels, then count from the nearest ' +
            'label. Below zero the numbers count downward, so a level between −5 and −10 nearer the −5 is about −6 or ' +
            '−7.',
    },
    {
        id: 'maths-describing-position',
        subject: 'mathematics',
        question: 'How do I describe where something is on a grid?',
        aliases: ['describing a position on a grid', 'grid position for kids', 'across then up'],
        answer:
            'Give the column first, then the row, and say which direction you are counting from. On a map that is a ' +
            'letter then a number, such as C4; on a coordinate grid it is two numbers, across before up.',
    },
    {
        id: 'maths-likely-outcome',
        subject: 'mathematics',
        question: 'What makes an outcome likely or unlikely?',
        aliases: ['likely outcome for kids', 'which is more likely', 'chance words for young students'],
        answer:
            'Compare how many ways it can happen with how many ways it cannot. Drawing a red counter from a bag of ' +
            'eight red and two blue is likely, because most of the counters are red, and certain only if every ' +
            'counter is red.',
    },
    {
        id: 'maths-rounding-for-kids',
        subject: 'mathematics',
        question: 'How do I round to the nearest ten?',
        aliases: ['rounding to the nearest ten for kids', 'rounding for young students', 'which ten is closer'],
        answer:
            'Look at the ones digit: 5 or more rounds up to the next ten, less than 5 stays at the ten below. So 47 ' +
            'rounds to 50 and 43 rounds to 40. A number line makes it visible, since you are choosing the closer ten.',
    },
];
