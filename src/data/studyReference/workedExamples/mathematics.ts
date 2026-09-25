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
        id: 'maths-example-simultaneous-quadratic',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a line meeting a curve?',
        aliases: ['worked example line and curve', 'example of substituting into a quadratic', 'intersection of a line and parabola example'],
        answer:
            'Solve y = x + 1 with y = x² − 1. Substituting gives x² − 1 = x + 1, so x² − x − 2 = 0 and (x − 2)(x + 1) ' +
            '= 0. The points are (2, 3) and (−1, 0), so the line cuts the parabola twice.',
    },
    {
        id: 'maths-example-sign-diagram',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a quadratic inequality?',
        aliases: ['worked example quadratic inequality', 'example of a sign diagram', 'when is a quadratic positive example'],
        answer:
            'Solve (x − 1)(x + 3) > 0. The roots are 1 and −3, and the parabola opens upward, so it is above the axis ' +
            'outside the roots. The answer is x < −3 or x > 1, which is two intervals rather than one.',
    },
    {
        id: 'maths-example-absolute-value',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an absolute value equation?',
        aliases: ['worked example absolute value', 'example of a modulus equation', 'two cases example'],
        answer:
            'Solve |2x − 3| = 7. Either 2x − 3 = 7, giving x = 5, or 2x − 3 = −7, giving x = −2. Both satisfy the ' +
            'original, since the absolute value of 7 and of −7 is the same.',
    },
    {
        id: 'maths-example-quadratic-word',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a quadratic word problem?',
        aliases: ['worked example quadratic word problem', 'example of area giving a quadratic', 'rectangle area quadratic example'],
        answer:
            'A rectangle is 3 m longer than it is wide and has area 40 m². With width x, x(x + 3) = 40, so x² + 3x − ' +
            '40 = 0 and (x + 8)(x − 5) = 0. Reject x = −8 as a length, so the width is 5 m and the length 8 m.',
    },
    {
        id: 'maths-example-simultaneous-word',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a simultaneous equations word problem?',
        aliases: ['worked example simultaneous word problem', 'example of two unknowns from prices', 'adult and child ticket example'],
        answer:
            'Three adults and two children cost $74; two adults and three children cost $66. Multiply the first by 3 ' +
            'and the second by 2 to match the children, then subtract: 5a = 90, so a = $18. Substituting gives c = ' +
            '$10.',
    },
    {
        id: 'maths-example-cylinder-surface',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the surface area of a cylinder?',
        aliases: ['worked example cylinder surface area', 'example of surface area of a cylinder', 'two circles plus a rectangle'],
        answer:
            'For radius 4 cm and height 10 cm, the two circles give 2π(16) = 32π and the curved surface gives ' +
            '2π(4)(10) = 80π. The total is 112π ≈ 352 cm². The curved surface unrolls into a rectangle of width equal ' +
            'to the circumference.',
    },
    {
        id: 'maths-example-cone-volume',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the volume of a cone?',
        aliases: ['worked example cone volume', 'example of volume of a cone', 'third of a cylinder example'],
        answer:
            'For radius 3 cm and height 8 cm, V = ⅓πr²h = ⅓π(9)(8) = 24π ≈ 75.4 cm³. A cone is exactly a third of the ' +
            'cylinder with the same base and height, which is a useful check.',
    },
    {
        id: 'maths-example-pythagoras-3d',
        subject: 'mathematics',
        question: 'Can you show me a worked example of Pythagoras in three dimensions?',
        aliases: ['worked example pythagoras in 3d', 'example of a space diagonal', 'diagonal of a box example'],
        answer:
            'A box measures 3, 4 and 12. The base diagonal is √(9 + 16) = 5, and the space diagonal is √(25 + 144) = ' +
            '13. Applying Pythagoras twice, or √(a² + b² + c²) directly, gives the same result.',
    },
    {
        id: 'maths-example-bearings',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a bearings problem?',
        aliases: ['worked example bearings', 'example of a bearing calculation', 'walking on two bearings example'],
        answer:
            'Walk 5 km on a bearing of 060°, then 3 km on 150°. Those bearings differ by 90°, so the legs are ' +
            'perpendicular and the direct distance is √(25 + 9) = 5.83 km. Sketching the bearings from north first is ' +
            'what reveals the right angle.',
    },
    {
        id: 'maths-example-ambiguous-case',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the ambiguous case?',
        aliases: ['worked example ambiguous case', 'example of two possible triangles', 'sine rule two answers example'],
        answer:
            'With a = 7, b = 9 and A = 40°, the sine rule gives sin B = 9 sin 40° ÷ 7 = 0.827, so B = 55.8° or ' +
            '124.2°. Both leave an angle sum under 180°, so two triangles exist and the question needs both answers.',
    },
    {
        id: 'maths-example-arithmetic-word',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an arithmetic sequence in context?',
        aliases: ['worked example arithmetic in context', 'example of seats in rows', 'increasing rows example'],
        answer:
            'A theatre has 12 seats in the first row and two more in each row after, for 20 rows. The last row has 12 ' +
            '+ 19(2) = 50, and the total is (20/2)(12 + 50) = 620 seats.',
    },
    {
        id: 'maths-example-quotient-rule',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the quotient rule?',
        aliases: ['worked example quotient rule', 'example of differentiating a fraction', 'quotient rule substitution example'],
        answer:
            'Differentiate y = (2x + 1)/(x − 3). With u = 2x + 1 and v = x − 3, y′ = (u′v − uv′)/v² = [2(x − 3) − (2x ' +
            '+ 1)]/(x − 3)². The numerator simplifies to −7, so y′ = −7/(x − 3)².',
    },
    {
        id: 'maths-example-tangent-equation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a tangent equation?',
        aliases: ['worked example tangent equation', 'example of the equation of a tangent', 'tangent at a point example'],
        answer:
            'For y = x² − 4x + 5 at x = 3: y = 2, and y′ = 2x − 4 = 2 at that point. So the tangent is y − 2 = 2(x − ' +
            '3), which simplifies to y = 2x − 4. The normal would have gradient −½ through the same point.',
    },
    {
        id: 'maths-example-trig-integral',
        subject: 'mathematics',
        question: 'Can you show me a worked example of integrating a trigonometric function?',
        aliases: ['worked example trig integral', 'example of integrating sin x', 'definite integral of sine example'],
        answer:
            'Evaluate the integral of sin x from 0 to π/2. The primitive is −cos x, so the value is −cos(π/2) + cos 0 ' +
            '= 0 + 1 = 1. The limits are in radians, which is the only form in which these primitives hold.',
    },
    {
        id: 'maths-example-motion-calculus',
        subject: 'mathematics',
        question: 'Can you show me a worked example of motion using calculus?',
        aliases: ['worked example motion calculus', 'example of velocity and acceleration functions', 'when is the particle at rest example'],
        answer:
            'With v = 3t² − 12t, the particle is at rest when 3t(t − 4) = 0, so at t = 0 and t = 4. Acceleration is a ' +
            '= 6t − 12, which is 12 m s⁻² at t = 4, so it is speeding up again by then.',
    },
];
