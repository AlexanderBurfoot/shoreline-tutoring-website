/**
 * Biology: the standard investigations, and how each is run.
 *
 * Method, controls and the ethical or safety consideration that belongs with it.
 */
import type { StudyEntry } from '../types';

export const biologyPracticalInvestigationEntries: StudyEntry[] = [
    {
        id: 'bio-prac-wet-mount',
        subject: 'biology',
        question: 'How do I prepare a wet mount slide?',
        aliases: ['wet mount practical', 'preparing a slide', 'microscope slide preparation'],
        answer:
            'Place the specimen in a drop of water on the slide, lower the cover slip at an angle with a mounting ' +
            'needle to exclude air, and blot any excess. Start on low power to find the specimen before focusing ' +
            'higher, and stain if the structures are colourless.',
    },
    {
        id: 'bio-prac-osmosis-potato',
        subject: 'biology',
        question: 'How does the potato osmosis experiment work?',
        aliases: ['osmosis practical', 'potato in sucrose experiment', 'mass change osmosis'],
        answer:
            'Cut identical potato strips, blot and weigh them, leave each in a different sucrose concentration, then ' +
            'blot and reweigh. Percentage change in mass plotted against concentration crosses zero at the ' +
            'concentration matching the cell contents, which is the point of the experiment.',
    },
    {
        id: 'bio-prac-enzyme-temperature',
        subject: 'biology',
        question: 'How do I investigate enzyme activity against temperature?',
        aliases: ['enzyme temperature practical', 'catalase experiment', 'enzyme activity investigation'],
        answer:
            'Use catalase with hydrogen peroxide at several temperatures, measuring the oxygen produced in a fixed ' +
            'time or the height of foam. Activity rises to an optimum then falls sharply as the enzyme denatures, and ' +
            'pH, concentration and enzyme source must be held constant.',
    },
    {
        id: 'bio-prac-photosynthesis',
        subject: 'biology',
        question: 'How do I investigate the rate of photosynthesis?',
        aliases: ['photosynthesis practical', 'pondweed experiment', 'light intensity and photosynthesis'],
        answer:
            'Count bubbles or collect gas from pondweed at several distances from a lamp, keeping temperature ' +
            'constant with a heat shield of water. Intensity falls with the square of distance, so plot against one ' +
            'over distance squared rather than distance.',
    },
    {
        id: 'bio-prac-respiration-yeast',
        subject: 'biology',
        question: 'How do I investigate respiration in yeast?',
        aliases: ['yeast respiration practical', 'fermentation experiment', 'measuring carbon dioxide from yeast'],
        answer:
            'Mix yeast with glucose solution and measure the carbon dioxide produced, by gas syringe or by counting ' +
            'bubbles, at several temperatures or sugar concentrations. A boiled yeast control shows the gas is ' +
            'biological rather than physical.',
    },
    {
        id: 'bio-prac-transpiration',
        subject: 'biology',
        question: 'How does a potometer measure transpiration?',
        aliases: ['potometer practical', 'measuring transpiration', 'water uptake experiment'],
        answer:
            'A potometer measures water uptake, which closely follows transpiration, by timing how far a bubble moves ' +
            'along a capillary tube. Vary wind, humidity or light and compare rates. Cut the shoot under water and ' +
            'seal the joint so no air enters.',
    },
    {
        id: 'bio-prac-quadrat',
        subject: 'biology',
        question: 'How do I run a quadrat sampling investigation?',
        aliases: ['quadrat practical', 'sampling with quadrats', 'random quadrat placement'],
        answer:
            'Place quadrats using random coordinates rather than by eye, count or estimate cover in each, take enough ' +
            'samples for the mean to settle, then scale to the whole area. Record abiotic factors alongside, since ' +
            'they usually explain the distribution found.',
    },
    {
        id: 'bio-prac-biomolecule-tests',
        subject: 'biology',
        question: 'What are the food tests for biological molecules?',
        aliases: ['food tests', 'benedicts iodine biuret', 'testing for starch and protein'],
        answer:
            'Iodine turns blue-black with starch. Benedict solution heated with a reducing sugar turns from blue ' +
            'through green to brick red. Biuret reagent turns violet with protein. Each needs a negative control of ' +
            'water to show the colour is caused by the sample.',
    },
    {
        id: 'bio-prac-heart-rate',
        subject: 'biology',
        question: 'How do I investigate heart rate and exercise?',
        aliases: ['heart rate practical', 'exercise and pulse experiment', 'recovery rate investigation'],
        answer:
            'Record resting pulse, then at intervals during and after a set exercise, until it returns to resting. ' +
            'Recovery time is the more interesting measure, since it reflects fitness. Keep the exercise identical ' +
            'and consider ethics and any medical condition first.',
    },
    {
        id: 'bio-prac-aseptic-technique',
        subject: 'biology',
        question: 'What is aseptic technique?',
        aliases: ['aseptic technique', 'sterile technique with bacteria', 'working safely with microbes'],
        answer:
            'Working so that no unwanted microbes enter the culture and nothing escapes: flaming the loop, lifting ' +
            'the lid only briefly and at an angle, sealing but not fully taping the plate, and incubating below body ' +
            'temperature so human pathogens are not favoured.',
    },
    {
        id: 'bio-prac-gel-electrophoresis',
        subject: 'biology',
        question: 'How does a gel electrophoresis practical work?',
        aliases: ['gel electrophoresis practical', 'running a gel', 'dna fragments experiment'],
        answer:
            'Load samples into wells at the negative end, run a current, and the negatively charged DNA moves towards ' +
            'the positive electrode, with smaller fragments travelling further. A ladder of known sizes in one lane ' +
            'lets each band be measured.',
    },
    {
        id: 'bio-prac-depth-study',
        subject: 'biology',
        question: 'What makes a good biology depth study?',
        aliases: ['depth study biology', 'planning a depth study', 'depth study ideas'],
        answer:
            'A question narrow enough to answer with the time and equipment available, one clear variable, enough ' +
            'replicates to show a trend, and a plan for analysis written before the data is collected. ' +
            'Secondary-sourced studies are equally valid when firsthand work is impractical.',
    },
];
