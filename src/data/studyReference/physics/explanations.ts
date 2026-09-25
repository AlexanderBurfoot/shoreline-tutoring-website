/**
 * Physics: the questions students ask about everyday observations.
 *
 * Why heavy objects do not fall faster, why the sky is blue, and the other
 * explanations that reward understanding rather than a formula.
 */
import type { StudyEntry } from '../types';

export const physicsExplanationEntries: StudyEntry[] = [
    {
        id: 'phys-heavier-not-faster',
        subject: 'physics',
        question: 'Why does a heavier object not fall faster?',
        aliases: ['why heavy things dont fall faster', 'do heavier objects fall faster', 'galileo falling objects'],
        answer:
            'Because doubling the mass doubles both the gravitational force and the inertia resisting it, so a = F/m ' +
            'is unchanged at g. In air a feather falls slower only because drag is large compared with its weight, ' +
            'which is why the same feather and a hammer land together in a vacuum.',
    },
    {
        id: 'phys-energy-versus-power',
        subject: 'physics',
        question: 'What is the difference between energy and power?',
        aliases: ['energy versus power', 'joules and watts difference', 'is power the same as energy'],
        answer:
            'Energy is the total transferred, in joules; power is the rate of transfer, in watts, which is joules per ' +
            'second. A 2,000 W heater running for an hour uses the same energy as a 1,000 W heater running for two.',
    },
    {
        id: 'phys-bounce-height',
        subject: 'physics',
        question: 'Why does a ball bounce lower each time?',
        aliases: ['why a ball bounces lower', 'energy lost in a bounce', 'coefficient of restitution'],
        answer:
            'Each impact deforms the ball and the surface, and some kinetic energy becomes heat and sound rather than ' +
            'returning as elastic potential energy. Momentum is still conserved in the collision, but the mechanical ' +
            'energy is not.',
    },
    {
        id: 'phys-superconductor',
        subject: 'physics',
        question: 'What is a superconductor?',
        aliases: ['superconductor', 'zero resistance', 'critical temperature'],
        answer:
            'A material whose electrical resistance falls to exactly zero below a critical temperature, so a current ' +
            'continues without a supply and magnetic fields are expelled. Keeping materials that cold is the ' +
            'practical obstacle, and it is why they appear in MRI magnets rather than household wiring.',
    },
    {
        id: 'phys-lift-sensation',
        subject: 'physics',
        question: 'Why do I feel lighter or heavier in a lift?',
        aliases: ['feeling heavy in a lift', 'apparent weight in a lift', 'lift accelerating upward'],
        answer:
            'You feel the contact force from the floor, not gravity. Accelerating upward the floor must push with ' +
            'more than your weight, N = m(g + a), so you feel heavier, and accelerating downward it pushes with less. ' +
            'In free fall it pushes with nothing at all.',
    },
    {
        id: 'phys-sky-blue',
        subject: 'physics',
        question: 'Why is the sky blue and the sunset red?',
        aliases: ['why is the sky blue', 'why sunsets are red', 'rayleigh scattering'],
        answer:
            'Air molecules scatter short wavelengths far more than long ones, so blue light is redirected across the ' +
            'whole sky. At sunset the light travels through much more atmosphere, so the blue is scattered out of the ' +
            'beam and what reaches you is red.',
    },
    {
        id: 'phys-stars-twinkle',
        subject: 'physics',
        question: 'Why do stars twinkle but planets do not?',
        aliases: ['why stars twinkle', 'twinkling of stars', 'atmospheric turbulence'],
        answer:
            'Pockets of air at different temperatures refract starlight by varying amounts, so a point source appears ' +
            'to flicker. A planet is a small disc rather than a point, so the fluctuations across it average out and ' +
            'it shines steadily.',
    },
    {
        id: 'phys-pascal',
        subject: 'physics',
        question: 'What is a pascal?',
        aliases: ['pascal', 'unit of pressure', 'newton per square metre'],
        answer:
            'The SI unit of pressure, one newton per square metre. It is small, so pressures are usually quoted in ' +
            'kilopascals: standard atmospheric pressure is about 101 kPa and the gas laws are normally worked in kPa.',
    },
    {
        id: 'phys-volt',
        subject: 'physics',
        question: 'What is a volt?',
        aliases: ['volt', 'unit of potential difference', 'joule per coulomb'],
        answer:
            'One joule of energy transferred per coulomb of charge. So a 12 V battery gives each coulomb 12 joules, ' +
            'which is why voltage and energy are linked by W = qV rather than being the same quantity.',
    },
    {
        id: 'phys-parsec',
        subject: 'physics',
        question: 'What is a parsec?',
        aliases: ['parsec', 'astronomical distance unit', 'how far a parsec is'],
        answer:
            'The distance at which one astronomical unit subtends an angle of one arcsecond, about 3.26 light years. ' +
            'It comes directly from the parallax method, since a star with a parallax of one arcsecond is one parsec ' +
            'away.',
    },
    {
        id: 'phys-apparent-magnitude',
        subject: 'physics',
        question: 'What is apparent magnitude?',
        aliases: ['apparent magnitude', 'how bright a star looks', 'magnitude scale'],
        answer:
            'How bright a star appears from Earth, on a scale where smaller numbers are brighter and the brightest ' +
            'objects are negative. A difference of one magnitude is a factor of about 2.5 in brightness, and it ' +
            'depends on distance as well as on the star itself.',
    },
    {
        id: 'phys-triangle-of-forces',
        subject: 'physics',
        question: 'What is the triangle of forces?',
        aliases: ['triangle of forces', 'three forces in equilibrium', 'closed vector triangle'],
        answer:
            'When three forces hold an object in equilibrium, drawing them head to tail forms a closed triangle, ' +
            'since the resultant is zero. That lets an unknown force be found by trigonometry rather than by ' +
            'resolving into components.',
    },
    {
        id: 'phys-angled-pull-friction',
        subject: 'physics',
        question: 'How do I handle a force applied at an angle?',
        aliases: ['force at an angle with friction', 'pulling at an angle', 'angled applied force'],
        answer:
            'Resolve it: the horizontal component drives the motion and the vertical component changes the normal ' +
            'force, and so the friction. Pulling upward at an angle reduces friction, which is why a pull often beats ' +
            'a push of the same size.',
    },
    {
        id: 'phys-work-against-friction',
        subject: 'physics',
        question: 'How do I calculate work done against friction?',
        aliases: ['work against friction', 'energy lost to friction', 'friction work calculation'],
        answer:
            'Multiply the friction force by the distance moved, which gives the energy converted to heat. It is ' +
            'always positive as an energy loss, and it is why the kinetic energy gained is less than the work done by ' +
            'the applied force.',
    },
    {
        id: 'phys-energy-with-losses',
        subject: 'physics',
        question: 'How do I use conservation of energy when there is friction?',
        aliases: ['energy conservation with friction', 'energy losses on a slope', 'accounting for heat in energy problems'],
        answer:
            'Initial energy equals final energy plus the energy lost. For a block sliding down a rough slope, mgh = ' +
            '½mv² + friction × distance, so the speed at the bottom is less than the smooth case predicts.',
    },
    {
        id: 'phys-car-on-flat-curve',
        subject: 'physics',
        question: 'What provides the centripetal force for a car on a flat road?',
        aliases: ['car turning on a flat road', 'friction as centripetal force', 'maximum speed around a flat curve'],
        answer:
            'Friction between the tyres and the road. The maximum speed is where friction reaches its limit, v = ' +
            '√(μgr), so a wet road with a lower μ lowers the safe speed even though the radius is unchanged.',
    },
    {
        id: 'phys-geostationary-radius',
        subject: 'physics',
        question: 'How is the radius of a geostationary orbit found?',
        aliases: ['geostationary orbit radius', 'calculating the geostationary altitude', 'orbit with a 24 hour period'],
        answer:
            'Set the period to one sidereal day and rearrange Kepler third law: r = (GMT²/4π²)^⅓, which gives about ' +
            '4.2 × 10⁷ m from the centre of Earth, or roughly 36,000 km above the surface.',
    },
    {
        id: 'phys-escape-energy',
        subject: 'physics',
        question: 'What is the difference between escape velocity and escape energy?',
        aliases: ['escape energy', 'energy needed to escape', 'work to leave a gravitational field'],
        answer:
            'Escape velocity is the speed needed if all the energy is given at once. Escape energy is the work ' +
            'required, GMm/r, which can be supplied gradually by a rocket burning for minutes, which is why no launch ' +
            'actually reaches escape velocity at the pad.',
    },
    {
        id: 'phys-gpe-over-distance',
        subject: 'physics',
        question: 'How do I find the energy needed to lift something far from Earth?',
        aliases: ['energy to raise a satellite', 'gravitational potential energy change', 'work done against gravity over distance'],
        answer:
            'Use the difference between −GMm/r values at the two radii rather than mgh, since g is no longer ' +
            'constant. Over a few metres mgh is fine; over hundreds of kilometres it overestimates the energy by a ' +
            'large margin.',
    },
    {
        id: 'phys-torque-angled-force',
        subject: 'physics',
        question: 'How do I calculate torque when the force is at an angle?',
        aliases: ['torque with an angled force', 'moment arm with an angle', 'r f sin theta'],
        answer:
            'τ = rF sin θ, where θ is the angle between the force and the line from the pivot. Only the perpendicular ' +
            'component turns the object, so a force pointing along that line produces no torque at all.',
    },
    {
        id: 'phys-thermal-expansion-calculation',
        subject: 'physics',
        question: 'How do I calculate thermal expansion?',
        aliases: ['thermal expansion calculation', 'expansion of a steel bridge', 'change in length with temperature'],
        answer:
            'ΔL = αLΔT. For 100 m of steel with α = 12 × 10⁻⁶ per degree over a 30 °C rise, ΔL = 0.036 m, about 3.6 ' +
            'cm, which is why expansion joints exist.',
    },
    {
        id: 'phys-heat-transfer-rate',
        subject: 'physics',
        question: 'What determines how fast heat flows?',
        aliases: ['rate of heat transfer', 'what affects conduction rate', 'insulation thickness'],
        answer:
            'The temperature difference, the area, the thickness of the material and its conductivity. Doubling the ' +
            'thickness halves the rate, and the temperature difference falls as the objects approach each other, ' +
            'which is why cooling slows over time.',
    },
    {
        id: 'phys-path-difference',
        subject: 'physics',
        question: 'How do I use path difference in interference?',
        aliases: ['path difference', 'constructive interference condition', 'half wavelength path difference'],
        answer:
            'Constructive interference occurs where the path difference is a whole number of wavelengths, destructive ' +
            'where it is an odd number of half wavelengths. So a path difference of 1.5λ gives a minimum and 2λ a ' +
            'maximum.',
    },
    {
        id: 'phys-beats-frequency',
        subject: 'physics',
        question: 'How do I calculate a beat frequency?',
        aliases: ['beat frequency', 'calculating beats', 'two close frequencies'],
        answer:
            'Subtract the two frequencies: 440 Hz and 444 Hz give 4 beats a second. Piano tuners work by reducing ' +
            'that count to zero, which is a far more sensitive method than judging pitch directly.',
    },
    {
        id: 'phys-redshift',
        subject: 'physics',
        question: 'What is redshift, and how is it measured?',
        aliases: ['redshift', 'doppler shift of light', 'measuring galaxy recession'],
        answer:
            'A shift of spectral lines towards longer wavelengths because the source is receding. Because the pattern ' +
            'of lines is known, the shift can be measured precisely, and z = Δλ/λ gives the recession speed as a ' +
            'fraction of the speed of light.',
    },
    {
        id: 'phys-fibre-angle',
        subject: 'physics',
        question: 'Why does light stay inside an optical fibre?',
        aliases: ['light in an optical fibre', 'total internal reflection in a fibre', 'cladding refractive index'],
        answer:
            'Light enters within a narrow cone of angles so that it always strikes the core boundary beyond the ' +
            'critical angle. The cladding has a slightly lower refractive index, which sets that angle and keeps the ' +
            'light trapped over kilometres.',
    },
    {
        id: 'phys-two-loop-circuit',
        subject: 'physics',
        question: 'How do I analyse a circuit with two loops?',
        aliases: ['two loop circuit', 'kirchhoff laws applied', 'solving a circuit with simultaneous equations'],
        answer:
            'Apply the junction rule to write currents in terms of each other, then the loop rule around each loop to ' +
            'get two equations. Solve them simultaneously. A negative current simply means the direction guessed was ' +
            'the wrong way round.',
    },
    {
        id: 'phys-internal-resistance-calculation',
        subject: 'physics',
        question: 'How do I find the internal resistance of a cell?',
        aliases: ['internal resistance calculation', 'finding internal resistance', 'terminal voltage drop'],
        answer:
            'Compare the terminal voltage with the emf at a known current: r = (emf − V)/I. For 12.0 V falling to ' +
            '11.4 V at 2.0 A, r = 0.30 Ω. Plotting V against I gives the same answer as the negative gradient.',
    },
    {
        id: 'phys-magnetic-force-angled',
        subject: 'physics',
        question: 'How do I calculate the force on a wire at an angle to a field?',
        aliases: ['force on an angled wire', 'b i l sin theta', 'wire at an angle to the field'],
        answer:
            'F = BIL sin θ. For B = 0.20 T, I = 3.0 A, L = 0.50 m and θ = 30°, F = 0.20 × 3.0 × 0.50 × 0.50 = 0.15 N. ' +
            'At 90° it would be twice that, and parallel to the field it would be zero.',
    },
    {
        id: 'phys-transformer-efficiency-calculation',
        subject: 'physics',
        question: 'How do I calculate transformer efficiency?',
        aliases: ['transformer efficiency calculation', 'power out over power in', 'efficiency of a transformer example'],
        answer:
            'Divide the output power by the input power. A transformer drawing 1,200 W and delivering 1,150 W is ' +
            '95.8% efficient, with the missing 50 W appearing as heat in the windings and core.',
    },
    {
        id: 'phys-relativistic-momentum-calculation',
        subject: 'physics',
        question: 'How do I calculate relativistic momentum?',
        aliases: ['relativistic momentum calculation', 'gamma factor calculation', 'momentum near light speed'],
        answer:
            'p = mv ÷ √(1 − v²/c²). At 0.90c the factor is 1 ÷ √(1 − 0.81) = 2.29, so the momentum is 2.29 times the ' +
            'classical value. It is why accelerating a particle further gives diminishing gains in speed.',
    },
    {
        id: 'phys-de-broglie-macroscopic',
        subject: 'physics',
        question: 'Why do we not see the wave nature of everyday objects?',
        aliases: ['de broglie for large objects', 'why wave behaviour is not seen', 'wavelength of a cricket ball'],
        answer:
            'Because λ = h/mv, and for a one kilogram object at one metre per second that is about 7 × 10⁻³⁴ m, far ' +
            'smaller than any aperture or atom it could diffract from. The wave nature is there but unobservable.',
    },
    {
        id: 'phys-reading-graph-pair',
        subject: 'physics',
        question: 'How do I read displacement, velocity and acceleration graphs together?',
        aliases: ['reading motion graphs together', 'three graphs of motion', 'converting between motion graphs'],
        answer:
            'Each is the gradient of the one before it and the area of the one after. So a horizontal velocity line ' +
            'means a straight displacement line and zero acceleration, and a curved displacement graph means the ' +
            'velocity is changing.',
    },
    {
        id: 'phys-data-sheet',
        subject: 'physics',
        question: 'What is on the physics formulae and data sheet?',
        aliases: ['physics data sheet', 'physics formula sheet', 'constants given in the exam'],
        answer:
            'The standard formulas and the constants, so values such as g, c and Planck constant do not need ' +
            'memorising. What it does not give is which formula applies, so practise choosing from it rather than ' +
            'recalling from memory. Check the current version on the NESA site.',
    },
];
