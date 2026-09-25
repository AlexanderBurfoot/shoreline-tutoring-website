/**
 * Biology Module 2: Organisation of Living Things.
 *
 * How specialised cells, tissues and systems exchange and transport what an
 * organism needs.
 */
import type { StudyEntry } from '../types';

export const biologyOrganisationEntries: StudyEntry[] = [
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
        aliases: ['nervous system', 'endocrine system', 'hormones', 'synapse'],
        answer:
            'The nervous system sends fast electrical impulses along neurons for short-lived responses; a reflex arc ' +
            'bypasses the brain for speed. The endocrine system releases hormones into the blood, which act more ' +
            'slowly but last longer, such as insulin controlling blood glucose.',
    },
    {
        id: 'bio-organisation-levels',
        subject: 'biology',
        question: 'What are the levels of biological organisation?',
        aliases: ['levels of organisation', 'cells tissues organs', 'organ systems', 'unicellular multicellular'],
        answer:
            'Cells form tissues, tissues form organs, organs form systems, and systems form an organism. ' +
            'Multicellular organisms specialise cells for different jobs, which is why they need transport and ' +
            'coordination systems that a single-celled organism does not.',
    },
    {
        id: 'bio-gas-exchange',
        subject: 'biology',
        question: 'What makes a good exchange surface?',
        aliases: ['gas exchange', 'alveoli', 'surface area to volume', 'diffusion distance', 'lungs gills'],
        answer:
            'A large surface area, a short diffusion distance, a moist surface and a maintained concentration ' +
            'gradient, usually by a blood supply. ' +
            'Surface area to volume ratio falls as an organism grows, which is why larger animals need specialised ' +
            'exchange organs such as lungs or gills.',
    },
    {
        id: 'bio-nutrient-transport',
        subject: 'biology',
        question: 'How does the circulatory system transport nutrients?',
        aliases: ['circulatory system', 'blood vessels', 'haemoglobin', 'double circulation'],
        answer:
            'Arteries carry blood from the heart under pressure, veins return it with valves to stop backflow, and ' +
            'capillaries exchange materials with tissues. ' +
            'Haemoglobin in red cells carries oxygen, and a double circulation keeps oxygenated and deoxygenated ' +
            'blood separate.',
    },
    {
        id: 'bio-hormonal-coordination',
        subject: 'biology',
        question: 'How do hormones coordinate the body?',
        aliases: ['insulin glucagon', 'adrenaline', 'thyroxine', 'negative feedback hormone'],
        answer:
            'Glands release hormones into the blood, and only cells with the matching receptor respond. ' +
            'Insulin lowers blood glucose and glucagon raises it, a negative feedback pair. ' +
            'Adrenaline prepares the body for action; thyroxine sets metabolic rate.',
    },
    {
        id: 'bio-digestive-system',
        subject: 'biology',
        question: 'How does the digestive system work?',
        aliases: ['digestion', 'digestive system', 'villi', 'absorption of nutrients', 'digestive enzymes'],
        answer:
            'Mechanical digestion breaks food up, chemical digestion breaks molecules down with enzymes: amylase for ' +
            'starch, protease for protein, lipase for fats. ' +
            'Absorption happens in the small intestine, whose villi and microvilli give an enormous surface area and ' +
            'a very short diffusion distance to the blood.',
    },
    {
        id: 'bio-respiratory-system',
        subject: 'biology',
        question: 'How does the respiratory system exchange gases?',
        aliases: ['respiratory system', 'breathing', 'lungs', 'ventilation'],
        answer:
            'Air passes down the trachea and bronchi to the alveoli, tiny sacs with a huge combined surface area, a ' +
            'wall one cell thick, and a dense capillary network. ' +
            'Oxygen diffuses into the blood and carbon dioxide out, driven by the gradients that breathing and blood ' +
            'flow maintain.',
    },
    {
        id: 'bio-heart-structure',
        subject: 'biology',
        question: 'How does the heart work?',
        aliases: ['heart structure', 'atria ventricles', 'valves', 'cardiac cycle'],
        answer:
            'Atria receive blood and ventricles pump it out, with valves preventing backflow. ' +
            'The right side sends deoxygenated blood to the lungs, the left sends oxygenated blood to the body, which ' +
            'is why its wall is thicker. That separation is double circulation and it keeps pressure high.',
    },
    {
        id: 'bio-blood-components',
        subject: 'biology',
        question: 'What is blood made of?',
        aliases: ['blood components', 'red blood cells', 'white blood cells', 'platelets', 'plasma'],
        answer:
            'Plasma carries dissolved substances, red cells carry oxygen on haemoglobin and have no nucleus so they ' +
            'can hold more, white cells defend against pathogens, and platelets clot wounds. ' +
            'The biconcave shape of a red cell gives it more surface area for its volume.',
    },
    {
        id: 'bio-excretion',
        subject: 'biology',
        question: 'How do kidneys remove waste?',
        aliases: ['kidney', 'excretion', 'nephron', 'filtration reabsorption', 'urea'],
        answer:
            'Blood is filtered at the nephron, forcing water, salts, glucose and urea out of the capillaries. ' +
            'Useful substances, including all the glucose, are then reabsorbed, and what remains becomes urine. ' +
            'The kidney also regulates water balance, which links it to homeostasis.',
    },
    {
        id: 'bio-plant-structure',
        subject: 'biology',
        question: 'What do the parts of a plant do?',
        aliases: ['plant structure', 'root hair cells', 'leaf structure', 'palisade', 'stomata function'],
        answer:
            'Roots anchor and absorb, with root hair cells giving a large surface area. ' +
            'Stems support and transport. Leaves photosynthesise: the palisade layer holds most chloroplasts, and ' +
            'stomata on the underside let carbon dioxide in while guard cells control water loss.',
    },
    {
        id: 'bio-transpiration-factors',
        subject: 'biology',
        question: 'What affects the rate of transpiration?',
        aliases: ['transpiration rate', 'humidity', 'wind transpiration', 'potometer', 'water loss plants'],
        answer:
            'Higher temperature, more wind and lower humidity all speed it up by steepening the gradient or removing ' +
            'water vapour from the leaf surface; more light opens the stomata. ' +
            'A potometer measures uptake as a proxy for loss.',
    },
    {
        id: 'bio-autotroph-heterotroph',
        subject: 'biology',
        question: 'What is the difference between autotrophs and heterotrophs?',
        aliases: ['autotroph', 'heterotroph', 'producer consumer', 'how organisms get nutrients'],
        answer:
            'Autotrophs make their own organic molecules, usually by photosynthesis, so they are the producers in a ' +
            'food chain. ' +
            'Heterotrophs must consume other organisms, and include herbivores, carnivores, omnivores and ' +
            'decomposers.',
    },
    {
        id: 'bio-neuron-structure',
        subject: 'biology',
        question: 'How does a neuron transmit a signal?',
        aliases: ['neuron', 'axon', 'myelin', 'neurotransmitter', 'nerve impulse'],
        answer:
            'Dendrites receive, the cell body integrates, and the axon carries the impulse as a wave of electrical ' +
            'change. Myelin insulates the axon so the signal jumps between gaps and travels faster. ' +
            'At the synapse the signal crosses chemically, as neurotransmitters diffuse to the next cell.',
    },
    {
        id: 'bio-reflex-arc',
        subject: 'biology',
        question: 'What is a reflex arc?',
        aliases: ['reflex arc', 'reflex action', 'sensory neuron', 'motor neuron', 'relay neuron'],
        answer:
            'Receptor to sensory neuron to relay neuron in the spinal cord to motor neuron to effector. ' +
            'It bypasses the brain, which is why it is fast and automatic, and the brain learns about it afterwards. ' +
            'That speed is what protects you from damage.',
    },
    {
        id: 'bio-skeletal-muscle',
        subject: 'biology',
        question: 'How do muscles and bones produce movement?',
        aliases: ['muscles', 'antagonistic pairs', 'tendons', 'ligaments', 'skeleton function'],
        answer:
            'Muscles pull but cannot push, so they work in antagonistic pairs: one contracts while the other relaxes. ' +
            'Tendons join muscle to bone and ligaments join bone to bone. ' +
            'The skeleton provides support, protection, attachment points and leverage.',
    },
    {
        id: 'bio-plant-hormones',
        subject: 'biology',
        question: 'How do plants respond to their environment?',
        aliases: ['plant hormones', 'auxin', 'phototropism', 'gravitropism', 'tropism'],
        answer:
            'Growth responses are tropisms, towards or away from a stimulus. ' +
            'Auxin accumulates on the shaded side of a shoot and promotes elongation there, so the shoot bends ' +
            'towards light. ' +
            'Roots respond to gravity in the opposite sense, growing downward.',
    },
];
