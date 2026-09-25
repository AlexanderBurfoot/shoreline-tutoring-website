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
        question: 'What is momentum?',
        aliases: ['momentum', 'p = mv', 'what is momentum', 'momentum formula'],
        answer:
            'Momentum is p = mv, a vector in the direction of the velocity, measured in kg m s⁻¹. ' +
            'A heavy slow object can carry the same momentum as a light fast one. ' +
            'Impulse is the change in it: J = FΔt = Δp.',
    },
    {
        id: 'phys-work-energy',
        subject: 'physics',
        question: 'What are the work and energy formulas?',
        aliases: ['work done', 'kinetic energy', 'potential energy', 'power formula'],
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
        aliases: ['relativistic momentum', 'mass energy equivalence', 'relativistic mass'],
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
    {
        id: 'phys-momentum-conservation-proof',
        subject: 'physics',
        question: 'Why is momentum conserved?',
        aliases: ['why momentum is conserved', 'newton third law momentum', 'isolated system'],
        answer:
            'In a collision the two objects exert equal and opposite forces on each other for the same time, so the ' +
            'impulses are equal and opposite. ' +
            'One gains exactly what the other loses, so the total is unchanged, provided no outside force acts on the ' +
            'system.',
    },
    {
        id: 'phys-energy-types',
        subject: 'physics',
        question: 'What forms does energy take?',
        aliases: ['forms of energy', 'types of energy', 'chemical energy', 'energy transformation examples'],
        answer:
            'Kinetic, gravitational potential, elastic potential, chemical, thermal, sound, light, electrical and ' +
            'nuclear. ' +
            'Energy is never used up, only transformed, and in every real transformation some becomes thermal energy ' +
            'spread through the surroundings.',
    },
    {
        id: 'phys-normal-force-cases',
        subject: 'physics',
        question: 'When is the normal force not equal to the weight?',
        aliases: ['normal force not equal to weight', 'normal force in a lift', 'normal force on a slope'],
        answer:
            'On a slope it is mg cos θ; in an accelerating lift it is m(g ± a); when another force presses down or ' +
            'pulls up it adjusts accordingly. It equals the weight only on level ground with no vertical acceleration ' +
            'or extra vertical force.',
    },
    {
        id: 'phys-friction-advantages',
        subject: 'physics',
        question: 'Is friction always a nuisance?',
        aliases: ['uses of friction', 'friction is useful', 'walking requires friction'],
        answer:
            'No. Walking, driving, braking, gripping and writing all depend on it. It becomes a problem mainly where ' +
            'surfaces must slide, which is why engineering reduces it there with lubricants and bearings while ' +
            'increasing it elsewhere with tread.',
    },
    {
        id: 'phys-momentum-recoil',
        subject: 'physics',
        question: 'How do I answer a recoil or explosion question?',
        aliases: ['recoil', 'explosion momentum', 'total momentum zero'],
        answer:
            'Total momentum before is zero, so the momenta afterwards must cancel: m₁v₁ = −m₂v₂. The lighter fragment ' +
            'moves faster, which is why a rifle recoils gently while the bullet leaves quickly.',
    },
    {
        id: 'phys-two-dimensional-collision',
        subject: 'physics',
        question: 'How do I handle a collision in two dimensions?',
        aliases: ['two dimensional collision', 'momentum components in a collision', 'glancing collision'],
        answer:
            'Momentum is conserved separately along each axis, so resolve every velocity into components, write one ' +
            'equation for each direction and solve them together. A vector diagram is usually the quickest check.',
    },
    {
        id: 'phys-work-energy-theorem',
        subject: 'physics',
        question: 'What is the work-energy theorem?',
        aliases: ['work energy theorem', 'net work equals change in kinetic energy', 'using energy instead of forces'],
        answer:
            'The net work done on an object equals its change in kinetic energy. It lets you skip the acceleration ' +
            'and the time entirely, which makes it the fastest route through many problems involving a distance and a ' +
            'force.',
    },
    {
        id: 'phys-elastic-potential',
        subject: 'physics',
        question: 'How does a spring store energy?',
        aliases: ['elastic potential energy', 'hookes law', 'energy in a stretched spring'],
        answer:
            'Force is proportional to extension, F = kx, so the energy stored is the area under that graph: E = ½kx². ' +
            'Doubling the extension therefore stores four times the energy, provided the spring is not stretched past ' +
            'its elastic limit.',
    },
    {
        id: 'phys-energy-in-a-collision',
        subject: 'physics',
        question: 'Where does the kinetic energy go in a crash?',
        aliases: ['energy lost in a collision', 'deformation energy', 'kinetic energy after a crash'],
        answer:
            'Into deformation of the vehicles, heat, sound and the movement of parts that break away. Momentum is ' +
            'still conserved, which is why momentum rather than energy is the quantity used to analyse the collision.',
    },
    {
        id: 'phys-inertia-examples',
        subject: 'physics',
        question: 'Where do I see inertia in everyday life?',
        aliases: ['inertia examples', 'why you lurch forward when braking', 'seatbelt physics'],
        answer:
            'You continue forward when a bus brakes, a tablecloth can be pulled from under crockery, and a passenger ' +
            'needs a seatbelt because their body keeps moving after the car has stopped.',
    },
];
