/**
 * Mathematics: the mistakes that cost the most marks.
 *
 * Named specifically, because a student who knows the trap can check for it.
 */
import type { StudyEntry } from '../types';

export const mathematicsMistakeEntries: StudyEntry[] = [
    {
        id: 'maths-mistakes-indices',
        subject: 'mathematics',
        question: 'What mistakes do students make with indices?',
        aliases: ['common mistakes with indices', 'index law errors', 'why x squared times x cubed is not x to the six'],
        answer:
            'Multiplying the indices when the bases are multiplied: x² × x³ is x⁵, not x⁶. Forgetting that a ' +
            'coefficient is also raised, so (3x)² is 9x² not 3x². And treating (x + y)² as x² + y², which ignores the ' +
            'middle term 2xy.',
    },
    {
        id: 'maths-mistakes-fractions',
        subject: 'mathematics',
        question: 'What mistakes do students make with fractions?',
        aliases: ['common mistakes with fractions', 'fraction errors', 'adding denominators'],
        answer:
            'Adding the denominators as well as the numerators. Cancelling across a plus sign, which is never valid: ' +
            'in (x + 2)/2 the 2s do not cancel. And forgetting to convert a mixed number before multiplying.',
    },
    {
        id: 'maths-mistakes-negatives',
        subject: 'mathematics',
        question: 'What mistakes do students make with negative numbers?',
        aliases: ['common mistakes with negatives', 'negative number errors', 'squaring a negative mistake'],
        answer:
            'Writing −3² as 9 when the index applies only to the 3, giving −9, unless brackets say otherwise. Losing ' +
            'a sign when expanding a bracket after a minus. And assuming a negative answer must be wrong, when many ' +
            'contexts allow one.',
    },
    {
        id: 'maths-mistakes-solving',
        subject: 'mathematics',
        question: 'What mistakes do students make when solving equations?',
        aliases: ['common mistakes solving equations', 'equation solving errors', 'doing it to one side only'],
        answer:
            'Operating on one side only. Dividing by a variable, which loses the solution where that variable is ' +
            'zero. Squaring both sides without checking the answers afterwards, since squaring can introduce ' +
            'solutions that do not satisfy the original.',
    },
    {
        id: 'maths-mistakes-trigonometry',
        subject: 'mathematics',
        question: 'What mistakes do students make in trigonometry?',
        aliases: ['common mistakes in trigonometry', 'trig errors', 'calculator in the wrong mode'],
        answer:
            'Leaving the calculator in radians for a degrees question or the reverse. Using the slanted side as the ' +
            'height in the area formula. And giving only the first solution to an equation when the domain allows ' +
            'several.',
    },
    {
        id: 'maths-mistakes-calculus',
        subject: 'mathematics',
        question: 'What mistakes do students make in calculus?',
        aliases: ['common mistakes in calculus', 'differentiation errors', 'forgetting the chain rule'],
        answer:
            'Differentiating the inside and outside separately instead of using the chain rule. Losing the constant ' +
            'of integration. Not checking whether a stationary point is a maximum or minimum. And differentiating ' +
            'when the question asked for the rate of change of something else.',
    },
    {
        id: 'maths-mistakes-probability',
        subject: 'mathematics',
        question: 'What mistakes do students make in probability?',
        aliases: ['common mistakes in probability', 'probability errors', 'forgetting without replacement'],
        answer:
            'Keeping the same denominator on a second draw without replacement. Adding probabilities of events that ' +
            'can both happen without subtracting the overlap. And answering the complement of what was asked, which ' +
            'is why at least one questions are worth rereading.',
    },
    {
        id: 'maths-mistakes-statistics',
        subject: 'mathematics',
        question: 'What mistakes do students make in statistics?',
        aliases: ['common mistakes in statistics', 'statistics errors', 'mean instead of median'],
        answer:
            'Quoting the mean when an outlier makes the median more representative. Reading a graph whose axis does ' +
            'not start at zero as though it did. And treating a correlation as proof of cause, which no amount of ' +
            'data can establish on its own.',
    },
    {
        id: 'maths-mistakes-units',
        subject: 'mathematics',
        question: 'What mistakes do students make with units and rounding?',
        aliases: ['common mistakes with units', 'rounding errors', 'squared unit conversion'],
        answer:
            'Converting squared and cubed units by the plain factor, when 1 m² is 10,000 cm². Rounding partway ' +
            'through and carrying the error onward. And giving a bare number with no unit, which cannot earn full ' +
            'marks in an applied question.',
    },
    {
        id: 'maths-mistakes-word-problems',
        subject: 'mathematics',
        question: 'What mistakes do students make in word problems?',
        aliases: ['common mistakes in word problems', 'word problem errors', 'answering the wrong question'],
        answer:
            'Answering a different question from the one asked, usually the intermediate value rather than the final ' +
            'one. Not defining the variable. And failing to check the answer against the situation, which is what ' +
            'catches 2.5 buses or a negative age.',
    },
];
