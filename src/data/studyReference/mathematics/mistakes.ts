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
    {
        id: 'maths-derivative-units',
        subject: 'mathematics',
        question: 'What are the units of a derivative?',
        aliases: ['units of a derivative', 'what dy dx means in units', 'interpreting a derivative in context'],
        answer:
            'The units of the vertical quantity divided by the units of the horizontal one. So dC/dx for cost against ' +
            'items is dollars per item, and interpreting it in those words is usually worth a mark on its own.',
    },
    {
        id: 'maths-integration-constant-matters',
        subject: 'mathematics',
        question: 'Why does the constant of integration matter?',
        aliases: ['why the constant of integration matters', 'plus c significance', 'finding the particular solution'],
        answer:
            'Because integrating gives a family of curves with the same gradient, differing only in vertical ' +
            'position. One known point picks the right member, which is why every applied antiderivative question ' +
            'supplies an initial condition.',
    },
    {
        id: 'maths-definite-versus-indefinite',
        subject: 'mathematics',
        question: 'What is the difference between a definite and an indefinite integral?',
        aliases: ['definite versus indefinite integral', 'limits on an integral', 'why one has plus c'],
        answer:
            'An indefinite integral is a family of functions and keeps the constant. A definite integral has limits ' +
            'and evaluates to a number, so the constant cancels. One answers what the function was; the other answers ' +
            'how much accumulated.',
    },
    {
        id: 'maths-area-versus-integral',
        subject: 'mathematics',
        question: 'Is a definite integral the same as an area?',
        aliases: ['integral versus area', 'is an integral always an area', 'signed area again'],
        answer:
            'Not quite. It is the signed area, so regions below the axis subtract. For a total area, split at each ' +
            'crossing and add the magnitudes; for a net change, such as displacement, the signed value is exactly ' +
            'what you want.',
    },
    {
        id: 'maths-probability-independence-test',
        subject: 'mathematics',
        question: 'How do I test whether two events are independent?',
        aliases: ['testing independence', 'are two events independent', 'multiplying probabilities test'],
        answer:
            'Check whether P(A and B) equals P(A) × P(B). If it does they are independent; if not, knowing one ' +
            'changes the chance of the other. Independence is about information rather than about physical ' +
            'connection.',
    },
    {
        id: 'maths-sampling-variability',
        subject: 'mathematics',
        question: 'Why do two samples from the same population differ?',
        aliases: ['sampling variability', 'why samples differ', 'variation between samples'],
        answer:
            'Because each sample happens to catch different members. The spread of sample means narrows as the sample ' +
            'grows, which is why a larger sample supports a stronger claim while never removing uncertainty entirely.',
    },
    {
        id: 'maths-standard-deviation-meaning-detail',
        subject: 'mathematics',
        question: 'What does a standard deviation of a particular size mean?',
        aliases: ['interpreting standard deviation', 'is a standard deviation large', 'comparing spread'],
        answer:
            'It is only meaningful against the mean and the context: a standard deviation of 5 is large for marks ' +
            'averaging 20 and small for marks averaging 400. Dividing it by the mean gives a relative measure that ' +
            'can be compared.',
    },
    {
        id: 'maths-estimating-answers-senior',
        subject: 'mathematics',
        question: 'How do I sanity check a senior mathematics answer?',
        aliases: ['checking a senior maths answer', 'sanity checking a result', 'does my answer make sense'],
        answer:
            'Ask whether the sign, size and units are plausible, whether a probability lies between 0 and 1, and ' +
            'whether a length or area is positive. Substituting the answer back into the original relationship ' +
            'catches most algebraic slips.',
    },
    {
        id: 'maths-showing-working',
        subject: 'mathematics',
        question: 'How much working should I show?',
        aliases: ['how much working to show', 'showing working in maths', 'marks for method'],
        answer:
            'Enough for a reader to follow each step without guessing, since method marks are awarded even when the ' +
            'final answer is wrong. Define any variable you introduce, and state the rule you are applying when it is ' +
            'not obvious.',
    },
    {
        id: 'maths-command-words',
        subject: 'mathematics',
        question: 'What do the command words in a mathematics question mean?',
        aliases: ['maths command words', 'show that versus prove', 'hence and hence or otherwise'],
        answer:
            'Show that expects you to reach a given result, so the answer is the working. Prove demands rigour with ' +
            'reasons. Hence requires you to use the previous part, while hence or otherwise allows any method. ' +
            'Ignoring hence usually means a much longer solution.',
    },
];
