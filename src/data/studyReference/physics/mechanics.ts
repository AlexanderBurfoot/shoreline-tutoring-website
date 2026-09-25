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
        aliases: ['projectile motion', 'projectile physics', 'range', 'projectile equations', 'projectile extension 1', 'projectile maths'],
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
        aliases: ['torque', 'moment', 'lever arm'],
        answer:
            'τ = rF sin θ, where r is the distance from the pivot and θ the angle between the force and the lever arm. ' +
            'A force through the pivot gives no torque. For rotational equilibrium, clockwise and anticlockwise ' +
            'torques balance.',
    },
    {
        id: 'phys-satellites',
        subject: 'physics',
        question: 'How do satellites and orbits work?',
        aliases: ['satellite motion', 'orbital period', 'orbital speed', 'staying in orbit'],
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
        aliases: ['banked curve', 'banked track', 'design speed', 'tan theta = v squared over rg'],
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
        aliases: ['why circular motion accelerates', 'centripetal direction', 'changing velocity direction'],
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
        aliases: ['gravitational field strength', 'g = gm/r2', 'field strength', 'field around a planet'],
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
    {
        id: 'phys-centrifugal-misconception',
        subject: 'physics',
        question: 'Why is there no centrifugal force?',
        aliases: ['centrifugal force', 'thrown outward in a turn', 'why it feels like being pushed out'],
        answer:
            'Nothing pushes outward. ' +
            'Your body continues in a straight line while the car turns, so you meet the door, and the door pushes you ' +
            'inward. ' +
            'The only real force is the inward centripetal one; the outward feeling is inertia in a rotating frame.',
    },
    {
        id: 'phys-geostationary-orbit',
        subject: 'physics',
        question: 'What is a geostationary orbit?',
        aliases: ['geostationary orbit', 'low earth orbit', 'why a satellite stays above one point'],
        answer:
            'An orbit with a period of exactly one day, above the equator, so the satellite stays over the same point ' +
            'on the ground. ' +
            'That fixes its altitude at about 36,000 km. ' +
            'Low Earth orbit is far closer and faster, so those satellites sweep across the sky.',
    },
    {
        id: 'phys-weightlessness',
        subject: 'physics',
        question: 'Why do astronauts float in orbit?',
        aliases: ['weightlessness', 'apparent weightlessness', 'zero gravity', 'why astronauts float'],
        answer:
            'Not because gravity is absent: at that altitude it is nearly as strong as on the ground. ' +
            'The station and everything in it are in free fall together, accelerating at the same rate, so there is no ' +
            'contact force between them and nothing to feel.',
    },
    {
        id: 'phys-gravitational-potential-energy-space',
        subject: 'physics',
        question: 'Why is gravitational potential energy negative in space?',
        aliases: ['negative potential energy', 'u = -gmm/r', 'gravitational potential energy in space'],
        answer:
            'Because zero is defined at infinite separation, where the objects no longer attract. ' +
            'Bringing them closer releases energy, so U = −GMm/r is negative and becomes more negative as r shrinks. ' +
            'Near the ground the simpler mgh measures changes from an arbitrary zero instead.',
    },
    {
        id: 'phys-gravity-assist',
        subject: 'physics',
        question: 'What is a gravitational slingshot?',
        aliases: ['slingshot effect', 'gravity assist', 'speeding up a spacecraft with a planet'],
        answer:
            'A spacecraft passes close behind a moving planet and leaves with more speed relative to the Sun. ' +
            'Energy and momentum are conserved: the craft gains what the planet loses, which is an immeasurably small ' +
            'change for a body that massive.',
    },
    {
        id: 'phys-centre-of-mass',
        subject: 'physics',
        question: 'What is the centre of mass?',
        aliases: ['centre of mass', 'centre of gravity', 'balancing point', 'why an object topples'],
        answer:
            'The single point where the mass can be treated as concentrated, and where the weight acts. ' +
            'An object topples once its centre of mass passes beyond its base, which is why a low, wide vehicle is ' +
            'harder to roll than a tall, narrow one.',
    },
    {
        id: 'phys-levers',
        subject: 'physics',
        question: 'How do levers multiply force?',
        aliases: ['lever', 'moment arm', 'seesaw balance'],
        answer:
            'A lever balances when the moments about the pivot are equal, so a small force far from the pivot balances ' +
            'a large force close to it. ' +
            'The trade is distance: the small force must move much further, since the work done cannot increase.',
    },
    {
        id: 'phys-vertical-circle',
        subject: 'physics',
        question: 'How does tension change around a vertical circle?',
        aliases: ['vertical circle', 'tension at the top of a loop', 'minimum speed at the top'],
        answer:
            'At the top, weight and tension both point to the centre, so tension is mv²/r − mg. ' +
            'At the bottom they oppose, so tension is mv²/r + mg, the largest value. ' +
            'The minimum speed at the top is where tension reaches zero, giving v = √(gr).',
    },
    {
        id: 'phys-conical-pendulum',
        subject: 'physics',
        question: 'What forces act in a conical pendulum?',
        aliases: ['conical pendulum', 'string sweeping a circle', 'horizontal component of tension'],
        answer:
            'Only tension and weight. ' +
            'The vertical component of tension balances the weight, T cos θ = mg, and the horizontal component ' +
            'provides the centripetal force, T sin θ = mv²/r. ' +
            'Dividing one by the other gives tan θ = v²/rg.',
    },
    {
        id: 'phys-projectile-air-resistance',
        subject: 'physics',
        question: 'How does air resistance change a projectile path?',
        aliases: ['projectile with air resistance', 'shortened range', 'asymmetric trajectory'],
        answer:
            'Drag opposes motion, so the horizontal velocity is no longer constant and the range and maximum height ' +
            'both fall. ' +
            'The path becomes asymmetric: the descent is steeper than the climb, and the object lands more slowly than ' +
            'it was launched.',
    },
    {
        id: 'phys-orbital-decay',
        subject: 'physics',
        question: 'Why do low satellites eventually fall?',
        aliases: ['orbital decay', 'atmospheric drag on a satellite', 'deorbiting'],
        answer:
            'There is still a trace of atmosphere in low orbit, so drag slowly removes energy. The orbit shrinks, ' +
            'which speeds the satellite up while lowering it, until it reaches air dense enough to burn it up.',
    },
    {
        id: 'phys-kepler-third-law-use',
        subject: 'physics',
        question: 'How do I use the law of periods in a calculation?',
        aliases: ['using the law of periods', 'comparing two orbits', 'r cubed over t squared calculation'],
        answer:
            'Because r³/T² is the same for every satellite of the same central body, you can set the ratio for one ' +
            'orbit equal to the ratio for another and solve for the unknown, without ever needing the mass or G.',
    },
    {
        id: 'phys-apparent-weight-circular',
        subject: 'physics',
        question: 'Why do I feel heavier at the bottom of a loop?',
        aliases: ['apparent weight in a loop', 'feeling heavy at the bottom', 'roller coaster forces'],
        answer:
            'At the bottom the seat must both support your weight and provide the centripetal force, so the contact ' +
            'force is mg + mv²/r. At the top gravity contributes to the centripetal force, so the contact force is ' +
            'smaller.',
    },
    {
        id: 'phys-gravitational-field-lines',
        subject: 'physics',
        question: 'What do gravitational field lines show?',
        aliases: ['gravitational field lines', 'field lines point inward', 'uniform field near the ground'],
        answer:
            'Direction and relative strength: they point towards the mass, and closer spacing means a stronger field. ' +
            'Near the ground they are effectively parallel and evenly spaced, which is why g is treated as constant ' +
            'there.',
    },
    {
        id: 'phys-torque-on-a-loop',
        subject: 'physics',
        question: 'Why does a current loop experience a turning effect rather than a push?',
        aliases: ['turning effect on a loop', 'opposite forces on opposite sides', 'couple on a coil'],
        answer:
            'Opposite sides carry current in opposite directions, so the forces on them are opposite in direction but ' +
            'offset from the axis. That pair of forces forms a couple, which rotates the loop instead of translating ' +
            'it.',
    },
    {
        id: 'phys-rotational-inertia-idea',
        subject: 'physics',
        question: 'Why is a wheel harder to spin when its mass is at the rim?',
        aliases: ['mass distribution and rotation', 'flywheel', 'why mass at the rim matters'],
        answer:
            'Because the turning effect needed depends on how far the mass sits from the axis, not just on how much ' +
            'there is. Mass at the rim resists a change in rotation most, which is why flywheels are built that way.',
    },
    {
        id: 'phys-centre-of-mass-motion',
        subject: 'physics',
        question: 'What happens to the centre of mass during an explosion or collision?',
        aliases: ['centre of mass keeps moving', 'motion of the centre of mass', 'fireworks centre of mass'],
        answer:
            'It continues on the path the external forces dictate, however the pieces scatter. A firework shell ' +
            'bursting mid-flight scatters fragments, but their centre of mass follows the original parabola.',
    },
    {
        id: 'phys-projectile-symmetry',
        subject: 'physics',
        question: 'What is symmetric about a projectile path?',
        aliases: ['symmetry of a projectile', 'same speed at the same height', 'equal times up and down'],
        answer:
            'For a level launch and landing, the time up equals the time down, the speed at any height on the way up ' +
            'equals the speed at that height coming down, and the launch and landing angles are equal.',
    },
    {
        id: 'phys-satellite-speed-vs-radius',
        subject: 'physics',
        question: 'Why does a lower satellite travel faster?',
        aliases: ['lower orbit faster', 'orbital speed and radius', 'why the moon moves slowly'],
        answer:
            'Because gravity provides the centripetal force, v = √(GM/r), so speed rises as the radius falls. The ' +
            'International Space Station circles in 90 minutes while the Moon takes a month.',
    },
    {
        id: 'phys-weight-on-other-planets',
        subject: 'physics',
        question: 'How do I find the weight of something on another planet?',
        aliases: ['weight on another planet', 'g on mars', 'comparing gravity between planets'],
        answer:
            'Calculate g there from g = GM/r² using that planet mass and radius, then multiply by the mass of the ' +
            'object. Mass is unchanged, so only the field strength differs.',
    },
];
