/**
 * Mathematics Extension 1 and Extension 2.
 *
 * The topics that sit beyond Advanced: further proof, vectors, harder calculus,
 * combinatorics and, for Extension 2, complex numbers and mechanics.
 */
import type { StudyEntry } from '../types';

export const mathematicsExtensionEntries: StudyEntry[] = [
    {
        id: 'maths-ext-induction-divisibility',
        subject: 'mathematics',
        question: 'How do I prove divisibility by induction?',
        aliases: ['divisibility proof', 'induction divisibility', 'divisible by induction'],
        answer:
            'Assume the statement holds for n = k, so the expression equals a multiple of the divisor, say dM. ' +
            'Write the n = k + 1 expression in terms of the n = k one, then factor the divisor out of the whole thing. ' +
            'State clearly where the assumption was used.',
    },
    {
        id: 'maths-ext-proof-contradiction',
        subject: 'mathematics',
        question: 'What is proof by contradiction?',
        aliases: ['proof by contradiction', 'contrapositive', 'counterexample', 'irrational proof'],
        answer:
            'Assume the opposite of what you want to prove, then show it forces an impossibility. ' +
            'The classic is √2 being irrational: assuming it equals a fraction in lowest terms leads to both parts ' +
            'being even. One counterexample is enough to disprove a general claim.',
    },
    {
        id: 'maths-ext-trig-sum-difference',
        subject: 'mathematics',
        question: 'What are the sum and difference trig formulas?',
        aliases: ['sum and difference formulas', 'compound angle', 'auxiliary angle', 'sin(a+b)', 'cos(a-b)'],
        answer:
            'sin(A ± B) = sin A cos B ± cos A sin B, and cos(A ± B) = cos A cos B ∓ sin A sin B. ' +
            'The auxiliary angle method rewrites a sin x + b cos x as R sin(x + α), where R = √(a² + b²), which turns ' +
            'a two-term expression into one wave.',
    },
    {
        id: 'maths-ext-inverse-trig',
        subject: 'mathematics',
        question: 'What are the inverse trigonometric functions?',
        aliases: ['inverse trig functions', 'arcsin', 'sin inverse', 'domain of inverse trig'],
        answer:
            'sin⁻¹x has domain −1 ≤ x ≤ 1 and range −π/2 ≤ y ≤ π/2; cos⁻¹x has the same domain with range 0 ≤ y ≤ π; ' +
            'tan⁻¹x takes all reals with range −π/2 < y < π/2. The restrictions exist so each has one output per input.',
    },
    {
        id: 'maths-ext-integration-substitution',
        subject: 'mathematics',
        question: 'How does integration by substitution work?',
        aliases: ['integration by substitution', 'u substitution', 'reverse chain rule', 'change of variable'],
        answer:
            'Let u be the inner function, find du/dx, and replace both the function and dx so the integral is entirely ' +
            'in u. For a definite integral, change the limits to u values rather than substituting back. ' +
            'It is the chain rule run backwards.',
    },
    {
        id: 'maths-ext-volumes',
        subject: 'mathematics',
        question: 'How do I find a volume of revolution?',
        aliases: ['volume of revolution', 'rotating about the x axis', 'washer method', 'shell method'],
        answer:
            'Rotating about the x-axis gives V = π∫y² dx; about the y-axis, V = π∫x² dy. ' +
            'When there is a hole, subtract the inner radius squared from the outer, which is the washer method. ' +
            'Sketch the region first and decide which variable to integrate in.',
    },
    {
        id: 'maths-ext-differential-equations',
        subject: 'mathematics',
        question: 'How do I solve a differential equation?',
        aliases: ['differential equations', 'separation of variables', 'exponential growth model', 'newtons law of cooling', 'solving a de'],
        answer:
            'Separate the variables so each side holds one only, then integrate both sides and include the constant. ' +
            'Use the initial condition to find that constant. ' +
            'dP/dt = kP gives exponential growth or decay; Newton’s law of cooling is dT/dt = k(T − Tₘ).',
    },
    {
        id: 'maths-ext-binomial-theorem',
        subject: 'mathematics',
        question: 'What is the binomial theorem?',
        aliases: ['binomial theorem', 'pascals triangle', 'binomial expansion', 'general term'],
        answer:
            'The expansion of (a + b)ⁿ has terms ⁿCₖ aⁿ⁻ᵏ bᵏ, so the general term is Tₖ₊₁ = ⁿCₖ aⁿ⁻ᵏ bᵏ. ' +
            'The coefficients are the rows of Pascal’s triangle. ' +
            'To find one term, set the power of the variable you want and solve for k rather than expanding everything.',
    },
    {
        id: 'maths-ext-vectors-proofs',
        subject: 'mathematics',
        question: 'How do I use vectors in geometric proofs?',
        aliases: ['vector proofs', 'vector geometry', 'parallel vectors', 'geometric proof with vectors'],
        answer:
            'Write each side as a vector from a common point. Parallel vectors are scalar multiples of each other; ' +
            'perpendicular vectors have a dot product of zero. ' +
            'The projection of a onto b is ((a·b)/|b|²)b, which is the component of a in the direction of b.',
    },
    {
        id: 'maths-ext-complex-numbers',
        subject: 'mathematics',
        question: 'What are complex numbers?',
        aliases: ['complex numbers', 'imaginary numbers', 'argand diagram', 'modulus argument', 'de moivre'],
        answer:
            'A complex number is z = x + iy, where i² = −1, plotted on an Argand diagram. ' +
            'In modulus-argument form, z = r(cos θ + i sin θ), with r = √(x² + y²). ' +
            'De Moivre’s theorem says zⁿ = rⁿ(cos nθ + i sin nθ), which makes powers and roots straightforward.',
    },
    {
        id: 'maths-ext-mechanics',
        subject: 'mathematics',
        question: 'What is the mechanics topic about?',
        aliases: ['mechanics extension 2', 'simple harmonic motion', 'resisted motion', 'velocity as a function of displacement'],
        answer:
            'Motion where acceleration is not constant. Acceleration can be written as dv/dt, v dv/dx or d²x/dt², and ' +
            'the form you choose decides how hard the integral is. ' +
            'Simple harmonic motion satisfies a = −n²x, and resisted motion adds a term depending on velocity.',
    },
    {
        id: 'maths-ext-conditional-probability',
        subject: 'mathematics',
        question: 'How does conditional probability work with tables and trees?',
        aliases: ['conditional probability', 'bayes', 'dependent events', 'probability tree extension'],
        answer:
            'P(A|B) = P(A and B)/P(B): restrict attention to the outcomes where B happened, then ask how often A did too. ' +
            'On a tree, the second set of branches already carries the conditioning. ' +
            'Independent events satisfy P(A|B) = P(A), which is the test for independence.',
    },
    {
        id: 'maths-ext-polynomial-roots',
        subject: 'mathematics',
        question: 'What are the relationships between roots and coefficients?',
        aliases: ['sum and product of roots', 'roots of polynomials', 'symmetric functions of roots'],
        answer:
            'For ax² + bx + c = 0, the roots sum to −b/a and multiply to c/a. ' +
            'For a cubic ax³ + bx² + cx + d, the roots sum to −b/a, the pairs sum to c/a, and all three multiply to −d/a. ' +
            'They let you answer questions about roots without finding them.',
    },
    {
        id: 'maths-ext-double-angle',
        subject: 'mathematics',
        question: 'What are the double angle formulas?',
        aliases: ['double angle', 'sin 2a', 'cos 2a', 'tan 2a', 'half angle'],
        answer:
            'sin 2A = 2 sin A cos A. cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A. ' +
            'tan 2A = 2 tan A/(1 − tan²A). ' +
            'The three forms of cos 2A matter: pick the one that leaves only the function you want, which is how ' +
            'sin²A and cos²A are integrated.',
    },
    {
        id: 'maths-ext-t-formula',
        subject: 'mathematics',
        question: 'What is the t-formula?',
        aliases: ['t formula', 'half angle substitution', 'tan half x', 'weierstrass substitution'],
        answer:
            'With t = tan(x/2): sin x = 2t/(1 + t²), cos x = (1 − t²)/(1 + t²), tan x = 2t/(1 − t²). ' +
            'It turns a trigonometric equation into an algebraic one. ' +
            'Check x = 180° separately, since tan(x/2) is undefined there and that solution can be lost.',
    },
    {
        id: 'maths-ext-vector-projection',
        subject: 'mathematics',
        question: 'What is the projection of one vector onto another?',
        aliases: ['vector projection', 'scalar projection', 'component of a vector', 'resolving a vector'],
        answer:
            'The scalar projection of u onto v is (u·v)/|v|: how far u reaches along v. ' +
            'The vector projection multiplies that by the unit vector: ((u·v)/|v|²)v. ' +
            'Subtracting it from u leaves the component perpendicular to v.',
    },
    {
        id: 'maths-ext-dot-product',
        subject: 'mathematics',
        question: 'How does the dot product work?',
        aliases: ['dot product', 'scalar product', 'angle between vectors', 'perpendicular vectors', 'unit vector'],
        answer:
            'u·v = x₁x₂ + y₁y₂ = |u||v| cos θ, so the angle follows from cos θ = (u·v)/(|u||v|). ' +
            'A dot product of zero means perpendicular. ' +
            'A unit vector is u/|u|, which keeps the direction and sets the length to 1.',
    },
    {
        id: 'maths-ext-slope-fields',
        subject: 'mathematics',
        question: 'How do I read a slope field?',
        aliases: ['slope field', 'direction field', 'sketching a solution curve', 'matching a differential equation'],
        answer:
            'Each short line shows dy/dx at that point. ' +
            'To match a field to an equation, test a few points: where dy/dx depends only on x the slopes are constant ' +
            'down each column, and only on y constant along each row. ' +
            'A solution curve follows the slopes without crossing them.',
    },
    {
        id: 'maths-ext-projectile',
        subject: 'mathematics',
        question: 'How is projectile motion set up in Extension 1?',
        aliases: ['projectile extension 1', 'projectile in maths', 'time of flight maths', 'range of a projectile', 'cartesian path'],
        answer:
            'Start from acceleration: ẍ = 0 and ÿ = −g, then integrate, using the initial velocity components ' +
            'v cos θ and v sin θ as the constants. ' +
            'Maximum height is where ẏ = 0; time of flight is where y returns to its starting height; the Cartesian ' +
            'path comes from eliminating t.',
    },
    {
        id: 'maths-ext-inequalities',
        subject: 'mathematics',
        question: 'How do I solve harder inequalities?',
        aliases: ['rational inequality', 'absolute value inequality', 'inequality with x in the denominator', 'harder inequalities'],
        answer:
            'For an unknown in the denominator, multiply by the square of the denominator, which is always positive, ' +
            'then solve the resulting polynomial inequality and exclude values that make the denominator zero. ' +
            'For |ax + b| < c, write −c < ax + b < c; for > c, solve the two cases separately.',
    },
    {
        id: 'maths-ext-binomial-term',
        subject: 'mathematics',
        question: 'How do I find a specific term in a binomial expansion?',
        aliases: ['coefficient of x', 'term independent of x', 'specific term binomial', 'greatest coefficient'],
        answer:
            'The general term is Tₖ₊₁ = ⁿCₖ aⁿ⁻ᵏ bᵏ. ' +
            'Write the power of x in that term, set it equal to the power you want, and solve for k. ' +
            'The term independent of x is the case where that power is zero.',
    },
    {
        id: 'maths-ext-binomial-mean',
        subject: 'mathematics',
        question: 'What are the mean and variance of a binomial distribution?',
        aliases: ['binomial mean', 'binomial variance', 'bernoulli trial', 'np', 'sample proportion'],
        answer:
            'For n independent trials with probability p: mean np, variance np(1 − p), standard deviation the square ' +
            'root of that. ' +
            'For a sample proportion, the mean is p and the standard deviation is √(p(1 − p)/n), which is the basis ' +
            'of the normal approximation for large n.',
    },
    {
        id: 'maths-ext-pigeonhole',
        subject: 'mathematics',
        question: 'What is the pigeonhole principle?',
        aliases: ['pigeonhole principle', 'at least two in the same', 'counting argument'],
        answer:
            'If n objects go into k boxes and n > k, some box holds at least two. ' +
            'More generally some box holds at least ⌈n/k⌉. ' +
            'The work in these questions is choosing what the objects and boxes are, then the conclusion follows.',
    },
    {
        id: 'maths-ext-logistic',
        subject: 'mathematics',
        question: 'What is the logistic equation?',
        aliases: ['logistic equation', 'carrying capacity', 'population model', 'limited growth'],
        answer:
            'dP/dt = kP(1 − P/M), where M is the carrying capacity. ' +
            'Growth is nearly exponential while P is small, slows as P approaches M, and stops at P = M. ' +
            'The curve is S-shaped, with its steepest point at half the carrying capacity.',
    },
];
