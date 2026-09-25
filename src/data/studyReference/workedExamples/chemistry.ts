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
    {
        id: 'chem-example-mass-spectrum-reading',
        subject: 'chemistry',
        question: 'Can you show me a worked example of reading a mass spectrum?',
        aliases: ['worked example reading a mass spectrum', 'example of interpreting fragments', 'molecular ion and fragment example'],
        answer:
            'A spectrum shows a molecular ion at m/z 46 and fragments at 31 and 29. The molar mass is 46, and the ' +
            'loss of 15 to reach 31 indicates a CH₃ group. Together with an alcohol infrared signal, that points to ' +
            'ethanol.',
    },
    {
        id: 'chem-example-nmr-reading',
        subject: 'chemistry',
        question: 'Can you show me a worked example of reading a proton NMR spectrum?',
        aliases: ['worked example reading nmr', 'example of interpreting nmr', 'three signals example'],
        answer:
            'Ethanol gives three signals with areas in the ratio 3:2:1. Three equivalent hydrogens are the CH₃, two ' +
            'are the CH₂, and one is the OH. Counting signals gives the number of environments, and the areas give ' +
            'how many hydrogens sit in each.',
    },
    {
        id: 'chem-example-infrared-reading',
        subject: 'chemistry',
        question: 'Can you show me a worked example of reading an infrared spectrum?',
        aliases: ['worked example reading infrared', 'example of interpreting ir', 'identifying a functional group from ir'],
        answer:
            'A broad absorption between 2500 and 3300 with a strong sharp band near 1700 indicates both an O–H of an ' +
            'acid and a C=O, so the compound is a carboxylic acid. A sharp O–H near 3300 with no C=O would instead ' +
            'indicate an alcohol.',
    },
    {
        id: 'chem-example-heat-of-solution',
        subject: 'chemistry',
        question: 'Can you show me a worked example of enthalpy of dissolution?',
        aliases: ['worked example enthalpy of solution', 'example of dissolving enthalpy', 'heat released dissolving example'],
        answer:
            'Dissolving 2.0 g of NaOH in 100 mL of water raises the temperature by 5.0 °C. q = 100 × 4.18 × 5.0 = ' +
            '2,090 J, and the moles are 2.0 ÷ 40.00 = 0.050. So ΔH = −2.09 ÷ 0.050 = −41.8 kJ mol⁻¹.',
    },
    {
        id: 'chem-example-limiting-masses',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a limiting reagent from masses?',
        aliases: ['worked example limiting reagent from masses', 'example of limiting reactant with grams', 'which reactant runs out example'],
        answer:
            'For 2H₂ + O₂ → 2H₂O with 4.0 g H₂ and 40.0 g O₂: moles are 1.98 and 1.25. Dividing by the coefficients ' +
            'gives 0.99 and 1.25, so hydrogen limits. It produces 1.98 mol of water, which is 35.7 g.',
    },
    {
        id: 'chem-example-concentration-from-mass',
        subject: 'chemistry',
        question: 'Can you show me a worked example of concentration from a mass?',
        aliases: ['worked example concentration from mass', 'example of making a solution of known concentration', 'grams to molarity example'],
        answer:
            'Dissolve 5.85 g of sodium chloride and make it up to 500 mL. Moles = 5.85 ÷ 58.44 = 0.100, and the ' +
            'volume is 0.500 L, so the concentration is 0.200 mol L⁻¹.',
    },
    {
        id: 'chem-example-gas-volume-from-mass',
        subject: 'chemistry',
        question: 'Can you show me a worked example of gas volume from a mass?',
        aliases: ['worked example gas volume from mass', 'example of mass to volume of gas', 'grams of oxygen to litres'],
        answer:
            'Find the volume of 8.0 g of oxygen at 25 °C and 100 kPa. Moles = 8.0 ÷ 32.00 = 0.25, and the molar ' +
            'volume is 24.79 L mol⁻¹, so V = 0.25 × 24.79 = 6.2 L.',
    },
    {
        id: 'chem-example-dilution-ph',
        subject: 'chemistry',
        question: 'Can you show me a worked example of pH after dilution?',
        aliases: ['worked example ph after dilution', 'example of diluting an acid and ph', 'tenfold dilution ph example'],
        answer:
            'Diluting 0.10 mol L⁻¹ HCl tenfold gives 0.010 mol L⁻¹, so the pH rises from 1.00 to 2.00. Each tenfold ' +
            'dilution adds one to the pH, and no amount of dilution takes it past 7.',
    },
    {
        id: 'chem-example-kw',
        subject: 'chemistry',
        question: 'Can you show me a worked example using Kw?',
        aliases: ['worked example kw', 'example of finding hydroxide from hydrogen ion', 'kw calculation example'],
        answer:
            'If [H⁺] = 2.5 × 10⁻³ mol L⁻¹, then [OH⁻] = Kw ÷ [H⁺] = 1.0 × 10⁻¹⁴ ÷ 2.5 × 10⁻³ = 4.0 × 10⁻¹² mol L⁻¹. ' +
            'The product is fixed at 25 °C, so raising one concentration lowers the other.',
    },
    {
        id: 'chem-example-hydrate-percentage',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the percentage of water in a hydrate?',
        aliases: ['worked example percentage of water in a hydrate', 'example of water in copper sulfate', 'hydrate mass percentage'],
        answer:
            'In CuSO₄·5H₂O the water contributes 5 × 18.02 = 90.1 of the total 249.7 g mol⁻¹. That is 90.1 ÷ 249.7 × ' +
            '100 = 36.1% water by mass, which is what heating to constant mass should remove.',
    },
    {
        id: 'chem-example-precipitate-mass',
        subject: 'chemistry',
        question: 'Can you show me a worked example of the mass of a precipitate?',
        aliases: ['worked example mass of precipitate', 'example of precipitate mass calculation', 'silver chloride mass example'],
        answer:
            'Add 25.0 mL of 0.100 mol L⁻¹ silver nitrate to excess chloride. Moles of silver = 0.100 × 0.0250 = 2.50 ' +
            '× 10⁻³, and the ratio is 1:1, so the same moles of AgCl form. Mass = 2.50 × 10⁻³ × 143.32 = 0.358 g.',
    },
    {
        id: 'chem-example-molar-mass-from-density',
        subject: 'chemistry',
        question: 'Can you show me a worked example of molar mass from gas density?',
        aliases: ['worked example molar mass from density', 'example of finding molar mass of a gas', 'gas density calculation'],
        answer:
            'A gas has a density of 1.96 g L⁻¹ at 25 °C and 100 kPa, where the molar volume is 24.79 L mol⁻¹. Molar ' +
            'mass = 1.96 × 24.79 = 48.6 g mol⁻¹, which identifies it as ozone.',
    },
    {
        id: 'chem-example-empirical-from-percentages',
        subject: 'chemistry',
        question: 'Can you show me a worked example of an empirical formula from percentages?',
        aliases: ['worked example empirical from percentages', 'example of formula from percentage composition', 'percentages to formula'],
        answer:
            'For 52.2% carbon, 13.0% hydrogen and 34.8% oxygen: dividing by the atomic masses gives 4.35, 12.9 and ' +
            '2.175. Dividing by the smallest gives 2, 5.9 and 1, so the empirical formula is C₂H₆O.',
    },
    {
        id: 'chem-example-diprotic-titration',
        subject: 'chemistry',
        question: 'Can you show me a worked example of titrating a diprotic acid?',
        aliases: ['worked example diprotic titration', 'example of sulfuric acid titration', 'two to one ratio titration'],
        answer:
            'Titrate 20.00 mL of 0.0500 mol L⁻¹ sulfuric acid with 0.100 mol L⁻¹ sodium hydroxide. Moles of acid = ' +
            '1.00 × 10⁻³, and the ratio is 1 acid to 2 base, so 2.00 × 10⁻³ mol of base is needed, which is 20.0 mL.',
    },
    {
        id: 'chem-example-energy-per-gram',
        subject: 'chemistry',
        question: 'Can you show me a worked example of energy released per gram?',
        aliases: ['worked example energy per gram', 'example of converting enthalpy per mole to per gram', 'fuel energy per gram'],
        answer:
            'Methane releases 890 kJ mol⁻¹ on complete combustion and has a molar mass of 16.04. Per gram that is 890 ' +
            '÷ 16.04 = 55.5 kJ, which is why methane carries more energy per kilogram than heavier hydrocarbons.',
    },
    {
        id: 'chem-example-two-step-yield',
        subject: 'chemistry',
        question: 'Can you show me a worked example of yield over two steps?',
        aliases: ['worked example two step yield', 'example of multi step yield', 'overall yield calculation'],
        answer:
            'A synthesis runs at 80% in the first step and 75% in the second. The overall yield is 0.80 × 0.75 = ' +
            '0.60, or 60%. Yields multiply rather than average, which is why long syntheses give so little product.',
    },
    {
        id: 'chem-example-oxidation-number-check',
        subject: 'chemistry',
        question: 'Can you show me a worked example of assigning an oxidation number?',
        aliases: ['worked example oxidation number', 'example of finding an oxidation state', 'chromium in dichromate example'],
        answer:
            'In Cr₂O₇²⁻ each oxygen is −2, giving −14 in total, and the ion charge is −2. So 2x − 14 = −2, giving x = ' +
            '+6 for each chromium. The sum of oxidation numbers always equals the charge on the species.',
    },
    {
        id: 'chem-example-large-cell-potential',
        subject: 'chemistry',
        question: 'Can you show me a worked example of a large cell potential?',
        aliases: ['worked example large cell potential', 'example of magnesium and silver cell', 'maximum cell voltage example'],
        answer:
            'Magnesium has a standard potential of −2.37 V and silver +0.80 V. Magnesium is oxidised, so E°cell = ' +
            '0.80 − (−2.37) = 3.17 V. Pairing the extremes of the table gives the largest voltage available.',
    },
];
