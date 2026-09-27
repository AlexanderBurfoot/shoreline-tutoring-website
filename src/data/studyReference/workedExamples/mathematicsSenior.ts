/**
 * Worked examples: senior mathematics, including the extension courses.
 *
 * A second question of each type where one already exists, and a first where
 * none did, each solved with the numbers shown and checked. Written by hand and
 * shown exactly as written, so the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleMathsSeniorEntries: StudyEntry[] = [
    {
        id: 'maths-example-domain-and-range',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a domain and range?',
        aliases: ['worked example domain and range', 'example of finding the domain of a function', 'range of a function example'],
        answer:
            'Find the domain and range of y = √(x − 4). The square root needs a value that is not negative, so x − 4 ≥ ' +
            '0 gives x ≥ 4. The root itself never returns a negative, so y ≥ 0. Start from what the function forbids, ' +
            'then read the range off the shape.',
    },
    {
        id: 'maths-example-even-and-odd-functions',
        subject: 'mathematics',
        question: 'Can you show me a worked example of testing whether a function is even or odd?',
        aliases: ['worked example even or odd function', 'example of testing for an even function', 'odd function test example'],
        answer:
            'Test f(x) = x³ − x. Replace x with −x: (−x)³ − (−x) = −x³ + x, which is exactly −f(x), so the function is ' +
            'odd and has point symmetry about the origin. Even would mean the substitution returns f(x) unchanged.',
    },
    {
        id: 'maths-example-composite-function',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a composite function?',
        aliases: ['worked example composite function', 'example of f of g of x', 'substituting one function into another example'],
        answer:
            'If f(x) = 2x + 1 and g(x) = x², find f(g(3)). Work from the inside: g(3) = 9, then f(9) = 2 × 9 + 1 = 19. ' +
            'Doing it the other way would give g(f(3)) = 7² = 49, so the order in the brackets decides everything.',
    },
    {
        id: 'maths-example-remainder-theorem',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the remainder theorem?',
        aliases: ['worked example remainder theorem', 'example of finding a remainder of a polynomial', 'factor theorem example'],
        answer:
            'Find the remainder when x³ − 2x + 5 is divided by x − 2. Substitute x = 2: 8 − 4 + 5 = 9, so the ' +
            'remainder is 9. Because the remainder is not zero, x − 2 is not a factor. A remainder of zero is exactly ' +
            'what the factor theorem tests for.',
    },
    {
        id: 'maths-example-sum-and-product-of-roots',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the sum and product of roots?',
        aliases: ['worked example sum and product of roots', 'example of roots of a quadratic without solving', 'alpha plus beta example'],
        answer:
            'For 2x² − 6x + 5 = 0, the sum of the roots is 6 ÷ 2 = 3 and the product is 5 ÷ 2 = 2.5. So without ' +
            'solving, the roots add to 3 and multiply to 2.5. The discriminant here is 36 − 40 = −4, so both roots are ' +
            'complex, and the sum still holds.',
    },
    {
        id: 'maths-example-discriminant',
        subject: 'mathematics',
        question: 'Can you show me a worked example of using the discriminant?',
        aliases: ['worked example discriminant', 'example of how many solutions a quadratic has', 'b squared minus 4ac example'],
        answer:
            'How many roots does x² − 6x + 9 = 0 have? The discriminant is b² − 4ac, so 36 − 4 × 1 × 9 = 36 − 36 = 0, ' +
            'meaning one repeated root. Positive would give two distinct roots and negative none that are real.',
    },
    {
        id: 'maths-example-simultaneous-three',
        subject: 'mathematics',
        question: 'Can you show me a worked example of three simultaneous equations?',
        aliases: ['worked example three simultaneous equations', 'example of solving three equations', 'three unknowns example'],
        answer:
            'Given x + y + z = 6, x − y = 1 and z = 2, substitute the easiest first: z = 2 turns the first into x + y = ' +
            '4. With x − y = 1, add the two: 2x = 5, so x = 2.5 and y = 1.5. Always spend the simplest equation first.',
    },
    {
        id: 'maths-example-first-principles',
        subject: 'mathematics',
        question: 'Can you show me a worked example of differentiation from first principles?',
        aliases: ['worked example first principles', 'example of differentiating from first principles', 'limit definition of a derivative example'],
        answer:
            'Differentiate f(x) = x² from first principles. The difference is (x + h)² − x² = 2xh + h². Divide by h to ' +
            'get 2x + h, then let h approach zero, leaving 2x. The h must cancel before the limit is taken, which is ' +
            'the whole method.',
    },
    {
        id: 'maths-example-chain-rule-second',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the chain rule with a trigonometric function?',
        aliases: ['worked example chain rule with trig', 'example of differentiating sin of a function', 'chain rule trigonometry example'],
        answer:
            'Differentiate y = sin(3x²). The outside is sine, whose derivative is cosine, and the inside is 3x², whose ' +
            'derivative is 6x. Multiply them: dy/dx = 6x cos(3x²). Leaving off the derivative of the inside is the ' +
            'commonest chain rule error.',
    },
    {
        id: 'maths-example-implicit-rate',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a second related rates problem?',
        aliases: ['worked example related rates sphere', 'example of a balloon inflating rate', 'rate of change of radius example'],
        answer:
            'A spherical balloon gains volume at 100 cm³ per second. When the radius is 5 cm, the surface area is 4π × ' +
            '25 = 314 cm². Since dV/dr is the surface area, dr/dt = 100 ÷ 314 = 0.32 cm per second. Link the two rates ' +
            'through the derivative that connects the variables.',
    },
    {
        id: 'maths-example-second-derivative-test',
        subject: 'mathematics',
        question: 'Can you show me a worked example of using the second derivative?',
        aliases: ['worked example second derivative', 'example of concavity and inflection', 'point of inflection example'],
        answer:
            'For y = x³ − 3x², the first derivative is 3x² − 6x and the second is 6x − 6. Setting the second to zero ' +
            'gives x = 1, and the sign of 6x − 6 changes there, so there is a point of inflection at x = 1. Concave up ' +
            'where the second derivative is positive.',
    },
    {
        id: 'maths-example-maximum-volume',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a maximum volume problem?',
        aliases: ['worked example maximum volume', 'example of an open box optimisation', 'largest volume from a sheet example'],
        answer:
            'Squares of side x are cut from a 12 cm square sheet, and the sides folded up. The volume is x(12 − 2x)². ' +
            'Differentiating and solving gives x = 2, and the volume is 2 × 8² = 128 cm³. Always check the endpoints, ' +
            'since x must lie between 0 and 6.',
    },
    {
        id: 'maths-example-substitution-product',
        subject: 'mathematics',
        question: 'Can you show me a worked example of integrating a product by substitution?',
        aliases: ['worked example integration by substitution product', 'example of substituting to integrate a product', 'u substitution with a product example'],
        answer:
            'Integrate 2x(x² + 1)⁵ dx. Let u = x² + 1, so du = 2x dx, and the integral becomes u⁵ du. That gives u⁶ ÷ 6, ' +
            'so the answer is (x² + 1)⁶ ÷ 6 + c. The substitution works because the derivative of the inside is ' +
            'already sitting outside.',
    },
    {
        id: 'maths-example-area-under-a-curve-negative',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an area where the curve goes below the axis?',
        aliases: ['worked example area below the axis', 'example of area with a negative part', 'signed area example'],
        answer:
            'Find the area between y = x² − 4 and the horizontal axis from x = 0 to x = 2. The curve is below the axis ' +
            'throughout, so the integral gives 8 ÷ 3 − 8 = −5.33, and the area is the size of that, 5.33 square ' +
            'units. Area is never negative, so take the absolute value at the end.',
    },
    {
        id: 'maths-example-trapezoidal-second',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the trapezoidal rule with four intervals?',
        aliases: ['worked example trapezoidal rule four intervals', 'example of estimating an area with trapezia', 'numerical integration example'],
        answer:
            'Estimate the area under a curve from x = 0 to x = 4 with four strips, where the heights are 1, 2, 4, 7 and ' +
            '11. The rule adds the two end heights once and the inner ones twice: 1 + 11 = 12, and 2 × (2 + 4 + 7) = ' +
            '26, giving 38. Multiply by half the strip width: 38 × 0.5 = 19 square units.',
    },
    {
        id: 'maths-example-volume-of-revolution-second',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a volume of revolution about the vertical axis?',
        aliases: ['worked example volume of revolution vertical axis', 'example of rotating about the y axis', 'solid of revolution example'],
        answer:
            'Rotate y = x² from y = 0 to y = 4 about the vertical axis. Rewrite in terms of y, so x² = y, and ' +
            'integrate πy dy from 0 to 4. That gives π × 16 ÷ 2 = 8π, which is about 25.1 cubic units. Rotating about ' +
            'the vertical axis means integrating with respect to y.',
    },
    {
        id: 'maths-example-trig-identity-proof',
        subject: 'mathematics',
        question: 'Can you show me a worked example of proving a trigonometric identity?',
        aliases: ['worked example proving a trig identity', 'example of a trigonometric proof', 'prove the identity example'],
        answer:
            'Prove that (1 − cos²θ) ÷ sinθ = sinθ. Start with the left side and use the Pythagorean identity: 1 − cos²θ ' +
            'is sin²θ, so the expression becomes sin²θ ÷ sinθ = sinθ. Work on one side only and finish at the other, ' +
            'never treating the identity as an equation to rearrange.',
    },
    {
        id: 'maths-example-general-solution-trig',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the general solution of a trigonometric equation?',
        aliases: ['worked example general solution trig', 'example of all solutions of a trig equation', 'general solution example'],
        answer:
            'Solve sinθ = 0.5 for all angles. The first solution is 30°, and sine is also positive in the second ' +
            'quadrant, giving 150°. Since sine repeats every 360°, the general solution is 30° or 150° plus any ' +
            'multiple of 360°. Find the quadrants first, then add the period.',
    },
    {
        id: 'maths-example-radians-arc-sector',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the area of a sector in radians?',
        aliases: ['worked example area of a sector', 'example of sector area in radians', 'sector area example'],
        answer:
            'A sector has radius 6 cm and angle 1.2 radians. Sector area is half the radius squared times the angle: 6² ' +
            '= 36, then 36 × 1.2 = 43.2, and half of that is 21.6 cm². The arc length is simpler still: 6 × 1.2 = 7.2 ' +
            'cm.',
    },
    {
        id: 'maths-example-trig-graph-transformation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of reading amplitude and period from a trigonometric graph?',
        aliases: ['worked example amplitude and period', 'example of finding the period of a sine graph', 'amplitude from a graph example'],
        answer:
            'For y = 3 sin(2x) + 1, the amplitude is 3, so the curve rises and falls 3 either side of its centre. The ' +
            'period is 360 ÷ 2 = 180°, so it completes a full cycle twice as fast as sine. The 1 lifts the centre line ' +
            'from 0 to 1.',
    },
    {
        id: 'maths-example-exponential-model-halving',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a time from an exponential model?',
        aliases: ['worked example time from an exponential model', 'example of solving for time with logs', 'when will it halve example'],
        answer:
            'A quantity follows A = 80e^(−0.05t). When does it reach 20? Divide: 20 ÷ 80 = 0.25, so e^(−0.05t) = 0.25. ' +
            'Take natural logs: −0.05t = ln 0.25 = −1.386, so t = 27.7. Taking logs is the step that frees the ' +
            'exponent.',
    },
    {
        id: 'maths-example-log-change-of-base',
        subject: 'mathematics',
        question: 'Can you show me a worked example of changing the base of a logarithm?',
        aliases: ['worked example change of base', 'example of a logarithm with an awkward base', 'log base 2 on a calculator example'],
        answer:
            'Find log₂ 50. Write it as a quotient of logs in a base the calculator has: log 50 ÷ log 2 = 1.699 ÷ 0.301 ' +
            '= 5.64. Check it is sensible, since 2⁵ = 32 and 2⁶ = 64, so the answer must lie between 5 and 6.',
    },
    {
        id: 'maths-example-compound-inflation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of adjusting for inflation?',
        aliases: ['worked example adjusting for inflation', 'example of future cost with inflation', 'inflation compounding example'],
        answer:
            'A $500 item inflates at 3% a year for 4 years. Multiply by 1.03 four times: 1.03⁴ = 1.1255, then 500 × ' +
            '1.1255 = $562.75. Multiplying by 12% instead would give $560, which is close enough to hide the error, so ' +
            'use the power.',
    },
    {
        id: 'maths-example-reducing-balance-loan',
        subject: 'mathematics',
        question: 'Can you show me a worked example of one step of a reducing balance loan?',
        aliases: ['worked example reducing balance loan', 'example of a loan repayment step', 'interest then repayment example'],
        answer:
            'A $10,000 loan charges 0.5% a month and the repayment is $300. Interest first: 10000 × 0.005 = $50, so the ' +
            'balance becomes $10,050, then subtract the repayment: 10050 − 300 = $9750. Interest is always added ' +
            'before the payment is taken.',
    },
    {
        id: 'maths-example-annuity-future-value',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the future value of regular deposits?',
        aliases: ['worked example future value of deposits', 'example of saving the same amount each year', 'growing each deposit separately example'],
        answer:
            'Three annual deposits of $1000 earn 5%, with the first deposit made now. The first grows for 3 years: ' +
            '1000 × 1.05³ = $1157.63. The second grows for 2: $1102.50. The third for 1: $1050. The total is ' +
            '$3310.13. Grow each deposit for its own number of years.',
    },
    {
        id: 'maths-example-normal-distribution-between',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a normal distribution between two values?',
        aliases: ['worked example normal distribution between two values', 'example of the empirical rule', 'percentage within two standard deviations example'],
        answer:
            'Marks are normal with mean 70 and standard deviation 8. What share lies between 62 and 86? Those are one ' +
            'below and two above the mean. About 34% sits within one below and about 47.5% within two above, so ' +
            'together about 81.5%. Sketch the curve and mark the standard deviations first.',
    },
    {
        id: 'maths-example-z-score-comparison',
        subject: 'mathematics',
        question: 'Can you show me a worked example of comparing two results with z-scores?',
        aliases: ['worked example comparing z scores', 'example of which result was better', 'standardised score comparison example'],
        answer:
            'A student scores 72 in a test with mean 65 and standard deviation 5, and 80 in one with mean 70 and ' +
            'standard deviation 10. The z-scores are 7 ÷ 5 = 1.4 and 10 ÷ 10 = 1, so the first result is the stronger ' +
            'one despite the lower raw mark.',
    },
    {
        id: 'maths-example-bivariate-correlation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of interpreting a correlation coefficient?',
        aliases: ['worked example correlation coefficient', 'example of interpreting r', 'strength of correlation example'],
        answer:
            'A data set gives r = −0.86. The sign says the relationship is negative, so one variable falls as the ' +
            'other rises, and the size close to 1 says it is strong. It says nothing about cause, and nothing about ' +
            'whether the relationship is a straight line outside the data collected.',
    },
    {
        id: 'maths-example-least-squares-prediction',
        subject: 'mathematics',
        question: 'Can you show me a worked example of predicting from a least squares line?',
        aliases: ['worked example least squares prediction', 'example of predicting from a regression line', 'line of best fit prediction example'],
        answer:
            'A least squares line is y = 2.4x + 15. Predict y when x = 10: 2.4 × 10 = 24, then 24 + 15 = 39. If the ' +
            'data only covered x from 1 to 8, this prediction is an extrapolation and should be reported as less ' +
            'reliable.',
    },
    {
        id: 'maths-example-relative-frequency',
        subject: 'mathematics',
        question: 'Can you show me a worked example of relative frequency as a probability?',
        aliases: ['worked example relative frequency', 'example of experimental probability', 'probability from an experiment example'],
        answer:
            'A drawing pin lands point up 63 times in 200 drops. The relative frequency is 63 ÷ 200 = 0.315, which is ' +
            'the best estimate of the probability. More trials would narrow it, but a theoretical value cannot be ' +
            'worked out here because the pin is not symmetric.',
    },
    {
        id: 'maths-example-binomial-at-least',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an at least one binomial question?',
        aliases: ['worked example binomial at least one', 'example of at least one success', 'binomial complement example'],
        answer:
            'A test is passed 80% of the time and is taken 4 times. Find the chance of at least one failure. Work out ' +
            'no failures first: 0.8⁴ = 0.4096, then subtract from 1 to get 0.5904. At least one is almost always ' +
            'faster through the complement.',
    },
    {
        id: 'maths-example-expected-value-game',
        subject: 'mathematics',
        question: 'Can you show me a worked example of expected value in a game?',
        aliases: ['worked example expected value', 'example of whether a game is fair', 'expected winnings example'],
        answer:
            'A game pays $5 with probability 0.2 and costs $2 to play. The expected return is 5 × 0.2 = $1, so against ' +
            'a $2 cost the expected loss is $1 a game. A fair game would have an expected return equal to the cost.',
    },
    {
        id: 'maths-example-continuous-random-variable',
        subject: 'mathematics',
        question: 'Can you show me a worked example with a probability density function?',
        aliases: ['worked example probability density function', 'example of a continuous random variable', 'area under a density curve example'],
        answer:
            'A density function is f(x) = 0.5 for x between 0 and 2, and zero elsewhere. The total area is 0.5 × 2 = 1, ' +
            'as it must be. The probability that x is between 0.5 and 1.5 is the area over that stretch: 0.5 × 1 = ' +
            '0.5.',
    },
    {
        id: 'maths-example-vectors-components',
        subject: 'mathematics',
        question: 'Can you show me a worked example of adding vectors in component form?',
        aliases: ['worked example adding vectors', 'example of vector components', 'resultant vector example maths'],
        answer:
            'Add the vectors with components 3 across and 4 up, and 1 across and −6 up. Add each direction ' +
            'separately: 3 + 1 = 4 across, and 4 − 6 = −2 up. The resultant has magnitude found by Pythagoras: 16 + 4 ' +
            '= 20, so the length is 4.47.',
    },
    {
        id: 'maths-example-vector-projection',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the dot product of two vectors?',
        aliases: ['worked example dot product', 'example of the scalar product', 'angle between two vectors example'],
        answer:
            'For vectors 3 across 4 up and 2 across 1 up, the dot product is 3 × 2 + 4 × 1 = 10. Their magnitudes are ' +
            '5 and 2.24, so the cosine of the angle between them is 10 ÷ 11.2 = 0.893, giving about 27°. A dot product ' +
            'of zero would mean they are perpendicular.',
    },
    {
        id: 'maths-example-induction-divisibility',
        subject: 'mathematics',
        question: 'Can you show me a worked example of induction for divisibility?',
        aliases: ['worked example induction divisibility', 'example of proving divisibility by induction', 'induction with a multiple example'],
        answer:
            'Prove 3ⁿ − 1 is divisible by 2. For n = 1, 3 − 1 = 2, which works. Assume 3ᵏ − 1 = 2m. Then 3ᵏ⁺¹ − 1 = 3 × ' +
            '3ᵏ − 1, which is 3(2m + 1) − 1 = 6m + 2, and that is 2(3m + 1). So it holds for the next case, completing ' +
            'the induction.',
    },
    {
        id: 'maths-example-mathematical-proof-contradiction',
        subject: 'mathematics',
        question: 'Can you show me a worked example of proof by contradiction?',
        aliases: ['worked example proof by contradiction', 'example of assuming the opposite', 'contradiction proof example'],
        answer:
            'Prove there is no largest even number. Assume there is one, and call it n. Then n + 2 is also even and ' +
            'larger, which contradicts n being the largest. So the assumption fails and no largest even number exists. ' +
            'Assume the opposite, derive something impossible, conclude.',
    },
    {
        id: 'maths-example-counterexample',
        subject: 'mathematics',
        question: 'Can you show me a worked example of disproving a statement?',
        aliases: ['worked example counterexample', 'example of disproving a claim', 'finding a counterexample example'],
        answer:
            'Claim: every number ending in 3 is prime. The number 33 ends in 3 and equals 3 × 11, so it is not prime. ' +
            'One counterexample is a complete disproof, and finding a small one is quicker than any argument.',
    },
    {
        id: 'maths-example-complex-arithmetic',
        subject: 'mathematics',
        question: 'Can you show me a worked example of multiplying complex numbers?',
        aliases: ['worked example multiplying complex numbers', 'example of complex number arithmetic', 'multiplying by i example'],
        answer:
            'Multiply (3 + 2i)(1 − 4i). Expand as with brackets: 3 − 12i + 2i − 8i². Since i² is −1, the last term ' +
            'becomes +8, so the answer is 11 − 10i. The i² is where the real part comes from, and forgetting it is the ' +
            'usual slip.',
    },
    {
        id: 'maths-example-complex-modulus-argument',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the modulus and argument of a complex number?',
        aliases: ['worked example modulus and argument', 'example of polar form of a complex number', 'argument of a complex number example'],
        answer:
            'For z = 1 + i√3, the modulus is found from 1² + 3 = 4, so it is 2. The argument comes from the ratio √3 ÷ ' +
            '1, giving 60° or π/3, and since both parts are positive it lies in the first quadrant. So z = 2 at an ' +
            'angle of π/3.',
    },
    {
        id: 'maths-example-partial-fractions',
        subject: 'mathematics',
        question: 'Can you show me a worked example of partial fractions?',
        aliases: ['worked example partial fractions', 'example of splitting a fraction to integrate', 'partial fraction decomposition example'],
        answer:
            'Split 5 over (x − 1)(x + 4). Write it as A over (x − 1) plus B over (x + 4), so 5 = A(x + 4) + B(x − 1). ' +
            'Put x = 1 to get 5 = 5A, so A = 1. Put x = −4 to get 5 = −5B, so B = −1. Choosing values that kill one ' +
            'term is the quick route.',
    },
    {
        id: 'maths-example-mechanics-resisted-motion',
        subject: 'mathematics',
        question: 'Can you show me a worked example of terminal velocity in resisted motion?',
        aliases: ['worked example resisted motion', 'example of terminal velocity in mechanics', 'limiting velocity example maths'],
        answer:
            'A body falls with acceleration g − kv, where k = 0.2 and g = 9.8. Terminal velocity is where the ' +
            'acceleration reaches zero, so 9.8 = 0.2v, giving v = 49 m/s. Set the acceleration to zero rather than ' +
            'integrating, whenever the question asks only for the limiting speed.',
    },
    {
        id: 'maths-example-simple-harmonic-motion',
        subject: 'mathematics',
        question: 'Can you show me a worked example of simple harmonic motion?',
        aliases: ['worked example simple harmonic motion', 'example of shm', 'amplitude and period of shm example'],
        answer:
            'A particle moves so that x = 4 sin(3t). The amplitude is 4, the angular frequency is 3, so the period is ' +
            '2π ÷ 3 = 2.09 seconds. The greatest speed is amplitude times angular frequency: 4 × 3 = 12 units per ' +
            'second, reached as the particle passes the centre.',
    },
    {
        id: 'maths-example-permutations-restriction',
        subject: 'mathematics',
        question: 'Can you show me a worked example of permutations with a restriction?',
        aliases: ['worked example permutations with a restriction', 'example of arrangements with two people together', 'arrangement restriction example'],
        answer:
            'Six people sit in a row with two insisting on sitting together. Treat the pair as one block, so there are ' +
            '5 items to arrange, giving 120 ways, and the pair can sit two ways round, so 120 × 2 = 240. For the pair ' +
            'apart, subtract from the 720 total to get 480.',
    },
    {
        id: 'maths-example-combinations-committee',
        subject: 'mathematics',
        question: 'Can you show me a worked example of choosing a committee?',
        aliases: [
            'worked example choosing a committee',
            'example of combinations where order does not matter',
            'how many ways to choose example',
        ],
        answer:
            'Choose 3 people from 8 for a committee where order does not matter. That is 8 × 7 × 6 = 336 ordered ' +
            'choices, divided by the 6 orders each group of three could be picked in: 336 ÷ 6 = 56. Divide by the ' +
            'arrangements whenever order is irrelevant.',
    },
    {
        id: 'maths-example-pigeonhole',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the pigeonhole principle?',
        aliases: ['worked example pigeonhole principle', 'example of the pigeonhole argument', 'at least two must share example'],
        answer:
            'In a group of 13 people, at least two share a birth month. There are 12 months, so with 13 people one ' +
            'month must take a second person. The principle needs only that there are more items than categories, ' +
            'never anything about how they are spread.',
    },
    {
        id: 'maths-example-inverse-trig',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an inverse trigonometric function?',
        aliases: ['worked example inverse trig function', 'example of arcsin', 'inverse sine example'],
        answer:
            'Find the value of inverse sine of 0.5. The answer must lie between −90° and 90°, which is the restricted ' +
            'range that makes the inverse a function, so it is 30° and not 150°. Inverse trigonometric functions ' +
            'return one value, which is why the range is restricted.',
    },
];
