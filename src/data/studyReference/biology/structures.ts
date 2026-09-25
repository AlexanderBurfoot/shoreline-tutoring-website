/**
 * Biology: individual structures, named one at a time.
 *
 * The parts of cells, tissues and organs a student meets in a diagram and has
 * to identify on its own.
 */
import type { StudyEntry } from '../types';

export const biologyStructureEntries: StudyEntry[] = [
    {
        id: 'bio-nucleolus',
        subject: 'biology',
        question: 'What is the nucleolus?',
        aliases: ['nucleolus', 'dense region in the nucleus', 'where ribosomes are made'],
        answer:
            'A dense region inside the nucleus where ribosomal components are assembled. Cells making large amounts ' +
            'of protein have prominent nucleoli, which is a clue to their function when read from an electron ' +
            'micrograph.',
    },
    {
        id: 'bio-centriole',
        subject: 'biology',
        question: 'What is a centriole?',
        aliases: ['centriole', 'spindle organising structure', 'centrosome'],
        answer:
            'A cylindrical structure of microtubules found in animal cells that helps organise the spindle during ' +
            'division. Plant cells divide without them, which is one of the differences between the two cell types.',
    },
    {
        id: 'bio-plasmodesma',
        subject: 'biology',
        question: 'What is a plasmodesma?',
        aliases: ['plasmodesma', 'plasmodesmata', 'channel between plant cells'],
        answer:
            'A channel through the cell walls of neighbouring plant cells, joining their cytoplasm so water, ions and ' +
            'signals can pass directly. It is why plant tissue behaves as a connected whole rather than as isolated ' +
            'cells.',
    },
    {
        id: 'bio-stoma',
        subject: 'biology',
        question: 'What is a stoma?',
        aliases: ['stoma', 'stomata pore', 'pore in a leaf'],
        answer:
            'A pore in the leaf surface, bounded by two guard cells, through which carbon dioxide enters and water ' +
            'vapour and oxygen leave. Most sit on the shaded underside, which reduces water loss.',
    },
    {
        id: 'bio-meristem',
        subject: 'biology',
        question: 'What is a meristem?',
        aliases: ['meristem', 'region of plant growth', 'dividing plant cells'],
        answer:
            'A region of unspecialised, actively dividing plant cells, at root and shoot tips and in a layer within ' +
            'stems. Because plants keep meristems throughout life, they can continue growing and regenerate in a way ' +
            'animals cannot.',
    },
    {
        id: 'bio-villus',
        subject: 'biology',
        question: 'What is a villus?',
        aliases: ['villus', 'villi in the intestine', 'finger like projection'],
        answer:
            'A finger-like projection of the small intestine lining, itself covered in microvilli. Together they ' +
            'multiply the surface area enormously, and each contains capillaries and a lacteal to carry absorbed ' +
            'nutrients away.',
    },
    {
        id: 'bio-alveolus',
        subject: 'biology',
        question: 'What is an alveolus?',
        aliases: ['alveolus', 'alveoli in the lungs', 'air sac'],
        answer:
            'A tiny air sac in the lung, one cell thick and wrapped in capillaries, where gases are exchanged. The ' +
            'lungs contain hundreds of millions, which is what provides the area needed to oxygenate blood at rest ' +
            'and during exercise.',
    },
    {
        id: 'bio-dendrite',
        subject: 'biology',
        question: 'What is a dendrite?',
        aliases: ['dendrite', 'dendrites of a neuron', 'receiving branch of a nerve cell'],
        answer:
            'A branched extension of a neuron that receives signals and carries them towards the cell body. Having ' +
            'many dendrites lets one neuron gather input from hundreds of others before it responds.',
    },
    {
        id: 'bio-embryo',
        subject: 'biology',
        question: 'What is an embryo?',
        aliases: ['embryo', 'early development stage', 'embryo in a seed'],
        answer:
            'The early stage of development after fertilisation, while the basic structures are forming. In plants ' +
            'the embryo sits inside the seed with a food store, waiting for the conditions that trigger germination.',
    },
    {
        id: 'bio-diploid',
        subject: 'biology',
        question: 'What does diploid mean?',
        aliases: ['diploid', 'two sets of chromosomes', '2n'],
        answer:
            'Having two complete sets of chromosomes, one from each parent, written 2n. Human body cells are diploid ' +
            'with 46 chromosomes in 23 pairs, and mitosis keeps that number unchanged.',
    },
    {
        id: 'bio-haploid',
        subject: 'biology',
        question: 'What does haploid mean?',
        aliases: ['haploid', 'one set of chromosomes', 'n'],
        answer:
            'Having a single set of chromosomes, written n. Gametes are haploid, with 23 in humans, so fertilisation ' +
            'restores the diploid number rather than doubling it each generation.',
    },
];
