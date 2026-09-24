/**
 * Physics reference, Years 9 to 12.
 *
 * Weighted towards the Year 12 modules: advanced mechanics, electromagnetism,
 * light and the quantum ideas, with the kinematics students carry through.
 */
import type { StudyEntry } from './types';

export const physicsEntries: StudyEntry[] = [
    {
        id: 'phys-suvat',
        subject: 'physics',
        question: 'What are the equations of motion?',
        aliases: [
            'suvat', 'equations of motion', 'kinematics equations', 'constant acceleration',
            'falling object', 'how fast something falls', 'free fall', 'acceleration due to gravity',
        ],
        answer:
            'For constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as, and s = ½(u + v)t. ' +
            'Here u is the initial velocity, v the final velocity, a the acceleration and s the displacement. ' +
            'Pick the equation that leaves out the quantity you neither know nor want.',
    },
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
        aliases: ['circular motion', 'centripetal force', 'centripetal acceleration', 'banked track'],
        answer:
            'Centripetal acceleration is a = v²/r, so the net force towards the centre is F = mv²/r. ' +
            'The period and speed are linked by v = 2πr/T. The centripetal force is not a new force: it is whatever ' +
            'real force, such as tension, friction or gravity, points at the centre.',
    },
    {
        id: 'phys-gravitation',
        subject: 'physics',
        question: 'What is Newton’s law of universal gravitation?',
        aliases: ['gravitation', 'gravitational force', 'orbital velocity', 'keplers third law', 'escape velocity'],
        answer:
            'F = GMm/r², with G = 6.67 × 10⁻¹¹ N m² kg⁻². Gravitational potential energy is U = −GMm/r. ' +
            'For a circular orbit, v = √(GM/r), and Kepler’s third law says r³/T² is the same for every satellite ' +
            'of the same central mass.',
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
        id: 'phys-ohms-law',
        subject: 'physics',
        question: 'What is Ohm’s law?',
        aliases: ['ohms law', 'v = ir', 'resistance', 'electrical power', 'series and parallel'],
        answer:
            'V = IR, and electrical power is P = VI = I²R. ' +
            'In series, resistances add and the current is the same everywhere. In parallel, 1/R = 1/R₁ + 1/R₂ and the ' +
            'voltage is the same across each branch.',
    },
    {
        id: 'phys-coulomb',
        subject: 'physics',
        question: 'What is Coulomb’s law and the electric field?',
        aliases: ['coulombs law', 'electric field', 'electric force', 'charged particle field'],
        answer:
            'F = kq₁q₂/r², with k = 8.99 × 10⁹ N m² C⁻². The electric field is E = F/q, and between parallel plates ' +
            'E = V/d. The force on a charge in a field is F = qE, along the field for a positive charge.',
    },
    {
        id: 'phys-magnetic-force',
        subject: 'physics',
        question: 'What is the force on a charge or wire in a magnetic field?',
        aliases: ['magnetic force', 'f = bil', 'motor effect', 'right hand rule', 'f = qvb'],
        answer:
            'On a moving charge, F = qvB sin θ. On a current-carrying wire, F = BIL sin θ. ' +
            'Use the right-hand rule to find the direction, and note the force is zero when the motion or current is ' +
            'parallel to the field.',
    },
    {
        id: 'phys-faraday',
        subject: 'physics',
        question: 'What are Faraday’s and Lenz’s laws?',
        aliases: ['faradays law', 'lenz law', 'induced emf', 'electromagnetic induction', 'flux'],
        answer:
            'Magnetic flux is Φ = BA cos θ. Faraday’s law says the induced emf is ε = −N ΔΦ/Δt: a changing flux ' +
            'through a coil induces a voltage. The minus sign is Lenz’s law, meaning the induced current opposes ' +
            'the change that caused it, which is conservation of energy in action.',
    },
    {
        id: 'phys-transformers',
        subject: 'physics',
        question: 'How does a transformer work?',
        aliases: ['transformer', 'turns ratio', 'step up transformer', 'step down'],
        answer:
            'Vp/Vs = Np/Ns, and for an ideal transformer VpIp = VsIs, so raising the voltage lowers the current. ' +
            'They need alternating current, because a steady current gives no changing flux and so no induced emf in ' +
            'the secondary coil.',
    },
    {
        id: 'phys-waves',
        subject: 'physics',
        question: 'What is the wave equation?',
        aliases: ['wave equation', 'v = f lambda', 'frequency wavelength', 'period frequency'],
        answer:
            'v = fλ, where f is frequency in hertz and λ wavelength in metres. Frequency and period are inverses: ' +
            'f = 1/T. For light in a vacuum, v = c = 3.00 × 10⁸ m/s.',
    },
    {
        id: 'phys-photoelectric',
        subject: 'physics',
        question: 'What is the photoelectric effect?',
        aliases: ['photoelectric effect', 'work function', 'photon energy', 'planck constant', 'threshold frequency'],
        answer:
            'A photon carries E = hf, with h = 6.63 × 10⁻³⁴ J s. If hf exceeds the metal’s work function φ, an ' +
            'electron is ejected with maximum kinetic energy Ek = hf − φ. ' +
            'Brighter light gives more electrons, not faster ones, which is what a wave model could not explain.',
    },
    {
        id: 'phys-special-relativity',
        subject: 'physics',
        question: 'What are time dilation and length contraction?',
        aliases: ['special relativity', 'time dilation', 'length contraction', 'lorentz factor', 'e = mc2'],
        answer:
            'Moving clocks run slow: t = t₀ / √(1 − v²/c²), and moving lengths shrink along the motion: ' +
            'l = l₀ √(1 − v²/c²). Mass and energy are linked by E = mc². The effects only become noticeable as v ' +
            'approaches the speed of light.',
    },
    {
        id: 'phys-de-broglie',
        subject: 'physics',
        question: 'What is the de Broglie wavelength?',
        aliases: ['de broglie', 'matter waves', 'wave particle duality', 'electron wavelength'],
        answer:
            'λ = h/mv: any particle with momentum has a wavelength. ' +
            'It is far too small to notice for everyday objects, but for electrons it is about the spacing of atoms in ' +
            'a crystal, which is why electron diffraction works and confirms wave-particle duality.',
    },
    {
        id: 'phys-half-life',
        subject: 'physics',
        question: 'What is half-life?',
        aliases: ['half life', 'radioactive decay', 'radioactivity', 'alpha beta gamma', 'decay equation'],
        answer:
            'Half-life is the time for half the radioactive nuclei in a sample to decay. ' +
            'After n half-lives the amount left is the original divided by 2ⁿ. ' +
            'Alpha decay loses a helium nucleus, beta decay converts a neutron to a proton and emits an electron, ' +
            'and gamma decay emits energy without changing the nucleus.',
    },
    {
        id: 'phys-units',
        subject: 'physics',
        question: 'How do I handle units and significant figures?',
        aliases: ['significant figures', 'si units', 'unit conversion', 'scientific notation'],
        answer:
            'Convert to SI units before substituting: metres, kilograms, seconds. ' +
            'Round the final answer to the fewest significant figures of the data you used, not at each step, and ' +
            'always write the unit. Marks are lost more often for units than for arithmetic.',
    },
];
