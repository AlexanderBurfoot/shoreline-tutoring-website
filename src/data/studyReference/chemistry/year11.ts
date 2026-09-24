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
        aliases: ['moles', 'n = m/mm', 'avogadro', 'molar mass', 'mole calculation'],
        answer:
            'n = m/M, where m is mass in grams and M the molar mass. In solution, n = cV with V in litres. ' +
            'For a gas at standard conditions, n = V/Vm. One mole contains 6.022 × 10²³ particles.',
    },
    {
        id: 'chem-rate-factors',
        subject: 'chemistry',
        question: 'What affects the rate of a reaction?',
        aliases: ['reaction rate', 'rate of reaction', 'catalyst', 'collision theory'],
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
        aliases: ['oxidation', 'reduction', 'redox', 'oil rig', 'oxidation number'],
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
        id: 'chem-tests',
        subject: 'chemistry',
        question: 'What are the common qualitative tests?',
        aliases: ['flame test', 'test for gases', 'qualitative analysis', 'precipitation test'],
        answer:
            'Flame tests identify metal ions by colour, such as lithium red, sodium yellow, potassium lilac and copper ' +
            'blue-green. Limewater turning milky shows carbon dioxide, a glowing splint relighting shows oxygen, and a ' +
            'popping splint shows hydrogen.',
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
        aliases: ['balancing equations', 'stoichiometry', 'mole ratio', 'limiting reagent'],
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
            'PV = nRT, with R = 8.314 J K⁻¹ mol⁻¹, P in pascals, V in cubic metres and T in kelvin. ' +
            'At constant temperature, P and V are inversely related; at constant pressure, V rises with T. ' +
            'At 25°C and 100 kPa, one mole of gas occupies 24.79 L.',
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
        aliases: ['galvanic cell', 'electrochemistry', 'anode cathode', 'standard electrode potential', 'electrolysis'],
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
        aliases: ['atomic structure', 'electron configuration', 'isotopes', 'subatomic particles', 'valence electrons'],
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
        aliases: ['types of reactions', 'combustion', 'synthesis decomposition', 'displacement reaction', 'activity series'],
        answer:
            'Synthesis combines, decomposition breaks apart, displacement swaps a more reactive element in, and ' +
            'combustion reacts with oxygen. ' +
            'The activity series predicts displacement: a metal displaces any metal below it from a solution.',
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
        aliases: ['limiting reagent', 'limiting reactant', 'excess reagent', 'theoretical yield'],
        answer:
            'Convert each reactant to moles, divide by its coefficient in the balanced equation, and the smallest ' +
            'result is the limiting reagent. ' +
            'Everything else is in excess. Work the product amount from the limiting reagent only.',
    },
    {
        id: 'chem-percentage-yield',
        subject: 'chemistry',
        question: 'How do I calculate percentage yield?',
        aliases: ['percentage yield', 'theoretical yield', 'actual yield', 'atom economy'],
        answer:
            'Percentage yield = actual ÷ theoretical × 100. ' +
            'Yields fall short because of side reactions, incomplete reaction, and losses in transferring and ' +
            'purifying. Atom economy asks a different question: what fraction of the reactant mass ends up in the ' +
            'product you want.',
    },
    {
        id: 'chem-ppm',
        subject: 'chemistry',
        question: 'What does parts per million mean?',
        aliases: ['ppm', 'parts per million', 'trace concentration', 'mg per litre'],
        answer:
            'One part per million is one milligram per litre in a dilute water solution, or one milligram per ' +
            'kilogram by mass. ' +
            'It is the usual unit for trace analysis, such as metal ions in drinking water measured by AAS.',
    },
    {
        id: 'chem-calorimetry',
        subject: 'chemistry',
        question: 'How does calorimetry work?',
        aliases: ['calorimetry', 'q = mc delta t', 'heat of combustion', 'specific heat capacity of water', 'enthalpy experiment'],
        answer:
            'q = mcΔT, with m the mass of water in grams and c = 4.18 J K⁻¹ g⁻¹, so q comes out in joules. ' +
            'The molar enthalpy change is ΔH = −q/n, negative when heat is released. ' +
            'Measured values fall short of data-book ones because heat escapes to the surroundings.',
    },
    {
        id: 'chem-electrolysis',
        subject: 'chemistry',
        question: 'How does electrolysis differ from a galvanic cell?',
        aliases: ['electrolysis', 'electrolytic cell', 'electroplating', 'anode cathode electrolysis'],
        answer:
            'A galvanic cell releases energy from a spontaneous reaction; electrolysis supplies energy to force a ' +
            'non-spontaneous one. Oxidation still happens at the anode and reduction at the cathode, but the signs ' +
            'reverse: in electrolysis the cathode is negative.',
    },
    {
        id: 'chem-electrode-potentials',
        subject: 'chemistry',
        question: 'How do I use standard electrode potentials?',
        aliases: ['standard electrode potential', 'e cell', 'reduction potential table', 'spontaneous redox'],
        answer:
            'Read each half-cell from the standard reduction potential table on the data sheet, then ' +
            'E°cell = E°cathode − E°anode. ' +
            'A positive E°cell means the reaction is spontaneous. The more positive half-reaction runs as reduction.',
    },
    {
        id: 'chem-corrosion',
        subject: 'chemistry',
        question: 'How does corrosion happen and how is it prevented?',
        aliases: ['corrosion', 'rusting', 'galvanising', 'sacrificial anode', 'cathodic protection'],
        answer:
            'Iron corrodes when it is oxidised in the presence of oxygen and water, faster with salt present. ' +
            'Barrier coatings keep those out. Galvanising and sacrificial anodes go further: a more reactive metal ' +
            'such as zinc is oxidised instead, protecting the iron even where the coating is scratched.',
    },
];
