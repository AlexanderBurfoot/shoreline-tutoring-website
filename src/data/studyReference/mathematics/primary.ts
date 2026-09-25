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
];
