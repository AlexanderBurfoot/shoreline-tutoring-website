import type { CourseOutline } from './types';

/**
 * Order follows the syllabus order of Module 5's inquiry questions, which NESA's
 * sample Year 12 scope and sequence spreads across all of Term 4, and the
 * chapter order of Pearson Biology 12 NSW.
 */
export const biologyOutline: CourseOutline = {
    courseId: 'biology',
    overview:
        'Module 5, Heredity, from how living things reproduce to how DNA is copied, read and passed on, with a first look at Module 6. The first two lessons fall in the school holidays, so students start Term 4 already ahead of their class.',
    metaFocus: 'Heredity, from reproduction to how DNA is copied and passed on',
    syllabusNote:
        'Follows the NESA Biology Stage 6 Syllabus (2017), which the 2027 HSC examines, in the order most schools teach it.',
    lessons: [
        {
            topic: 'Reproduction',
            title: 'Reproduction across living things',
            syllabusRefs: ['Module 5', 'Reproduction'],
            points: [
                'External and internal fertilisation in animals',
                'Sexual and asexual reproduction in plants',
                'Budding and spores in fungi, and binary fission in bacteria and protists',
                'The advantages and disadvantages of each method',
            ],
            keySkill: 'Building comparison tables and turning them into a written evaluation.',
        },
        {
            topic: 'Reproduction',
            title: 'Mammalian reproduction and agriculture',
            syllabusRefs: ['Module 5', 'Reproduction'],
            points: [
                'Fertilisation, implantation, and the hormones that control pregnancy and birth',
                'How farmers manipulate reproduction: artificial insemination, artificial pollination and selective breeding',
            ],
            keySkill: 'Reading hormone level graphs and linking each change to a stage of pregnancy.',
        },
        {
            topic: 'Cell replication',
            title: 'Mitosis, meiosis and DNA replication',
            syllabusRefs: ['Module 5', 'Cell Replication'],
            points: [
                'Mitosis and meiosis compared, stage by stage',
                'How DNA replicates, using the Watson and Crick model',
                'Why copying genetic material exactly matters for the continuity of a species',
            ],
            keySkill: 'Modelling a process and explaining each step in order.',
        },
        {
            topic: 'DNA and polypeptide synthesis',
            title: 'DNA in different cells, and transcription',
            syllabusRefs: ['Module 5', 'DNA and Polypeptide Synthesis'],
            points: [
                'How DNA is packaged in prokaryotes and eukaryotes, including plasmids and histones',
                'DNA outside the nucleus, in mitochondria and chloroplasts',
                'Transcription, and how mRNA is processed before it leaves the nucleus',
            ],
            keySkill: 'Drawing and labelling clear diagrams of DNA structure and transcription.',
        },
        {
            topic: 'DNA and polypeptide synthesis',
            title: 'Translation and proteins',
            syllabusRefs: ['Module 5', 'DNA and Polypeptide Synthesis'],
            points: [
                'The roles of mRNA, tRNA, codons, anticodons and ribosomes in translation',
                'How a protein’s structure determines its function',
                'How genes and the environment together shape an organism’s phenotype',
            ],
            keySkill: 'Using a codon table to go from a DNA sequence to a chain of amino acids.',
        },
        {
            topic: 'Genetic variation',
            title: 'Inheritance patterns',
            syllabusRefs: ['Module 5', 'Genetic Variation'],
            points: [
                'Practical investigation: modelling meiosis, crossing over and fertilisation to predict offspring',
                'Autosomal inheritance, codominance and incomplete dominance',
                'Multiple alleles, using the ABO blood groups',
            ],
            keySkill: 'Punnett squares and expressing outcomes as probabilities and ratios.',
        },
        {
            topic: 'Genetic variation',
            title: 'Sex linkage, pedigrees and population data',
            syllabusRefs: ['Module 5', 'Genetic Variation'],
            points: [
                'X-linked inheritance and why some conditions are more common in males',
                'Reading and constructing pedigrees',
                'Collecting and presenting frequency data for a trait, and single nucleotide polymorphisms',
            ],
            keySkill: 'Deducing an inheritance pattern from a pedigree and justifying it.',
        },
        {
            topic: 'Inheritance patterns in a population',
            title: 'DNA sequencing and profiling',
            syllabusRefs: ['Module 5', 'Inheritance Patterns in a Population'],
            points: [
                'How DNA sequencing works and what it is used for',
                'DNA profiling with PCR, gel electrophoresis and short tandem repeats',
                'Applications in forensics, paternity and identifying species',
            ],
            keySkill: 'Interpreting gel electrophoresis results.',
        },
        {
            topic: 'Inheritance patterns in a population',
            title: 'Population genetics and big data',
            syllabusRefs: ['Module 5', 'Inheritance Patterns in a Population'],
            points: [
                'Large collaborative projects such as the Human Genome Project',
                'Using genetic data in conservation, the study of inherited disease and human evolution',
            ],
            keySkill: 'Evaluating the reliability and usefulness of secondary sources.',
        },
        {
            topic: 'Module 5 review',
            title: 'Heredity in review, and a first look at mutation',
            syllabusRefs: ['Module 5', 'Module 6 preview'],
            points: [
                'Analysing secondary data for a Module 5 depth study',
                'Mutagens, and point mutations compared with chromosomal mutations, ready for Term 1',
            ],
            keySkill: 'Identifying trends and limitations in a data set.',
        },
        {
            topic: 'Term review',
            title: 'Consolidation and term test',
            syllabusRefs: ['Module 5'],
            points: [
                'HSC-style multiple choice and extended response questions across the module',
                'A short test under exam conditions, marked with written feedback',
                'A plan for the summer holidays based on the test results',
            ],
            keySkill: 'Exam technique: answering the verb, whether it asks you to explain, assess or evaluate.',
        },
    ],
    laterTerms: [
        {
            term: 'Term 1, 2027',
            focus: 'Module 6, Genetic Change: mutation, biotechnology and genetic technologies. Module 7, Infectious Disease, usually begins late in the term.',
        },
        {
            term: 'Term 2, 2027',
            focus: 'Module 7: pathogens, how the body responds to them, immunity, and preventing and controlling disease. Module 8, Non-infectious Disease and Disorders, begins.',
        },
        {
            term: 'Term 3, 2027',
            focus: 'Module 8 is completed: homeostasis, the causes and study of non-infectious disease, and technologies for disorders. Then trial exams and revision for the HSC.',
        },
    ],
};
