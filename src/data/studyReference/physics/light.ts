/**
 * Physics Module 7: The Nature of Light.
 *
 * Electromagnetic waves, the quantum picture of light, and special relativity.
 */
import type { StudyEntry } from '../types';

export const physicsLightEntries: StudyEntry[] = [
    {
        id: 'phys-photoelectric',
        subject: 'physics',
        question: 'What is the photoelectric effect?',
        aliases: ['photoelectric effect', 'planck constant'],
        answer:
            'A photon carries E = hf, with h = 6.626 × 10⁻³⁴ J s. If hf exceeds the metal’s work function φ, an ' +
            'electron is ejected with maximum kinetic energy Ek = hf − φ. ' +
            'Brighter light gives more electrons, not faster ones, which is what a wave model could not explain.',
    },
    {
        id: 'phys-special-relativity',
        subject: 'physics',
        question: 'What are time dilation and length contraction?',
        aliases: ['special relativity', 'what is relativity', 'moving clocks', 'e = mc2', 'relativistic effects'],
        answer:
            'Moving clocks run slow: t = t₀ / √(1 − v²/c²), and moving lengths shrink along the motion: ' +
            'l = l₀ √(1 − v²/c²). Mass and energy are linked by E = mc². The effects only become noticeable as v ' +
            'approaches the speed of light.',
    },
    {
        id: 'phys-electromagnetic-spectrum',
        subject: 'physics',
        question: 'What is the electromagnetic spectrum?',
        aliases: ['electromagnetic spectrum', 'order of the spectrum', 'speed of light', 'em waves'],
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
        id: 'phys-michelson-morley',
        subject: 'physics',
        question: 'What did the Michelson-Morley experiment show?',
        aliases: ['michelson morley', 'aether', 'null result', 'postulates of special relativity'],
        answer:
            'It looked for the Earth\u2019s motion through a supposed aether and found nothing, a famous null result. ' +
            'That supported Einstein\u2019s postulates: the laws of physics are the same in every inertial frame, and ' +
            'the speed of light is the same for every observer.',
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
        aliases: ['double slit', 'youngs experiment', 'fringe spacing', 'diffraction grating'],
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
        id: 'phys-maxwell-light',
        subject: 'physics',
        question: 'What did Maxwell show about light?',
        aliases: ['maxwell', 'electromagnetic theory', 'light as an em wave', 'speed of light prediction'],
        answer:
            'Maxwell\u2019s equations predicted that a changing electric field produces a magnetic one and vice versa, ' +
            'so the pair can travel as a self-sustaining wave. ' +
            'The predicted speed matched the measured speed of light, which showed light is an electromagnetic wave. ' +
            'Hertz later produced and detected such waves directly.',
    },
    {
        id: 'phys-photon-energy-calcs',
        subject: 'physics',
        question: 'How do I calculate photon energy?',
        aliases: ['photon energy', 'e = hf', 'e = hc over lambda', 'energy of light', 'converting to electronvolts'],
        answer:
            'E = hf, or E = hc/λ, with h = 6.626 × 10⁻³⁴ J s and c = 3.00 × 10⁸ m s⁻¹. ' +
            'Shorter wavelength means higher energy. ' +
            'Divide by 1.602 × 10⁻¹⁹ to convert joules to electronvolts, which is usually the tidier unit here.',
    },
    {
        id: 'phys-stopping-voltage',
        subject: 'physics',
        question: 'What is stopping voltage and threshold frequency?',
        aliases: ['stopping voltage', 'threshold frequency', 'work function from a graph'],
        answer:
            'Threshold frequency is the lowest frequency that ejects any electron, where hf equals the work function. ' +
            'Stopping voltage is the reverse voltage that just halts the fastest electrons, so eV(stop) = Ek(max). ' +
            'Plotting Ek against f gives a straight line of gradient h and intercept −φ.',
    },
    {
        id: 'phys-relativity-postulates',
        subject: 'physics',
        question: 'What are the postulates of special relativity?',
        aliases: ['postulates of relativity', 'constant speed of light', 'einstein postulates'],
        answer:
            'First, the laws of physics are the same in every inertial frame, meaning any frame moving at constant ' +
            'velocity. Second, the speed of light in a vacuum is the same for every observer, whatever their motion. ' +
            'Everything else, including time dilation and length contraction, follows from those two.',
    },
    {
        id: 'phys-simultaneity',
        subject: 'physics',
        question: 'Why is simultaneity relative?',
        aliases: ['simultaneity', 'events at the same time', 'relativity of simultaneity', 'proper time', 'proper length'],
        answer:
            'Two events that one observer sees as simultaneous are not simultaneous for another moving relative to ' +
            'them, because light from the events reaches each observer differently. ' +
            'Proper time is measured in the frame where the events happen at one place; proper length is measured at ' +
            'rest relative to the object.',
    },
    {
        id: 'phys-relativistic-calculations',
        subject: 'physics',
        question: 'How do I do a time dilation or length contraction calculation?',
        aliases: ['time dilation calculation', 'lorentz factor', 'gamma factor', 'length contraction calculation'],
        answer:
            'Work out the Lorentz factor γ = 1/√(1 − v²/c²) first, keeping v as a fraction of c. ' +
            'Dilated time is t = γt₀, always longer than the proper time. ' +
            'Contracted length is l = l₀/γ, always shorter than the proper length. ' +
            'Check the direction: moving clocks run slow, moving lengths shrink.',
    },
    {
        id: 'phys-wave-particle-duality',
        subject: 'physics',
        question: 'Is light a wave or a particle?',
        aliases: ['wave particle duality light', 'evidence for waves', 'evidence for particles', 'complementary models'],
        answer:
            'Both, depending on the experiment. ' +
            'Interference, diffraction and polarisation need a wave model; the photoelectric effect needs particles ' +
            'with discrete energy. ' +
            'Neither model alone accounts for everything, which is what duality means.',
    },
    {
        id: 'phys-spectroscopy-stars',
        subject: 'physics',
        question: 'What can we learn from a star\u2019s spectrum?',
        aliases: ['stellar spectra', 'what spectra tell us', 'composition of stars', 'surface temperature star', 'rotation from spectra'],
        answer:
            'Absorption lines identify the elements present, the peak wavelength gives surface temperature through ' +
            'Wien\u2019s law, line shifts give motion towards or away from us, and line broadening can indicate ' +
            'rotation, density and magnetic fields.',
    },
    {
        id: 'phys-photoelectric-graph',
        subject: 'physics',
        question: 'What does a photoelectric graph show?',
        aliases: ['photoelectric graph', 'kinetic energy against frequency', 'gradient gives plancks constant'],
        answer:
            'Maximum kinetic energy against frequency gives a straight line whose gradient is Planck constant and ' +
            'whose horizontal intercept is the threshold frequency. The vertical intercept is the negative of the ' +
            'work function.',
    },
    {
        id: 'phys-work-function',
        subject: 'physics',
        question: 'What is the work function?',
        aliases: ['work function', 'minimum energy to release an electron', 'why some metals need uv'],
        answer:
            'The minimum energy needed to free an electron from a particular metal surface. Light below the ' +
            'corresponding threshold frequency releases nothing however bright it is, which is what classical wave ' +
            'theory could not explain.',
    },
    {
        id: 'phys-intensity-vs-frequency',
        subject: 'physics',
        question: 'What does brighter light change in the photoelectric effect?',
        aliases: ['intensity versus frequency', 'brighter light more electrons', 'why intensity does not raise energy'],
        answer:
            'More photons arrive, so more electrons are emitted, but each photon still carries the same energy, so ' +
            'the maximum kinetic energy is unchanged. Only raising the frequency raises that energy.',
    },
    {
        id: 'phys-blackbody-curve-shape',
        subject: 'physics',
        question: 'How does a black body curve change with temperature?',
        aliases: ['black body curve', 'peak shifts with temperature', 'hotter means bluer'],
        answer:
            'The whole curve rises and its peak moves to a shorter wavelength, so a hotter object is both brighter ' +
            'and bluer. That is why a heated element glows red before white.',
    },
    {
        id: 'phys-spectroscopy-uses',
        subject: 'physics',
        question: 'What can spectroscopy tell us besides composition?',
        aliases: ['uses of spectroscopy', 'doppler shift of spectral lines', 'line broadening'],
        answer:
            'Motion, from the shift of the lines; temperature, from the peak of the continuous spectrum; density and ' +
            'pressure, from how broad the lines are; and magnetic field strength, from line splitting.',
    },
    {
        id: 'phys-light-speed-measurement',
        subject: 'physics',
        question: 'How was the speed of light measured?',
        aliases: ['measuring the speed of light', 'rotating mirror experiment', 'astronomical measurement of light speed'],
        answer:
            'First from the timing of the moons of Jupiter, then in the laboratory by timing a beam sent to a distant ' +
            'mirror and back using a rotating mirror or toothed wheel. Modern values come from the definition of the ' +
            'metre itself.',
    },
    {
        id: 'phys-em-wave-nature',
        subject: 'physics',
        question: 'What is an electromagnetic wave made of?',
        aliases: ['what an electromagnetic wave is', 'oscillating electric and magnetic fields', 'no medium needed'],
        answer:
            'Oscillating electric and magnetic fields at right angles to each other and to the direction of travel, ' +
            'each regenerating the other. Because no matter is oscillating, it needs no medium and travels through ' +
            'vacuum.',
    },
    {
        id: 'phys-inverse-square-light',
        subject: 'physics',
        question: 'Why does brightness fall with the square of distance?',
        aliases: ['inverse square law for light', 'brightness and distance', 'spreading over a sphere'],
        answer:
            'The same power spreads over a sphere whose area grows as the square of the radius, so the power per ' +
            'square metre falls accordingly. Doubling the distance quarters the intensity.',
    },
];
