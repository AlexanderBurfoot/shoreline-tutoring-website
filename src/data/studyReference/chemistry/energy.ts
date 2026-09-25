/**
 * Chemistry Module 4: energy changes in reactions.
 *
 * Enthalpy, entropy, free energy and the calorimetry behind them.
 */
import type { StudyEntry } from '../types';

export const chemistryEnergyEntries: StudyEntry[] = [
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
        id: 'chem-collision-energy-profile',
        subject: 'chemistry',
        question: 'What does an energy profile diagram show?',
        aliases: ['energy profile', 'catalyst diagram', 'transition state'],
        answer:
            'It plots energy through a reaction: the hump is the activation energy and its peak the transition state. ' +
            'The difference between reactants and products is ΔH, below zero for exothermic. ' +
            'A catalyst lowers the hump without moving the ends, so it speeds the reaction without changing ΔH.',
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
        id: 'chem-endothermic-examples',
        subject: 'chemistry',
        question: 'What are everyday examples of exothermic and endothermic processes?',
        aliases: ['exothermic examples', 'endothermic examples', 'cold pack', 'hand warmer', 'photosynthesis energy'],
        answer:
            'Exothermic: combustion, respiration, neutralisation and the setting of concrete, all releasing heat. ' +
            'Endothermic: photosynthesis, thermal decomposition, dissolving ammonium nitrate in an instant cold pack, ' +
            'and evaporation, which is why sweat cools you.',
    },
    {
        id: 'chem-spontaneity',
        subject: 'chemistry',
        question: 'What makes a reaction spontaneous?',
        aliases: ['spontaneity', 'when is a reaction spontaneous', 'temperature dependence spontaneity', 'enthalpy entropy balance'],
        answer:
            'A negative ΔG. Since ΔG = ΔH − TΔS, a reaction that releases heat and increases disorder is spontaneous ' +
            'at every temperature. ' +
            'If the two terms oppose each other, temperature decides: high temperature favours the entropy term.',
    },
    {
        id: 'chem-energy-unit-conversion',
        subject: 'chemistry',
        question: 'How do I convert between joules and kilojoules per mole?',
        aliases: ['kilojoules per mole', 'converting energy units', 'joules to kilojoules'],
        answer:
            'Divide joules by 1000 for kilojoules, then divide by the moles involved for a value per mole. ' +
            'Calorimetry gives joules for the actual sample, so the division by moles is what turns a measurement into ' +
            'a molar enthalpy that can be compared with data.',
    },
    {
        id: 'chem-thermochemical-equations',
        subject: 'chemistry',
        question: 'How do I write a thermochemical equation?',
        aliases: ['thermochemical equation', 'sign of delta h', 'per mole of which substance'],
        answer:
            'Write the balanced equation with states, then give ΔH after it, negative for exothermic. ' +
            'The value belongs to those exact coefficients, so doubling the equation doubles ΔH, and reversing it ' +
            'changes the sign.',
    },
    {
        id: 'chem-heat-calculation',
        subject: 'chemistry',
        question: 'How do I use q = mcΔT?',
        aliases: ['q = mcdeltat', 'heat energy calculation', 'specific heat calculation'],
        answer:
            'q is the heat in joules, m the mass of the solution in grams, c its specific heat capacity, 4.18 J g⁻¹ K⁻¹ ' +
            'for water, and ΔT the temperature change. ' +
            'Use the mass of the solution being heated, not the mass of the reactant dissolved in it.',
    },
    {
        id: 'chem-bond-breaking-making',
        subject: 'chemistry',
        question: 'Why is bond breaking endothermic and bond making exothermic?',
        aliases: ['bond breaking endothermic', 'bond making exothermic', 'energy of bonds'],
        answer:
            'Breaking a bond needs energy to overcome the attraction holding the atoms together; forming one releases ' +
            'it. A reaction is exothermic overall when the bonds made are stronger than the bonds broken.',
    },
    {
        id: 'chem-activation-energy-meaning',
        subject: 'chemistry',
        question: 'What is activation energy?',
        aliases: ['activation energy', 'energy barrier', 'why reactions need a push'],
        answer:
            'The minimum energy a collision needs for the reaction to proceed, corresponding to the peak of the ' +
            'energy profile. It is why a mixture can be thermodynamically favourable yet sit unreacted until it is ' +
            'heated or catalysed.',
    },
    {
        id: 'chem-enthalpy-vs-temperature',
        subject: 'chemistry',
        question: 'What is the difference between enthalpy change and temperature change?',
        aliases: ['enthalpy versus temperature change', 'why delta h is per mole', 'temperature rise in a calorimeter'],
        answer:
            'The temperature change is what you measure; the enthalpy change is the energy per mole that caused it. ' +
            'The same reaction in a larger volume of water gives a smaller temperature rise but the same enthalpy ' +
            'change.',
    },
    {
        id: 'chem-calorimetry-errors',
        subject: 'chemistry',
        question: 'What errors affect a calorimetry result?',
        aliases: ['calorimetry errors', 'heat lost to surroundings', 'why measured enthalpy is low'],
        answer:
            'Heat escaping to the surroundings and absorbed by the container, incomplete reaction, and evaporation. ' +
            'These usually make the measured energy release too small, which is why a result below the accepted value ' +
            'is the common outcome.',
    },
    {
        id: 'chem-standard-enthalpy-formation',
        subject: 'chemistry',
        question: 'What is the standard enthalpy of formation?',
        aliases: ['enthalpy of formation', 'formation from elements', 'why elements are zero'],
        answer:
            'The enthalpy change when one mole of a compound forms from its elements in their standard states. An ' +
            'element in its standard state is defined as zero, which is what lets Hess law calculations use a table ' +
            'of them.',
    },
    {
        id: 'chem-entropy-predictions',
        subject: 'chemistry',
        question: 'How do I predict whether entropy increases?',
        aliases: ['predicting entropy change', 'more particles more entropy', 'gas produced entropy'],
        answer:
            'Entropy rises when a solid becomes a liquid or gas, when a gas is produced, when a solid dissolves, and ' +
            'when fewer particles become more. It falls when gases combine into fewer molecules or a solid ' +
            'precipitates.',
    },
    {
        id: 'chem-gibbs-temperature-dependence',
        subject: 'chemistry',
        question: 'How does temperature decide spontaneity?',
        aliases: ['temperature and spontaneity', 'when does a reaction become spontaneous', 'crossover temperature'],
        answer:
            'When ΔH and ΔS have the same sign they oppose each other in ΔG = ΔH − TΔS, so there is a temperature at ' +
            'which the sign of ΔG flips. Setting ΔG to zero and solving gives that crossover temperature.',
    },
    {
        id: 'chem-energy-profile-catalyst',
        subject: 'chemistry',
        question: 'How does a catalyst change the energy profile?',
        aliases: ['catalyst on an energy profile', 'lower activation energy graph', 'unchanged enthalpy with a catalyst'],
        answer:
            'It lowers the peak, so less energy is needed to react, but the levels of the reactants and products are ' +
            'unchanged, so ΔH is the same. A graph showing a catalyst changing ΔH is wrong.',
    },
    {
        id: 'chem-fuel-energy-comparison',
        subject: 'chemistry',
        question: 'Is energy per gram or per mole the right basis for a fuel?',
        aliases: ['energy content of a fuel', 'energy per gram'],
        answer:
            'Divide the heat of combustion by the molar mass for energy per gram, which is what matters for ' +
            'transport, or use it per mole for a chemical comparison. State which basis you used, since the ranking ' +
            'can differ between them.',
    },
];
