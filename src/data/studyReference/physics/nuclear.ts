/**
 * Physics: quantum, nuclear and astrophysics.
 *
 * Quantisation, the standard model, nuclear stability and energy, and what the
 * light from stars reveals.
 */
import type { StudyEntry } from '../types';

export const physicsNuclearEntries: StudyEntry[] = [
    {
        id: 'phys-quantised-energy',
        subject: 'physics',
        question: 'What does it mean that energy is quantised?',
        aliases: ['quantised energy', 'discrete energy levels', 'why energy comes in packets'],
        answer:
            'A system can only hold certain energies, so transitions release or absorb fixed amounts rather than any ' +
            'value. That is why an atom emits particular wavelengths rather than a continuous band.',
    },
    {
        id: 'phys-photon-momentum',
        subject: 'physics',
        question: 'Does light carry momentum?',
        aliases: ['photon momentum', 'radiation pressure', 'solar sail'],
        answer:
            'Yes, p = h/λ even though a photon has no mass, which is why radiation exerts pressure and why a solar ' +
            'sail can be pushed by sunlight. It is also the basis of the Compton effect.',
    },
    {
        id: 'phys-wave-particle-evidence',
        subject: 'physics',
        question: 'What evidence supports wave-particle duality?',
        aliases: ['evidence for duality', 'electron diffraction evidence', 'photoelectric evidence'],
        answer:
            'Interference and diffraction show wave behaviour for light, while the photoelectric effect shows ' +
            'particle behaviour. For matter, electron diffraction shows waves where mass and charge show particles. ' +
            'The model used depends on the experiment.',
    },
    {
        id: 'phys-standard-model-forces',
        subject: 'physics',
        question: 'What are the four fundamental forces?',
        aliases: ['fundamental forces', 'strong nuclear force', 'weak force', 'force carriers'],
        answer:
            'Gravity, electromagnetism, the strong nuclear force binding quarks and nucleons, and the weak force ' +
            'responsible for beta decay. Each acts through exchange particles, and they differ enormously in strength ' +
            'and range.',
    },
    {
        id: 'phys-quarks-and-leptons',
        subject: 'physics',
        question: 'What are quarks and leptons?',
        aliases: ['quarks', 'leptons', 'what protons are made of'],
        answer:
            'Quarks combine in threes to make protons and neutrons and are never found alone. Leptons, including the ' +
            'electron and the neutrino, are fundamental and not built from anything smaller. Together with the force ' +
            'carriers they make up the standard model.',
    },
    {
        id: 'phys-antimatter',
        subject: 'physics',
        question: 'What is antimatter?',
        aliases: ['antimatter', 'positron', 'annihilation'],
        answer:
            'Every particle has an antiparticle with the same mass and opposite charge, such as the positron for the ' +
            'electron. When they meet they annihilate, converting their entire mass into energy according to E = mc², ' +
            'which is used in PET scanning.',
    },
    {
        id: 'phys-nuclear-stability',
        subject: 'physics',
        question: 'What makes a nucleus stable or unstable?',
        aliases: ['nuclear stability', 'neutron to proton ratio', 'why heavy nuclei decay'],
        answer:
            'The balance between the strong force holding nucleons together over a short range and the electrostatic ' +
            'repulsion between protons acting at all distances. Too many or too few neutrons for the proton count ' +
            'makes decay likely, and beyond bismuth no nucleus is stable.',
    },
    {
        id: 'phys-decay-series',
        subject: 'physics',
        question: 'What is a decay series?',
        aliases: ['decay series', 'decay chain', 'daughter nucleus'],
        answer:
            'A sequence of decays in which each unstable daughter decays again until a stable nucleus is reached. ' +
            'Uranium-238 passes through more than a dozen steps, including radon, before ending as lead-206.',
    },
    {
        id: 'phys-radiation-detection',
        subject: 'physics',
        question: 'How is radiation detected and measured?',
        aliases: ['detecting radiation', 'geiger counter', 'cloud chamber', 'dosimeter'],
        answer:
            'A Geiger counter counts ionising events, a cloud chamber shows tracks, and a film badge or dosimeter ' +
            'records accumulated dose. Counting is against a background rate, which must be measured and subtracted.',
    },
    {
        id: 'phys-radiation-penetration',
        subject: 'physics',
        question: 'How far does each type of radiation penetrate?',
        aliases: ['stopping alpha beta gamma', 'shielding radiation'],
        answer:
            'Alpha is stopped by paper or a few centimetres of air, beta by a few millimetres of aluminium, and gamma ' +
            'is only attenuated, needing lead or concrete. The most penetrating is not the most ionising, which is ' +
            'why alpha is dangerous once inside the body.',
    },
    {
        id: 'phys-fission-vs-fusion',
        subject: 'physics',
        question: 'Why does fission suit reactors and fusion suit stars?',
        aliases: ['fission versus fusion', 'why fusion is hard on earth', 'conditions for fusion'],
        answer:
            'Fission of heavy nuclei starts readily with a slow neutron, so it can be sustained and controlled. ' +
            'Fusion needs nuclei forced together against electrostatic repulsion, which takes the temperatures and ' +
            'pressures found in stellar cores.',
    },
    {
        id: 'phys-mass-defect-calculation',
        subject: 'physics',
        question: 'How do I calculate the energy released in a nuclear reaction?',
        aliases: ['mass defect calculation', 'energy from mass difference', 'converting mass to energy'],
        answer:
            'Find the total mass before and after, take the difference, then multiply by c². Work in kilograms for ' +
            'joules, or use atomic mass units and the conversion that one unit corresponds to about 931 MeV.',
    },
    {
        id: 'phys-chain-reaction-control',
        subject: 'physics',
        question: 'How is a chain reaction controlled?',
        aliases: ['chain reaction control', 'control rods'],
        answer:
            'Control rods absorb neutrons to hold the reaction at a steady rate, a moderator slows neutrons so they ' +
            'are more likely to cause further fission, and the mass and geometry must reach critical for the reaction ' +
            'to sustain at all.',
    },
    {
        id: 'phys-star-spectra-classification',
        subject: 'physics',
        question: 'What can a star spectrum tell us?',
        aliases: ['star spectrum', 'spectral class', 'composition of a star', 'surface temperature of a star'],
        answer:
            'Absorption lines identify the elements in its atmosphere, the peak wavelength gives the surface ' +
            'temperature through Wien law, line shifts give motion, and line broadening indicates pressure and ' +
            'rotation.',
    },
    {
        id: 'phys-cosmic-expansion',
        subject: 'physics',
        question: 'What is the evidence that the universe is expanding?',
        aliases: ['redshift of galaxies', 'hubble relationship'],
        answer:
            'Distant galaxies are redshifted, and the more distant they are the greater the shift, which fits space ' +
            'itself expanding rather than galaxies moving through it. The cosmic microwave background is the other ' +
            'principal piece of evidence.',
    },
    {
        id: 'phys-fundamental-and-overtones',
        subject: 'physics',
        question: 'What is the difference between the fundamental and an overtone?',
        aliases: ['fundamental and first overtone', 'overtone versus harmonic', 'second harmonic'],
        answer:
            'The fundamental is the lowest frequency a system will sustain, also called the first harmonic. The first ' +
            'overtone is the next frequency up, which is the second harmonic in a string or open pipe but the third ' +
            'harmonic in a closed pipe, since only odd harmonics exist there.',
    },
    {
        id: 'phys-threshold-wavelength',
        subject: 'physics',
        question: 'What is the threshold wavelength?',
        aliases: ['threshold wavelength', 'longest wavelength that causes emission', 'work function as a wavelength'],
        answer:
            'The longest wavelength whose photons still carry enough energy to free an electron, found from λ = hc ' +
            'divided by the work function. Longer wavelengths mean lower photon energy, so nothing is emitted however ' +
            'intense the light.',
    },
    {
        id: 'phys-hydrogen-ionisation',
        subject: 'physics',
        question: 'What is the ionisation energy of a hydrogen atom?',
        aliases: ['ionisation of a hydrogen atom', 'energy to remove the electron', 'series limit'],
        answer:
            'The energy needed to move the electron from the ground state to free, which is 13.6 eV for hydrogen. It ' +
            'corresponds to the series limit in the spectrum, where the lines crowd together and stop.',
    },
    {
        id: 'phys-neutrino',
        subject: 'physics',
        question: 'What is a neutrino?',
        aliases: ['neutrino', 'particle with almost no mass', 'why beta decay needs a neutrino'],
        answer:
            'A lepton with no charge and almost no mass that barely interacts with matter. Beta decay appeared to ' +
            'lose energy and momentum until it was proposed, and detecting one requires enormous detectors because ' +
            'most pass straight through the Earth.',
    },
];
