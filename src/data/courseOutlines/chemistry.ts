import type { CourseOutline } from './types';

/**
 * Order follows NESA's sample Year 12 scope and sequences, which spend all or
 * nearly all of Term 4 on Module 5, and the syllabus order of its inquiry
 * questions. Pearson Chemistry 12 NSW teaches Keq before the factors affecting
 * equilibrium; the syllabus order is kept here because most school programs
 * follow it.
 */
export const chemistryOutline: CourseOutline = {
    courseId: 'chemistry',
    overview:
        'Module 5, Equilibrium and Acid Reactions, from why some reactions never finish to calculating Keq and Ksp, with a first look at Module 6.',
    metaFocus: 'Equilibrium and Acid Reactions, including Keq and Ksp calculations',
    syllabusNote:
        'Follows the NESA Chemistry Stage 6 Syllabus (2017), which the 2027 HSC examines, in the order most schools teach it.',
    lessons: [
        {
            topic: 'Static and dynamic equilibrium',
            title: 'Reversible reactions and dynamic equilibrium',
            syllabusRefs: ['Module 5', 'Static and Dynamic Equilibrium'],
            points: [
                'Open and closed systems, and static compared with dynamic equilibrium',
                'What is happening to reaction rates when a system reaches equilibrium',
                'Practical investigations: hydrating cobalt(II) chloride and the iron(III) thiocyanate equilibrium, contrasted with burning magnesium',
            ],
            keySkill: 'Sketching and reading concentration and rate graphs for a system reaching equilibrium.',
        },
        {
            topic: 'Static and dynamic equilibrium',
            title: 'Why some reactions never reach equilibrium',
            syllabusRefs: ['Module 5', 'Static and Dynamic Equilibrium'],
            points: [
                'Enthalpy and entropy, and Gibbs free energy: ΔG = ΔH − TΔS',
                'Combustion and photosynthesis as reactions that are not in equilibrium',
                'How activation energy and the heat of reaction relate to reversibility',
            ],
            keySkill: 'Calculating ΔG and using its sign to decide whether a reaction is spontaneous.',
        },
        {
            topic: 'Factors that affect equilibrium',
            title: 'Le Chatelier’s principle',
            syllabusRefs: ['Module 5', 'Factors that Affect Equilibrium'],
            points: [
                'How changes in concentration, pressure, volume and temperature shift an equilibrium',
                'Explaining each shift with collision theory',
                'Practical investigations: the NO₂ and N₂O₄ system, adding ions to iron(III) thiocyanate, and heating cobalt chloride',
            ],
            keySkill: 'Predicting the direction of a shift and justifying it in a full written answer.',
        },
        {
            topic: 'Factors that affect equilibrium',
            title: 'Reading equilibrium graphs',
            syllabusRefs: ['Module 5', 'Factors that Affect Equilibrium'],
            points: [
                'Identifying the change made to a system from a concentration against time graph',
                'Why a catalyst speeds up both reactions but does not move the equilibrium',
                'Balancing yield against rate in industrial processes',
            ],
            keySkill: 'Interpreting unfamiliar graphs in HSC-style questions.',
        },
        {
            topic: 'The equilibrium constant',
            title: 'Writing and interpreting Keq',
            syllabusRefs: ['Module 5', 'Calculating the Equilibrium Constant'],
            points: [
                'Writing the equilibrium expression for reactions in solution and in the gas phase',
                'What a large or small Keq says about the position of equilibrium',
                'Comparing the reaction quotient Q with Keq to predict which way a reaction goes',
                'Why temperature is the only factor that changes Keq',
            ],
            keySkill: 'Writing Keq expressions and reasoning with Q against Keq.',
        },
        {
            topic: 'The equilibrium constant',
            title: 'Keq calculations',
            syllabusRefs: ['Module 5', 'Calculating the Equilibrium Constant'],
            points: [
                'Setting up ICE tables from initial amounts',
                'Calculating Keq from equilibrium data',
                'Finding an unknown equilibrium concentration from Keq',
            ],
            keySkill: 'Working through a multi-step ICE table calculation without losing the stoichiometry.',
        },
        {
            topic: 'The equilibrium constant',
            title: 'Measuring Keq in the laboratory',
            syllabusRefs: ['Module 5', 'Calculating the Equilibrium Constant'],
            points: [
                'Practical investigation: finding Keq for iron(III) thiocyanate by colorimetry',
                'Building and using a calibration curve',
                'Equilibrium constants for ionisation, introducing Ka for weak acids',
            ],
            keySkill: 'Using a calibration curve and identifying the main sources of error.',
        },
        {
            topic: 'Solution equilibria',
            title: 'Dissolving and precipitation',
            syllabusRefs: ['Module 5', 'Solution Equilibria'],
            points: [
                'What happens to ionic compounds as they dissolve in water',
                'Practical investigation: using solubility rules to predict precipitates',
                'How Aboriginal and Torres Strait Islander Peoples remove toxins from foods such as cycad fruit',
            ],
            keySkill: 'Writing net ionic equations for precipitation reactions.',
        },
        {
            topic: 'Solution equilibria',
            title: 'The solubility product, Ksp',
            syllabusRefs: ['Module 5', 'Solution Equilibria'],
            points: [
                'Writing Ksp expressions for sparingly soluble salts',
                'Calculating solubility from Ksp, and Ksp from solubility',
                'Predicting whether a precipitate forms when two solutions are mixed, allowing for dilution',
            ],
            keySkill: 'Multi-step Ksp calculations, including the dilution step students most often miss.',
        },
        {
            topic: 'Module 5 review',
            title: 'Equilibrium in review, and a first look at acids',
            syllabusRefs: ['Module 5', 'Module 6 preview'],
            points: [
                'Designing and evaluating an equilibrium investigation for a depth study',
                'Structuring extended responses that bring several ideas together',
                'Arrhenius and Brønsted–Lowry definitions of acids and bases, ready for Term 1',
            ],
            keySkill: 'Judging the validity and reliability of an investigation.',
        },
        {
            topic: 'Term review',
            title: 'Consolidation and term test',
            syllabusRefs: ['Module 5'],
            points: [
                'HSC-style multiple choice and extended response on equilibrium, Keq and Ksp, and acid and base reactions',
                'A short test under exam conditions, marked with written feedback',
                'A plan for the summer holidays, built around the titration and buffer work that opens Term 1',
            ],
            keySkill: 'Exam technique: setting out calculations so every step earns its mark.',
        },
    ],
    laterTerms: [
        {
            term: 'Term 1, 2027',
            focus: 'Module 6, Acid/Base Reactions: acid and base theories, pH calculations, titrations and buffers. Module 7, Organic Chemistry, usually begins late in the term.',
        },
        {
            term: 'Term 2, 2027',
            focus: 'Module 7: naming organic compounds, hydrocarbons, alcohols, organic acids and bases, and polymers. Module 8, Applying Chemical Ideas, begins.',
        },
        {
            term: 'Term 3, 2027',
            focus: 'Module 8 is completed: analysing inorganic and organic substances, and chemical synthesis. Then trial exams and revision for the HSC.',
        },
    ],
};
