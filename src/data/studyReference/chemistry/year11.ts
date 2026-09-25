/**
 * Chemistry, Year 11 (Modules 1 to 4).
 *
 * Properties and structure of matter, quantitative chemistry, reactive
 * chemistry, and the drivers of reactions.
 */
import type { StudyEntry } from '../types';

export const chemistryYear11Entries: StudyEntry[] = [
    {
        id: 'chem-gibbs-free-energy',
        subject: 'chemistry',
        question: 'What does ΔG mean?',
        aliases: ['delta g', 'gibbs free energy', 'free energy', 'spontaneous reaction', 'delta g formula'],
        answer:
            'ΔG is the Gibbs free energy change: ΔG = ΔH − TΔS, with T in kelvin. ' +
            'A negative ΔG means the reaction is spontaneous in that direction, a positive ΔG means it is not, ' +
            'and ΔG = 0 means the system is at equilibrium.',
    },
    {
        id: 'chem-enthalpy',
        subject: 'chemistry',
        question: 'What does ΔH mean?',
        aliases: ['delta h', 'enthalpy', 'exothermic', 'endothermic', 'heat of reaction'],
        answer:
            'ΔH is the enthalpy change, the heat taken in or released at constant pressure. ' +
            'Negative ΔH is exothermic, so the surroundings warm up. Positive ΔH is endothermic, so they cool. ' +
            'Heat released is q = mcΔT, where c is the specific heat capacity.',
    },
    {
        id: 'chem-entropy',
        subject: 'chemistry',
        question: 'What does ΔS mean?',
        aliases: ['delta s', 'entropy', 'disorder'],
        answer:
            'ΔS is the entropy change, a measure of how spread out the energy and particles become. ' +
            'It is positive when a reaction makes more gas particles or dissolves a solid, and negative when the ' +
            'opposite happens. It sits in ΔG = ΔH − TΔS.',
    },
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
        id: 'chem-rate-factors',
        subject: 'chemistry',
        question: 'What affects the rate of a reaction?',
        aliases: ['reaction rate', 'rate of reaction', 'collision theory'],
        answer:
            'Temperature, concentration or pressure, surface area, and catalysts. ' +
            'Collision theory explains why: reactions need collisions with enough energy and the right orientation, ' +
            'and a catalyst lowers the activation energy without being consumed.',
    },
    {
        id: 'chem-bonding',
        subject: 'chemistry',
        question: 'What is the difference between ionic, covalent and metallic bonding?',
        aliases: ['ionic bonding', 'covalent bonding', 'metallic bonding', 'types of bonds'],
        answer:
            'Ionic bonding transfers electrons between a metal and a non-metal, giving a lattice of ions. ' +
            'Covalent bonding shares electrons between non-metals. Metallic bonding is positive ions in a sea of ' +
            'delocalised electrons, which is why metals conduct and are malleable.',
    },
    {
        id: 'chem-intermolecular-forces',
        subject: 'chemistry',
        question: 'What are the intermolecular forces?',
        aliases: ['intermolecular forces', 'hydrogen bonding', 'dispersion forces', 'dipole dipole', 'boiling point'],
        answer:
            'From weakest to strongest: dispersion forces, dipole-dipole forces, then hydrogen bonding, which needs ' +
            'H bonded to N, O or F. Stronger forces mean higher melting and boiling points, since more energy is ' +
            'needed to pull molecules apart.',
    },
    {
        id: 'chem-oxidation-reduction',
        subject: 'chemistry',
        question: 'What are oxidation and reduction?',
        aliases: ['oxidation', 'reduction', 'redox', 'oil rig'],
        answer:
            'OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain. ' +
            'The oxidised species is the reducing agent and vice versa. Track oxidation numbers to see which element ' +
            'changed, then balance the electrons lost against those gained.',
    },
    {
        id: 'chem-empirical-formula',
        subject: 'chemistry',
        question: 'How do I find an empirical formula?',
        aliases: ['empirical formula', 'molecular formula', 'percentage composition'],
        answer:
            'Convert each element’s mass or percentage to moles with n = m/M, divide every answer by the smallest, ' +
            'then scale to whole numbers. The molecular formula is a whole-number multiple of that, found by comparing ' +
            'the molar masses.',
    },
    {
        id: 'chem-periodic-trends',
        subject: 'chemistry',
        question: 'What are the periodic trends?',
        aliases: ['periodic table trends', 'electronegativity', 'atomic radius', 'ionisation energy', 'groups periods'],
        answer:
            'Across a period, atomic radius falls while electronegativity and ionisation energy rise, because the ' +
            'nuclear charge grows with no new shell. Down a group the reverse happens, as each shell added sits ' +
            'further out and shields the nucleus.',
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
        id: 'chem-solubility-rules',
        subject: 'chemistry',
        question: 'What are the solubility rules?',
        aliases: ['solubility rules', 'precipitation reaction', 'net ionic equation', 'spectator ions'],
        answer:
            'All nitrates and Group 1 and ammonium salts dissolve. Most chlorides dissolve except silver and lead. ' +
            'Most sulfates dissolve except barium, lead and calcium. Most carbonates and hydroxides do not dissolve ' +
            'except Group 1 and ammonium. Leave spectator ions out of a net ionic equation.',
    },
    {
        id: 'chem-acid-base-reactions',
        subject: 'chemistry',
        question: 'What are the common acid reactions?',
        aliases: ['acid reactions', 'neutralisation', 'acid plus carbonate', 'acid plus metal', 'salt'],
        answer:
            'Acid plus base gives salt and water. Acid plus metal gives salt and hydrogen. ' +
            'Acid plus carbonate gives salt, water and carbon dioxide. ' +
            'Neutralisation is exothermic, and the salt takes its name from the acid used.',
    },
    {
        id: 'chem-galvanic-cells',
        subject: 'chemistry',
        question: 'How does a galvanic cell work?',
        aliases: ['galvanic cell', 'electrochemistry', 'anode cathode', 'electrolysis'],
        answer:
            'Oxidation happens at the anode and reduction at the cathode, with electrons flowing through the wire and ' +
            'ions through the salt bridge. Cell potential is E°(cathode) − E°(anode), and a positive value means the ' +
            'reaction is spontaneous. Electrolysis forces the reverse with an external supply.',
    },
    {
        id: 'chem-collision-energy-profile',
        subject: 'chemistry',
        question: 'What does an energy profile diagram show?',
        aliases: ['energy profile', 'activation energy', 'catalyst diagram', 'transition state'],
        answer:
            'It plots energy through a reaction: the hump is the activation energy and its peak the transition state. ' +
            'The difference between reactants and products is ΔH, below zero for exothermic. ' +
            'A catalyst lowers the hump without moving the ends, so it speeds the reaction without changing ΔH.',
    },
    {
        id: 'chem-atomic-structure',
        subject: 'chemistry',
        question: 'What is the structure of an atom?',
        aliases: ['atomic structure', 'subatomic particles', 'valence electrons'],
        answer:
            'Protons and neutrons sit in the nucleus; electrons occupy shells and subshells around it. ' +
            'The atomic number is the proton count and defines the element; isotopes differ in neutrons. ' +
            'Electron configuration fills 1s, 2s, 2p and so on, and the outer shell decides the chemistry.',
    },
    {
        id: 'chem-mixtures-separation',
        subject: 'chemistry',
        question: 'How are mixtures separated?',
        aliases: ['separating mixtures', 'filtration', 'distillation', 'chromatography separation', 'pure substance'],
        answer:
            'Choose the technique by the difference you can exploit: filtration for particle size, evaporation and ' +
            'crystallisation for solubility, distillation for boiling point, chromatography for how strongly parts ' +
            'are carried, and a magnet or density for physical properties.',
    },
    {
        id: 'chem-reaction-types',
        subject: 'chemistry',
        question: 'What are the main types of chemical reaction?',
        aliases: ['types of reactions', 'combustion', 'synthesis decomposition', 'displacement reaction', 'order of reactivity', 'metal reactivity'],
        answer:
            'Synthesis combines, decomposition breaks apart, displacement swaps a more reactive element in, and ' +
            'combustion reacts with oxygen. ' +
            'The order of reactivity of metals predicts displacement: a more reactive metal displaces a less ' +
            'reactive one from its solution. Reactivity is tested by how a metal reacts with water, with acid and ' +
            'with the solutions of other metal ions.',
    },
    {
        id: 'chem-hess-law',
        subject: 'chemistry',
        question: 'What is Hess\u2019s law?',
        aliases: ['hess law', 'enthalpy cycle', 'heat of formation', 'bond energy calculation'],
        answer:
            'The enthalpy change of a reaction is the same whatever route it takes, so equations can be added and ' +
            'their ΔH values added with them. Reversing an equation reverses the sign; doubling it doubles ΔH. ' +
            'It lets you find a ΔH you cannot measure directly.',
    },
    {
        id: 'chem-dilution',
        subject: 'chemistry',
        question: 'How do I calculate a dilution?',
        aliases: ['dilution', 'c1v1 = c2v2', 'standard solution preparation', 'parts per million'],
        answer:
            'c₁V₁ = c₂V₂: the moles do not change, only the volume. ' +
            'Concentration is usually mol/L, and parts per million is milligrams per litre for dilute solutions. ' +
            'Add concentrated acid to water, never the reverse, because the mixing is strongly exothermic.',
    },
    {
        id: 'chem-electron-configuration',
        subject: 'chemistry',
        question: 'How do I write an electron configuration?',
        aliases: ['electron configuration', 'subshells', 'orbital filling', 'valence shell', 'aufbau'],
        answer:
            'Fill subshells in order of energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. ' +
            'Each s holds 2 electrons, p holds 6 and d holds 10. ' +
            'The outer shell decides the chemistry, and a large jump in successive ionisation energies marks the ' +
            'point where a full shell is broken into.',
    },
    {
        id: 'chem-vsepr',
        subject: 'chemistry',
        question: 'How do I predict the shape of a molecule?',
        aliases: ['vsepr', 'molecular shape', 'bond angle', 'tetrahedral', 'polar molecule', 'lone pair'],
        answer:
            'Electron pairs around the central atom repel and spread as far apart as possible: two give linear, three ' +
            'trigonal planar, four tetrahedral at about 109.5°. Lone pairs repel more, so they squeeze the angle. ' +
            'A molecule is polar unless its bond dipoles cancel by symmetry.',
    },
    {
        id: 'chem-isotopes-ram',
        subject: 'chemistry',
        question: 'How do I calculate relative atomic mass from isotopes?',
        aliases: ['relative atomic mass', 'isotopes', 'weighted average mass', 'mass spectrum abundance'],
        answer:
            'Relative atomic mass is the weighted mean of the isotope masses: multiply each isotopic mass by its ' +
            'fractional abundance and add. ' +
            'A mass spectrum gives both, with peak height showing abundance and position showing mass.',
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
        id: 'chem-calorimetry',
        subject: 'chemistry',
        question: 'How does calorimetry work?',
        aliases: ['calorimetry', 'q = mc delta t', 'heat of combustion', 'specific heat capacity of water', 'enthalpy experiment'],
        answer:
            'q = mcΔT. The data sheet gives water as c = 4.18 × 10³ J kg⁻¹ K⁻¹, so m must be in kilograms; ' +
            'the same value is 4.18 J g⁻¹ K⁻¹ if you work in grams, and mixing the two is out by a thousand. ' +
            'If the question supplies a specific heat capacity for the solution, use that one. ' +
            'The molar enthalpy change is ΔH = −q/n, negative when heat is released.',
    },
    {
        id: 'chem-electrode-potentials',
        subject: 'chemistry',
        question: 'How do I use standard electrode potentials?',
        aliases: ['standard electrode potential', 'e cell', 'reduction potential table', 'spontaneous redox'],
        answer:
            'The data sheet tabulates standard reduction potentials, written E° or ε. ' +
            'The more positive half-reaction runs forward as reduction; the other is reversed, which reverses the ' +
            'sign of its potential. E°cell is then the reduction value minus the value of the reversed half-reaction. ' +
            'A positive E°cell means the reaction is spontaneous.',
    },
    {
        id: 'chem-half-equations',
        subject: 'chemistry',
        question: 'How do I balance a half-equation?',
        aliases: ['half equation', 'balancing redox', 'acidic solution redox', 'electrons in an equation'],
        answer:
            'Balance the main atoms first, then oxygen with water, then hydrogen with H⁺, then charge with electrons. ' +
            'Combine the two halves so the electrons cancel, scaling one or both if needed. ' +
            'The electrons lost must equal the electrons gained.',
    },
    {
        id: 'chem-oxidation-numbers',
        subject: 'chemistry',
        question: 'How do I assign oxidation numbers?',
        aliases: ['oxidation number', 'oxidation state', 'assigning oxidation numbers', 'what is oxidised'],
        answer:
            'An uncombined element is 0, a simple ion equals its charge, oxygen is usually −2 and hydrogen +1, ' +
            'and the numbers sum to the overall charge. ' +
            'Peroxides and metal hydrides are the exceptions. ' +
            'Compare before and after: a rise is oxidation, a fall is reduction.',
    },
    {
        id: 'chem-ionisation-energy',
        subject: 'chemistry',
        question: 'What do successive ionisation energies tell me?',
        aliases: ['successive ionisation energy', 'ionisation energy jump', 'evidence for shells', 'valence electrons number'],
        answer:
            'Each electron removed costs more, since the remaining ones are held by the same nucleus. ' +
            'A sudden large jump marks the point where an inner shell is broken into. ' +
            'Counting the electrons removed before that jump gives the number of valence electrons, and so the group.',
    },
    {
        id: 'chem-electron-dot',
        subject: 'chemistry',
        question: 'How do I draw an electron dot diagram?',
        aliases: ['electron dot', 'lewis structure', 'octet rule', 'bonding pairs', 'lone pairs'],
        answer:
            'Count the valence electrons of every atom, place a bonding pair between bonded atoms, then add lone ' +
            'pairs until each atom has eight, or two for hydrogen. ' +
            'If there are not enough, form a double or triple bond. The diagram is the step before predicting shape.',
    },
    {
        id: 'chem-network-molecular',
        subject: 'chemistry',
        question: 'What is the difference between a covalent network and a covalent molecular solid?',
        aliases: ['covalent network', 'covalent molecular', 'diamond graphite', 'allotropes', 'lattice types'],
        answer:
            'A network is covalently bonded all the way through, so melting means breaking covalent bonds: very high ' +
            'melting point and hardness, as in diamond. ' +
            'A molecular solid has strong bonds inside each molecule but weak forces between them, so it melts ' +
            'easily. Graphite is a network with layers that slide, which is why it is soft and conducts.',
    },
    {
        id: 'chem-conductivity',
        subject: 'chemistry',
        question: 'What does electrical conductivity tell me about a substance?',
        aliases: ['conductivity', 'conducts electricity', 'molten ionic', 'electrolyte strength', 'weak electrolyte'],
        answer:
            'Metals conduct in every state, through delocalised electrons. ' +
            'Ionic solids do not conduct, but molten or dissolved they do, because the ions can move. ' +
            'Molecular substances generally do not. ' +
            'A weak acid conducts poorly compared with a strong acid at the same concentration, since fewer ions form.',
    },
    {
        id: 'chem-bond-energy',
        subject: 'chemistry',
        question: 'How do I calculate enthalpy from bond energies?',
        aliases: ['bond energy', 'bond enthalpy', 'breaking and forming bonds', 'average bond energy'],
        answer:
            'ΔH ≈ energy to break all the bonds in the reactants minus the energy released forming the bonds in the ' +
            'products. Breaking costs energy, forming releases it. ' +
            'The answer is approximate, because tabulated values are averages across many compounds.',
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
        id: 'chem-states-of-matter',
        subject: 'chemistry',
        question: 'How do the states of matter differ?',
        aliases: ['states of matter', 'solid liquid gas', 'particle model', 'melting boiling', 'sublimation'],
        answer:
            'In a solid, particles vibrate in fixed positions; in a liquid they are close but mobile; in a gas they ' +
            'are far apart and fast. ' +
            'Changing state changes the arrangement, not the particles themselves, and takes energy without changing ' +
            'temperature. Sublimation goes straight from solid to gas.',
    },
    {
        id: 'chem-physical-chemical-change',
        subject: 'chemistry',
        question: 'What is the difference between a physical and a chemical change?',
        aliases: ['physical change', 'chemical change', 'signs of a chemical reaction', 'reversible change'],
        answer:
            'A physical change alters form but not identity, and is usually reversible, such as melting. ' +
            'A chemical change makes new substances, shown by a colour change, gas produced, a precipitate, a ' +
            'temperature change or light.',
    },
    {
        id: 'chem-elements-compounds',
        subject: 'chemistry',
        question: 'What is the difference between elements, compounds and mixtures?',
        aliases: ['element compound mixture', 'homogeneous', 'heterogeneous', 'alloy mixture'],
        answer:
            'An element has one kind of atom, a compound has different elements chemically bonded in fixed ' +
            'proportions, and a mixture has substances physically combined in any proportion. ' +
            'Only a mixture can be separated physically. Homogeneous mixtures look uniform; heterogeneous ones do ' +
            'not.',
    },
    {
        id: 'chem-ions-formation',
        subject: 'chemistry',
        question: 'How do atoms form ions?',
        aliases: ['ions', 'cation', 'anion', 'forming an ion', 'charge on an ion', 'valency'],
        answer:
            'Atoms gain or lose electrons to reach a full outer shell. ' +
            'Metals lose them and become positive cations; non-metals gain them and become negative anions. ' +
            'The group number predicts the charge: group 1 forms 1+, group 2 forms 2+, group 17 forms 1−.',
    },
    {
        id: 'chem-naming-compounds',
        subject: 'chemistry',
        question: 'How do I name and write formulas for ionic compounds?',
        aliases: ['naming ionic compounds', 'chemical formula', 'polyatomic ions', 'writing formulas', 'roman numerals'],
        answer:
            'Name the metal first, then the non-metal with an -ide ending, or the polyatomic ion by its own name. ' +
            'Balance the charges so the compound is neutral, using subscripts, and put brackets around a polyatomic ' +
            'ion you need more than one of. Roman numerals show the charge on a transition metal.',
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
        id: 'chem-precipitation-detail',
        subject: 'chemistry',
        question: 'How do I predict whether a precipitate forms?',
        aliases: ['will a precipitate form', 'predicting precipitation', 'mixing two solutions', 'insoluble product'],
        answer:
            'Write the ions present, pair each cation with the other solution\u2019s anion, then check the solubility ' +
            'rules for each possible pair. ' +
            'Any insoluble combination is the precipitate; the rest stay dissolved as spectator ions and are left out ' +
            'of the net ionic equation.',
    },
    {
        id: 'chem-reactivity-metals',
        subject: 'chemistry',
        question: 'How reactive are different metals?',
        aliases: ['reactivity of metals', 'metal and acid', 'metal and water', 'displacement of metals', 'potassium sodium calcium'],
        answer:
            'The most reactive metals react with cold water, less reactive ones only with acid, and the least, such ' +
            'as gold, with neither. ' +
            'A more reactive metal displaces a less reactive one from its compound, which is the basis of ' +
            'displacement reactions and of how metals are extracted.',
    },
    {
        id: 'chem-catalysts-detail',
        subject: 'chemistry',
        question: 'How does a catalyst work?',
        aliases: ['catalyst', 'activation energy lowered', 'enzyme catalyst', 'catalyst not consumed', 'alternative pathway'],
        answer:
            'A catalyst provides a different reaction pathway with a lower activation energy, so a larger fraction of ' +
            'collisions succeed. ' +
            'It speeds both directions equally, so it reaches equilibrium sooner without changing the yield, and it ' +
            'is recovered unchanged.',
    },
    {
        id: 'chem-exo-endo-profiles',
        subject: 'chemistry',
        question: 'How do I tell an exothermic reaction from an endothermic one on a graph?',
        aliases: ['exothermic graph', 'endothermic graph', 'energy diagram', 'reading an energy profile'],
        answer:
            'If the products sit lower than the reactants, energy was released, so ΔH is negative and the reaction is ' +
            'exothermic. ' +
            'If they sit higher, energy was absorbed and ΔH is positive. ' +
            'The hump between them is the activation energy either way.',
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
        id: 'chem-concentration-units',
        subject: 'chemistry',
        question: 'What are the units of concentration?',
        aliases: ['concentration units', 'mol per litre', 'grams per litre', 'percentage by mass', 'molarity'],
        answer:
            'The usual unit is mol L⁻¹, calculated as moles divided by volume in litres. ' +
            'Concentration can also be grams per litre, percentage by mass or volume, or parts per million for trace ' +
            'amounts. Convert to mol L⁻¹ before using it in a stoichiometry calculation.',
    },
];
