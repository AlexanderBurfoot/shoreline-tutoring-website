/**
 * Physics Module 5: Advanced Mechanics.
 *
 * Projectile, circular and orbital motion, and the forces behind them.
 */
import type { StudyEntry } from '../types';

export const physicsMechanicsEntries: StudyEntry[] = [
    {
        id: 'phys-projectile',
        subject: 'physics',
        question: 'How do I solve a projectile motion question?',
        aliases: [
            'projectile motion', 'projectile physics', 'range', 'time of flight',
            'projectile equations', 'projectile extension 1', 'projectile maths',
        ],
        answer:
            'Treat the two directions separately. Horizontal velocity is constant at u cos θ, so x = u cos θ × t. ' +
            'Vertically the acceleration is g downwards, so v = u sin θ − gt and y = u sin θ × t − ½gt². ' +
            'Time links the two, and at the peak the vertical velocity is zero.',
    },
    {
        id: 'phys-circular-motion',
        subject: 'physics',
        question: 'What are the circular motion formulas?',
        aliases: ['circular motion', 'centripetal force', 'centripetal acceleration', 'uniform circular motion'],
        answer:
            'Centripetal acceleration is a = v²/r, so the net force towards the centre is F = mv²/r. ' +
            'The period and speed are linked by v = 2πr/T. The centripetal force is not a new force: it is whatever ' +
            'real force, such as tension, friction or gravity, points at the centre.',
    },
    {
        id: 'phys-gravitation',
        subject: 'physics',
        question: 'What is Newton’s law of universal gravitation?',
        aliases: ['gravitation', 'gravitational force', 'universal gravitation', 'gravitational potential energy'],
        answer:
            'F = GMm/r², with G = 6.67 × 10⁻¹¹ N m² kg⁻². Gravitational potential energy is U = −GMm/r. ' +
            'For a circular orbit, v = √(GM/r), and Kepler’s third law says r³/T² is the same for every satellite ' +
            'of the same central mass.',
    },
    {
        id: 'phys-torque',
        subject: 'physics',
        question: 'What is torque?',
        aliases: ['torque', 'moment', 'lever arm', 'rotational equilibrium'],
        answer:
            'τ = rF sin θ, where r is the distance from the pivot and θ the angle between the force and the lever arm. ' +
            'A force through the pivot gives no torque. For rotational equilibrium, clockwise and anticlockwise ' +
            'torques balance.',
    },
    {
        id: 'phys-satellites',
        subject: 'physics',
        question: 'How do satellites and orbits work?',
        aliases: ['satellite motion', 'geostationary', 'orbital period', 'low earth orbit', 'orbital speed'],
        answer:
            'Gravity supplies the centripetal force, so GMm/r² = mv²/r, giving v = √(GM/r): the closer the orbit, ' +
            'the faster the satellite. A geostationary orbit has a period of 24 hours above the equator. ' +
            'Escape speed is v = √(2GM/r).',
    },
    {
        id: 'phys-escape-velocity',
        subject: 'physics',
        question: 'What is escape velocity?',
        aliases: ['escape velocity', 'escape speed', 'leaving orbit', 'gravitational escape'],
        answer:
            'v_esc = √(2GM/r), the speed at which kinetic energy equals the depth of the gravitational well. ' +
            'It does not depend on the mass of the escaping object, and it is √2 times the speed of a circular orbit ' +
            'at the same radius.',
    },
    {
        id: 'phys-keplers-laws',
        subject: 'physics',
        question: 'What are Kepler\u2019s laws?',
        aliases: ['keplers laws', 'law of periods', 'elliptical orbits', 'equal areas', 'r cubed over t squared'],
        answer:
            'Orbits are ellipses with the central body at one focus. A line to the orbiting body sweeps equal areas in ' +
            'equal times, so it moves fastest when closest. ' +
            'The law of periods is r³/T² = GM/4π², the same value for every satellite of that body.',
    },
    {
        id: 'phys-banked-curves',
        subject: 'physics',
        question: 'How do banked curves work?',
        aliases: ['banked curve', 'banked track', 'design speed', 'conical pendulum', 'tan theta = v squared over rg'],
        answer:
            'On a frictionless banked track the horizontal component of the normal force supplies the centripetal ' +
            'force, giving tan θ = v²/rg for the design speed. ' +
            'Below that speed friction acts up the slope, above it down, which is why the angle suits one speed best.',
    },
    {
        id: 'phys-projectile-components',
        subject: 'physics',
        question: 'Why are projectile problems split into components?',
        aliases: ['projectile components', 'independence of motion', 'horizontal vertical independent', 'why split projectile'],
        answer:
            'Gravity acts vertically only, so the horizontal and vertical motions are independent and share nothing ' +
            'but the time. ' +
            'Horizontally the velocity is constant; vertically it changes at g. ' +
            'That is why a ball dropped and a ball fired horizontally from the same height land together.',
    },
    {
        id: 'phys-projectile-maximum',
        subject: 'physics',
        question: 'How do I find the maximum height and range of a projectile?',
        aliases: ['maximum height projectile', 'range of a projectile', 'time of flight', 'launch angle', '45 degrees range'],
        answer:
            'At maximum height the vertical velocity is zero, so use v = u + at to find that time, then substitute. ' +
            'Time of flight for a level landing is twice that. ' +
            'Range is the horizontal velocity times the time of flight, and on level ground it is greatest at 45°.',
    },
    {
        id: 'phys-uniform-circular-detail',
        subject: 'physics',
        question: 'Why does something in circular motion accelerate?',
        aliases: ['why circular motion accelerates', 'centripetal direction', 'changing velocity direction', 'centrifugal force'],
        answer:
            'Velocity is a vector, so even at constant speed a change of direction is a change of velocity, which is ' +
            'acceleration. ' +
            'It points towards the centre, as does the net force. ' +
            'There is no outward centrifugal force: what you feel is your own inertia carrying you straight on.',
    },
    {
        id: 'phys-torque-equilibrium',
        subject: 'physics',
        question: 'How do I solve a torque balance problem?',
        aliases: ['torque balance', 'rotational equilibrium', 'seesaw', 'beam problem', 'pivot'],
        answer:
            'For equilibrium, clockwise torques equal anticlockwise ones about any pivot, and the forces also balance. ' +
            'Choose the pivot at an unknown force so it drops out of the torque equation, since its lever arm is zero. ' +
            'Then use the force balance to find that unknown.',
    },
    {
        id: 'phys-gravitational-field',
        subject: 'physics',
        question: 'What is a gravitational field?',
        aliases: ['gravitational field strength', 'g = gm/r2', 'field strength', 'weightlessness', 'why astronauts float'],
        answer:
            'Field strength is the force per unit mass, g = GM/r², in N kg⁻¹, which is why g is about 9.8 at the ' +
            'Earth\u2019s surface. ' +
            'Astronauts in orbit are not beyond gravity: they are in free fall together with their craft, which is ' +
            'why they appear weightless.',
    },
    {
        id: 'phys-orbital-energy',
        subject: 'physics',
        question: 'How does energy work in an orbit?',
        aliases: ['orbital energy', 'gravitational potential energy negative', 'total energy of a satellite', 'changing orbits'],
        answer:
            'Gravitational potential energy is U = −GMm/r, negative because the zero is set at infinity. ' +
            'A satellite\u2019s total energy is negative while it is bound. ' +
            'Moving to a higher orbit needs energy input, although the orbital speed there is lower.',
    },
    {
        id: 'phys-momentum-two-dimensions',
        subject: 'physics',
        question: 'How do I handle momentum in two dimensions?',
        aliases: ['momentum in 2d', 'vector momentum', 'collision at an angle', 'components of momentum'],
        answer:
            'Momentum is conserved separately in each direction, so split every velocity into components and write ' +
            'one equation for each axis. ' +
            'Solve them together, then rebuild the final velocity with Pythagoras and tan⁻¹.',
    },
    {
        id: 'phys-projectile-from-height',
        subject: 'physics',
        question: 'How do I handle a projectile launched from a height?',
        aliases: ['projectile from a cliff', 'launched from a height', 'unequal start and finish height'],
        answer:
            'The flight is no longer symmetric, so do not double the time to the peak. ' +
            'Set the vertical displacement equal to the drop, with a consistent sign convention, and solve the ' +
            'quadratic for time, taking the positive root. ' +
            'Then use that time horizontally for the range.',
    },
    {
        id: 'phys-circular-applications',
        subject: 'physics',
        question: 'Where does circular motion appear in real situations?',
        aliases: ['circular motion examples', 'car on a curve', 'ferris wheel', 'loop the loop', 'string in a circle'],
        answer:
            'A car cornering relies on friction as the centripetal force, so the maximum speed depends on the road ' +
            'surface. ' +
            'At the top of a loop, gravity supplies part of it, which is why there is a minimum speed. ' +
            'On a string, tension supplies it and is greatest at the bottom of the swing.',
    },
];
