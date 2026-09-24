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
        aliases: ['parabola', 'vertex form', 'axis of symmetry', 'completing the square', 'turning point'],
        answer:
            'For y = ax² + bx + c, the axis of symmetry is x = −b/2a, and substituting it gives the turning point. ' +
            'a > 0 opens upwards, a < 0 downwards. Completing the square gives vertex form y = a(x − h)² + k, where ' +
            '(h, k) is the vertex.',
    },
    {
        id: 'maths-exponential-log-graphs',
        subject: 'mathematics',
        question: 'What do exponential and logarithmic graphs look like?',
        aliases: ['exponential graph', 'log graph', 'asymptote', 'exponential growth', 'euler number'],
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
        aliases: ['polynomial', 'remainder theorem', 'factor theorem', 'roots of polynomials', 'long division algebra'],
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
        aliases: ['square root graph', 'graph of square root', 'square root of x', 'semicircle', 'root x', 'half a parabola'],
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
];
