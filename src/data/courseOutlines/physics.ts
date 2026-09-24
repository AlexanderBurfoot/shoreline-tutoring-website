import type { CourseOutline } from './types';

/**
 * Order follows NESA's two sample Year 12 scope and sequences (Module 5 in
 * school weeks 1 to 7, Module 6 from week 8) and Pearson Physics 12 NSW.
 */
export const physicsOutline: CourseOutline = {
    courseId: 'physics',
    overview:
        'Module 5, Advanced Mechanics, from the first projectile to satellites in orbit, then a head start on Module 6, Electromagnetism.',
    metaFocus: 'Advanced Mechanics, from projectile motion to satellites in orbit',
    syllabusNote:
        'Follows the NESA Physics Stage 6 Syllabus (2017), which the 2027 HSC examines, in the order most schools teach it.',
    lessons: [
        {
            topic: 'Projectile motion',
            title: 'Projectiles: splitting the motion in two',
            syllabusRefs: ['Module 5', 'Projectile Motion'],
            points: [
                'Resolving a launch velocity into horizontal and vertical components',
                'Why the horizontal and vertical motions are independent',
                'Projectiles launched horizontally from a height',
                'The assumptions behind the model: constant g and no air resistance',
            ],
            keySkill: 'Resolving vectors and applying the equations of motion to each direction.',
        },
        {
            topic: 'Projectile motion',
            title: 'Angled launches and the projectile equations',
            syllabusRefs: ['Module 5', 'Projectile Motion'],
            points: [
                'Deriving time of flight, maximum height, range and final velocity',
                'How launch height and angle change the path, and why 45 degrees maximises range on level ground',
                'Practical investigation: testing the model against real launch data from video analysis',
            ],
            keySkill: 'Deriving a relationship and checking it against collected data.',
        },
        {
            topic: 'Circular motion',
            title: 'Uniform circular motion',
            syllabusRefs: ['Module 5', 'Circular Motion'],
            points: [
                'Speed, period and angular velocity for an object moving in a circle',
                'Centripetal acceleration and force: a = v²/r and F = mv²/r',
                'Practical investigation: the whirling bung, relating force, mass, speed and radius',
            ],
            keySkill: 'Linearising data and reading a physical quantity from the gradient.',
        },
        {
            topic: 'Circular motion',
            title: 'Circular motion in the real world',
            syllabusRefs: ['Module 5', 'Circular Motion'],
            points: [
                'Cars on flat and banked curves, and the design speed of a banked track',
                'Masses on strings and objects on rotating platforms',
                'Why a centripetal force does no work on the object',
                'Torque as the turning effect of a force: τ = rF sinθ',
            ],
            keySkill: 'Drawing free body diagrams and resolving forces to find the net force.',
        },
        {
            topic: 'Motion in gravitational fields',
            title: 'Universal gravitation and field strength',
            syllabusRefs: ['Module 5', 'Gravitational Fields'],
            points: [
                'Newton’s law of universal gravitation',
                'Gravitational field strength at the surface of a planet and at altitude',
                'Comparing g on different planets and moons',
            ],
            keySkill: 'Ratio reasoning: predicting how a force changes when mass or distance changes.',
        },
        {
            topic: 'Motion in gravitational fields',
            title: 'Orbits and satellites',
            syllabusRefs: ['Module 5', 'Gravitational Fields'],
            points: [
                'Orbital velocity and period, by equating gravity with the centripetal force',
                'Low Earth orbits compared with geostationary orbits, and what each is used for',
                'Kepler’s third law and using it to find the mass of a planet or star',
            ],
            keySkill: 'Graphing r³ against T² to find a central mass from moon data.',
        },
        {
            topic: 'Motion in gravitational fields',
            title: 'Energy in gravitational fields',
            syllabusRefs: ['Module 5', 'Gravitational Fields'],
            points: [
                'Gravitational potential energy as U = −GMm/r, and why it is negative',
                'Total energy of an orbiting satellite and the energy needed to change orbit',
                'Escape velocity',
                'Kepler’s first and second laws',
            ],
            keySkill: 'Multi-step energy calculations for satellites and launches.',
        },
        {
            topic: 'Module 5 review',
            title: 'Advanced Mechanics in review',
            syllabusRefs: ['Module 5', 'Depth study skills'],
            points: [
                'Mixed questions across projectiles, circular motion and orbits',
                'Planning a valid investigation for a Module 5 depth study',
                'Uncertainty, error analysis and judging reliability and validity',
            ],
            keySkill: 'Evaluating an experimental method and its sources of error.',
        },
        {
            topic: 'Charged particles in fields',
            title: 'Charged particles in electric fields',
            syllabusRefs: ['Module 6', 'Charged Particles'],
            points: [
                'The uniform electric field between parallel plates: E = V/d',
                'Force and work on a charge: F = qE and W = qV',
                'Charges accelerated through a potential difference',
                'Curved paths through a field, compared with projectile motion',
            ],
            keySkill: 'Using work and energy to find the speed of an accelerated charge.',
        },
        {
            topic: 'Charged particles in fields',
            title: 'Charged particles in magnetic fields',
            syllabusRefs: ['Module 6', 'Charged Particles'],
            points: [
                'The force on a moving charge in a magnetic field: F = qvB sinθ',
                'Finding the direction of the force with the right-hand rule',
                'Circular paths and the radius r = mv/qB',
                'Comparing the effects of electric and magnetic fields',
            ],
            keySkill: 'Combining direction rules with circular motion algebra.',
        },
        {
            topic: 'Term review',
            title: 'Consolidation and term test',
            syllabusRefs: ['Module 5', 'Module 6'],
            points: [
                'HSC-style multiple choice and extended response on projectile and circular motion, gravitation and the start of electromagnetism',
                'A short test under exam conditions, marked with written feedback',
                'A plan for the summer holidays, built around the Module 6 work that opens Term 1',
            ],
            keySkill: 'Exam technique: showing working and reading what a question is really asking.',
        },
    ],
    laterTerms: [
        {
            term: 'Term 1, 2027',
            focus: 'The rest of Module 6, Electromagnetism: the motor effect, electromagnetic induction, motors, generators and transformers. Module 7, The Nature of Light, usually begins late in the term.',
        },
        {
            term: 'Term 2, 2027',
            focus: 'Module 7: the electromagnetic spectrum, wave and quantum models of light, and special relativity. Module 8, From the Universe to the Atom, begins.',
        },
        {
            term: 'Term 3, 2027',
            focus: 'Module 8 is completed: the origins of the elements, atomic and nuclear physics, and particle physics. Then trial exams and revision for the HSC.',
        },
    ],
};
