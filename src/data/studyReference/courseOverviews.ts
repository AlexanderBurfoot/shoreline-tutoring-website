/**
 * What each course and module actually covers.
 *
 * Students and parents ask this when planning revision or choosing subjects, and
 * it is the one question the topic banks do not answer.
 */
import type { StudyEntry } from './types';

export const courseOverviewEntries: StudyEntry[] = [
    {
        id: 'chem-module-overview-year11',
        subject: 'chemistry',
        question: 'What does Year 11 chemistry cover?',
        aliases: ['year 11 chemistry modules', 'preliminary chemistry topics', 'chemistry module 1 to 4'],
        answer:
            'Four modules: Properties and Structure of Matter, Introduction to Quantitative Chemistry, Reactive ' +
            'Chemistry, and Drivers of Reactions. The mole work in the second underpins everything afterwards, so it ' +
            'is the one to secure before Year 12.',
    },
    {
        id: 'chem-module-overview-year12',
        subject: 'chemistry',
        question: 'What does Year 12 chemistry cover?',
        aliases: ['year 12 chemistry modules', 'hsc chemistry topics', 'chemistry module 5 to 8'],
        answer:
            'Four modules: Equilibrium and Acid Reactions, Acid and Base Reactions, Organic Chemistry, and Applying ' +
            'Chemical Ideas. The last is analysis and synthesis and draws on all the others, so it rewards leaving ' +
            'revision time for it.',
    },
    {
        id: 'chem-module-equilibrium',
        subject: 'chemistry',
        question: 'What is in the equilibrium module?',
        aliases: ['equilibrium module', 'module 5 chemistry', 'static and dynamic equilibrium topic'],
        answer:
            'Static and dynamic equilibrium, Le Chatelier principle, the equilibrium constant and calculations with ' +
            'it, solubility equilibria and Ksp, and the industrial applications where conditions are a compromise ' +
            'between rate and yield.',
    },
    {
        id: 'chem-module-acids',
        subject: 'chemistry',
        question: 'What is in the acids and bases module?',
        aliases: ['acids and bases module', 'module 6 chemistry', 'acid base topic'],
        answer:
            'The development of acid and base definitions, pH and pOH, strong and weak acids, Ka and Kb, titration ' +
            'curves and indicator choice, buffers, and the enthalpy of neutralisation.',
    },
    {
        id: 'chem-module-organic',
        subject: 'chemistry',
        question: 'What is in the organic chemistry module?',
        aliases: ['organic module', 'module 7 chemistry', 'organic topic overview'],
        answer:
            'Nomenclature and isomerism, the properties of each functional group, reaction pathways between them, ' +
            'polymers both addition and condensation, and the biological molecules built from the same chemistry.',
    },
    {
        id: 'chem-module-applying',
        subject: 'chemistry',
        question: 'What is in the applying chemical ideas module?',
        aliases: ['applying chemical ideas', 'module 8 chemistry', 'analysis module chemistry'],
        answer:
            'Identifying ions and organic compounds by chemical test and by instrument, quantitative analysis ' +
            'including gravimetric and titration methods, spectroscopy, and the chemical synthesis and design ' +
            'questions that draw the course together.',
    },
    {
        id: 'phys-module-overview-year11',
        subject: 'physics',
        question: 'What does Year 11 physics cover?',
        aliases: ['year 11 physics modules', 'preliminary physics topics', 'physics module 1 to 4'],
        answer:
            'Four modules: Kinematics, Dynamics, Waves and Thermodynamics, and Electricity and Magnetism. The vector ' +
            'and graph work in the first two is assumed everywhere afterwards, including in the Year 12 mechanics ' +
            'module.',
    },
    {
        id: 'phys-module-overview-year12',
        subject: 'physics',
        question: 'What does Year 12 physics cover?',
        aliases: ['year 12 physics modules', 'hsc physics topics', 'physics module 5 to 8'],
        answer:
            'Four modules: Advanced Mechanics, Electromagnetism, The Nature of Light, and From the Universe to the ' +
            'Atom. The last two are heavily conceptual and historical, so they reward understanding the experiments ' +
            'rather than memorising conclusions.',
    },
    {
        id: 'phys-module-mechanics',
        subject: 'physics',
        question: 'What is in the advanced mechanics module?',
        aliases: ['advanced mechanics module', 'module 5 physics', 'projectile and circular motion topic'],
        answer:
            'Projectile motion, circular motion including banked tracks and vertical circles, and gravitational ' +
            'motion: orbits, Kepler laws, gravitational potential energy and escape velocity.',
    },
    {
        id: 'phys-module-electromagnetism',
        subject: 'physics',
        question: 'What is in the electromagnetism module?',
        aliases: ['electromagnetism module', 'module 6 physics', 'motors and generators topic'],
        answer:
            'Charged particles in electric and magnetic fields, the motor effect, electromagnetic induction with ' +
            'Faraday and Lenz, and the applications: motors, generators and transformers, including back emf and eddy ' +
            'currents.',
    },
    {
        id: 'phys-module-light',
        subject: 'physics',
        question: 'What is in the nature of light module?',
        aliases: ['nature of light module', 'module 7 physics', 'light and relativity topic'],
        answer:
            'Electromagnetic waves and Maxwell prediction, spectra and what they reveal, the wave model against the ' +
            'particle model, black body radiation and the photoelectric effect, and special relativity.',
    },
    {
        id: 'phys-module-universe',
        subject: 'physics',
        question: 'What is in the universe to the atom module?',
        aliases: ['universe to the atom', 'module 8 physics', 'nuclear and quantum topic'],
        answer:
            'The origin of the elements, the development of atomic models, quantum mechanical descriptions of the ' +
            'atom, nuclear structure and stability, fission and fusion, and the standard model of matter.',
    },
    {
        id: 'bio-module-overview-year11',
        subject: 'biology',
        question: 'What does Year 11 biology cover?',
        aliases: ['year 11 biology modules', 'preliminary biology topics', 'biology module 1 to 4'],
        answer:
            'Four modules: Cells as the Basis of Life, Organisation of Living Things, Biological Diversity, and ' +
            'Ecosystem Dynamics. The cell and transport work in the first supports the systems in the second, and the ' +
            'diversity module sets up evolution.',
    },
    {
        id: 'bio-module-overview-year12',
        subject: 'biology',
        question: 'What does Year 12 biology cover?',
        aliases: ['year 12 biology modules', 'hsc biology topics', 'biology module 5 to 8'],
        answer:
            'Four modules: Heredity, Genetic Change, Infectious Disease, and Non-infectious Disease and Disorders. ' +
            'The first two are the most technical and the last two the most writing-heavy, which is worth knowing ' +
            'when planning revision.',
    },
    {
        id: 'bio-module-heredity',
        subject: 'biology',
        question: 'What is in the heredity module?',
        aliases: ['heredity module', 'module 5 biology', 'genetics topic overview'],
        answer:
            'Reproduction in plants and animals, cell replication and DNA structure, polypeptide synthesis, ' +
            'inheritance patterns and genetic crosses, and the technologies used to sequence and compare genomes.',
    },
    {
        id: 'bio-module-genetic-change',
        subject: 'biology',
        question: 'What is in the genetic change module?',
        aliases: ['genetic change module', 'module 6 biology', 'mutation and biotechnology topic'],
        answer:
            'Mutation and its causes, biotechnology and genetic technologies including cloning and transgenic ' +
            'organisms, and the effects of all of these on biodiversity and on allele frequencies in populations.',
    },
    {
        id: 'bio-module-infectious',
        subject: 'biology',
        question: 'What is in the infectious disease module?',
        aliases: ['infectious disease module', 'module 7 biology', 'pathogens and immunity topic'],
        answer:
            'Pathogens and how disease is transmitted, plant and animal responses to infection, immunity and ' +
            'vaccination, and the prevention, treatment and control of disease including Aboriginal and Torres Strait ' +
            'Islander knowledge.',
    },
    {
        id: 'bio-module-non-infectious',
        subject: 'biology',
        question: 'What is in the non-infectious disease module?',
        aliases: ['non infectious disease module', 'module 8 biology', 'homeostasis and disorders topic'],
        answer:
            'Homeostasis and negative feedback, causes and effects of non-infectious disease, epidemiology and ' +
            'prevention, and technologies and disorders of the nervous and sensory systems.',
    },
    {
        id: 'maths-course-advanced',
        subject: 'mathematics',
        question: 'What topics are in Mathematics Advanced?',
        aliases: ['mathematics advanced topics', 'what is in maths advanced', 'advanced maths course content'],
        answer:
            'Functions, trigonometric functions, calculus, exponential and logarithmic functions, statistical ' +
            'analysis and financial mathematics. Calculus carries the largest share of marks in Year 12, and the ' +
            'statistics topic is often the one left underprepared.',
    },
    {
        id: 'maths-course-standard',
        subject: 'mathematics',
        question: 'What topics are in Mathematics Standard?',
        aliases: ['mathematics standard topics', 'what is in maths standard', 'standard maths course content'],
        answer:
            'Algebra, measurement, financial mathematics and statistical analysis, with networks added in Standard 2. ' +
            'Nearly every question is set in a context, so reading and interpretation matter as much as the ' +
            'calculation.',
    },
    {
        id: 'maths-course-extension-one',
        subject: 'mathematics',
        question: 'What topics are in Mathematics Extension 1?',
        aliases: ['extension 1 topics', 'what is in extension 1', 'extension 1 course content'],
        answer:
            'Further work on functions, trigonometric functions and calculus, plus combinatorics, proof by induction, ' +
            'vectors and further statistical analysis including the binomial distribution.',
    },
    {
        id: 'maths-course-extension-two',
        subject: 'mathematics',
        question: 'What topics are in Mathematics Extension 2?',
        aliases: ['extension 2 topics', 'what is in extension 2', 'extension 2 course content'],
        answer:
            'Proof, vectors in three dimensions, complex numbers, further calculus techniques including integration ' +
            'methods and differential equations, and mechanics.',
    },
    {
        id: 'econ-course-year11',
        subject: 'economics',
        question: 'What does Year 11 economics cover?',
        aliases: ['year 11 economics topics', 'preliminary economics', 'economics year 11 content'],
        answer:
            'Introduction to economics, consumers and business, markets, labour markets, financial markets, and ' +
            'government and the economy. The market model built here is the tool used throughout Year 12, so the ' +
            'diagrams are worth mastering early.',
    },
    {
        id: 'econ-course-year12',
        subject: 'economics',
        question: 'What does Year 12 economics cover?',
        aliases: ['year 12 economics topics', 'hsc economics', 'economics year 12 content'],
        answer:
            'The global economy, Australia place in the global economy, economic issues, and economic policies and ' +
            'management. The issues and policies topics carry the extended responses, so current statistics and ' +
            'examples matter as much as the theory.',
    },
    {
        id: 'bus-course-year11',
        subject: 'business-studies',
        question: 'What does Year 11 business studies cover?',
        aliases: ['year 11 business studies topics', 'preliminary business studies', 'business year 11 content'],
        answer:
            'Nature of business, business management, and business planning. It is the foundation for the Year 12 ' +
            'functions, and the planning topic is where the small business case study usually sits.',
    },
    {
        id: 'bus-course-year12',
        subject: 'business-studies',
        question: 'What does Year 12 business studies cover?',
        aliases: ['year 12 business studies topics', 'hsc business studies', 'business year 12 content'],
        answer:
            'Four functions: operations, marketing, finance and human resources. Each is examined with a case study ' +
            'expectation, so collecting one real business per function through the year is the single most useful ' +
            'preparation.',
    },
];
