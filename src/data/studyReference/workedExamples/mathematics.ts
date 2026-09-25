/**
 * Worked examples: mathematics.
 *
 * One question of each type, solved with numbers and checked. Written by hand
 * and shown exactly as written, so the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleMathsEntries: StudyEntry[] = [
    {
        id: 'maths-example-surds',
        subject: 'mathematics',
        question: 'Can you show me a worked example of simplifying surds?',
        aliases: ['worked example surds', 'example of simplifying a surd', 'adding surds example'],
        answer:
            'Simplify √72 + √8. Look for square factors: 72 = 36 × 2 so √72 = 6√2, and 8 = 4 × 2 so √8 = 2√2. They ' +
            'are now like surds, so add the coefficients: 8√2.',
    },
    {
        id: 'maths-example-log-equation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a logarithmic equation?',
        aliases: ['worked example log equation', 'example of solving a log equation', 'combining logs example'],
        answer:
            'Solve log₂x + log₂(x − 2) = 3. Combine the logs: log₂[x(x − 2)] = 3, so x² − 2x = 2³ = 8. Then x² − 2x − ' +
            '8 = 0 gives (x − 4)(x + 2) = 0. Reject x = −2, since log of a negative is undefined, leaving x = 4.',
    },
    {
        id: 'maths-example-sine-rule',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the sine rule?',
        aliases: ['worked example sine rule', 'example of the sine rule', 'finding a side with the sine rule'],
        answer:
            'In a triangle, a = 8 cm with A = 40° and B = 75°. By the sine rule, b = a sin B / sin A = 8 × sin 75° ÷ ' +
            'sin 40° = 8 × 0.966 ÷ 0.643 = 12.0 cm. Check it is sensible: B is the larger angle, so b should be the ' +
            'longer side.',
    },
    {
        id: 'maths-example-cosine-rule',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the cosine rule?',
        aliases: ['worked example cosine rule', 'example of the cosine rule', 'finding a side with the cosine rule'],
        answer:
            'Two sides are 7 cm and 9 cm with an included angle of 52°. c² = 7² + 9² − 2(7)(9)cos 52° = 49 + 81 − 126 ' +
            '× 0.616 = 130 − 77.6 = 52.4, so c = 7.2 cm. Use the cosine rule whenever the angle sits between the two ' +
            'known sides.',
    },
    {
        id: 'maths-example-triangle-area-sine',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the area of a triangle using sine?',
        aliases: ['worked example area with sine', 'example of half ab sin c', 'area of a triangle without the height'],
        answer:
            'Two sides of 7 cm and 9 cm meet at 52°. Area = ½ab sin C = ½ × 7 × 9 × sin 52° = 31.5 × 0.788 = 24.8 ' +
            'cm². This is the formula to use when no perpendicular height is given.',
    },
    {
        id: 'maths-example-arithmetic-series',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an arithmetic series?',
        aliases: ['worked example arithmetic series', 'example of summing an arithmetic sequence', 'sum of the first n terms example'],
        answer:
            'Sum the first 20 terms of 5, 8, 11, … where a = 5 and d = 3. S₂₀ = (20/2)[2(5) + 19(3)] = 10[10 + 57] = ' +
            '670. Check the last term is 5 + 19(3) = 62, and 20 terms averaging (5 + 62)/2 = 33.5 gives the same ' +
            'total.',
    },
    {
        id: 'maths-example-geometric-series',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a geometric series?',
        aliases: ['worked example geometric series', 'example of summing a geometric sequence', 'geometric sum example'],
        answer:
            'Sum the first 8 terms of 3, 6, 12, … where a = 3 and r = 2. S₈ = a(rⁿ − 1)/(r − 1) = 3(2⁸ − 1)/(2 − 1) = ' +
            '3(256 − 1) = 765. With r > 1 the terms grow, so most of the total comes from the last few.',
    },
    {
        id: 'maths-example-limiting-sum',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a limiting sum?',
        aliases: ['worked example limiting sum', 'example of sum to infinity', 'infinite geometric series example'],
        answer:
            'Find the limiting sum of 12 + 3 + 0.75 + … where a = 12 and r = 0.25. Since |r| < 1, S∞ = a/(1 − r) = 12 ' +
            '÷ 0.75 = 16. A limiting sum exists only when the ratio lies strictly between −1 and 1.',
    },
    {
        id: 'maths-example-annuity',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an annuity?',
        aliases: ['worked example annuity', 'example of a future value calculation', 'regular savings example'],
        answer:
            'Save $200 a month for 5 years at 6% per year compounded monthly, so i = 0.005 and n = 60. FV = ' +
            '200[(1.005⁶⁰ − 1)/0.005] = 200 × 69.77 = $13,954. The contributions total $12,000, so the interest ' +
            'earned is about $1,954.',
    },
    {
        id: 'maths-example-z-score',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a z-score?',
        aliases: ['worked example z score', 'example of standardising a score', 'z score calculation example'],
        answer:
            'A mark of 82 in a test with mean 70 and standard deviation 8 gives z = (82 − 70)/8 = 1.5. That is one ' +
            'and a half standard deviations above the mean, which puts it above roughly 93% of results.',
    },
    {
        id: 'maths-example-binomial-probability',
        subject: 'mathematics',
        question: 'Can you show me a worked example of binomial probability?',
        aliases: ['worked example binomial probability', 'example of a binomial calculation', 'exactly two successes example'],
        answer:
            'Five independent trials each succeed with probability 0.2. For exactly two successes, P = ' +
            '⁵C₂(0.2)²(0.8)³ = 10 × 0.04 × 0.512 = 0.2048. The combination counts which two of the five trials ' +
            'succeeded.',
    },
    {
        id: 'maths-example-permutations',
        subject: 'mathematics',
        question: 'Can you show me a worked example of permutations and combinations?',
        aliases: ['worked example permutations', 'example of counting arrangements', 'combination calculation example'],
        answer:
            'From 7 people, the number of ways to fill 4 ranked positions is ⁷P₄ = 7 × 6 × 5 × 4 = 840. If the 4 ' +
            'chosen are simply a committee with no ranking, divide by the 4! orderings: ⁷C₄ = 35.',
    },
    {
        id: 'maths-example-stationary-points',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding stationary points?',
        aliases: ['worked example stationary points', 'example of classifying a turning point', 'maximum and minimum example'],
        answer:
            'For y = x³ − 3x² + 4, y′ = 3x² − 6x = 3x(x − 2), so stationary points are at x = 0 and x = 2. Since y″ = ' +
            '6x − 6, at x = 0 it is negative, giving a maximum at (0, 4), and at x = 2 it is positive, giving a ' +
            'minimum at (2, 0).',
    },
    {
        id: 'maths-example-optimisation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an optimisation problem?',
        aliases: ['worked example optimisation', 'example of maximising an area', 'largest area example'],
        answer:
            'A rectangle has perimeter 40 m, so width = 20 − x and A = x(20 − x) = 20x − x². Then A′ = 20 − 2x = 0 ' +
            'gives x = 10, and A″ = −2 confirms a maximum. The largest area is 100 m², a square, which is the usual ' +
            'answer for a fixed perimeter.',
    },
    {
        id: 'maths-example-related-rates',
        subject: 'mathematics',
        question: 'Can you show me a worked example of related rates?',
        aliases: ['worked example related rates', 'example of a rate of change problem', 'expanding sphere example'],
        answer:
            'A sphere grows so its radius increases at 2 cm s⁻¹. Since V = ⁴⁄₃πr³, dV/dr = 4πr², so at r = 5 cm, ' +
            'dV/dt = 4π(25) × 2 = 200π ≈ 628 cm³ s⁻¹. The chain rule links the two rates.',
    },
    {
        id: 'maths-example-trapezoidal',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the trapezoidal rule?',
        aliases: ['worked example trapezoidal rule', 'example of approximating an area', 'trapezoidal estimate example'],
        answer:
            'Estimate the area under y = x² from 0 to 4 using four strips, so h = 1 and the values are 0, 1, 4, 9, ' +
            '16. Area ≈ (h/2)[first + last + 2(middle values)] = 0.5[16 + 2(14)] = 22. The exact value is 21⅓, so the ' +
            'estimate is high because the curve is concave up.',
    },
    {
        id: 'maths-example-quadratic-formula',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the quadratic formula?',
        aliases: ['worked example quadratic formula', 'example using the quadratic formula', 'quadratic formula substitution example'],
        answer:
            'Solve 2x² − 5x − 3 = 0 with a = 2, b = −5, c = −3. The discriminant is 25 − 4(2)(−3) = 49, so x = (5 ± ' +
            '7)/4, giving x = 3 or x = −0.5. A perfect square discriminant means it could have been factorised ' +
            'instead.',
    },
    {
        id: 'maths-example-completing-square',
        subject: 'mathematics',
        question: 'Can you show me a worked example of completing the square?',
        aliases: ['worked example completing the square', 'example of completing the square', 'vertex by completing the square'],
        answer:
            'Rewrite x² + 6x + 5. Half of 6 is 3, so x² + 6x = (x + 3)² − 9, giving (x + 3)² − 4. The vertex is ' +
            'therefore (−3, −4), and the minimum value is −4.',
    },
    {
        id: 'maths-example-index-laws',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the index laws?',
        aliases: ['worked example index laws', 'example of simplifying indices', 'power of a power example'],
        answer:
            'Simplify (2x³)⁴ ÷ (4x⁵). The numerator is 16x¹², since both the 2 and the index are raised to the ' +
            'fourth. Dividing gives 4x⁷, subtracting the indices and the coefficients separately.',
    },
    {
        id: 'maths-example-log-laws',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the logarithm laws?',
        aliases: ['worked example log laws', 'example of combining logarithms', 'log addition example'],
        answer:
            'Simplify log 8 + log 5 − log 2. Adding logs multiplies the numbers and subtracting divides, so it ' +
            'becomes log(8 × 5 ÷ 2) = log 20. The laws only apply to logs of the same base.',
    },
    {
        id: 'maths-example-exponential-growth',
        subject: 'mathematics',
        question: 'Can you show me a worked example of exponential growth?',
        aliases: ['worked example exponential growth', 'example of a growth calculation', 'population growth example'],
        answer:
            'A population of 500 grows at 3% per year continuously, so A = 500e^(0.03t). After 10 years, A = 500 × ' +
            'e^0.3 = 500 × 1.350 = 675. Using compound interest style growth instead gives 500 × 1.03¹⁰ = 672, which ' +
            'is close but not identical.',
    },
    {
        id: 'maths-example-trig-equation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of solving a trigonometric equation?',
        aliases: ['worked example trig equation', 'example of solving sin x', 'all solutions in a domain example'],
        answer:
            'Solve sin x = 0.5 for 0° ≤ x ≤ 360°. The related angle is 30°, and sine is positive in the first and ' +
            'second quadrants, so x = 30° or x = 150°. Always check the domain before deciding how many solutions to ' +
            'give.',
    },
    {
        id: 'maths-example-exact-values',
        subject: 'mathematics',
        question: 'Can you show me a worked example using exact trigonometric values?',
        aliases: ['worked example exact values', 'example using the 30 60 90 triangle', 'exact value of sin 60'],
        answer:
            'In the 30-60-90 triangle with sides 1, √3 and 2, sin 60° = √3/2 and cos 60° = ½. So the exact height of ' +
            'a 10 m ramp at 60° is 10 sin 60° = 5√3 m, which is 8.66 m rounded.',
    },
    {
        id: 'maths-example-arc-length',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a sector in radians?',
        aliases: ['worked example arc length', 'example of sector area', 'radians arc calculation example'],
        answer:
            'A sector has radius 8 cm and angle 1.2 radians. Arc length = rθ = 8 × 1.2 = 9.6 cm, and area = ½r²θ = ½ ' +
            '× 64 × 1.2 = 38.4 cm². Both formulas need radians, not degrees.',
    },
    {
        id: 'maths-example-area-between-curves',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the area between two curves?',
        aliases: ['worked example area between curves', 'example of area between two graphs', 'upper minus lower example'],
        answer:
            'Find the area between y = x and y = x² from x = 0 to x = 1. The line is above the curve there, so ' +
            'integrate the difference: ∫(x − x²)dx = ½ − ⅓ = ⅙. Subtracting the wrong way round gives a negative ' +
            'answer.',
    },
    {
        id: 'maths-example-volume-revolution',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a volume of revolution?',
        aliases: ['worked example volume of revolution', 'example of rotating about the x axis', 'pi integral y squared example'],
        answer:
            'Rotate y = x from x = 0 to x = 2 about the x-axis. V = π∫y²dx = π∫x²dx = π[x³/3] from 0 to 2 = 8π/3. ' +
            'That agrees with the cone formula ⅓πr²h with r = 2 and h = 2.',
    },
    {
        id: 'maths-example-substitution-integration',
        subject: 'mathematics',
        question: 'Can you show me a worked example of integration by substitution?',
        aliases: ['worked example integration by substitution', 'example of u substitution', 'reverse chain rule example'],
        answer:
            'Integrate 2x(x² + 1)³. Let u = x² + 1, so du = 2x dx and the integral becomes ∫u³du = u⁴/4. Substituting ' +
            'back gives (x² + 1)⁴/4 + C.',
    },
    {
        id: 'maths-example-induction',
        subject: 'mathematics',
        question: 'Can you show me a worked example of proof by induction?',
        aliases: ['worked example induction', 'example of mathematical induction', 'induction proof example'],
        answer:
            'Prove 1 + 3 + 5 + … + (2n − 1) = n². For n = 1 both sides are 1. Assume it holds for n = k, then adding ' +
            'the next odd number gives k² + (2k + 1) = (k + 1)², which is the statement for k + 1, so it holds for ' +
            'all positive integers.',
    },
    {
        id: 'maths-example-venn',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a Venn diagram?',
        aliases: ['worked example venn diagram', 'example of a venn calculation', 'neither category example'],
        answer:
            'Of 30 students, 18 play sport, 14 play music and 6 do both. Those doing at least one number 18 + 14 − 6 ' +
            '= 26, so 4 do neither. Subtracting the overlap once is what stops those 6 being counted twice.',
    },
    {
        id: 'maths-example-conditional-probability',
        subject: 'mathematics',
        question: 'Can you show me a worked example of conditional probability?',
        aliases: ['worked example conditional probability', 'example of probability given that', 'restricting to a row example'],
        answer:
            'Of 60 students, 25 are girls and 15 of those play sport. P(plays sport given girl) = 15 ÷ 25 = 0.6. The ' +
            'phrase given that restricts the denominator to that group rather than the whole 60.',
    },
    {
        id: 'maths-example-depreciation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of depreciation?',
        aliases: ['worked example depreciation', 'example of reducing balance depreciation', 'declining value example'],
        answer:
            'A $24,000 vehicle depreciates 15% a year on the reducing balance. After 3 years its value is 24,000 × ' +
            '0.85³ = 24,000 × 0.6141 = $14,739. Straight line depreciation at the same rate would instead remove ' +
            '$3,600 each year.',
    },
    {
        id: 'maths-example-wages',
        subject: 'mathematics',
        question: 'Can you show me a worked example of calculating wages with overtime?',
        aliases: ['worked example wages', 'example of overtime pay', 'time and a half calculation example'],
        answer:
            'Thirty-eight hours at $24 an hour is $912. Six hours of overtime at time and a half is 6 × $36 = $216. ' +
            'The gross pay is $1,128, from which tax and superannuation are then deducted.',
    },
    {
        id: 'maths-example-gst',
        subject: 'mathematics',
        question: 'Can you show me a worked example of GST?',
        aliases: ['worked example gst', 'example of adding gst', 'finding the gst in a total'],
        answer:
            'A price of $250 before GST becomes 250 × 1.1 = $275. To find the GST inside that total, divide by 11: ' +
            '$25. Taking 10% of $275 would give $27.50, which is the common error.',
    },
    {
        id: 'maths-example-blood-alcohol',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a blood alcohol calculation?',
        aliases: ['worked example blood alcohol', 'example of a bac calculation', 'bac formula example'],
        answer:
            'For a male, BAC = (10N − 7.5H) ÷ (6.8M). With 4 standard drinks over 2 hours at 80 kg: (40 − 15) ÷ 544 = ' +
            '0.046. The formula is an estimate, and the time term means waiting is the only way to lower it.',
    },
    {
        id: 'maths-example-dosage',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a medication dosage?',
        aliases: ['worked example dosage', 'example of a medicine calculation', 'millilitres of a mixture example'],
        answer:
            'A mixture contains 250 mg per 5 mL and 400 mg is required. Volume = 400 ÷ 250 × 5 = 8 mL. Checking the ' +
            'direction matters: needing more than the stated dose must give more than 5 mL.',
    },
    {
        id: 'maths-example-scale-drawing',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a scale drawing?',
        aliases: ['worked example scale drawing', 'example of reading a plan', 'scale calculation example'],
        answer:
            'On a 1:50 plan a wall measures 6 cm. The real length is 6 × 50 = 300 cm, which is 3 m. Convert to ' +
            'sensible units only at the end, and note that an area on that plan scales by 50², not 50.',
    },
    {
        id: 'maths-example-time-zones',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a time zone calculation?',
        aliases: ['worked example time zones', 'example of a time difference between cities', 'utc offset example'],
        answer:
            'Sydney runs at UTC+10 in winter and London at UTC+0, a difference of 10 hours. A 9:00 am flight ' +
            'departure in London is 7:00 pm in Sydney. Daylight saving shifts either offset, so check the date before ' +
            'assuming the gap.',
    },
];
