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
        aliases: ['satellite motion', 'geostationary', 'orbital period', 'low earth orbit', 'escape speed'],
        answer:
            'Gravity supplies the centripetal force, so GMm/r² = mv²/r, giving v = √(GM/r): the closer the orbit, ' +
            'the faster the satellite. A geostationary orbit has a period of 24 hours above the equator. ' +
            'Escape speed is v = √(2GM/r).',
    },
    {
        id: 'phys-motors-generators',
        subject: 'physics',
        question: 'How does a motor differ from a generator?',
        aliases: ['dc motor', 'generator', 'back emf', 'commutator', 'slip rings'],
        answer:
            'A motor turns electrical energy into motion using the force on a current in a field, F = BIL. ' +
            'A generator does the reverse, inducing an emf by turning a coil in a field. ' +
            'A motor also generates a back emf as it spins, which is why the current drops once it is up to speed.',
    },
    {
        id: 'phys-electromagnetic-spectrum',
        subject: 'physics',
        question: 'What is the electromagnetic spectrum?',
        aliases: ['electromagnetic spectrum', 'radio waves', 'gamma rays', 'speed of light', 'em waves'],
        answer:
            'From longest wavelength to shortest: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. ' +
            'All travel at c = 3.00 × 10⁸ m/s in a vacuum. Shorter wavelength means higher frequency and higher ' +
            'photon energy, which is why gamma rays ionise and radio waves do not.',
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
        id: 'phys-interference',
        subject: 'physics',
        question: 'What is interference and diffraction?',
        aliases: ['interference', 'diffraction', 'double slit', 'youngs experiment', 'path difference'],
        answer:
            'Waves superpose: in phase they reinforce, out of phase they cancel. ' +
            'In a double-slit experiment, bright fringes appear where the path difference is a whole number of ' +
            'wavelengths. The fringe spacing is Δy = λL/d, which is evidence that light behaves as a wave.',
    },
    {
        id: 'phys-spectra',
        subject: 'physics',
        question: 'What do emission and absorption spectra show?',
        aliases: ['emission spectrum', 'absorption spectrum', 'spectral lines', 'bohr model', 'energy levels'],
        answer:
            'Electrons occupy fixed energy levels. Falling between levels emits a photon of exactly that energy ' +
            'difference, giving bright lines; absorbing one lifts an electron and leaves dark lines. ' +
            'The pattern identifies the element, which is how stars are analysed from their light.',
    },
    {
        id: 'phys-nuclear-energy',
        subject: 'physics',
        question: 'What are fission, fusion and mass defect?',
        aliases: ['nuclear fission', 'fusion', 'mass defect', 'binding energy', 'chain reaction'],
        answer:
            'Fission splits a heavy nucleus, fusion joins light ones, and both release energy because the products ' +
            'have less mass than the reactants. That missing mass becomes energy through E = mc², and the binding ' +
            'energy per nucleon peaks around iron.',
    },
    {
        id: 'phys-standard-model',
        subject: 'physics',
        question: 'What is the standard model of matter?',
        aliases: ['standard model', 'quarks', 'leptons', 'fundamental forces', 'particle physics'],
        answer:
            'Matter is built from quarks, which make protons and neutrons, and leptons, which include the electron. ' +
            'Forces are carried by bosons: the photon for electromagnetism, gluons for the strong force, W and Z for ' +
            'the weak force. Gravity is not part of the model.',
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
        question: 'What are the laws of thermodynamics?',
        aliases: ['thermodynamics', 'specific heat capacity', 'latent heat', 'heat transfer', 'conduction convection radiation'],
        answer:
            'Energy is conserved, and heat flows from hot to cold until thermal equilibrium. ' +
            'Q = mcΔT for a temperature change, and Q = mL for a change of state, where temperature stays constant. ' +
            'Heat transfers by conduction, convection and radiation.',
    },
    {
        id: 'phys-wave-properties',
        subject: 'physics',
        question: 'What are the properties of waves?',
        aliases: ['wave properties', 'transverse longitudinal', 'amplitude', 'superposition', 'standing wave', 'resonance'],
        answer:
            'Transverse waves vibrate across the direction of travel, longitudinal along it, as sound does. ' +
            'Waves reflect, refract, diffract and interfere. ' +
            'A standing wave forms when two identical waves travel in opposite directions, giving fixed nodes and antinodes.',
    },
    {
        id: 'phys-sound',
        subject: 'physics',
        question: 'How does sound behave?',
        aliases: ['sound waves', 'doppler effect', 'pitch', 'echo', 'speed of sound', 'harmonics'],
        answer:
            'Sound is a longitudinal wave needing a medium, travelling at about 343 m/s in air. ' +
            'Pitch is frequency and loudness is amplitude. The Doppler effect raises the observed frequency as a ' +
            'source approaches and lowers it as it recedes.',
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
        aliases: ['circuit analysis', 'kirchhoff', 'voltage divider', 'ammeter voltmeter', 'emf internal resistance'],
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
        id: 'phys-michelson-morley',
        subject: 'physics',
        question: 'What did the Michelson-Morley experiment show?',
        aliases: ['michelson morley', 'aether', 'null result', 'postulates of special relativity', 'inertial frame'],
        answer:
            'It looked for the Earth\u2019s motion through a supposed aether and found nothing, a famous null result. ' +
            'That supported Einstein\u2019s postulates: the laws of physics are the same in every inertial frame, and ' +
            'the speed of light is the same for every observer.',
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
        id: 'phys-black-body',
        subject: 'physics',
        question: 'What is black body radiation and the ultraviolet catastrophe?',
        aliases: ['black body radiation', 'ultraviolet catastrophe', 'wiens law', 'plancks hypothesis', 'quantisation'],
        answer:
            'A hot object emits a spectrum whose peak shifts to shorter wavelengths as it heats, by Wien\u2019s law. ' +
            'Classical physics predicted infinite energy at short wavelengths, the ultraviolet catastrophe. ' +
            'Planck fixed it by proposing energy comes in quanta, E = hf.',
    },
    {
        id: 'phys-bohr-model',
        subject: 'physics',
        question: 'What is the Bohr model and its limitations?',
        aliases: ['bohr model', 'hydrogen spectrum', 'balmer series', 'energy levels hydrogen', 'limitations of bohr'],
        answer:
            'Bohr proposed electrons occupy fixed orbits with quantised angular momentum, emitting a photon when they ' +
            'drop between them, which explains hydrogen\u2019s spectral lines. ' +
            'It fails for atoms with more than one electron and does not explain line intensities or splitting.',
    },
    {
        id: 'phys-semiconductors',
        subject: 'physics',
        question: 'How do semiconductors and diodes work?',
        aliases: ['semiconductor', 'doping', 'p type n type', 'diode', 'band structure', 'transistor'],
        answer:
            'A semiconductor has a small band gap, so some electrons reach the conduction band. ' +
            'Doping adds impurities: n-type contributes electrons, p-type contributes holes. ' +
            'A p-n junction conducts in one direction only, which is a diode.',
    },
];
