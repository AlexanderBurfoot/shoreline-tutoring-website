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
];
