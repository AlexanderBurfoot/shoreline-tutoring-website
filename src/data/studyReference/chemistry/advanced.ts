/**
 * Chemistry: the terms and ideas the bank did not yet name.
 *
 * Bonding, structure and analysis vocabulary a student meets in Year 11 and 12
 * but rarely finds defined plainly. Each entry says what the term means and
 * where in the course it appears.
 */
import type { StudyEntry } from '../types';

export const chemistryAdvancedEntries: StudyEntry[] = [
    {
        id: 'chem-allotropy',
        subject: 'chemistry',
        question: 'What is allotropy?',
        aliases: ['allotropy', 'allotropes', 'different forms of the same element'],
        answer:
            'The existence of an element in more than one structural form in the same physical state. Carbon is the ' +
            'standard case: diamond, graphite and the fullerenes are all pure carbon, differing only in how the atoms ' +
            'are bonded, which is why their hardness and conductivity differ so completely.',
    },
    {
        id: 'chem-coordinate-covalent-bond',
        subject: 'chemistry',
        question: 'What is a coordinate covalent bond?',
        aliases: ['coordinate covalent bond', 'dative bond', 'both electrons from one atom'],
        answer:
            'A covalent bond in which both shared electrons come from the same atom. The ammonium ion forms this way, ' +
            'the lone pair on nitrogen bonding to a hydrogen ion. Once formed it behaves identically to any other ' +
            'covalent bond, so it cannot be identified afterwards from the molecule alone.',
    },
    {
        id: 'chem-lattice-energy',
        subject: 'chemistry',
        question: 'What is lattice energy?',
        aliases: ['lattice energy', 'lattice enthalpy', 'energy holding an ionic lattice together'],
        answer:
            'The energy released when gaseous ions come together to form one mole of a solid ionic lattice, or equally ' +
            'the energy needed to pull that lattice apart. It rises with greater ion charge and smaller ion size, ' +
            'which is why magnesium oxide melts far higher than sodium chloride.',
    },
    {
        id: 'chem-polarisability',
        subject: 'chemistry',
        question: 'What does polarisability mean?',
        aliases: ['polarisability', 'how easily an electron cloud distorts', 'why bigger molecules have stronger dispersion forces'],
        answer:
            'How easily an electron cloud is distorted by a nearby charge. Larger atoms and molecules hold their outer ' +
            'electrons loosely, so they are more polarisable, and that is why dispersion forces strengthen down a ' +
            'group and with molecular size.',
    },
    {
        id: 'chem-conjugate-pairs-strength',
        subject: 'chemistry',
        question: 'How does acid strength relate to its conjugate base?',
        aliases: ['conjugate base strength', 'strong acid weak conjugate base', 'relationship between ka and kb'],
        answer:
            'The stronger the acid, the weaker its conjugate base, because a species that gives up a proton readily has ' +
            'little tendency to take one back. Numerically Kₐ times K♭ for a conjugate pair equals K𝓌, so knowing one ' +
            'fixes the other.',
    },
    {
        id: 'chem-levelling-effect',
        subject: 'chemistry',
        question: 'Why do all strong acids appear equally strong in water?',
        aliases: ['levelling effect', 'why strong acids look the same in water', 'limit of acid strength in water'],
        answer:
            'Because water is the strongest base present, every strong acid ionises fully to give the hydronium ion, so ' +
            'the solution strength is set by water rather than by the acid. Distinguishing between them needs a ' +
            'weaker base as the solvent. This is called the levelling effect.',
    },
    {
        id: 'chem-indicator-choice',
        subject: 'chemistry',
        question: 'How do I choose an indicator for a titration?',
        aliases: ['choosing an indicator', 'which indicator for which titration', 'indicator range and equivalence point'],
        answer:
            'Pick one whose colour change range spans the pH at the equivalence point. A strong acid with a strong base ' +
            'ends near pH 7, so most work. A weak acid with a strong base ends above 7, needing phenolphthalein, and a ' +
            'strong acid with a weak base ends below 7, needing methyl orange.',
    },
    {
        id: 'chem-equivalence-versus-endpoint',
        subject: 'chemistry',
        question: 'What is the difference between the equivalence point and the endpoint?',
        aliases: ['equivalence point and endpoint', 'endpoint versus equivalence', 'titration point difference'],
        answer:
            'The equivalence point is where the amounts of acid and base match the reaction ratio exactly. The endpoint ' +
            'is where the indicator changes colour. A well-chosen indicator makes them nearly coincide, and the small ' +
            'gap between them is the indicator error.',
    },
    {
        id: 'chem-buffer-capacity',
        subject: 'chemistry',
        question: 'What is buffer capacity?',
        aliases: ['buffer capacity', 'how much acid a buffer can absorb', 'when a buffer stops working'],
        answer:
            'How much acid or base a buffer can absorb before its pH shifts substantially. It depends on the ' +
            'concentrations of the weak acid and its conjugate base, not on their ratio, so a buffer at the right pH ' +
            'but very dilute fails quickly. Capacity is greatest when the two are equal.',
    },
    {
        id: 'chem-chelate',
        subject: 'chemistry',
        question: 'What is a chelate?',
        aliases: ['chelate', 'chelating agent', 'ligand binding at more than one point'],
        answer:
            'A complex in which one molecule binds a metal ion at two or more points, gripping it like a claw. EDTA is ' +
            'the standard example, used to trap metal ions in water treatment and in food preservation. Haem binds iron ' +
            'the same way.',
    },
    {
        id: 'chem-selective-precipitation',
        subject: 'chemistry',
        question: 'What is selective precipitation?',
        aliases: ['selective precipitation', 'precipitating one ion before another', 'separating ions by solubility'],
        answer:
            'Adding a reagent slowly so that the least soluble salt forms first, separating one ion from another. Where ' +
            'two salts share an anion, the one with the smaller Ksp precipitates at a lower concentration, so careful ' +
            'addition removes it while the other stays dissolved.',
    },
    {
        id: 'chem-water-hardness',
        subject: 'chemistry',
        question: 'What makes water hard, and what is the difference between temporary and permanent hardness?',
        aliases: ['water hardness', 'temporary and permanent hardness', 'why water is hard'],
        answer:
            'Dissolved calcium and magnesium ions. Temporary hardness comes from the hydrogen carbonates, which '
            + 'decompose on boiling and deposit scale, so boiling removes it. Permanent hardness comes from the '
            + 'sulfates and chlorides, which boiling does not touch, so it needs ion exchange or a chelating agent.',
    },
    {
        id: 'chem-activation-energy-catalyst-path',
        subject: 'chemistry',
        question: 'How does a catalyst lower activation energy?',
        aliases: ['how a catalyst lowers activation energy', 'alternative reaction pathway', 'catalyst mechanism'],
        answer:
            'It offers a different route to the same products, usually by binding a reactant so bonds are weakened ' +
            'before they break. The overall enthalpy change is unaltered, since the start and end points are the same, ' +
            'so only the hill between them is lowered.',
    },
    {
        id: 'chem-reaction-mechanism-steps',
        subject: 'chemistry',
        question: 'What is a reaction mechanism?',
        aliases: ['reaction mechanism', 'elementary steps', 'rate determining step'],
        answer:
            'The sequence of individual steps by which reactants become products. The slowest step, called the rate ' +
            'determining step, sets the overall rate, so changing something that only affects a fast step does little. ' +
            'A mechanism must add up to the overall balanced equation.',
    },
    {
        id: 'chem-markovnikov',
        subject: 'chemistry',
        question: 'What is Markovnikov’s rule?',
        aliases: ['markovnikov rule', 'which carbon gets the halogen', 'addition to an unsymmetrical alkene'],
        answer:
            'When a hydrogen halide adds across an unsymmetrical double bond, the hydrogen attaches to the carbon that ' +
            'already has more hydrogens. So propene and hydrogen bromide give mainly 2-bromopropane. It sits at the ' +
            'edge of the NSW course but explains why one product dominates.',
    },
    {
        id: 'chem-cross-linking',
        subject: 'chemistry',
        question: 'What does cross-linking do to a polymer?',
        aliases: ['cross linking in polymers', 'why vulcanised rubber is harder', 'covalent links between polymer chains'],
        answer:
            'Covalent links between chains stop them sliding past one another, so the material becomes harder, less ' +
            'flexible and no longer melts cleanly. Vulcanising rubber with sulfur is the classic case, turning a soft ' +
            'material into one that holds its shape under load.',
    },
    {
        id: 'chem-biodegradable-polymer',
        subject: 'chemistry',
        question: 'What makes a polymer biodegradable?',
        aliases: ['biodegradable polymer', 'why some plastics break down', 'polymer that microbes can break'],
        answer:
            'Bonds in the backbone that enzymes can attack, usually ester or amide links, plus a structure open enough ' +
            'for water and microbes to reach them. Polyethylene has only carbon to carbon bonds, which is why it ' +
            'persists, while polylactic acid breaks down under the right conditions.',
    },
    {
        id: 'chem-soap-versus-detergent',
        subject: 'chemistry',
        question: 'What is the difference between a soap and a detergent?',
        aliases: ['soap versus detergent', 'why soap fails in hard water', 'anionic detergent difference'],
        answer:
            'Both have a long non-polar tail and a charged head. A soap’s head is a carboxylate, which forms an ' +
            'insoluble scum with the calcium and magnesium ions in hard water. A synthetic detergent usually uses a ' +
            'sulfonate head, whose calcium salt stays soluble, so it lathers in hard water.',
    },
    {
        id: 'chem-fatty-acid-saturation',
        subject: 'chemistry',
        question: 'Why are unsaturated fats liquid at room temperature?',
        aliases: ['why unsaturated fats are liquid', 'saturated versus unsaturated fat structure', 'cis double bond in a fat'],
        answer:
            'A cis double bond puts a kink in the chain, so the molecules cannot pack closely and the dispersion forces ' +
            'between them are weaker. Saturated chains are straight, pack tightly and hold together more strongly, ' +
            'which raises the melting point enough to make them solid.',
    },
    {
        id: 'chem-protein-denaturation-chemistry',
        subject: 'chemistry',
        question: 'What happens chemically when a protein denatures?',
        aliases: ['protein denaturation chemistry', 'what breaks when a protein denatures', 'heat and ph on protein structure'],
        answer:
            'The hydrogen bonds and other weak interactions holding the folded shape are disrupted, while the peptide ' +
            'bonds of the backbone survive. So the sequence is intact but the shape is lost, and since function ' +
            'depends on shape, the protein stops working. Heat, extreme pH and some solvents all do it.',
    },
    {
        id: 'chem-hplc',
        subject: 'chemistry',
        question: 'How does high performance liquid chromatography work?',
        aliases: ['hplc', 'high performance liquid chromatography', 'separating with a pressurised column'],
        answer:
            'A liquid sample is pumped at high pressure through a column packed with fine particles, so components ' +
            'separate by how strongly they interact with the packing. A detector at the outlet records when each ' +
            'emerges. Peak position identifies a component and peak area measures how much there is.',
    },
    {
        id: 'chem-gas-chromatography',
        subject: 'chemistry',
        question: 'How does gas chromatography work?',
        aliases: ['gas chromatography', 'separating volatile compounds', 'gc retention time'],
        answer:
            'The sample is vaporised and carried by an inert gas through a long heated column. Components that interact ' +
            'more with the column lining move slower, so each emerges at a characteristic retention time. It suits ' +
            'volatile compounds, and is often paired with mass spectrometry to identify each peak.',
    },
    {
        id: 'chem-uv-visible-spectroscopy',
        subject: 'chemistry',
        question: 'What does ultraviolet and visible spectroscopy measure?',
        aliases: ['uv visible spectroscopy', 'absorbance of coloured solutions', 'beer lambert law'],
        answer:
            'How strongly a solution absorbs light at each wavelength, which reflects electrons being promoted between ' +
            'energy levels. Absorbance rises in proportion to concentration and path length, the Beer Lambert ' +
            'relationship, which is why it underpins colorimetry and calibration curves.',
    },
    {
        id: 'chem-flame-test-explanation',
        subject: 'chemistry',
        question: 'Why does each metal give a different flame colour?',
        aliases: ['why flame colours differ', 'flame test explanation', 'electron transitions and flame colour'],
        answer:
            'Heat promotes outer electrons to higher levels, and as they fall back they emit photons of specific ' +
            'energies. Because every element has a different set of level spacings, the combination of wavelengths is ' +
            'unique, which is what the eye sees as a characteristic colour.',
    },
    {
        id: 'chem-emission-versus-absorption-spectra',
        subject: 'chemistry',
        question: 'What is the difference between an emission and an absorption spectrum?',
        aliases: ['emission versus absorption spectrum', 'bright lines and dark lines', 'spectrum type difference'],
        answer:
            'An emission spectrum shows bright lines where excited atoms release photons. An absorption spectrum shows ' +
            'dark lines in a continuous background where atoms have taken those same photons out. The lines fall at the ' +
            'same wavelengths, which is how the composition of a star is identified.',
    },
    {
        id: 'chem-precision-of-glassware',
        subject: 'chemistry',
        question: 'Which glassware should I use for an accurate volume?',
        aliases: ['choosing glassware for accuracy', 'volumetric flask or measuring cylinder', 'pipette accuracy'],
        answer:
            'A volumetric flask or a pipette for a single accurate volume, a burette for a measured variable volume, ' +
            'and a measuring cylinder only where rough is enough. A beaker is never a measuring device. Using a ' +
            'cylinder where a pipette was needed limits the whole result.',
    },
    {
        id: 'chem-rinsing-glassware',
        subject: 'chemistry',
        question: 'Why is a pipette rinsed with the solution it will hold?',
        aliases: ['rinsing a pipette with the solution', 'why not rinse a conical flask', 'rinsing glassware before a titration'],
        answer:
            'Residual water would dilute the solution and change the amount delivered, so the pipette and burette are ' +
            'rinsed with the solution they will hold. The conical flask is rinsed with water only, because extra water ' +
            'there changes the volume but not the moles being titrated.',
    },
    {
        id: 'chem-drying-to-constant-mass',
        subject: 'chemistry',
        question: 'Why heat a sample to constant mass?',
        aliases: ['heating to constant mass', 'why repeat heating and weighing', 'constant mass in gravimetric analysis'],
        answer:
            'Because you cannot otherwise know that all the water or gas has gone. Heat, cool in a desiccator and ' +
            'weigh, then repeat until two masses agree. A single heating usually leaves some moisture, which makes the ' +
            'measured mass of the substance too high.',
    },
    {
        id: 'chem-parallax-meniscus',
        subject: 'chemistry',
        question: 'How do I read a meniscus correctly?',
        aliases: ['reading a meniscus', 'parallax error reading a burette', 'bottom of the meniscus'],
        answer:
            'Read the bottom of the curve for water-based solutions, with your eye level with it. Reading from above or ' +
            'below introduces a parallax error that is systematic, so it shifts every titre the same way and averaging ' +
            'will not remove it.',
    },
    {
        id: 'chem-serial-dilution-purpose',
        subject: 'chemistry',
        question: 'Why use a serial dilution?',
        aliases: ['why serial dilution', 'purpose of stepwise dilution', 'making a very dilute solution accurately'],
        answer:
            'Because a single large dilution needs an impractically small volume to be measured accurately. Diluting ' +
            'tenfold several times keeps every measured volume in a range the glassware handles well. It is also how ' +
            'the standards for a calibration curve are prepared.',
    },
    {
        id: 'chem-reverse-osmosis',
        subject: 'chemistry',
        question: 'How does reverse osmosis desalinate water?',
        aliases: ['reverse osmosis', 'desalination by membrane', 'pushing water through a membrane'],
        answer:
            'Pressure above the osmotic pressure is applied to salty water against a membrane that passes water but not '
            + 'ions, so water is forced the opposite way to natural osmosis. It leaves a concentrated brine that must '
            + 'be disposed of, and the pressure needed is what makes the process energy intensive.',
    },
    {
        id: 'chem-life-cycle-assessment',
        subject: 'chemistry',
        question: 'What is a life cycle assessment of a material?',
        aliases: ['life cycle assessment', 'cradle to grave analysis', 'total environmental cost of a material'],
        answer:
            'An accounting of the energy, resources and emissions involved from extraction through manufacture, use and ' +
            'disposal. It often overturns intuition: a reusable item can be worse than a disposable one if it is made ' +
            'from an energy-intensive material and used only a few times.',
    },
];
