/**
 * Mathematics reference, Years 7 to 12.
 *
 * Covers the formulas students look up most: measurement, algebra, trigonometry,
 * functions, calculus, series and statistics. Written in plain text rather than
 * typeset maths so it reads correctly in a chat bubble on a phone.
 */
import type { StudyEntry } from './types';

export const mathematicsEntries: StudyEntry[] = [
    {
        id: 'maths-sphere-volume',
        subject: 'mathematics',
        question: 'What is the formula for the volume of a sphere?',
        aliases: ['volume of a sphere', 'sphere volume', 'sphere formula', 'volume sphere'],
        answer:
            'V = 4/3 × π × r³, where r is the radius. The surface area of the same sphere is A = 4πr². ' +
            'A common slip is using the diameter instead of the radius, so halve it first.',
    },
    {
        id: 'maths-cone-volume',
        subject: 'mathematics',
        question: 'What is the formula for the volume of a cone?',
        aliases: ['volume of a cone', 'cone volume', 'cone surface area'],
        answer:
            'V = 1/3 × π × r² × h, where h is the perpendicular height. The curved surface area is πrl, ' +
            'where l is the slant height, which you often find with Pythagoras from r and h.',
    },
    {
        id: 'maths-cylinder-volume',
        subject: 'mathematics',
        question: 'What is the formula for the volume of a cylinder?',
        aliases: ['volume of a cylinder', 'cylinder volume', 'cylinder surface area'],
        answer:
            'V = π × r² × h. The total surface area is 2πr² + 2πrh: the two circular ends plus the curved side, ' +
            'which unrolls into a rectangle of width 2πr and height h.',
    },
    {
        id: 'maths-prism-pyramid-volume',
        subject: 'mathematics',
        question: 'How do I find the volume of a prism or a pyramid?',
        aliases: ['volume of a prism', 'volume of a pyramid', 'prism volume', 'pyramid volume'],
        answer:
            'A prism is V = A × h, the area of the cross-section times the length. A pyramid or cone is a third ' +
            'of that: V = 1/3 × A × h. The height is always perpendicular to the base, not the slant.',
    },
    {
        id: 'maths-circle',
        subject: 'mathematics',
        question: 'What are the area and circumference of a circle?',
        aliases: ['area of a circle', 'circumference', 'circle formula', 'perimeter of a circle'],
        answer:
            'Area is A = πr² and circumference is C = 2πr, or πd if you have the diameter. ' +
            'For a sector, multiply each by the fraction of the full turn the angle covers.',
    },
    {
        id: 'maths-pythagoras',
        subject: 'mathematics',
        question: 'What is Pythagoras’ theorem?',
        aliases: ['pythagoras', 'pythagorean theorem', 'hypotenuse', 'right angled triangle sides'],
        answer:
            'a² + b² = c², where c is the hypotenuse, the side opposite the right angle. ' +
            'Use it to find a third side when you know two, and only in right-angled triangles.',
    },
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
        id: 'maths-triangle-area',
        subject: 'mathematics',
        question: 'How do I find the area of a triangle?',
        aliases: ['area of a triangle', 'triangle area', 'half ab sin c', 'herons formula'],
        answer:
            'A = ½ × base × perpendicular height, or A = ½ab sin C when you know two sides and the angle between ' +
            'them. With all three sides, use Heron’s formula: A = √(s(s−a)(s−b)(s−c)) where s = (a+b+c)/2.',
    },
    {
        id: 'maths-trig-ratios',
        subject: 'mathematics',
        question: 'What are sin, cos and tan in a right-angled triangle?',
        aliases: ['soh cah toa', 'trig ratios', 'sin cos tan', 'trigonometry basics'],
        answer:
            'SOH CAH TOA: sin θ = opposite / hypotenuse, cos θ = adjacent / hypotenuse, tan θ = opposite / adjacent. ' +
            'Label the sides relative to the angle you are using, not the triangle as a whole.',
    },
    {
        id: 'maths-index-laws',
        subject: 'mathematics',
        question: 'What are the index laws?',
        aliases: ['index laws', 'exponent rules', 'powers rules', 'indices'],
        answer:
            'aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ, and a^(1/n) = ⁿ√a. ' +
            'The first two only apply when the base is the same.',
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
        id: 'maths-line-equations',
        subject: 'mathematics',
        question: 'What are the gradient, midpoint and distance formulas?',
        aliases: ['gradient formula', 'midpoint', 'distance formula', 'equation of a line', 'y = mx + b'],
        answer:
            'Gradient m = (y₂ − y₁)/(x₂ − x₁), midpoint = ((x₁+x₂)/2, (y₁+y₂)/2), and distance = √((x₂−x₁)² + (y₂−y₁)²). ' +
            'A line is y = mx + b, or y − y₁ = m(x − x₁) when you have a point and a gradient.',
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
        aliases: ['compound interest', 'simple interest', 'investment formula', 'depreciation'],
        answer:
            'Compound interest is A = P(1 + r)ⁿ, where r is the rate per period as a decimal and n the number of ' +
            'periods. Simple interest is I = Prn. For depreciation, use A = P(1 − r)ⁿ.',
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
        id: 'maths-probability-basics',
        subject: 'mathematics',
        question: 'What are the basic probability rules?',
        aliases: ['probability rules', 'complement', 'mutually exclusive', 'conditional probability'],
        answer:
            'P(not A) = 1 − P(A). For either event, P(A or B) = P(A) + P(B) − P(A and B). For independent events, ' +
            'P(A and B) = P(A) × P(B). Conditional probability is P(A|B) = P(A and B)/P(B).',
    },
    {
        id: 'maths-statistics-measures',
        subject: 'mathematics',
        question: 'What is the difference between mean, median and mode?',
        aliases: ['mean median mode', 'average', 'range', 'interquartile range', 'outlier'],
        answer:
            'The mean is the total divided by the count, the median is the middle value in order, and the mode is the ' +
            'most common value. The median is the one to quote when outliers would drag the mean, such as house prices.',
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
        aliases: ['vectors', 'vector magnitude', 'dot product', 'scalar product', 'unit vector'],
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
        id: 'maths-percentage-change',
        subject: 'mathematics',
        question: 'How do I calculate a percentage change?',
        aliases: ['percentage change', 'percentage increase', 'percentage decrease', 'profit and loss'],
        answer:
            'Percentage change = (new − original) / original × 100. A positive answer is an increase, a negative one a decrease. ' +
            'To increase a value by r%, multiply by (1 + r/100); to decrease it, multiply by (1 − r/100).',
    },
    {
        id: 'maths-surface-area-vs-volume',
        subject: 'mathematics',
        question: 'What is the difference between surface area and volume?',
        aliases: ['surface area vs volume', 'what is surface area', 'units for volume'],
        answer:
            'Surface area is how much material covers the outside, measured in square units such as cm². ' +
            'Volume is how much space is inside, measured in cubic units such as cm³. The units tell you which one a question wants.',
    },
];
