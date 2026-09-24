/**
 * Biology reference, Years 9 to 12.
 *
 * Weighted towards the Year 12 modules: heredity, genetic change, infectious and
 * non-infectious disease, with the cell biology those depend on.
 */
import type { StudyEntry } from './types';

export const biologyEntries: StudyEntry[] = [
    {
        id: 'bio-dna-replication',
        subject: 'biology',
        question: 'How does DNA replication work?',
        aliases: ['dna replication', 'helicase', 'dna polymerase', 'semi conservative'],
        answer:
            'Helicase unwinds and separates the two strands, then DNA polymerase builds a new complementary strand ' +
            'against each one, pairing A with T and C with G. ' +
            'It is semi-conservative: every new molecule keeps one original strand and one new one.',
    },
    {
        id: 'bio-transcription-translation',
        subject: 'biology',
        question: 'What is the difference between transcription and translation?',
        aliases: ['transcription', 'translation', 'protein synthesis', 'mrna', 'trna', 'codon'],
        answer:
            'Transcription copies a gene from DNA into mRNA in the nucleus, with U replacing T. ' +
            'Translation reads that mRNA at a ribosome, where tRNA brings the amino acid matching each three-base codon, ' +
            'building the polypeptide. In short: DNA to RNA to protein.',
    },
    {
        id: 'bio-mitosis-meiosis',
        subject: 'biology',
        question: 'What is the difference between mitosis and meiosis?',
        aliases: ['mitosis', 'meiosis', 'cell division', 'gametes', 'diploid haploid'],
        answer:
            'Mitosis makes two identical diploid cells for growth and repair. ' +
            'Meiosis makes four genetically different haploid gametes through two divisions. ' +
            'Crossing over and independent assortment in meiosis are where most genetic variation comes from.',
    },
    {
        id: 'bio-punnett',
        subject: 'biology',
        question: 'How do I use a Punnett square?',
        aliases: ['punnett square', 'genotype', 'phenotype', 'dominant recessive', 'monohybrid cross'],
        answer:
            'Put one parent’s alleles along the top and the other’s down the side, then fill each cell with the ' +
            'pair. Genotype is the allele combination, phenotype is the trait you see. ' +
            'A cross of two heterozygotes gives the classic 3:1 phenotype ratio and 1:2:1 genotype ratio.',
    },
    {
        id: 'bio-inheritance-patterns',
        subject: 'biology',
        question: 'What are the patterns of inheritance?',
        aliases: ['codominance', 'incomplete dominance', 'sex linked', 'autosomal', 'pedigree'],
        answer:
            'Complete dominance hides the recessive allele. Incomplete dominance blends the two, as in pink flowers. ' +
            'Codominance shows both, as in AB blood. Sex-linked genes sit on the X chromosome, which is why those ' +
            'conditions appear more often in males.',
    },
    {
        id: 'bio-mutation',
        subject: 'biology',
        question: 'What are the types of mutation?',
        aliases: ['mutation', 'point mutation', 'frameshift', 'mutagen', 'chromosomal mutation'],
        answer:
            'Point mutations change one base: substitution, insertion or deletion. Insertions and deletions can shift ' +
            'the reading frame and change every codon after them. Chromosomal mutations affect whole sections or ' +
            'numbers of chromosomes. Mutagens such as radiation and some chemicals raise the rate.',
    },
    {
        id: 'bio-biotechnology',
        subject: 'biology',
        question: 'What are PCR and gel electrophoresis?',
        aliases: ['pcr', 'gel electrophoresis', 'dna profiling', 'crispr', 'genetic technologies'],
        answer:
            'PCR copies a chosen DNA sequence many times through cycles of heating and cooling with a primer and ' +
            'polymerase. Gel electrophoresis then separates fragments by size, since DNA is negative and the smaller ' +
            'fragments travel further towards the positive electrode.',
    },
    {
        id: 'bio-enzymes',
        subject: 'biology',
        question: 'How do enzymes work?',
        aliases: ['enzymes', 'active site', 'denature', 'substrate', 'optimum temperature'],
        answer:
            'An enzyme is a protein catalyst whose active site fits a specific substrate, lowering the activation ' +
            'energy. Rate rises with temperature until the shape breaks down and the enzyme denatures. ' +
            'Each enzyme has an optimum temperature and pH.',
    },
    {
        id: 'bio-homeostasis',
        subject: 'biology',
        question: 'What is homeostasis and negative feedback?',
        aliases: ['homeostasis', 'negative feedback', 'thermoregulation', 'osmoregulation', 'receptor effector'],
        answer:
            'Homeostasis keeps internal conditions steady. A receptor detects a change, a control centre compares it ' +
            'with the set point, and an effector acts to reverse it. ' +
            'That reversal is negative feedback, as in sweating when body temperature rises.',
    },
    {
        id: 'bio-immune-response',
        subject: 'biology',
        question: 'How does the immune response work?',
        aliases: ['immune response', 'antibodies', 'antigen', 'b cells', 't cells', 'vaccination'],
        answer:
            'Non-specific defences act first: skin, mucus and inflammation. ' +
            'The specific response follows, with B cells making antibodies against an antigen and T cells destroying ' +
            'infected cells. Memory cells make the second response faster, which is what vaccination relies on.',
    },
    {
        id: 'bio-pathogens',
        subject: 'biology',
        question: 'What are the types of pathogen?',
        aliases: ['pathogens', 'bacteria virus', 'transmission', 'infectious disease', 'kochs postulates'],
        answer:
            'Bacteria, viruses, fungi, protozoa, prions and macroparasites. ' +
            'Antibiotics work on bacteria but not viruses, because viruses replicate inside host cells. ' +
            'Koch’s postulates are the steps that link one specific pathogen to a disease.',
    },
    {
        id: 'bio-non-infectious',
        subject: 'biology',
        question: 'What counts as a non-infectious disease?',
        aliases: ['non infectious disease', 'genetic disease', 'nutritional disease', 'epidemiology', 'incidence prevalence'],
        answer:
            'Diseases not caused by a pathogen: genetic, nutritional, environmental and those caused by lifestyle. ' +
            'Epidemiology studies their patterns, where incidence is new cases in a period and prevalence is total ' +
            'cases at a point in time.',
    },
    {
        id: 'bio-photosynthesis-respiration',
        subject: 'biology',
        question: 'What are photosynthesis and respiration?',
        aliases: ['photosynthesis', 'respiration', 'aerobic respiration', 'atp', 'glucose equation'],
        answer:
            'Photosynthesis: 6CO₂ + 6H₂O + light energy makes C₆H₁₂O₆ + 6O₂, in chloroplasts. ' +
            'Aerobic respiration reverses it in mitochondria, releasing energy as ATP. ' +
            'Anaerobic respiration releases far less energy and produces lactic acid or ethanol.',
    },
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
];
