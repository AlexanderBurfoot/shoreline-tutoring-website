/**
 * Chemistry: the distinctions students most often blur.
 *
 * Pairs of terms that sound interchangeable and are not, and the questions that
 * turn on knowing the difference.
 */
import type { StudyEntry } from '../types';

export const chemistryComparisonEntries: StudyEntry[] = [
    {
        id: 'chem-hydrated-ion',
        subject: 'chemistry',
        question: 'What is a hydrated ion?',
        aliases: ['hydrated ion', 'water of hydration around an ion', 'why ions attract water'],
        answer:
            'An ion surrounded by water molecules oriented towards its charge, the negative oxygen end towards a ' +
            'cation and the positive hydrogens towards an anion. That attraction is what releases energy when a salt ' +
            'dissolves, offsetting the energy needed to break the lattice.',
    },
    {
        id: 'chem-graphite-slippery',
        subject: 'chemistry',
        question: 'Why is graphite slippery and diamond hard?',
        aliases: ['why graphite is slippery', 'graphite as a lubricant', 'why diamond is hard'],
        answer:
            'Graphite bonds each carbon to three others in flat sheets held together only by weak forces, so the ' +
            'sheets slide over one another. Diamond bonds each carbon to four in a rigid three-dimensional network ' +
            'with no planes to slide.',
    },
    {
        id: 'chem-colloid',
        subject: 'chemistry',
        question: 'What is a colloid?',
        aliases: ['colloid', 'emulsion', 'milk as a mixture', 'tyndall effect'],
        answer:
            'A mixture whose particles are too large to be dissolved but too small to settle, so it looks uniform yet ' +
            'scatters light. Milk and fog are colloids, and the scattering is how you tell one from a true solution.',
    },
    {
        id: 'chem-water-solvent',
        subject: 'chemistry',
        question: 'Why is water such a good solvent?',
        aliases: ['why water dissolves so much', 'water as a solvent', 'universal solvent'],
        answer:
            'Its molecules are polar, so they surround and separate ions and other polar molecules, and hydrogen ' +
            'bonding lets them stabilise what they surround. Non-polar substances such as oils have nothing for water ' +
            'to attract, so they do not dissolve.',
    },
    {
        id: 'chem-autoionisation',
        subject: 'chemistry',
        question: 'What is the autoionisation of water?',
        aliases: ['autoionisation of water', 'why pure water conducts slightly'],
        answer:
            'A very small fraction of water molecules transfer a proton to each other, giving equal tiny ' +
            'concentrations of H⁺ and OH⁻, each 1.0 × 10⁻⁷ mol L⁻¹ at 25 °C. It is why pure water conducts slightly ' +
            'and why pH 7 is neutral at that temperature rather than at every temperature.',
    },
    {
        id: 'chem-reforming',
        subject: 'chemistry',
        question: 'What is reforming in petrochemistry?',
        aliases: ['reforming', 'catalytic reforming', 'rearranging hydrocarbons'],
        answer:
            'Rearranging hydrocarbon molecules over a catalyst into more useful shapes, typically turning straight ' +
            'chains into branched or cyclic ones that burn more smoothly in an engine. Cracking breaks long chains ' +
            'into shorter ones; reforming keeps the size and changes the structure.',
    },
    {
        id: 'chem-oxidising-alcohols-classes',
        subject: 'chemistry',
        question: 'What happens when each class of alcohol is oxidised?',
        aliases: ['oxidising a secondary alcohol', 'oxidation of alcohol classes', 'why tertiary alcohols resist oxidation'],
        answer:
            'A primary alcohol oxidises to an aldehyde and then a carboxylic acid; a secondary alcohol oxidises to a ' +
            'ketone and stops there; a tertiary alcohol resists oxidation, because the carbon bearing the OH has no ' +
            'hydrogen left to remove.',
    },
    {
        id: 'chem-thermoplastic-versus-thermoset',
        subject: 'chemistry',
        question: 'What is the difference between a thermoplastic and a thermoset?',
        aliases: ['thermoplastic versus thermoset', 'why some plastics cannot be remelted', 'cross linked plastic'],
        answer:
            'A thermoplastic has separate chains held by intermolecular forces, so heating lets them slide and it can ' +
            'be remoulded and recycled. A thermoset is cross-linked into a single network, so heating decomposes it ' +
            'instead of softening it.',
    },
    {
        id: 'chem-vulcanisation',
        subject: 'chemistry',
        question: 'What is vulcanisation?',
        aliases: ['vulcanisation', 'sulfur cross links in rubber', 'hardening rubber'],
        answer:
            'Heating rubber with sulfur so short sulfur bridges cross-link the polymer chains. The chains can no ' +
            'longer slide past one another freely, so the rubber becomes harder, stronger and far less sensitive to ' +
            'temperature, which is what made tyres practical.',
    },
    {
        id: 'chem-spectroscopic-fingerprint',
        subject: 'chemistry',
        question: 'Why is a spectrum called a fingerprint?',
        aliases: ['spectroscopic fingerprint', 'why a spectrum identifies a substance', 'unique absorption pattern'],
        answer:
            'Because the pattern of wavelengths a substance absorbs or emits depends on its own energy levels and ' +
            'bonds, so no two different substances give the same pattern. Matching an unknown spectrum against ' +
            'reference spectra identifies it without any chemical test.',
    },
];
