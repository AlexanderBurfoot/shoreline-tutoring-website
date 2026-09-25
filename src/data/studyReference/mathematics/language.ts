/**
 * Mathematics: what the words in a question are asking for.
 *
 * Simplify against solve, exact against approximate, and the conventions that
 * cost marks when they are read loosely.
 */
import type { StudyEntry } from '../types';

export const mathematicsLanguageEntries: StudyEntry[] = [
    {
        id: 'maths-simplify-versus-solve',
        subject: 'mathematics',
        question: 'What is the difference between simplify and solve?',
        aliases: ['simplify versus solve', 'does simplify mean solve', 'what simplify asks for'],
        answer:
            'Simplify means rewrite the expression in a neater equivalent form, and the answer is an expression. ' +
            'Solve means find the values that make an equation true, and the answer is a number or numbers. An ' +
            'expression has no equals sign, so it cannot be solved.',
    },
    {
        id: 'maths-flipping-inequality',
        subject: 'mathematics',
        question: 'Why do I flip the inequality sign?',
        aliases: ['flipping the inequality', 'reversing an inequality sign', 'dividing an inequality by a negative'],
        answer:
            'Because multiplying or dividing by a negative reverses the order of the number line: 2 < 3 but −2 > −3. ' +
            'Adding or subtracting never reverses it, and neither does multiplying by a positive.',
    },
    {
        id: 'maths-exact-versus-approximate',
        subject: 'mathematics',
        question: 'What is the difference between an exact and an approximate answer?',
        aliases: ['exact versus approximate', 'when to leave an answer in surd form', 'exact value question'],
        answer:
            'An exact answer keeps surds, fractions and π as they are, so √2 and π/3 are exact while 1.41 and 1.05 ' +
            'are approximations. If a question says exact value, rounding loses the mark however accurate it is.',
    },
    {
        id: 'maths-radians-versus-degrees',
        subject: 'mathematics',
        question: 'When do I use radians instead of degrees?',
        aliases: ['radians or degrees', 'when to use radians'],
        answer:
            'Use radians for arc length and sector area, since l = rθ and A = ½r²θ only hold in radians, and for all ' +
            'calculus with trigonometric functions, because the derivative of sin x is cos x only in radians. Check ' +
            'the calculator mode before starting.',
    },
    {
        id: 'maths-variable-versus-constant',
        subject: 'mathematics',
        question: 'What is the difference between a variable and a constant?',
        aliases: ['variable versus constant', 'what a parameter is', 'letters that do not change'],
        answer:
            'A variable stands for a quantity that changes, usually x or y. A constant has a fixed value, whether a ' +
            'number or a letter such as g or c standing for one. A parameter is constant within a problem but changes ' +
            'between problems, such as the a in y = ax².',
    },
    {
        id: 'maths-order-of-subtraction',
        subject: 'mathematics',
        question: 'Why does the order matter in subtraction and division?',
        aliases: ['does order matter in subtraction', 'is subtraction commutative', 'why a minus b is not b minus a'],
        answer:
            'Addition and multiplication give the same result either way, but subtraction and division do not: 7 − 3 ' +
            'is not 3 − 7. In a word problem the order comes from the situation, which is why reading which quantity ' +
            'is being reduced matters.',
    },
    {
        id: 'maths-null-factor-law',
        subject: 'mathematics',
        question: 'What is the null factor law?',
        aliases: ['null factor law', 'if a product is zero', 'why we set each bracket to zero'],
        answer:
            'If a product equals zero then at least one factor must be zero. That is why (x − 4)(x + 2) = 0 gives x = ' +
            '4 or x = −2. It works only against zero: if the product were 8, neither bracket has to equal 8.',
    },
    {
        id: 'maths-radical',
        subject: 'mathematics',
        question: 'What is a radical?',
        aliases: ['radical', 'root symbol', 'radicand'],
        answer:
            'The root sign and the expression under it, so √(x + 1) is a radical and x + 1 is the radicand. A radical ' +
            'with no perfect square factor is in simplest form, and an answer keeping a radical is exact rather than ' +
            'rounded.',
    },
    {
        id: 'maths-numerator',
        subject: 'mathematics',
        question: 'What is the numerator?',
        aliases: ['numerator', 'top of a fraction', 'how many parts'],
        answer:
            'The number above the line, counting how many parts you have, while the denominator below says how many ' +
            'parts make a whole. A numerator larger than the denominator means the fraction is greater than one.',
    },
    {
        id: 'maths-triangular-number',
        subject: 'mathematics',
        question: 'What is a triangular number?',
        aliases: ['triangular number', '1 3 6 10', 'sum of consecutive integers'],
        answer:
            'A total made by adding consecutive whole numbers: 1, 3, 6, 10, 15 and so on, since each can be drawn as ' +
            'a triangle of dots. The nth one is n(n + 1)/2, which is also the number of handshakes among n + 1 ' +
            'people.',
    },
    {
        id: 'maths-divisor',
        subject: 'mathematics',
        question: 'What is a divisor?',
        aliases: ['divisor', 'number you divide by', 'dividend and divisor'],
        answer:
            'The number you are dividing by, while the dividend is the number being divided and the quotient is the ' +
            'answer. In 84 ÷ 6 = 14, the divisor is 6. A divisor of a whole number with no remainder is also called a ' +
            'factor of it.',
    },
    {
        id: 'maths-point-on-a-curve',
        subject: 'mathematics',
        question: 'How do I test whether a point lies on a curve?',
        aliases: ['is a point on the curve', 'testing a point on a graph', 'substituting a point'],
        answer:
            'Substitute the coordinates into the equation and see whether both sides agree. If they do, the point is ' +
            'on the curve; if not, the difference tells you which side of it the point sits.',
    },
    {
        id: 'maths-height-by-trigonometry',
        subject: 'mathematics',
        question: 'How do I find the height of something I cannot measure?',
        aliases: ['height of a tree with trigonometry', 'finding a height indirectly', 'angle of elevation to a height'],
        answer:
            'Measure your distance from the base and the angle of elevation to the top, then height = distance × tan ' +
            'θ. Add your own eye height if the angle was measured from eye level, which is the step most often ' +
            'forgotten.',
    },
    {
        id: 'maths-series-convergence',
        subject: 'mathematics',
        question: 'How do I tell whether a geometric series converges?',
        aliases: ['does a series converge', 'when a limiting sum exists', 'convergent geometric series'],
        answer:
            'Only when the common ratio lies strictly between −1 and 1, so each term is smaller in magnitude than the ' +
            'last. Then the limiting sum is a/(1 − r). At r = 1 or beyond, the terms do not shrink and the sum grows ' +
            'without limit.',
    },
    {
        id: 'maths-time-to-double',
        subject: 'mathematics',
        question: 'How do I find how long an investment takes to double?',
        aliases: ['time to double an investment', 'doubling time', 'solving for n with logarithms'],
        answer:
            'Set the final amount to twice the principal, so 2 = (1 + r)ⁿ, then take logarithms of both sides: n = ' +
            'log 2 ÷ log(1 + r). At 6% a year that is about 12 years, which is where the rule of 72 comes from.',
    },
    {
        id: 'maths-mode-from-histogram',
        subject: 'mathematics',
        question: 'How do I find the mode from a histogram?',
        aliases: ['mode from a histogram', 'modal class', 'tallest column mode'],
        answer:
            'The modal class is the interval with the tallest column. Grouped data gives a modal class rather than a ' +
            'single mode, since the individual values are no longer visible, so name the interval rather than ' +
            'guessing a value inside it.',
    },
    {
        id: 'maths-complement-of-an-event',
        subject: 'mathematics',
        question: 'How do I use the complement of an event?',
        aliases: ['complement of an event', 'probability of not happening', 'one minus the probability'],
        answer:
            'P(not A) = 1 − P(A). It is the fastest route through any at least one question: the complement of at ' +
            'least one is none, which is usually a single product rather than a sum of cases.',
    },
    {
        id: 'maths-counting-with-a-table',
        subject: 'mathematics',
        question: 'How do I count outcomes using a table?',
        aliases: ['counting outcomes with a table', 'two dice table', 'sample space table'],
        answer:
            'Draw a grid with one trial along the top and the other down the side, then fill each cell with the ' +
            'combined outcome. For two dice that gives 36 equally likely cells, and counting the ones that satisfy ' +
            'the condition gives the probability directly.',
    },
    {
        id: 'maths-expected-number',
        subject: 'mathematics',
        question: 'How do I find the expected number of successes?',
        aliases: ['expected number of successes', 'expected frequency', 'how many times will it happen'],
        answer:
            'Multiply the number of trials by the probability of success. Sixty rolls of a die should give 60 × ⅙ = ' +
            '10 sixes. It is a long-run average, so the actual count varies around it rather than matching it.',
    },
    {
        id: 'maths-why-factorise',
        subject: 'mathematics',
        question: 'Why is factorising useful?',
        aliases: ['why factorise', 'point of factorising', 'what factorising is for'],
        answer:
            'Because a product equal to zero tells you each factor separately, which is how equations are solved. It ' +
            'also reveals the roots of a graph, cancels algebraic fractions, and turns an awkward expression into one ' +
            'whose behaviour can be read off.',
    },
    {
        id: 'maths-why-complete-the-square',
        subject: 'mathematics',
        question: 'Why complete the square when the formula exists?',
        aliases: ['why complete the square', 'point of completing the square', 'vertex form advantage'],
        answer:
            'Because it gives the vertex directly, which the formula does not, and it shows why the graph sits where ' +
            'it does. It is also how the quadratic formula is derived, and it is needed for circles and for some ' +
            'integration.',
    },
    {
        id: 'maths-discriminant-uses',
        subject: 'mathematics',
        question: 'What can the discriminant tell me besides the number of roots?',
        aliases: ['uses of the discriminant', 'discriminant and tangency', 'proving no solutions'],
        answer:
            'A discriminant of zero means a repeated root, which is the algebraic condition for a line to be tangent ' +
            'to a curve. A negative discriminant proves no real solutions exist, which is often what a question is ' +
            'really asking.',
    },
    {
        id: 'maths-simultaneous-three-unknowns',
        subject: 'mathematics',
        question: 'How do I solve three equations in three unknowns?',
        aliases: ['three equations three unknowns', 'solving three simultaneous equations', 'eliminating twice'],
        answer:
            'Eliminate one variable from two different pairs to leave two equations in two unknowns, solve those, ' +
            'then substitute back. Keeping the equations numbered and stating which pair you combined each time is ' +
            'what prevents losing track.',
    },
    {
        id: 'maths-graph-transformations-order',
        subject: 'mathematics',
        question: 'Does the order of transformations matter?',
        aliases: ['order of transformations', 'stretch before translate'],
        answer:
            'Yes. A stretch applied before a translation moves the shifted graph by a different amount than the ' +
            'reverse. Work from the inside of the function outwards, which matches the order the operations are ' +
            'applied to x.',
    },
    {
        id: 'maths-asymptote-behaviour',
        subject: 'mathematics',
        question: 'Can a graph cross its asymptote?',
        aliases: ['crossing an asymptote', 'can a curve cross an asymptote', 'horizontal asymptote crossing'],
        answer:
            'A vertical asymptote never, since the function is undefined there. A horizontal asymptote can be ' +
            'crossed, because it describes behaviour for large x rather than a boundary, which is why some rational ' +
            'graphs cut it once near the origin.',
    },
    {
        id: 'maths-domain-restrictions',
        subject: 'mathematics',
        question: 'What restricts the domain of a function?',
        aliases: ['domain restrictions', 'what limits a domain', 'excluded values'],
        answer:
            'Division by zero, even roots of negatives, and logarithms of non-positive numbers. In an applied ' +
            'question the context restricts it further, since a length or a number of items cannot be negative.',
    },
    {
        id: 'maths-composite-order',
        subject: 'mathematics',
        question: 'Does the order matter in a composite function?',
        aliases: ['order of composite functions', 'f of g versus g of f', 'composite function order'],
        answer:
            'Almost always. f(g(x)) applies g first, and reversing it usually gives a different function: squaring ' +
            'then adding one is not the same as adding one then squaring. Work from the inside out.',
    },
    {
        id: 'maths-why-radians-calculus',
        subject: 'mathematics',
        question: 'Why does calculus require radians?',
        aliases: ['why calculus uses radians', 'derivative of sin in degrees', 'radians and derivatives'],
        answer:
            'Because the derivative of sin x is cos x only when x is in radians. In degrees a constant factor of ' +
            'π/180 appears in every derivative, which is why radians are defined the way they are.',
    },
    {
        id: 'maths-limits-meaning',
        subject: 'mathematics',
        question: 'What does a limit actually mean?',
        aliases: ['meaning of a limit', 'what a limit describes'],
        answer:
            'The value a function approaches as the input approaches something, whether or not it is ever reached. It ' +
            'lets gradients and areas be defined exactly rather than approximately, which is what makes calculus ' +
            'rigorous rather than a good estimate.',
    },
    {
        id: 'maths-reading-scatterplot',
        subject: 'mathematics',
        question: 'How do I read a scatterplot?',
        aliases: ['reading a scatterplot', 'interpreting a scatter graph', 'direction and strength of correlation'],
        answer:
            'Describe direction, form and strength: positive or negative, linear or curved, strong or weak, then note ' +
            'any outlier. A line of best fit only belongs on it if the form is linear, and no pattern at all is a ' +
            'valid description.',
    },
    {
        id: 'maths-reference-sheet',
        subject: 'mathematics',
        question: 'How do I use the mathematics reference sheet?',
        aliases: ['mathematics reference sheet', 'formula sheet in the exam', 'what is on the reference sheet'],
        answer:
            'It supplies many standard formulas, so learn which are on it and which are not rather than memorising ' +
            'everything. Practise with it from the start of the year, since finding a formula under time is a skill ' +
            'of its own. NESA publishes the current version.',
    },
    {
        id: 'maths-distributive-law',
        subject: 'mathematics',
        question: 'What is the distributive law?',
        aliases: ['distributive law', 'expanding with the distributive law', 'a times b plus c'],
        answer:
            'Multiplying a sum gives the same result as multiplying each part and adding: a(b + c) = ab + ac. It is ' +
            'what expanding brackets does, and it works in reverse as factorising, which is why the two are the same ' +
            'skill.',
    },
    {
        id: 'maths-rate-year-8',
        subject: 'mathematics',
        question: 'What is a rate, and how is it different from a ratio?',
        aliases: ['rate versus ratio', 'what is a rate at year 8', 'rate with two units'],
        answer:
            'A ratio compares two quantities of the same kind and has no units, such as 3:2. A rate compares ' +
            'different kinds and keeps its units, such as 60 km per hour or $4 per kilogram. A unit rate has 1 as its ' +
            'second quantity.',
    },
    {
        id: 'maths-plotting-a-linear-graph',
        subject: 'mathematics',
        question: 'How do I plot a linear graph?',
        aliases: ['plotting a linear graph', 'drawing a straight line graph', 'table of values for a line'],
        answer:
            'Make a table with three x values, work out y for each, plot the points and rule a line through them. ' +
            'Three points rather than two, because if one is misplaced the three will not line up and you will ' +
            'notice.',
    },
    {
        id: 'maths-inequality-year-9',
        subject: 'mathematics',
        question: 'How do I show a solution to an inequality?',
        aliases: ['inequality at year 9', 'solving and graphing an inequality', 'showing an inequality solution'],
        answer:
            'Solve it like an equation, remembering to reverse the sign if you multiply or divide by a negative, then ' +
            'show the answer on a number line with an open circle for < or > and a filled circle for ≤ or ≥.',
    },
    {
        id: 'maths-pythagoras-year-9',
        subject: 'mathematics',
        question: 'How do I use Pythagoras theorem?',
        aliases: ['pythagoras at year 9', 'using pythagoras', 'finding the hypotenuse'],
        answer:
            'In a right-angled triangle, a² + b² = c² where c is the hypotenuse opposite the right angle. Add the ' +
            'squares to find the hypotenuse and subtract to find a shorter side, and identify the hypotenuse before ' +
            'deciding which.',
    },
];
