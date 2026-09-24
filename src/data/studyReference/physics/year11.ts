/**
 * Physics, Year 11 (Modules 1 to 4).
 *
 * Kinematics, dynamics, waves and thermodynamics, and electricity and
 * magnetism.
 */
import type { StudyEntry } from '../types';

export const physicsYear11Entries: StudyEntry[] = [
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
        id: 'phys-waves',
        subject: 'physics',
        question: 'What is the wave equation?',
        aliases: ['wave equation', 'v = f lambda', 'frequency wavelength', 'period frequency'],
        answer:
            'v = fλ, where f is frequency in hertz and λ wavelength in metres. Frequency and period are inverses: ' +
            'f = 1/T. For light in a vacuum, v = c = 3.00 × 10⁸ m/s.',
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
    {
        id: 'phys-vectors-scalars',
        subject: 'physics',
        question: 'What is the difference between a vector and a scalar?',
        aliases: ['vector scalar', 'displacement vs distance', 'speed vs velocity', 'resultant vector'],
        answer:
            'A scalar has size only, such as distance, speed, mass or energy. A vector has size and direction, such ' +
            'as displacement, velocity, acceleration and force. Add vectors head to tail, or by components, and the ' +
            'resultant is the single vector with the same effect.',
    },
    {
        id: 'phys-forces-friction',
        subject: 'physics',
        question: 'How do I work with forces on an inclined plane?',
        aliases: ['inclined plane', 'friction', 'normal force', 'free body diagram', 'net force'],
        answer:
            'Draw a free body diagram and resolve the weight into components: mg sin θ down the slope and mg cos θ ' +
            'into it. The normal force balances the second, and friction is F = μN opposing motion. ' +
            'Net force along the slope gives the acceleration through F = ma.',
    },
    {
        id: 'phys-refraction',
        subject: 'physics',
        question: 'What are reflection, refraction and total internal reflection?',
        aliases: ['snells law', 'refraction', 'refractive index', 'total internal reflection', 'critical angle'],
        answer:
            'Snell\u2019s law is n₁ sin θ₁ = n₂ sin θ₂, and the refractive index is n = c/v. ' +
            'Light bends towards the normal entering a denser medium. Past the critical angle, where sin θc = n₂/n₁, ' +
            'it reflects entirely instead, which is how optical fibres work.',
    },
    {
        id: 'phys-experiment-design',
        subject: 'physics',
        question: 'How do I design a valid, reliable experiment?',
        aliases: ['validity reliability accuracy', 'controlled variables', 'independent variable', 'systematic error'],
        answer:
            'Change one independent variable, measure the dependent one, and hold the rest constant: that is validity. ' +
            'Repeat trials for reliability, and use fine instruments for accuracy. ' +
            'Systematic errors shift every reading the same way; random errors scatter them, and repeats reduce those.',
    },
    {
        id: 'phys-thermodynamics',
        subject: 'physics',
        question: 'How does heat move between objects?',
        aliases: ['thermodynamics', 'heat transfer', 'conduction convection radiation', 'thermal equilibrium'],
        answer:
            'Energy is conserved, and heat flows from hot to cold until thermal equilibrium. ' +
            'Q = mcΔT for a temperature change, and Q = mL for a change of state, where temperature stays constant. ' +
            'Heat transfers by conduction, convection and radiation.',
    },
    {
        id: 'phys-wave-properties',
        subject: 'physics',
        question: 'What are the properties of waves?',
        aliases: ['wave properties', 'transverse longitudinal', 'amplitude', 'superposition', 'wave behaviour'],
        answer:
            'Transverse waves vibrate across the direction of travel, longitudinal along it, as sound does. ' +
            'Waves reflect, refract, diffract and interfere. ' +
            'A standing wave forms when two identical waves travel in opposite directions, giving fixed nodes and antinodes.',
    },
    {
        id: 'phys-sound',
        subject: 'physics',
        question: 'How does sound behave?',
        aliases: ['sound waves', 'pitch', 'echo', 'speed of sound', 'longitudinal wave'],
        answer:
            'Sound is a longitudinal wave needing a medium, travelling at about 343 m/s in air. ' +
            'Pitch is frequency and loudness is amplitude. ' +
            'It reflects as an echo, and travels faster in denser media such as water and steel.',
    },
    {
        id: 'phys-static-electricity',
        subject: 'physics',
        question: 'What is static electricity and charge?',
        aliases: ['static electricity', 'charging by friction', 'conductor insulator', 'earthing', 'coulomb charge'],
        answer:
            'Charge is conserved and comes in positive and negative, with like charges repelling. ' +
            'Objects charge by friction, contact or induction, moving electrons rather than protons. ' +
            'Conductors let charge move freely; insulators hold it in place, which is why static builds on them.',
    },
    {
        id: 'phys-circuits',
        subject: 'physics',
        question: 'How do I analyse a circuit?',
        aliases: ['circuit analysis', 'voltage divider', 'ammeter voltmeter', 'series and parallel circuits'],
        answer:
            'Kirchhoff\u2019s current law: current into a junction equals current out. ' +
            'Kirchhoff\u2019s voltage law: voltages around any loop sum to zero. ' +
            'An ammeter goes in series and a voltmeter in parallel. A real cell has internal resistance, so terminal ' +
            'voltage falls as current rises.',
    },
    {
        id: 'phys-magnetism-basics',
        subject: 'physics',
        question: 'What produces a magnetic field?',
        aliases: ['magnetic field', 'solenoid', 'field lines', 'electromagnet', 'right hand grip rule'],
        answer:
            'Moving charge produces a magnetic field. Around a straight wire it circles the wire, given by the ' +
            'right-hand grip rule, with B = μ₀I/2πr. ' +
            'A solenoid makes a uniform field inside, B = μ₀nI, and adding an iron core makes an electromagnet.',
    },
    {
        id: 'phys-energy-efficiency',
        subject: 'physics',
        question: 'What is efficiency and where does energy go?',
        aliases: ['efficiency', 'energy transformation', 'useful energy', 'dissipated energy', 'sankey diagram'],
        answer:
            'Efficiency = useful energy out ÷ total energy in, as a percentage. ' +
            'The rest is not destroyed but dissipated, usually as heat and sound. ' +
            'A Sankey diagram shows the split by the width of each arrow.',
    },
    {
        id: 'phys-specific-latent-heat',
        subject: 'physics',
        question: 'What is the difference between specific heat capacity and latent heat?',
        aliases: ['specific heat capacity', 'latent heat', 'q = mc delta t', 'heating curve', 'change of state energy'],
        answer:
            'Q = mcΔT raises temperature without changing state. Q = mL changes state at constant temperature, which ' +
            'is why a heating curve has flat sections. ' +
            'The energy in those flat parts goes into breaking bonds rather than into speeding particles up.',
    },
    {
        id: 'phys-lenses-mirrors',
        subject: 'physics',
        question: 'How do I draw ray diagrams for lenses and mirrors?',
        aliases: ['ray diagram', 'lens formula', 'magnification', 'real and virtual image', 'converging lens', 'mirror equation'],
        answer:
            '1/f = 1/u + 1/v, and magnification m = −v/u = h′/h. ' +
            'Draw a ray parallel to the axis that refracts through the focus, and one straight through the centre. ' +
            'A real image forms where rays actually meet and can be projected; a virtual image cannot.',
    },
    {
        id: 'phys-standing-waves-pipes',
        subject: 'physics',
        question: 'How do standing waves work in strings and pipes?',
        aliases: ['standing wave', 'harmonics', 'open and closed pipe', 'fundamental frequency', 'nodes antinodes', 'resonance frequency'],
        answer:
            'A string or open pipe supports every harmonic, with λ = 2L/n. ' +
            'A closed pipe has a node at the closed end and an antinode at the open one, so it supports only odd ' +
            'harmonics, with λ = 4L/(2n − 1). Resonance is driving a system at one of these natural frequencies.',
    },
    {
        id: 'phys-doppler',
        subject: 'physics',
        question: 'What is the Doppler effect?',
        aliases: ['doppler effect', 'moving source frequency', 'siren pitch', 'red shift', 'blue shift'],
        answer:
            'Relative motion changes the observed frequency: f′ = f(v_wave + v_obs)/(v_wave − v_src) with the signs ' +
            'set so approaching raises the frequency and receding lowers it. ' +
            'For light from distant galaxies the same idea gives red shift, which is evidence for an expanding universe.',
    },
    {
        id: 'phys-sound-intensity',
        subject: 'physics',
        question: 'How does sound intensity fall with distance?',
        aliases: ['sound intensity', 'inverse square law', 'decibel', 'intensity distance', 'i1r1 = i2r2'],
        answer:
            'Intensity obeys an inverse square law, I ∝ 1/r², so I₁r₁² = I₂r₂²: double the distance and the intensity ' +
            'falls to a quarter. The decibel scale is logarithmic, so every 10 dB is a tenfold change in intensity.',
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
        id: 'phys-kirchhoff-internal-resistance',
        subject: 'physics',
        question: 'What are Kirchhoff\u2019s laws and internal resistance?',
        aliases: ['kirchhoffs laws', 'junction rule', 'loop rule', 'internal resistance', 'terminal voltage', 'emf of a cell'],
        answer:
            'Current into a junction equals current out, and voltages around any loop sum to zero. ' +
            'A real cell has internal resistance r, so terminal voltage V = ε − Ir: the more current drawn, the lower ' +
            'the voltage the cell delivers.',
    },
    {
        id: 'phys-graphing-data',
        subject: 'physics',
        question: 'How do I use a gradient to find a physical constant?',
        aliases: ['line of best fit', 'gradient of a graph', 'linearising data', 'straight line graph physics', 'plotting results'],
        answer:
            'Rearrange the relationship into the form y = mx + b, so the quantity you want becomes the gradient. ' +
            'Plot the measured pairs, draw the line of best fit, and take the gradient from the line, not from two ' +
            'data points. The gradient carries units, and they should match what you expect.',
    },
];
