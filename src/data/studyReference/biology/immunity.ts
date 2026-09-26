/**
 * Biology Module 7: infectious disease and immunity in detail.
 *
 * Pathogens, the lines of defence, immunity and how outbreaks are controlled.
 */
import type { StudyEntry } from '../types';

export const biologyImmunityEntries: StudyEntry[] = [
    {
        id: 'bio-pathogen-types',
        subject: 'biology',
        question: 'What are the different kinds of pathogen?',
        aliases: ['types of pathogen', 'bacteria virus fungus protozoa', 'prion'],
        answer:
            'Bacteria, viruses, fungi, protozoa, macroparasites such as worms, and prions. They differ in whether ' +
            'they are cells, whether they reproduce independently, and therefore in what treatment can work: ' +
            'antibiotics act on bacteria only.',
    },
    {
        id: 'bio-virus-replication',
        subject: 'biology',
        question: 'How does a virus reproduce?',
        aliases: ['virus replication', 'lytic cycle', 'why viruses need a host cell'],
        answer:
            'A virus has no metabolism, so it attaches to a specific receptor, inserts its genetic material and uses ' +
            'the host machinery to build copies, which are then released, usually destroying the cell. That ' +
            'dependence is why antivirals are harder to design than antibiotics.',
    },
    {
        id: 'bio-bacteria-growth',
        subject: 'biology',
        question: 'How do bacteria cause disease?',
        aliases: ['how bacteria cause disease', 'bacterial toxins', 'binary fission growth'],
        answer:
            'They divide rapidly by binary fission and damage tissue directly or through toxins they release. Because ' +
            'growth is exponential, a short delay in treatment allows a very large increase in numbers.',
    },
    {
        id: 'bio-koch-tests',
        subject: 'biology',
        question: 'How is a specific pathogen identified in a patient?',
        aliases: ['identifying a pathogen', 'culturing a sample', 'diagnostic test for infection'],
        answer:
            'A sample is cultured to see what grows, examined microscopically, or tested for the genetic material or ' +
            'antigens of a suspected organism. Antibody tests show past exposure rather than current infection, which ' +
            'matters for interpreting a result.',
    },
    {
        id: 'bio-physical-barriers',
        subject: 'biology',
        question: 'What physical and chemical barriers keep pathogens out?',
        aliases: ['physical barriers', 'chemical barriers', 'skin and mucus as defence', 'stomach acid defence'],
        answer:
            'Intact skin, mucus and cilia in the airways, tears containing lysozyme, stomach acid, and harmless ' +
            'resident bacteria that occupy space. None targets a particular pathogen, which is why this line is ' +
            'called non-specific.',
    },
    {
        id: 'bio-phagocytosis-detail',
        subject: 'biology',
        question: 'How does a phagocyte destroy a pathogen?',
        aliases: ['phagocytosis of a pathogen', 'macrophage action', 'engulfing a microbe'],
        answer:
            'It is attracted to chemicals from the site, engulfs the pathogen into a vesicle, then fuses that with a ' +
            'lysosome whose enzymes digest it. Fragments may then be displayed to alert the specific immune response.',
    },
    {
        id: 'bio-cell-mediated-immunity',
        subject: 'biology',
        question: 'What is the difference between cell-mediated and humoral immunity?',
        aliases: ['cell mediated immunity', 'humoral immunity', 't cells and b cells'],
        answer:
            'T cells act on infected cells directly, killing them or coordinating the response. B cells produce ' +
            'antibodies that circulate in body fluids and act on pathogens outside cells. Both leave memory cells ' +
            'behind.',
    },
    {
        id: 'bio-memory-cells',
        subject: 'biology',
        question: 'Why is the second infection milder?',
        aliases: ['memory cells', 'secondary response', 'why you only get some diseases once'],
        answer:
            'The first exposure leaves memory cells specific to that antigen, so a second exposure produces ' +
            'antibodies far faster and in greater quantity. The pathogen is cleared before symptoms develop, which is ' +
            'what immunity means in practice.',
    },
    {
        id: 'bio-vaccine-types',
        subject: 'biology',
        question: 'What is actually in a vaccine?',
        aliases: ['what is in a vaccine', 'attenuated vaccine', 'mrna vaccine', 'inactivated vaccine'],
        answer:
            'A harmless form of the antigen: a weakened or inactivated pathogen, a purified protein, or mRNA ' +
            'instructing your cells to make one antigen. In each case the immune system forms memory cells without ' +
            'the disease.',
    },
    {
        id: 'bio-passive-immunity',
        subject: 'biology',
        question: 'What is passive immunity?',
        aliases: ['passive immunity', 'antibodies from the mother', 'antivenom immunity'],
        answer:
            'Receiving ready-made antibodies rather than making them, through the placenta, breast milk, or an ' +
            'injection such as antivenom. Protection is immediate but temporary, since no memory cells are formed.',
    },
    {
        id: 'bio-antibiotic-action',
        subject: 'biology',
        question: 'How do antibiotics work?',
        aliases: ['how antibiotics work', 'bactericidal and bacteriostatic', 'antibiotic target'],
        answer:
            'They attack features bacteria have and human cells do not, such as the cell wall or bacterial ribosomes. ' +
            'Bactericidal antibiotics kill; bacteriostatic ones stop division so the immune system can finish the ' +
            'job. Neither affects viruses.',
    },
    {
        id: 'bio-resistance-mechanism',
        subject: 'biology',
        question: 'How does antibiotic resistance actually arise?',
        aliases: ['how resistance arises', 'selection for resistance', 'plasmid transfer of resistance'],
        answer:
            'A random mutation gives one bacterium an advantage, the antibiotic removes its competitors, and it ' +
            'multiplies. Resistance genes also pass directly between bacteria on plasmids, which is why resistance ' +
            'can spread between species.',
    },
    {
        id: 'bio-epidemic-control',
        subject: 'biology',
        question: 'How is an outbreak brought under control?',
        aliases: ['controlling an outbreak', 'isolation and tracing', 'ring vaccination'],
        answer:
            'Identify cases, isolate them, trace and quarantine contacts, vaccinate around the outbreak, and remove ' +
            'the source or vector. Speed matters more than scale early, because each day of delay multiplies the ' +
            'number of contacts.',
    },
    {
        id: 'bio-emerging-diseases',
        subject: 'biology',
        question: 'Why do new diseases emerge?',
        aliases: ['emerging disease', 'zoonotic disease', 'spillover from animals'],
        answer:
            'Most come from animals, so closer contact through land clearing, wildlife trade and intensive farming ' +
            'raises the chance of spillover. Air travel then spreads a new pathogen faster than surveillance can find ' +
            'it.',
    },
    {
        id: 'bio-indigenous-and-modern-treatment',
        subject: 'biology',
        question: 'How are traditional and modern approaches to disease related?',
        aliases: ['traditional medicine and modern drugs', 'plant derived drugs'],
        answer:
            'Many modern drugs began as compounds in plants used traditionally, and pharmacology often works by ' +
            'isolating and standardising the active compound. Aboriginal and Torres Strait Islander knowledge of ' +
            'local plants is a documented source of such leads.',
    },
    {
        id: 'bio-plant-disease-management',
        subject: 'biology',
        question: 'How are plant diseases managed in agriculture?',
        aliases: ['managing plant disease', 'crop rotation', 'resistant varieties', 'fungicide use'],
        answer:
            'Resistant varieties, crop rotation to break the pathogen cycle, removing infected material, controlling ' +
            'insect vectors, quarantine of imported stock, and targeted fungicides. Monocultures raise the stakes, ' +
            'since one susceptible variety covers a whole district.',
    },
    {
        id: 'bio-immune-disorders',
        subject: 'biology',
        question: 'What happens when the immune system gets it wrong?',
        aliases: ['autoimmune disease', 'allergy', 'immunodeficiency'],
        answer:
            'In an autoimmune disease it attacks the bodys own tissue, as in type 1 diabetes. In an allergy it ' +
            'overreacts to something harmless. In immunodeficiency it responds too weakly, so ordinary infections ' +
            'become dangerous.',
    },
    {
        id: 'bio-transmission-modelling',
        subject: 'biology',
        question: 'What makes one disease spread faster than another?',
        aliases: ['spread of a disease', 'reproduction number', 'incubation period and spread'],
        answer:
            'How many people each case infects, how long someone is infectious before symptoms appear, how the ' +
            'pathogen travels, and how many people are already immune. A long silent infectious period is what makes ' +
            'a disease hardest to contain.',
    },
];
