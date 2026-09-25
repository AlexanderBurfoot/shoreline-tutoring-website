/**
 * Chemistry Module 2 and 3: the mole, formulas, concentration and gases.
 */
import type { StudyEntry } from '../types';

export const chemistryQuantitiesEntries: StudyEntry[] = [
    {
        id: 'chem-moles',
        subject: 'chemistry',
        question: 'What are the mole formulas?',
        aliases: ['moles', 'n = m/mm', 'avogadro', 'mole calculation'],
        answer:
            'n = m/M, where m is mass in grams and M the molar mass. In solution, n = cV with V in litres. ' +
            'For a gas at standard conditions, n = V/Vm. One mole contains 6.022 × 10²³ particles.',
    },
    {
        id: 'chem-avogadro-meaning',
        subject: 'chemistry',
        question: 'What is a mole, conceptually?',
        aliases: ['what is a mole', 'counting particles', 'why chemists use moles', 'dozen analogy'],
        answer:
            'A mole is a counting unit, like a dozen but far larger: 6.022 × 10²³ particles. ' +
            'Chemists use it because reactions happen between numbers of particles, but we measure mass, and the mole ' +
            'is what links the two through molar mass.',
    },
    {
        id: 'chem-particle-number',
        subject: 'chemistry',
        question: 'How do I find the number of particles in a sample?',
        aliases: ['number of particles', 'molecules in a sample', 'times avogadro'],
        answer:
            'Find the moles first, then multiply by 6.022 × 10²³. ' +
            'Be clear about what is being counted: one mole of CO₂ holds that many molecules but three times as many ' +
            'atoms, so read whether the question asks for molecules, atoms or ions.',
    },
    {
        id: 'chem-molar-mass',
        subject: 'chemistry',
        question: 'How do I calculate molar mass?',
        aliases: ['molar mass', 'formula mass', 'relative molecular mass', 'adding atomic masses'],
        answer:
            'Add the relative atomic masses of every atom in the formula, multiplying by each subscript, and include ' +
            'anything inside brackets the right number of times. ' +
            'The answer is in grams per mole, so one mole of water is 18.02 g.',
    },
    {
        id: 'chem-empirical-formula',
        subject: 'chemistry',
        question: 'How do I find an empirical formula?',
        aliases: ['empirical formula', 'molecular formula'],
        answer:
            'Convert each element’s mass or percentage to moles with n = m/M, divide every answer by the smallest, ' +
            'then scale to whole numbers. The molecular formula is a whole-number multiple of that, found by comparing ' +
            'the molar masses.',
    },
    {
        id: 'chem-percentage-composition',
        subject: 'chemistry',
        question: 'How do I find percentage composition by mass?',
        aliases: ['percentage composition', 'percent by mass', 'mass percentage of an element'],
        answer:
            'Divide the total mass of that element in one mole of the compound by the molar mass, then multiply by 100. ' +
            'In CaCO₃ the carbon is 12.01/100.09, about 12.0%. ' +
            'Multiply by the subscript before dividing when an element appears more than once.',
    },
    {
        id: 'chem-water-of-crystallisation',
        subject: 'chemistry',
        question: 'How do I find the water of crystallisation?',
        aliases: ['water of crystallisation', 'hydrated salt', 'anhydrous after heating', 'mass loss on heating'],
        answer:
            'Heat to constant mass, so all the water leaves. ' +
            'The mass lost is the water and what remains is the anhydrous salt. ' +
            'Convert both to moles and simplify the ratio, which gives the x in a formula such as CuSO₄·5H₂O.',
    },
    {
        id: 'chem-limiting-reagent',
        subject: 'chemistry',
        question: 'How do I find the limiting reagent?',
        aliases: ['limiting reagent', 'limiting reactant', 'excess reagent'],
        answer:
            'Convert each reactant to moles, divide by its coefficient in the balanced equation, and the smallest ' +
            'result is the limiting reagent. ' +
            'Everything else is in excess. Work the product amount from the limiting reagent only.',
    },
    {
        id: 'chem-concentration-units',
        subject: 'chemistry',
        question: 'What are the units of concentration?',
        aliases: ['concentration units', 'mol per litre', 'grams per litre', 'percentage by mass', 'molarity'],
        answer:
            'The usual unit is mol L⁻¹, calculated as moles divided by volume in litres. ' +
            'Concentration can also be grams per litre, percentage by mass or volume, or parts per million for trace ' +
            'amounts. Convert to mol L⁻¹ before using it in a stoichiometry calculation.',
    },
    {
        id: 'chem-dilution',
        subject: 'chemistry',
        question: 'How do I calculate a dilution?',
        aliases: ['dilution', 'standard solution preparation', 'parts per million'],
        answer:
            'c₁V₁ = c₂V₂: the moles do not change, only the volume. ' +
            'Concentration is usually mol/L, and parts per million is milligrams per litre for dilute solutions. ' +
            'Add concentrated acid to water, never the reverse, because the mixing is strongly exothermic.',
    },
    {
        id: 'chem-solution-preparation',
        subject: 'chemistry',
        question: 'How do I prepare a solution of known concentration?',
        aliases: ['preparing a solution', 'volumetric flask method', 'making up to the mark', 'weighing accurately'],
        answer:
            'Weigh the solid accurately, dissolve it in a small volume of water, transfer every drop into a ' +
            'volumetric flask with rinsings, then add water to the calibration mark and invert to mix. ' +
            'Adding water to the mark before dissolving gives the wrong volume.',
    },
    {
        id: 'chem-gas-laws',
        subject: 'chemistry',
        question: 'What are the gas laws?',
        aliases: ['ideal gas law', 'pv = nrt', 'boyles law', 'charles law', 'molar volume'],
        answer:
            'PV = nRT, with R = 8.314 J K⁻¹ mol⁻¹, P in kPa, V in litres and T in kelvin, which is how NSW ' +
            'worked solutions set it out. At constant temperature P and V are inversely related; at constant ' +
            'pressure V rises with T. Molar volume is 24.79 L mol⁻¹ at 25°C (298.15 K) and 100 kPa, and ' +
            '22.71 L mol⁻¹ at 0°C (273.15 K) and 100 kPa. Never use 22.4 L.',
    },
    {
        id: 'chem-ideal-gas-limits',
        subject: 'chemistry',
        question: 'When does the ideal gas law stop working?',
        aliases: ['ideal gas assumptions', 'real gas deviation', 'high pressure low temperature gas'],
        answer:
            'It assumes the particles have no volume and no attraction for each other. ' +
            'At high pressure their own volume is no longer negligible, and at low temperature attractions matter, so ' +
            'real gases deviate most when they are close to condensing.',
    },
    {
        id: 'chem-gas-stoichiometry',
        subject: 'chemistry',
        question: 'How do I do stoichiometry with gas volumes?',
        aliases: ['gas volume stoichiometry', 'molar gas volume calculation', 'volume ratio of gases'],
        answer:
            'Convert the volume to moles by dividing by the molar volume at those conditions, apply the mole ratio, then ' +
            'convert back. ' +
            'For gases at the same temperature and pressure the volume ratio equals the mole ratio, so you can often ' +
            'work directly in volumes.',
    },
    {
        id: 'chem-conservation-mass',
        subject: 'chemistry',
        question: 'What is the law of conservation of mass?',
        aliases: ['conservation of mass', 'mass before and after', 'closed system reaction', 'why equations balance'],
        answer:
            'Atoms are rearranged in a reaction, not created or destroyed, so the total mass is unchanged. ' +
            'That is why equations must balance. ' +
            'An open system can appear to lose mass when a gas escapes, or gain it when a gas is absorbed.',
    },
    {
        id: 'chem-balancing-equations',
        subject: 'chemistry',
        question: 'How do I balance a chemical equation?',
        aliases: ['balancing equations', 'stoichiometry', 'mole ratio'],
        answer:
            'Adjust coefficients only, never subscripts, until each element has the same count on both sides. ' +
            'Those coefficients are the mole ratio. The limiting reagent is whichever runs out first, found by ' +
            'dividing each reagent\u2019s moles by its coefficient and taking the smallest.',
    },
    {
        id: 'chem-net-ionic-equations',
        subject: 'chemistry',
        question: 'How do I write a net ionic equation?',
        aliases: ['net ionic equation', 'full ionic equation', 'spectator ions'],
        answer:
            'Write every soluble ionic substance as separated ions, keep solids, gases, water and weak acids together, ' +
            'then cancel the ions that appear unchanged on both sides. ' +
            'Those are spectator ions. ' +
            'What remains is the chemistry that actually happened.',
    },
    {
        id: 'chem-significant-figures',
        subject: 'chemistry',
        question: 'How many significant figures should a chemistry answer have?',
        aliases: ['significant figures in chemistry', 'rounding a calculation', 'sig figs from a measurement'],
        answer:
            'Match the least precise measurement used, usually the one with the fewest significant figures. ' +
            'Carry extra digits through the working and round only at the end. ' +
            'A burette reading to 0.05 mL gives three or four figures, so an answer to six is claiming precision you ' +
            'did not measure.',
    },
    {
        id: 'chem-accuracy-reliability',
        subject: 'chemistry',
        question: 'What is the difference between accuracy, precision, validity and reliability?',
        aliases: ['accuracy', 'precision', 'validity', 'reliability', 'improving an experiment', 'significant figures chemistry'],
        answer:
            'Accuracy is closeness to the true value, precision is how tightly repeats cluster, reliability is ' +
            'whether repeats agree, and validity is whether the method tests what the question asks with variables ' +
            'controlled. ' +
            'Name which one a change improves. Round to the least precise measurement and always give the unit.',
    },
    {
        id: 'chem-safety-data',
        subject: 'chemistry',
        question: 'What safety information should I check before an experiment?',
        aliases: ['safety data sheet', 'hazard symbols', 'handling a chemical safely'],
        answer:
            'The safety data sheet: the hazards, the protective equipment needed, what to do on skin contact or ' +
            'spillage, and how to dispose of the waste. ' +
            'Then write the risk assessment from it, naming the control for each hazard rather than listing hazards ' +
            'alone.',
    },
];
