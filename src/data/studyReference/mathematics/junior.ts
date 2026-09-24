/**
 * Mathematics, Years 7 to 10.
 *
 * Measurement, geometry, algebra basics, statistics and probability: the
 * formulas students need before the senior courses assume them.
 */
import type { StudyEntry } from '../types';

export const mathematicsJuniorEntries: StudyEntry[] = [
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
        id: 'maths-line-equations',
        subject: 'mathematics',
        question: 'What are the gradient, midpoint and distance formulas?',
        aliases: ['gradient formula', 'midpoint', 'distance formula', 'equation of a line', 'y = mx + b'],
        answer:
            'Gradient m = (y₂ − y₁)/(x₂ − x₁), midpoint = ((x₁+x₂)/2, (y₁+y₂)/2), and distance = √((x₂−x₁)² + (y₂−y₁)²). ' +
            'A line is y = mx + b, or y − y₁ = m(x − x₁) when you have a point and a gradient.',
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
    {
        id: 'maths-algebra-expand-factorise',
        subject: 'mathematics',
        question: 'How do I expand and factorise expressions?',
        aliases: ['expand brackets', 'factorise', 'foil', 'common factor', 'difference of two squares'],
        answer:
            'Expanding multiplies every term inside a bracket: a(b + c) = ab + ac, and (a + b)(c + d) gives four terms. ' +
            'Factorising reverses it: take out the highest common factor first, then look for the difference of two ' +
            'squares, a² − b² = (a + b)(a − b), or a quadratic trinomial.',
    },
    {
        id: 'maths-solving-equations',
        subject: 'mathematics',
        question: 'How do I solve a linear equation?',
        aliases: ['solve for x', 'linear equation', 'rearranging equations', 'transposing formulas'],
        answer:
            'Do the same thing to both sides until x is alone, undoing operations in reverse order. ' +
            'Expand brackets first, gather the x terms on one side and the numbers on the other, then divide. ' +
            'Check by substituting your answer back in.',
    },
    {
        id: 'maths-inequalities',
        subject: 'mathematics',
        question: 'How do I solve an inequality?',
        aliases: ['inequality', 'greater than', 'number line', 'inequalities rules'],
        answer:
            'Solve it like an equation, with one rule added: multiplying or dividing by a negative number reverses ' +
            'the sign, so −2x > 6 becomes x < −3. Show the answer on a number line with an open circle for < or > ' +
            'and a closed circle for ≤ or ≥.',
    },
    {
        id: 'maths-simultaneous-equations',
        subject: 'mathematics',
        question: 'How do I solve simultaneous equations?',
        aliases: ['simultaneous equations', 'elimination method', 'substitution method', 'two equations two unknowns'],
        answer:
            'By substitution: rearrange one equation for a variable and put it into the other. ' +
            'By elimination: scale the equations so one variable cancels when you add or subtract them. ' +
            'The solution is the point where the two lines cross.',
    },
    {
        id: 'maths-parallel-perpendicular',
        subject: 'mathematics',
        question: 'How do I tell if lines are parallel or perpendicular?',
        aliases: ['parallel lines', 'perpendicular gradient', 'negative reciprocal'],
        answer:
            'Parallel lines have equal gradients: m₁ = m₂. Perpendicular lines have gradients whose product is −1, ' +
            'so m₂ is the negative reciprocal of m₁. A horizontal line has gradient 0; a vertical line has no gradient.',
    },
    {
        id: 'maths-ratio-rates',
        subject: 'mathematics',
        question: 'How do I work with ratios and rates?',
        aliases: ['ratio', 'rates', 'unitary method', 'scale', 'proportion', 'dividing in a ratio'],
        answer:
            'Divide in a ratio by adding the parts, finding one part, then multiplying: sharing $60 as 2:3 means ' +
            'five parts of $12. A rate compares different units, such as km/h. The unitary method finds the value of ' +
            'one unit first, then scales.',
    },
    {
        id: 'maths-pythagoras-3d',
        subject: 'mathematics',
        question: 'How do I use Pythagoras and trigonometry in three dimensions?',
        aliases: ['3d trigonometry', 'pythagoras in 3d', 'angle of elevation', 'angle of depression', 'bearings'],
        answer:
            'Find a right-angled triangle inside the solid, often using a diagonal of the base first. ' +
            'Angles of elevation and depression are measured from the horizontal and are equal to each other. ' +
            'Bearings are measured clockwise from north as three digits, such as 075°.',
    },
    {
        id: 'maths-similar-congruent',
        subject: 'mathematics',
        question: 'What is the difference between similar and congruent figures?',
        aliases: ['similar triangles', 'congruent triangles', 'sas', 'scale factor', 'proof geometry'],
        answer:
            'Congruent figures are identical in size and shape, proved by SSS, SAS, AAS or RHS. ' +
            'Similar figures have the same shape at a different size, proved by AA, and their matching sides share a ' +
            'scale factor. Area scales by the factor squared, volume by the factor cubed.',
    },
    {
        id: 'maths-surds',
        subject: 'mathematics',
        question: 'How do I simplify surds?',
        aliases: ['surds', 'simplify a square root', 'rationalise the denominator', 'irrational numbers'],
        answer:
            'Take out the largest perfect square: √50 = √25 × √2 = 5√2. ' +
            'Multiply surds by multiplying what is inside. To rationalise a denominator, multiply top and bottom by ' +
            'the surd, or by the conjugate when the denominator has two terms.',
    },
    {
        id: 'maths-scientific-notation',
        subject: 'mathematics',
        question: 'How does scientific notation work?',
        aliases: ['scientific notation', 'standard form', 'significant figures maths', 'rounding'],
        answer:
            'Write the number as a value between 1 and 10 times a power of ten: 45 000 is 4.5 × 10⁴, and 0.0032 is ' +
            '3.2 × 10⁻³. A positive power means a large number, a negative power a small one. ' +
            'Multiply by adding the powers, divide by subtracting them.',
    },
    {
        id: 'maths-volume-capacity-units',
        subject: 'mathematics',
        question: 'How do I convert between units of length, area and volume?',
        aliases: ['unit conversion', 'metric units', 'capacity', 'litres to cubic centimetres', 'area conversion'],
        answer:
            'Length: 1 m = 100 cm = 1000 mm. Area squares the factor, so 1 m² = 10 000 cm². ' +
            'Volume cubes it, so 1 m³ = 1 000 000 cm³. Capacity links to volume: 1 L = 1000 mL = 1000 cm³.',
    },
    {
        id: 'maths-box-plots',
        subject: 'mathematics',
        question: 'How do I read a box plot and find the quartiles?',
        aliases: ['box plot', 'quartiles', 'interquartile range', 'five number summary', 'skew'],
        answer:
            'The five-number summary is minimum, lower quartile, median, upper quartile and maximum. ' +
            'The box spans the quartiles, so its width is the interquartile range, IQR = Q₃ − Q₁. ' +
            'An outlier sits more than 1.5 × IQR beyond a quartile.',
    },
    {
        id: 'maths-two-way-tables',
        subject: 'mathematics',
        question: 'How do I use two-way tables and tree diagrams?',
        aliases: ['two way table', 'tree diagram', 'venn diagram', 'without replacement'],
        answer:
            'A two-way table splits a group by two categories, and the totals check your work. ' +
            'On a tree diagram, multiply along the branches and add between them. ' +
            'Without replacement, the second set of branches changes, since one item has been removed.',
    },
];
