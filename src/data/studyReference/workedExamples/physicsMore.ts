/**
 * Worked examples: physics, second set.
 *
 * A further question of each type, and a first where none existed, each solved
 * with the numbers shown and checked. The data sheet values are used throughout,
 * so g is 9.8 m s⁻². Written by hand and shown exactly as written.
 */
import type { StudyEntry } from '../types';

export const workedExamplePhysicsMoreEntries: StudyEntry[] = [
    {
        id: 'phys-example-average-acceleration',
        subject: 'physics',
        question: 'Can you show me a worked example of finding an acceleration from a change in velocity?',
        aliases: ['worked example average acceleration', 'example of acceleration from a velocity change', 'change in velocity over time example'],
        answer:
            'A car goes from 8 m s⁻¹ to 26 m s⁻¹ in 6 seconds. Acceleration is the change in velocity over the time: ' +
            '26 − 8 = 18, then 18 ÷ 6 = 3 m s⁻². A negative result would simply mean the car was slowing, not that the ' +
            'working was wrong.',
    },
    {
        id: 'phys-example-vertical-launch',
        subject: 'physics',
        question: 'Can you show me a worked example of a ball thrown straight up?',
        aliases: ['worked example ball thrown straight up', 'example of vertical launch', 'maximum height of a thrown ball example'],
        answer:
            'A ball leaves the hand at 20 m s⁻¹ upwards. At the top its velocity is zero, so use v² = u² + 2as with a = ' +
            '−9.8: 0 = 400 − 19.6s, giving s = 20.4 m. The time up is 20 ÷ 9.8 = 2.04 s, and the flight takes twice ' +
            'that.',
    },
    {
        id: 'phys-example-projectile-range',
        subject: 'physics',
        question: 'Can you show me a worked example of finding the range of a projectile?',
        aliases: ['worked example projectile range', 'example of how far a projectile lands', 'horizontal range example'],
        answer:
            'A ball is launched at 25 m s⁻¹ at 30° above the horizontal. The vertical component is 25 × 0.5 = 12.5 m ' +
            's⁻¹, so the flight time is 2 × 12.5 ÷ 9.8 = 2.55 s. The horizontal component is 25 × 0.866 = 21.65 m s⁻¹, ' +
            'so the range is 21.65 × 2.55 = 55.2 m.',
    },
    {
        id: 'phys-example-inclined-plane-components',
        subject: 'physics',
        question: 'Can you show me a worked example of resolving weight on a slope?',
        aliases: ['worked example resolving weight on a slope', 'example of components of weight', 'weight down the incline example'],
        answer:
            'A 12 kg box sits on a 25° slope. Its weight is 12 × 9.8 = 117.6 N. The part along the slope is 117.6 × ' +
            'sin 25° = 49.7 N, and the part pressing into the surface is 117.6 × cos 25° = 106.6 N. Sine goes with the ' +
            'slope direction, cosine with the normal.',
    },
    {
        id: 'phys-example-friction-coefficient',
        subject: 'physics',
        question: 'Can you show me a worked example of finding a coefficient of friction?',
        aliases: ['worked example coefficient of friction', 'example of finding mu', 'friction force from the normal force example'],
        answer:
            'A 20 kg crate needs 78 N to keep sliding on level ground. The normal force is 20 × 9.8 = 196 N, so the ' +
            'coefficient is 78 ÷ 196 = 0.40. The coefficient has no units, because it is a force divided by a force.',
    },
    {
        id: 'phys-example-tension-two-masses',
        subject: 'physics',
        question: 'Can you show me a worked example of two masses on a pulley?',
        aliases: ['worked example two masses on a pulley', 'example of connected masses', 'tension in a string example'],
        answer:
            'Masses of 3 kg and 5 kg hang either side of a frictionless pulley. The net force is the weight difference: ' +
            '(5 − 3) × 9.8 = 19.6 N, acting on the total mass of 8 kg, so the acceleration is 19.6 ÷ 8 = 2.45 m s⁻². ' +
            'The tension follows from either mass alone: 3 × (9.8 + 2.45) = 36.8 N.',
    },
    {
        id: 'phys-example-work-against-gravity',
        subject: 'physics',
        question: 'Can you show me a worked example of work done lifting something?',
        aliases: ['worked example work lifting', 'example of work against gravity', 'energy to lift a mass example'],
        answer:
            'Lift a 15 kg box 2.5 m at a steady speed. The force needed equals the weight: 15 × 9.8 = 147 N, so the ' +
            'work is 147 × 2.5 = 368 J. All of it becomes gravitational potential energy, which is why mgh gives the ' +
            'same number.',
    },
    {
        id: 'phys-example-energy-conservation-pendulum',
        subject: 'physics',
        question: 'Can you show me a worked example of energy conservation on a pendulum?',
        aliases: ['worked example pendulum energy', 'example of swinging speed from height', 'potential to kinetic energy example'],
        answer:
            'A pendulum bob is released from 0.45 m above its lowest point. All the potential energy becomes kinetic, ' +
            'so v² = 2 × 9.8 × 0.45 = 8.82, giving v = 2.97 m s⁻¹. The mass cancels, which is why it is not needed.',
    },
    {
        id: 'phys-example-elastic-collision',
        subject: 'physics',
        question: 'Can you show me a worked example of checking whether a collision is elastic?',
        aliases: ['worked example elastic collision', 'example of testing for an elastic collision', 'kinetic energy before and after example'],
        answer:
            'Two 2 kg trolleys approach at 3 m s⁻¹ and 1 m s⁻¹ and afterwards move at 1 m s⁻¹ and 3 m s⁻¹. Momentum ' +
            'before is 6 + 2 = 8 and after is 2 + 6 = 8, so momentum is conserved. Kinetic energy before is 9 + 1 = 10 ' +
            'J and after is 1 + 9 = 10 J, so the collision is elastic.',
    },
    {
        id: 'phys-example-inelastic-collision',
        subject: 'physics',
        question: 'Can you show me a worked example of an inelastic collision?',
        aliases: ['worked example inelastic collision', 'example of two objects sticking together', 'energy lost in a collision example'],
        answer:
            'A 1200 kg car at 15 m s⁻¹ hits a stationary 800 kg car and they move off together. Momentum is 1200 × 15 ' +
            '= 18,000, shared by 2000 kg, so the speed is 18000 ÷ 2000 = 9 m s⁻¹. Kinetic energy falls from 135 kJ to ' +
            '81 kJ, and the missing 54 kJ went into deformation and heat.',
    },
    {
        id: 'phys-example-impulse-from-force',
        subject: 'physics',
        question: 'Can you show me a worked example of impulse from a force and a time?',
        aliases: ['worked example impulse from a force', 'example of force times time', 'impulse and momentum change example'],
        answer:
            'A 0.15 kg ball is struck by a 450 N force for 0.008 s. The impulse is 450 × 0.008 = 3.6 N s, which equals ' +
            'the change in momentum, so the change in speed is 3.6 ÷ 0.15 = 24 m s⁻¹. Impulse and momentum share ' +
            'units, which is the check that the working is on track.',
    },
    {
        id: 'phys-example-circular-motion-force',
        subject: 'physics',
        question: 'Can you show me a worked example of centripetal force?',
        aliases: ['worked example centripetal force', 'example of force in circular motion', 'car turning a corner force example'],
        answer:
            'A 900 kg car takes a 40 m radius bend at 18 m s⁻¹. The required force is mv² ÷ r: 18² = 324, then 900 × ' +
            '324 = 291,600, then divided by 40 gives 7290 N. Friction must supply this, which is why a wet road sets ' +
            'the safe speed.',
    },
    {
        id: 'phys-example-gravitational-field-strength',
        subject: 'physics',
        question: 'Can you show me a worked example of gravitational field strength?',
        aliases: ['worked example gravitational field strength', 'example of g on another planet', 'field strength from mass and radius example'],
        answer:
            'A planet has mass 6.0 × 10²⁴ kg and radius 6.4 × 10⁶ m. Field strength is GM ÷ r². The radius squared is ' +
            '4.1 × 10¹³, and GM is 4.0 × 10¹⁴, so g = 9.8 m s⁻². Working the powers of ten separately from the digits ' +
            'keeps this manageable.',
    },
    {
        id: 'phys-example-orbital-radius-from-period',
        subject: 'physics',
        question: 'Can you show me a worked example of finding an orbital radius from a period?',
        aliases: ['worked example orbital radius from a period', 'example of keplers third law applied', 'geostationary orbit example'],
        answer:
            'A satellite orbits with period 24 hours, which is 86,400 s. Kepler’s third law gives r³ = GMT² ÷ 4π². ' +
            'With GM for Earth at 4.0 × 10¹⁴ and T² at 7.5 × 10⁹, the numerator is 3.0 × 10²⁴, divided by 39.5 gives ' +
            '7.6 × 10²² , so r is 4.2 × 10⁷ m. That is the geostationary radius.',
    },
    {
        id: 'phys-example-escape-energy',
        subject: 'physics',
        question: 'Can you show me a worked example of gravitational potential energy in orbit?',
        aliases: ['worked example gravitational potential energy orbit', 'example of energy to raise a satellite', 'negative potential energy example'],
        answer:
            'Gravitational potential energy is −GMm ÷ r, so it is negative and rises towards zero as r grows. Moving a ' +
            '500 kg satellite from radius 7.0 × 10⁶ m to 1.4 × 10⁷ m halves the size of the negative term, so the ' +
            'energy needed is half the original magnitude. The sign matters: work is done to make it less negative.',
    },
    {
        id: 'phys-example-magnetic-force-on-wire',
        subject: 'physics',
        question: 'Can you show me a worked example of the force on a current carrying wire?',
        aliases: ['worked example force on a wire', 'example of bil', 'magnetic force on a conductor example'],
        answer:
            'A 0.25 m wire carries 3.0 A at right angles to a 0.40 T field. The force is BIL: 0.40 × 3.0 = 1.2, then ' +
            '1.2 × 0.25 = 0.30 N. At an angle the sine of that angle multiplies in, so a wire parallel to the field ' +
            'feels no force at all.',
    },
    {
        id: 'phys-example-force-between-wires',
        subject: 'physics',
        question: 'Can you show me a worked example of the force between two parallel wires?',
        aliases: ['worked example force between two wires', 'example of parallel currents attracting', 'force per unit length example'],
        answer:
            'Two wires 0.05 m apart carry 4 A and 6 A in the same direction. The force per metre is μ₀I₁I₂ ÷ 2πd. The ' +
            'currents multiply to 24, and 2πd is 0.314, so the force per metre is 2 × 10⁻⁷ × 24 ÷ 0.05 = 9.6 × 10⁻⁵ N. ' +
            'Same direction means they attract.',
    },
    {
        id: 'phys-example-charged-particle-in-field',
        subject: 'physics',
        question: 'Can you show me a worked example of a charged particle in a magnetic field?',
        aliases: ['worked example charged particle in a magnetic field', 'example of radius of a circular path', 'qvb equals mv squared over r example'],
        answer:
            'An electron at 2.0 × 10⁶ m s⁻¹ enters a 0.030 T field at right angles. Setting qvB equal to mv² ÷ r gives r ' +
            '= mv ÷ qB. The top is 9.11 × 10⁻³¹ × 2.0 × 10⁶ = 1.8 × 10⁻²⁴, and the bottom is 1.6 × 10⁻¹⁹ × 0.030 = 4.8 ' +
            '× 10⁻²¹, so r = 3.8 × 10⁻⁴ m.',
    },
    {
        id: 'phys-example-electric-field-between-plates',
        subject: 'physics',
        question: 'Can you show me a worked example of the field between parallel plates?',
        aliases: ['worked example field between plates', 'example of voltage over separation', 'electric field strength example'],
        answer:
            'Plates 0.02 m apart have 240 V across them. The field is the voltage over the separation: 240 ÷ 0.02 = ' +
            '12,000 V m⁻¹. The force on an electron there is qE: 1.6 × 10⁻¹⁹ × 12000 = 1.9 × 10⁻¹⁵ N, and it is the ' +
            'same everywhere between the plates.',
    },
    {
        id: 'phys-example-series-circuit',
        subject: 'physics',
        question: 'Can you show me a worked example of resistors in series?',
        aliases: [
            'worked example resistors in series',
            'example of adding resistors in series',
            'voltage divided in series example',
        ],
        answer:
            'Resistors of 4 Ω and 8 Ω sit in series across 12 V. Add them: 4 + 8 = 12 Ω, so the current is 12 ÷ 12 = 1 ' +
            'A, the same through both. The voltages are 1 × 4 = 4 V and 1 × 8 = 8 V, and they add back to 12 V.',
    },
    {
        id: 'phys-example-mixed-circuit',
        subject: 'physics',
        question: 'Can you show me a worked example of a circuit with series and parallel parts?',
        aliases: ['worked example mixed circuit', 'example of series and parallel combined', 'combination circuit example'],
        answer:
            'Two 6 Ω resistors in parallel sit in series with a 3 Ω resistor, across 12 V. The parallel pair is 6 ÷ 2 = ' +
            '3 Ω, so the total is 3 + 3 = 6 Ω and the current is 12 ÷ 6 = 2 A. The 3 Ω resistor drops 6 V, leaving 6 V ' +
            'across the pair.',
    },
    {
        id: 'phys-example-energy-cost',
        subject: 'physics',
        question: 'Can you show me a worked example of the cost of running an appliance?',
        aliases: ['worked example cost of electricity', 'example of kilowatt hours', 'cost of running an appliance example'],
        answer:
            'A 2000 W heater runs 3 hours a day for 30 days. The energy is 2 kW × 3 = 6 kWh a day, so 6 × 30 = 180 kWh ' +
            'a month. At 30 cents a unit that is 180 × 0.30 = $54. Convert watts to kilowatts before multiplying by ' +
            'hours.',
    },
    {
        id: 'phys-example-transformer-power',
        subject: 'physics',
        question: 'Can you show me a worked example of power in an ideal transformer?',
        aliases: ['worked example transformer power', 'example of power in and out of a transformer', 'ideal transformer example'],
        answer:
            'A transformer steps 240 V down to 12 V and draws 0.5 A from the supply. An ideal transformer keeps power ' +
            'the same, so the input power is 240 × 0.5 = 120 W, and the secondary current is 120 ÷ 12 = 10 A. Voltage ' +
            'down means current up by the same factor.',
    },
    {
        id: 'phys-example-motor-torque',
        subject: 'physics',
        question: 'Can you show me a worked example of the torque on a motor coil?',
        aliases: ['worked example torque on a coil', 'example of motor torque', 'turning effect on a current loop example'],
        answer:
            'A coil of 50 turns and area 0.004 m² carries 2.0 A in a 0.15 T field, with the plane parallel to the ' +
            'field. The torque is nBIA: 50 × 0.15 = 7.5, then 7.5 × 2.0 = 15, then 15 × 0.004 = 0.060 N m. Torque is ' +
            'greatest in this position and zero a quarter turn later.',
    },
    {
        id: 'phys-example-lenz-direction',
        subject: 'physics',
        question: 'Can you show me a worked example of applying Lenz’s law?',
        aliases: ['worked example lenz law', 'example of the direction of an induced current', 'opposing the change example'],
        answer:
            'A magnet is pushed north pole first into a coil. The coil opposes the change, so the near face must ' +
            'become a north pole to push back, and the induced current runs anticlockwise seen from the magnet. Pull ' +
            'the magnet out and the current reverses, because the change being opposed has reversed.',
    },
    {
        id: 'phys-example-flux-change-emf',
        subject: 'physics',
        question: 'Can you show me a worked example of an emf from a changing flux?',
        aliases: ['worked example emf from changing flux', 'example of an emf from a flux change', 'rate of change of flux example'],
        answer:
            'A 200 turn coil sees the flux through it fall from 0.006 Wb to 0.002 Wb in 0.05 s. The change is 0.004 ' +
            'Wb, so the rate is 0.004 ÷ 0.05 = 0.08 Wb s⁻¹, and the emf is 200 × 0.08 = 16 V. The minus sign in the ' +
            'law gives direction, not size.',
    },
    {
        id: 'phys-example-wave-period-frequency',
        subject: 'physics',
        question: 'Can you show me a worked example of period and frequency?',
        aliases: ['worked example period and frequency', 'example of converting period to frequency', 'frequency from a period example'],
        answer:
            'A wave has period 0.004 s. Frequency is one over the period: 1 ÷ 0.004 = 250 Hz. If its speed is 340 m ' +
            's⁻¹, the wavelength is 340 ÷ 250 = 1.36 m. Period and frequency are reciprocals, so one always answers ' +
            'for the other.',
    },
    {
        id: 'phys-example-beats',
        subject: 'physics',
        question: 'Can you show me a worked example of beat frequency?',
        aliases: ['worked example beat frequency', 'example of beats between two notes', 'tuning by beats example'],
        answer:
            'Two strings sound at 440 Hz and 444 Hz. The beat frequency is the difference: 444 − 440 = 4 Hz, so the ' +
            'loudness rises and falls four times a second. As a string is tuned closer, the beats slow, and silence ' +
            'between them means the notes match.',
    },
    {
        id: 'phys-example-standing-wave-harmonics',
        subject: 'physics',
        question: 'Can you show me a worked example of harmonics on a string?',
        aliases: ['worked example harmonics on a string', 'example of the second harmonic', 'overtones on a string example'],
        answer:
            'A 0.8 m string has a fundamental of 200 Hz. The harmonics are whole multiples, so the second is 400 Hz ' +
            'and the third 600 Hz. The fundamental fits half a wavelength on the string, so the wavelength is 1.6 m ' +
            'and the wave speed is 200 × 1.6 = 320 m s⁻¹.',
    },
    {
        id: 'phys-example-refractive-index-speed',
        subject: 'physics',
        question: 'Can you show me a worked example of finding a speed of light in a medium?',
        aliases: ['worked example speed of light in a medium', 'example of refractive index and speed', 'slower light in glass example'],
        answer:
            'Glass has refractive index 1.5. The speed inside is the vacuum speed divided by the index: 3.00 × 10⁸ ÷ ' +
            '1.5 = 2.0 × 10⁸ m s⁻¹. The frequency does not change on entering the glass, so the wavelength shortens by ' +
            'the same factor.',
    },
    {
        id: 'phys-example-double-slit-spacing',
        subject: 'physics',
        question: 'Can you show me a worked example of the double slit spacing?',
        aliases: ['worked example double slit', 'example of fringe spacing', 'interference pattern spacing example'],
        answer:
            'Light of wavelength 600 nm passes slits 0.2 mm apart onto a screen 2.0 m away. The fringe spacing is λL ÷ ' +
            'd: the top is 6.0 × 10⁻⁷ × 2.0 = 1.2 × 10⁻⁶, and dividing by 2.0 × 10⁻⁴ gives 6.0 × 10⁻³ m, or 6 mm.',
    },
    {
        id: 'phys-example-polarisation-intensity',
        subject: 'physics',
        question: 'Can you show me a worked example of light through two polarisers?',
        aliases: ['worked example polarisers', 'example of light through a polariser', 'crossed polarisers example'],
        answer:
            'Unpolarised light passes one polariser, which halves its intensity. A second polariser at 60° to the ' +
            'first transmits by the square of the cosine: cos 60° = 0.5, and squaring gives 0.25. So the final ' +
            'intensity is a quarter of the half, one eighth of the original.',
    },
    {
        id: 'phys-example-blackbody-peak',
        subject: 'physics',
        question: 'Can you show me a worked example of Wien’s displacement law?',
        aliases: ['worked example wien law', 'example of peak wavelength from temperature', 'star colour and temperature example'],
        answer:
            'A star peaks at 500 nm. Wien’s law says the peak wavelength times the temperature is a constant, about ' +
            '2.9 × 10⁻³ m K. So T = 2.9 × 10⁻³ ÷ 5.0 × 10⁻⁷ = 5800 K. A hotter star peaks at a shorter wavelength, ' +
            'which is why it looks blue.',
    },
    {
        id: 'phys-example-work-function',
        subject: 'physics',
        question: 'Can you show me a worked example of finding a work function?',
        aliases: ['worked example work function', 'example of threshold frequency', 'photoelectric work function example'],
        answer:
            'A metal has a threshold frequency of 5.5 × 10¹⁴ Hz. The work function is hf: 6.626 × 10⁻³⁴ × 5.5 × 10¹⁴ = ' +
            '3.6 × 10⁻¹⁹ J, which is 2.3 eV. Light below this frequency ejects no electrons however bright it is.',
    },
    {
        id: 'phys-example-energy-level-transition',
        subject: 'physics',
        question: 'Can you show me a worked example of an energy level transition?',
        aliases: ['worked example energy level transition', 'example of a photon from an electron drop', 'emission wavelength example'],
        answer:
            'An electron drops between levels 3.0 eV apart. In joules that is 3.0 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J. Then λ ' +
            '= hc ÷ E, and hc is about 2.0 × 10⁻²⁵, so λ = 2.0 × 10⁻²⁵ ÷ 4.8 × 10⁻¹⁹ = 4.1 × 10⁻⁷ m, which is violet ' +
            'light.',
    },
    {
        id: 'phys-example-relativistic-momentum',
        subject: 'physics',
        question: 'Can you show me a worked example of relativistic momentum?',
        aliases: ['worked example relativistic momentum', 'example of momentum near the speed of light', 'gamma factor momentum example'],
        answer:
            'A particle of rest mass 1.0 × 10⁻²⁷ kg travels at 0.8c. The gamma factor is 1 ÷ √(1 − 0.64) = 1 ÷ 0.6 = ' +
            '1.67. Classical momentum would be 1.0 × 10⁻²⁷ × 2.4 × 10⁸ = 2.4 × 10⁻¹⁹, so the relativistic value is ' +
            '1.67 times that, 4.0 × 10⁻¹⁹ kg m s⁻¹.',
    },
    {
        id: 'phys-example-mass-energy-equivalence',
        subject: 'physics',
        question: 'Can you show me a worked example of mass energy equivalence?',
        aliases: ['worked example mass energy equivalence', 'example of e equals mc squared', 'energy from a mass loss example'],
        answer:
            'A reaction loses 2.0 × 10⁻²⁸ kg of mass. The energy released is mc², and c² is 9.0 × 10¹⁶, so E = 2.0 × ' +
            '10⁻²⁸ × 9.0 × 10¹⁶ = 1.8 × 10⁻¹¹ J. Dividing by 1.6 × 10⁻¹⁹ converts it to about 110 MeV.',
    },
    {
        id: 'phys-example-binding-energy-per-nucleon',
        subject: 'physics',
        question: 'Can you show me a worked example of binding energy per nucleon?',
        aliases: ['worked example binding energy per nucleon', 'example of comparing nuclear stability', 'binding energy per particle example'],
        answer:
            'A nucleus of 56 nucleons has a total binding energy of 492 MeV. Per nucleon that is 492 ÷ 56 = 8.8 MeV, ' +
            'which is near the peak of the curve and is why iron is so stable. Comparing nuclei needs the per nucleon ' +
            'figure, never the total.',
    },
    {
        id: 'phys-example-decay-series',
        subject: 'physics',
        question: 'Can you show me a worked example of balancing a nuclear decay equation?',
        aliases: ['worked example balancing a nuclear equation', 'example of alpha decay equation', 'nuclear equation example'],
        answer:
            'Uranium-238 emits an alpha particle. An alpha carries 2 protons and 4 nucleons, so the mass number falls ' +
            'by 4 to 234 and the atomic number falls by 2 to 90, giving thorium-234. Check both columns balance: 238 = ' +
            '234 + 4, and 92 = 90 + 2.',
    },
    {
        id: 'phys-example-activity-decay-constant',
        subject: 'physics',
        question: 'Can you show me a worked example of a decay constant?',
        aliases: ['worked example decay constant', 'example of activity from a half life', 'lambda from a half life example'],
        answer:
            'A sample has a half-life of 5.0 hours, which is 18,000 s. The decay constant is ln 2 ÷ the half-life: ' +
            '0.693 ÷ 18000 = 3.85 × 10⁻⁵ s⁻¹. With 2.0 × 10²⁰ atoms present, the activity is that constant times the ' +
            'number, about 7.7 × 10¹⁵ decays a second.',
    },
    {
        id: 'phys-example-uncertainty-in-a-gradient',
        subject: 'physics',
        question: 'Can you show me a worked example of uncertainty in a gradient?',
        aliases: ['worked example uncertainty in a gradient', 'example of error in a slope', 'uncertainty from a graph example'],
        answer:
            'A line of best fit has gradient 4.2, and the steepest and shallowest lines through the error bars give 4.6 ' +
            'and 3.8. The uncertainty is half the spread: 4.6 − 3.8 = 0.8, so half is 0.4. Report the gradient as 4.2 ' +
            'plus or minus 0.4.',
    },
    {
        id: 'phys-example-percentage-error',
        subject: 'physics',
        question: 'Can you show me a worked example of percentage error?',
        aliases: ['worked example percentage error', 'example of comparing to an accepted value', 'experimental error example'],
        answer:
            'An experiment gives 9.5 m s⁻² for gravity where the accepted value is 9.8. The difference is 0.3, so the ' +
            'percentage error is 0.3 ÷ 9.8 × 100 = 3.1%. Divide by the accepted value, not by your own, or the figure ' +
            'flatters the experiment.',
    },
    {
        id: 'phys-example-combining-uncertainties',
        subject: 'physics',
        question: 'Can you show me a worked example of combining uncertainties?',
        aliases: ['worked example combining uncertainties', 'example of adding percentage uncertainties', 'uncertainty in a product example'],
        answer:
            'A length is 2.00 m plus or minus 1% and a time 0.90 s plus or minus 2%. For a speed, which divides one by ' +
            'the other, add the percentage uncertainties: 1 + 2 = 3%. The speed is 2.00 ÷ 0.90 = 2.22 m s⁻¹, so the ' +
            'uncertainty is about 0.07 m s⁻¹.',
    },
    {
        id: 'phys-example-linearising-data',
        subject: 'physics',
        question: 'Can you show me a worked example of linearising data?',
        aliases: ['worked example linearising data', 'example of plotting to get a straight line', 'straightening a curve example'],
        answer:
            'A pendulum gives T against L as a curve, since T depends on the square root of L. Plot T² against L ' +
            'instead and the graph straightens, with gradient 4π² ÷ g. A gradient of 4.0 then gives g = 39.5 ÷ 4.0 = ' +
            '9.9 m s⁻². Choose the axes that make the theory a straight line.',
    },
];
