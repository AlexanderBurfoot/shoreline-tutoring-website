/**
 * Chemistry: the distinctions students most often blur.
 *
 * Pairs of terms that sound interchangeable and are not, and the questions that
 * turn on knowing the difference.
 */
import type { StudyEntry } from '../types';

export const chemistryComparisonEntries: StudyEntry[] = [
    {
        id: 'chem-hydrated-ion',
        subject: 'chemistry',
        question: 'What is a hydrated ion?',
        aliases: ['hydrated ion', 'water of hydration around an ion', 'why ions attract water'],
        answer:
            'An ion surrounded by water molecules oriented towards its charge, the negative oxygen end towards a ' +
            'cation and the positive hydrogens towards an anion. That attraction is what releases energy when a salt ' +
            'dissolves, offsetting the energy needed to break the lattice.',
    },
    {
        id: 'chem-graphite-slippery',
        subject: 'chemistry',
        question: 'Why is graphite slippery and diamond hard?',
        aliases: ['why graphite is slippery', 'graphite as a lubricant', 'why diamond is hard'],
        answer:
            'Graphite bonds each carbon to three others in flat sheets held together only by weak forces, so the ' +
            'sheets slide over one another. Diamond bonds each carbon to four in a rigid three-dimensional network ' +
            'with no planes to slide.',
    },
    {
        id: 'chem-colloid',
        subject: 'chemistry',
        question: 'What is a colloid?',
        aliases: ['colloid', 'emulsion', 'milk as a mixture', 'tyndall effect'],
        answer:
            'A mixture whose particles are too large to be dissolved but too small to settle, so it looks uniform yet ' +
            'scatters light. Milk and fog are colloids, and the scattering is how you tell one from a true solution.',
    },
    {
        id: 'chem-water-solvent',
        subject: 'chemistry',
        question: 'Why is water such a good solvent?',
        aliases: ['why water dissolves so much', 'water as a solvent', 'universal solvent'],
        answer:
            'Its molecules are polar, so they surround and separate ions and other polar molecules, and hydrogen ' +
            'bonding lets them stabilise what they surround. Non-polar substances such as oils have nothing for water ' +
            'to attract, so they do not dissolve.',
    },
    {
        id: 'chem-autoionisation',
        subject: 'chemistry',
        question: 'What is the autoionisation of water?',
        aliases: ['autoionisation of water', 'why pure water conducts slightly'],
        answer:
            'A very small fraction of water molecules transfer a proton to each other, giving equal tiny ' +
            'concentrations of H⁺ and OH⁻, each 1.0 × 10⁻⁷ mol L⁻¹ at 25 °C. It is why pure water conducts slightly ' +
            'and why pH 7 is neutral at that temperature rather than at every temperature.',
    },
    {
        id: 'chem-reforming',
        subject: 'chemistry',
        question: 'What is reforming in petrochemistry?',
        aliases: ['reforming', 'catalytic reforming', 'rearranging hydrocarbons'],
        answer:
            'Rearranging hydrocarbon molecules over a catalyst into more useful shapes, typically turning straight ' +
            'chains into branched or cyclic ones that burn more smoothly in an engine. Cracking breaks long chains ' +
            'into shorter ones; reforming keeps the size and changes the structure.',
    },
    {
        id: 'chem-oxidising-alcohols-classes',
        subject: 'chemistry',
        question: 'What happens when each class of alcohol is oxidised?',
        aliases: ['oxidising a secondary alcohol', 'oxidation of alcohol classes', 'why tertiary alcohols resist oxidation'],
        answer:
            'A primary alcohol oxidises to an aldehyde and then a carboxylic acid; a secondary alcohol oxidises to a ' +
            'ketone and stops there; a tertiary alcohol resists oxidation, because the carbon bearing the OH has no ' +
            'hydrogen left to remove.',
    },
    {
        id: 'chem-thermoplastic-versus-thermoset',
        subject: 'chemistry',
        question: 'What is the difference between a thermoplastic and a thermoset?',
        aliases: ['thermoplastic versus thermoset', 'why some plastics cannot be remelted', 'cross linked plastic'],
        answer:
            'A thermoplastic has separate chains held by intermolecular forces, so heating lets them slide and it can ' +
            'be remoulded and recycled. A thermoset is cross-linked into a single network, so heating decomposes it ' +
            'instead of softening it.',
    },
    {
        id: 'chem-vulcanisation',
        subject: 'chemistry',
        question: 'What is vulcanisation?',
        aliases: ['vulcanisation', 'sulfur cross links in rubber', 'hardening rubber'],
        answer:
            'Heating rubber with sulfur so short sulfur bridges cross-link the polymer chains. The chains can no ' +
            'longer slide past one another freely, so the rubber becomes harder, stronger and far less sensitive to ' +
            'temperature, which is what made tyres practical.',
    },
    {
        id: 'chem-spectroscopic-fingerprint',
        subject: 'chemistry',
        question: 'Why is a spectrum called a fingerprint?',
        aliases: ['spectroscopic fingerprint', 'why a spectrum identifies a substance', 'unique absorption pattern'],
        answer:
            'Because the pattern of wavelengths a substance absorbs or emits depends on its own energy levels and ' +
            'bonds, so no two different substances give the same pattern. Matching an unknown spectrum against ' +
            'reference spectra identifies it without any chemical test.',
    },
    {
        id: 'chem-roman-numerals',
        subject: 'chemistry',
        question: 'When do I use Roman numerals in a chemical name?',
        aliases: ['roman numerals in naming', 'iron ii and iron iii', 'variable valency naming'],
        answer:
            'Whenever the metal has more than one possible charge, which is most transition metals. Iron(II) chloride ' +
            'is FeCl₂ and iron(III) chloride is FeCl₃. Metals with only one charge, such as sodium or magnesium, ' +
            'never take a numeral.',
    },
    {
        id: 'chem-formula-from-name',
        subject: 'chemistry',
        question: 'How do I turn a name into a formula with the charges balanced?',
        aliases: ['formula from a name', 'writing a chemical formula', 'balancing charges in a formula'],
        answer:
            'Write the ions with their charges, then choose the smallest whole numbers that make the total charge ' +
            'zero. Calcium is 2+ and nitrate 1−, so calcium nitrate is Ca(NO₃)₂, with brackets because the whole ' +
            'polyatomic ion is doubled.',
    },
    {
        id: 'chem-polyatomic-ions',
        subject: 'chemistry',
        question: 'Which polyatomic ions should I know?',
        aliases: ['polyatomic ions', 'list of polyatomic ions', 'nitrate sulfate carbonate charges'],
        answer:
            'Nitrate NO₃⁻, hydroxide OH⁻, hydrogen carbonate HCO₃⁻, sulfate SO₄²⁻, carbonate CO₃²⁻, phosphate PO₄³⁻ ' +
            'and ammonium NH₄⁺, the only common positive one. Knowing the charges is what makes writing formulas ' +
            'mechanical rather than guesswork.',
    },
    {
        id: 'chem-aldehyde-ketone-test',
        subject: 'chemistry',
        question: 'How do I distinguish an aldehyde from a ketone?',
        aliases: ['distinguishing aldehyde from ketone', 'tollens reagent', 'benedicts with an aldehyde'],
        answer:
            'An aldehyde is oxidised further and a ketone is not, so a mild oxidising agent separates them. Tollens ' +
            'reagent gives a silver mirror and Benedict solution turns brick red with an aldehyde, while a ketone ' +
            'leaves both unchanged.',
    },
    {
        id: 'chem-dichromate-colour',
        subject: 'chemistry',
        question: 'What colour change shows an alcohol being oxidised?',
        aliases: ['dichromate colour change', 'orange to green oxidation', 'permanganate colour change'],
        answer:
            'Acidified dichromate turns from orange to green as chromium is reduced, and acidified permanganate turns ' +
            'from purple to colourless. A tertiary alcohol produces no change, which is how the three classes are ' +
            'distinguished.',
    },
    {
        id: 'chem-avogadro-law',
        subject: 'chemistry',
        question: 'What is Avogadro law?',
        aliases: ['avogadros law', 'equal volumes equal moles', 'why gas volumes are in simple ratios'],
        answer:
            'Equal volumes of any gases at the same temperature and pressure contain equal numbers of particles. That ' +
            'is why gas volumes react in the same simple ratios as the coefficients, so two litres of hydrogen need ' +
            'one of oxygen.',
    },
    {
        id: 'chem-balancing-redox-acid',
        subject: 'chemistry',
        question: 'How do I balance a redox equation in acidic solution?',
        aliases: ['balancing redox in acid', 'adding water and hydrogen ions', 'half equation balancing method'],
        answer:
            'Balance the atoms other than oxygen and hydrogen, add water to balance oxygen, add H⁺ to balance ' +
            'hydrogen, then add electrons to balance charge. Multiply the half equations so the electrons cancel, ' +
            'then add them.',
    },
    {
        id: 'chem-percentage-error',
        subject: 'chemistry',
        question: 'How do I calculate percentage error in chemistry?',
        aliases: ['percentage error', 'comparing with the accepted value', 'experimental error percentage'],
        answer:
            'Divide the difference between your value and the accepted one by the accepted value, then multiply by ' +
            '100. State the direction too: a result 6% low points to heat loss or an incomplete reaction rather than ' +
            'to random scatter.',
    },
    {
        id: 'chem-serial-dilution',
        subject: 'chemistry',
        question: 'What is a serial dilution?',
        aliases: ['serial dilution', 'successive dilutions', 'making a set of standards'],
        answer:
            'Diluting in successive steps, each by the same factor, so a set of standards spanning several orders of ' +
            'magnitude can be made accurately. Each step uses a pipette and a volumetric flask, and errors multiply, ' +
            'so the last standard is the least reliable.',
    },
    {
        id: 'chem-suction-filtration',
        subject: 'chemistry',
        question: 'What is suction filtration?',
        aliases: ['suction filtration', 'buchner funnel', 'vacuum filtration'],
        answer:
            'Filtering with reduced pressure beneath the funnel, which pulls the liquid through far faster and leaves ' +
            'a drier solid. It suits recovering a crystalline product, and the flask must be able to withstand the ' +
            'pressure difference.',
    },
    {
        id: 'chem-melting-point-purity',
        subject: 'chemistry',
        question: 'How does a melting point show purity?',
        aliases: ['melting point purity test', 'sharp melting point', 'impurity lowers melting point'],
        answer:
            'A pure solid melts sharply at its literature value. An impurity lowers the melting point and spreads it ' +
            'over a range, so a sample melting from 118 to 124 °C where the pure compound melts at 126 is impure.',
    },
    {
        id: 'chem-recrystallisation-losses',
        subject: 'chemistry',
        question: 'Why does recrystallisation lose product?',
        aliases: ['recrystallisation yield loss', 'why purification reduces yield', 'product left in solution'],
        answer:
            'Some product stays dissolved in the cold solvent, some is lost in transfers and some is washed away with ' +
            'the impurities. Purity and yield trade against each other, which is why a purification step is reported ' +
            'with both figures.',
    },
    {
        id: 'chem-acid-dilution-safety',
        subject: 'chemistry',
        question: 'Why is acid added to water rather than water to acid?',
        aliases: ['adding acid to water', 'diluting concentrated acid safely', 'why never water to acid'],
        answer:
            'Dilution releases a great deal of heat. Adding acid slowly to a large volume of water spreads that heat ' +
            'through the water; adding water to concentrated acid heats a small volume fast enough to boil and spit.',
    },
    {
        id: 'chem-carboxylic-acid-test',
        subject: 'chemistry',
        question: 'How do I test for a carboxylic acid?',
        aliases: ['testing for a carboxylic acid', 'carbonate test for an acid', 'identifying an organic acid'],
        answer:
            'Add sodium carbonate or hydrogen carbonate solution: a carboxylic acid fizzes as carbon dioxide is ' +
            'released, which turns limewater milky. Alcohols and phenols do not, so the test separates the acid from ' +
            'the other oxygen-containing groups.',
    },
    {
        id: 'chem-metallic-bonding-strength',
        subject: 'chemistry',
        question: 'Why do metals differ so much in melting point?',
        aliases: ['metallic bonding strength', 'why tungsten melts high', 'charge and size in metallic bonding'],
        answer:
            'The strength depends on how many delocalised electrons each atom contributes and how small the ion is. ' +
            'Sodium gives one electron and melts at 98 °C; tungsten contributes many and melts above 3,000 °C.',
    },
    {
        id: 'chem-hydrogen-bonding-biology',
        subject: 'chemistry',
        question: 'Where does hydrogen bonding matter in biological molecules?',
        aliases: ['hydrogen bonding in dna', 'hydrogen bonds in proteins', 'why hydrogen bonds matter biologically'],
        answer:
            'It holds the two DNA strands together, weakly enough to separate for replication yet specifically enough ' +
            'to pair the bases correctly, and it holds protein secondary structure in helices and sheets. Heat breaks ' +
            'these bonds, which is denaturation.',
    },
    {
        id: 'chem-phosphates-detergents',
        subject: 'chemistry',
        question: 'Why were phosphates removed from detergents?',
        aliases: ['phosphates in detergents', 'why detergents changed', 'phosphate and algal blooms'],
        answer:
            'Phosphates soften water and improve cleaning, but they are a nutrient, so in waterways they feed algal ' +
            'blooms whose decay strips the oxygen. Low-phosphate formulations were introduced to reduce that ' +
            'eutrophication.',
    },
    {
        id: 'chem-acid-rain-damage',
        subject: 'chemistry',
        question: 'What damage does acid rain do?',
        aliases: ['acid rain damage', 'effect of acid rain on buildings', 'acid rain and lakes'],
        answer:
            'It dissolves limestone and marble in buildings and statues, lowers the pH of lakes until fish eggs fail, ' +
            'leaches nutrients from soil and mobilises aluminium that damages roots and gills. Effects appear far ' +
            'downwind of the source.',
    },
    {
        id: 'chem-montreal-protocol',
        subject: 'chemistry',
        question: 'What was the Montreal Protocol, and did it work?',
        aliases: ['montreal protocol', 'banning cfcs', 'ozone layer recovery'],
        answer:
            'An international agreement phasing out CFCs and related compounds after the link to ozone depletion was ' +
            'established. Atmospheric concentrations have fallen and the ozone layer is slowly recovering, which ' +
            'makes it the clearest example of a chemical problem solved by regulation.',
    },
    {
        id: 'chem-classifying-alcohols-test',
        subject: 'chemistry',
        question: 'How do I work out whether an alcohol is primary, secondary or tertiary?',
        aliases: ['classifying an alcohol', 'primary secondary tertiary test', 'counting carbons on the oh carbon'],
        answer:
            'Count the carbon atoms attached to the carbon bearing the OH: one makes it primary, two secondary, three ' +
            'tertiary. Oxidation then confirms it, since primary gives an aldehyde then an acid, secondary a ketone, ' +
            'and tertiary no reaction.',
    },
];
