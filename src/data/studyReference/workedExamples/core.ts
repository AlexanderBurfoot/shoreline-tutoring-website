/**
 * Worked examples: one question type, solved with numbers.
 *
 * These exist because a student who has read the method still asks to see it
 * done. Every example is written by hand and shown exactly as written, so the
 * assistant never calculates anything itself. It shows a parallel example and
 * leaves the student to apply it to their own numbers.
 */
import type { StudyEntry } from '../types';

export const workedExampleCoreEntries: StudyEntry[] = [
    {
        id: 'maths-example-quadratic',
        subject: 'mathematics',
        question: 'Can you show me a worked example of solving a quadratic equation?',
        aliases: ['worked example quadratic', 'example of solving a quadratic', 'show me a quadratic solved'],
        answer:
            'Solve 2x² + 5x − 3 = 0. Two numbers multiplying to 2 × −3 = −6 and adding to 5 are 6 and −1, so split ' +
            'the middle term: 2x² + 6x − x − 3 = 0, giving 2x(x + 3) − 1(x + 3) = 0 and (2x − 1)(x + 3) = 0. So x = ½ ' +
            'or x = −3. Substitute both back to check.',
    },
    {
        id: 'maths-example-simultaneous',
        subject: 'mathematics',
        question: 'Can you show me a worked example of simultaneous equations?',
        aliases: ['worked example simultaneous equations', 'example of elimination', 'show me simultaneous equations solved'],
        answer:
            'Solve 3x + 2y = 16 and x − y = 3. From the second, x = y + 3. Substitute: 3(y + 3) + 2y = 16, so 5y + 9 ' +
            '= 16 and y = 1.4. Then x = 4.4. Check in the first equation: 13.2 + 2.8 = 16.',
    },
    {
        id: 'maths-example-product-rule',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the product rule?',
        aliases: ['worked example product rule', 'example of differentiating a product', 'show me the product rule'],
        answer:
            'Differentiate y = x³ sin x. Let u = x³ so u′ = 3x², and v = sin x so v′ = cos x. Then y′ = u′v + uv′ = ' +
            '3x² sin x + x³ cos x. Writing u, v and their derivatives down first is what stops the two being mixed ' +
            'up.',
    },
    {
        id: 'maths-example-definite-integral',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a definite integral?',
        aliases: ['worked example definite integral', 'example of integrating between limits', 'show me an integral evaluated'],
        answer:
            'Evaluate the integral of 2x + 3 from x = 1 to x = 4. The primitive is x² + 3x. At x = 4 that is 16 + 12 ' +
            '= 28; at x = 1 it is 1 + 3 = 4. Subtract: 28 − 4 = 24. Always substitute the upper limit first.',
    },
    {
        id: 'maths-example-percentage',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a percentage calculation?',
        aliases: ['worked example percentage', 'example of finding a percentage', 'show me a percentage worked out'],
        answer:
            'Find 15% of 340. Ten per cent is 34, and 5% is half of that, 17. So 15% is 34 + 17 = 51. For a ' +
            'percentage increase instead, add it on: 340 + 51 = 391, which is the same as 340 × 1.15.',
    },
    {
        id: 'maths-example-ratio',
        subject: 'mathematics',
        question: 'Can you show me a worked example of sharing in a ratio?',
        aliases: ['worked example ratio', 'example of sharing in a ratio', 'show me a ratio shared'],
        answer:
            'Share 40 in the ratio 3:5. The parts total 3 + 5 = 8 shares, so one share is 40 ÷ 8 = 5. The amounts are ' +
            '3 × 5 = 15 and 5 × 5 = 25. Check they add back to 40.',
    },
    {
        id: 'maths-example-trigonometry',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a side with trigonometry?',
        aliases: ['worked example trigonometry', 'example of finding a side with trig', 'show me a trig calculation'],
        answer:
            'A right-angled triangle has a 35° angle and a hypotenuse of 12 cm. To find the side opposite the angle, ' +
            'use sin: sin 35° = opposite ÷ 12, so opposite = 12 sin 35° = 6.9 cm. Label the sides relative to the ' +
            'angle before choosing the ratio.',
    },
    {
        id: 'maths-example-compound-interest',
        subject: 'mathematics',
        question: 'Can you show me a worked example of compound interest?',
        aliases: ['worked example compound interest', 'example of compound interest', 'show me compound interest calculated'],
        answer:
            'Invest $5,000 at 4% per year, compounded annually, for 6 years. A = 5000 × 1.04⁶ = $6,326.60, so the ' +
            'interest earned is $1,326.60. Simple interest would have given only 5000 × 0.04 × 6 = $1,200.',
    },
    {
        id: 'maths-example-probability-tree',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a probability tree diagram?',
        aliases: ['worked example tree diagram', 'example of a probability tree', 'show me a two step probability'],
        answer:
            'A bag holds 3 red and 2 blue counters, and two are drawn without replacement. P(both red) = 3/5 × 2/4 = ' +
            '6/20 = 3/10. The second fraction changes because one red has gone and only four counters remain.',
    },
    {
        id: 'maths-example-mean-missing',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a missing score from an average?',
        aliases: ['worked example missing score', 'example of finding a missing value from a mean', 'show me a missing score found'],
        answer:
            'Four tests average 72, and the first three were 65, 78 and 70. The total needed is 4 × 72 = 288, and the ' +
            'three known scores sum to 213. So the fourth is 288 − 213 = 75.',
    },
    {
        id: 'chem-example-moles-from-mass',
        subject: 'chemistry',
        question: 'Can you show me a worked example of finding moles from a mass?',
        aliases: ['worked example moles', 'example of finding moles from mass', 'show me a mole calculation'],
        answer:
            'Find the moles in 12.0 g of carbon. The molar mass of carbon is 12.01 g mol⁻¹, so n = 12.0 ÷ 12.01 = ' +
            '0.999 mol, about 1 mol. That is 1 × 6.022 × 10²³ atoms.',
    },
    {
        id: 'chem-example-titration',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a titration calculation?',
        aliases: ['worked example titration', 'example of a titration calculation', 'show me a titration worked out'],
        answer:
            'A 25.00 mL aliquot of NaOH needs 22.40 mL of 0.100 mol L⁻¹ HCl. Moles of HCl = 0.100 × 0.02240 = 2.24 × ' +
            '10⁻³ mol. The ratio is 1:1, so the NaOH aliquot held the same. Its concentration is 2.24 × 10⁻³ ÷ ' +
            '0.02500 = 0.0896 mol L⁻¹.',
    },
    {
        id: 'chem-example-ph',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a pH calculation?',
        aliases: ['worked example ph', 'example of calculating ph', 'show me ph worked out'],
        answer:
            'Find the pH of 0.050 mol L⁻¹ HCl. It is a strong monoprotic acid, so [H⁺] = 0.050 mol L⁻¹. pH = ' +
            '−log₁₀(0.050) = 1.30. For 0.050 mol L⁻¹ H₂SO₄ instead, [H⁺] would be 0.100 and the pH 1.00.',
    },
    {
        id: 'chem-example-limiting-reagent',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a limiting reagent question?',
        aliases: ['worked example limiting reagent', 'example of finding the limiting reagent', 'show me a limiting reagent calculation'],
        answer:
            'For 2H₂ + O₂ → 2H₂O, with 0.30 mol H₂ and 0.20 mol O₂: divide each by its coefficient, giving 0.15 for ' +
            'hydrogen and 0.20 for oxygen. Hydrogen is smaller, so it limits, and it produces 0.30 mol of water with ' +
            'oxygen left over.',
    },
    {
        id: 'chem-example-empirical-formula',
        subject: 'chemistry',
        question: 'Can you show me a worked example of an empirical formula?',
        aliases: ['worked example empirical formula', 'example of finding an empirical formula', 'show me an empirical formula'],
        answer:
            'A compound is 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. Divide each by its atomic mass: ' +
            '3.33, 6.64 and 3.33. Divide by the smallest: 1, 2, 1. So the empirical formula is CH₂O.',
    },
    {
        id: 'chem-example-calorimetry',
        subject: 'chemistry',
        question: 'Can you show me a worked example of an enthalpy calculation?',
        aliases: ['worked example enthalpy', 'example of calorimetry calculation', 'show me q = mcdeltat used'],
        answer:
            'Burning 0.50 g of ethanol raises 200 g of water by 8.0 °C. q = mcΔT = 200 × 4.18 × 8.0 = 6,688 J. The ' +
            'moles of ethanol are 0.50 ÷ 46.07 = 0.0109 mol, so ΔH = −6.688 ÷ 0.0109 = −614 kJ mol⁻¹.',
    },
    {
        id: 'chem-example-balancing',
        subject: 'chemistry',
        question: 'Can you show me a worked example of balancing an equation?',
        aliases: ['worked example balancing', 'example of balancing an equation', 'show me an equation balanced'],
        answer:
            'Balance C₃H₈ + O₂ → CO₂ + H₂O. Three carbons need 3CO₂, eight hydrogens need 4H₂O. That is 6 + 4 = 10 ' +
            'oxygen atoms on the right, so 5O₂ on the left. The balanced equation is C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.',
    },
    {
        id: 'chem-example-dilution',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a dilution calculation?',
        aliases: ['worked example dilution', 'example of a dilution calculation', 'show me a dilution worked out'],
        answer:
            'Make 250 mL of 0.100 mol L⁻¹ solution from a 2.00 mol L⁻¹ stock. c₁V₁ = c₂V₂ gives V₁ = (0.100 × 0.250) ' +
            '÷ 2.00 = 0.0125 L, so 12.5 mL of stock. Add water up to the 250 mL mark, not 250 mL of water.',
    },
    {
        id: 'phys-example-suvat',
        subject: 'physics',
        question: 'Can you show me a worked example of an equation of motion?',
        aliases: ['worked example suvat', 'example of an acceleration calculation', 'show me an equation of motion used'],
        answer:
            'A car speeds up from 5.0 to 20.0 m s⁻¹ in 3.0 s. a = (v − u)/t = (20.0 − 5.0)/3.0 = 5.0 m s⁻². The ' +
            'distance covered is s = (u + v)t/2 = (25.0 × 3.0)/2 = 37.5 m.',
    },
    {
        id: 'phys-example-projectile',
        subject: 'physics',
        question: 'Can you show me a worked example of a projectile question?',
        aliases: ['worked example projectile', 'example of a projectile calculation', 'show me a projectile worked out'],
        answer:
            'A ball is launched at 20 m s⁻¹ at 30° above horizontal. Vertically u = 20 sin 30° = 10 m s⁻¹, so the ' +
            'time to the peak is 10/9.8 = 1.02 s and the flight time is 2.04 s. Horizontally the velocity is 20 cos ' +
            '30° = 17.3 m s⁻¹, so the range is 17.3 × 2.04 = 35.3 m.',
    },
    {
        id: 'phys-example-newton-second',
        subject: 'physics',
        question: 'Can you show me a worked example of using F = ma with friction?',
        aliases: ['worked example f = ma', 'example of a force calculation with friction', 'show me newtons second law used'],
        answer:
            'A 5.0 kg box is pushed with 30 N across a surface where friction is 12 N. The net force is 30 − 12 = 18 ' +
            'N, so a = 18/5.0 = 3.6 m s⁻². Only the net force goes into F = ma, not the applied force alone.',
    },
    {
        id: 'phys-example-momentum',
        subject: 'physics',
        question: 'Can you show me a worked example of conservation of momentum in a collision?',
        aliases: ['worked example collision', 'example of a momentum calculation', 'show me conservation of momentum used'],
        answer:
            'A 2.0 kg trolley at 3.0 m s⁻¹ strikes a stationary 1.0 kg trolley and they move off together. Momentum ' +
            'before is 2.0 × 3.0 = 6.0 kg m s⁻¹, and the combined mass is 3.0 kg, so v = 6.0/3.0 = 2.0 m s⁻¹. Kinetic ' +
            'energy falls from 9.0 J to 6.0 J, so the collision is inelastic.',
    },
    {
        id: 'phys-example-circuit',
        subject: 'physics',
        question: 'Can you show me a worked example of a series circuit calculation?',
        aliases: ['worked example circuit', 'example of a series circuit calculation', 'show me ohms law used'],
        answer:
            'Two resistors of 4.0 Ω and 6.0 Ω sit in series across a 12 V supply. The total resistance is 10.0 Ω, so ' +
            'I = 12/10.0 = 1.2 A throughout. The voltage across the 4.0 Ω resistor is 1.2 × 4.0 = 4.8 V, and the ' +
            'power it dissipates is 1.2² × 4.0 = 5.8 W.',
    },
    {
        id: 'phys-example-transformer',
        subject: 'physics',
        question: 'Can you show me a worked example of a transformer calculation?',
        aliases: ['worked example transformer', 'example of a turns ratio calculation', 'show me a transformer worked out'],
        answer:
            'A transformer has 200 turns on the primary and 1,000 on the secondary, with 24 V in. Vs = 24 × ' +
            '(1000/200) = 120 V. If it is ideal and the primary current is 2.5 A, the secondary current is 2.5 × ' +
            '(200/1000) = 0.50 A.',
    },
    {
        id: 'phys-example-half-life',
        subject: 'physics',
        question: 'Can you show me a worked example of a half-life calculation?',
        aliases: ['worked example half life', 'example of a half life calculation', 'show me half life worked out'],
        answer:
            'A sample has an activity of 800 Bq and a half-life of 6.0 hours. After 18 hours three half-lives have ' +
            'passed, so the activity is 800 ÷ 2³ = 100 Bq. For a time that is not a whole number of half-lives, use ' +
            'the exponential form instead.',
    },
    {
        id: 'phys-example-photon-energy',
        subject: 'physics',
        question: 'Can you show me a worked example of photon energy?',
        aliases: ['worked example photon energy', 'example of calculating photon energy', 'show me e = hf used'],
        answer:
            'Find the energy of a photon of wavelength 500 nm. f = c/λ = (3.00 × 10⁸)/(500 × 10⁻⁹) = 6.00 × 10¹⁴ Hz. ' +
            'E = hf = 6.626 × 10⁻³⁴ × 6.00 × 10¹⁴ = 3.98 × 10⁻¹⁹ J, which is about 2.5 eV.',
    },
    {
        id: 'bio-example-punnett',
        subject: 'biology',
        question: 'Can you show me a worked example of a Punnett square cross?',
        aliases: ['worked example punnett square', 'example of a monohybrid cross', 'show me a genetic cross worked out'],
        answer:
            'Cross two heterozygous tall plants, Tt × Tt. The square gives TT, Tt, Tt and tt. So three quarters are ' +
            'tall and one quarter short, a 3:1 phenotype ratio, while the genotype ratio is 1:2:1.',
    },
    {
        id: 'bio-example-magnification',
        subject: 'biology',
        question: 'Can you show me a worked example of a magnification calculation?',
        aliases: ['worked example magnification', 'example of calculating actual size', 'show me magnification worked out'],
        answer:
            'A cell appears 40 mm across under a magnification of 400. Actual size = image size ÷ magnification = 40 ' +
            '÷ 400 = 0.1 mm, which is 100 μm. Convert to micrometres at the end, since cell sizes are quoted that ' +
            'way.',
    },
    {
        id: 'bio-example-hardy-weinberg',
        subject: 'biology',
        question: 'Can you show me a worked example of a Hardy-Weinberg calculation?',
        aliases: ['worked example hardy weinberg', 'example of allele frequency calculation', 'show me hardy weinberg used'],
        answer:
            'If 9% of a population shows the recessive phenotype, then q² = 0.09 so q = 0.3 and p = 0.7. ' +
            'Heterozygotes are 2pq = 2 × 0.7 × 0.3 = 0.42, so 42% carry the allele without showing it.',
    },
    {
        id: 'econ-example-elasticity',
        subject: 'economics',
        question: 'Can you show me a worked example of an elasticity calculation?',
        aliases: ['worked example elasticity', 'example of calculating elasticity', 'show me elasticity worked out'],
        answer:
            'Price rises from $10 to $12 and quantity demanded falls from 500 to 440. The price change is +20% and ' +
            'the quantity change is −12%, so elasticity is 12 ÷ 20 = 0.6. Below one, so demand is inelastic and the ' +
            'price rise raises revenue.',
    },
    {
        id: 'econ-example-growth-rate',
        subject: 'economics',
        question: 'Can you show me a worked example of an economic growth rate?',
        aliases: ['worked example growth rate', 'example of calculating economic growth', 'show me a gdp growth calculation'],
        answer:
            'Real GDP rises from $2,000 billion to $2,050 billion. The growth rate is (2050 − 2000) ÷ 2000 × 100 = ' +
            '2.5%. If the population grew 1.5% over the same period, GDP per capita grew only about 1%.',
    },
    {
        id: 'bus-example-break-even',
        subject: 'business-studies',
        question: 'Can you show me a worked example of a break-even calculation?',
        aliases: ['worked example break even', 'example of calculating break even', 'show me break even worked out'],
        answer:
            'Fixed costs are $8,000, the selling price is $25 and the variable cost is $15 per unit. The contribution ' +
            'per unit is $10, so break-even is 8000 ÷ 10 = 800 units, or $20,000 in sales. Each unit beyond 800 adds ' +
            '$10 of profit.',
    },
    {
        id: 'bus-example-ratios',
        subject: 'business-studies',
        question: 'Can you show me a worked example of financial ratios?',
        aliases: ['worked example financial ratios', 'example of calculating a ratio', 'show me a ratio calculation'],
        answer:
            'Sales are $500,000, cost of goods sold $300,000 and expenses $120,000. Gross profit is $200,000, so the ' +
            'gross profit ratio is 40%. Net profit is $80,000, so the net profit ratio is 16%. A falling net ratio ' +
            'with a steady gross ratio points to expenses.',
    },
];
