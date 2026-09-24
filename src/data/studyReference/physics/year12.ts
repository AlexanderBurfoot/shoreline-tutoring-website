/**
 * Physics, Year 12 (Modules 5 to 8).
 *
 * Advanced mechanics, electromagnetism, the nature of light, and from the
 * universe to the atom.
 */
import type { StudyEntry } from '../types';

export const physicsYear12Entries: StudyEntry[] = [
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
        aliases: ['de broglie', 'matter waves', 'wave particle duality', 'electron wavelength', 'lambda = h over mv'],
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
        id: 'phys-motors-generators',
        subject: 'physics',
        question: 'How does a motor differ from a generator?',
        aliases: ['dc motor', 'generator', 'commutator', 'slip rings', 'ac generator'],
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
        id: 'phys-interference',
        subject: 'physics',
        question: 'What is interference and diffraction?',
        aliases: ['interference', 'diffraction', 'superposition of light', 'constructive destructive'],
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
        aliases: ['black body radiation', 'ultraviolet catastrophe', 'plancks hypothesis', 'quantisation'],
        answer:
            'A hot object emits a spectrum whose peak shifts to shorter wavelengths as it heats, by Wien\u2019s law. ' +
            'Classical physics predicted infinite energy at short wavelengths, the ultraviolet catastrophe. ' +
            'Planck fixed it by proposing energy comes in quanta, E = hf.',
    },
    {
        id: 'phys-bohr-model',
        subject: 'physics',
        question: 'What is the Bohr model and its limitations?',
        aliases: ['bohr model', 'hydrogen spectrum', 'energy levels hydrogen', 'limitations of bohr'],
        answer:
            'Bohr proposed electrons occupy fixed orbits with quantised angular momentum, emitting a photon when they ' +
            'drop between them, which explains hydrogen\u2019s spectral lines. ' +
            'It fails for atoms with more than one electron and does not explain line intensities or splitting.',
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
        id: 'phys-back-emf',
        subject: 'physics',
        question: 'What is back emf?',
        aliases: ['back emf', 'motor current', 'counter emf', 'why motors draw more current at start'],
        answer:
            'A spinning motor coil is also a generator, inducing an emf that opposes the supply, by Lenz\u2019s law. ' +
            'At the instant of starting there is no back emf, so the current is largest; as the motor speeds up the ' +
            'back emf grows and the current falls.',
    },
    {
        id: 'phys-eddy-currents',
        subject: 'physics',
        question: 'What are eddy currents?',
        aliases: ['eddy currents', 'magnetic braking', 'laminated core', 'induction braking', 'eddy current losses'],
        answer:
            'A changing flux through a solid conductor induces circulating currents in it. ' +
            'By Lenz\u2019s law they oppose the motion that caused them, which is how magnetic braking works. ' +
            'In transformers they waste energy as heat, so cores are laminated to break the current paths.',
    },
    {
        id: 'phys-transmission-losses',
        subject: 'physics',
        question: 'Why is electricity transmitted at high voltage?',
        aliases: ['transmission line losses', 'power loss i squared r', 'why high voltage transmission', 'ac distribution'],
        answer:
            'Line loss is P = I²R, so halving the current quarters the loss. ' +
            'Transformers step the voltage up for transmission and down for use, keeping power the same while cutting ' +
            'current. Transformers need alternating current, which is why the grid is AC.',
    },
    {
        id: 'phys-polarisation',
        subject: 'physics',
        question: 'What is polarisation and Malus\u2019s law?',
        aliases: ['polarisation', 'malus law', 'polarising filter', 'polarised light', 'transverse wave evidence'],
        answer:
            'A polarising filter passes only the component of the field along its axis. ' +
            'Malus\u2019s law gives the transmitted intensity as I = I_max cos²θ. ' +
            'Only transverse waves can be polarised, so polarisation is direct evidence that light is transverse.',
    },
    {
        id: 'phys-double-slit',
        subject: 'physics',
        question: 'How does the double-slit experiment work?',
        aliases: ['double slit', 'youngs experiment', 'fringe spacing', 'path difference', 'diffraction grating'],
        answer:
            'Light from two slits superposes, giving bright fringes where the path difference is a whole number of ' +
            'wavelengths and dark ones at half-wavelength differences. ' +
            'The fringe spacing is Δy = λL/d. A diffraction grating does the same with many slits, giving sharper maxima.',
    },
    {
        id: 'phys-muon-evidence',
        subject: 'physics',
        question: 'How do muons provide evidence for relativity?',
        aliases: ['muon decay', 'muon experiment', 'evidence for time dilation', 'cosmic ray muons'],
        answer:
            'Muons created high in the atmosphere should decay long before reaching the ground, yet many arrive. ' +
            'From Earth\u2019s frame their clocks run slow, so they live long enough; from the muon\u2019s frame the ' +
            'distance is contracted. Both frames agree on the outcome, which is the point.',
    },
    {
        id: 'phys-wien-stefan',
        subject: 'physics',
        question: 'What are Wien\u2019s law and the Stefan-Boltzmann law?',
        aliases: ['wiens law', 'stefan boltzmann', 'peak wavelength', 'star temperature colour', 'luminosity temperature'],
        answer:
            'Wien\u2019s displacement law: λ_max T = 2.898 × 10⁻³ m K, so hotter objects peak at shorter wavelengths ' +
            'and look bluer. Stefan-Boltzmann: power radiated per unit area is σT⁴, so luminosity is L = 4πr²σT⁴.',
    },
    {
        id: 'phys-rydberg-balmer',
        subject: 'physics',
        question: 'What is the Balmer series and the Rydberg equation?',
        aliases: ['balmer series', 'rydberg equation', 'hydrogen spectral lines', 'lyman series', 'spectral series'],
        answer:
            '1/λ = R(1/n_f² − 1/n_i²), with R = 1.097 × 10⁷ m⁻¹. ' +
            'The Balmer series has n_f = 2 and falls in the visible; Lyman has n_f = 1 in the ultraviolet. ' +
            'Each line is one electron transition between fixed energy levels.',
    },
    {
        id: 'phys-rutherford',
        subject: 'physics',
        question: 'What did the Rutherford gold-foil experiment show?',
        aliases: ['rutherford experiment', 'gold foil', 'alpha scattering', 'plum pudding model', 'discovery of the nucleus'],
        answer:
            'Most alpha particles passed straight through the foil, but a few rebounded at large angles. ' +
            'That ruled out the plum-pudding model and implied a tiny, dense, positive nucleus holding nearly all the ' +
            'mass, with the atom mostly empty space.',
    },
    {
        id: 'phys-cathode-rays',
        subject: 'physics',
        question: 'What did cathode ray experiments establish?',
        aliases: ['cathode rays', 'discharge tube', 'thomson charge to mass', 'millikan oil drop', 'electron discovery'],
        answer:
            'Cathode rays deflect towards a positive plate, showing they are negative particles. ' +
            'Thomson balanced electric and magnetic deflection to find the charge-to-mass ratio; Millikan balanced ' +
            'electric force against weight on oil drops to find the charge itself. Together they give the electron mass.',
    },
    {
        id: 'phys-hr-diagram',
        subject: 'physics',
        question: 'What does the Hertzsprung-Russell diagram show?',
        aliases: ['hr diagram', 'hertzsprung russell', 'main sequence', 'stellar classification', 'luminosity', 'white dwarf'],
        answer:
            'Luminosity against surface temperature, with temperature decreasing to the right. ' +
            'Most stars lie on the main sequence, with giants above and white dwarfs below. ' +
            'A star\u2019s position depends on its mass, and it moves off the main sequence as its hydrogen runs out.',
    },
    {
        id: 'phys-nucleosynthesis',
        subject: 'physics',
        question: 'How are elements made in stars?',
        aliases: ['nucleosynthesis', 'proton proton chain', 'cno cycle', 'stellar fusion', 'elements heavier than iron'],
        answer:
            'Main-sequence stars fuse hydrogen to helium through the proton-proton chain, or the CNO cycle in heavier ' +
            'stars. Successive fusion builds elements up to iron, where binding energy per nucleon peaks. ' +
            'Anything heavier forms in supernovae.',
    },
    {
        id: 'phys-electron-diffraction',
        subject: 'physics',
        question: 'What did the Davisson-Germer experiment show?',
        aliases: ['davisson germer', 'electron diffraction', 'matter waves evidence', 'de broglie standing wave', 'bohr orbit wavelength'],
        answer:
            'Electrons scattered from a crystal produced a diffraction pattern, which only waves do, confirming de ' +
            'Broglie\u2019s matter waves. ' +
            'It also explains Bohr\u2019s allowed orbits: a stable orbit fits a whole number of wavelengths, nλ = 2πr.',
    },
];
