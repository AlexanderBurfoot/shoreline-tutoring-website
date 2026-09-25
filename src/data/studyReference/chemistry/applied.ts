/**
 * Chemistry: industrial processes and applied chemistry.
 *
 * How the major processes are run, and the chemistry of water, air and the
 * choices behind an analytical method.
 */
import type { StudyEntry } from '../types';

export const chemistryAppliedEntries: StudyEntry[] = [
    {
        id: 'chem-haber-conditions',
        subject: 'chemistry',
        question: 'Why are the Haber process conditions a compromise?',
        aliases: ['haber process conditions', 'ammonia synthesis compromise', 'why not lower temperature'],
        answer:
            'The forward reaction is exothermic, so a low temperature favours yield but makes the rate impractically ' +
            'slow. About 400 to 500 °C with an iron catalyst and high pressure balances yield against rate and ' +
            'equipment cost.',
    },
    {
        id: 'chem-contact-process',
        subject: 'chemistry',
        question: 'How is sulfuric acid made industrially?',
        aliases: ['contact process', 'sulfuric acid manufacture', 'vanadium catalyst'],
        answer:
            'Sulfur is burned to sulfur dioxide, oxidised to sulfur trioxide over a vanadium catalyst at moderate ' +
            'temperature and pressure, then absorbed into existing acid. Direct absorption into water is avoided ' +
            'because it forms an uncontrollable mist.',
    },
    {
        id: 'chem-industrial-catalysts',
        subject: 'chemistry',
        question: 'Why do industrial processes rely on catalysts?',
        aliases: ['industrial catalysts', 'catalyst saves energy', 'why catalysts matter commercially'],
        answer:
            'A catalyst allows a usable rate at a lower temperature, which cuts energy cost and, for an exothermic ' +
            'equilibrium, protects the yield. That combination is usually the difference between a viable process and ' +
            'a laboratory curiosity.',
    },
    {
        id: 'chem-le-chatelier-industry',
        subject: 'chemistry',
        question: 'How is Le Chatelier principle used in industry?',
        aliases: ['le chatelier in industry', 'removing product to shift equilibrium', 'recycling unreacted gas'],
        answer:
            'Products are removed as they form so the system keeps shifting forward, unreacted material is recycled, ' +
            'and pressure is chosen to favour the side with fewer gas molecules. Each pushes yield without changing ' +
            'the equilibrium constant.',
    },
    {
        id: 'chem-green-chemistry-principles',
        subject: 'chemistry',
        question: 'What makes an industrial process greener?',
        aliases: ['greener industrial process', 'waste reduction in industry', 'renewable feedstock'],
        answer:
            'Higher atom economy, catalytic rather than stoichiometric reagents, safer solvents or none, renewable ' +
            'feedstocks, energy recovered from exothermic steps, and by-products that are saleable rather than waste.',
    },
    {
        id: 'chem-water-treatment',
        subject: 'chemistry',
        question: 'How is drinking water treated?',
        aliases: ['water treatment', 'flocculation', 'chlorination', 'filtration of drinking water'],
        answer:
            'Screening, then coagulation and flocculation to clump fine particles, sedimentation, filtration, and ' +
            'disinfection with chlorine or ultraviolet light. Fluoride and pH adjustment are added last.',
    },
    {
        id: 'chem-hardness-of-water',
        subject: 'chemistry',
        question: 'What makes water hard, and how is it softened?',
        aliases: ['hard water', 'water softening', 'calcium and magnesium ions'],
        answer:
            'Dissolved calcium and magnesium ions, picked up from limestone. They form scale in pipes and scum with ' +
            'soap. Softening removes them by ion exchange, replacing them with sodium, or by precipitating them out.',
    },
    {
        id: 'chem-acid-rain-chemistry',
        subject: 'chemistry',
        question: 'What is the chemistry of acid rain?',
        aliases: ['acid rain chemistry', 'sulfur dioxide to sulfuric acid', 'nitrogen oxides in rain'],
        answer:
            'Sulfur dioxide from burning fossil fuels oxidises and dissolves to give sulfurous and sulfuric acid, and ' +
            'nitrogen oxides formed in hot engines give nitric acid. Unpolluted rain is already mildly acidic from ' +
            'dissolved carbon dioxide.',
    },
    {
        id: 'chem-ozone-chemistry',
        subject: 'chemistry',
        question: 'What is the chemistry of ozone depletion?',
        aliases: ['ozone depletion chemistry', 'chlorine radical catalytic cycle', 'cfc breakdown'],
        answer:
            'Ultraviolet light splits a chlorine atom from a CFC molecule, and that atom destroys an ozone molecule ' +
            'and is regenerated, so it catalyses the destruction of many thousands before it is removed.',
    },
    {
        id: 'chem-carbon-dioxide-and-oceans',
        subject: 'chemistry',
        question: 'What does dissolved carbon dioxide do to the ocean?',
        aliases: ['ocean acidification', 'carbon dioxide in seawater', 'carbonate equilibrium in the ocean'],
        answer:
            'It forms carbonic acid, which lowers the pH and shifts the carbonate equilibrium. Less carbonate is ' +
            'available for shells and coral skeletons, and existing calcium carbonate structures dissolve more ' +
            'readily.',
    },
    {
        id: 'chem-instrumental-vs-chemical',
        subject: 'chemistry',
        question: 'When is an instrumental method better than a chemical test?',
        aliases: ['instrumental versus chemical analysis', 'why use an instrument', 'trace analysis choice'],
        answer:
            'When the amount is tiny, when many samples must be measured consistently, or when a number rather than a ' +
            'yes or no is needed. Chemical tests remain useful for a quick identification with no equipment.',
    },
    {
        id: 'chem-choosing-a-technique-summary',
        subject: 'chemistry',
        question: 'How do I decide which analytical technique a question wants?',
        aliases: ['choosing an analytical technique', 'which instrument for which job', 'matching technique to sample'],
        answer:
            'Metal ions at trace level go to AAS, organic structure to NMR and mass spectrometry, functional groups ' +
            'to infrared, coloured solutions to colorimetry, ion concentration by titration, and an insoluble product ' +
            'by gravimetric analysis.',
    },
    {
        id: 'chem-reporting-analysis-results',
        subject: 'chemistry',
        question: 'How should an analytical result be reported?',
        aliases: ['reporting a result', 'units and uncertainty in a result', 'how to present analysis'],
        answer:
            'With the units, an appropriate number of significant figures, the method used and an estimate of ' +
            'uncertainty, and a note of any dilution factor applied. A bare number cannot be checked or compared.',
    },
];
