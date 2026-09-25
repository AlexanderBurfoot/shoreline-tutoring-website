/**
 * Mathematics: probability and statistics, Years 9 to 12.
 *
 * Counting and chance, distributions, and the statistical measures used to
 * describe and compare data.
 */
import type { StudyEntry } from '../types';

export const mathematicsProbabilityEntries: StudyEntry[] = [
    {
        id: 'maths-normal-distribution',
        subject: 'mathematics',
        question: 'What is a z-score and the normal distribution?',
        aliases: ['z score', 'normal distribution', 'standard deviation rule', '68 95 99.7', 'bell curve'],
        answer:
            'A z-score is z = (x − μ)/σ: how many standard deviations a value sits from the mean. ' +
            'In a normal distribution about 68% of values lie within 1 standard deviation, 95% within 2 and 99.7% within 3.',
    },
    {
        id: 'maths-binomial-probability',
        subject: 'mathematics',
        question: 'What is the binomial probability formula?',
        aliases: ['binomial distribution', 'binomial probability', 'nCk', 'combinations'],
        answer:
            'P(X = k) = ⁿCₖ × pᵏ × (1 − p)ⁿ⁻ᵏ, for n independent trials each with probability p of success. ' +
            'The mean is np and the variance is np(1 − p). ⁿCₖ = n!/(k!(n − k)!) counts the orders the successes can fall in.',
    },
    {
        id: 'maths-correlation',
        subject: 'mathematics',
        question: 'What do correlation and the least-squares line mean?',
        aliases: ['correlation coefficient', 'scatterplot', 'line of best fit', 'least squares', 'bivariate data', 'extrapolation', 'interpolation', 'predicting within the data'],
        answer:
            'The correlation coefficient r runs from −1 to 1: the sign gives the direction and the size the strength. ' +
            'The least-squares line is the line of best fit used to predict. ' +
            'Correlation is not causation, and predicting outside the data range is extrapolation, which is unreliable.',
    },
    {
        id: 'maths-sampling',
        subject: 'mathematics',
        question: 'What is a sampling distribution?',
        aliases: ['sampling distribution', 'sample mean', 'central limit theorem', 'sample proportion'],
        answer:
            'Take many samples of size n and the sample means form their own distribution, centred on the population ' +
            'mean with standard deviation σ/√n. The central limit theorem says it approaches a normal distribution as ' +
            'n grows, whatever the population looks like.',
    },
    {
        id: 'maths-combinatorics',
        subject: 'mathematics',
        question: 'What is the difference between permutations and combinations?',
        aliases: ['permutations', 'npr', 'ncr', 'counting techniques', 'pigeonhole'],
        answer:
            'Permutations count arrangements, where order matters: ⁿPᵣ = n!/(n − r)!. ' +
            'Combinations count selections, where order does not: ⁿCᵣ = n!/(r!(n − r)!). ' +
            'If you could swap two chosen items and call it the same result, it is a combination.',
    },
    {
        id: 'maths-discrete-random-variables',
        subject: 'mathematics',
        question: 'How do I work with a discrete random variable?',
        aliases: ['discrete random variable', 'expected value', 'probability distribution table', 'variance of x', 'e(x)'],
        answer:
            'List the outcomes with their probabilities, which must sum to 1. ' +
            'The expected value is E(X) = Σ x·P(X = x), the long-run average. ' +
            'Variance is E(X²) − [E(X)]², and the standard deviation is its square root.',
    },
    {
        id: 'maths-continuous-distributions',
        subject: 'mathematics',
        question: 'How do continuous probability distributions work?',
        aliases: ['continuous random variable', 'probability density function', 'pdf', 'cumulative distribution function', 'cdf'],
        answer:
            'Probability is area under the density function, so the total area is 1 and the probability of any single ' +
            'value is zero. ' +
            'The cumulative function gives P(X ≤ x), so the median is where it reaches 0.5, and quartiles where it ' +
            'reaches 0.25 and 0.75.',
    },
    {
        id: 'maths-standard-deviation',
        subject: 'mathematics',
        question: 'What does standard deviation measure?',
        aliases: ['standard deviation', 'population vs sample standard deviation', 'spread of data', 'sigma statistics'],
        answer:
            'The typical distance of a value from the mean, so a larger standard deviation means more spread. ' +
            'Use σ for a whole population and s for a sample. ' +
            'Adding a constant to every value leaves it unchanged; multiplying by a constant multiplies it by the ' +
            'same amount.',
    },
    {
        id: 'maths-outliers-skew',
        subject: 'mathematics',
        question: 'How do I identify outliers and describe the shape of data?',
        aliases: ['outlier', '1.5 iqr rule', 'skewed data', 'positively skewed', 'symmetric distribution', 'bimodal', 'skewness', 'skew'],
        answer:
            'An outlier lies below Q₁ − 1.5 × IQR or above Q₃ + 1.5 × IQR. ' +
            'Data is positively skewed when the tail stretches right, which pulls the mean above the median, and ' +
            'negatively skewed the other way. Symmetric data has mean and median together.',
    },
    {
        id: 'maths-at-least-one',
        subject: 'mathematics',
        question: 'How do I calculate "at least one" probability?',
        aliases: ['at least one', 'complement probability', 'none of them', 'probability of at least'],
        answer:
            'P(at least one) = 1 − P(none). ' +
            'Listing every case that counts as "at least one" is slow and easy to get wrong, so work out the single ' +
            'case that does not and subtract from 1.',
    },
    {
        id: 'maths-venn-independence',
        subject: 'mathematics',
        question: 'How do Venn diagrams and independent events work?',
        aliases: ['venn diagram', 'union and intersection', 'overlapping events', 'p(a or b)'],
        answer:
            'P(A ∪ B) = P(A) + P(B) − P(A ∩ B), subtracting the overlap counted twice. ' +
            'Mutually exclusive events have no overlap. ' +
            'Independent events satisfy P(A ∩ B) = P(A) × P(B); drawing without replacement makes events dependent, ' +
            'since the denominator changes.',
    },
    {
        id: 'maths-conditional-probability',
        subject: 'mathematics',
        question: 'How does conditional probability work?',
        aliases: ['conditional probability', 'given that', 'p(a given b)', 'probability given', 'dependent probability'],
        answer:
            'P(A|B) = P(A and B)/P(B): the phrase "given that" tells you to restrict attention to the outcomes where ' +
            'B already happened, so B becomes the new denominator. ' +
            'On a two-way table, read along the row or column the condition names rather than using the grand total.',
    },
    {
        id: 'maths-tree-diagrams',
        subject: 'mathematics',
        question: 'How do I use a tree diagram?',
        aliases: ['tree diagram', 'two stage experiment', 'multiply along branches'],
        answer:
            'Multiply along a branch for one outcome, then add across branches for several outcomes. ' +
            'Every set of branches from one point must sum to 1. ' +
            'With replacement the second stage repeats the first; without replacement both the numerator and the ' +
            'denominator drop by one, which is what makes the events dependent.',
    },
    {
        id: 'maths-sample-space',
        subject: 'mathematics',
        question: 'What is a sample space?',
        aliases: ['sample space', 'equally likely outcomes', 'favourable outcomes', 'listing outcomes', 'n(s)'],
        answer:
            'The set of every possible outcome, written S, with n(S) its size. ' +
            'When outcomes are equally likely, P(event) = favourable outcomes ÷ total outcomes. ' +
            'For two-stage experiments, a table or an ordered list is the safest way to be sure none are missed.',
    },
    {
        id: 'maths-relative-frequency',
        subject: 'mathematics',
        question: 'What is the difference between theoretical and experimental probability?',
        aliases: ['relative frequency', 'experimental probability', 'theoretical probability', 'long run frequency'],
        answer:
            'Theoretical probability comes from counting equally likely outcomes; experimental probability, or ' +
            'relative frequency, comes from counting what actually happened, so it is trials of the event divided by ' +
            'total trials. ' +
            'The more trials, the closer the two usually get, which is why simulations use many runs.',
    },
    {
        id: 'maths-mutually-exclusive',
        subject: 'mathematics',
        question: 'What is the difference between mutually exclusive and independent?',
        aliases: ['mutually exclusive', 'independent or exclusive', 'disjoint events', 'can both happen'],
        answer:
            'Mutually exclusive means the two cannot both happen, so P(A and B) = 0 and P(A or B) = P(A) + P(B). ' +
            'Independent means one happening does not change the chance of the other, so P(A and B) = P(A) × P(B). ' +
            'They are different ideas, and two events with non-zero probability cannot be both.',
    },
    {
        id: 'maths-expected-value-context',
        subject: 'mathematics',
        question: 'How do I use expected value in a game or business question?',
        aliases: ['expected value game', 'fair game', 'expected profit', 'long run average', 'expected gain'],
        answer:
            'Multiply each outcome by its probability and add: that is the average over many repeats, not what ' +
            'happens once. ' +
            'A game is fair when the expected value is zero after the cost to play is subtracted. ' +
            'A negative expected value means a loss in the long run, however good one result looks.',
    },
    {
        id: 'maths-counting-arrangements',
        subject: 'mathematics',
        question: 'How do I count arrangements with restrictions?',
        aliases: ['arrangements', 'how many ways', 'number of ways', 'permutations with restrictions', 'identical objects', 'seating arrangements'],
        answer:
            'Handle the restriction first, then arrange the rest. ' +
            'Items that must sit together are treated as one block, which is then arranged internally. ' +
            'In a circle, fix one item and arrange the other n − 1, giving (n − 1)! ' +
            'With repeated identical items, divide by the factorial of each repeat.',
    },
    {
        id: 'maths-probability-complement-rules',
        subject: 'mathematics',
        question: 'When should I use the complement in a probability question?',
        aliases: ['complement', 'not happening', 'at most', 'less than probability', '1 minus probability'],
        answer:
            'Whenever the wanted event has many cases and the unwanted one has few. ' +
            '"At least one" is the classic: P(at least one) = 1 − P(none). ' +
            'The same trick helps with "at most" and "more than", where counting the other side is quicker and less ' +
            'error-prone.',
    },
    {
        id: 'maths-frequency-tables',
        subject: 'mathematics',
        question: 'How do I find the mean from a frequency table?',
        aliases: ['mean from a table', 'grouped data mean', 'fx column', 'modal class'],
        answer:
            'Multiply each value by its frequency, add those products, then divide by the total frequency. ' +
            'For grouped data, use the midpoint of each class as the value, which makes the answer an estimate. ' +
            'The modal class is simply the one with the highest frequency.',
    },
    {
        id: 'maths-comparing-datasets',
        subject: 'mathematics',
        question: 'How do I compare two data sets?',
        aliases: ['comparing data sets', 'comparing box plots', 'centre and spread', 'which group performed better'],
        answer:
            'Compare a measure of centre and a measure of spread, and say what each means in context. ' +
            'A higher median with a smaller interquartile range means better and more consistent. ' +
            'Quote actual figures from the data rather than describing the shapes in words alone.',
    },
    {
        id: 'maths-misleading-graphs',
        subject: 'mathematics',
        question: 'How can a graph be misleading?',
        aliases: ['misleading graph', 'truncated axis', 'scale distortion', 'statistical bias', 'interpreting statistics'],
        answer:
            'An axis that does not start at zero exaggerates differences, uneven scales distort trends, and pictures ' +
            'scaled in two dimensions overstate a one-dimensional change. ' +
            'Check the axes and the sample before trusting a conclusion.',
    },
    {
        id: 'maths-probability-simulations',
        subject: 'mathematics',
        question: 'How do I design a simulation?',
        aliases: ['simulation', 'random numbers', 'modelling probability', 'using a die to model'],
        answer:
            'Choose a device whose outcomes have the same probabilities as the situation: a coin for a half, a die ' +
            'for sixths, random digits for tenths. ' +
            'Define what counts as a success, run many trials, and use the relative frequency as the estimate. ' +
            'More trials give a closer estimate.',
    },
    {
        id: 'maths-probability-and-or',
        subject: 'mathematics',
        question: 'When do I add and when do I multiply probabilities?',
        aliases: ['adding or multiplying probabilities', 'and means multiply', 'or means add'],
        answer:
            'And means both happen, so multiply. Or means at least one happens, so add, then subtract the overlap ' +
            'unless the events cannot both occur. Writing the events out in words first prevents the wrong choice.',
    },
    {
        id: 'maths-probability-without-replacement',
        subject: 'mathematics',
        question: 'How does replacement change a probability?',
        aliases: ['with replacement', 'without replacement', 'changing denominator'],
        answer:
            'With replacement, each draw is independent and the denominators stay the same. Without replacement, both ' +
            'the favourable count and the total fall for the second draw, which is why the two fractions differ.',
    },
    {
        id: 'maths-probability-table',
        subject: 'mathematics',
        question: 'How do I read probabilities from a two-way table?',
        aliases: ['two way table probability', 'reading a contingency table', 'row and column totals'],
        answer:
            'The whole table total is the denominator for a plain probability, a row or column total for a ' +
            'conditional one. The phrase given that tells you to restrict yourself to that row or column.',
    },
    {
        id: 'maths-factorial-notation',
        subject: 'mathematics',
        question: 'What does factorial notation mean?',
        aliases: ['factorial', 'n factorial', 'why zero factorial is one'],
        answer:
            'n! is the product of every whole number from n down to 1, and it counts the arrangements of n distinct ' +
            'objects. By definition 0! = 1, because there is exactly one way to arrange nothing.',
    },
    {
        id: 'maths-arrangements-identical',
        subject: 'mathematics',
        question: 'How do I count arrangements when some items are identical?',
        aliases: ['arrangements with repeated letters', 'identical objects arrangements', 'dividing by repeats'],
        answer:
            'Divide n! by the factorial of each repeated group. BANANA has 6 letters with three As and two Ns, so the ' +
            'count is 6! divided by 3! and 2!, giving 60.',
    },
    {
        id: 'maths-circular-arrangements',
        subject: 'mathematics',
        question: 'How do I count arrangements around a circle?',
        aliases: ['circular arrangements', 'seating around a table count', 'fixing one position'],
        answer:
            'Fix one person to remove the rotations, then arrange the rest: (n − 1)! ways. If reflections also count ' +
            'as the same, halve it again.',
    },
    {
        id: 'maths-binomial-conditions',
        subject: 'mathematics',
        question: 'When can I use the binomial distribution?',
        aliases: ['conditions for a binomial distribution', 'fixed number of trials', 'independent trials same probability'],
        answer:
            'A fixed number of independent trials, each with the same two outcomes and the same probability of ' +
            'success. Sampling without replacement from a small population breaks the last two, so binomial no longer ' +
            'applies.',
    },
    {
        id: 'maths-normal-empirical-rule',
        subject: 'mathematics',
        question: 'What is the 68, 95, 99.7 rule?',
        aliases: ['empirical rule', 'sixty eight ninety five rule', 'standard deviations from the mean'],
        answer:
            'In a normal distribution about 68% of values lie within one standard deviation of the mean, 95% within ' +
            'two and 99.7% within three. It lets you answer many normal distribution questions without a table.',
    },
    {
        id: 'maths-z-score-comparison',
        subject: 'mathematics',
        question: 'How do I use a z-score to compare two results?',
        aliases: ['comparing results with z scores', 'standardised score', 'which result was better'],
        answer:
            'Convert each to the number of standard deviations from its own mean, z = (x − μ)/σ. The larger z is the ' +
            'better relative result, which is how marks from tests with different means can be compared.',
    },
    {
        id: 'maths-sampling-bias',
        subject: 'mathematics',
        question: 'What makes a sample biased?',
        aliases: ['biased sample', 'self selection bias', 'representative sample'],
        answer:
            'Any method that makes some members more likely to be chosen: surveying only volunteers, only one ' +
            'location, or only people who are easy to reach. A large sample collected badly is still biased, so size ' +
            'does not fix method.',
    },
    {
        id: 'maths-correlation-limits',
        subject: 'mathematics',
        question: 'What does a correlation coefficient not tell me?',
        aliases: ['limits of correlation', 'correlation does not prove cause', 'non linear relationship'],
        answer:
            'It measures linear association only, so a strong curved relationship can give a low value. It says ' +
            'nothing about cause, and one extreme point can change it substantially, so always look at the ' +
            'scatterplot as well.',
    },
    {
        id: 'maths-least-squares-use',
        subject: 'mathematics',
        question: 'How do I use a least-squares line for prediction?',
        aliases: ['predicting with a regression line', 'interpolation and extrapolation', 'least squares prediction'],
        answer:
            'Substitute the x value into the equation. Interpolation within the range of the data is reasonably safe; ' +
            'extrapolation beyond it assumes the pattern continues, which the data cannot support.',
    },
    {
        id: 'maths-expected-value-meaning',
        subject: 'mathematics',
        question: 'What does expected value actually mean?',
        aliases: ['meaning of expected value', 'is the game fair'],
        answer:
            'The long run average outcome per trial, not what will happen on any single one. A game is fair when the ' +
            'expected value is zero; a positive expected value for the operator is how every commercial game is ' +
            'designed.',
    },
    {
        id: 'maths-variance-and-sd',
        subject: 'mathematics',
        question: 'How do I calculate variance and standard deviation?',
        aliases: ['calculating variance', 'standard deviation formula', 'population and sample standard deviation'],
        answer:
            'Find the mean, take each deviation from it, square them, average the squares for the variance, then take ' +
            'the square root for the standard deviation. The sample version divides by n − 1 rather than n.',
    },
    {
        id: 'maths-probability-simulation',
        subject: 'mathematics',
        question: 'How do I use a simulation to estimate a probability?',
        aliases: ['simulation to estimate probability', 'random numbers for a simulation', 'many trials estimate'],
        answer:
            'Assign random digits to outcomes in the right proportion, run many trials, and take the relative ' +
            'frequency as the estimate. More trials narrow the estimate, and the design must match the real ' +
            'probabilities exactly.',
    },
];
