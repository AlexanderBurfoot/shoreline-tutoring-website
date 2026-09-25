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
];
