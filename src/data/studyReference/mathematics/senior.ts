/**
 * Mathematics, Years 11 and 12.
 *
 * Shared across Standard, Advanced and Extension 1: functions, trigonometry,
 * series, calculus and statistics.
 */
import type { StudyEntry } from '../types';

export const mathematicsSeniorEntries: StudyEntry[] = [
    {
        id: 'maths-quadratic-formula',
        subject: 'mathematics',
        question: 'What is the quadratic formula?',
        aliases: ['quadratic formula', 'solve a quadratic', 'roots of a quadratic', 'ax2 + bx + c'],
        answer:
            'For ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / 2a. ' +
            'Try factorising first, since it is faster when it works, and keep the ± so you find both roots.',
    },
    {
        id: 'maths-discriminant',
        subject: 'mathematics',
        question: 'What does the discriminant tell me?',
        aliases: ['discriminant', 'b squared minus 4ac', 'how many roots', 'delta quadratic'],
        answer:
            'The discriminant is Δ = b² − 4ac. If Δ > 0 there are two real roots, if Δ = 0 there is one repeated ' +
            'root, and if Δ < 0 there are no real roots. It tells you how many times the parabola meets the x-axis.',
    },
    {
        id: 'maths-sine-rule',
        subject: 'mathematics',
        question: 'What is the sine rule?',
        aliases: ['sine rule', 'law of sines', 'sin rule'],
        answer:
            'a / sin A = b / sin B = c / sin C. Use it when you have a side with its opposite angle. ' +
            'Watch for the ambiguous case: an obtuse answer may also fit when you are finding an angle.',
    },
    {
        id: 'maths-cosine-rule',
        subject: 'mathematics',
        question: 'What is the cosine rule?',
        aliases: ['cosine rule', 'law of cosines', 'cos rule'],
        answer:
            'c² = a² + b² − 2ab cos C. Use it for two sides and the angle between them, or for three sides when ' +
            'you want an angle, rearranged as cos C = (a² + b² − c²) / 2ab.',
    },
    {
        id: 'maths-log-laws',
        subject: 'mathematics',
        question: 'What are the logarithm laws?',
        aliases: ['log laws', 'logarithm rules', 'ln rules', 'change of base'],
        answer:
            'log(ab) = log a + log b, log(a/b) = log a − log b, and log(aⁿ) = n log a. ' +
            'Change of base is log_b a = log a / log b. Logs are the inverse of powers: if aˣ = b then x = log_a b.',
    },
    {
        id: 'maths-arithmetic-series',
        subject: 'mathematics',
        question: 'What are the arithmetic sequence and series formulas?',
        aliases: ['arithmetic sequence', 'arithmetic series', 'common difference', 'sum of a sequence'],
        answer:
            'The nth term is Tₙ = a + (n − 1)d, where a is the first term and d the common difference. ' +
            'The sum of n terms is Sₙ = n/2 × (2a + (n − 1)d), or n/2 × (a + l) when you know the last term l.',
    },
    {
        id: 'maths-geometric-series',
        subject: 'mathematics',
        question: 'What are the geometric sequence and series formulas?',
        aliases: ['geometric sequence', 'geometric series', 'common ratio', 'limiting sum', 'sum to infinity'],
        answer:
            'The nth term is Tₙ = arⁿ⁻¹. The sum of n terms is Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1. ' +
            'When |r| < 1 the series has a limiting sum, S∞ = a/(1 − r).',
    },
    {
        id: 'maths-compound-interest',
        subject: 'mathematics',
        question: 'What is the compound interest formula?',
        aliases: ['compound interest', 'investment formula', 'interest on interest', 'future value'],
        answer:
            'A = P(1 + r)ⁿ, where r is the rate per period as a decimal and n the number of periods. ' +
            'Interest is earned on interest already added, so the balance curves upward. ' +
            'Divide an annual rate by the number of compounding periods a year, and multiply n by the same.',
    },
    {
        id: 'maths-differentiation-rules',
        subject: 'mathematics',
        question: 'What are the differentiation rules?',
        aliases: ['power rule', 'product rule', 'quotient rule', 'chain rule', 'how to differentiate'],
        answer:
            'Power rule: d/dx(xⁿ) = nxⁿ⁻¹. Product rule: (uv)′ = u′v + uv′. Quotient rule: (u/v)′ = (u′v − uv′)/v². ' +
            'Chain rule: dy/dx = dy/du × du/dx, for a function inside another function.',
    },
    {
        id: 'maths-standard-derivatives',
        subject: 'mathematics',
        question: 'What are the derivatives of e^x, ln x and the trig functions?',
        aliases: ['derivative of e^x', 'derivative of ln x', 'derivative of sin', 'standard derivatives'],
        answer:
            'd/dx(eˣ) = eˣ, d/dx(ln x) = 1/x, d/dx(sin x) = cos x, d/dx(cos x) = −sin x, and d/dx(tan x) = sec²x. ' +
            'These assume x is in radians, which is why calculus questions almost always use radians.',
    },
    {
        id: 'maths-integration-rules',
        subject: 'mathematics',
        question: 'What are the basic integration rules?',
        aliases: ['integrate', 'integration rules', 'antiderivative', 'integral of 1/x'],
        answer:
            '∫xⁿ dx = xⁿ⁺¹/(n + 1) + c, for n ≠ −1. For n = −1, ∫(1/x) dx = ln|x| + c. ' +
            'Also ∫eˣ dx = eˣ + c, ∫sin x dx = −cos x + c and ∫cos x dx = sin x + c. Never forget the + c.',
    },
    {
        id: 'maths-definite-integral',
        subject: 'mathematics',
        question: 'What does a definite integral find?',
        aliases: ['definite integral', 'area under a curve', 'area between curves'],
        answer:
            'A definite integral finds the signed area between a curve and the x-axis: ∫ from a to b of f(x) dx = F(b) − F(a). ' +
            'Area below the axis counts as negative, so split the integral at any x-intercept when you want total area.',
    },
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
        id: 'maths-induction',
        subject: 'mathematics',
        question: 'How does proof by mathematical induction work?',
        aliases: ['proof by induction', 'mathematical induction', 'induction steps'],
        answer:
            'Three steps. Prove the statement for the first value, usually n = 1. Assume it true for n = k. ' +
            'Then prove it follows for n = k + 1, using the assumption somewhere. Say clearly where you used it.',
    },
    {
        id: 'maths-vectors',
        subject: 'mathematics',
        question: 'How do I work with vectors?',
        aliases: ['vectors', 'vector magnitude', 'component form', 'adding vectors', 'direction of a vector'],
        answer:
            'A vector in component form is (x, y). Its magnitude is |v| = √(x² + y²) and its direction comes from tan θ = y/x. ' +
            'The dot product is a·b = x₁x₂ + y₁y₂ = |a||b| cos θ, so a dot product of zero means the vectors are perpendicular.',
    },
    {
        id: 'maths-exact-values',
        subject: 'mathematics',
        question: 'What are the exact trigonometric values?',
        aliases: ['exact values', 'sin 30', 'cos 45', 'tan 60', 'special triangles'],
        answer:
            'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3. sin 45° = cos 45° = 1/√2, tan 45° = 1. ' +
            'sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. They come from the half-equilateral and the isosceles right triangle.',
    },
    {
        id: 'maths-function-notation',
        subject: 'mathematics',
        question: 'What do domain, range and function notation mean?',
        aliases: ['domain and range', 'function notation', 'f(x)', 'vertical line test', 'even and odd functions'],
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
        id: 'maths-trig-identities',
        subject: 'mathematics',
        question: 'What are the trigonometric identities?',
        aliases: ['trig identities', 'pythagorean identity', 'double angle', 'sin squared plus cos squared'],
        answer:
            'sin²θ + cos²θ = 1, tan θ = sin θ / cos θ, and dividing the first by cos²θ gives 1 + tan²θ = sec²θ. ' +
            'Double angles: sin 2θ = 2 sin θ cos θ and cos 2θ = cos²θ − sin²θ = 1 − 2sin²θ.',
    },
    {
        id: 'maths-trig-graphs',
        subject: 'mathematics',
        question: 'What do the sine and cosine graphs look like?',
        aliases: ['trig graphs', 'amplitude', 'period of sin', 'radians', 'unit circle'],
        answer:
            'For y = a sin(bx), the amplitude is |a| and the period is 2π/b radians. ' +
            'Sine starts at zero, cosine starts at its maximum, and tan repeats every π with asymptotes. ' +
            'Radians convert with π = 180°, so one radian is about 57.3°.',
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
        id: 'maths-rates-of-change',
        subject: 'mathematics',
        question: 'How do I use calculus for rates of change?',
        aliases: [
            'rates of change', 'related rates', 'motion calculus',
            'rate of change of volume', 'chain rule rates', 'filling a tank',
        ],
        answer:
            'The derivative is the instantaneous rate of change. In motion, differentiating displacement gives ' +
            'velocity and differentiating again gives acceleration; integrating reverses it. ' +
            'For related rates, link the quantities in one equation, differentiate every term with respect to time, ' +
            'and substitute the known rate only at the end.',
    },
    {
        id: 'maths-stationary-points',
        subject: 'mathematics',
        question: 'How do I find and classify stationary points?',
        aliases: ['stationary points', 'maximum minimum', 'turning point', 'classify stationary points'],
        answer:
            'Solve f′(x) = 0 for the stationary points. The second derivative classifies them: f″(x) < 0 is a maximum, ' +
            'f″(x) > 0 is a minimum. Where f″(x) = 0 and concavity changes, there is a point of inflection.',
    },
    {
        id: 'maths-optimisation',
        subject: 'mathematics',
        question: 'How do I solve an optimisation problem?',
        aliases: ['optimisation', 'maximum volume', 'minimum surface area', 'maxima and minima problems'],
        answer:
            'Write the quantity to optimise as one equation, use the constraint to reduce it to a single variable, ' +
            'then differentiate and solve for zero. Test that it is the maximum or minimum you want, and check the ' +
            'answer makes sense in the context, including the domain.',
    },
    {
        id: 'maths-integration-applications',
        subject: 'mathematics',
        question: 'What can integration be used for?',
        aliases: ['applications of integration', 'volumes of revolution', 'trapezoidal rule', 'approximating an integral'],
        answer:
            'Area between two curves is the integral of the upper minus the lower. ' +
            'A volume of revolution about the x-axis is π∫y² dx. ' +
            'When a function cannot be integrated exactly, approximate with the trapezoidal rule or Simpson\u2019s rule.',
    },
    {
        id: 'maths-financial-annuities',
        subject: 'mathematics',
        question: 'How do loans and annuities work?',
        aliases: ['annuity', 'loan repayments', 'present value', 'future value', 'reducing balance loan'],
        answer:
            'Each period, interest is added and a repayment is subtracted, so Aₙ = Aₙ₋₁(1 + r) − M. ' +
            'An annuity builds the same way with deposits instead. ' +
            'Future value asks what an investment grows to; present value asks what it is worth today.',
    },
    {
        id: 'maths-correlation',
        subject: 'mathematics',
        question: 'What do correlation and the least-squares line mean?',
        aliases: ['correlation coefficient', 'scatterplot', 'line of best fit', 'least squares', 'bivariate data', 'extrapolation'],
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
        id: 'maths-combinatorics',
        subject: 'mathematics',
        question: 'What is the difference between permutations and combinations?',
        aliases: ['permutations', 'combinations', 'npr', 'ncr', 'counting techniques', 'pigeonhole'],
        answer:
            'Permutations count arrangements, where order matters: ⁿPᵣ = n!/(n − r)!. ' +
            'Combinations count selections, where order does not: ⁿCᵣ = n!/(r!(n − r)!). ' +
            'If you could swap two chosen items and call it the same result, it is a combination.',
    },
    {
        id: 'maths-motion-line',
        subject: 'mathematics',
        question: 'How do I answer motion in a straight line questions?',
        aliases: ['motion in a straight line', 'displacement velocity acceleration', 'at rest', 'initially', 'change of direction'],
        answer:
            'Displacement x, velocity v = dx/dt, acceleration a = dv/dt. ' +
            '"At rest" means v = 0, "initially" means t = 0, and the object changes direction where v changes sign. ' +
            'Distance travelled is not displacement: split the journey at every turning point and add the parts.',
    },
    {
        id: 'maths-concavity',
        subject: 'mathematics',
        question: 'What is concavity and a point of inflection?',
        aliases: ['concavity', 'point of inflection', 'second derivative test', 'concave up', 'horizontal inflection'],
        answer:
            'f″(x) > 0 is concave up, f″(x) < 0 is concave down. ' +
            'A point of inflection is where concavity changes, so f″(x) = 0 AND the sign changes across it. ' +
            'A stationary point of inflection also has f′(x) = 0, which is why the second derivative test is ' +
            'inconclusive there.',
    },
    {
        id: 'maths-tangent-normal',
        subject: 'mathematics',
        question: 'How do I find the tangent and normal to a curve?',
        aliases: ['tangent to a curve', 'normal to a curve', 'gradient at a point', 'equation of a tangent'],
        answer:
            'The gradient of the tangent at x = a is f′(a). ' +
            'The normal is perpendicular, so its gradient is −1/f′(a). ' +
            'Use point-gradient form y − y₁ = m(x − x₁) with the point on the curve, which you get by substituting ' +
            'into the original function, not the derivative.',
    },
    {
        id: 'maths-radians-arc-sector',
        subject: 'mathematics',
        question: 'What are the arc length and sector area formulas?',
        aliases: ['radians', 'arc length', 'sector area', 'segment area', 'degrees to radians'],
        answer:
            'With θ in radians, arc length l = rθ and sector area A = ½r²θ. ' +
            'A segment is the sector minus the triangle: A = ½r²(θ − sin θ). ' +
            'Convert with π radians = 180°, and check your calculator is in the right mode.',
    },
    {
        id: 'maths-trig-equations',
        subject: 'mathematics',
        question: 'How do I solve a trigonometric equation?',
        aliases: ['solving trig equations', 'astc', 'related angle', 'general solution', 'trig equation in a domain'],
        answer:
            'Find the related acute angle from the positive value, then use ASTC to place every solution in the given ' +
            'domain: All, Sine, Tangent, Cosine positive in quadrants one to four. ' +
            'Check whether the domain is in degrees or radians, and watch for a double angle, which doubles the ' +
            'number of solutions.',
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
        id: 'maths-first-principles',
        subject: 'mathematics',
        question: 'How do I differentiate from first principles?',
        aliases: ['first principles', 'limit definition of derivative', 'f(x+h) - f(x) over h', 'differentiation from first principles'],
        answer:
            'f′(x) = limit as h → 0 of [f(x + h) − f(x)]/h. ' +
            'Expand the numerator, cancel the h that divides through, then let h → 0. ' +
            'Marks go for writing the limit statement each line, not just the final derivative.',
    },
    {
        id: 'maths-curve-sketching',
        subject: 'mathematics',
        question: 'What should I check when sketching a curve?',
        aliases: ['curve sketching', 'asymptotes', 'vertical asymptote', 'horizontal asymptote', 'sketching a rational function'],
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
        aliases: ['outlier', '1.5 iqr rule', 'skewed data', 'positively skewed', 'symmetric distribution', 'bimodal'],
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
        aliases: ['venn diagram', 'independent events', 'mutually exclusive', 'with and without replacement', 'union and intersection'],
        answer:
            'P(A ∪ B) = P(A) + P(B) − P(A ∩ B), subtracting the overlap counted twice. ' +
            'Mutually exclusive events have no overlap. ' +
            'Independent events satisfy P(A ∩ B) = P(A) × P(B); drawing without replacement makes events dependent, ' +
            'since the denominator changes.',
    },
    {
        id: 'maths-area-between-curves',
        subject: 'mathematics',
        question: 'How do I find the area between two curves?',
        aliases: ['area between curves', 'upper minus lower', 'area enclosed', 'region between graphs'],
        answer:
            'Integrate the upper curve minus the lower one across the region: ∫(top − bottom) dx. ' +
            'Find the intersections first, and split the integral wherever the curves swap over. ' +
            'For a region bounded on the sides rather than above and below, integrate with respect to y instead.',
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
        id: 'maths-logs-with-gp',
        subject: 'mathematics',
        question: 'How do I find how many terms or years using logarithms?',
        aliases: ['smallest n such that', 'how many years', 'solving exponential equations', 'logs to solve for n'],
        answer:
            'Set up the inequality, isolate the power, then take logarithms of both sides and divide. ' +
            'Because n counts whole terms or years, round up to the next whole number rather than to the nearest, and ' +
            'check by substituting that value back in.',
    },
];
