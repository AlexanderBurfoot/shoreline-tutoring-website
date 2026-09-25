/**
 * Worked examples: chemistry.
 *
 * One calculation of each type, worked through with the units shown.
 */
import type { StudyEntry } from '../types';

export const workedExampleChemistryEntries: StudyEntry[] = [
    {
        id: 'chem-example-ideal-gas',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the ideal gas equation?',
        aliases: ['worked example ideal gas', 'example of pv = nrt', 'gas pressure calculation example'],
        answer:
            'Find the pressure of 2.00 mol of gas in 10.0 L at 25 °C. Convert the temperature: 298 K. P = nRT/V = ' +
            '(2.00 × 8.314 × 298) ÷ 10.0 = 496 kPa, using R in kPa L mol⁻¹ K⁻¹.',
    },
    {
        id: 'chem-example-molar-volume',
        subject: 'chemistry',
        question: 'Can you show me a worked example using molar volume?',
        aliases: ['worked example molar volume', 'example of gas volume to moles', 'litres of gas to moles example'],
        answer:
            'Find the moles in 4.48 L of gas at 0 °C and 100 kPa, where the molar volume is 22.71 L mol⁻¹. n = 4.48 ÷ ' +
            '22.71 = 0.197 mol. At 25 °C the molar volume is 24.79 L mol⁻¹ instead, so always check the stated ' +
            'conditions.',
    },
    {
        id: 'chem-example-percentage-yield',
        subject: 'chemistry',
        question: 'Can you show me a worked example of percentage yield?',
        aliases: ['worked example percentage yield', 'example of calculating yield', 'actual over theoretical example'],
        answer:
            'A reaction should give 12.5 g of product but 9.8 g is collected. Percentage yield = 9.8 ÷ 12.5 × 100 = ' +
            '78.4%. The theoretical mass comes from the limiting reagent, so find that first.',
    },
    {
        id: 'chem-example-back-titration',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a back titration?',
        aliases: ['worked example back titration', 'example of a back titration calculation', 'excess acid titration example'],
        answer:
            'Add 0.0500 mol of HCl to calcium carbonate, then titrate the leftover acid, which needs 0.0180 mol of ' +
            'NaOH. Acid that reacted with the carbonate = 0.0500 − 0.0180 = 0.0320 mol. The ratio is 2 HCl to 1 ' +
            'CaCO₃, so that is 0.0160 mol, or 1.60 g.',
    },
    {
        id: 'chem-example-ksp',
        subject: 'chemistry',
        question: 'Can you show me a worked example using Ksp?',
        aliases: ['worked example ksp', 'example of solubility from ksp', 'silver chloride solubility example'],
        answer:
            'For AgCl, Ksp = 1.8 × 10⁻¹⁰ and the salt gives one of each ion, so Ksp = s². Then s = √(1.8 × 10⁻¹⁰) = ' +
            '1.3 × 10⁻⁵ mol L⁻¹. For a salt giving two of one ion, the expression becomes 4s³ instead.',
    },
    {
        id: 'chem-example-equilibrium-constant',
        subject: 'chemistry',
        question: 'Can you show me a worked example of calculating Keq?',
        aliases: ['worked example equilibrium constant', 'example of calculating keq', 'equilibrium expression example'],
        answer:
            'For H₂ + I₂ ⇌ 2HI at equilibrium, [H₂] = 0.20, [I₂] = 0.20 and [HI] = 1.6 mol L⁻¹. K = [HI]² ÷ ' +
            '([H₂][I₂]) = 2.56 ÷ 0.040 = 64. The coefficient of 2 becomes the power, not a multiplier.',
    },
    {
        id: 'chem-example-buffer-ph',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a buffer pH?',
        aliases: ['worked example buffer ph', 'example of a buffer calculation', 'henderson hasselbalch example'],
        answer:
            'An ethanoic acid buffer has pKa 4.76 with the conjugate base at 1.5 times the acid concentration. pH = ' +
            'pKa + log₁₀([base]/[acid]) = 4.76 + log 1.5 = 4.76 + 0.18 = 4.94. Equal concentrations would give a pH ' +
            'equal to the pKa.',
    },
    {
        id: 'chem-example-cell-potential',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a cell potential?',
        aliases: ['worked example cell potential', 'example of calculating e cell', 'zinc copper cell example'],
        answer:
            'A zinc and copper cell has standard potentials of −0.76 V for zinc and +0.34 V for copper. Zinc is ' +
            'oxidised, so E°cell = 0.34 − (−0.76) = 1.10 V. Balancing the electrons does not change the potential.',
    },
    {
        id: 'chem-example-hess-law',
        subject: 'chemistry',
        question: 'Can you show me a worked example of Hess law?',
        aliases: ['worked example hess law', 'example of combining enthalpies', 'enthalpy cycle example'],
        answer:
            'Given C + O₂ → CO₂ at −393.5 kJ mol⁻¹ and CO + ½O₂ → CO₂ at −283.0 kJ mol⁻¹, find C + ½O₂ → CO. Reverse ' +
            'the second equation, changing its sign, and add: −393.5 + 283.0 = −110.5 kJ mol⁻¹.',
    },
    {
        id: 'chem-example-bond-energy',
        subject: 'chemistry',
        question: 'Can you show me a worked example using bond energies?',
        aliases: ['worked example bond energy', 'example of enthalpy from bond energies', 'bonds broken and formed example'],
        answer:
            'For H₂ + Cl₂ → 2HCl, the bonds broken are H–H at 436 and Cl–Cl at 242, totalling 678 kJ. The bonds ' +
            'formed are two H–Cl at 431 each, totalling 862 kJ. ΔH = 678 − 862 = −184 kJ mol⁻¹, so the reaction is ' +
            'exothermic.',
    },
    {
        id: 'chem-example-gravimetric',
        subject: 'chemistry',
        question: 'Can you show me a worked example of gravimetric analysis?',
        aliases: ['worked example gravimetric', 'example of a gravimetric calculation', 'precipitate mass to percentage example'],
        answer:
            'A 2.00 g sample yields 0.500 g of barium sulfate, whose molar mass is 233.4 with sulfate at 96.07. Mass ' +
            'of sulfate = 0.500 × (96.07 ÷ 233.4) = 0.206 g. Percentage sulfate = 0.206 ÷ 2.00 × 100 = 10.3%.',
    },
    {
        id: 'chem-example-dilution-series',
        subject: 'chemistry',
        question: 'Can you show me a worked example of preparing a dilution?',
        aliases: ['worked example preparing a dilution', 'example of diluting a stock solution', 'stock to standard example'],
        answer:
            'Prepare 250 mL of 0.0200 mol L⁻¹ from a 0.500 mol L⁻¹ stock. c₁V₁ = c₂V₂ gives V₁ = (0.0200 × 0.250) ÷ ' +
            '0.500 = 0.0100 L, so pipette 10.0 mL into a 250 mL volumetric flask and make up to the mark.',
    },
    {
        id: 'chem-example-combustion-analysis',
        subject: 'chemistry',
        question: 'Can you show me a worked example of combustion analysis?',
        aliases: ['worked example combustion analysis', 'example of finding a formula from combustion', 'carbon dioxide and water data example'],
        answer:
            'Burning 0.240 g of a compound gives 0.352 g CO₂ and 0.144 g H₂O. Carbon: 0.352 ÷ 44.01 = 0.0080 mol. ' +
            'Hydrogen: 0.144 ÷ 18.02 = 0.0080 mol of water, so 0.0160 mol H. Those masses total 0.112 g, leaving ' +
            '0.128 g of oxygen, which is 0.0080 mol. The ratio 1:2:1 gives CH₂O.',
    },
    {
        id: 'chem-example-percentage-composition',
        subject: 'chemistry',
        question: 'Can you show me a worked example of percentage composition?',
        aliases: ['worked example percentage composition', 'example of percent by mass', 'mass percentage example'],
        answer:
            'In water, the molar mass is 18.02 with hydrogen contributing 2 × 1.008 = 2.016. Hydrogen is 2.016 ÷ ' +
            '18.02 × 100 = 11.2% and oxygen the remaining 88.8%. The two must add to 100, which is the check.',
    },
    {
        id: 'chem-example-ppm',
        subject: 'chemistry',
        question: 'Can you show me a worked example of parts per million?',
        aliases: ['worked example ppm', 'example of a ppm calculation', 'milligrams per litre example'],
        answer:
            'A 2.0 L water sample contains 5.0 mg of lead. That is 2.5 mg per litre, and since a litre of water ' +
            'weighs about a kilogram, it is 2.5 ppm. For dilute aqueous samples milligrams per litre and ppm are ' +
            'interchangeable.',
    },
    {
        id: 'chem-example-ph-of-base',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the pH of a base?',
        aliases: ['worked example ph of a base', 'example of calculating ph from hydroxide', 'poh to ph example'],
        answer:
            'For 0.010 mol L⁻¹ NaOH, a strong base, [OH⁻] = 0.010 so pOH = 2.00. At 25 °C, pH = 14.00 − 2.00 = 12.00. ' +
            'Taking the log of the base concentration directly would give 2 rather than 12, which is the usual slip.',
    },
    {
        id: 'chem-example-ka',
        subject: 'chemistry',
        question: 'Can you show me a worked example of calculating Ka?',
        aliases: ['worked example ka', 'example of finding ka from ph', 'weak acid constant example'],
        answer:
            'A 0.10 mol L⁻¹ weak acid has pH 2.87, so [H⁺] = 10⁻²·⁸⁷ = 1.35 × 10⁻³ mol L⁻¹. Ka = [H⁺]² ÷ [HA] = (1.35 ' +
            '× 10⁻³)² ÷ 0.10 = 1.8 × 10⁻⁵, which identifies it as ethanoic acid.',
    },
    {
        id: 'chem-example-percentage-ionisation',
        subject: 'chemistry',
        question: 'Can you show me a worked example of percentage ionisation?',
        aliases: ['worked example percentage ionisation', 'example of degree of ionisation', 'fraction ionised example'],
        answer:
            'For that same acid, the ionised fraction is 1.35 × 10⁻³ ÷ 0.10 × 100 = 1.35%. Diluting it raises this ' +
            'percentage even though the pH rises, because the equilibrium shifts towards more particles.',
    },
    {
        id: 'chem-example-atom-economy',
        subject: 'chemistry',
        question: 'Can you show me a worked example of atom economy?',
        aliases: ['worked example atom economy', 'example of calculating atom economy', 'desired product mass fraction example'],
        answer:
            'For CaCO₃ → CaO + CO₂ with calcium oxide as the desired product, its molar mass is 56.08 out of a total ' +
            '100.09. Atom economy = 56.08 ÷ 100.09 × 100 = 56.0%. No improvement in technique changes that, only a ' +
            'different reaction would.',
    },
    {
        id: 'chem-example-excess-remaining',
        subject: 'chemistry',
        question: 'Can you show me a worked example of finding the excess left over?',
        aliases: ['worked example excess reagent', 'example of leftover reactant', 'how much acid remains example'],
        answer:
            'Add 0.30 mol of HCl to 0.10 mol of CaCO₃, which react 2 to 1. The carbonate consumes 0.20 mol of acid, ' +
            'so 0.10 mol of HCl remains. Dividing each amount by its coefficient first shows the carbonate is ' +
            'limiting.',
    },
];
