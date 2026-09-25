/**
 * Biology Module 7: Infectious Disease.
 *
 * Pathogens, transmission, immunity and how outbreaks are controlled.
 */
import type { StudyEntry } from '../types';

export const biologyInfectiousDiseaseEntries: StudyEntry[] = [
    {
        id: 'bio-immune-response',
        subject: 'biology',
        question: 'How does the immune response work?',
        aliases: ['immune response', 'antigen', 'how the body fights infection'],
        answer:
            'Non-specific defences act first: skin, mucus and inflammation. ' +
            'The specific response follows, with B cells making antibodies against an antigen and T cells destroying ' +
            'infected cells. Memory cells make the second response faster, which is what vaccination relies on.',
    },
    {
        id: 'bio-pathogens',
        subject: 'biology',
        question: 'What are the types of pathogen?',
        aliases: ['pathogens', 'bacteria virus', 'types of pathogen', 'kochs postulates'],
        answer:
            'Bacteria, viruses, fungi, protozoa, prions and macroparasites. ' +
            'Antibiotics work on bacteria but not viruses, because viruses replicate inside host cells. ' +
            'Koch’s postulates are the steps that link one specific pathogen to a disease.',
    },
    {
        id: 'bio-prevention-treatment',
        subject: 'biology',
        question: 'How are infectious diseases prevented and treated?',
        aliases: ['preventing infection', 'public health', 'hygiene', 'treating an infection'],
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
        id: 'bio-antibiotic-resistance',
        subject: 'biology',
        question: 'How does antibiotic resistance develop?',
        aliases: ['antibiotic resistance', 'superbug', 'resistant bacteria', 'selection pressure antibiotics'],
        answer:
            'Random mutation gives a few bacteria resistance. The antibiotic kills the rest, so the resistant ones ' +
            'reproduce and come to dominate: natural selection in a matter of days. ' +
            'Finishing a course and prescribing only when needed slow it down.',
    },
    {
        id: 'bio-disease-transmission',
        subject: 'biology',
        question: 'How are infectious diseases transmitted?',
        aliases: ['transmission', 'direct contact', 'airborne disease', 'water borne'],
        answer:
            'By direct contact, droplets and aerosols, contaminated food or water, body fluids, or a vector such as a ' +
            'mosquito that carries the pathogen between hosts. ' +
            'The route decides the control measure: hand washing, clean water, quarantine or vector control.',
    },
    {
        id: 'bio-first-second-line',
        subject: 'biology',
        question: 'What are the first and second lines of defence?',
        aliases: ['first line of defence', 'second line of defence', 'phagocyte', 'non specific defence'],
        answer:
            'The first line keeps pathogens out: skin, mucus, cilia, stomach acid and tears. ' +
            'The second is non-specific and internal: inflammation brings blood and white cells to the site, fever ' +
            'slows pathogens, and phagocytes engulf them.',
    },
    {
        id: 'bio-adaptive-immunity',
        subject: 'biology',
        question: 'How does the third line of defence work?',
        aliases: ['adaptive immunity', 'humoral response', 'cell mediated', 'helper t cell', 'memory cell'],
        answer:
            'It is specific to the antigen. ' +
            'The humoral response uses B cells, which make antibodies that mark pathogens. ' +
            'The cell-mediated response uses T cells, which destroy infected cells, with helper T cells coordinating ' +
            'both. Memory cells make the second exposure faster and stronger.',
    },
    {
        id: 'bio-immunity-types',
        subject: 'biology',
        question: 'What are the types of immunity?',
        aliases: ['active immunity', 'passive immunity', 'natural immunity', 'artificial immunity', 'antivenom'],
        answer:
            'Active immunity means your own immune system responds, from infection or vaccination, and lasts because ' +
            'memory cells form. ' +
            'Passive immunity means receiving antibodies, through the placenta, breast milk or an injection such as ' +
            'antivenom; it works immediately but fades.',
    },
    {
        id: 'bio-vaccination-herd',
        subject: 'biology',
        question: 'How do vaccines and herd immunity work?',
        aliases: ['vaccine', 'herd immunity', 'vaccination program', 'booster', 'eradication'],
        answer:
            'A vaccine presents an antigen without causing disease, so memory cells form before exposure. ' +
            'When enough of a population is immune, transmission chains break and even the unvaccinated are ' +
            'protected, which is herd immunity and how smallpox was eradicated.',
    },
    {
        id: 'bio-epidemic-pandemic',
        subject: 'biology',
        question: 'What is the difference between an epidemic and a pandemic?',
        aliases: ['epidemic', 'pandemic', 'endemic', 'outbreak', 'disease spread control'],
        answer:
            'Endemic means constantly present in an area, an epidemic is an unusual rise in cases, and a pandemic is ' +
            'an epidemic across countries or continents. ' +
            'Control uses surveillance, quarantine, vaccination, vector control and public education.',
    },
    {
        id: 'bio-antibiotics-antivirals',
        subject: 'biology',
        question: 'How do antibiotics and antivirals differ?',
        aliases: ['antibiotics', 'antivirals', 'why antibiotics dont work on viruses', 'broad spectrum'],
        answer:
            'Antibiotics attack structures or processes bacteria have and we do not, such as cell wall synthesis, so ' +
            'they cannot touch viruses, which have neither and replicate inside our own cells. ' +
            'Antivirals instead block stages of the viral life cycle, which is harder without harming the host.',
    },
    {
        id: 'bio-plant-pathogens',
        subject: 'biology',
        question: 'How does disease affect plants and agriculture?',
        aliases: ['plant disease management', 'crop disease', 'quarantine agriculture', 'fungicide', 'resistant varieties'],
        answer:
            'Plant pathogens spread through soil, water, wind, insects and infected stock, and can destroy a crop ' +
            'because monocultures are genetically uniform. ' +
            'Management combines quarantine, crop rotation, resistant varieties, chemical control and removing ' +
            'infected plants.',
    },
    {
        id: 'bio-indigenous-medicine',
        subject: 'biology',
        question: 'How did Aboriginal and Torres Strait Islander Peoples manage disease?',
        aliases: ['aboriginal medicine', 'traditional medicine', 'bush medicine', 'first nations health knowledge'],
        answer:
            'Long-standing practices include using specific plants with antiseptic or analgesic properties, smoke ' +
            'from particular species, and protocols that separated the sick. ' +
            'The syllabus asks you to describe the practice and the biological reason it works, not merely to list ' +
            'examples.',
    },
    {
        id: 'bio-germ-theory',
        subject: 'biology',
        question: 'How was it shown that microbes cause disease?',
        aliases: ['germ theory', 'koch postulates', 'pasteur experiment', 'proving a pathogen causes a disease'],
        answer:
            'Pasteur showed that broth stayed sterile unless microbes reached it, ending spontaneous generation. ' +
            'Koch then set the standard still used: find the microbe in every case, grow it in pure culture, give the ' +
            'disease to a healthy host with it, and recover the same microbe again.',
    },
    {
        id: 'bio-disease-vectors',
        subject: 'biology',
        question: 'What is a disease vector?',
        aliases: ['vector', 'mosquito and malaria', 'vector control', 'insect borne disease'],
        answer:
            'An organism that carries a pathogen from one host to another without necessarily being harmed itself. ' +
            'Mosquitoes carry malaria and dengue, ticks carry bacteria, aphids carry plant viruses. ' +
            'Controlling the vector, by removing standing water or using nets, breaks the chain.',
    },
    {
        id: 'bio-lymphatic-system',
        subject: 'biology',
        question: 'What does the lymphatic system do in defence?',
        aliases: ['lymphatic system', 'lymph node', 'lymph', 'swollen glands'],
        answer:
            'It drains tissue fluid back to the blood and filters it through lymph nodes packed with lymphocytes and ' +
            'phagocytes, where pathogens are detected and destroyed. ' +
            'Nodes swell during an infection because lymphocytes there are dividing rapidly.',
    },
    {
        id: 'bio-inflammation',
        subject: 'biology',
        question: 'What causes inflammation?',
        aliases: ['inflammation', 'histamine', 'redness and swelling', 'inflammatory response'],
        answer:
            'Damaged cells and mast cells release histamine, which widens local blood vessels and makes them leakier. ' +
            'More blood brings warmth and redness, escaping fluid brings swelling, and phagocytes can pass into the ' +
            'tissue to engulf pathogens.',
    },
    {
        id: 'bio-biosecurity-australia',
        subject: 'biology',
        question: 'How does Australia limit the entry and spread of disease?',
        aliases: ['quarantine', 'biosecurity', 'border control of disease', 'contact tracing'],
        answer:
            'Border inspection and quarantine of animals, plants and produce, surveillance for new outbreaks, ' +
            'notifiable disease reporting, contact tracing, and movement controls during an outbreak. ' +
            'Being an island makes exclusion unusually effective, which is why some diseases here remain absent.',
    },
    {
        id: 'bio-antibody-action',
        subject: 'biology',
        question: 'How do antibodies work?',
        aliases: ['antibody', 'antibodies', 'antibody specificity', 'agglutination'],
        answer:
            'An antibody has a binding site shaped to one antigen, so each is specific. ' +
            'Binding marks the pathogen for phagocytes, clumps pathogens together so they are easier to engulf, and ' +
            'can neutralise a toxin or block a virus from entering a cell.',
    },
];
