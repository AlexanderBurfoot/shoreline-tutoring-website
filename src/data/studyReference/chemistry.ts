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
];
