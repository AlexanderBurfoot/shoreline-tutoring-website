/**
 * The mistakes that cost the most marks, by subject.
 *
 * Each names the specific error rather than advising care in general, so a
 * student can check their own work against it.
 */
import type { StudyEntry } from './types';

export const commonMistakeEntries: StudyEntry[] = [
    {
        id: 'chem-mistakes-moles',
        subject: 'chemistry',
        question: 'What mistakes do students make in mole calculations?',
        aliases: ['common mistakes with moles', 'mole calculation errors', 'volume in millilitres mistake'],
        answer:
            'Leaving a volume in millilitres when n = cV needs litres. Using the molar mass of the wrong substance. ' +
            'Ignoring the mole ratio from the equation. And rounding early, which shifts the final figure more than ' +
            'students expect.',
    },
    {
        id: 'chem-mistakes-titration',
        subject: 'chemistry',
        question: 'What mistakes do students make in titration calculations?',
        aliases: ['common mistakes in titration', 'titration calculation errors', 'averaging all the titres'],
        answer:
            'Averaging every titre including the rough one, rather than only the concordant results. Forgetting the ' +
            'mole ratio when the acid is diprotic. And dividing by the burette volume rather than the aliquot volume ' +
            'when finding the unknown concentration.',
    },
    {
        id: 'chem-mistakes-equilibrium',
        subject: 'chemistry',
        question: 'What mistakes do students make with equilibrium?',
        aliases: ['common mistakes with equilibrium', 'equilibrium errors', 'saying the rate stops'],
        answer:
            'Saying the reaction stops at equilibrium, when both directions continue at equal rates. Claiming a ' +
            'catalyst changes the yield. Saying a shift changes the value of K, when only temperature does. And ' +
            'omitting the coefficient as a power in the expression.',
    },
    {
        id: 'chem-mistakes-organic',
        subject: 'chemistry',
        question: 'What mistakes do students make in organic chemistry?',
        aliases: ['common mistakes in organic chemistry', 'iupac naming errors', 'numbering from the wrong end'],
        answer:
            'Numbering the chain from the end that gives higher locants. Missing the longest chain because the ' +
            'diagram is drawn bent. Forgetting that an alkene needs the position of the double bond in its name. And ' +
            'drawing a carbon with five bonds.',
    },
    {
        id: 'phys-mistakes-units',
        subject: 'physics',
        question: 'What mistakes do students make with units in physics?',
        aliases: ['common mistakes with units in physics', 'prefix errors', 'forgetting to convert to kelvin'],
        answer:
            'Substituting kilometres or grams into a formula expecting metres and kilograms. Leaving temperature in ' +
            'Celsius where the gas laws need kelvin. Mishandling prefixes such as nano and mega. And omitting the ' +
            'unit from the final answer.',
    },
    {
        id: 'phys-mistakes-vectors',
        subject: 'physics',
        question: 'What mistakes do students make with vectors?',
        aliases: ['common mistakes with vectors', 'vector errors', 'adding magnitudes instead of vectors'],
        answer:
            'Adding magnitudes when the directions differ. Forgetting that a change in velocity has direction, so a ' +
            'ball rebounding at the same speed has changed velocity. And resolving with sine where cosine was needed, ' +
            'which a quick sketch prevents.',
    },
    {
        id: 'phys-mistakes-graphs',
        subject: 'physics',
        question: 'What mistakes do students make reading physics graphs?',
        aliases: ['common mistakes with physics graphs', 'graph reading errors', 'confusing gradient and area'],
        answer:
            'Confusing the gradient with the area: on a velocity-time graph the gradient is acceleration and the area ' +
            'is displacement. Taking a tangent over too small a range. And ignoring that area below the axis counts ' +
            'as negative.',
    },
    {
        id: 'phys-mistakes-forces',
        subject: 'physics',
        question: 'What mistakes do students make with forces?',
        aliases: ['common mistakes with forces', 'force diagram errors', 'including forces the object exerts'],
        answer:
            'Drawing forces the object exerts on other things rather than on it. Treating the centripetal force as an ' +
            'extra force instead of the name for whichever real force points inward. And assuming the normal force ' +
            'always equals the weight.',
    },
    {
        id: 'bio-mistakes-terminology',
        subject: 'biology',
        question: 'What mistakes do students make with biology terminology?',
        aliases: ['common mistakes in biology terminology', 'biology wording errors', 'using everyday words in biology'],
        answer:
            'Using everyday words where the term is specific: breathing for respiration, gene for allele, or theory ' +
            'for guess. Writing that an organism wants or tries to adapt, which implies intention that natural ' +
            'selection does not involve.',
    },
    {
        id: 'bio-mistakes-genetics',
        subject: 'biology',
        question: 'What mistakes do students make in genetics questions?',
        aliases: ['common mistakes in genetics', 'punnett square errors', 'genotype and phenotype ratio confusion'],
        answer:
            'Giving the genotype ratio when the phenotype ratio was asked for, or the reverse. Using the same letter ' +
            'in different cases carelessly, so Bb and bB are treated as different. And forgetting that a ratio is ' +
            'expected rather than a probability out of four.',
    },
    {
        id: 'eng-mistakes-essays',
        subject: 'english',
        question: 'What mistakes do students make in English essays?',
        aliases: ['common mistakes in an english essay', 'essay errors', 'retelling the plot'],
        answer:
            'Retelling the plot instead of arguing. Naming techniques without saying what they do. Ignoring part of ' +
            'the question. Writing about only one text when two were required. And introducing a new idea in the ' +
            'conclusion rather than resolving the argument.',
    },
    {
        id: 'eng-mistakes-quoting',
        subject: 'english',
        question: 'What mistakes do students make when quoting?',
        aliases: ['common mistakes when quoting', 'quotation errors', 'quotes that are too long'],
        answer:
            'Quoting whole sentences where a phrase would do, which spends words on the text rather than the ' +
            'analysis. Dropping a quotation in without grammar that fits. Misquoting slightly, which undermines any ' +
            'claim about word choice. And failing to name the technique in the quotation.',
    },
    {
        id: 'eng-mistakes-creative',
        subject: 'english',
        question: 'What mistakes do students make in creative writing?',
        aliases: ['common mistakes in creative writing', 'creative writing errors', 'too many characters'],
        answer:
            'Too many characters and too much time covered for the length. Opening with waking up or the weather. ' +
            'Telling the reader the emotion instead of showing it. And an ending that reveals it was a dream, which ' +
            'discards everything the piece built.',
    },
    {
        id: 'econ-mistakes-diagrams',
        subject: 'economics',
        question: 'What mistakes do students make with economics diagrams?',
        aliases: ['common mistakes with economics diagrams', 'diagram errors in economics', 'shifting both curves'],
        answer:
            'Shifting both curves when only one cause was given. Confusing a movement along a curve with a shift of ' +
            'it. Leaving axes and curves unlabelled. And drawing the diagram without referring to it in the writing, ' +
            'which earns nothing.',
    },
    {
        id: 'econ-mistakes-essays',
        subject: 'economics',
        question: 'What mistakes do students make in economics essays?',
        aliases: ['common mistakes in an economics essay', 'economics essay errors', 'describing instead of analysing'],
        answer:
            'Describing a policy rather than analysing its effect. Quoting statistics with no period attached. ' +
            'Ignoring the trade-off, since every policy has a cost somewhere. And using terms such as inflation ' +
            'loosely when the question turns on the precise meaning.',
    },
    {
        id: 'bus-mistakes-answers',
        subject: 'business-studies',
        question: 'What mistakes do students make in business studies answers?',
        aliases: ['common mistakes in business studies', 'business studies answer errors', 'no case study example'],
        answer:
            'Answering without a business example, when the syllabus expects one. Listing strategies rather than ' +
            'assessing them. Confusing the four functions, so a marketing answer drifts into operations. And ignoring ' +
            'the command word, so an assess question receives a description.',
    },
];
