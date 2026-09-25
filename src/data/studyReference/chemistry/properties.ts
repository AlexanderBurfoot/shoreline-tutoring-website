/**
 * Chemistry Module 1 and 2: matter, the atom, bonding and structure.
 */
import type { StudyEntry } from '../types';

export const chemistryPropertiesEntries: StudyEntry[] = [
    {
        id: 'chem-atomic-structure',
        subject: 'chemistry',
        question: 'What is the structure of an atom?',
        aliases: ['atomic structure', 'subatomic particles', 'valence electrons'],
        answer:
            'Protons and neutrons sit in the nucleus; electrons occupy shells and subshells around it. ' +
            'The atomic number is the proton count and defines the element; isotopes differ in neutrons. ' +
            'Electron configuration fills 1s, 2s, 2p and so on, and the outer shell decides the chemistry.',
    },
    {
        id: 'chem-electron-configuration',
        subject: 'chemistry',
        question: 'How do I write an electron configuration?',
        aliases: ['electron configuration', 'subshells', 'orbital filling', 'valence shell', 'aufbau'],
        answer:
            'Fill subshells in order of energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. ' +
            'Each s holds 2 electrons, p holds 6 and d holds 10. ' +
            'The outer shell decides the chemistry, and a large jump in successive ionisation energies marks the ' +
            'point where a full shell is broken into.',
    },
    {
        id: 'chem-isotopes',
        subject: 'chemistry',
        question: 'What is an isotope?',
        aliases: ['isotope', 'same element different mass', 'different neutron number'],
        answer:
            'Atoms of the same element with different numbers of neutrons, so the same atomic number but different mass ' +
            'numbers. ' +
            'Chemical behaviour is essentially identical, since that depends on electrons, but mass-dependent ' +
            'properties such as diffusion rate differ slightly.',
    },
    {
        id: 'chem-isotopes-ram',
        subject: 'chemistry',
        question: 'How do I calculate relative atomic mass from isotopic abundances?',
        aliases: ['relative atomic mass', 'weighted average mass', 'mass spectrum abundance'],
        answer:
            'Relative atomic mass is the weighted mean of the isotope masses: multiply each isotopic mass by its ' +
            'fractional abundance and add. ' +
            'A mass spectrum gives both, with peak height showing abundance and position showing mass.',
    },
    {
        id: 'chem-ionisation-energy',
        subject: 'chemistry',
        question: 'What do successive ionisation energies tell me?',
        aliases: ['successive ionisation energy', 'ionisation energy jump', 'evidence for shells', 'valence electrons number'],
        answer:
            'Each electron removed costs more, since the remaining ones are held by the same nucleus. ' +
            'A sudden large jump marks the point where an inner shell is broken into. ' +
            'Counting the electrons removed before that jump gives the number of valence electrons, and so the group.',
    },
    {
        id: 'chem-shielding',
        subject: 'chemistry',
        question: 'What are shielding and effective nuclear charge?',
        aliases: ['shielding', 'effective nuclear charge', 'why outer electrons feel less pull'],
        answer:
            'Inner electrons repel the outer ones and so screen them from the nucleus. ' +
            'The pull an outer electron actually feels is the effective nuclear charge, roughly the nuclear charge minus ' +
            'the shielding. ' +
            'It explains why atoms grow larger down a group.',
    },
    {
        id: 'chem-periodic-trends',
        subject: 'chemistry',
        question: 'What are the periodic trends?',
        aliases: ['periodic table trends', 'atomic radius', 'ionisation energy', 'groups periods'],
        answer:
            'Across a period, atomic radius falls while electronegativity and ionisation energy rise, because the ' +
            'nuclear charge grows with no new shell. Down a group the reverse happens, as each shell added sits ' +
            'further out and shields the nucleus.',
    },
    {
        id: 'chem-electronegativity',
        subject: 'chemistry',
        question: 'What is electronegativity?',
        aliases: ['electronegativity', 'polar bond', 'difference in electronegativity'],
        answer:
            'How strongly an atom attracts the shared electrons in a bond. ' +
            'It rises across a period and falls down a group, with fluorine highest. ' +
            'A small difference gives a non-polar covalent bond, a moderate one a polar bond, and a large one ionic ' +
            'bonding.',
    },
    {
        id: 'chem-states-of-matter',
        subject: 'chemistry',
        question: 'How do the states of matter differ?',
        aliases: ['states of matter', 'solid liquid gas', 'particle model', 'melting boiling', 'sublimation'],
        answer:
            'In a solid, particles vibrate in fixed positions; in a liquid they are close but mobile; in a gas they ' +
            'are far apart and fast. ' +
            'Changing state changes the arrangement, not the particles themselves, and takes energy without changing ' +
            'temperature. Sublimation goes straight from solid to gas.',
    },
    {
        id: 'chem-physical-chemical-change',
        subject: 'chemistry',
        question: 'What is the difference between a physical and a chemical change?',
        aliases: ['physical change', 'chemical change', 'signs of a chemical reaction', 'reversible change'],
        answer:
            'A physical change alters form but not identity, and is usually reversible, such as melting. ' +
            'A chemical change makes new substances, shown by a colour change, gas produced, a precipitate, a ' +
            'temperature change or light.',
    },
    {
        id: 'chem-elements-compounds',
        subject: 'chemistry',
        question: 'What is the difference between elements, compounds and mixtures?',
        aliases: ['element compound mixture', 'homogeneous', 'heterogeneous', 'alloy mixture'],
        answer:
            'An element has one kind of atom, a compound has different elements chemically bonded in fixed ' +
            'proportions, and a mixture has substances physically combined in any proportion. ' +
            'Only a mixture can be separated physically. Homogeneous mixtures look uniform; heterogeneous ones do ' +
            'not.',
    },
    {
        id: 'chem-mixtures-separation',
        subject: 'chemistry',
        question: 'How are mixtures separated?',
        aliases: ['separating mixtures', 'filtration', 'distillation', 'chromatography separation', 'pure substance'],
        answer:
            'Choose the technique by the difference you can exploit: filtration for particle size, evaporation and ' +
            'crystallisation for solubility, distillation for boiling point, chromatography for how strongly parts ' +
            'are carried, and a magnet or density for physical properties.',
    },
    {
        id: 'chem-ions-formation',
        subject: 'chemistry',
        question: 'How do atoms form ions?',
        aliases: ['ions', 'cation', 'anion', 'forming an ion', 'charge on an ion', 'valency'],
        answer:
            'Atoms gain or lose electrons to reach a full outer shell. ' +
            'Metals lose them and become positive cations; non-metals gain them and become negative anions. ' +
            'The group number predicts the charge: group 1 forms 1+, group 2 forms 2+, group 17 forms 1−.',
    },
    {
        id: 'chem-naming-compounds',
        subject: 'chemistry',
        question: 'How do I name and write formulas for ionic compounds?',
        aliases: ['naming ionic compounds', 'chemical formula', 'polyatomic ions', 'writing formulas', 'roman numerals'],
        answer:
            'Name the metal first, then the non-metal with an -ide ending, or the polyatomic ion by its own name. ' +
            'Balance the charges so the compound is neutral, using subscripts, and put brackets around a polyatomic ' +
            'ion you need more than one of. Roman numerals show the charge on a transition metal.',
    },
    {
        id: 'chem-nomenclature-acids',
        subject: 'chemistry',
        question: 'How are acids and their salts named?',
        aliases: ['naming acids', 'ate ite ide endings', 'sulfate sulfite', 'nitrate nitrite'],
        answer:
            'An acid ending in -ic gives a salt ending in -ate; one ending in -ous gives -ite. ' +
            'Sulfuric acid gives sulfates, sulfurous gives sulfites, nitric gives nitrates. ' +
            'A binary acid such as hydrochloric gives a chloride.',
    },
    {
        id: 'chem-diatomic-elements',
        subject: 'chemistry',
        question: 'Which elements exist as diatomic molecules?',
        aliases: ['diatomic', 'h2 o2 n2', 'elements in pairs', 'writing element formulas'],
        answer:
            'Hydrogen, nitrogen, oxygen, fluorine, chlorine, bromine and iodine exist as pairs in their natural ' +
            'state. ' +
            'Writing O instead of O₂ in an equation is a common and costly slip, since it changes the balancing.',
    },
    {
        id: 'chem-bonding',
        subject: 'chemistry',
        question: 'What is the difference between ionic, covalent and metallic bonding?',
        aliases: ['ionic bonding', 'covalent bonding', 'metallic bonding', 'types of bonds'],
        answer:
            'Ionic bonding transfers electrons between a metal and a non-metal, giving a lattice of ions. ' +
            'Covalent bonding shares electrons between non-metals. Metallic bonding is positive ions in a sea of ' +
            'delocalised electrons, which is why metals conduct and are malleable.',
    },
    {
        id: 'chem-intermolecular-forces',
        subject: 'chemistry',
        question: 'What are the intermolecular forces?',
        aliases: ['intermolecular forces', 'hydrogen bonding', 'dispersion forces', 'dipole dipole', 'boiling point'],
        answer:
            'From weakest to strongest: dispersion forces, dipole-dipole forces, then hydrogen bonding, which needs ' +
            'H bonded to N, O or F. Stronger forces mean higher melting and boiling points, since more energy is ' +
            'needed to pull molecules apart.',
    },
    {
        id: 'chem-electron-dot',
        subject: 'chemistry',
        question: 'How do I draw an electron dot diagram?',
        aliases: ['electron dot', 'lewis structure', 'octet rule', 'bonding pairs', 'lone pairs'],
        answer:
            'Count the valence electrons of every atom, place a bonding pair between bonded atoms, then add lone ' +
            'pairs until each atom has eight, or two for hydrogen. ' +
            'If there are not enough, form a double or triple bond. The diagram is the step before predicting shape.',
    },
    {
        id: 'chem-vsepr',
        subject: 'chemistry',
        question: 'How do I predict the shape of a molecule?',
        aliases: ['vsepr', 'molecular shape', 'bond angle', 'tetrahedral', 'lone pair'],
        answer:
            'Electron pairs around the central atom repel and spread as far apart as possible: two give linear, three ' +
            'trigonal planar, four tetrahedral at about 109.5°. Lone pairs repel more, so they squeeze the angle. ' +
            'A molecule is polar unless its bond dipoles cancel by symmetry.',
    },
    {
        id: 'chem-molecular-polarity',
        subject: 'chemistry',
        question: 'How do I decide whether a molecule is polar?',
        aliases: ['net dipole', 'symmetrical molecule non polar', 'polar molecule'],
        answer:
            'Check each bond for a difference in electronegativity, then check the shape. ' +
            'If the bond dipoles cancel by symmetry the molecule is non-polar, which is why CO₂ is non-polar despite ' +
            'polar bonds, while the bent shape of water leaves a net dipole.',
    },
    {
        id: 'chem-network-molecular',
        subject: 'chemistry',
        question: 'What is the difference between a covalent network and a covalent molecular solid?',
        aliases: ['covalent network', 'covalent molecular', 'diamond graphite', 'allotropes', 'lattice types'],
        answer:
            'A network is covalently bonded all the way through, so melting means breaking covalent bonds: very high ' +
            'melting point and hardness, as in diamond. ' +
            'A molecular solid has strong bonds inside each molecule but weak forces between them, so it melts ' +
            'easily. Graphite is a network with layers that slide, which is why it is soft and conducts.',
    },
    {
        id: 'chem-conductivity',
        subject: 'chemistry',
        question: 'What does electrical conductivity tell me about a substance?',
        aliases: ['conductivity', 'conducts electricity', 'molten ionic', 'electrolyte strength', 'weak electrolyte'],
        answer:
            'Metals conduct in every state, through delocalised electrons. ' +
            'Ionic solids do not conduct, but molten or dissolved they do, because the ions can move. ' +
            'Molecular substances generally do not. ' +
            'A weak acid conducts poorly compared with a strong acid at the same concentration, since fewer ions form.',
    },
    {
        id: 'chem-metallic-properties',
        subject: 'chemistry',
        question: 'Why are metals malleable and conductive?',
        aliases: ['malleable', 'delocalised electrons', 'why metals conduct', 'sea of electrons'],
        answer:
            'Positive ions sit in a lattice surrounded by delocalised electrons. ' +
            'Those electrons carry charge and heat, and because the bonding is not directional, layers of ions can slide ' +
            'past one another without breaking it, so the metal bends rather than shatters.',
    },
    {
        id: 'chem-allotropes-carbon',
        subject: 'chemistry',
        question: 'What are the allotropes of carbon?',
        aliases: ['allotrope', 'diamond and graphite', 'graphene', 'same element different structure'],
        answer:
            'Diamond bonds each carbon to four others in a rigid three-dimensional network, so it is extremely hard and ' +
            'does not conduct. ' +
            'Graphite bonds to three, leaving a delocalised electron per atom and sheets that slide, so it conducts and ' +
            'lubricates. ' +
            'Graphene is a single such sheet.',
    },
    {
        id: 'chem-water-anomalies',
        subject: 'chemistry',
        question: 'Why is water such an unusual substance?',
        aliases: ['properties of water', 'why ice floats', 'high boiling point of water'],
        answer:
            'Hydrogen bonding. ' +
            'It raises the boiling point far above that of similar-sized molecules, gives water a high specific heat ' +
            'that moderates climate, and holds molecules in an open lattice when it freezes, so ice is less dense than ' +
            'the liquid and floats.',
    },
    {
        id: 'chem-transition-metals',
        subject: 'chemistry',
        question: 'What is distinctive about transition metals?',
        aliases: ['transition metals', 'variable oxidation states', 'coloured compounds', 'catalytic metals'],
        answer:
            'They show variable oxidation states, form coloured compounds and ions, and act as catalysts. ' +
            'All three follow from partly filled d subshells, which allow several stable electron arrangements and ' +
            'energy gaps that absorb visible light.',
    },
];
