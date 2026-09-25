/**
 * Chemistry Module 3 and 4: reaction types, rates, solubility and redox.
 */
import type { StudyEntry } from '../types';

export const chemistryReactionsEntries: StudyEntry[] = [
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
        id: 'chem-solubility-rules',
        subject: 'chemistry',
        question: 'What are the solubility rules?',
        aliases: ['solubility rules', 'precipitation reaction'],
        answer:
            'All nitrates and Group 1 and ammonium salts dissolve. Most chlorides dissolve except silver and lead. ' +
            'Most sulfates dissolve except barium, lead and calcium. Most carbonates and hydroxides do not dissolve ' +
            'except Group 1 and ammonium. Leave spectator ions out of a net ionic equation.',
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
        id: 'chem-rate-factors',
        subject: 'chemistry',
        question: 'What affects the rate of a reaction?',
        aliases: ['reaction rate', 'rate of reaction'],
        answer:
            'Temperature, concentration or pressure, surface area, and catalysts. ' +
            'Collision theory explains why: reactions need collisions with enough energy and the right orientation, ' +
            'and a catalyst lowers the activation energy without being consumed.',
    },
    {
        id: 'chem-collision-theory',
        subject: 'chemistry',
        question: 'What is collision theory?',
        aliases: ['collision theory', 'successful collision', 'correct orientation'],
        answer:
            'Particles must collide, with at least the activation energy and in a suitable orientation, for a reaction ' +
            'to occur. ' +
            'Most collisions fail on one of those counts, which is why anything that raises the frequency or the energy ' +
            'of collisions raises the rate.',
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
        id: 'chem-rates-measuring',
        subject: 'chemistry',
        question: 'How is reaction rate measured experimentally?',
        aliases: ['measuring rate', 'gas volume collected', 'mass loss experiment', 'disappearing cross', 'rate graph gradient'],
        answer:
            'Follow something that changes: volume of gas collected, mass lost, colour intensity, or the time for a ' +
            'mark to disappear. ' +
            'Plot the quantity against time; the gradient is the rate, steepest at the start and flattening as ' +
            'reactants are used up.',
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
        id: 'chem-everyday-redox',
        subject: 'chemistry',
        question: 'Where does redox appear in everyday life?',
        aliases: ['everyday redox', 'rusting', 'batteries as redox', 'bleaching'],
        answer:
            'Rusting, combustion, respiration, photosynthesis, batteries, bleaching and photography are all electron ' +
            'transfers. ' +
            'Recognising one means identifying which species loses electrons and which gains, which the oxidation ' +
            'numbers make visible.',
    },
    {
        id: 'chem-flame-colour-origin',
        subject: 'chemistry',
        question: 'Why do metal ions give coloured flames?',
        aliases: ['flame colour', 'why sodium is yellow', 'electron excitation in a flame'],
        answer:
            'Heat lifts electrons to higher energy levels, and as they fall back they emit photons of the exact energy ' +
            'difference. ' +
            'Because each element has its own spacing of levels, each gives its own colour: sodium yellow, potassium ' +
            'lilac, copper blue-green.',
    },
];
