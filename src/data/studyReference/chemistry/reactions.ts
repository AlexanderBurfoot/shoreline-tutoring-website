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
        aliases: ['acid reactions', 'neutralisation', 'salt'],
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
    {
        id: 'chem-combustion-equations',
        subject: 'chemistry',
        question: 'How do I write a combustion equation?',
        aliases: ['combustion equation', 'burning a hydrocarbon equation', 'balancing combustion'],
        answer:
            'A hydrocarbon burning completely gives carbon dioxide and water. Balance the carbons, then the ' +
            'hydrogens, then the oxygens last, using a half coefficient for oxygen if needed and doubling everything ' +
            'at the end.',
    },
    {
        id: 'chem-acid-metal-carbonate',
        subject: 'chemistry',
        question: 'What do acids react with, and what forms?',
        aliases: ['acid plus metal', 'acid plus carbonate', 'acid plus base products'],
        answer:
            'With a metal, a salt and hydrogen. With a base or metal oxide, a salt and water. With a carbonate, a ' +
            'salt, water and carbon dioxide. In each case the acid anion pairs with the metal cation to form the ' +
            'salt.',
    },
    {
        id: 'chem-neutralisation-equations',
        subject: 'chemistry',
        question: 'How do I write a neutralisation equation?',
        aliases: ['neutralisation equation', 'acid plus base ionic equation', 'h plus and oh minus'],
        answer:
            'Salt plus water, with the net ionic equation reducing to H⁺ + OH⁻ → H₂O for a strong acid and strong ' +
            'base. That is why the enthalpy of neutralisation is nearly the same for any such pair.',
    },
    {
        id: 'chem-displacement-reactions',
        subject: 'chemistry',
        question: 'How do displacement reactions work?',
        aliases: ['more reactive metal displaces', 'halogen displacement'],
        answer:
            'A more reactive element takes the place of a less reactive one in a compound. Zinc displaces copper from ' +
            'copper sulfate; chlorine displaces bromide from bromide solution. The activity series predicts whether a ' +
            'given pair will react.',
    },
    {
        id: 'chem-decomposition-reactions',
        subject: 'chemistry',
        question: 'What is thermal decomposition?',
        aliases: ['thermal decomposition', 'heating a carbonate', 'breaking a compound with heat'],
        answer:
            'One compound breaking into two or more simpler substances on heating, which is endothermic. Metal ' +
            'carbonates give the oxide and carbon dioxide, and hydrated salts lose their water first.',
    },
    {
        id: 'chem-rate-surface-area',
        subject: 'chemistry',
        question: 'Why does surface area change reaction rate?',
        aliases: ['surface area and rate', 'powder reacts faster', 'why lumps react slowly'],
        answer:
            'Reaction happens at the surface, so dividing a solid exposes more of it and multiplies the number of ' +
            'collisions per second. A powder can react dangerously fast where the same mass as a lump reacts slowly.',
    },
    {
        id: 'chem-rate-concentration-pressure',
        subject: 'chemistry',
        question: 'Why do concentration and pressure change rate?',
        aliases: ['concentration and rate', 'pressure and rate of reaction', 'more frequent collisions'],
        answer:
            'Both pack more particles into the same volume, so collisions are more frequent. Neither changes the ' +
            'proportion of collisions that have enough energy, which is what distinguishes them from a temperature ' +
            'rise.',
    },
    {
        id: 'chem-rate-temperature-explanation',
        subject: 'chemistry',
        question: 'Why does a small temperature rise change rate so much?',
        aliases: ['temperature and rate explanation', 'why ten degrees doubles the rate', 'proportion with activation energy'],
        answer:
            'Because raising temperature shifts the whole distribution of particle energies, and the fraction above ' +
            'the activation energy grows sharply. Collisions also become more frequent, but the change in that ' +
            'fraction dominates.',
    },
    {
        id: 'chem-catalyst-types',
        subject: 'chemistry',
        question: 'What kinds of catalyst are there?',
        aliases: ['homogeneous catalyst', 'heterogeneous catalyst', 'enzyme as a catalyst'],
        answer:
            'Homogeneous catalysts are in the same phase as the reactants; heterogeneous ones, such as the metals in ' +
            'a car exhaust, are in a different phase and provide a surface. Enzymes are biological catalysts of ' +
            'extraordinary specificity.',
    },
    {
        id: 'chem-oxidising-reducing-agents',
        subject: 'chemistry',
        question: 'How do I identify the oxidising and reducing agents?',
        aliases: ['oxidising agent', 'reducing agent', 'which species is oxidised'],
        answer:
            'The oxidising agent is reduced, since it takes electrons; the reducing agent is oxidised, since it gives ' +
            'them. Assign oxidation numbers on both sides and see which changed, then name the species rather than ' +
            'the element.',
    },
    {
        id: 'chem-electrochemical-series-use',
        subject: 'chemistry',
        question: 'How do I use the electrode potential table?',
        aliases: ['using the electrode potential table', 'predicting whether a reaction occurs', 'strongest oxidising agent'],
        answer:
            'Species higher on the table are stronger oxidising agents. A reaction is spontaneous when the oxidising ' +
            'agent sits above the reducing agent, which makes the cell potential positive.',
    },
    {
        id: 'chem-galvanic-cell-notation',
        subject: 'chemistry',
        question: 'How is a galvanic cell written down?',
        aliases: ['cell notation', 'anode on the left', 'writing a cell diagram'],
        answer:
            'Anode on the left, cathode on the right, a double line for the salt bridge and single lines for phase ' +
            'boundaries. Oxidation always occurs at the anode, whichever way the cell is drawn.',
    },
    {
        id: 'chem-battery-types',
        subject: 'chemistry',
        question: 'How does a rechargeable cell differ from a dry cell?',
        aliases: ['rechargeable cell', 'dry cell', 'secondary cell chemistry'],
        answer:
            'In a secondary cell the reaction products stay in place and adhere to the electrodes, so applying a ' +
            'voltage drives the reaction backwards. In a primary cell the products disperse or escape, so it cannot ' +
            'be reversed.',
    },
];
