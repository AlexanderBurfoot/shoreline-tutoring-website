/**
 * Physics Module 3: Waves and Thermodynamics.
 *
 * Wave behaviour, sound, light and the transfer of heat.
 */
import type { StudyEntry } from '../types';

export const physicsWavesEntries: StudyEntry[] = [
    {
        id: 'phys-waves',
        subject: 'physics',
        question: 'What is the wave equation?',
        aliases: ['wave equation', 'v = f lambda', 'speed of a wave', 'velocity frequency wavelength'],
        answer:
            'v = fλ, where f is frequency in hertz and λ wavelength in metres. Frequency and period are inverses: ' +
            'f = 1/T. For light in a vacuum, v = c = 3.00 × 10⁸ m/s.',
    },
    {
        id: 'phys-refraction',
        subject: 'physics',
        question: 'What are reflection, refraction and total internal reflection?',
        aliases: ['snells law', 'refraction', 'refractive index', 'total internal reflection'],
        answer:
            'Snell\u2019s law is n₁ sin θ₁ = n₂ sin θ₂, and the refractive index is n = c/v. ' +
            'Light bends towards the normal entering a denser medium. Past the critical angle, where sin θc = n₂/n₁, ' +
            'it reflects entirely instead, which is how optical fibres work.',
    },
    {
        id: 'phys-thermodynamics',
        subject: 'physics',
        question: 'How does heat move between objects?',
        aliases: ['thermodynamics', 'heat transfer', 'conduction convection radiation'],
        answer:
            'Energy is conserved, and heat flows from hot to cold until thermal equilibrium. ' +
            'Q = mcΔT for a temperature change, and Q = mL for a change of state, where temperature stays constant. ' +
            'Heat transfers by conduction, convection and radiation.',
    },
    {
        id: 'phys-wave-properties',
        subject: 'physics',
        question: 'What are the properties of waves?',
        aliases: ['wave properties', 'how waves behave', 'wave behaviour', 'properties of a wave'],
        answer:
            'Transverse waves vibrate across the direction of travel, longitudinal along it, as sound does. ' +
            'Waves reflect, refract, diffract and interfere. ' +
            'A standing wave forms when two identical waves travel in opposite directions, giving fixed nodes and antinodes.',
    },
    {
        id: 'phys-sound',
        subject: 'physics',
        question: 'How does sound behave?',
        aliases: ['sound waves', 'pitch', 'loudness', 'how sound travels'],
        answer:
            'Sound is a longitudinal wave needing a medium, travelling at about 343 m/s in air. ' +
            'Pitch is frequency and loudness is amplitude. ' +
            'It reflects as an echo, and travels faster in denser media such as water and steel.',
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
        aliases: ['ray diagram', 'magnification', 'real and virtual image', 'converging lens', 'mirror equation'],
        answer:
            '1/f = 1/u + 1/v, and magnification m = −v/u = h′/h. ' +
            'Draw a ray parallel to the axis that refracts through the focus, and one straight through the centre. ' +
            'A real image forms where rays actually meet and can be projected; a virtual image cannot.',
    },
    {
        id: 'phys-standing-waves-pipes',
        subject: 'physics',
        question: 'How do standing waves work in strings and pipes?',
        aliases: ['standing wave', 'harmonics', 'open and closed pipe', 'fundamental frequency', 'nodes antinodes', 'resonance frequency', 'node', 'antinode'],
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
        aliases: ['sound intensity', 'inverse square law', 'intensity distance', 'i1r1 = i2r2'],
        answer:
            'Intensity obeys an inverse square law, I ∝ 1/r², so I₁r₁² = I₂r₂²: double the distance and the intensity ' +
            'falls to a quarter. The decibel scale is logarithmic, so every 10 dB is a tenfold change in intensity.',
    },
    {
        id: 'phys-wave-types',
        subject: 'physics',
        question: 'What is the difference between transverse and longitudinal waves?',
        aliases: ['transverse wave', 'longitudinal wave', 'compression rarefaction', 'mechanical wave', 'medium'],
        answer:
            'In a transverse wave the particles vibrate across the direction of travel, as in light and water waves. ' +
            'In a longitudinal wave they vibrate along it, making compressions and rarefactions, as in sound. ' +
            'Mechanical waves need a medium; electromagnetic waves do not.',
    },
    {
        id: 'phys-wave-quantities',
        subject: 'physics',
        question: 'What are wavelength, frequency, period and amplitude?',
        aliases: ['wavelength', 'frequency', 'period of a wave', 'amplitude of a wave', 'hertz'],
        answer:
            'Wavelength is the distance between matching points, in metres. Frequency is cycles per second, in hertz. ' +
            'Period is the time for one cycle, T = 1/f. Amplitude is the maximum displacement from rest, which sets ' +
            'the energy the wave carries.',
    },
    {
        id: 'phys-superposition',
        subject: 'physics',
        question: 'What is superposition?',
        aliases: ['superposition', 'constructive interference', 'destructive interference', 'adding waves', 'in phase'],
        answer:
            'Where two waves meet, the displacements add. ' +
            'In phase, crest on crest, they reinforce, which is constructive. ' +
            'Out of phase by half a wavelength, crest on trough, they cancel, which is destructive. ' +
            'Afterwards each wave carries on unchanged.',
    },
    {
        id: 'phys-reflection-echo',
        subject: 'physics',
        question: 'How does reflection work?',
        aliases: ['reflection', 'law of reflection', 'angle of incidence', 'echo', 'normal line'],
        answer:
            'The angle of incidence equals the angle of reflection, both measured from the normal, the line ' +
            'perpendicular to the surface. ' +
            'A smooth surface gives a clear image; a rough one scatters. An echo is reflected sound, and the distance ' +
            'is half the speed times the round-trip time.',
    },
    {
        id: 'phys-dispersion',
        subject: 'physics',
        question: 'Why does a prism split white light?',
        aliases: ['dispersion', 'prism', 'spectrum of white light', 'refractive index colour'],
        answer:
            'The refractive index is slightly different for each wavelength, so each colour bends by a different ' +
            'amount. Violet slows most and bends most, red least. ' +
            'White light entering a prism therefore spreads into a spectrum, and raindrops do the same to make a ' +
            'rainbow.',
    },
    {
        id: 'phys-thermal-expansion',
        subject: 'physics',
        question: 'Why do materials expand when heated?',
        aliases: ['thermal expansion', 'expansion joints', 'why things expand'],
        answer:
            'Heating raises the average kinetic energy of the particles, so they vibrate further apart and the ' +
            'material grows. ' +
            'Different materials expand by different amounts, which is why bridges need expansion joints and why a ' +
            'bimetallic strip bends as it warms.',
    },
    {
        id: 'phys-heat-transfer-methods',
        subject: 'physics',
        question: 'What are conduction, convection and radiation?',
        aliases: ['conduction', 'convection', 'insulation', 'heat transfer methods'],
        answer:
            'Conduction passes energy between touching particles and works best in metals, through free electrons. ' +
            'Convection carries it in a moving fluid, since warm fluid rises. ' +
            'Radiation travels as infrared and needs no medium, which is how the Sun heats the Earth.',
    },
    {
        id: 'phys-sound-speed-medium',
        subject: 'physics',
        question: 'Why does sound travel faster in solids?',
        aliases: ['speed of sound in solids', 'sound in water', 'sound needs a medium', 'vacuum sound'],
        answer:
            'Particles in a solid are closer and more strongly bonded, so a disturbance passes on faster: about ' +
            '5000 m s⁻¹ in steel, 1500 in water and 340 in air. ' +
            'In a vacuum there are no particles to pass it on, so sound cannot travel at all.',
    },
    {
        id: 'phys-doppler-applications',
        subject: 'physics',
        question: 'Where is the Doppler effect used?',
        aliases: ['doppler applications', 'radar speed gun', 'ultrasound doppler', 'red shift galaxies'],
        answer:
            'Speed cameras bounce a wave off a car and read the frequency shift. ' +
            'Medical ultrasound uses the shift from moving blood. ' +
            'In astronomy the shift of spectral lines gives the speed of stars and galaxies, and the overall red ' +
            'shift is evidence the universe is expanding.',
    },
    {
        id: 'phys-refractive-index-calcs',
        subject: 'physics',
        question: 'How do I calculate a refractive index?',
        aliases: ['refractive index calculation', 'n = c/v', 'speed in a medium', 'optical density'],
        answer:
            'n = c/v: the ratio of the speed of light in a vacuum to its speed in the medium, so n is always at ' +
            'least 1. ' +
            'Across a boundary, n₁ sin θ₁ = n₂ sin θ₂. ' +
            'Frequency does not change when light enters a new medium, but speed and wavelength both do.',
    },
    {
        id: 'phys-optical-fibres',
        subject: 'physics',
        question: 'How do optical fibres work?',
        aliases: ['optical fibre', 'total internal reflection uses', 'endoscope', 'cladding', 'light pipe'],
        answer:
            'Light enters at a shallow enough angle that it always strikes the wall beyond the critical angle, so it ' +
            'reflects entirely and never escapes. ' +
            'The cladding has a lower refractive index than the core to make that happen reliably. ' +
            'Endoscopes and data cables both rely on it.',
    },
    {
        id: 'phys-beats-resonance',
        subject: 'physics',
        question: 'What causes beats and resonance?',
        aliases: ['beats', 'beat frequency', 'resonance examples', 'natural frequency', 'tuning an instrument'],
        answer:
            'Two slightly different frequencies superpose to give a loudness that rises and falls: the beat frequency ' +
            'is the difference between them, which is how instruments are tuned. ' +
            'Resonance is driving a system at its natural frequency, where energy transfers efficiently and the ' +
            'amplitude builds.',
    },
    {
        id: 'phys-em-waves-uses',
        subject: 'physics',
        question: 'What is each type of radiation used for?',
        aliases: ['uses of em waves', 'microwaves uses', 'infrared uses', 'x rays uses', 'uv uses'],
        answer:
            'Radio for broadcasting, microwaves for heating and mobile signals, infrared for thermal imaging and ' +
            'remote controls, visible for sight, ultraviolet for sterilising, X-rays for imaging bone, gamma for ' +
            'sterilising and treating cancer. ' +
            'Risk rises with frequency, since higher energy photons ionise.',
    },
    {
        id: 'phys-lens-applications',
        subject: 'physics',
        question: 'How do lenses correct vision?',
        aliases: ['short sighted', 'long sighted', 'myopia physics', 'hyperopia', 'corrective lenses'],
        answer:
            'A short-sighted eye focuses light in front of the retina, so a diverging concave lens is used to spread ' +
            'the light first. ' +
            'A long-sighted eye focuses behind it, so a converging convex lens brings the focus forward.',
    },
    {
        id: 'phys-wavefronts',
        subject: 'physics',
        question: 'What is a wavefront?',
        aliases: ['wavefront', 'huygens principle', 'rays and wavefronts'],
        answer:
            'A line or surface joining points that are all at the same stage of their oscillation, such as the crests. ' +
            'Rays are drawn perpendicular to wavefronts to show the direction of travel, so the two are two views of ' +
            'the same wave.',
    },
    {
        id: 'phys-why-light-bends',
        subject: 'physics',
        question: 'Why does light bend when it enters a new medium?',
        aliases: ['why light bends', 'change of speed on refraction', 'wavefront explanation of bending'],
        answer:
            'Because its speed changes. ' +
            'One edge of the wavefront enters the slower medium first and is held back while the other edge continues, ' +
            'so the front pivots. ' +
            'Frequency is unchanged, so the wavelength changes instead.',
    },
    {
        id: 'phys-rainbow',
        subject: 'physics',
        question: 'How is a rainbow formed?',
        aliases: ['rainbow', 'dispersion in raindrops', 'why the bow is curved'],
        answer:
            'Light refracts entering a raindrop, reflects off the back, and refracts again leaving. ' +
            'Each colour bends by a slightly different amount, so they emerge separated, with red at about 42 degrees ' +
            'from the antisolar point and violet slightly less, which is why red sits on the outside.',
    },
    {
        id: 'phys-critical-angle',
        subject: 'physics',
        question: 'What is the critical angle?',
        aliases: ['critical angle', 'angle for total internal reflection', 'calculating the critical angle'],
        answer:
            'The angle of incidence inside the denser medium at which the refracted ray grazes along the boundary at ' +
            '90 degrees. ' +
            'Beyond it, nothing refracts out. ' +
            'It is found from sin θc = n₂/n₁, so a larger difference in refractive index gives a smaller critical angle.',
    },
    {
        id: 'phys-curved-mirrors',
        subject: 'physics',
        question: 'How do concave and convex mirrors differ?',
        aliases: ['concave mirror', 'convex mirror', 'focal point of a mirror', 'shaving mirror'],
        answer:
            'A concave mirror converges light to a focus and can give a magnified upright image when the object is ' +
            'inside the focal length, or an inverted real image beyond it. ' +
            'A convex mirror always gives a small upright virtual image with a wide field of view, which is why it is ' +
            'used for security and blind corners.',
    },
    {
        id: 'phys-magnification',
        subject: 'physics',
        question: 'How do I calculate magnification?',
        aliases: ['magnification formula', 'image height ratio', 'negative magnification'],
        answer:
            'Magnification is image height divided by object height, which also equals image distance over object ' +
            'distance. ' +
            'A magnitude below one means the image is smaller, and a negative value means it is inverted.',
    },
    {
        id: 'phys-thin-lens-equation',
        subject: 'physics',
        question: 'What is the thin lens equation?',
        aliases: ['thin lens equation', 'lens formula', 'object and image distance'],
        answer:
            '1/f = 1/u + 1/v, where u is the object distance, v the image distance and f the focal length. ' +
            'Signs matter: a converging lens has positive f, a diverging lens negative, and a negative v means the ' +
            'image is virtual and on the same side as the object.',
    },
    {
        id: 'phys-ultrasound',
        subject: 'physics',
        question: 'How is ultrasound used?',
        aliases: ['ultrasound', 'sonar', 'echolocation', 'imaging with sound'],
        answer:
            'A pulse is sent out and the time for the echo gives the distance, since d = vt/2 for the round trip. ' +
            'Reflections at boundaries between tissues build an image. ' +
            'Higher frequencies give finer detail but penetrate less deeply.',
    },
    {
        id: 'phys-decibel-scale',
        subject: 'physics',
        question: 'What is the decibel scale?',
        aliases: ['decibel', 'sound level scale', 'logarithmic loudness'],
        answer:
            'A logarithmic scale for sound intensity, so every 10 dB is a factor of ten in intensity but sounds only ' +
            'about twice as loud. ' +
            'It is used because human hearing spans a range of about a trillion in intensity, which a linear scale ' +
            'handles badly.',
    },
];
