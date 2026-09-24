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
    {
        id: 'bio-cell-structure',
        subject: 'biology',
        question: 'What do the parts of a cell do?',
        aliases: ['cell organelles', 'mitochondria', 'ribosome', 'prokaryote eukaryote', 'cell membrane'],
        answer:
            'The nucleus holds DNA, mitochondria release energy as ATP, ribosomes build proteins, and the membrane ' +
            'controls what enters and leaves. Plant cells add a cell wall, chloroplasts and a large vacuole. ' +
            'Prokaryotes, such as bacteria, have no nucleus or membrane-bound organelles.',
    },
    {
        id: 'bio-transport-membrane',
        subject: 'biology',
        question: 'How do substances move in and out of cells?',
        aliases: ['diffusion', 'osmosis', 'active transport', 'facilitated diffusion', 'concentration gradient'],
        answer:
            'Diffusion moves particles down a concentration gradient, and osmosis is that for water across a ' +
            'partially permeable membrane. Facilitated diffusion uses a protein channel but no energy. ' +
            'Active transport moves substances against the gradient and costs ATP.',
    },
    {
        id: 'bio-plant-transport',
        subject: 'biology',
        question: 'How do plants transport water and sugar?',
        aliases: ['xylem phloem', 'transpiration', 'translocation', 'stomata', 'plant transport'],
        answer:
            'Xylem carries water and minerals upward, pulled by transpiration from the leaves. ' +
            'Phloem carries sugars from source to sink in both directions, which is translocation. ' +
            'Stomata open to let carbon dioxide in, and water is lost through them at the same time.',
    },
    {
        id: 'bio-nervous-endocrine',
        subject: 'biology',
        question: 'How do the nervous and endocrine systems differ?',
        aliases: ['nervous system', 'endocrine system', 'hormones', 'neuron', 'synapse', 'reflex arc'],
        answer:
            'The nervous system sends fast electrical impulses along neurons for short-lived responses; a reflex arc ' +
            'bypasses the brain for speed. The endocrine system releases hormones into the blood, which act more ' +
            'slowly but last longer, such as insulin controlling blood glucose.',
    },
    {
        id: 'bio-dna-structure',
        subject: 'biology',
        question: 'What is the structure of DNA?',
        aliases: ['dna structure', 'double helix', 'base pairing', 'nucleotide', 'chromosome gene'],
        answer:
            'DNA is a double helix of nucleotides, each a sugar, a phosphate and a base. ' +
            'A pairs with T and C with G, so the strands are complementary. ' +
            'A gene is a length of DNA coding for a protein, and a chromosome is one long DNA molecule with its proteins.',
    },
    {
        id: 'bio-polypeptide-synthesis',
        subject: 'biology',
        question: 'How does a gene control a characteristic?',
        aliases: ['gene expression', 'polypeptide synthesis', 'protein function', 'one gene one protein'],
        answer:
            'A gene is transcribed and translated into a polypeptide, which folds into a protein. ' +
            'That protein does the work: an enzyme, a structural fibre, a receptor or a hormone. ' +
            'A change in the DNA can change the protein, and so the characteristic it produces.',
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
        id: 'bio-epidemiology-study',
        subject: 'biology',
        question: 'What are the types of epidemiological study?',
        aliases: ['epidemiological study', 'cohort study', 'case control', 'cross sectional', 'correlation causation'],
        answer:
            'A descriptive study reports patterns, an analytical study tests a hypothesis, and an intervention study ' +
            'changes something and measures the effect. Cohort studies follow groups forward; case-control studies ' +
            'look back. A correlation alone does not establish cause.',
    },
    {
        id: 'bio-prevention-treatment',
        subject: 'biology',
        question: 'How are infectious diseases prevented and treated?',
        aliases: ['vaccination', 'herd immunity', 'antibiotics', 'antivirals', 'quarantine', 'public health'],
        answer:
            'Prevention uses hygiene, quarantine, vector control and vaccination, which trains memory cells before ' +
            'exposure. Herd immunity protects those who cannot be vaccinated. ' +
            'Antibiotics treat bacterial infections only, and overuse drives resistance.',
    },
    {
        id: 'bio-plant-animal-disease',
        subject: 'biology',
        question: 'How do plants defend themselves against disease?',
        aliases: ['plant defence', 'plant disease', 'physical barriers plants', 'agricultural disease'],
        answer:
            'Physical barriers come first: bark, waxy cuticles and closed stomata. ' +
            'Chemical defences include toxins and enzymes that attack pathogens. ' +
            'Plants have no circulating immune cells, so infected tissue is often sealed off and sacrificed instead.',
    },
    {
        id: 'bio-biodiversity-ecosystems',
        subject: 'biology',
        question: 'How do ecosystems and food chains work?',
        aliases: ['food chain', 'food web', 'trophic levels', 'ecosystem', 'biodiversity', 'energy flow'],
        answer:
            'Producers capture light energy, and each trophic level passes on roughly ten per cent of it, which is ' +
            'why chains are short. Decomposers return nutrients to the soil. ' +
            'Greater biodiversity generally makes an ecosystem more resilient to change.',
    },
    {
        id: 'bio-scientific-method-bio',
        subject: 'biology',
        question: 'How do I write a hypothesis and design a biology experiment?',
        aliases: ['hypothesis', 'controlled experiment', 'depth study', 'variables biology', 'sample size'],
        answer:
            'A hypothesis is a testable prediction linking the independent and dependent variables. ' +
            'Control every other variable, use a control group, and keep the sample large enough for the result to ' +
            'mean something. Living things vary, so repeats matter more here than in physics.',
    },
];
