/**
 * Answers to questions students ask that sit outside the current NSW syllabuses.
 *
 * Some were in earlier versions of a course, some come from textbooks or older
 * resources, and some are simply asked out of interest. Each says where it
 * stands, so a student can tell whether it is examinable before spending time
 * on it. They are kept in one file so that boundary stays visible.
 */
import type { StudyEntry } from './types';

export const beyondSyllabusEntries: StudyEntry[] = [
    {
        id: 'phys-semiconductors',
        subject: 'physics',
        question: 'What is a semiconductor?',
        aliases: ['semiconductor', 'doping', 'n type and p type', 'silicon doping'],
        answer:
            'A material such as silicon whose conductivity sits between a conductor and an insulator and rises with ' +
            'temperature. Doping with a group 15 element adds free electrons for n-type, and with group 13 leaves ' +
            'holes for p-type. This sat in the older NSW physics course rather than the current one.',
    },
    {
        id: 'phys-capacitor-time-constant',
        subject: 'physics',
        question: 'What is the time constant of a capacitor circuit?',
        aliases: ['time constant', 'rc circuit', 'charging a capacitor'],
        answer:
            'τ = RC, the time for the charge to reach about 63% of its final value, or to fall to 37% when ' +
            'discharging. After roughly five time constants the process is effectively complete. It is beyond the ' +
            'current NSW physics syllabus but common in electronics.',
    },
    {
        id: 'phys-uncertainty-principle',
        subject: 'physics',
        question: 'What is the Heisenberg uncertainty principle?',
        aliases: ['heisenberg uncertainty principle', 'uncertainty principle', 'position and momentum limit'],
        answer:
            'Position and momentum cannot both be known precisely: the more exactly one is fixed, the less exactly ' +
            'the other can be. It is a property of the particle rather than a limit of the instrument, and it is not ' +
            'examinable in the current NSW physics course.',
    },
    {
        id: 'chem-electrolysis',
        subject: 'chemistry',
        question: 'How does electrolysis work?',
        aliases: ['electrolysis', 'electrolytic cell', 'driving a reaction with electricity'],
        answer:
            'An external voltage drives a redox reaction that would not happen on its own. Oxidation still occurs at ' +
            'the anode and reduction at the cathode, but the cathode is now the negative electrode, which is the ' +
            'reverse of a galvanic cell. It was in the older NSW chemistry course.',
    },
    {
        id: 'chem-corrosion',
        subject: 'chemistry',
        question: 'What causes corrosion, and how is it prevented?',
        aliases: ['corrosion', 'rusting', 'galvanising', 'sacrificial anode', 'cathodic protection'],
        answer:
            'Rusting needs both water and oxygen, and salt speeds it by carrying current. Prevention works by ' +
            'excluding them with paint or oil, or electrically: galvanising and attaching a more reactive metal give ' +
            'a sacrificial anode that corrodes instead. This sat in the older NSW course.',
    },
    {
        id: 'chem-raoults-law',
        subject: 'chemistry',
        question: 'What is Raoult law?',
        aliases: ['raoults law', 'partial vapour pressure', 'ideal solution vapour pressure'],
        answer:
            'In an ideal solution each component contributes vapour pressure in proportion to its mole fraction, so ' +
            'the partial pressure is the mole fraction times the pure vapour pressure. It explains why a solute ' +
            'lowers a solvent vapour pressure, and it is beyond the NSW syllabus.',
    },
    {
        id: 'chem-molality',
        subject: 'chemistry',
        question: 'What is the difference between molarity and molality?',
        aliases: ['molality', 'molarity versus molality', 'moles per kilogram'],
        answer:
            'Molarity is moles per litre of solution; molality is moles per kilogram of solvent. Molality does not ' +
            'change with temperature, since mass does not expand, which is why it is used for boiling point and ' +
            'freezing point work. NSW uses molarity throughout.',
    },
    {
        id: 'maths-simpsons-rule',
        subject: 'mathematics',
        question: 'What is Simpson rule?',
        aliases: ['simpsons rule', 'parabolic rule', 'approximating area with parabolas'],
        answer:
            'An area approximation fitting parabolas through successive triples of points: (h/3) times the sum of the ' +
            'first and last values, four times each odd value and twice each even one. It needs an even number of ' +
            'intervals and is more accurate than the trapezoidal rule, which is what NSW now uses.',
    },
    {
        id: 'maths-taylor-series',
        subject: 'mathematics',
        question: 'What is a Taylor series?',
        aliases: ['taylor series', 'maclaurin series', 'polynomial approximation of a function'],
        answer:
            'A way of writing a function as an infinite polynomial built from its derivatives at one point, so each ' +
            'extra term improves the approximation near that point. It underlies the small angle approximation and is ' +
            'beyond Extension 2.',
    },
    {
        id: 'maths-residuals',
        subject: 'mathematics',
        question: 'What is a residual?',
        aliases: ['residual', 'residual plot', 'observed minus predicted'],
        answer:
            'The difference between an observed value and the value a line of best fit predicts, so a positive ' +
            'residual sits above the line. A residual plot showing a pattern rather than random scatter means a ' +
            'straight line was the wrong model. NSW stops at correlation and the least-squares line.',
    },
    {
        id: 'bio-chemiosmosis',
        subject: 'biology',
        question: 'What is chemiosmosis?',
        aliases: ['chemiosmosis', 'proton gradient', 'atp synthase'],
        answer:
            'The mechanism that actually makes most ATP: the electron transport chain pumps protons across the inner ' +
            'mitochondrial membrane, and they flow back through ATP synthase, whose rotation drives the synthesis. ' +
            'NSW treats respiration at overview level, so this is background rather than examinable.',
    },
    {
        id: 'bio-lac-operon',
        subject: 'biology',
        question: 'What is the lac operon?',
        aliases: ['lac operon', 'lactose operon', 'inducible gene control'],
        answer:
            'A cluster of bacterial genes for using lactose, controlled together. Without lactose a repressor blocks ' +
            'transcription; lactose binds the repressor and releases it, so the genes are expressed only when the ' +
            'sugar is present. It is the standard illustration of gene control rather than NSW content.',
    },
    {
        id: 'econ-j-curve',
        subject: 'economics',
        question: 'What is the J curve effect?',
        aliases: ['j curve', 'j curve effect', 'depreciation and the trade balance'],
        answer:
            'After a depreciation the trade balance usually worsens before it improves, because contracted import ' +
            'prices rise immediately while export volumes take time to respond. Plotted over time the path looks like ' +
            'a J. It is beyond the NSW syllabus but useful for explaining exchange rate effects.',
    },
    {
        id: 'econ-marshall-lerner',
        subject: 'economics',
        question: 'What is the Marshall-Lerner condition?',
        aliases: ['marshall lerner condition', 'elasticity and depreciation', 'when depreciation improves trade'],
        answer:
            'A depreciation improves the trade balance only if the export and import demand elasticities together ' +
            'exceed one. If demand on both sides is inelastic, the dearer imports outweigh the extra export volume. ' +
            'It is beyond the NSW syllabus.',
    },
    {
        id: 'bus-porter-five-forces',
        subject: 'business-studies',
        question: 'What is Porter five forces?',
        aliases: ['porter five forces', 'five forces analysis', 'industry competitiveness framework'],
        answer:
            'A framework for judging how profitable an industry can be: rivalry among existing firms, the threat of ' +
            'new entrants, the threat of substitutes, and the bargaining power of buyers and of suppliers. It is ' +
            'widely taught but not part of the NSW Business Studies syllabus.',
    },
    {
        id: 'bus-ebit',
        subject: 'business-studies',
        question: 'What is EBIT?',
        aliases: ['ebit', 'earnings before interest and tax', 'operating profit'],
        answer:
            'Earnings before interest and tax, which measures how well the operations perform before the effects of ' +
            'how the business is financed and taxed. It lets two firms be compared on trading performance alone. NSW ' +
            'Business Studies uses gross and net profit instead.',
    },
    {
        id: 'bus-goodwill',
        subject: 'business-studies',
        question: 'What is goodwill?',
        aliases: ['goodwill', 'intangible asset', 'paying more than the assets are worth'],
        answer:
            'The amount a buyer pays above the value of the identifiable assets, representing reputation, customer ' +
            'base, location and staff. It appears on the balance sheet only when a business is bought, which is why a ' +
            'strong reputation built up over years is invisible until then.',
    },
    {
        id: 'maths-logarithmic-scales',
        subject: 'mathematics',
        question: 'Why do some scales use logarithms?',
        aliases: ['logarithmic scale', 'why ph and decibels are logarithmic', 'richter scale'],
        answer:
            'Because the quantity spans an enormous range. pH, decibels and the Richter scale each compress factors ' +
            'of ten into single steps, so one unit is ten times, and a magnitude 6 earthquake releases about thirty ' +
            'times the energy of a magnitude 5 rather than a fifth more.',
    },
    {
        id: 'maths-p-value',
        subject: 'mathematics',
        question: 'What is a p value?',
        aliases: ['p value', 'statistical significance meaning', 'probability of chance result'],
        answer:
            'The probability of seeing a result at least as extreme as the one observed if there were really no ' +
            'effect. A small p value means chance is an unlikely explanation, not that the effect is large or ' +
            'important. It is beyond the NSW syllabus but appears in any research article.',
    },
    {
        id: 'maths-confidence-interval',
        subject: 'mathematics',
        question: 'What is a confidence interval?',
        aliases: ['confidence interval', 'margin of error', 'plus or minus in a poll'],
        answer:
            'A range that would contain the true value in a stated proportion of repeated samples, usually 95%. A ' +
            'poll reported as 52% with a margin of error of 3 points means the true figure is probably between 49 and ' +
            '55, which is why a two point lead is not a lead.',
    },
    {
        id: 'maths-standard-error',
        subject: 'mathematics',
        question: 'What is the difference between standard deviation and standard error?',
        aliases: ['standard error', 'standard deviation versus standard error', 'error of the mean'],
        answer:
            'Standard deviation describes the spread of the individual values. Standard error describes how precisely ' +
            'the mean has been estimated, and it shrinks as the sample grows. Error bars can show either, so a graph ' +
            'should say which.',
    },
    {
        id: 'bio-theory-versus-law',
        subject: 'biology',
        question: 'What is the difference between a hypothesis, a theory and a law?',
        aliases: ['theory versus law', 'is a theory just a guess', 'scientific theory meaning'],
        answer:
            'A hypothesis is a testable proposed explanation. A theory is an explanation supported by a large body of ' +
            'evidence, which is the strongest status an explanation reaches. A law describes a consistent ' +
            'relationship without explaining why. Calling something only a theory misunderstands the word.',
    },
];
