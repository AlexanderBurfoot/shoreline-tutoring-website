/**
 * Biology: the distinctions students most often blur.
 *
 * Pairs of processes and structures that are routinely confused, and what
 * actually separates them.
 */
import type { StudyEntry } from '../types';

export const biologyComparisonEntries: StudyEntry[] = [
    {
        id: 'bio-gene-versus-chromosome',
        subject: 'biology',
        question: 'What is the difference between a gene and a chromosome?',
        aliases: ['gene versus chromosome', 'how genes sit on chromosomes', 'locus'],
        answer:
            'A chromosome is one long DNA molecule with its packaging proteins; a gene is a section of it coding for ' +
            'a product. One human chromosome carries hundreds to thousands of genes, each at a fixed position called ' +
            'its locus.',
    },
    {
        id: 'bio-virus-versus-bacterium',
        subject: 'biology',
        question: 'What is the difference between a virus and a bacterium?',
        aliases: ['virus versus bacterium', 'are viruses cells'],
        answer:
            'A bacterium is a living cell that reproduces on its own and can be killed by antibiotics. A virus is not ' +
            'a cell, has no metabolism, and can only replicate inside a host cell, which is why antibiotics do ' +
            'nothing to it.',
    },
    {
        id: 'bio-vaccine-versus-antibiotic',
        subject: 'biology',
        question: 'What is the difference between a vaccine and an antibiotic?',
        aliases: ['vaccine versus antibiotic', 'prevention versus treatment', 'why a vaccine is not a cure'],
        answer:
            'A vaccine is given beforehand and trains the immune system to recognise a pathogen, so it prevents ' +
            'disease. An antibiotic is given during a bacterial infection and kills or halts the bacteria, so it ' +
            'treats disease. Neither substitutes for the other.',
    },
    {
        id: 'bio-inhalation-versus-respiration',
        subject: 'biology',
        question: 'What is the difference between breathing and respiration?',
        aliases: ['breathing versus respiration', 'inhalation and respiration', 'is breathing the same as respiration'],
        answer:
            'Breathing is the mechanical movement of air into and out of the lungs. Respiration is the chemical ' +
            'release of energy from glucose inside every cell. Breathing supplies the oxygen that cellular ' +
            'respiration uses, but the two are different processes.',
    },
    {
        id: 'bio-digestion-versus-absorption',
        subject: 'biology',
        question: 'What is the difference between digestion and absorption?',
        aliases: ['digestion versus absorption', 'breaking down and taking in', 'where absorption happens'],
        answer:
            'Digestion breaks large molecules into small ones, mechanically and by enzymes. Absorption moves those ' +
            'small molecules across the gut wall into the blood or lymph, mostly in the small intestine. Food is not ' +
            'nourishing until the second step has happened.',
    },
    {
        id: 'bio-dominant-versus-codominant',
        subject: 'biology',
        question: 'What is the difference between dominant and codominant?',
        aliases: ['dominant versus codominant', 'is codominance the same as dominance', 'both alleles showing'],
        answer:
            'With simple dominance the heterozygote looks identical to the homozygous dominant, so one allele is ' +
            'hidden. With codominance both alleles are fully expressed and both appear, as in roan coats or the AB ' +
            'blood group.',
    },
    {
        id: 'bio-transpiration-versus-translocation',
        subject: 'biology',
        question: 'What is the difference between transpiration and translocation?',
        aliases: ['transpiration versus translocation', 'xylem versus phloem transport', 'water and sugar movement'],
        answer:
            'Transpiration is the loss of water vapour from leaves, which pulls water up the xylem in one direction. ' +
            'Translocation is the movement of sugars through the phloem, which can travel either way and requires ' +
            'energy.',
    },
    {
        id: 'bio-cytoskeleton',
        subject: 'biology',
        question: 'What is the cytoskeleton?',
        aliases: ['cytoskeleton', 'microtubules', 'internal scaffolding of a cell'],
        answer:
            'A network of protein filaments giving the cell its shape, anchoring organelles, and providing tracks ' +
            'along which vesicles are moved. It also builds the spindle that separates chromosomes, so a cell could ' +
            'not divide without it.',
    },
    {
        id: 'bio-selective-permeability',
        subject: 'biology',
        question: 'What does selectively permeable mean?',
        aliases: ['selective permeability', 'selectively permeable membrane', 'why some molecules cross and others do not'],
        answer:
            'The membrane lets some substances through and not others. Small non-polar molecules pass straight ' +
            'through the lipid, water and ions need channels, and large or charged molecules need specific carriers, ' +
            'which is what lets a cell control its own contents.',
    },
    {
        id: 'bio-non-disjunction',
        subject: 'biology',
        question: 'What is non-disjunction?',
        aliases: ['non disjunction', 'chromosomes failing to separate', 'cause of trisomy'],
        answer:
            'A failure of chromosomes or chromatids to separate properly during meiosis, so a gamete carries one too ' +
            'many or too few. Fertilisation then gives a zygote with an abnormal number, as in trisomy 21.',
    },
    {
        id: 'bio-chromosomal-abnormality',
        subject: 'biology',
        question: 'What kinds of chromosomal abnormality are there?',
        aliases: ['chromosomal abnormality', 'deletion duplication inversion translocation', 'structural chromosome change'],
        answer:
            'Changes in number, from non-disjunction, and changes in structure: a deletion loses a section, a ' +
            'duplication repeats one, an inversion reverses one, and a translocation moves a section to a different ' +
            'chromosome. Each can disrupt many genes at once.',
    },
];
