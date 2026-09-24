/**
 * Biology Module 3: Biological Diversity.
 *
 * Variation, adaptation, natural selection and the evidence for evolution.
 */
import type { StudyEntry } from '../types';

export const biologyDiversityEntries: StudyEntry[] = [
    {
        id: 'bio-natural-selection',
        subject: 'biology',
        question: 'How does natural selection work?',
        aliases: ['natural selection', 'evolution', 'allele frequency', 'speciation', 'selection pressure'],
        answer:
            'Variation exists in a population. A selection pressure means some variants survive and reproduce more, ' +
            'so their alleles become more common over generations. ' +
            'When populations stop interbreeding and diverge far enough, speciation occurs.',
    },
    {
        id: 'bio-variation',
        subject: 'biology',
        question: 'Where does genetic variation come from?',
        aliases: ['genetic variation', 'crossing over', 'independent assortment', 'random fertilisation'],
        answer:
            'Crossing over swaps sections between homologous chromosomes, independent assortment shuffles which ' +
            'chromosome goes to which gamete, and fertilisation combines two random gametes. ' +
            'Mutation supplies entirely new alleles, which is the ultimate source.',
    },
    {
        id: 'bio-classification',
        subject: 'biology',
        question: 'How are organisms classified?',
        aliases: ['classification', 'taxonomy', 'binomial nomenclature', 'dichotomous key', 'species definition'],
        answer:
            'From broad to narrow: kingdom, phylum, class, order, family, genus, species. ' +
            'Binomial nomenclature names each species by genus and species, italicised. ' +
            'A species is usually defined as a group that can interbreed and produce fertile offspring.',
    },
    {
        id: 'bio-evidence-evolution',
        subject: 'biology',
        question: 'What is the evidence for evolution?',
        aliases: ['evidence for evolution', 'fossil record', 'comparative anatomy', 'homologous structures', 'biogeography', 'dna evidence'],
        answer:
            'The fossil record shows change over time and transitional forms. Comparative anatomy shows homologous ' +
            'structures from a common ancestor. Embryology shows shared early development. ' +
            'Biogeography explains distribution, and DNA comparison gives the most precise relationships.',
    },
    {
        id: 'bio-adaptations',
        subject: 'biology',
        question: 'What are the types of adaptation?',
        aliases: ['adaptations', 'structural adaptation', 'physiological adaptation', 'behavioural adaptation', 'survival features'],
        answer:
            'Structural adaptations are physical features, such as thick fur. ' +
            'Physiological ones are internal processes, such as concentrating urine to save water. ' +
            'Behavioural ones are actions, such as migrating or being active at night. ' +
            'Each raises the chance of surviving and reproducing in that environment.',
    },
    {
        id: 'bio-selection-types',
        subject: 'biology',
        question: 'What are the types of natural selection?',
        aliases: ['directional selection', 'stabilising selection', 'disruptive selection', 'selection pressure types'],
        answer:
            'Directional selection favours one extreme and shifts the average. ' +
            'Stabilising selection favours the middle and narrows variation. ' +
            'Disruptive selection favours both extremes against the middle, which can eventually split a population.',
    },
    {
        id: 'bio-speciation',
        subject: 'biology',
        question: 'How does speciation happen?',
        aliases: ['speciation', 'allopatric', 'sympatric', 'reproductive isolation', 'new species'],
        answer:
            'Populations stop interbreeding, then diverge under different selection pressures until they can no ' +
            'longer produce fertile offspring. ' +
            'Allopatric speciation follows a geographic barrier; sympatric happens without one, through behavioural ' +
            'or timing differences.',
    },
    {
        id: 'bio-fossils',
        subject: 'biology',
        question: 'How do fossils form and what do they show?',
        aliases: ['fossils', 'fossil record', 'transitional fossil', 'relative dating', 'radiometric dating'],
        answer:
            'Fossils usually form when remains are buried quickly in sediment and minerals replace the tissue, so the ' +
            'record favours hard parts and is incomplete. ' +
            'Deeper layers are older, and radiometric dating gives an absolute age. ' +
            'Transitional fossils show features of two groups.',
    },
    {
        id: 'bio-comparative-evidence',
        subject: 'biology',
        question: 'What are homologous, analogous and vestigial structures?',
        aliases: ['homologous structures', 'analogous structures', 'vestigial', 'convergent evolution', 'divergent evolution'],
        answer:
            'Homologous structures share an ancestry despite different uses, like the bones in a whale flipper and a ' +
            'human arm, and show divergent evolution. ' +
            'Analogous structures share a use but not an ancestry, like insect and bird wings, and show convergent ' +
            'evolution. Vestigial structures are reduced remnants of ancestral ones.',
    },
    {
        id: 'bio-molecular-evidence',
        subject: 'biology',
        question: 'How does DNA evidence show relatedness?',
        aliases: ['molecular evidence', 'dna comparison', 'protein comparison', 'molecular clock', 'phylogenetic tree'],
        answer:
            'The more similar two species\u2019 DNA or protein sequences, the more recently they shared an ancestor. ' +
            'Mutations accumulate at a roughly steady rate, which acts as a molecular clock. ' +
            'Phylogenetic trees are built from those comparisons and often confirm what anatomy already suggested.',
    },
    {
        id: 'bio-biodiversity-measures',
        subject: 'biology',
        question: 'How is biodiversity measured and why does it matter?',
        aliases: ['biodiversity', 'species richness', 'genetic diversity', 'why biodiversity matters', 'extinction'],
        answer:
            'Species richness counts the species present; diversity also weighs how evenly individuals are spread ' +
            'among them, and genetic diversity within a species matters too. ' +
            'Low genetic diversity leaves a population unable to adapt, which is why small isolated populations are ' +
            'vulnerable.',
    },
    {
        id: 'bio-reproduction-strategies',
        subject: 'biology',
        question: 'What is the difference between asexual and sexual reproduction?',
        aliases: ['asexual reproduction', 'sexual reproduction', 'binary fission', 'vegetative propagation', 'clone'],
        answer:
            'Asexual reproduction needs one parent and produces genetically identical offspring, which is fast and ' +
            'reliable in a stable environment. ' +
            'Sexual reproduction combines two gametes and produces variation, which matters when conditions change. ' +
            'Many organisms use both.',
    },
    {
        id: 'bio-darwin-wallace',
        subject: 'biology',
        question: 'What did Darwin and Wallace propose?',
        aliases: ['darwin', 'wallace', 'theory of evolution', 'descent with modification', 'galapagos finches'],
        answer:
            'That populations vary, more offspring are produced than survive, and the variants best suited to the ' +
            'conditions leave more offspring, so those traits become more common: descent with modification by ' +
            'natural selection. ' +
            'Both reached it independently, and Wallace\u2019s letter prompted Darwin to publish.',
    },
    {
        id: 'bio-dichotomous-key',
        subject: 'biology',
        question: 'How do I use a dichotomous key?',
        aliases: ['dichotomous key', 'identifying organisms', 'classification key', 'paired statements'],
        answer:
            'Each step offers two alternatives, and the one you choose sends you to the next step until you reach a ' +
            'name. ' +
            'Use features that are clearly present or absent rather than matters of degree, and check the organism ' +
            'against the full description at the end.',
    },
    {
        id: 'bio-three-domains',
        subject: 'biology',
        question: 'What are the three domains of life?',
        aliases: ['three domains', 'archaea', 'bacteria domain', 'eukarya', 'kingdoms'],
        answer:
            'Bacteria, Archaea and Eukarya. ' +
            'Archaea look like bacteria but differ in their genetics and membranes, and many live in extreme ' +
            'conditions. ' +
            'Eukarya covers protists, fungi, plants and animals. The scheme came from molecular comparison, not ' +
            'appearance.',
    },
];
