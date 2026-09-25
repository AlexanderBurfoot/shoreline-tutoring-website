/**
 * Worked examples: physics.
 *
 * One calculation of each type, with the substitution and the units shown.
 */
import type { StudyEntry } from '../types';

export const workedExamplePhysicsEntries: StudyEntry[] = [
    {
        id: 'phys-example-projectile-from-height',
        subject: 'physics',
        question: 'Can you show me a worked example of a projectile launched horizontally?',
        aliases: ['worked example horizontal launch', 'example of a projectile off a cliff', 'fired horizontally example'],
        answer:
            'A ball leaves a 20 m cliff horizontally at 15 m s⁻¹. Vertically u = 0, so 20 = ½(9.8)t² gives t = 2.02 ' +
            's. Horizontally the velocity is unchanged, so the range is 15 × 2.02 = 30.3 m.',
    },
    {
        id: 'phys-example-banked-curve',
        subject: 'physics',
        question: 'Can you show me a worked example of a banked curve?',
        aliases: ['worked example banked curve', 'example of a banked track calculation', 'design speed example'],
        answer:
            'A track of radius 50 m is banked at 20°. The design speed comes from tan θ = v²/rg, so v = √(50 × 9.8 × ' +
            'tan 20°) = √(490 × 0.364) = 13.4 m s⁻¹, about 48 km/h.',
    },
    {
        id: 'phys-example-orbital-speed',
        subject: 'physics',
        question: 'Can you show me a worked example of orbital speed?',
        aliases: ['worked example orbital speed', 'example of satellite speed', 'orbital velocity calculation example'],
        answer:
            'For a satellite 7.0 × 10⁶ m from the centre of Earth, with GM = 3.98 × 10¹⁴, v = √(GM/r) = √(5.69 × 10⁷) ' +
            '= 7.5 × 10³ m s⁻¹. Note the mass of the satellite never enters the calculation.',
    },
    {
        id: 'phys-example-escape-velocity',
        subject: 'physics',
        question: 'Can you show me a worked example of escape velocity?',
        aliases: ['worked example escape velocity', 'example of escape speed', 'escaping earth calculation'],
        answer:
            'From the Earth surface, r = 6.37 × 10⁶ m and GM = 3.98 × 10¹⁴. v = √(2GM/r) = √(1.25 × 10⁸) = 1.12 × 10⁴ ' +
            'm s⁻¹, about 11.2 km s⁻¹. That is √2 times the speed of a circular orbit at the same radius.',
    },
    {
        id: 'phys-example-torque-balance',
        subject: 'physics',
        question: 'Can you show me a worked example of a torque balance?',
        aliases: ['worked example torque balance', 'example of a seesaw calculation', 'balancing moments example'],
        answer:
            'A 30 kg child sits 1.5 m from the pivot of a seesaw. For balance, 30 × 1.5 = 45 × d, so a 45 kg child ' +
            'must sit d = 1.0 m from the pivot. The weights cancel because g appears on both sides.',
    },
    {
        id: 'phys-example-work-energy',
        subject: 'physics',
        question: 'Can you show me a worked example of the work-energy theorem?',
        aliases: ['worked example work energy theorem', 'example of braking force', 'stopping distance force example'],
        answer:
            'A 1,200 kg car braking from 20 m s⁻¹ stops in 40 m. The kinetic energy removed is ½(1200)(20²) = 240,000 ' +
            'J, so the braking force is 240,000 ÷ 40 = 6,000 N. No time or acceleration was needed.',
    },
    {
        id: 'phys-example-power',
        subject: 'physics',
        question: 'Can you show me a worked example of a power calculation?',
        aliases: ['worked example power', 'example of calculating power', 'lifting power example'],
        answer:
            'A hoist lifts 50 kg through 3.0 m in 4.0 s. The work done against gravity is 50 × 9.8 × 3.0 = 1,470 J, ' +
            'so P = 1,470 ÷ 4.0 = 368 W. Any friction would mean the motor supplies more than this.',
    },
    {
        id: 'phys-example-efficiency',
        subject: 'physics',
        question: 'Can you show me a worked example of efficiency?',
        aliases: ['worked example efficiency', 'example of calculating efficiency', 'useful output example'],
        answer:
            'A device takes in 800 J and delivers 260 J of useful output. Efficiency = 260 ÷ 800 × 100 = 32.5%. The ' +
            'other 540 J has become heat and sound, which is where an evaluation question expects you to look.',
    },
    {
        id: 'phys-example-snell',
        subject: 'physics',
        question: 'Can you show me a worked example of Snell law?',
        aliases: ['worked example snell law', 'example of a refraction calculation', 'angle of refraction example'],
        answer:
            'Light passes from air into glass of refractive index 1.50 at 30° to the normal. n₁ sin θ₁ = n₂ sin θ₂ ' +
            'gives sin θ₂ = (1.00 × 0.500) ÷ 1.50 = 0.333, so θ₂ = 19.5°. The ray bends towards the normal on ' +
            'entering the denser medium.',
    },
    {
        id: 'phys-example-lens',
        subject: 'physics',
        question: 'Can you show me a worked example of the thin lens equation?',
        aliases: ['worked example lens equation', 'example of an image distance calculation', 'lens magnification example'],
        answer:
            'An object sits 30 cm from a converging lens of focal length 20 cm. 1/v = 1/20 − 1/30 = 1/60, so v = 60 ' +
            'cm. The magnification is 60 ÷ 30 = 2, and because v is positive the image is real and inverted.',
    },
    {
        id: 'phys-example-wave-equation',
        subject: 'physics',
        question: 'Can you show me a worked example of the wave equation?',
        aliases: ['worked example wave equation', 'example of calculating wave speed', 'v = f lambda example'],
        answer:
            'A wave of frequency 250 Hz has a wavelength of 1.4 m. v = fλ = 250 × 1.4 = 350 m s⁻¹, which is about the ' +
            'speed of sound in air. If the medium is unchanged, raising the frequency shortens the wavelength.',
    },
    {
        id: 'phys-example-induced-emf',
        subject: 'physics',
        question: 'Can you show me a worked example of an induced emf?',
        aliases: ['worked example induced emf', 'example of faradays law calculation', 'flux change emf example'],
        answer:
            'A 200 turn coil experiences a flux change of 0.050 Wb in 0.20 s. The magnitude of the emf is N ΔΦ/Δt = ' +
            '200 × 0.050 ÷ 0.20 = 50 V. The minus sign in the law gives the direction, which opposes the change.',
    },
    {
        id: 'phys-example-stopping-voltage',
        subject: 'physics',
        question: 'Can you show me a worked example of stopping voltage?',
        aliases: ['worked example stopping voltage', 'example of a photoelectric calculation', 'maximum kinetic energy example'],
        answer:
            'A photon of energy 5.0 eV strikes a metal with a work function of 2.3 eV. The maximum kinetic energy of ' +
            'the emitted electron is 5.0 − 2.3 = 2.7 eV, so the stopping voltage is 2.7 V. A brighter source releases ' +
            'more electrons but does not change this.',
    },
    {
        id: 'phys-example-relative-velocity',
        subject: 'physics',
        question: 'Can you show me a worked example of relative velocity?',
        aliases: ['worked example relative velocity', 'example of a crosswind calculation', 'plane and wind example'],
        answer:
            'A plane heads north at 200 km/h through a 50 km/h easterly wind. The resultant is √(200² + 50²) = 206 ' +
            'km/h, at tan⁻¹(50 ÷ 200) = 14° east of north. The two velocities add as perpendicular vectors.',
    },
    {
        id: 'phys-example-incline-friction',
        subject: 'physics',
        question: 'Can you show me a worked example of an incline with friction?',
        aliases: ['worked example incline with friction', 'example of a slope calculation with friction', 'block sliding down a ramp example'],
        answer:
            'A 10 kg block sits on a 30° slope with μ = 0.20. Down the slope, mg sin 30° = 49 N. The normal force is ' +
            'mg cos 30° = 84.9 N, so friction is 0.20 × 84.9 = 17.0 N. Net force 32.0 N gives a = 3.2 m s⁻².',
    },
    {
        id: 'phys-example-vertical-circle',
        subject: 'physics',
        question: 'Can you show me a worked example of a vertical circle?',
        aliases: ['worked example vertical circle', 'example of tension at the top of a loop', 'ball on a string example'],
        answer:
            'A 0.50 kg ball swings at 5.0 m s⁻¹ on a 1.0 m string. At the top, T = mv²/r − mg = (0.50 × 25 ÷ 1.0) − ' +
            '4.9 = 7.6 N. At the bottom the weight adds instead, giving 17.4 N.',
    },
    {
        id: 'phys-example-kepler',
        subject: 'physics',
        question: 'Can you show me a worked example of Kepler third law?',
        aliases: ['worked example keplers third law', 'example of the law of periods', 'orbital radius from period example'],
        answer:
            'Working in astronomical units and years, r³/T² = 1 for every planet. Mars takes 1.88 years, so r³ = ' +
            '1.88² = 3.53 and r = 1.52 AU. No masses or constants are needed when the ratio is used this way.',
    },
    {
        id: 'phys-example-momentum-2d',
        subject: 'physics',
        question: 'Can you show me a worked example of momentum in two dimensions?',
        aliases: ['worked example two dimensional momentum', 'example of a collision at right angles', 'momentum components example'],
        answer:
            'A 3.0 kg trolley moving east at 4.0 m s⁻¹ collides with a 2.0 kg trolley moving north at 5.0 m s⁻¹ and ' +
            'they stick. Momentum is 12 kg m s⁻¹ east and 10 north, so the total is √244 = 15.6 and the speed is 15.6 ' +
            '÷ 5.0 = 3.1 m s⁻¹, at 40° north of east.',
    },
    {
        id: 'phys-example-rms',
        subject: 'physics',
        question: 'Can you show me a worked example of RMS voltage?',
        aliases: ['worked example rms voltage', 'example of peak to rms', 'root mean square example'],
        answer:
            'Australian mains peaks at about 340 V. The RMS value is 340 ÷ √2 = 240 V, which is the figure quoted and ' +
            'the one that delivers the same power as a steady 240 V supply.',
    },
    {
        id: 'phys-example-de-broglie',
        subject: 'physics',
        question: 'Can you show me a worked example of the de Broglie wavelength?',
        aliases: ['worked example de broglie', 'example of matter wavelength', 'electron wavelength example'],
        answer:
            'An electron travels at 2.0 × 10⁶ m s⁻¹. λ = h ÷ mv = 6.626 × 10⁻³⁴ ÷ (9.11 × 10⁻³¹ × 2.0 × 10⁶) = 3.6 × ' +
            '10⁻¹⁰ m. That is about an atomic diameter, which is why electrons diffract from crystals.',
    },
    {
        id: 'phys-example-doppler',
        subject: 'physics',
        question: 'Can you show me a worked example of the Doppler effect?',
        aliases: ['worked example doppler', 'example of a doppler calculation', 'approaching siren frequency example'],
        answer:
            'A siren emitting 500 Hz approaches at 30 m s⁻¹ where sound travels at 340 m s⁻¹. The observed frequency ' +
            'is 500 × 340 ÷ (340 − 30) = 548 Hz. Receding instead gives 500 × 340 ÷ 370 = 459 Hz.',
    },
    {
        id: 'phys-example-mass-defect',
        subject: 'physics',
        question: 'Can you show me a worked example of mass defect?',
        aliases: ['worked example mass defect', 'example of binding energy calculation', 'mass to energy example'],
        answer:
            'A helium-4 nucleus has a mass defect of 0.0304 u. Since 1 u corresponds to about 931 MeV, the binding ' +
            'energy is 0.0304 × 931 = 28.3 MeV. Dividing by four nucleons gives about 7.1 MeV per nucleon.',
    },
    {
        id: 'phys-example-time-dilation',
        subject: 'physics',
        question: 'Can you show me a worked example of time dilation?',
        aliases: ['worked example time dilation', 'example of a relativity calculation', 'moving clock example'],
        answer:
            'A clock moves at 0.80c and measures 10 s of its own time. The factor is 1 ÷ √(1 − 0.64) = 1 ÷ 0.60 = ' +
            '1.67, so an observer at rest measures 16.7 s. The moving clock always records the shorter interval.',
    },
    {
        id: 'phys-example-length-contraction',
        subject: 'physics',
        question: 'Can you show me a worked example of length contraction?',
        aliases: ['worked example length contraction', 'example of a contracted length', 'moving rod length example'],
        answer:
            'A 100 m rocket passes at 0.80c. An observer at rest measures 100 × 0.60 = 60 m. Contraction happens only ' +
            'along the direction of motion, so the width is unchanged.',
    },
    {
        id: 'phys-example-impulse-graph',
        subject: 'physics',
        question: 'Can you show me a worked example of impulse from a graph?',
        aliases: ['worked example impulse from a graph', 'example of area under a force time graph', 'impulse area example'],
        answer:
            'A force rises and falls as a triangle, peaking at 40 N over 0.30 s. The impulse is the area, ½ × 0.30 × ' +
            '40 = 6.0 N s. That equals the change in momentum, so a 2.0 kg object would gain 3.0 m s⁻¹.',
    },
];
