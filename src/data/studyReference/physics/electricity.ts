/**
 * Physics Module 4: Electricity and Magnetism.
 *
 * Charge, current, circuits and the fields around them.
 */
import type { StudyEntry } from '../types';

export const physicsElectricityEntries: StudyEntry[] = [
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
        id: 'phys-current-charge',
        subject: 'physics',
        question: 'What is electric current?',
        aliases: ['electric current', 'charge flow', 'i = q/t', 'conventional current', 'ampere'],
        answer:
            'Current is the rate of flow of charge, I = q/t, measured in amperes. ' +
            'Conventional current is drawn from positive to negative, although the electrons actually drift the other ' +
            'way. One ampere is one coulomb per second.',
    },
    {
        id: 'phys-voltage-meaning',
        subject: 'physics',
        question: 'What is voltage, really?',
        aliases: ['voltage', 'potential difference', 'emf', 'volt meaning', 'energy per charge'],
        answer:
            'Voltage is energy per unit charge, V = W/q, measured in volts. ' +
            'Potential difference is the energy given up between two points; emf is the energy supplied per coulomb ' +
            'by a source. A 9 V battery gives each coulomb nine joules to spend around the circuit.',
    },
    {
        id: 'phys-resistance-factors',
        subject: 'physics',
        question: 'What affects the resistance of a wire?',
        aliases: ['resistance of a wire', 'resistivity', 'length and thickness', 'temperature resistance', 'ohmic'],
        answer:
            'R = ρL/A: resistance rises with length and falls with cross-sectional area, and ρ is the resistivity of ' +
            'the material. ' +
            'For most metals resistance also rises with temperature. An ohmic conductor keeps a constant resistance, ' +
            'so its voltage-current graph is a straight line.',
    },
    {
        id: 'phys-electric-field-lines',
        subject: 'physics',
        question: 'How do I read electric field lines?',
        aliases: ['field lines', 'electric field diagram', 'parallel plates field', 'uniform field', 'field direction'],
        answer:
            'Lines point the way a positive charge would be pushed, out of positive and into negative. ' +
            'Closer lines mean a stronger field. ' +
            'Between parallel plates the field is uniform, so the lines are evenly spaced and straight, and E = V/d.',
    },
    {
        id: 'phys-charged-particle-field',
        subject: 'physics',
        question: 'What happens to a charged particle in an electric field?',
        aliases: ['charge in an electric field', 'accelerating a charge', 'work done on a charge', 'electron volt'],
        answer:
            'The force is F = qE, constant in a uniform field, so the particle accelerates like a projectile. ' +
            'The work done accelerating it through a potential difference is W = qV, which becomes kinetic energy. ' +
            'One electronvolt is the energy an electron gains across one volt, 1.602 × 10⁻¹⁹ J.',
    },
    {
        id: 'phys-electrical-energy-cost',
        subject: 'physics',
        question: 'How do I calculate electrical energy and cost?',
        aliases: ['electrical energy', 'kilowatt hour', 'power rating', 'cost of electricity', 'energy used by an appliance'],
        answer:
            'Energy is power times time, E = Pt. ' +
            'Electricity bills use kilowatt hours: a 2 kW heater for 3 hours uses 6 kWh. ' +
            'Cost is that figure times the tariff, and in joules it is P in watts times t in seconds.',
    },
    {
        id: 'phys-circuit-safety',
        subject: 'physics',
        question: 'How do fuses, circuit breakers and earthing protect a circuit?',
        aliases: ['fuse', 'circuit breaker', 'earthing', 'short circuit', 'electrical safety'],
        answer:
            'A fuse is a thin wire that melts when the current is too high, breaking the circuit; a circuit breaker ' +
            'does the same job magnetically and can be reset. ' +
            'Earthing gives fault current a safe path to ground instead of through a person. ' +
            'A short circuit bypasses the load, so resistance collapses and current spikes.',
    },
    {
        id: 'phys-series-parallel-detail',
        subject: 'physics',
        question: 'How do series and parallel circuits differ?',
        aliases: ['series circuit', 'parallel circuit', 'adding resistors', 'current splits', 'voltage divides'],
        answer:
            'In series the current is the same everywhere, voltages add, and resistances add. ' +
            'In parallel the voltage is the same across each branch, currents add, and 1/R = 1/R₁ + 1/R₂, so the ' +
            'total resistance is less than the smallest branch. Household wiring is parallel so appliances work ' +
            'independently at full voltage.',
    },
    {
        id: 'phys-capacitors',
        subject: 'physics',
        question: 'What does a capacitor do?',
        aliases: ['capacitor', 'parallel plates', 'storing charge', 'capacitance', 'field between plates'],
        answer:
            'A capacitor stores charge on two plates separated by an insulator, and the field between them is ' +
            'uniform with E = V/d. ' +
            'It charges and discharges rather than passing steady current, which is why it blocks DC but responds to ' +
            'changing voltages.',
    },
    {
        id: 'phys-magnetic-field-shapes',
        subject: 'physics',
        question: 'What do magnetic fields look like around wires and magnets?',
        aliases: ['magnetic field shapes', 'field around a wire', 'bar magnet field', 'solenoid field', 'right hand grip'],
        answer:
            'Around a straight wire the field circles it, with the direction given by the right-hand grip rule, and ' +
            'B = μ₀I/2πr. ' +
            'Inside a solenoid it is uniform and along the axis, B = μ₀nI. ' +
            'Around a bar magnet it runs from north to south outside the magnet.',
    },
    {
        id: 'phys-parallel-wires',
        subject: 'physics',
        question: 'Why do parallel current-carrying wires attract or repel?',
        aliases: ['parallel wires force', 'force per unit length', 'two wires', 'ampere definition'],
        answer:
            'Each wire sits in the magnetic field of the other, so each feels a force. ' +
            'Currents in the same direction attract, opposite directions repel. ' +
            'The force per unit length is F/L = μ₀I₁I₂/2πr, which is the relationship that once defined the ampere.',
    },
    {
        id: 'phys-power-in-circuits',
        subject: 'physics',
        question: 'How do I calculate power in a circuit?',
        aliases: ['electrical power formulas', 'p = vi', 'p = i squared r', 'power dissipated'],
        answer:
            'P = VI, and substituting Ohm\u2019s law gives P = I²R and P = V²/R. ' +
            'Choose whichever uses the quantities you have. ' +
            'In series, the largest resistance dissipates the most power; in parallel it is the smallest, since it ' +
            'draws the most current.',
    },
    {
        id: 'phys-domestic-circuits',
        subject: 'physics',
        question: 'How is household wiring arranged?',
        aliases: ['household circuits', 'active neutral earth', 'why appliances are in parallel', 'power points'],
        answer:
            'Appliances are wired in parallel so each receives the full supply voltage and can be switched ' +
            'independently. ' +
            'The active wire carries current in, the neutral completes the circuit, and the earth provides a safe ' +
            'path if a fault makes a metal case live.',
    },
];
