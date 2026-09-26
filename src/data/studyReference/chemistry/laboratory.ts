/**
 * Chemistry: the apparatus and the words used around it.
 *
 * What each piece of equipment is for and what the terms in a method mean,
 * since a procedure cannot be followed without them.
 */
import type { StudyEntry } from '../types';

export const chemistryLaboratoryEntries: StudyEntry[] = [
    {
        id: 'chem-filtrate',
        subject: 'chemistry',
        question: 'What is a filtrate?',
        aliases: ['filtrate', 'liquid that passes through the filter'],
        answer:
            'The liquid that passes through the filter paper, carrying anything dissolved in it. If the substance you ' +
            'want is dissolved, the filtrate is what you keep; if it is the solid, the filtrate is waste.',
    },
    {
        id: 'chem-residue',
        subject: 'chemistry',
        question: 'What is a residue?',
        aliases: ['residue', 'solid left on the filter paper'],
        answer:
            'The solid left behind on the filter paper. It should be washed with a little distilled water to remove ' +
            'soluble ions clinging to it, then dried to constant mass if it is to be weighed.',
    },
    {
        id: 'chem-decanting',
        subject: 'chemistry',
        question: 'What is decanting?',
        aliases: ['decanting', 'pouring off the liquid', 'separating by pouring'],
        answer:
            'Carefully pouring the liquid off a settled solid, leaving the sediment behind. It is quicker than ' +
            'filtering but never as complete, so it suits a rough separation or a first step before filtration.',
    },
    {
        id: 'chem-meniscus',
        subject: 'chemistry',
        question: 'What is a meniscus and how do I read it?',
        aliases: ['meniscus', 'reading a burette', 'curved surface of a liquid'],
        answer:
            'The curved surface a liquid forms in a narrow tube. For water and most solutions it curves down, so read ' +
            'the bottom of the curve at eye level. Reading from above gives a value that is too high, which is a ' +
            'systematic error.',
    },
    {
        id: 'chem-effervescence',
        subject: 'chemistry',
        question: 'What is effervescence?',
        aliases: ['effervescence', 'fizzing', 'bubbling in a reaction'],
        answer:
            'Rapid bubbling as a gas is released from a liquid. In a test it is evidence a gas is being produced, and ' +
            'identifying the gas, by limewater or a splint, is what turns the observation into a conclusion.',
    },
    {
        id: 'chem-supernatant',
        subject: 'chemistry',
        question: 'What is a supernatant?',
        aliases: ['supernatant', 'liquid above a settled solid', 'after centrifuging'],
        answer:
            'The clear liquid sitting above a solid that has settled or been spun down in a centrifuge. It can be ' +
            'pipetted off without disturbing the solid, which is why centrifuging suits very fine precipitates that ' +
            'clog filter paper.',
    },
    {
        id: 'chem-deliquescent',
        subject: 'chemistry',
        question: 'What does deliquescent mean?',
        aliases: ['deliquescent', 'absorbs water from the air', 'hygroscopic'],
        answer:
            'A substance that absorbs so much water vapour from the air that it dissolves into a solution. Sodium ' +
            'hydroxide pellets do this, which is why they cannot be weighed accurately in the open and are unsuitable ' +
            'as a primary standard.',
    },
    {
        id: 'chem-anhydrous',
        subject: 'chemistry',
        question: 'What does anhydrous mean?',
        aliases: ['anhydrous', 'without water', 'dried salt'],
        answer:
            'Containing no water. An anhydrous salt has lost its water of crystallisation, usually by heating to ' +
            'constant mass, and the mass difference is what allows the formula of the hydrate to be worked out.',
    },
    {
        id: 'chem-desiccator',
        subject: 'chemistry',
        question: 'What are a desiccator and a desiccant?',
        aliases: ['desiccator', 'desiccant', 'drying agent', 'keeping a sample dry'],
        answer:
            'A desiccator is a sealed container holding a desiccant, a substance such as silica gel that absorbs ' +
            'moisture. A heated sample is cooled inside one so it does not regain water from the air before being ' +
            'weighed.',
    },
    {
        id: 'chem-pipette-filler',
        subject: 'chemistry',
        question: 'What is a pipette filler for?',
        aliases: ['pipette filler', 'pipette bulb', 'why not to use your mouth'],
        answer:
            'A bulb or suction device used to draw liquid into a pipette. Nothing in a laboratory is ever drawn up by ' +
            'mouth, however dilute, and the filler also allows the level to be brought precisely to the calibration ' +
            'mark.',
    },
    {
        id: 'chem-crucible',
        subject: 'chemistry',
        question: 'What is a crucible used for?',
        aliases: ['crucible', 'strong heating container', 'ceramic dish for heating'],
        answer:
            'A small ceramic dish for heating solids to high temperature, as when driving water from a hydrated salt ' +
            'or igniting a precipitate. It is handled with tongs and cooled in a desiccator before weighing.',
    },
    {
        id: 'chem-bunsen-flame',
        subject: 'chemistry',
        question: 'What is the difference between the blue and yellow Bunsen flame?',
        aliases: ['bunsen burner flame', 'blue flame versus yellow flame', 'air hole on a bunsen'],
        answer:
            'With the air hole open the flame is blue and roughly 1,500 °C, with the hottest point just above the ' +
            'inner cone. Closed, it burns yellow, cooler and sooty, which is the safety flame and is what deposits ' +
            'carbon on glassware.',
    },
    {
        id: 'chem-wash-bottle',
        subject: 'chemistry',
        question: 'What is a wash bottle for?',
        aliases: ['wash bottle', 'rinsing with distilled water', 'transferring rinsings'],
        answer:
            'It delivers a controlled stream of distilled water for rinsing residue from glassware into the vessel ' +
            'you want it in. Those rinsings matter: leaving them behind loses part of the sample and lowers the ' +
            'result.',
    },
    {
        id: 'chem-spatula',
        subject: 'chemistry',
        question: 'What is a spatula used for?',
        aliases: ['spatula', 'transferring a solid', 'scooping a powder'],
        answer:
            'Transferring small amounts of solid without contaminating the stock bottle. Use a clean dry one for each ' +
            'substance, and never return unused solid to the bottle, since it may already be contaminated.',
    },
    {
        id: 'chem-reading-solubility-curve',
        subject: 'chemistry',
        question: 'How do I read a solubility curve?',
        aliases: ['reading a solubility curve', 'solubility graph', 'how much dissolves at a temperature'],
        answer:
            'Read the mass that dissolves per 100 g of water at that temperature. A point on the line is a saturated ' +
            'solution, below it unsaturated, and above it supersaturated. Cooling from one point to another gives the ' +
            'mass that must crystallise out.',
    },
    {
        id: 'chem-data-sheet',
        subject: 'chemistry',
        question: 'What is on the chemistry data sheet?',
        aliases: ['chemistry data sheet', 'chemistry formula sheet', 'periodic table in the exam'],
        answer:
            'A periodic table, a table of standard potentials, solubility and constant values, and the standard ' +
            'formulas. Knowing where each sits saves time, and the potentials table in particular is faster to use ' +
            'than to recall. NESA publishes the current version.',
    },
];
