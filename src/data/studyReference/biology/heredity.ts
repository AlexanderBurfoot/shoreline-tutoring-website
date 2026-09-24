/**
 * Biology Module 5: Heredity.
 *
 * Reproduction, DNA, protein synthesis and the inheritance of traits.
 */
import type { StudyEntry } from '../types';

export const biologyHeredityEntries: StudyEntry[] = [
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
        id: 'bio-meiosis-detail',
        subject: 'biology',
        question: 'What happens in each stage of meiosis?',
        aliases: ['meiosis stages', 'crossing over', 'independent assortment', 'meiosis 1 and 2', 'homologous pairs'],
        answer:
            'In meiosis I homologous chromosomes pair, swap sections by crossing over, then separate, which halves ' +
            'the chromosome number. ' +
            'In meiosis II the sister chromatids separate, as in mitosis. ' +
            'Crossing over and the random alignment of pairs are where most gamete variation comes from.',
    },
    {
        id: 'bio-fertilisation',
        subject: 'biology',
        question: 'What happens at fertilisation?',
        aliases: ['fertilisation', 'zygote', 'external fertilisation', 'internal fertilisation', 'gamete fusion'],
        answer:
            'Two haploid gametes fuse to make a diploid zygote, restoring the chromosome number and combining two ' +
            'sets of alleles. ' +
            'External fertilisation, as in most fish, needs water and large numbers of gametes; internal ' +
            'fertilisation needs fewer but more parental investment.',
    },
    {
        id: 'bio-dna-vs-rna',
        subject: 'biology',
        question: 'What is the difference between DNA and RNA?',
        aliases: ['dna vs rna', 'uracil', 'ribose', 'single stranded', 'types of rna'],
        answer:
            'DNA is double-stranded with deoxyribose and uses thymine; RNA is single-stranded with ribose and uses ' +
            'uracil. ' +
            'DNA stores the instructions in the nucleus, while mRNA carries a copy to the ribosome, tRNA brings amino ' +
            'acids and rRNA forms part of the ribosome.',
    },
    {
        id: 'bio-genetic-code',
        subject: 'biology',
        question: 'How does the genetic code work?',
        aliases: ['genetic code', 'codon', 'anticodon', 'start codon', 'stop codon', 'degenerate code'],
        answer:
            'Three bases make a codon, which specifies one amino acid, read from a codon table. ' +
            'AUG starts translation and also codes for methionine; three codons stop it. ' +
            'The code is degenerate, since several codons can mean the same amino acid, which softens the effect of ' +
            'some mutations.',
    },
    {
        id: 'bio-dihybrid',
        subject: 'biology',
        question: 'How do I do a dihybrid cross?',
        aliases: ['dihybrid cross', 'two traits', '9:3:3:1', 'gamete combinations', 'independent assortment cross'],
        answer:
            'Write each parent\u2019s gamete combinations, which is four each for a double heterozygote, then fill a ' +
            'four-by-four grid. ' +
            'Two heterozygous parents give the classic 9:3:3:1 phenotype ratio. ' +
            'It assumes the genes are on different chromosomes, so they assort independently.',
    },
    {
        id: 'bio-pedigree',
        subject: 'biology',
        question: 'How do I read a pedigree chart?',
        aliases: ['pedigree', 'family tree genetics', 'carrier', 'autosomal recessive pedigree', 'sex linked pedigree'],
        answer:
            'Squares are male, circles female, shaded means affected. ' +
            'If affected children have unaffected parents, the trait is recessive and those parents are carriers. ' +
            'If it appears in every generation, suspect dominant. ' +
            'Far more affected males than females suggests X-linked.',
    },
    {
        id: 'bio-sex-determination',
        subject: 'biology',
        question: 'How is sex determined, and what is sex linkage?',
        aliases: ['sex determination', 'xx xy', 'sex linked inheritance', 'x linked', 'colour blindness inheritance'],
        answer:
            'In humans, XX is female and XY is male, so the sperm determines sex. ' +
            'The X carries genes the Y does not, so a male needs only one recessive allele to show an X-linked ' +
            'condition, while a female needs two. That is why such conditions are more common in males.',
    },
    {
        id: 'bio-polygenic',
        subject: 'biology',
        question: 'What is polygenic inheritance?',
        aliases: ['polygenic', 'continuous variation', 'multiple genes', 'height inheritance', 'environment and genes'],
        answer:
            'Several genes contribute to one characteristic, giving a continuous range rather than distinct ' +
            'categories, as with height and skin colour. ' +
            'Environment usually affects these traits as well, which is why family members vary and why the ' +
            'distribution is a smooth curve.',
    },
    {
        id: 'bio-multiple-alleles',
        subject: 'biology',
        question: 'What are multiple alleles?',
        aliases: ['multiple alleles', 'blood groups', 'abo inheritance', 'three alleles'],
        answer:
            'A gene can have more than two versions in a population, though any individual carries only two. ' +
            'Human blood groups run on three alleles: A and B are codominant with each other and both dominant over ' +
            'O, which is why AB and O are both possible.',
    },
    {
        id: 'bio-chromosome-structure',
        subject: 'biology',
        question: 'How is DNA packaged into chromosomes?',
        aliases: ['chromosome structure', 'histones', 'chromatin', 'chromatid', 'karyotype biology'],
        answer:
            'DNA wraps around histone proteins to form chromatin, which coils tightly into a chromosome before cell ' +
            'division. ' +
            'A duplicated chromosome has two identical chromatids joined at the centromere. ' +
            'Humans have 23 pairs, 22 autosomal and one sex pair, shown in a karyotype.',
    },
    {
        id: 'bio-protein-structure',
        subject: 'biology',
        question: 'How does a protein get its shape?',
        aliases: ['protein structure', 'amino acid sequence', 'folding', 'primary secondary tertiary', 'shape and function'],
        answer:
            'The order of amino acids is set by the gene, and that order determines how the chain folds. ' +
            'Shape decides function, which is why a single amino acid change can break an enzyme. ' +
            'Heat and extreme pH unfold the chain, which is denaturation.',
    },
    {
        id: 'bio-test-cross',
        subject: 'biology',
        question: 'What is a test cross?',
        aliases: ['test cross', 'unknown genotype', 'homozygous or heterozygous', 'cross with recessive'],
        answer:
            'Cross the unknown individual with a homozygous recessive one. ' +
            'If any offspring show the recessive trait, the unknown parent must have carried a recessive allele, so ' +
            'it is heterozygous. If none do, it is almost certainly homozygous dominant.',
    },
    {
        id: 'bio-linked-genes',
        subject: 'biology',
        question: 'What are linked genes?',
        aliases: ['linked genes', 'gene linkage', 'recombination frequency', 'crossing over linkage', 'gene mapping'],
        answer:
            'Genes on the same chromosome tend to be inherited together, so the expected independent ratios do not ' +
            'appear. ' +
            'Crossing over separates them sometimes, and the further apart they sit the more often that happens, ' +
            'which is how their positions are mapped.',
    },
];
