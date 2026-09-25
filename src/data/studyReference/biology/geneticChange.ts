/**
 * Biology Module 6: Genetic Change.
 *
 * Mutation, biotechnology and the technologies that read and alter DNA.
 */
import type { StudyEntry } from '../types';

export const biologyGeneticChangeEntries: StudyEntry[] = [
    {
        id: 'bio-mutation',
        subject: 'biology',
        question: 'What are the types of mutation?',
        aliases: ['mutation', 'point mutation', 'frameshift', 'chromosomal mutation', 'types of mutation'],
        answer:
            'Point mutations change one base: substitution, insertion or deletion. Insertions and deletions can shift ' +
            'the reading frame and change every codon after them. Chromosomal mutations affect whole sections or ' +
            'numbers of chromosomes. Mutagens such as radiation and some chemicals raise the rate.',
    },
    {
        id: 'bio-biotechnology',
        subject: 'biology',
        question: 'What are PCR and gel electrophoresis?',
        aliases: ['pcr', 'genetic technologies'],
        answer:
            'PCR copies a chosen DNA sequence many times through cycles of heating and cooling with a primer and ' +
            'polymerase. Gel electrophoresis then separates fragments by size, since DNA is negative and the smaller ' +
            'fragments travel further towards the positive electrode.',
    },
    {
        id: 'bio-genetic-engineering',
        subject: 'biology',
        question: 'How does genetic engineering work?',
        aliases: ['genetic engineering', 'recombinant dna', 'restriction enzymes', 'gene therapy'],
        answer:
            'Restriction enzymes cut DNA at specific sequences, leaving ends that ligase joins to DNA from another ' +
            'organism, making recombinant DNA. A vector such as a plasmid carries it into a host cell. ' +
            'Applications include insulin production, transgenic crops and gene therapy.',
    },
    {
        id: 'bio-dna-sequencing',
        subject: 'biology',
        question: 'What is DNA sequencing used for?',
        aliases: ['dna sequencing', 'genome', 'bioinformatics', 'human genome project'],
        answer:
            'Sequencing reads the order of bases in DNA. It identifies mutations behind genetic disease, traces ' +
            'evolutionary relationships, and guides treatment by matching a drug to a genotype. ' +
            'Bioinformatics handles the sheer volume of data that results.',
    },
    {
        id: 'bio-genetic-disorders',
        subject: 'biology',
        question: 'What causes genetic disorders?',
        aliases: ['genetic disorders', 'down syndrome', 'cystic fibrosis', 'nondisjunction', 'karyotype'],
        answer:
            'Single-gene disorders come from one faulty allele, such as cystic fibrosis, which is recessive, so ' +
            'carriers show nothing. Chromosomal disorders come from nondisjunction, where chromosomes fail to ' +
            'separate in meiosis. A karyotype displays the chromosomes to check number and structure.',
    },
    {
        id: 'bio-mutation-effects',
        subject: 'biology',
        question: 'Do all mutations change the protein?',
        aliases: ['silent mutation', 'missense', 'nonsense mutation', 'effect of a mutation', 'neutral mutation'],
        answer:
            'No. A silent mutation changes a codon to one meaning the same amino acid, so nothing changes. ' +
            'A missense mutation swaps one amino acid, which may matter a little or a lot. ' +
            'A nonsense mutation creates a stop codon and truncates the protein, which is usually serious.',
    },
    {
        id: 'bio-somatic-germline',
        subject: 'biology',
        question: 'What is the difference between somatic and germline mutations?',
        aliases: ['somatic mutation', 'germline mutation', 'inherited mutation', 'passed to offspring'],
        answer:
            'A somatic mutation happens in a body cell, so it affects only that person and the cells descended from ' +
            'it, as in many cancers. ' +
            'A germline mutation happens in a gamete, so it is passed to offspring and appears in every one of their ' +
            'cells.',
    },
    {
        id: 'bio-mutagens',
        subject: 'biology',
        question: 'What are mutagens?',
        aliases: ['mutagen', 'carcinogen', 'radiation mutation', 'chemical mutagen', 'causes of mutation'],
        answer:
            'Agents that raise the mutation rate: ionising radiation and ultraviolet light, and chemicals such as ' +
            'those in tobacco smoke. ' +
            'A mutagen that causes cancer is a carcinogen. ' +
            'Mutations also arise spontaneously from copying errors during replication.',
    },
    {
        id: 'bio-gene-expression-control',
        subject: 'biology',
        question: 'How is gene expression controlled?',
        aliases: ['gene expression control', 'environmental influence on genes', 'switching genes on'],
        answer:
            'Cells switch genes on and off rather than using all of them, which is why liver and nerve cells differ ' +
            'despite identical DNA. ' +
            'Environmental signals can change expression without altering the sequence, which is epigenetics, and ' +
            'some of those marks can persist.',
    },
    {
        id: 'bio-cloning',
        subject: 'biology',
        question: 'How does cloning work?',
        aliases: ['cloning', 'somatic cell nuclear transfer', 'reproductive cloning', 'therapeutic cloning', 'dolly'],
        answer:
            'Somatic cell nuclear transfer puts the nucleus of a body cell into an egg with its nucleus removed, so ' +
            'the offspring is genetically identical to the donor. ' +
            'Reproductive cloning grows a whole organism; therapeutic cloning grows tissue for treatment instead.',
    },
    {
        id: 'bio-transgenic-species',
        subject: 'biology',
        question: 'What are transgenic organisms?',
        aliases: ['transgenic', 'gmo', 'bt cotton', 'golden rice', 'genetically modified food'],
        answer:
            'Organisms carrying a gene from another species, inserted with restriction enzymes and a vector. ' +
            'Examples include bacteria making human insulin, cotton carrying a bacterial insecticide gene, and rice ' +
            'engineered to make vitamin A precursors.',
    },
    {
        id: 'bio-biotechnology-ethics',
        subject: 'biology',
        question: 'What are the ethical issues in biotechnology?',
        aliases: ['ethics biotechnology', 'gene editing ethics', 'genetic privacy', 'designer babies', 'social implications'],
        answer:
            'Questions of consent and privacy over genetic data, fairness in who can afford treatment, ecological ' +
            'risk from modified organisms escaping, and where to draw the line between treating disease and ' +
            'selecting traits. ' +
            'A good answer names the benefit and the cost, then takes a position.',
    },
    {
        id: 'bio-artificial-selection',
        subject: 'biology',
        question: 'What is artificial selection?',
        aliases: ['artificial selection', 'selective breeding', 'breeding programs', 'domestication', 'inbreeding'],
        answer:
            'Humans choose which individuals breed, so desired traits become more common, as in crops and livestock. ' +
            'It works on the same mechanism as natural selection but with a human selection pressure. ' +
            'Repeated inbreeding narrows genetic diversity and can concentrate harmful recessive alleles.',
    },
    {
        id: 'bio-hardy-weinberg',
        subject: 'biology',
        question: 'How do allele frequencies change in a population?',
        aliases: ['allele frequency', 'gene pool', 'hardy weinberg', 'equilibrium of a gene pool'],
        answer:
            'The gene pool is every allele in a population. ' +
            'Selection shifts frequencies towards favoured alleles, while genetic drift shifts them by chance, which ' +
            'matters most in small populations. ' +
            'A bottleneck or a founder event leaves a population with much less diversity than it started with.',
    },
    {
        id: 'bio-pcr-detail',
        subject: 'biology',
        question: 'How does PCR amplify DNA?',
        aliases: ['pcr steps', 'denature anneal extend', 'thermal cycling'],
        answer:
            'Repeated cycles of heating to separate the strands, cooling so primers bind at each end of the target, ' +
            'and warming so a heat-stable polymerase extends them. Each cycle doubles the copies, so thirty cycles ' +
            'give millions.',
    },
    {
        id: 'bio-gel-electrophoresis-detail',
        subject: 'biology',
        question: 'How does gel electrophoresis separate fragments?',
        aliases: ['gel electrophoresis', 'dna fragments by size', 'why dna moves to the positive electrode'],
        answer:
            'DNA is negatively charged, so it moves towards the positive electrode through a gel that resists larger ' +
            'fragments more. Shorter fragments travel further, and a ladder of known sizes lets each band be ' +
            'measured.',
    },
    {
        id: 'bio-restriction-enzymes',
        subject: 'biology',
        question: 'What do restriction enzymes do?',
        aliases: ['restriction enzyme', 'cutting dna at a sequence', 'sticky ends'],
        answer:
            'Each cuts DNA wherever a specific short sequence appears, often leaving single-stranded sticky ends. ' +
            'Cutting two DNA samples with the same enzyme gives ends that pair, which is what makes recombinant DNA ' +
            'possible.',
    },
    {
        id: 'bio-plasmids-vectors',
        subject: 'biology',
        question: 'What is a vector in genetic engineering?',
        aliases: ['plasmid vector', 'getting a gene into a cell', 'transformation of bacteria'],
        answer:
            'Something that carries the gene into the host cell, usually a plasmid or a modified virus. A marker gene ' +
            'is included so the cells that took it up can be identified and grown.',
    },
    {
        id: 'bio-crispr',
        subject: 'biology',
        question: 'What makes gene editing different from earlier genetic engineering?',
        aliases: ['gene editing', 'crispr', 'editing a gene in place'],
        answer:
            'Earlier methods inserted a gene wherever it happened to land. Gene editing targets a chosen sequence and ' +
            'changes it in place, which is far more precise and raises different ethical questions, especially in ' +
            'germline cells.',
    },
    {
        id: 'bio-gmo-agriculture',
        subject: 'biology',
        question: 'What are genetically modified crops used for?',
        aliases: ['gm crops', 'pest resistant crops', 'herbicide tolerance'],
        answer:
            'Pest and herbicide resistance, drought tolerance, longer shelf life and added nutrients such as vitamin ' +
            'A precursors. The debate concerns gene flow to wild relatives, effects on non-target species and control ' +
            'of the seed supply.',
    },
    {
        id: 'bio-dna-profiling',
        subject: 'biology',
        question: 'How does DNA profiling identify an individual?',
        aliases: ['dna profiling', 'dna fingerprinting', 'repeated sequences in dna'],
        answer:
            'It compares the number of short repeated sequences at several locations, which varies greatly between ' +
            'people. Matching enough locations makes a coincidental match vanishingly unlikely, while relatives share ' +
            'more of them.',
    },
    {
        id: 'bio-genome-projects',
        subject: 'biology',
        question: 'What has sequencing whole genomes made possible?',
        aliases: ['genome sequencing uses', 'comparing genomes', 'personalised medicine'],
        answer:
            'Identifying disease-linked alleles, tracing relationships between species and populations, choosing ' +
            'treatments matched to a patient genetics, and tracking the evolution of pathogens during an outbreak.',
    },
    {
        id: 'bio-tissue-culture',
        subject: 'biology',
        question: 'What is plant tissue culture?',
        aliases: ['tissue culture', 'growing plants from cells', 'micropropagation'],
        answer:
            'Small pieces of plant tissue are grown on a sterile nutrient medium with hormones, and each develops ' +
            'into a whole plant. It produces many identical plants quickly from one valued individual, and it ' +
            'preserves varieties that do not breed reliably from seed.',
    },
    {
        id: 'bio-biotech-ethics-framework',
        subject: 'biology',
        question: 'How do I structure an answer about biotechnology ethics?',
        aliases: ['structuring an ethics answer', 'weighing benefits and risks', 'who decides in biotechnology'],
        answer:
            'Name the benefit, name the risk or cost, say who carries each, and note who decides and whether consent ' +
            'was possible. An answer that only lists concerns has not addressed the trade-off the question asks ' +
            'about.',
    },
    {
        id: 'bio-non-random-mating',
        subject: 'biology',
        question: 'How does mate choice affect a population?',
        aliases: ['non random mating', 'sexual selection', 'mate choice and variation'],
        answer:
            'Choosing mates by a particular trait concentrates the alleles behind it, so the trait spreads even when ' +
            'it costs survival, as with a peacock tail. It changes which genotypes appear without changing which ' +
            'alleles exist.',
    },
    {
        id: 'bio-conservation-genetics',
        subject: 'biology',
        question: 'Why does genetic diversity matter for conservation?',
        aliases: ['genetic diversity in conservation', 'inbreeding depression', 'small population genetics'],
        answer:
            'A population with little variation has fewer ways to respond to disease or change, and inbreeding raises ' +
            'the chance of harmful recessive alleles pairing. Managing a small population therefore means managing ' +
            'its breeding, not only its numbers.',
    },
];
