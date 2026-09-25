/**
 * Physics: thermodynamics and energy transfer.
 *
 * Temperature, heat, changes of state, the three transfer mechanisms and what
 * limits the efficiency of any real device.
 */
import type { StudyEntry } from '../types';

export const physicsThermalEntries: StudyEntry[] = [
    {
        id: 'phys-thermal-equilibrium',
        subject: 'physics',
        question: 'What does thermal equilibrium mean?',
        aliases: ['thermal equilibrium', 'same temperature', 'net heat flow zero'],
        answer:
            'Two objects in contact at the same temperature, so there is no net transfer of energy between them. Heat ' +
            'still moves both ways; the flows simply balance, which is why equilibrium is not the absence of ' +
            'movement.',
    },
    {
        id: 'phys-temperature-vs-heat',
        subject: 'physics',
        question: 'What is the difference between temperature and heat?',
        aliases: ['temperature versus heat', 'heat is energy transfer', 'average kinetic energy'],
        answer:
            'Temperature measures the average kinetic energy of the particles; heat is the energy transferred because ' +
            'of a temperature difference. A bath at 40 degrees holds far more energy than a cup at 90, though the cup ' +
            'is hotter.',
    },
    {
        id: 'phys-latent-heat-calculation',
        subject: 'physics',
        question: 'How do I calculate the energy for a change of state?',
        aliases: ['latent heat calculation', 'energy to melt', 'q = ml'],
        answer:
            'Q = mL, with L the latent heat of fusion for melting or of vaporisation for boiling. No temperature ' +
            'change occurs during the transition, so q = mcΔT does not apply to that part of the process.',
    },
    {
        id: 'phys-specific-heat-comparison',
        subject: 'physics',
        question: 'Why does water heat up so slowly?',
        aliases: ['high specific heat of water', 'why water takes longer to heat', 'comparing specific heats'],
        answer:
            'Its specific heat capacity is unusually high, about 4180 J kg⁻¹ K⁻¹, so each degree needs a lot of ' +
            'energy. That is why water is used as a coolant and why coastal temperatures vary less than inland ones.',
    },
    {
        id: 'phys-thermal-expansion-uses',
        subject: 'physics',
        question: 'Where does thermal expansion matter in engineering?',
        aliases: ['bimetallic strip', 'why bridges have gaps'],
        answer:
            'Bridges and rails need expansion gaps, pipes need loops, and a bimetallic strip bends because two metals ' +
            'expand at different rates, which is how a simple thermostat switches.',
    },
    {
        id: 'phys-conduction-mechanism',
        subject: 'physics',
        question: 'Why do metals conduct heat so well?',
        aliases: ['why metals conduct heat', 'conduction mechanism', 'free electrons carrying energy'],
        answer:
            'Delocalised electrons travel quickly through the lattice, carrying kinetic energy with them, in addition ' +
            'to the vibration passed between neighbouring ions. Insulators have only the vibration, which is far ' +
            'slower.',
    },
    {
        id: 'phys-convection-current',
        subject: 'physics',
        question: 'How does a convection current form?',
        aliases: ['convection current', 'warm air rises', 'sea breeze'],
        answer:
            'Heating makes a fluid expand, so it becomes less dense and rises while cooler fluid sinks to replace it. ' +
            'The cycle moves energy in bulk, which is why a heater at floor level warms a room and one near the ' +
            'ceiling does not.',
    },
    {
        id: 'phys-radiation-emission',
        subject: 'physics',
        question: 'What affects how much heat an object radiates?',
        aliases: ['thermal radiation', 'emissivity', 'dark surfaces radiate more'],
        answer:
            'Its temperature, surface area and the nature of the surface. A dull dark surface is a better emitter and ' +
            'absorber than a shiny light one, which is why radiators are painted matt and survival blankets are ' +
            'reflective.',
    },
    {
        id: 'phys-energy-efficiency-calculation',
        subject: 'physics',
        question: 'How do I calculate efficiency?',
        aliases: ['efficiency calculation', 'useful output over input', 'percentage efficiency'],
        answer:
            'Divide the useful energy or power output by the total input and multiply by 100. The rest has not ' +
            'vanished: it has become heat and sound, which is why no real device reaches 100%.',
    },
    {
        id: 'phys-heat-engine-limits',
        subject: 'physics',
        question: 'Why can no engine be perfectly efficient?',
        aliases: ['why engines waste energy', 'heat engine limit', 'second law and efficiency'],
        answer:
            'An engine must dump some energy to a cooler reservoir to keep running, so some input energy always ' +
            'leaves as waste heat. Friction and exhaust temperature set the practical limit well below the ' +
            'theoretical one.',
    },
];
