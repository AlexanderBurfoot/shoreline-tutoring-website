/**
 * Biology Module 8: Non-infectious Disease and Disorders.
 *
 * Homeostasis, the causes of non-infectious disease, and epidemiology.
 */
import type { StudyEntry } from '../types';

export const biologyNonInfectiousEntries: StudyEntry[] = [
    {
        id: 'bio-homeostasis',
        subject: 'biology',
        question: 'What is homeostasis and negative feedback?',
        aliases: ['homeostasis', 'negative feedback', 'receptor effector', 'keeping conditions steady'],
        answer:
            'Homeostasis keeps internal conditions steady. A receptor detects a change, a control centre compares it ' +
            'with the set point, and an effector acts to reverse it. ' +
            'That reversal is negative feedback, as in sweating when body temperature rises.',
    },
    {
        id: 'bio-non-infectious',
        subject: 'biology',
        question: 'What counts as a non-infectious disease?',
        aliases: ['non infectious disease', 'genetic disease', 'lifestyle disease', 'what counts as non infectious'],
        answer:
            'Diseases not caused by a pathogen: genetic, nutritional, environmental and those caused by lifestyle. ' +
            'Epidemiology studies their patterns, where incidence is new cases in a period and prevalence is total ' +
            'cases at a point in time.',
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
        id: 'bio-thermoregulation',
        subject: 'biology',
        question: 'How does the body regulate temperature?',
        aliases: ['thermoregulation', 'sweating', 'vasodilation', 'shivering', 'endotherm ectotherm'],
        answer:
            'Receptors in the skin and hypothalamus detect a change, and effectors reverse it: sweating and ' +
            'vasodilation lose heat, shivering and vasoconstriction conserve it. ' +
            'Endotherms generate their own heat; ectotherms rely on behaviour, such as basking or seeking shade.',
    },
    {
        id: 'bio-glucose-regulation',
        subject: 'biology',
        question: 'How is blood glucose regulated?',
        aliases: ['blood glucose', 'insulin', 'glucagon', 'diabetes', 'negative feedback glucose'],
        answer:
            'Rising glucose triggers insulin from the pancreas, which moves glucose into cells and stores it as ' +
            'glycogen. ' +
            'Falling glucose triggers glucagon, which releases it again. ' +
            'Type 1 diabetes is a failure to produce insulin; type 2 is reduced response to it.',
    },
    {
        id: 'bio-osmoregulation',
        subject: 'biology',
        question: 'How is water balance maintained?',
        aliases: ['osmoregulation', 'adh', 'water balance', 'kidney water', 'dehydration'],
        answer:
            'When blood becomes too concentrated, the hypothalamus triggers ADH, which makes the kidney reabsorb more ' +
            'water, producing less and darker urine. ' +
            'When it is too dilute, less ADH is released. ' +
            'Plants manage the same problem with stomatal closure and waxy cuticles.',
    },
    {
        id: 'bio-cancer',
        subject: 'biology',
        question: 'What is cancer, biologically?',
        aliases: ['cancer', 'tumour', 'metastasis', 'benign malignant', 'uncontrolled cell division'],
        answer:
            'Mutations in the genes controlling the cell cycle let a cell divide without the usual checks, forming a ' +
            'tumour. ' +
            'A benign tumour stays put; a malignant one invades tissue and can spread through blood or lymph, which ' +
            'is metastasis. Risk factors are the mutagens that cause those mutations.',
    },
    {
        id: 'bio-nutritional-disease',
        subject: 'biology',
        question: 'What are nutritional diseases?',
        aliases: ['nutritional disease', 'deficiency disease', 'scurvy', 'malnutrition', 'vitamin deficiency'],
        answer:
            'Diseases caused by too little, too much or the wrong balance of nutrients: scurvy from lack of vitamin ' +
            'C, rickets from vitamin D, anaemia from iron. ' +
            'They are non-infectious and preventable, which is why public health targets diet directly.',
    },
    {
        id: 'bio-epidemiology-method',
        subject: 'biology',
        question: 'How is an epidemiological study designed?',
        aliases: ['epidemiology method', 'incidence', 'prevalence', 'mortality', 'risk factor study'],
        answer:
            'Define the population and the measure: incidence is new cases in a period, prevalence is total cases at ' +
            'a moment, and mortality is deaths. ' +
            'Compare groups differing in one factor, control for confounders, and remember an association alone does ' +
            'not prove cause.',
    },
    {
        id: 'bio-disorders-senses',
        subject: 'biology',
        question: 'How are hearing and vision disorders treated?',
        aliases: ['hearing loss', 'cochlear implant', 'vision disorders', 'myopia', 'cataract', 'hearing aid'],
        answer:
            'Short-sightedness focuses light in front of the retina and is corrected with a concave lens; ' +
            'long-sightedness needs a convex one. ' +
            'Cataracts cloud the lens and are replaced surgically. ' +
            'Hearing aids amplify sound, while a cochlear implant bypasses damaged hair cells and stimulates the ' +
            'nerve directly.',
    },
    {
        id: 'bio-disease-prevention-education',
        subject: 'biology',
        question: 'How are non-infectious diseases prevented?',
        aliases: ['prevention non infectious', 'public health campaign', 'screening', 'lifestyle disease', 'early detection'],
        answer:
            'Education and regulation reduce exposure to risk factors such as smoking, poor diet and ultraviolet ' +
            'radiation. ' +
            'Screening programs find disease early, when treatment works better. ' +
            'Both are cheaper than treatment, which is why epidemiological evidence drives policy.',
    },
];
