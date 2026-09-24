/**
 * Physics Module 2: Dynamics.
 *
 * Forces, momentum and energy, and the laws that link them to motion.
 */
import type { StudyEntry } from '../types';

export const physicsDynamicsEntries: StudyEntry[] = [
    {
        id: 'phys-newtons-laws',
        subject: 'physics',
        question: 'What are Newton’s three laws?',
        aliases: ['newtons laws', 'f = ma', 'newtons second law', 'inertia', 'action reaction'],
        answer:
            'First: an object keeps its velocity unless a net force acts. Second: F = ma, so net force gives ' +
            'acceleration in the same direction. Third: forces come in equal and opposite pairs, acting on different ' +
            'objects, which is why they never cancel out.',
    },
    {
        id: 'phys-momentum',
        subject: 'physics',
        question: 'What is momentum and when is it conserved?',
        aliases: ['momentum', 'impulse', 'conservation of momentum', 'collision physics'],
        answer:
            'Momentum is p = mv, and impulse is the change in it: J = FΔt = Δp. ' +
            'Total momentum is conserved in any collision with no external force. Kinetic energy is conserved only in ' +
            'elastic collisions, which is what separates elastic from inelastic.',
    },
    {
        id: 'phys-work-energy',
        subject: 'physics',
        question: 'What are the work and energy formulas?',
        aliases: ['work done', 'kinetic energy', 'potential energy', 'power formula', 'conservation of energy'],
        answer:
            'Work is W = Fs cos θ, kinetic energy is Ek = ½mv², and gravitational potential energy near Earth is ' +
            'Ep = mgh. Power is P = W/t, or P = Fv. Energy is conserved overall, so losses usually appear as heat.',
    },
    {
        id: 'phys-forces-friction',
        subject: 'physics',
        question: 'How do I work out the acceleration on an inclined plane?',
        aliases: ['inclined plane', 'acceleration on a slope', 'ramp problem'],
        answer:
            'Draw a free body diagram and resolve the weight into components: mg sin θ down the slope and mg cos θ ' +
            'into it. The normal force balances the second, and friction is F = μN opposing motion. ' +
            'Net force along the slope gives the acceleration through F = ma.',
    },
    {
        id: 'phys-terminal-velocity',
        subject: 'physics',
        question: 'What is terminal velocity?',
        aliases: ['terminal velocity', 'air resistance', 'drag force', 'falling with drag', 'velocity time graph drag'],
        answer:
            'Drag grows with speed, so a falling object accelerates less and less until drag balances weight and the ' +
            'net force is zero. From then the velocity is constant. ' +
            'On a velocity-time graph the curve flattens towards that asymptote.',
    },
    {
        id: 'phys-relativistic-momentum',
        subject: 'physics',
        question: 'What happens to mass and momentum near light speed?',
        aliases: ['relativistic momentum', 'mass energy equivalence', 'relativistic mass', 'particle accelerator'],
        answer:
            'Momentum becomes p = mv/√(1 − v²/c²), so it grows without limit as v approaches c, which is why no ' +
            'object with mass can reach light speed. ' +
            'The energy put in appears as mass through E = mc², which particle accelerators use to create new particles.',
    },
    {
        id: 'phys-free-body-diagram',
        subject: 'physics',
        question: 'How do I draw a free body diagram?',
        aliases: ['free body diagram', 'force diagram', 'net force', 'forces on an object', 'resultant force'],
        answer:
            'Draw the object as a dot and every force acting on it as an arrow pointing away, labelled with what ' +
            'causes it: weight, normal force, tension, friction, applied force. ' +
            'Leave out forces the object exerts on other things. ' +
            'Add the arrows as vectors to get the net force, then use F = ma.',
    },
    {
        id: 'phys-weight-mass',
        subject: 'physics',
        question: 'What is the difference between mass and weight?',
        aliases: ['mass vs weight', 'weight force', 'w = mg', 'newtons and kilograms', 'weight on the moon'],
        answer:
            'Mass is how much matter there is, in kilograms, the same everywhere. ' +
            'Weight is the gravitational force on that mass, W = mg in newtons, so it changes with location. ' +
            'On the Moon the mass is unchanged but the weight is about a sixth.',
    },
    {
        id: 'phys-friction-types',
        subject: 'physics',
        question: 'How does friction work?',
        aliases: ['friction', 'static friction', 'kinetic friction', 'coefficient of friction', 'limiting friction'],
        answer:
            'Friction opposes relative motion and is F = μN, where N is the normal force. ' +
            'Static friction adjusts itself up to a maximum, which is why a pushed box stays still until the push is ' +
            'large enough; once moving, kinetic friction is usually smaller and roughly constant.',
    },
    {
        id: 'phys-inclined-plane-detail',
        subject: 'physics',
        question: 'How do I set up forces on a slope?',
        aliases: ['slope components', 'mg sin theta', 'mg cos theta', 'block on a ramp', 'resolving on a slope'],
        answer:
            'Tilt your axes to lie along the slope. Weight splits into mg sin θ down the slope and mg cos θ into it. ' +
            'The normal force balances mg cos θ, and friction is μ times that. ' +
            'Net force along the slope gives acceleration: mg sin θ − friction = ma.',
    },
    {
        id: 'phys-connected-bodies',
        subject: 'physics',
        question: 'How do I handle connected objects and tension?',
        aliases: ['tension', 'connected bodies', 'pulley problem', 'two masses on a string', 'lift acceleration'],
        answer:
            'Treat the system as one object to find the acceleration, since the connection means they share it. ' +
            'Then take one object alone to find the tension. ' +
            'In a lift, the apparent weight is N = m(g + a), larger when accelerating upward and smaller when ' +
            'accelerating down.',
    },
    {
        id: 'phys-impulse-detail',
        subject: 'physics',
        question: 'What is impulse and why do crumple zones help?',
        aliases: ['impulse', 'force time graph', 'crumple zone', 'airbag physics', 'change in momentum'],
        answer:
            'Impulse is FΔt and equals the change in momentum, so it is also the area under a force-time graph. ' +
            'For a given change in momentum, a longer collision time means a smaller force. ' +
            'Crumple zones, airbags and bending knees all work by extending Δt.',
    },
    {
        id: 'phys-collision-types',
        subject: 'physics',
        question: 'What is the difference between elastic and inelastic collisions?',
        aliases: ['elastic collision', 'inelastic collision', 'perfectly inelastic', 'kinetic energy in a collision'],
        answer:
            'Momentum is conserved in every collision with no external force. ' +
            'Kinetic energy is conserved only in an elastic one. ' +
            'In a perfectly inelastic collision the objects move off together, and the lost kinetic energy becomes ' +
            'heat, sound and deformation.',
    },
    {
        id: 'phys-energy-conservation',
        subject: 'physics',
        question: 'How do I use conservation of energy in a problem?',
        aliases: ['conservation of energy', 'energy transfer', 'kinetic to potential', 'pendulum energy', 'roller coaster'],
        answer:
            'Total energy before equals total energy after, provided you account for losses. ' +
            'For a falling or swinging object, mgh at the top equals ½mv² at the bottom, which gives v = √(2gh) with ' +
            'no need for the time. Friction moves some of that energy to heat, so the sum stays the same.',
    },
    {
        id: 'phys-newton-third-pairs',
        subject: 'physics',
        question: 'Why do action and reaction forces not cancel?',
        aliases: ['action reaction pair', 'newtons third law pair', 'why forces dont cancel', 'identifying force pairs'],
        answer:
            'Because they act on different objects. ' +
            'If you push a wall, your force acts on the wall and the wall\u2019s acts on you, so neither cancels the ' +
            'other in a single free body diagram. ' +
            'Forces only cancel when they act on the same object.',
    },
    {
        id: 'phys-equilibrium-forces',
        subject: 'physics',
        question: 'What does it mean for forces to be in equilibrium?',
        aliases: ['equilibrium of forces', 'balanced forces', 'zero net force', 'constant velocity forces'],
        answer:
            'Net force is zero, so the object is either at rest or moving at constant velocity, by Newton\u2019s ' +
            'first law. ' +
            'In two dimensions both the horizontal and the vertical components must separately sum to zero, which is ' +
            'how tension problems with angled ropes are solved.',
    },
    {
        id: 'phys-work-definition',
        subject: 'physics',
        question: 'When is work done?',
        aliases: ['work done definition', 'w = fs cos theta', 'no work done', 'work at an angle'],
        answer:
            'W = Fs cos θ, so work needs a force and a displacement in the direction of that force. ' +
            'Carrying a bag horizontally does no work against gravity, since the force is vertical and the motion is ' +
            'not. A force perpendicular to motion, like the centripetal force, does no work at all.',
    },
    {
        id: 'phys-power-efficiency',
        subject: 'physics',
        question: 'How do I calculate power?',
        aliases: ['power formula physics', 'p = w/t', 'p = fv', 'watts', 'rate of energy transfer'],
        answer:
            'Power is the rate of energy transfer, P = W/t in watts. ' +
            'When a constant force acts on something moving at speed v, P = Fv. ' +
            'Efficiency is useful output divided by total input, always below 100% because some energy leaves as ' +
            'heat and sound.',
    },
];
