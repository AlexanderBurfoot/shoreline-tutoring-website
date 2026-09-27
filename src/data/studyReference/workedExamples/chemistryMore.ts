/**
 * Worked examples: chemistry, second set.
 *
 * A further question of each type, and a first where none existed, each solved
 * with the numbers shown and checked. Written by hand and shown exactly as
 * written, so the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleChemistryMoreEntries: StudyEntry[] = [
    {
        id: 'chem-example-moles-from-volume-solution',
        subject: 'chemistry',
        question: 'Can you show me a worked example of finding moles from a volume of solution?',
        aliases: ['worked example moles from a solution volume', 'example of n equals cv', 'moles in a given volume example'],
        answer:
            'Find the moles in 25.0 mL of 0.150 mol L⁻¹ sodium hydroxide. Convert the volume to litres first: 25.0 mL ' +
            'is 0.0250 L. Then n = cV: 0.150 × 0.0250 = 3.75 × 10⁻³ mol. Leaving the volume in millilitres makes the ' +
            'answer a thousand times too large.',
    },
    {
        id: 'chem-example-mass-from-moles',
        subject: 'chemistry',
        question: 'Can you show me a worked example of converting moles into a mass in grams?',
        aliases: [
            'worked example converting moles to grams',
            'example of multiplying moles by molar mass',
            'converting moles to grams example',
        ],
        answer:
            'Find the mass of 0.250 mol of calcium carbonate. Its molar mass is 40.08 + 12.01 + 3 × 16.00 = 100.09 g ' +
            'mol⁻¹. Then m = nM: 0.250 × 100.09 = 25.0 g. Build the molar mass from the formula each time rather than ' +
            'recalling it.',
    },
    {
        id: 'chem-example-molecular-formula',
        subject: 'chemistry',
        question: 'Can you show me a worked example of finding a molecular formula from an empirical one?',
        aliases: ['worked example molecular formula', 'example of empirical to molecular formula', 'multiplying up an empirical formula example'],
        answer:
            'A compound has empirical formula CH₂O and molar mass 180 g mol⁻¹. The empirical mass is 12.01 + 2 × 1.008 ' +
            '+ 16.00 = 30.03. Divide: 180 ÷ 30.03 = 6, so the molecular formula is C₆H₁₂O₆. The ratio must come out ' +
            'close to a whole number.',
    },
    {
        id: 'chem-example-percentage-by-mass-element',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the percentage of one element in a compound?',
        aliases: ['worked example percentage of an element', 'example of mass percentage of nitrogen', 'element percentage in a compound example'],
        answer:
            'Find the percentage of nitrogen in ammonium nitrate, NH₄NO₃. Its molar mass is 80.05 g mol⁻¹ and it holds ' +
            'two nitrogen atoms, so 2 × 14.01 = 28.02. Then 28.02 ÷ 80.05 × 100 = 35.0%. Count every atom of the ' +
            'element, including those in separate parts of the formula.',
    },
    {
        id: 'chem-example-solution-preparation',
        subject: 'chemistry',
        question: 'Can you show me a worked example of preparing a standard solution?',
        aliases: ['worked example preparing a standard solution', 'example of making up a solution to a concentration', 'mass to weigh out example'],
        answer:
            'Prepare 250.0 mL of 0.200 mol L⁻¹ sodium carbonate. The moles needed are 0.200 × 0.2500 = 0.0500 mol, and ' +
            'the molar mass is 105.99 g mol⁻¹, so the mass is 0.0500 × 105.99 = 5.30 g. Dissolve it and make up to the ' +
            'mark, rather than adding 250 mL of water.',
    },
    {
        id: 'chem-example-dilution-to-volume',
        subject: 'chemistry',
        question: 'Can you show me a worked example of working out a dilution volume?',
        aliases: ['worked example dilution volume', 'example of how much stock solution to take', 'c1v1 equals c2v2 example'],
        answer:
            'How much 2.00 mol L⁻¹ acid gives 500 mL of 0.150 mol L⁻¹? Use c₁V₁ = c₂V₂: the moles needed are 0.150 × ' +
            '0.500 = 0.0750 mol, so the volume of stock is 0.0750 ÷ 2.00 = 0.0375 L, which is 37.5 mL. Add acid to ' +
            'water, never the reverse.',
    },
    {
        id: 'chem-example-titration-average',
        subject: 'chemistry',
        question: 'Can you show me a worked example of averaging concordant titres?',
        aliases: ['worked example concordant titres', 'example of averaging titration results', 'which titres to average example'],
        answer:
            'Titres of 24.85, 23.10, 24.90 and 24.80 mL are recorded. Discard 23.10 as an outlier and average the ' +
            'three concordant results: 24.85 + 24.90 + 24.80 = 74.55, then 74.55 ÷ 3 = 24.85 mL. Concordant usually ' +
            'means within 0.10 mL, and the rough first titre is normally excluded.',
    },
    {
        id: 'chem-example-titration-unknown-concentration',
        subject: 'chemistry',
        question: 'Can you show me a worked example of finding a concentration from a titration with a 1 to 2 ratio?',
        aliases: ['worked example titration with a two to one ratio', 'example of a diprotic titration calculation', 'titration mole ratio example'],
        answer:
            'A 20.00 mL sample of sulfuric acid needs 25.60 mL of 0.100 mol L⁻¹ sodium hydroxide. The base moles are ' +
            '0.100 × 0.02560 = 2.56 × 10⁻³ mol. The ratio is two base to one acid, so the acid moles are half that, ' +
            '1.28 × 10⁻³ mol, and the concentration is 1.28 × 10⁻³ ÷ 0.02000 = 0.0640 mol L⁻¹.',
    },
    {
        id: 'chem-example-ph-from-concentration-strong-base',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the pH of a strong base?',
        aliases: ['worked example ph of a strong base', 'example of ph from hydroxide concentration', 'subtracting poh from 14 example'],
        answer:
            'Find the pH of 0.0200 mol L⁻¹ sodium hydroxide. The hydroxide concentration is 0.0200, so pOH is 1.70. ' +
            'Since pH plus pOH is 14.00, the pH is 14.00 − 1.70 = 12.30. Going straight to pH from the hydroxide ' +
            'concentration is the error to avoid.',
    },
    {
        id: 'chem-example-ph-of-weak-acid',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the pH of a weak acid?',
        aliases: ['worked example ph of a weak acid', 'example of ka to find ph', 'weak acid ph calculation example'],
        answer:
            'Ethanoic acid at 0.100 mol L⁻¹ has Kₐ = 1.8 × 10⁻⁵. Since only a little ionises, the hydrogen ion ' +
            'concentration is the square root of Kₐ times the concentration: 1.8 × 10⁻⁶, whose root is 1.34 × 10⁻³. ' +
            'So the pH is 2.87, higher than the 1.00 a strong acid would give.',
    },
    {
        id: 'chem-example-buffer-ratio',
        subject: 'chemistry',
        question: 'Can you show me a worked example of choosing a buffer ratio?',
        aliases: ['worked example buffer ratio', 'example of acid to salt ratio in a buffer', 'buffer at a target ph example'],
        answer:
            'A buffer is wanted at pH 4.50 using an acid with pKₐ 4.76. Since the target is below the pKₐ, more acid ' +
            'than base is needed. The difference is 0.26, and ten to the power of −0.26 is 0.55, so the base to acid ' +
            'ratio is about 0.55 to 1. Equal amounts would give a pH equal to the pKₐ.',
    },
    {
        id: 'chem-example-neutralisation-heat',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the enthalpy of neutralisation?',
        aliases: ['worked example enthalpy of neutralisation', 'example of heat released in neutralisation', 'temperature rise in a neutralisation example'],
        answer:
            'Mixing 50.0 mL of acid and 50.0 mL of base raises the temperature by 6.5 °C. The total mass is 100 g, and ' +
            'water takes 4.18 J g⁻¹ per degree, so q = 100 × 4.18 × 6.5 = 2717 J. With 0.0500 mol of water formed, the ' +
            'enthalpy is 2717 ÷ 0.0500 = 54,340 J mol⁻¹, released, so about −54 kJ mol⁻¹.',
    },
    {
        id: 'chem-example-enthalpy-from-bond-energies',
        subject: 'chemistry',
        question: 'Can you show me a worked example of enthalpy from bond energies with a hydrocarbon?',
        aliases: ['worked example enthalpy from bond energies hydrocarbon', 'example of bonds broken minus bonds formed', 'bond enthalpy calculation example'],
        answer:
            'For H₂ + Cl₂ giving 2HCl, break one H−H at 436 and one Cl−Cl at 242, totalling 678 kJ absorbed. Form two ' +
            'H−Cl at 431 each, releasing 862 kJ. The enthalpy change is 678 − 862 = −184 kJ mol⁻¹, so the reaction is ' +
            'exothermic. Broken minus formed, in that order.',
    },
    {
        id: 'chem-example-equilibrium-shift',
        subject: 'chemistry',
        question: 'Can you show me a worked example of predicting an equilibrium shift?',
        aliases: ['worked example predicting an equilibrium shift', 'example of le chatelier applied', 'which way will the equilibrium move example'],
        answer:
            'For N₂ + 3H₂ giving 2NH₃, which is exothermic, raising the pressure shifts the system towards the side ' +
            'with fewer gas particles, so towards ammonia. Raising the temperature shifts it back the other way, since ' +
            'the reverse reaction absorbs heat. Count gas moles for pressure and check the sign for temperature.',
    },
    {
        id: 'chem-example-equilibrium-from-initial',
        subject: 'chemistry',
        question: 'Can you show me a worked example of an equilibrium calculation from initial amounts?',
        aliases: ['worked example equilibrium from initial amounts', 'example of an ice table', 'equilibrium concentrations example'],
        answer:
            'Start with 1.00 mol L⁻¹ of each reactant in A + B giving C, and at equilibrium C is 0.30 mol L⁻¹. Each ' +
            'reactant must have fallen by 0.30, leaving 0.70 each. So K = 0.30 ÷ (0.70 × 0.70) = 0.30 ÷ 0.49 = 0.61. ' +
            'Track the change, not the final values, from the equation.',
    },
    {
        id: 'chem-example-reaction-quotient',
        subject: 'chemistry',
        question: 'Can you show me a worked example of comparing Q with K?',
        aliases: ['worked example reaction quotient', 'example of q versus k', 'which direction the reaction proceeds example'],
        answer:
            'A system has K = 4.0, and at one instant the concentrations give Q = 1.5. Since Q is smaller than K, ' +
            'there is too little product, so the reaction moves forward. If Q were larger, it would run in reverse, ' +
            'and Q equal to K means no net change.',
    },
    {
        id: 'chem-example-solubility-from-ksp',
        subject: 'chemistry',
        question: 'Can you show me a worked example of finding a solubility from Ksp?',
        aliases: ['worked example solubility from ksp', 'example of working out how much dissolves', 'molar solubility example'],
        answer:
            'Silver chloride has Ksp = 1.8 × 10⁻¹⁰. Each formula unit gives one of each ion, so Ksp is the solubility ' +
            'squared. The square root of 1.8 × 10⁻¹⁰ is 1.34 × 10⁻⁵ mol L⁻¹. For a salt giving two of one ion, the ' +
            'expression would include a squared term and a factor of four.',
    },
    {
        id: 'chem-example-common-ion',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the common ion effect?',
        aliases: ['worked example common ion effect', 'example of solubility in a solution of a shared ion', 'reduced solubility example'],
        answer:
            'Silver chloride with Ksp 1.8 × 10⁻¹⁰ is placed in 0.10 mol L⁻¹ sodium chloride. The chloride is already ' +
            '0.10, so the silver concentration is 1.8 × 10⁻¹⁰ ÷ 0.10 = 1.8 × 10⁻⁹ mol L⁻¹, far below the 1.34 × 10⁻⁵ ' +
            'in pure water. A shared ion suppresses dissolving.',
    },
    {
        id: 'chem-example-will-a-precipitate-form',
        subject: 'chemistry',
        question: 'Can you show me a worked example of predicting whether a precipitate forms?',
        aliases: ['worked example will a precipitate form', 'example of comparing the ionic product with ksp', 'predicting precipitation example'],
        answer:
            'Mixing gives silver at 2.0 × 10⁻⁵ and chloride at 2.0 × 10⁻⁵ mol L⁻¹. The ionic product is 4.0 × 10⁻¹⁰, ' +
            'which is larger than the Ksp of 1.8 × 10⁻¹⁰, so a precipitate forms. Remember to halve each concentration ' +
            'first if two solutions of equal volume are mixed.',
    },
    {
        id: 'chem-example-oxidation-state-assignment',
        subject: 'chemistry',
        question: 'Can you show me a worked example of assigning oxidation numbers in an ion?',
        aliases: ['worked example oxidation numbers in an ion', 'example of an oxidation state inside an ion', 'oxidation number in dichromate example'],
        answer:
            'Find the oxidation state of chromium in Cr₂O₇²⁻. Oxygen is normally −2, so seven oxygens give −14. The ' +
            'overall charge is −2, so the two chromiums must total +12, making each +6. Set the sum of the states ' +
            'equal to the ion charge and solve.',
    },
    {
        id: 'chem-example-balancing-redox-acidic',
        subject: 'chemistry',
        question: 'Can you show me a worked example of balancing a redox equation in acid?',
        aliases: ['worked example balancing redox in acid', 'example of adding water and hydrogen ions', 'half equation in acidic solution example'],
        answer:
            'Balance MnO₄⁻ going to Mn²⁺ in acid. Balance manganese, then oxygen with water: four waters on the right. ' +
            'Then hydrogen with hydrogen ions: eight on the left. Then charge with electrons: five on the left. The ' +
            'order is atoms other than O and H, then O, then H, then charge.',
    },
    {
        id: 'chem-example-cell-potential-spontaneity',
        subject: 'chemistry',
        question: 'Can you show me a worked example of deciding whether a redox reaction is spontaneous?',
        aliases: ['worked example redox spontaneity', 'example of using standard potentials to predict', 'is the reaction spontaneous example'],
        answer:
            'Zinc has a standard potential of −0.76 V and copper +0.34 V. For zinc reducing copper ions, the cell ' +
            'potential is 0.34 − (−0.76) = 1.10 V. A positive value means the reaction proceeds as written, so copper ' +
            'metal deposits and zinc dissolves.',
    },
    {
        id: 'chem-example-electrolysis-mass',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the mass deposited in electrolysis?',
        aliases: ['worked example electrolysis mass', 'example of faradays law of electrolysis', 'mass of metal deposited example'],
        answer:
            'A current of 2.00 A runs for 30.0 minutes through copper sulfate. The charge is 2.00 × 1800 = 3600 C, and ' +
            'dividing by 96,500 gives 0.0373 mol of electrons. Copper needs two electrons each, so 0.0187 mol forms, ' +
            'which at 63.55 g mol⁻¹ is 1.19 g.',
    },
    {
        id: 'chem-example-gas-volume-at-stp',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a gas volume from an equation?',
        aliases: ['worked example gas volume from an equation', 'example of molar volume in a reaction', 'volume of gas produced example'],
        answer:
            'What volume of carbon dioxide comes from 5.00 g of calcium carbonate decomposing at 25 °C and 100 kPa? The ' +
            'moles are 5.00 ÷ 100.09 = 0.0500 mol, and the ratio is one to one. At those conditions a mole occupies ' +
            '24.79 L, so the volume is 0.0500 × 24.79 = 1.24 L.',
    },
    {
        id: 'chem-example-partial-pressure',
        subject: 'chemistry',
        question: 'Can you show me a worked example of partial pressure?',
        aliases: ['worked example partial pressure', 'example of daltons law', 'pressure of one gas in a mixture example'],
        answer:
            'A mixture holds 0.30 mol of nitrogen and 0.70 mol of oxygen at 200 kPa. Nitrogen is 0.30 of the total ' +
            'mole fraction, so its partial pressure is 0.30 × 200 = 60 kPa, and oxygen supplies the other 140 kPa. ' +
            'The partial pressures always add to the total.',
    },
    {
        id: 'chem-example-rate-from-gradient',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a reaction rate from a graph?',
        aliases: ['worked example reaction rate from a graph', 'example of rate as a gradient', 'initial rate from a curve example'],
        answer:
            'A gas volume rises from 0 to 18 mL in the first 30 seconds. The average rate is 18 ÷ 30 = 0.60 mL per ' +
            'second. The initial rate is steeper than this, so take the tangent at time zero rather than the chord, ' +
            'when the question asks for the initial rate.',
    },
    {
        id: 'chem-example-collision-theory-explanation',
        subject: 'chemistry',
        question: 'Can you show me a worked example of explaining a rate change?',
        aliases: ['worked example explaining a rate change', 'example of collision theory in an answer', 'why the rate increased example'],
        answer:
            'Doubling the concentration roughly doubles the rate. Explain in two steps: more particles per unit ' +
            'volume means more collisions each second, and since the fraction with enough energy is unchanged, more ' +
            'of those collisions succeed. Temperature answers differ, because there the energy fraction changes too.',
    },
    {
        id: 'chem-example-naming-branched-alkane',
        subject: 'chemistry',
        question: 'Can you show me a worked example of naming a branched alkane?',
        aliases: ['worked example naming a branched alkane', 'example of iupac naming', 'naming with side chains example'],
        answer:
            'A six carbon chain has methyl groups on the second and fourth carbons. Number from the end that gives the ' +
            'lower numbers, list the branches alphabetically, and use a prefix for repeats: ' +
            '2,4-dimethylhexane. Numbering from the other end would give 3,5, which is higher and therefore wrong.',
    },
    {
        id: 'chem-example-isomers-of-an-alcohol',
        subject: 'chemistry',
        question: 'Can you show me a worked example of drawing isomers of an alcohol?',
        aliases: ['worked example isomers of an alcohol', 'example of alcohol isomers', 'how many isomers of butanol example'],
        answer:
            'For C₄H₁₀O as an alcohol, place the hydroxyl group on each distinct position of each carbon skeleton. The ' +
            'straight chain gives butan-1-ol and butan-2-ol, and the branched skeleton gives 2-methylpropan-1-ol and ' +
            '2-methylpropan-2-ol, so four in total. Work through skeletons first, then positions.',
    },
    {
        id: 'chem-example-esterification-mass',
        subject: 'chemistry',
        question: 'Can you show me a worked example of an esterification yield?',
        aliases: ['worked example esterification yield', 'example of making an ester calculation', 'ester mass from reactants example'],
        answer:
            'Ethanol at 0.100 mol reacts with excess ethanoic acid to give ethyl ethanoate, molar mass 88.11 g mol⁻¹. ' +
            'The theoretical mass is 0.100 × 88.11 = 8.81 g. If 6.20 g is collected, the yield is 6.20 ÷ 8.81 × 100 = ' +
            '70.4%. Esterification is an equilibrium, which is why the yield is well short of complete.',
    },
    {
        id: 'chem-example-identifying-a-cation',
        subject: 'chemistry',
        question: 'Can you show me a worked example of identifying an unknown cation?',
        aliases: ['worked example identifying a cation', 'example of a cation test sequence', 'unknown metal ion test example'],
        answer:
            'A solution gives no precipitate with chloride, a white precipitate with sulfate, and that precipitate does ' +
            'not dissolve in acid. Chloride rules out silver and lead. An acid-resistant sulfate precipitate points to ' +
            'barium. Order the tests so each result removes a group of candidates.',
    },
    {
        id: 'chem-example-identifying-an-anion',
        subject: 'chemistry',
        question: 'Can you show me a worked example of identifying an unknown anion?',
        aliases: ['worked example identifying an anion', 'example of an anion test', 'unknown negative ion test example'],
        answer:
            'Adding acid produces a gas that turns limewater cloudy, so the anion is carbonate. Had there been no gas, ' +
            'a white precipitate with silver nitrate that dissolves in ammonia would indicate chloride. Name the ' +
            'observation and the inference separately in the answer.',
    },
    {
        id: 'chem-example-flame-test',
        subject: 'chemistry',
        question: 'Can you show me a worked example of interpreting a flame test?',
        aliases: ['worked example flame test', 'example of a flame colour result', 'flame test identification example'],
        answer:
            'A wire loop gives a lilac flame. That indicates potassium, where sodium would give intense yellow, ' +
            'calcium brick red and copper blue green. A strong sodium contamination can mask the others, which is why ' +
            'the loop is cleaned in acid between samples.',
    },
    {
        id: 'chem-example-colorimetry',
        subject: 'chemistry',
        question: 'Can you show me a worked example of using a calibration curve?',
        aliases: ['worked example calibration curve', 'example of colorimetry concentration', 'reading a concentration from absorbance example'],
        answer:
            'Standards give a straight line of absorbance against concentration with gradient 2.5 per mol L⁻¹. An ' +
            'unknown reads 0.60, so its concentration is 0.60 ÷ 2.5 = 0.24 mol L⁻¹. A reading above the highest ' +
            'standard must be diluted rather than read off an extended line.',
    },
    {
        id: 'chem-example-atomic-absorption',
        subject: 'chemistry',
        question: 'Can you show me a worked example of an atomic absorption result?',
        aliases: ['worked example atomic absorption', 'example of aas calculation', 'trace metal concentration example'],
        answer:
            'A water sample reads 0.42 mg L⁻¹ of lead after a tenfold dilution. Multiply back by the dilution factor: ' +
            '0.42 × 10 = 4.2 mg L⁻¹ in the original. Compare that against the guideline value to state whether the ' +
            'water is within the limit, since the number alone answers nothing.',
    },
    {
        id: 'chem-example-mass-spectrum-isotopes',
        subject: 'chemistry',
        question: 'Can you show me a worked example of relative atomic mass from a mass spectrum?',
        aliases: ['worked example relative atomic mass from a spectrum', 'example of weighted average of isotopes', 'isotope abundance calculation example'],
        answer:
            'Chlorine shows 75.8% at mass 35 and 24.2% at mass 37. Weight each by its abundance: 35 × 0.758 = 26.53 ' +
            'and 37 × 0.242 = 8.95. Adding gives 35.48, which is the relative atomic mass. The answer must sit nearer ' +
            'the more abundant isotope.',
    },
    {
        id: 'chem-example-infrared-functional-group',
        subject: 'chemistry',
        question: 'Can you show me a worked example of identifying a functional group from an infrared spectrum?',
        aliases: ['worked example infrared functional group', 'example of reading an ir spectrum', 'ir absorption identification example'],
        answer:
            'A spectrum shows a broad band near 3300 cm⁻¹ and a strong sharp one near 1700 cm⁻¹. The broad band ' +
            'indicates an O−H and the sharp one a C=O, so together they point to a carboxylic acid rather than an ' +
            'alcohol or a ketone alone. Read shape as well as position.',
    },
    {
        id: 'chem-example-nmr-splitting',
        subject: 'chemistry',
        question: 'Can you show me a worked example of reading splitting in a proton NMR spectrum?',
        aliases: ['worked example nmr splitting', 'example of the n plus one rule', 'reading nmr peaks example'],
        answer:
            'A spectrum shows a triplet and a quartet with areas 3 to 2. The triplet means two neighbouring protons ' +
            'and the quartet three, by the n plus one rule, so this is an ethyl group. The areas give the proton ' +
            'ratio, confirming CH₃ next to CH₂.',
    },
    {
        id: 'chem-example-gravimetric-percentage',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a gravimetric percentage by mass?',
        aliases: ['worked example gravimetric percentage', 'example of percentage from a precipitate mass', 'gravimetric analysis example'],
        answer:
            'A 2.00 g sample gives 1.15 g of barium sulfate, molar mass 233.4 g mol⁻¹. The moles are 1.15 ÷ 233.4 = ' +
            '4.93 × 10⁻³, which is also the sulfate moles, weighing 4.93 × 10⁻³ × 96.07 = 0.474 g. So the sample is ' +
            '0.474 ÷ 2.00 × 100 = 23.7% sulfate.',
    },
    {
        id: 'chem-example-water-hardness',
        subject: 'chemistry',
        question: 'Can you show me a worked example of expressing a result in parts per million?',
        aliases: ['worked example parts per million calculation', 'example of converting to ppm', 'ppm from a mass example'],
        answer:
            'A litre of water holds 4.5 × 10⁻³ g of calcium. Since a litre weighs about 1000 g, the fraction is 4.5 × ' +
            '10⁻³ ÷ 1000, and multiplying by a million gives 4.5 ppm. For dilute water solutions, milligrams per litre ' +
            'and ppm are the same number.',
    },
    {
        id: 'chem-example-limiting-reagent-volumes',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a limiting reagent with two solutions?',
        aliases: ['worked example limiting reagent with solutions', 'example of which solution runs out', 'limiting reagent from concentrations example'],
        answer:
            'Mix 25.0 mL of 0.100 mol L⁻¹ silver nitrate with 25.0 mL of 0.0800 mol L⁻¹ sodium chloride. The moles are ' +
            '2.50 × 10⁻³ and 2.00 × 10⁻³, and the ratio is one to one, so chloride is limiting. The precipitate mass ' +
            'follows from 2.00 × 10⁻³ mol, not from the silver.',
    },
    {
        id: 'chem-example-excess-acid-back-titration',
        subject: 'chemistry',
        question: 'Can you show me a worked example of finding the purity of a solid by back titration?',
        aliases: ['worked example purity by back titration', 'example of excess acid then titrate', 'purity of an antacid example'],
        answer:
            'An antacid tablet is dissolved in 50.0 mL of 0.200 mol L⁻¹ acid, which is 0.0100 mol, and the leftover ' +
            'acid needs 0.00340 mol of base. So the tablet consumed 0.0100 − 0.00340 = 0.00660 mol of acid. Convert ' +
            'that to moles of carbonate by the equation ratio, then to a mass and a percentage.',
    },
    {
        id: 'chem-example-heat-of-combustion-comparison',
        subject: 'chemistry',
        question: 'Can you show me a worked example of comparing two fuels by energy per gram?',
        aliases: ['worked example comparing fuels', 'example of energy per gram of fuel', 'which fuel releases more energy example'],
        answer:
            'Methane releases 890 kJ mol⁻¹ at 16.04 g mol⁻¹, so 890 ÷ 16.04 = 55.5 kJ g⁻¹. Ethanol releases 1367 kJ ' +
            'mol⁻¹ at 46.07 g mol⁻¹, so 1367 ÷ 46.07 = 29.7 kJ g⁻¹. Methane wins per gram, though a comparison per ' +
            'litre of liquid fuel would read differently.',
    },
    {
        id: 'chem-example-percentage-yield-two-steps',
        subject: 'chemistry',
        question: 'Can you show me a worked example of an overall yield across two steps?',
        aliases: ['worked example overall yield two steps', 'example of multiplying yields', 'two stage synthesis yield example'],
        answer:
            'A synthesis runs at 80% then 65%. Multiply the fractions rather than averaging: 0.80 × 0.65 = 0.52, so ' +
            'the overall yield is 52%. Averaging would suggest 72.5%, which overstates it, and the gap widens with ' +
            'every extra step.',
    },
];
