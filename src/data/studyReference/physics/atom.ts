/**
 * Physics Module 8: From the Universe to the Atom.
 *
 * Stars and their spectra, the structure of the atom, and the nucleus.
 */
import type { StudyEntry } from '../types';

export const physicsAtomEntries: StudyEntry[] = [
    {
        id: 'phys-de-broglie',
        subject: 'physics',
        question: 'What is the de Broglie wavelength?',
        aliases: ['de broglie', 'matter waves', 'wave particle duality', 'electron wavelength', 'lambda = h over mv'],
        answer:
            'λ = h/mv: any particle with momentum has a wavelength. ' +
            'It is far too small to notice for everyday objects, but for electrons it is about the spacing of atoms in ' +
            'a crystal, which is why electron diffraction works and confirms wave-particle duality.',
    },
    {
        id: 'phys-half-life',
        subject: 'physics',
        question: 'What is half-life?',
        aliases: ['half life', 'radioactivity', 'what is half life', 'decay of a sample'],
        answer:
            'Half-life is the time for half the radioactive nuclei in a sample to decay. ' +
            'After n half-lives the amount left is the original divided by 2ⁿ. ' +
            'Alpha decay loses a helium nucleus, beta decay converts a neutron to a proton and emits an electron, ' +
            'and gamma decay emits energy without changing the nucleus.',
    },
    {
        id: 'phys-spectra',
        subject: 'physics',
        question: 'What do emission and absorption spectra show?',
        aliases: ['emission spectrum', 'absorption spectrum', 'spectral lines', 'bohr model', 'energy levels'],
        answer:
            'Electrons occupy fixed energy levels. Falling between levels emits a photon of exactly that energy ' +
            'difference, giving bright lines; absorbing one lifts an electron and leaves dark lines. ' +
            'The pattern identifies the element, which is how stars are analysed from their light.',
    },
    {
        id: 'phys-nuclear-energy',
        subject: 'physics',
        question: 'What are fission, fusion and mass defect?',
        aliases: ['nuclear fission', 'fusion', 'mass defect', 'binding energy', 'chain reaction'],
        answer:
            'Fission splits a heavy nucleus, fusion joins light ones, and both release energy because the products ' +
            'have less mass than the reactants. That missing mass becomes energy through E = mc², and the binding ' +
            'energy per nucleon peaks around iron.',
    },
    {
        id: 'phys-standard-model',
        subject: 'physics',
        question: 'What is the standard model of matter?',
        aliases: ['standard model', 'quarks', 'leptons', 'fundamental forces', 'particle physics'],
        answer:
            'Matter is built from quarks, which make protons and neutrons, and leptons, which include the electron. ' +
            'Forces are carried by bosons: the photon for electromagnetism, gluons for the strong force, W and Z for ' +
            'the weak force. Gravity is not part of the model.',
    },
    {
        id: 'phys-bohr-model',
        subject: 'physics',
        question: 'What is the Bohr model and its limitations?',
        aliases: ['bohr model', 'hydrogen spectrum', 'energy levels hydrogen', 'limitations of bohr'],
        answer:
            'Bohr proposed electrons occupy fixed orbits with quantised angular momentum, emitting a photon when they ' +
            'drop between them, which explains hydrogen\u2019s spectral lines. ' +
            'It fails for atoms with more than one electron and does not explain line intensities or splitting.',
    },
    {
        id: 'phys-rydberg-balmer',
        subject: 'physics',
        question: 'What is the Balmer series and the Rydberg equation?',
        aliases: ['balmer series', 'rydberg equation', 'hydrogen spectral lines', 'lyman series', 'spectral series'],
        answer:
            '1/λ = R(1/n_f² − 1/n_i²), with R = 1.097 × 10⁷ m⁻¹. ' +
            'The Balmer series has n_f = 2 and falls in the visible; Lyman has n_f = 1 in the ultraviolet. ' +
            'Each line is one electron transition between fixed energy levels.',
    },
    {
        id: 'phys-rutherford',
        subject: 'physics',
        question: 'What did the Rutherford gold-foil experiment show?',
        aliases: ['rutherford experiment', 'gold foil', 'alpha scattering', 'plum pudding model', 'discovery of the nucleus'],
        answer:
            'Most alpha particles passed straight through the foil, but a few rebounded at large angles. ' +
            'That ruled out the plum-pudding model and implied a tiny, dense, positive nucleus holding nearly all the ' +
            'mass, with the atom mostly empty space.',
    },
    {
        id: 'phys-cathode-rays',
        subject: 'physics',
        question: 'What did cathode ray experiments establish?',
        aliases: ['cathode rays', 'discharge tube', 'thomson charge to mass', 'millikan oil drop', 'electron discovery'],
        answer:
            'Cathode rays deflect towards a positive plate, showing they are negative particles. ' +
            'Thomson balanced electric and magnetic deflection to find the charge-to-mass ratio; Millikan balanced ' +
            'electric force against weight on oil drops to find the charge itself. Together they give the electron mass.',
    },
    {
        id: 'phys-hr-diagram',
        subject: 'physics',
        question: 'What does the Hertzsprung-Russell diagram show?',
        aliases: ['hr diagram', 'hertzsprung russell', 'main sequence', 'stellar classification', 'luminosity', 'white dwarf'],
        answer:
            'Luminosity against surface temperature, with temperature decreasing to the right. ' +
            'Most stars lie on the main sequence, with giants above and white dwarfs below. ' +
            'A star\u2019s position depends on its mass, and it moves off the main sequence as its hydrogen runs out.',
    },
    {
        id: 'phys-nucleosynthesis',
        subject: 'physics',
        question: 'How are elements made in stars?',
        aliases: ['nucleosynthesis', 'proton proton chain', 'cno cycle', 'stellar fusion', 'elements heavier than iron'],
        answer:
            'Main-sequence stars fuse hydrogen to helium through the proton-proton chain, or the CNO cycle in heavier ' +
            'stars. Successive fusion builds elements up to iron, where binding energy per nucleon peaks. ' +
            'Anything heavier forms in supernovae.',
    },
    {
        id: 'phys-electron-diffraction',
        subject: 'physics',
        question: 'What did the Davisson-Germer experiment show?',
        aliases: ['davisson germer', 'electron diffraction', 'matter waves evidence', 'de broglie standing wave', 'bohr orbit wavelength'],
        answer:
            'Electrons scattered from a crystal produced a diffraction pattern, which only waves do, confirming de ' +
            'Broglie\u2019s matter waves. ' +
            'It also explains Bohr\u2019s allowed orbits: a stable orbit fits a whole number of wavelengths, nλ = 2πr.',
    },
    {
        id: 'phys-atomic-models',
        subject: 'physics',
        question: 'How did models of the atom develop?',
        aliases: ['atomic models', 'plum pudding', 'thomson model', 'rutherford model', 'chadwick neutron'],
        answer:
            'Thomson\u2019s plum pudding had electrons in a positive sphere. ' +
            'Rutherford\u2019s scattering showed a tiny dense nucleus instead. ' +
            'Bohr added quantised orbits to explain spectral lines. ' +
            'Chadwick identified the neutron, which explained isotopes and the mass that protons alone could not.',
    },
    {
        id: 'phys-quantum-model',
        subject: 'physics',
        question: 'What replaced the Bohr model?',
        aliases: ['schrodinger', 'quantum model of the atom', 'orbitals', 'probability cloud', 'limitations of bohr model'],
        answer:
            'The quantum mechanical model, in which an electron is described by a wave function and we speak of the ' +
            'probability of finding it in a region, not an orbit. ' +
            'It explains atoms with many electrons, the relative brightness of spectral lines and the splitting of ' +
            'lines, all of which defeated Bohr.',
    },
    {
        id: 'phys-radioactive-decay-types',
        subject: 'physics',
        question: 'What are alpha, beta and gamma decay?',
        aliases: ['alpha decay', 'beta decay', 'gamma decay', 'decay equation', 'penetrating power'],
        answer:
            'Alpha emits a helium nucleus, so the mass number falls by 4 and the atomic number by 2. ' +
            'Beta-minus converts a neutron to a proton and emits an electron, raising the atomic number by 1. ' +
            'Gamma emits energy only. Penetration rises from alpha, stopped by paper, to gamma, needing lead.',
    },
    {
        id: 'phys-half-life-calcs',
        subject: 'physics',
        question: 'How do I do a half-life calculation?',
        aliases: ['half life calculation', 'how much is left', 'decay curve', 'number of half lives', 'activity'],
        answer:
            'After n half-lives the remaining amount is the original divided by 2ⁿ, where n is the elapsed time ' +
            'divided by the half-life. ' +
            'Activity falls in the same proportion, since it is proportional to the number of undecayed nuclei. ' +
            'A decay curve never reaches zero, which is why half-life is used rather than a lifetime.',
    },
    {
        id: 'phys-binding-energy-curve',
        subject: 'physics',
        question: 'What does the binding energy curve show?',
        aliases: ['binding energy per nucleon', 'mass defect calculation', 'iron peak', 'why fusion releases energy'],
        answer:
            'Binding energy per nucleon rises to a peak near iron and falls away on both sides. ' +
            'Fusing light nuclei or splitting heavy ones both move products towards that peak, releasing energy. ' +
            'The energy comes from the mass defect, converted through E = mc².',
    },
    {
        id: 'phys-fission-reactors',
        subject: 'physics',
        question: 'How does a fission reactor work?',
        aliases: ['nuclear reactor', 'chain reaction', 'moderator', 'control rods', 'critical mass'],
        answer:
            'A neutron splits a heavy nucleus, releasing energy and more neutrons, which can sustain a chain ' +
            'reaction. ' +
            'A moderator slows the neutrons so they are more likely to cause fission, and control rods absorb the ' +
            'surplus to keep the rate steady.',
    },
    {
        id: 'phys-stellar-life-cycle',
        subject: 'physics',
        question: 'What is the life cycle of a star?',
        aliases: ['life cycle of a star', 'main sequence', 'red giant', 'supernova', 'neutron star', 'black hole'],
        answer:
            'A star forms from collapsing gas and joins the main sequence while it fuses hydrogen. ' +
            'When that runs out it swells into a giant. ' +
            'A low-mass star sheds its layers and leaves a white dwarf; a high-mass star explodes as a supernova, ' +
            'leaving a neutron star or a black hole.',
    },
    {
        id: 'phys-particle-accelerators',
        subject: 'physics',
        question: 'Why are particle accelerators used?',
        aliases: ['particle accelerator', 'cyclotron', 'synchrotron', 'high energy collisions', 'creating particles'],
        answer:
            'They accelerate charged particles with electric fields and steer them with magnetic ones, then collide ' +
            'them. ' +
            'The kinetic energy converts into mass through E = mc², creating particles that are not otherwise ' +
            'available, which is how the standard model was tested.',
    },
    {
        id: 'phys-big-bang-evidence',
        subject: 'physics',
        question: 'What is the evidence for the Big Bang?',
        aliases: ['big bang evidence', 'cosmic microwave background', 'hubble red shift', 'expanding universe', 'abundance of helium'],
        answer:
            'Distant galaxies are red-shifted, and the further away they are the faster they recede, which means the ' +
            'universe is expanding. ' +
            'The cosmic microwave background is the cooled radiation left from the hot early universe. ' +
            'The observed proportion of hydrogen to helium also matches the prediction.',
    },
    {
        id: 'phys-radiation-safety',
        subject: 'physics',
        question: 'How is radiation used and controlled safely?',
        aliases: ['radiation uses', 'medical imaging', 'radiotherapy', 'shielding', 'dose'],
        answer:
            'Tracers and imaging use short-lived isotopes so the dose fades quickly; radiotherapy targets tumours ' +
            'with a focused high dose. ' +
            'Safety rests on time, distance and shielding: less exposure, further away, and behind lead or concrete ' +
            'for gamma.',
    },
    {
        id: 'phys-nuclear-equations',
        subject: 'physics',
        question: 'How do I balance a nuclear equation?',
        aliases: ['nuclear equation', 'balancing decay equations', 'mass number atomic number', 'transmutation'],
        answer:
            'Mass numbers must balance on both sides, and so must atomic numbers. ' +
            'An alpha particle is ⁴₂He, a beta-minus particle is ⁰₋₁e, and gamma changes neither. ' +
            'Work out the missing particle by subtracting, then name the element from its atomic number.',
    },
];
