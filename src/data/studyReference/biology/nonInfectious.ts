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
        aliases: ['non infectious disease', 'genetic disease', 'what counts as non infectious'],
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
    {
        id: 'bio-cardiovascular-disease',
        subject: 'biology',
        question: 'What causes cardiovascular disease?',
        aliases: ['cardiovascular disease', 'atherosclerosis', 'heart attack', 'plaque in arteries', 'stroke'],
        answer:
            'Fatty plaque builds up in artery walls, narrowing them and reducing blood flow. ' +
            'A clot at a narrowed point starves the heart muscle, causing a heart attack, or the brain, causing a ' +
            'stroke. ' +
            'Smoking, high blood pressure, inactivity and diet all raise the risk.',
    },
    {
        id: 'bio-asthma',
        subject: 'biology',
        question: 'What happens during an asthma attack?',
        aliases: ['asthma', 'bronchoconstriction', 'inhaler', 'airways narrowing'],
        answer:
            'A trigger inflames the airway lining, the smooth muscle around the bronchioles contracts, and mucus ' +
            'increases, so the airway narrows and breathing out becomes difficult. ' +
            'A reliever inhaler relaxes that muscle; a preventer reduces the underlying inflammation.',
    },
    {
        id: 'bio-diabetes-types',
        subject: 'biology',
        question: 'What is the difference between type 1 and type 2 diabetes?',
        aliases: ['type 1 diabetes', 'type 2 diabetes', 'insulin resistance', 'managing diabetes'],
        answer:
            'In type 1 the immune system destroys the insulin-producing cells, so insulin must be injected. ' +
            'In type 2 insulin is made but cells respond poorly to it, and it is managed with diet, exercise and ' +
            'medication. ' +
            'Both leave blood glucose too high.',
    },
    {
        id: 'bio-cancer-risk-factors',
        subject: 'biology',
        question: 'What increases the risk of cancer?',
        aliases: ['cancer risk factors', 'uv and skin cancer', 'smoking and cancer', 'causes of cancer'],
        answer:
            'Anything that damages DNA or speeds cell division: tobacco smoke, ultraviolet light, some viruses, ' +
            'certain chemicals, and inherited mutations. ' +
            'Risk factors raise probability rather than guarantee disease, which is why epidemiology works with ' +
            'populations rather than individuals.',
    },
    {
        id: 'bio-dialysis',
        subject: 'biology',
        question: 'How does dialysis replace kidney function?',
        aliases: ['dialysis', 'kidney failure', 'dialysis membrane', 'kidney transplant'],
        answer:
            'Blood flows past a partially permeable membrane with dialysis fluid on the other side. ' +
            'Urea and excess ions diffuse out down their concentration gradients, while glucose and proteins are kept ' +
            'by matching the fluid or by size. ' +
            'A transplant restores the function permanently.',
    },
    {
        id: 'bio-positive-feedback',
        subject: 'biology',
        question: 'What is positive feedback in the body?',
        aliases: ['positive feedback', 'oxytocin in childbirth', 'clotting cascade'],
        answer:
            'A response that amplifies the change instead of reversing it, driving a process to completion. ' +
            'Contractions release oxytocin, which strengthens contractions; a clot releases factors that recruit more ' +
            'clotting. ' +
            'It is rare in the body because it is unstable, so it needs an endpoint.',
    },
    {
        id: 'bio-disease-in-australia',
        subject: 'biology',
        question: 'Which non-infectious diseases are most common in Australia?',
        aliases: ['disease in australia', 'indigenous health', 'burden of disease', 'australian health statistics'],
        answer:
            'Cardiovascular disease, cancer, type 2 diabetes, chronic respiratory disease and mental illness carry ' +
            'the largest burden. ' +
            'Rates are higher in remote areas and among Aboriginal and Torres Strait Islander communities, reflecting ' +
            'access to services, housing and food security.',
    },
    {
        id: 'bio-genetic-screening',
        subject: 'biology',
        question: 'What is genetic screening?',
        aliases: ['genetic screening', 'prenatal testing', 'amniocentesis', 'carrier testing'],
        answer:
            'Testing DNA for alleles linked to disease, either in a fetus, a newborn or a prospective parent. ' +
            'It allows early treatment and informed choice, but raises questions about privacy, insurance, and how to ' +
            'act on a result that gives a probability rather than a certainty.',
    },
    {
        id: 'bio-hormone-disorders',
        subject: 'biology',
        question: 'What happens when hormone levels are wrong?',
        aliases: ['hormonal disorder', 'thyroid disorder', 'goitre', 'growth hormone'],
        answer:
            'Too little or too much of a hormone disrupts the process it controls. ' +
            'Too little thyroxine slows metabolism and causes fatigue and weight gain; too much speeds it. ' +
            'Iodine deficiency enlarges the thyroid into a goitre, since the gland cannot make the hormone it is ' +
            'being told to produce.',
    },
];
