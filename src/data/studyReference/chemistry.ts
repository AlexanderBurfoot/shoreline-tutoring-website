/**
 * Chemistry reference, Years 9 to 12.
 *
 * Weighted towards the Year 12 modules: equilibrium, acids and bases, organic
 * chemistry and analysis, with the general ideas students revisit throughout.
 */
import type { StudyEntry } from './types';

export const chemistryEntries: StudyEntry[] = [
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
        id: 'chem-equilibrium-constant',
        subject: 'chemistry',
        question: 'What is the equilibrium constant Keq?',
        aliases: ['keq', 'equilibrium constant', 'kc', 'k expression', 'equilibrium expression'],
        answer:
            'For aA + bB ⇌ cC + dD, Keq = [C]^c[D]^d / ([A]^a[B]^b), using equilibrium concentrations. ' +
            'A large K means products are favoured, a small K means reactants are. Pure solids and liquids are left out.',
    },
    {
        id: 'chem-le-chatelier',
        subject: 'chemistry',
        question: 'What is Le Chatelier’s principle?',
        aliases: ['le chatelier', 'shift equilibrium', 'disturbing equilibrium', 'pressure change equilibrium'],
        answer:
            'If a system at equilibrium is disturbed, it shifts to partly oppose the change. ' +
            'Adding reactant shifts it right, raising pressure shifts it towards fewer gas particles, and raising ' +
            'temperature shifts it in the endothermic direction. Only temperature changes the value of K.',
    },
    {
        id: 'chem-ksp',
        subject: 'chemistry',
        question: 'What is Ksp?',
        aliases: ['ksp', 'solubility product', 'precipitate', 'saturated solution'],
        answer:
            'Ksp is the solubility product: the equilibrium constant for a sparingly soluble salt dissolving. ' +
            'For AgCl(s) ⇌ Ag⁺ + Cl⁻, Ksp = [Ag⁺][Cl⁻]. If the ionic product exceeds Ksp, a precipitate forms.',
    },
    {
        id: 'chem-ph',
        subject: 'chemistry',
        question: 'How do I calculate pH?',
        aliases: ['ph formula', 'poh', 'hydrogen ion concentration', 'ph scale'],
        answer:
            'pH = −log₁₀[H⁺], and pOH = −log₁₀[OH⁻]. At 25°C, pH + pOH = 14. ' +
            'Each whole pH unit is a tenfold change in [H⁺], so pH 3 is ten times more acidic than pH 4.',
    },
    {
        id: 'chem-ka-kb',
        subject: 'chemistry',
        question: 'What are Ka and Kb?',
        aliases: ['ka', 'kb', 'acid dissociation constant', 'weak acid', 'pka'],
        answer:
            'Ka is the acid dissociation constant: for HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. ' +
            'A larger Ka means a stronger acid. pKa = −log₁₀Ka, so a smaller pKa is the stronger acid. ' +
            'For a conjugate pair, Ka × Kb = Kw = 1.0 × 10⁻¹⁴ at 25°C.',
    },
    {
        id: 'chem-titration',
        subject: 'chemistry',
        question: 'How does a titration calculation work?',
        aliases: ['titration', 'equivalence point', 'standard solution', 'c1v1', 'concentration calculation'],
        answer:
            'Use n = cV to find moles of the known solution, apply the mole ratio from the balanced equation, ' +
            'then divide by the unknown volume to get its concentration. ' +
            'The equivalence point is where the moles match the ratio; the end point is where the indicator changes.',
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
        id: 'chem-functional-groups',
        subject: 'chemistry',
        question: 'What are the main organic functional groups?',
        aliases: ['functional groups', 'alcohol', 'carboxylic acid', 'ester', 'amine', 'homologous series'],
        answer:
            'Alkane (C−C), alkene (C=C), alkyne (C≡C), alcohol (−OH), aldehyde (−CHO), ketone (C=O in the chain), ' +
            'carboxylic acid (−COOH), ester (−COO−), amine (−NH₂) and amide (−CONH₂). ' +
            'The group decides the reactions and, with chain length, the boiling point.',
    },
    {
        id: 'chem-esterification',
        subject: 'chemistry',
        question: 'What is esterification?',
        aliases: ['esterification', 'making an ester', 'reflux', 'condensation reaction'],
        answer:
            'A carboxylic acid plus an alcohol makes an ester and water, with concentrated sulfuric acid as catalyst. ' +
            'It is reversible and slow, so it is run under reflux to heat the mixture without losing volatile reactants.',
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
        id: 'chem-buffers',
        subject: 'chemistry',
        question: 'What is a buffer?',
        aliases: ['buffer', 'buffer solution', 'conjugate pair buffer', 'blood buffer'],
        answer:
            'A buffer is a weak acid with its conjugate base, or a weak base with its conjugate acid, in similar ' +
            'amounts. Added acid reacts with the base and added base with the acid, so the pH barely moves. ' +
            'Blood is buffered by the carbonic acid and hydrogencarbonate pair.',
    },
    {
        id: 'chem-indicators',
        subject: 'chemistry',
        question: 'How do I choose an indicator?',
        aliases: ['indicator', 'phenolphthalein', 'methyl orange', 'titration curve', 'equivalence point ph'],
        answer:
            'Choose one whose colour change spans the pH at the equivalence point. ' +
            'Strong acid with strong base is neutral there, so most indicators work. Weak acid with strong base ends ' +
            'basic, suiting phenolphthalein; strong acid with weak base ends acidic, suiting methyl orange.',
    },
    {
        id: 'chem-organic-naming',
        subject: 'chemistry',
        question: 'How does IUPAC naming work?',
        aliases: ['iupac naming', 'naming organic compounds', 'prefixes meth eth prop', 'alkane alkene names'],
        answer:
            'Count the longest carbon chain for the stem: meth, eth, prop, but, pent, hex. ' +
            'The ending gives the functional group, such as -ane, -ene, -ol or -oic acid. ' +
            'Number from the end that gives the group the lowest number, and list branches alphabetically.',
    },
    {
        id: 'chem-polymers',
        subject: 'chemistry',
        question: 'What is the difference between addition and condensation polymers?',
        aliases: ['polymers', 'addition polymer', 'condensation polymer', 'monomer', 'polyethylene', 'nylon'],
        answer:
            'Addition polymers form when monomers with a C=C bond open and join, losing nothing, as in polyethylene. ' +
            'Condensation polymers form when two functional groups react and release a small molecule, usually water, ' +
            'as in nylon and polyesters.',
    },
    {
        id: 'chem-analysis-techniques',
        subject: 'chemistry',
        question: 'What do the instrumental analysis techniques do?',
        aliases: ['aas', 'mass spectrometry', 'infrared spectroscopy', 'nmr', 'chromatography', 'uv visible'],
        answer:
            'AAS measures metal ion concentration by the light a sample absorbs. Mass spectrometry gives molecular ' +
            'mass and fragments. Infrared identifies functional groups by bond vibrations. NMR shows the carbon and ' +
            'hydrogen environments. Chromatography separates a mixture by how strongly each part is carried.',
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
        id: 'chem-equilibrium-graphs',
        subject: 'chemistry',
        question: 'How do I read a concentration-time graph for equilibrium?',
        aliases: ['equilibrium graph', 'concentration time graph', 'reaching equilibrium', 'dynamic equilibrium'],
        answer:
            'Concentrations change quickly at first, then level off where the forward and reverse rates are equal. ' +
            'Equilibrium is dynamic: both reactions continue at the same rate. ' +
            'A sudden jump then a new plateau shows a disturbance and the shift that followed it.',
    },
    {
        id: 'chem-salts-hydrolysis',
        subject: 'chemistry',
        question: 'Why are some salt solutions not neutral?',
        aliases: ['salt hydrolysis', 'acidic salt', 'basic salt', 'conjugate base ph', 'amphiprotic'],
        answer:
            'A salt from a strong acid and strong base is neutral. From a weak acid and strong base, the conjugate ' +
            'base reacts with water and the solution is basic; the reverse gives an acidic solution. ' +
            'Amphiprotic species, such as hydrogencarbonate, can act as either.',
    },
    {
        id: 'chem-alcohols-reactions',
        subject: 'chemistry',
        question: 'What reactions do alcohols undergo?',
        aliases: ['alcohol reactions', 'oxidation of alcohols', 'dehydration', 'substitution reaction', 'primary secondary tertiary'],
        answer:
            'Primary alcohols oxidise to aldehydes then carboxylic acids; secondary give ketones; tertiary resist ' +
            'oxidation. Dehydration with acid gives an alkene. ' +
            'Alcohols also react with carboxylic acids to form esters, and burn completely to carbon dioxide and water.',
    },
    {
        id: 'chem-isomers',
        subject: 'chemistry',
        question: 'What are isomers?',
        aliases: ['isomers', 'structural isomers', 'chain isomer', 'positional isomer', 'functional group isomer'],
        answer:
            'Isomers share a molecular formula but differ in structure. ' +
            'Chain isomers branch differently, positional isomers move the functional group along the chain, and ' +
            'functional group isomers have a different group entirely. Isomers can have very different properties.',
    },
    {
        id: 'chem-soaps-detergents',
        subject: 'chemistry',
        question: 'How do soaps and detergents work?',
        aliases: ['soap', 'detergent', 'saponification', 'hydrophilic hydrophobic', 'surfactant', 'hard water'],
        answer:
            'A surfactant has a hydrophobic tail and a hydrophilic head, so it surrounds grease and lets water carry ' +
            'it away. Soap is made by saponification, boiling a fat with a strong base. ' +
            'Soap forms a scum in hard water, where synthetic detergents do not.',
    },
    {
        id: 'chem-radioisotopes',
        subject: 'chemistry',
        question: 'What are radioisotopes used for?',
        aliases: ['radioisotopes', 'medical isotopes', 'carbon dating', 'tracer', 'nuclear chemistry'],
        answer:
            'Short half-life isotopes act as medical tracers and treatments; longer ones date materials, as carbon-14 ' +
            'dates once-living remains. ' +
            'Choose the isotope by half-life and radiation type: the dose should do the job and then decay quickly.',
    },
    {
        id: 'chem-monitoring-environment',
        subject: 'chemistry',
        question: 'How is water quality monitored?',
        aliases: ['water quality', 'monitoring the environment', 'eutrophication', 'heavy metals', 'dissolved oxygen'],
        answer:
            'Tests cover pH, dissolved oxygen, turbidity, hardness, phosphate and nitrate, and heavy metal ions. ' +
            'Excess nutrients cause eutrophication: algae bloom, then decay and strip the oxygen. ' +
            'AAS measures metal ions at very low concentrations.',
    },
];
