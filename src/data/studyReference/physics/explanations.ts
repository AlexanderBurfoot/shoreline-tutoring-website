/**
 * Physics: the questions students ask about everyday observations.
 *
 * Why heavy objects do not fall faster, why the sky is blue, and the other
 * explanations that reward understanding rather than a formula.
 */
import type { StudyEntry } from '../types';

export const physicsExplanationEntries: StudyEntry[] = [
    {
        id: 'phys-heavier-not-faster',
        subject: 'physics',
        question: 'Why does a heavier object not fall faster?',
        aliases: ['why heavy things dont fall faster', 'do heavier objects fall faster', 'galileo falling objects'],
        answer:
            'Because doubling the mass doubles both the gravitational force and the inertia resisting it, so a = F/m ' +
            'is unchanged at g. In air a feather falls slower only because drag is large compared with its weight, ' +
            'which is why the same feather and a hammer land together in a vacuum.',
    },
    {
        id: 'phys-energy-versus-power',
        subject: 'physics',
        question: 'What is the difference between energy and power?',
        aliases: ['energy versus power', 'joules and watts difference', 'is power the same as energy'],
        answer:
            'Energy is the total transferred, in joules; power is the rate of transfer, in watts, which is joules per ' +
            'second. A 2,000 W heater running for an hour uses the same energy as a 1,000 W heater running for two.',
    },
    {
        id: 'phys-bounce-height',
        subject: 'physics',
        question: 'Why does a ball bounce lower each time?',
        aliases: ['why a ball bounces lower', 'energy lost in a bounce', 'coefficient of restitution'],
        answer:
            'Each impact deforms the ball and the surface, and some kinetic energy becomes heat and sound rather than ' +
            'returning as elastic potential energy. Momentum is still conserved in the collision, but the mechanical ' +
            'energy is not.',
    },
    {
        id: 'phys-superconductor',
        subject: 'physics',
        question: 'What is a superconductor?',
        aliases: ['superconductor', 'zero resistance', 'critical temperature'],
        answer:
            'A material whose electrical resistance falls to exactly zero below a critical temperature, so a current ' +
            'continues without a supply and magnetic fields are expelled. Keeping materials that cold is the ' +
            'practical obstacle, and it is why they appear in MRI magnets rather than household wiring.',
    },
    {
        id: 'phys-lift-sensation',
        subject: 'physics',
        question: 'Why do I feel lighter or heavier in a lift?',
        aliases: ['feeling heavy in a lift', 'apparent weight in a lift', 'lift accelerating upward'],
        answer:
            'You feel the contact force from the floor, not gravity. Accelerating upward the floor must push with ' +
            'more than your weight, N = m(g + a), so you feel heavier, and accelerating downward it pushes with less. ' +
            'In free fall it pushes with nothing at all.',
    },
    {
        id: 'phys-sky-blue',
        subject: 'physics',
        question: 'Why is the sky blue and the sunset red?',
        aliases: ['why is the sky blue', 'why sunsets are red', 'rayleigh scattering'],
        answer:
            'Air molecules scatter short wavelengths far more than long ones, so blue light is redirected across the ' +
            'whole sky. At sunset the light travels through much more atmosphere, so the blue is scattered out of the ' +
            'beam and what reaches you is red.',
    },
    {
        id: 'phys-stars-twinkle',
        subject: 'physics',
        question: 'Why do stars twinkle but planets do not?',
        aliases: ['why stars twinkle', 'twinkling of stars', 'atmospheric turbulence'],
        answer:
            'Pockets of air at different temperatures refract starlight by varying amounts, so a point source appears ' +
            'to flicker. A planet is a small disc rather than a point, so the fluctuations across it average out and ' +
            'it shines steadily.',
    },
];
