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
        question: 'What are the volume and surface area of a sphere?',
        aliases: [
            'volume of a sphere', 'sphere volume', 'sphere formula', 'volume sphere',
            'surface area of a sphere', 'sphere surface area', 'area of a sphere', '4 pi r squared',
        ],
        answer:
            'Volume is V = 4/3 × π × r³ and surface area is A = 4πr², where r is the radius. ' +
            'A common slip is using the diameter instead of the radius, so halve it first. ' +
            'For a hemisphere, halve the volume, but the surface area is 2πr² curved plus πr² for the flat face.',
    },
    {
        id: 'maths-cone-volume',
        subject: 'mathematics',
        question: 'What is the formula for the volume of a cone?',
        aliases: ['volume of a cone', 'cone volume', 'volume cone'],
        answer:
            'V = 1/3 × π × r² × h, where h is the perpendicular height. The curved surface area is πrl, ' +
            'where l is the slant height, which you often find with Pythagoras from r and h.',
    },
    {
        id: 'maths-cylinder-volume',
        subject: 'mathematics',
        question: 'What is the formula for the volume of a cylinder?',
        aliases: ['volume of a cylinder', 'cylinder volume', 'volume cylinder'],
        answer:
            'V = π × r² × h. The total surface area is 2πr² + 2πrh: the two circular ends plus the curved side, ' +
            'which unrolls into a rectangle of width 2πr and height h.',
    },
    {
        id: 'maths-prism-pyramid-volume',
        subject: 'mathematics',
        question: 'How do I find the volume of a prism or a pyramid?',
        aliases: [
            'volume of a prism', 'volume of a pyramid', 'prism volume', 'pyramid volume',
            'rectangular prism', 'volume of a box', 'cuboid', 'length times width times height',
            'volume of a rectangular prism', 'triangular prism',
        ],
        answer:
            'A rectangular prism is V = length × width × height. ' +
            'Any prism is V = A × h, the area of the cross-section times the length, so a triangular prism is the ' +
            'triangle\u2019s area times its length. ' +
            'A pyramid or cone is a third of the prism that contains it: V = 1/3 × A × h. ' +
            'The height is always perpendicular to the base, never the slant.',
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
        aliases: ['probability rules', 'basic probability', 'probability of an event'],
        answer:
            'P(not A) = 1 − P(A). For either event, P(A or B) = P(A) + P(B) − P(A and B). For independent events, ' +
            'P(A and B) = P(A) × P(B). Conditional probability is P(A|B) = P(A and B)/P(B).',
    },
    {
        id: 'maths-statistics-measures',
        subject: 'mathematics',
        question: 'What is the difference between mean, median and mode?',
        aliases: ['mean median mode', 'average', 'range', 'measures of centre'],
        answer:
            'The mean is the total divided by the count, the median is the middle value in order, and the mode is the ' +
            'most common value. The median is the one to quote when outliers would drag the mean, such as house prices.',
    },
    {
        id: 'maths-percentage-change',
        subject: 'mathematics',
        question: 'How do I calculate a percentage change?',
        aliases: ['percentage change', 'percentage increase', 'percentage decrease'],
        answer:
            'Percentage change = (new − original) / original × 100. A positive answer is an increase, a negative one a decrease. ' +
            'To increase a value by r%, multiply by (1 + r/100); to decrease it, multiply by (1 − r/100).',
    },
    {
        id: 'maths-surface-area-vs-volume',
        subject: 'mathematics',
        question: 'What is the difference between surface area and volume?',
        aliases: ['surface area vs volume', 'difference between area and volume', 'units for volume'],
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
        aliases: ['ratio', 'rates', 'unitary method', 'scale', 'proportion'],
        answer:
            'Divide in a ratio by adding the parts, finding one part, then multiplying: sharing $60 as 2:3 means ' +
            'five parts of $12. A rate compares different units, such as km/h. The unitary method finds the value of ' +
            'one unit first, then scales.',
    },
    {
        id: 'maths-pythagoras-3d',
        subject: 'mathematics',
        question: 'How do I use Pythagoras and trigonometry in three dimensions?',
        aliases: ['3d trigonometry', 'pythagoras in 3d', 'trigonometry in a solid', 'diagonal of a box'],
        answer:
            'Find a right-angled triangle inside the solid, often using a diagonal of the base first. ' +
            'Angles of elevation and depression are measured from the horizontal and are equal to each other. ' +
            'Bearings are measured clockwise from north as three digits, such as 075°.',
    },
    {
        id: 'maths-similar-congruent',
        subject: 'mathematics',
        question: 'What is the difference between similar and congruent figures?',
        aliases: ['similar triangles', 'congruent triangles', 'sas', 'scale factor'],
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
        aliases: ['scientific notation', 'standard form', 'significant figures maths'],
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
        aliases: ['box plot', 'quartiles', 'interquartile range', 'five number summary'],
        answer:
            'The five-number summary is minimum, lower quartile, median, upper quartile and maximum. ' +
            'The box spans the quartiles, so its width is the interquartile range, IQR = Q₃ − Q₁. ' +
            'An outlier sits more than 1.5 × IQR beyond a quartile.',
    },
    {
        id: 'maths-two-way-tables',
        subject: 'mathematics',
        question: 'How do I use a two-way table?',
        aliases: ['two way table', 'reading a table of counts', 'frequency table probability'],
        answer:
            'A two-way table splits a group by two categories, with the row and column totals meeting at the grand ' +
            'total, which is how you check your work. ' +
            'Read a probability straight from the counts, and for a conditional one use the row or column total as ' +
            'the denominator rather than the grand total.',
    },
    {
        id: 'maths-jr-bodmas-negatives',
        subject: 'mathematics',
        question: 'How do I deal with minus signs in a long calculation?',
        aliases: ['negatives with brackets', 'minus outside a bracket', 'squaring a negative'],
        answer:
            'A minus sign in front of a bracket multiplies everything inside by −1. Note that (−3)² is 9 but −3² is ' +
            '−9, because the index applies only to the 3 unless a bracket says otherwise.',
    },
    {
        id: 'maths-jr-percentage-profit-loss',
        subject: 'mathematics',
        question: 'How do I calculate profit, loss and discount?',
        aliases: ['profit and loss', 'discount calculation', 'percentage profit'],
        answer:
            'Profit is selling price minus cost price, and percentage profit divides that by the cost price. A ' +
            'discount is a percentage of the marked price, so the sale price is the marked price times one minus the ' +
            'discount rate.',
    },
    {
        id: 'maths-jr-simple-interest-vs-compound',
        subject: 'mathematics',
        question: 'Why does compounding beat a flat calculation over time?',
        aliases: ['simple versus compound interest', 'which grows faster'],
        answer:
            'Simple interest is calculated on the original amount every period, so growth is linear. Compound ' +
            'interest is calculated on the balance including past interest, so growth accelerates. Over a long term ' +
            'the difference becomes very large.',
    },
    {
        id: 'maths-jr-algebra-index-laws',
        subject: 'mathematics',
        question: 'How do I simplify an expression with indices and variables?',
        aliases: ['simplifying with indices', 'multiplying terms with powers', 'dividing algebraic terms'],
        answer:
            'Multiply the coefficients and add the indices of like bases; divide the coefficients and subtract the ' +
            'indices. Anything to the power zero is one, so terms can cancel to a plain number.',
    },
    {
        id: 'maths-jr-solving-two-step',
        subject: 'mathematics',
        question: 'How do I solve an equation with two operations?',
        aliases: ['two step equation', 'undoing operations in order', 'solving 3x plus 4'],
        answer:
            'Undo the operations in reverse order, doing the same to both sides. For 3x + 4 = 19, subtract 4 first, ' +
            'then divide by 3. Substituting the answer back is the fastest check.',
    },
    {
        id: 'maths-jr-equations-both-sides',
        subject: 'mathematics',
        question: 'How do I solve an equation with the unknown on both sides?',
        aliases: ['unknown on both sides', 'variables on both sides', 'collecting x terms'],
        answer:
            'Move the smaller variable term to the side with the larger one to avoid negatives, then move the numbers ' +
            'the other way. Whatever you do to one side must be done to the other.',
    },
    {
        id: 'maths-jr-fraction-bar-bracket',
        subject: 'mathematics',
        question: 'Does a fraction bar act as a bracket?',
        aliases: ['fraction bar as a bracket', 'dividing line grouping', 'numerator calculated first'],
        answer:
            'Yes. Everything above the line is worked out before dividing, and so is everything below, even though no ' +
            'brackets are written. Typing such an expression into a calculator without adding those brackets is a ' +
            'common source of wrong answers.',
    },
    {
        id: 'maths-jr-coordinate-basics',
        subject: 'mathematics',
        question: 'How do I plot and read coordinates?',
        aliases: ['plotting coordinates', 'four quadrants', 'x before y'],
        answer:
            'The first number is horizontal and the second vertical, so (3, −2) is three right and two down. The four ' +
            'quadrants are numbered anticlockwise from the top right, which fixes the signs in each.',
    },
    {
        id: 'maths-jr-gradient-meaning',
        subject: 'mathematics',
        question: 'What does gradient actually mean?',
        aliases: ['meaning of gradient', 'rise over run', 'steepness of a line'],
        answer:
            'The change in y for each unit increase in x, found as rise over run. A positive gradient rises to the ' +
            'right, a negative one falls, zero is horizontal, and a vertical line has no defined gradient.',
    },
    {
        id: 'maths-jr-straight-line-from-two-points',
        subject: 'mathematics',
        question: 'How do I find the equation of a line through two points?',
        aliases: ['equation from two points', 'gradient then intercept', 'point gradient form'],
        answer:
            'Find the gradient from the two points, then substitute one point into y − y₁ = m(x − x₁) and rearrange. ' +
            'Check by substituting the other point, which should satisfy the equation.',
    },
    {
        id: 'maths-jr-data-collection',
        subject: 'mathematics',
        question: 'What is the difference between a census and a sample?',
        aliases: ['census or sample', 'population and sample', 'why sample instead of census'],
        answer:
            'A census surveys everyone, so it is accurate but expensive and slow. A sample surveys part of the ' +
            'population and generalises, which is cheaper but only reliable if the sample is chosen without bias.',
    },
    {
        id: 'maths-jr-frequency-table',
        subject: 'mathematics',
        question: 'How do I build and use a frequency table?',
        aliases: ['frequency table', 'grouped frequency', 'tally to frequency'],
        answer:
            'Tally each value or class, total the tallies, and add a cumulative column if you need running totals. ' +
            'Grouping into classes loses individual values but reveals the shape of a large data set.',
    },
    {
        id: 'maths-jr-probability-language',
        subject: 'mathematics',
        question: 'How do I express a probability as a fraction, decimal and percentage?',
        aliases: ['probability as a fraction', 'converting a probability', 'chance out of one'],
        answer:
            'Count favourable outcomes over total outcomes, then divide for the decimal and multiply by 100 for the ' +
            'percentage. Every probability lies between 0 and 1, so an answer above 1 means the total was wrong.',
    },
    {
        id: 'maths-jr-conversion-of-units-time',
        subject: 'mathematics',
        question: 'How do I convert between units of time?',
        aliases: ['converting time units', 'minutes to hours', 'seconds in a day'],
        answer:
            '60 seconds in a minute, 60 minutes in an hour, 24 hours in a day. Time is not decimal, so 2.5 hours is 2 ' +
            'hours 30 minutes, not 2 hours 50, which is where most errors come from.',
    },
    {
        id: 'maths-jr-estimation-checking',
        subject: 'mathematics',
        question: 'How do I check whether an answer is sensible?',
        aliases: ['is my answer sensible', 'estimating to check an answer', 'order of magnitude check'],
        answer:
            'Round the numbers and redo the calculation roughly in your head. Also ask whether the answer should be ' +
            'bigger or smaller than what you started with, which catches a division that should have been a ' +
            'multiplication.',
    },
    {
        id: 'maths-jr-number-line-inequalities',
        subject: 'mathematics',
        question: 'How do I show an inequality on a number line?',
        aliases: ['inequality on a number line', 'open and closed circle', 'graphing an inequality'],
        answer:
            'An open circle excludes the value, for less than or greater than; a filled circle includes it, for the ' +
            'or equal to versions. The arrow points in the direction of the values that satisfy it.',
    },
    {
        id: 'maths-jr-ratio-equivalent',
        subject: 'mathematics',
        question: 'How do I simplify and compare ratios?',
        aliases: ['simplifying a ratio', 'equivalent ratios', 'comparing two ratios'],
        answer:
            'Divide both parts by their highest common factor, converting to the same units first. To compare two ' +
            'ratios, write both with the same first term, or convert each to a single fraction.',
    },
    {
        id: 'maths-jr-scale-and-maps',
        subject: 'mathematics',
        question: 'How do I use a map scale?',
        aliases: ['map scale calculation', 'scale on a plan', 'real distance from a map'],
        answer:
            'A scale of 1:50,000 means one unit on the map is 50,000 in reality, so 3 cm represents 150,000 cm, which ' +
            'is 1.5 km. Convert to sensible units only at the end.',
    },
    {
        id: 'maths-jr-pythagoras-intro',
        subject: 'mathematics',
        question: 'How do I use Pythagoras to find a shorter side?',
        aliases: ['finding a shorter side', 'pythagoras subtraction', 'leg of a right triangle'],
        answer:
            'Subtract rather than add: a² = c² − b², where c is always the hypotenuse opposite the right angle. ' +
            'Identifying the hypotenuse first is what prevents the wrong operation.',
    },
    {
        id: 'maths-jr-rounding-decimals',
        subject: 'mathematics',
        question: 'How do I round to decimal places and significant figures?',
        aliases: ['rounding to decimal places', 'significant figures rounding', 'which digit decides'],
        answer:
            'Look at the digit immediately after the place you are keeping: five or more rounds up. For significant ' +
            'figures, start counting from the first non-zero digit, so 0.00456 to two significant figures is 0.0046.',
    },
    {
        id: 'maths-jr-negative-index-intro',
        subject: 'mathematics',
        question: 'What does a power of zero or a negative power mean?',
        aliases: ['power of zero', 'negative power meaning', 'reciprocal from an index'],
        answer:
            'Anything except zero to the power zero is one, because dividing a power by itself leaves no factors. A ' +
            'negative power means one over the positive power, so 2⁻³ is one eighth.',
    },
];
