/**
 * Mathematics: functions and graphs, Years 11 and 12.
 *
 * Notation, domain and range, the standard graph families, and how to sketch
 * and read them.
 */
import type { StudyEntry } from '../types';

export const mathematicsFunctionsEntries: StudyEntry[] = [
    {
        id: 'maths-function-notation',
        subject: 'mathematics',
        question: 'What do domain, range and function notation mean?',
        aliases: ['function notation', 'f(x)', 'vertical line test', 'what is a function', 'relation vs function'],
        answer:
            'The domain is every x a function accepts, the range every y it returns. f(x) means the value at x. ' +
            'A relation is a function only if each x gives one y, which the vertical line test checks. ' +
            'Even functions satisfy f(−x) = f(x); odd functions satisfy f(−x) = −f(x).',
    },
    {
        id: 'maths-transformations',
        subject: 'mathematics',
        question: 'How do transformations change a graph?',
        aliases: ['graph transformations', 'translate a graph', 'dilation', 'reflection graph', 'shifting graphs'],
        answer:
            'y = f(x) + k moves the graph up by k, and y = f(x − h) moves it right by h. ' +
            'y = af(x) stretches it vertically by a, and y = f(bx) compresses it horizontally by b. ' +
            'A negative a reflects in the x-axis; a negative b reflects in the y-axis.',
    },
    {
        id: 'maths-quadratic-graphs',
        subject: 'mathematics',
        question: 'How do I sketch a parabola?',
        aliases: ['parabola', 'vertex form', 'axis of symmetry'],
        answer:
            'For y = ax² + bx + c, the axis of symmetry is x = −b/2a, and substituting it gives the turning point. ' +
            'a > 0 opens upwards, a < 0 downwards. Completing the square gives vertex form y = a(x − h)² + k, where ' +
            '(h, k) is the vertex.',
    },
    {
        id: 'maths-exponential-log-graphs',
        subject: 'mathematics',
        question: 'What do exponential and logarithmic graphs look like?',
        aliases: ['exponential graph', 'log graph', 'asymptote', 'euler number'],
        answer:
            'y = aˣ passes through (0, 1) with the x-axis as an asymptote, rising for a > 1 and falling for 0 < a < 1. ' +
            'y = log_a x is its reflection in y = x, passing through (1, 0) with the y-axis as an asymptote. ' +
            'Growth and decay use A = A₀e^{kt}, with k negative for decay.',
    },
    {
        id: 'maths-inverse-functions',
        subject: 'mathematics',
        question: 'What is an inverse function?',
        aliases: ['inverse function', 'inverse trig', 'one to one', 'reflection in y = x'],
        answer:
            'An inverse undoes a function, and its graph is the reflection in y = x. ' +
            'It exists only where the function is one-to-one, which is why inverse trigonometric functions carry ' +
            'restricted domains, such as −π/2 ≤ x ≤ π/2 for sin⁻¹.',
    },
    {
        id: 'maths-polynomials',
        subject: 'mathematics',
        question: 'How do I work with polynomials?',
        aliases: ['polynomial', 'long division algebra'],
        answer:
            'The remainder theorem says dividing P(x) by (x − a) leaves P(a). ' +
            'If P(a) = 0 then (x − a) is a factor, which is the factor theorem and the usual way to start factorising. ' +
            'A polynomial of degree n has at most n real roots.',
    },
    {
        id: 'maths-circle-equation',
        subject: 'mathematics',
        question: 'What is the equation of a circle?',
        aliases: ['equation of a circle', 'centre radius form', 'completing the square circle', 'semicircle'],
        answer:
            '(x − h)² + (y − k)² = r², with centre (h, k) and radius r. ' +
            'If the equation is expanded, complete the square in x and in y to find them. ' +
            'A circle is not a function, but y = √(r² − x²) is the upper semicircle, which is.',
    },
    {
        id: 'maths-curve-sketching',
        subject: 'mathematics',
        question: 'What should I check when sketching a curve?',
        aliases: ['curve sketching', 'sketching menu', 'what to check when sketching', 'shape of a graph'],
        answer:
            'Domain, intercepts, any asymptotes, stationary points and their nature, concavity, and behaviour for ' +
            'large x. ' +
            'A vertical asymptote sits where the denominator is zero; a horizontal one comes from the limit as x ' +
            'grows. Mark the key points on the sketch rather than drawing a vague shape.',
    },
    {
        id: 'maths-odd-even-absolute',
        subject: 'mathematics',
        question: 'What are odd, even and absolute value functions?',
        aliases: ['odd and even functions', 'absolute value', 'modulus function', 'symmetry of a function'],
        answer:
            'Even functions satisfy f(−x) = f(x) and are symmetric about the y-axis; odd functions satisfy ' +
            'f(−x) = −f(x) and have rotational symmetry about the origin. ' +
            '|x| is the distance from zero, so |f(x)| reflects anything below the x-axis upwards.',
    },
    {
        id: 'maths-parametric',
        subject: 'mathematics',
        question: 'What is a parametric equation?',
        aliases: ['parametric form', 'parameter t', 'eliminating the parameter', 'cartesian equation from parametric'],
        answer:
            'Both coordinates are given in terms of a third variable, usually t: x = f(t), y = g(t). ' +
            'To get the Cartesian equation, solve one for t and substitute into the other, or use an identity such as ' +
            'sin²t + cos²t = 1. Parametric form also carries the direction and timing of the motion.',
    },
    {
        id: 'maths-reciprocal-graphs',
        subject: 'mathematics',
        question: 'What do reciprocal and rational graphs look like?',
        aliases: ['hyperbola', 'reciprocal function', 'rational function', 'vertical asymptote', 'one over x'],
        answer:
            'y = 1/x is a hyperbola with the axes as asymptotes, sitting in the first and third quadrants. ' +
            'For a rational function, a vertical asymptote appears where the denominator is zero, and the horizontal ' +
            'one comes from comparing the degrees of the top and bottom. ' +
            'Check the sign either side of each asymptote to know which way the curve goes.',
    },
    {
        id: 'maths-polynomial-graphs',
        subject: 'mathematics',
        question: 'How do I sketch a polynomial from its factors?',
        aliases: ['sketching a cubic', 'sketch a cubic', 'cubic graph', 'polynomial graph', 'multiple roots', 'double root', 'leading coefficient'],
        answer:
            'Each factor gives an x-intercept. A single root crosses the axis, a double root touches and turns back, ' +
            'and a triple root flattens as it crosses. ' +
            'The degree and the sign of the leading coefficient give the behaviour at each end. ' +
            'Plot the y-intercept, then join the shape through the roots.',
    },
    {
        id: 'maths-piecewise-composite',
        subject: 'mathematics',
        question: 'What are piecewise and composite functions?',
        aliases: ['piecewise function', 'composite function', 'f(g(x))', 'function of a function', 'domain restriction'],
        answer:
            'A piecewise function uses a different rule on each part of its domain, so check which rule applies ' +
            'before substituting, and watch whether each endpoint is included. ' +
            'A composite f(g(x)) applies g first, then f, and its domain is limited to values g can accept and that ' +
            'f can then take.',
    },
    {
        id: 'maths-graphical-solutions',
        subject: 'mathematics',
        question: 'How do I solve an equation graphically?',
        aliases: ['solve graphically', 'point of intersection', 'where graphs meet', 'graphs intersect', 'intersection of graphs', 'number of solutions', 'graphical solution'],
        answer:
            'The solutions of f(x) = g(x) are the x values where the two graphs cross, so the number of intersections ' +
            'is the number of solutions. ' +
            'To solve f(x) = 0, read the x-intercepts. ' +
            'Sketching both sides is often the quickest way to answer "how many solutions" without solving anything.',
    },
    {
        id: 'maths-square-root-graphs',
        subject: 'mathematics',
        question: 'What do square root and semicircle graphs look like?',
        aliases: ['square root graph', 'graph of square root', 'square root of x', 'root x', 'half a parabola'],
        answer:
            'y = √x is the top half of a sideways parabola, starting at the origin, with domain x ≥ 0 since a ' +
            'square root cannot take a negative. ' +
            'y = √(r² − x²) is the upper semicircle of radius r, which is a function where the full circle is not.',
    },
    {
        id: 'maths-sign-diagrams',
        subject: 'mathematics',
        question: 'How do I use a sign diagram?',
        aliases: ['sign diagram', 'where is a function positive', 'testing intervals', 'solving an inequality graphically'],
        answer:
            'Mark every zero and every vertical asymptote on a number line: those are the only places the sign can ' +
            'change. ' +
            'Test one value in each interval and record the sign. ' +
            'It answers inequalities, shows where a curve sits above the axis, and classifies stationary points with ' +
            'the first derivative.',
    },
    {
        id: 'maths-domain-range-finding',
        subject: 'mathematics',
        question: 'How do I find the domain and range of a function?',
        aliases: ['find the domain', 'find the range', 'natural domain', 'restrictions on x', 'what values can y take'],
        answer:
            'Start from what is not allowed: no dividing by zero, no square root of a negative, no log of zero or a ' +
            'negative. What remains is the domain. ' +
            'For the range, think about what the graph can actually reach, including any maximum or minimum and any ' +
            'horizontal asymptote it approaches but never touches.',
    },
    {
        id: 'maths-function-transform-order',
        subject: 'mathematics',
        question: 'In what order do I apply transformations?',
        aliases: ['order of transformations', 'stretch then shift', 'combined transformations', 'transformation sequence'],
        answer:
            'Work from the inside out: horizontal changes happen inside the function and behave opposite to how they ' +
            'read, while vertical changes happen outside and behave as they read. ' +
            'For y = 2f(x − 3) + 1, shift right 3, stretch vertically by 2, then shift up 1.',
    },
    {
        id: 'maths-simple-limits',
        subject: 'mathematics',
        question: 'What is a limit?',
        aliases: ['limit', 'approaching a value', 'continuity', 'discontinuity', 'limit notation'],
        answer:
            'A limit is the value a function approaches as x approaches something, whether or not it is defined ' +
            'there. ' +
            'A function is continuous where its graph has no break. ' +
            'Limits underpin the derivative, which is the limit of a gradient as the interval shrinks to zero.',
    },
    {
        id: 'maths-quadratic-vertex-form',
        subject: 'mathematics',
        question: 'How do I find the vertex of a parabola?',
        aliases: ['vertex of a parabola', 'turning point of a quadratic', 'axis of symmetry formula'],
        answer:
            'The axis of symmetry is x = −b/2a, and substituting it gives the y value of the vertex. Completing the ' +
            'square gives the same point directly, since y = a(x − h)² + k has its vertex at (h, k).',
    },
    {
        id: 'maths-quadratic-from-graph',
        subject: 'mathematics',
        question: 'How do I find the equation of a parabola from its graph?',
        aliases: ['equation of a parabola from a graph', 'finding a quadratic from points', 'using the roots to write a quadratic'],
        answer:
            'If the roots are visible, write y = a(x − p)(x − q) and use one more point to find a. If the vertex is ' +
            'visible, use y = a(x − h)² + k the same way. Choose the form that matches what the graph actually shows.',
    },
    {
        id: 'maths-graph-asymptotes',
        subject: 'mathematics',
        question: 'How do I find the asymptotes of a graph?',
        aliases: ['horizontal asymptote', 'behaviour for large x'],
        answer:
            'A vertical asymptote sits where the denominator is zero and the numerator is not. For a horizontal one, ' +
            'look at what happens as x becomes very large: compare the degrees of the numerator and denominator.',
    },
    {
        id: 'maths-graph-intercepts',
        subject: 'mathematics',
        question: 'How do I find intercepts?',
        aliases: ['x intercept', 'y intercept', 'finding where a graph crosses'],
        answer:
            'Set y to zero and solve for x to find the x-intercepts, and set x to zero to find the y-intercept. A ' +
            'graph has at most one y-intercept if it is a function, but it may have several x-intercepts.',
    },
    {
        id: 'maths-function-or-not',
        subject: 'mathematics',
        question: 'How do I tell whether a relation is a function?',
        aliases: ['is it a function', 'one to one function'],
        answer:
            'Apply the vertical line test: if any vertical line meets the graph more than once, it is not a function. ' +
            'The horizontal line test decides whether it is one to one, which is what an inverse function requires.',
    },
    {
        id: 'maths-inverse-function-method',
        subject: 'mathematics',
        question: 'How do I find the rule for an inverse function?',
        aliases: ['finding an inverse rule', 'swapping x and y', 'inverse function method'],
        answer:
            'Swap x and y, then rearrange to make y the subject. The graph of the inverse is the reflection in the ' +
            'line y = x, and the domain of the inverse is the range of the original.',
    },
    {
        id: 'maths-log-graph-transformations',
        subject: 'mathematics',
        question: 'How do I sketch a transformed logarithmic or exponential graph?',
        aliases: ['transforming an exponential graph', 'shifting a log graph', 'asymptote after a shift'],
        answer:
            'Track the asymptote and one known point through each transformation. For y = 2^x the asymptote is y = 0 ' +
            'and the point (0, 1); a vertical shift moves both, and a reflection flips both across the relevant axis.',
    },
    {
        id: 'maths-solving-exponential-equations',
        subject: 'mathematics',
        question: 'How do I solve an equation with the unknown in the exponent?',
        aliases: ['solving an exponential equation', 'taking logs of both sides'],
        answer:
            'If both sides can be written with the same base, equate the indices. Otherwise take logarithms of both ' +
            'sides and use the power law to bring the index down, then divide.',
    },
    {
        id: 'maths-log-equations',
        subject: 'mathematics',
        question: 'How do I solve a logarithmic equation?',
        aliases: ['solving a log equation', 'combining logs', 'checking for invalid solutions'],
        answer:
            'Combine the logarithms into one using the laws, then rewrite in index form. Always check each solution ' +
            'in the original equation, since a value that makes any logarithm take a non-positive argument must be ' +
            'rejected.',
    },
    {
        id: 'maths-polynomial-division',
        subject: 'mathematics',
        question: 'How do I divide polynomials?',
        aliases: ['polynomial division', 'long division of polynomials', 'quotient and remainder'],
        answer:
            'Set it out like long division, dividing the leading terms, multiplying back and subtracting. The result ' +
            'is a quotient plus a remainder over the divisor, and a remainder of zero means the divisor is a factor.',
    },
    {
        id: 'maths-remainder-factor-theorem',
        subject: 'mathematics',
        question: 'What are the remainder and factor theorems?',
        aliases: ['remainder theorem', 'factor theorem', 'testing for a factor'],
        answer:
            'Substituting x = a into a polynomial gives the remainder on division by (x − a). If that value is zero, ' +
            '(x − a) is a factor. This is how a cubic is factorised: test small values of a until one gives zero.',
    },
    {
        id: 'maths-transformation-order-graphs',
        subject: 'mathematics',
        question: 'How do I identify a transformation from an equation?',
        aliases: ['spotting a transformation', 'inside the bracket versus outside', 'horizontal shift direction'],
        answer:
            'A change outside the function acts vertically and in the direction you expect; a change inside acts ' +
            'horizontally and in the opposite direction, so y = f(x + 2) moves left by two. Multiplication inside ' +
            'also compresses rather than stretches.',
    },
    {
        id: 'maths-interval-notation',
        subject: 'mathematics',
        question: 'What is interval notation?',
        aliases: ['interval notation', 'square and round brackets', 'writing a domain'],
        answer:
            'A way of writing a set of values: a square bracket includes the endpoint and a round bracket excludes ' +
            'it, so [2, 5) means from 2 up to but not including 5. Infinity always takes a round bracket, since it is ' +
            'never reached.',
    },
];
