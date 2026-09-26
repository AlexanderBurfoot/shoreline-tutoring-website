/**
 * Physics Module 6: Electromagnetism.
 *
 * Magnetic fields, induction, motors, generators and transformers.
 */
import type { StudyEntry } from '../types';

export const physicsElectromagnetismEntries: StudyEntry[] = [
    {
        id: 'phys-magnetic-force',
        subject: 'physics',
        question: 'What is the force on a charge or wire in a magnetic field?',
        aliases: ['magnetic force', 'f = bil', 'motor effect', 'f = qvb'],
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
        id: 'phys-motors-generators',
        subject: 'physics',
        question: 'How does a motor differ from a generator?',
        aliases: ['dc motor', 'generator', 'ac generator'],
        answer:
            'A motor turns electrical energy into motion using the force on a current in a field, F = BIL. ' +
            'A generator does the reverse, inducing an emf by turning a coil in a field. ' +
            'A motor also generates a back emf as it spins, which is why the current drops once it is up to speed.',
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
        aliases: ['eddy currents', 'laminated core', 'induction braking', 'eddy current losses'],
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
        id: 'phys-magnetic-flux',
        subject: 'physics',
        question: 'What is magnetic flux?',
        aliases: ['magnetic flux', 'flux linkage', 'weber', 'phi = ba cos theta', 'flux through a coil'],
        answer:
            'Flux is Φ = BA cos θ, the field passing through an area, measured in webers. ' +
            'θ is the angle between the field and the normal to the surface, so flux is greatest when the field is ' +
            'perpendicular to the plane of the loop and zero when it lies in the plane.',
    },
    {
        id: 'phys-lenz-direction',
        subject: 'physics',
        question: 'How do I work out the direction of an induced current?',
        aliases: ['lenz law direction', 'induced current direction', 'opposing the change', 'magnet into a coil'],
        answer:
            'The induced current opposes the change that caused it. ' +
            'Push a north pole towards a coil and the near face becomes north to repel it; pull it away and that face ' +
            'becomes south to attract it back. ' +
            'The opposition is why work must be done, which is conservation of energy.',
    },
    {
        id: 'phys-motor-torque',
        subject: 'physics',
        question: 'What produces the torque in a motor?',
        aliases: ['motor torque', 'torque on a coil', 'nbia', 'why a motor spins', 'commutator function'],
        answer:
            'Opposite sides of the coil carry current in opposite directions, so the forces on them act in opposite ' +
            'directions and produce a turning effect: τ = nBIA cos θ. ' +
            'The split-ring commutator reverses the current every half turn so the torque keeps acting the same way.',
    },
    {
        id: 'phys-ac-dc',
        subject: 'physics',
        question: 'What is the difference between AC and DC?',
        aliases: ['ac vs dc', 'alternating current', 'direct current', 'slip rings vs commutator', 'why ac is used'],
        answer:
            'Direct current flows one way; alternating current reverses periodically. ' +
            'A generator with slip rings produces AC, and with a split-ring commutator produces DC. ' +
            'AC is used for distribution because transformers only work on a changing current.',
    },
    {
        id: 'phys-transformer-losses',
        subject: 'physics',
        question: 'Why is a real transformer not 100% efficient?',
        aliases: ['transformer efficiency', 'heat in a transformer', 'why a transformer wastes energy'],
        answer:
            'Resistance in the windings turns energy into heat, eddy currents circulate in the core, repeatedly ' +
            'remagnetising the core costs energy, and some flux misses the secondary coil. ' +
            'Laminating the core and using low-resistance windings reduce the first two.',
    },
    {
        id: 'phys-induction-motor',
        subject: 'physics',
        question: 'How does an induction motor work?',
        aliases: ['induction motor', 'rotor stator', 'squirrel cage', 'rotating magnetic field', 'slip'],
        answer:
            'The stator produces a rotating magnetic field. That changing flux induces currents in the rotor, and by ' +
            'Lenz\u2019s law those currents produce forces that drag the rotor after the field. ' +
            'The rotor must lag slightly, since equal speeds would mean no change of flux and so no current.',
    },
    {
        id: 'phys-generator-operation',
        subject: 'physics',
        question: 'How does a generator produce a voltage?',
        aliases: ['generator operation', 'rotating coil emf', 'peak emf', 'why output is sinusoidal'],
        answer:
            'Rotating a coil in a magnetic field changes the flux through it continuously, inducing an emf by ' +
            'Faraday\u2019s law. ' +
            'The emf is greatest when the coil moves through the position where flux changes fastest, and zero when ' +
            'flux is momentarily unchanging, which makes the output a sine wave.',
    },
    {
        id: 'phys-magnetic-materials',
        subject: 'physics',
        question: 'Why are some materials magnetic?',
        aliases: ['ferromagnetic', 'magnetic domains', 'permanent magnet', 'soft iron core', 'demagnetising'],
        answer:
            'In ferromagnetic materials such as iron, groups of atoms called domains align. ' +
            'In a permanent magnet they stay aligned; in soft iron they align while a field is applied and relax ' +
            'afterwards, which is why cores are made of it. ' +
            'Heating or hammering randomises the domains again.',
    },
    {
        id: 'phys-solenoid',
        subject: 'physics',
        question: 'What is the magnetic field of a solenoid?',
        aliases: ['solenoid', 'field inside a coil', 'iron core in a coil'],
        answer:
            'Inside a long solenoid the field is uniform and along the axis; outside it resembles a bar magnet. ' +
            'Strength rises with current and with turns per metre, and an iron core multiplies it, which is what makes ' +
            'an electromagnet useful.',
    },
    {
        id: 'phys-right-hand-rule',
        subject: 'physics',
        question: 'How do I use the right-hand rule?',
        aliases: ['right hand rule', 'right hand grip rule', 'field direction around a wire'],
        answer:
            'For a straight wire, point the right thumb along the conventional current and the curled fingers give the ' +
            'circular field direction. ' +
            'For a coil, curl the fingers with the current and the thumb points to the north end.',
    },
    {
        id: 'phys-galvanometer',
        subject: 'physics',
        question: 'How does a moving-coil meter work?',
        aliases: ['galvanometer', 'moving coil meter', 'why a needle deflects'],
        answer:
            'Current in a coil sitting in a magnetic field feels a turning force, so the coil rotates against a spring ' +
            'until the two balance. ' +
            'The deflection is then proportional to the current, and curved magnet faces keep the field radial so the ' +
            'scale stays even.',
    },
    {
        id: 'phys-loudspeaker',
        subject: 'physics',
        question: 'How does a loudspeaker work?',
        aliases: ['loudspeaker', 'speaker coil', 'turning current into sound'],
        answer:
            'A coil attached to a cone sits in the field of a permanent magnet. ' +
            'The alternating current in the coil makes it feel a force that reverses with the current, so the cone ' +
            'vibrates and pushes waves of pressure into the air at the frequency of the signal.',
    },
    {
        id: 'phys-transformer-calculation',
        subject: 'physics',
        question: 'How do I do a transformer calculation?',
        aliases: ['transformer ratio', 'step up step down calculation'],
        answer:
            'Vs/Vp = Ns/Np, so more turns on the secondary means a higher voltage. ' +
            'If the transformer is ideal the power is unchanged, so VpIp = VsIs and the current changes the opposite ' +
            'way: stepping voltage up steps current down.',
    },
    {
        id: 'phys-magnetic-braking',
        subject: 'physics',
        question: 'What is magnetic braking?',
        aliases: ['magnetic braking', 'induction brake', 'magnet falling slowly down a tube'],
        answer:
            'Motion through a field induces currents that, by the law of induction, oppose the motion that made them. ' +
            'A magnet dropped down a copper tube drifts rather than falls, and trains use the same effect to brake ' +
            'without any contact or wear.',
    },
    {
        id: 'phys-induced-emf-size',
        subject: 'physics',
        question: 'What determines the size of an induced emf?',
        aliases: ['rate of change of flux', 'size of an induced emf', 'faster movement more voltage'],
        answer:
            'The rate of change of flux and the number of turns: emf = −N ΔΦ/Δt. ' +
            'Moving faster, using a stronger field, a larger area or more turns all increase it. ' +
            'Holding the magnet still gives nothing, however strong it is.',
    },
    {
        id: 'phys-commutator',
        subject: 'physics',
        question: 'What does a commutator do?',
        aliases: ['commutator', 'split ring', 'brushes in a motor'],
        answer:
            'It reverses the current in the coil every half turn, so the force on each side keeps pushing the same way ' +
            'round instead of reversing as the coil passes the vertical. ' +
            'Without it, the coil would swing to the vertical and stop.',
    },
    {
        id: 'phys-magnetic-flux-density',
        subject: 'physics',
        question: 'What does magnetic flux density mean?',
        aliases: ['magnetic flux density', 'tesla', 'field strength b'],
        answer:
            'The strength of a magnetic field, B, measured in tesla, where one tesla gives one newton per amp per ' +
            'metre on a current-carrying wire. Flux is B times the area it passes through, so flux density is flux ' +
            'per unit area.',
    },
    {
        id: 'phys-motor-effect-factors',
        subject: 'physics',
        question: 'What affects the force on a current-carrying wire?',
        aliases: ['force on a wire', 'f = bil sin theta', 'motor effect factors'],
        answer:
            'F = BIL sin θ, so the force rises with field strength, current and length in the field, and is greatest ' +
            'when the wire is perpendicular to the field. A wire parallel to the field feels no force at all.',
    },
    {
        id: 'phys-charged-particle-in-field',
        subject: 'physics',
        question: 'What path does a charged particle take in a magnetic field?',
        aliases: ['charged particle in a magnetic field', 'circular path radius'],
        answer:
            'A circle, because the force F = qvB sin θ is always perpendicular to the velocity. Equating it to mv²/r ' +
            'gives r = mv/qB, so heavier or faster particles curve less and stronger fields curve them more.',
    },
    {
        id: 'phys-mass-spectrometer-physics',
        subject: 'physics',
        question: 'How does a velocity selector work?',
        aliases: ['velocity selector', 'crossed fields', 'balancing electric and magnetic force'],
        answer:
            'Electric and magnetic fields are arranged so their forces on a moving charge oppose. Only particles with ' +
            'v = E/B pass straight through, whatever their charge or mass, which is how a beam is made monoenergetic ' +
            'before analysis.',
    },
    {
        id: 'phys-relay',
        subject: 'physics',
        question: 'How does a relay work?',
        aliases: ['relay', 'electromagnet switch', 'controlling a large current with a small one'],
        answer:
            'A small current through a coil magnetises a core, which pulls an armature across and closes a separate ' +
            'circuit. It lets a low-power control circuit switch a high-power one, and it isolates the two ' +
            'electrically.',
    },
    {
        id: 'phys-ac-rms',
        subject: 'physics',
        question: 'What do RMS voltage and current mean?',
        aliases: ['rms voltage', 'root mean square', 'peak versus rms'],
        answer:
            'The steady values that would deliver the same power as the alternating ones. For a sinusoid the RMS ' +
            'value is the peak divided by √2, so mains quoted at 240 V has a peak of about 340 V.',
    },
    {
        id: 'phys-generator-output-shape',
        subject: 'physics',
        question: 'Why is generator output sinusoidal?',
        aliases: ['why generator output is sinusoidal', 'flux change with angle', 'emf varies with rotation'],
        answer:
            'Because the rate of change of flux through the coil varies with its angle. Flux is greatest when the ' +
            'coil faces the field but changing fastest when the coil is edge-on, which is where the induced emf ' +
            'peaks.',
    },
    {
        id: 'phys-slip-rings-vs-commutator',
        subject: 'physics',
        question: 'What is the difference between slip rings and a commutator?',
        aliases: ['slip rings', 'commutator versus slip rings', 'ac or dc output'],
        answer:
            'Slip rings keep each end of the coil connected to the same terminal, so the output alternates. A split ' +
            'ring commutator swaps the connections every half turn, so the output stays one way, giving direct ' +
            'current.',
    },
    {
        id: 'phys-motor-torque-factors',
        subject: 'physics',
        question: 'What affects the torque of a motor?',
        aliases: ['motor torque factors', 'number of turns and torque', 'why motors use many turns'],
        answer:
            'The field strength, the current, the area of the coil, the number of turns and the angle. Torque is ' +
            'greatest when the coil is parallel to the field and zero when it is perpendicular, which is why a ' +
            'multi-coil armature runs more smoothly.',
    },
    {
        id: 'phys-induction-cooktop',
        subject: 'physics',
        question: 'How does an induction cooktop work?',
        aliases: ['induction cooktop', 'eddy currents for heating', 'induction heating'],
        answer:
            'An alternating current in a coil beneath the surface induces eddy currents in the base of the pan, and ' +
            'the resistance of the metal turns those currents into heat. The cooktop itself stays comparatively cool, ' +
            'and a non-magnetic pan will not work.',
    },
    {
        id: 'phys-three-phase-supply',
        subject: 'physics',
        question: 'Why is mains power distributed as three phases?',
        aliases: ['three phase power', 'phases in distribution', 'why industry uses three phase'],
        answer:
            'Three supplies a third of a cycle apart deliver power continuously rather than in pulses, which lets ' +
            'motors run smoothly and lets the same conductors carry more power. A house takes one phase; heavy ' +
            'machinery takes all three.',
    },
    {
        id: 'phys-earth-magnetic-field',
        subject: 'physics',
        question: 'Why does a compass point north?',
        aliases: ['earth magnetic field', 'compass needle', 'magnetic declination'],
        answer:
            'Earth behaves like a large magnet, so a freely suspended needle aligns with its field. The magnetic ' +
            'poles are not at the geographic poles, so a compass reading differs from true north by the local ' +
            'declination.',
    },
];
