/**
 * Chemistry, Year 12 (Modules 5 to 8).
 *
 * Equilibrium and acid reactions, acid/base reactions, organic chemistry, and
 * applying chemical ideas.
 */
import type { StudyEntry } from '../types';

export const chemistryYear12Entries: StudyEntry[] = [
    {
        id: 'chem-equilibrium-constant',
        subject: 'chemistry',
        question: 'What is the equilibrium constant Keq?',
        aliases: ['keq', 'equilibrium constant', 'kc', 'k expression', 'equilibrium expression'],
        answer:
            'For aA + bB ⇌ cC + dD, Keq = [C]^c[D]^d / ([A]^a[B]^b), using equilibrium concentrations. ' +
            'A large K means products are favoured, a small K means reactants are. Pure solids and liquids are left out.',
    },
    {
        id: 'chem-le-chatelier',
        subject: 'chemistry',
        question: 'What is Le Chatelier’s principle?',
        aliases: ['le chatelier', 'shift equilibrium', 'disturbing equilibrium', 'pressure change equilibrium'],
        answer:
            'If a system at equilibrium is disturbed, it shifts to partly oppose the change. ' +
            'Adding reactant shifts it right, raising pressure shifts it towards fewer gas particles, and raising ' +
            'temperature shifts it in the endothermic direction. Only temperature changes the value of K.',
    },
    {
        id: 'chem-ksp',
        subject: 'chemistry',
        question: 'What is Ksp?',
        aliases: ['ksp', 'solubility product', 'precipitate', 'saturated solution'],
        answer:
            'Ksp is the solubility product: the equilibrium constant for a sparingly soluble salt dissolving. ' +
            'For AgCl(s) ⇌ Ag⁺ + Cl⁻, Ksp = [Ag⁺][Cl⁻]. If the ionic product exceeds Ksp, a precipitate forms.',
    },
    {
        id: 'chem-ph',
        subject: 'chemistry',
        question: 'How do I calculate pH?',
        aliases: ['ph formula', 'poh', 'hydrogen ion concentration', 'ph scale'],
        answer:
            'pH = −log₁₀[H⁺], and pOH = −log₁₀[OH⁻]. At 25°C, pH + pOH = 14. ' +
            'Each whole pH unit is a tenfold change in [H⁺], so pH 3 is ten times more acidic than pH 4.',
    },
    {
        id: 'chem-ka-kb',
        subject: 'chemistry',
        question: 'What are Ka and Kb?',
        aliases: ['ka', 'kb', 'acid dissociation constant', 'weak acid', 'pka'],
        answer:
            'Ka is the acid dissociation constant: for HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. ' +
            'A larger Ka means a stronger acid. pKa = −log₁₀Ka, so a smaller pKa is the stronger acid. ' +
            'For a conjugate pair, Ka × Kb = Kw = 1.0 × 10⁻¹⁴ at 25°C.',
    },
    {
        id: 'chem-titration',
        subject: 'chemistry',
        question: 'How does a titration calculation work?',
        aliases: ['titration', 'equivalence point', 'standard solution', 'c1v1', 'concentration calculation'],
        answer:
            'Use n = cV to find moles of the known solution, apply the mole ratio from the balanced equation, ' +
            'then divide by the unknown volume to get its concentration. ' +
            'The equivalence point is where the moles match the ratio; the end point is where the indicator changes.',
    },
    {
        id: 'chem-functional-groups',
        subject: 'chemistry',
        question: 'What are the main organic functional groups?',
        aliases: ['functional groups', 'alcohol', 'carboxylic acid', 'ester', 'amine', 'homologous series'],
        answer:
            'Alkane (C−C), alkene (C=C), alkyne (C≡C), alcohol (−OH), aldehyde (−CHO), ketone (C=O in the chain), ' +
            'carboxylic acid (−COOH), ester (−COO−), amine (−NH₂) and amide (−CONH₂). ' +
            'The group decides the reactions and, with chain length, the boiling point.',
    },
    {
        id: 'chem-esterification',
        subject: 'chemistry',
        question: 'What is esterification?',
        aliases: ['esterification', 'making an ester', 'reflux', 'condensation reaction'],
        answer:
            'A carboxylic acid plus an alcohol makes an ester and water, with concentrated sulfuric acid as catalyst. ' +
            'It is reversible and slow, so it is run under reflux to heat the mixture without losing volatile reactants.',
    },
    {
        id: 'chem-buffers',
        subject: 'chemistry',
        question: 'What is a buffer?',
        aliases: ['buffer', 'buffer solution', 'conjugate pair buffer', 'blood buffer'],
        answer:
            'A buffer is a weak acid with its conjugate base, or a weak base with its conjugate acid, in similar ' +
            'amounts. Added acid reacts with the base and added base with the acid, so the pH barely moves. ' +
            'Blood is buffered by the carbonic acid and hydrogencarbonate pair.',
    },
    {
        id: 'chem-indicators',
        subject: 'chemistry',
        question: 'How do I choose an indicator?',
        aliases: ['indicator', 'phenolphthalein', 'methyl orange', 'titration curve', 'equivalence point ph'],
        answer:
            'Choose one whose colour change spans the pH at the equivalence point. ' +
            'Strong acid with strong base is neutral there, so most indicators work. Weak acid with strong base ends ' +
            'basic, suiting phenolphthalein; strong acid with weak base ends acidic, suiting methyl orange.',
    },
    {
        id: 'chem-organic-naming',
        subject: 'chemistry',
        question: 'How does IUPAC naming work?',
        aliases: ['iupac naming', 'naming organic compounds', 'prefixes meth eth prop', 'alkane alkene names'],
        answer:
            'Count the longest carbon chain for the stem: meth, eth, prop, but, pent, hex. ' +
            'The ending gives the functional group, such as -ane, -ene, -ol or -oic acid. ' +
            'Number from the end that gives the group the lowest number, and list branches alphabetically.',
    },
    {
        id: 'chem-polymers',
        subject: 'chemistry',
        question: 'What is the difference between addition and condensation polymers?',
        aliases: ['polymers', 'addition polymer', 'condensation polymer', 'monomer', 'polyethylene', 'nylon'],
        answer:
            'Addition polymers form when monomers with a C=C bond open and join, losing nothing, as in polyethylene. ' +
            'Condensation polymers form when two functional groups react and release a small molecule, usually water, ' +
            'as in nylon and polyesters.',
    },
    {
        id: 'chem-analysis-techniques',
        subject: 'chemistry',
        question: 'Which analysis technique should I use?',
        aliases: ['which technique', 'choosing an analysis technique', 'instrumental analysis', 'chromatography', 'identifying a compound'],
        answer:
            'Match the technique to the question. Molar mass and fragments: mass spectrometry. Functional groups: ' +
            'infrared. Carbon and hydrogen skeleton: NMR. Concentration of a metal ion: AAS. ' +
            'Separating a mixture first: chromatography. Structure questions usually need two of them together.',
    },
    {
        id: 'chem-equilibrium-graphs',
        subject: 'chemistry',
        question: 'How do I read a concentration-time graph for equilibrium?',
        aliases: ['equilibrium graph', 'concentration time graph', 'reaching equilibrium', 'dynamic equilibrium'],
        answer:
            'Concentrations change quickly at first, then level off where the forward and reverse rates are equal. ' +
            'Equilibrium is dynamic: both reactions continue at the same rate. ' +
            'A sudden jump then a new plateau shows a disturbance and the shift that followed it.',
    },
    {
        id: 'chem-salts-hydrolysis',
        subject: 'chemistry',
        question: 'Why are some salt solutions not neutral?',
        aliases: ['salt hydrolysis', 'acidic salt', 'basic salt', 'conjugate base ph', 'amphiprotic'],
        answer:
            'A salt from a strong acid and strong base is neutral. From a weak acid and strong base, the conjugate ' +
            'base reacts with water and the solution is basic; the reverse gives an acidic solution. ' +
            'Amphiprotic species, such as hydrogencarbonate, can act as either.',
    },
    {
        id: 'chem-alcohols-reactions',
        subject: 'chemistry',
        question: 'What reactions do alcohols undergo?',
        aliases: ['alcohol reactions', 'oxidation of alcohols', 'dehydration', 'substitution reaction', 'primary secondary tertiary'],
        answer:
            'Primary alcohols oxidise to aldehydes then carboxylic acids; secondary give ketones; tertiary resist ' +
            'oxidation. Dehydration with acid gives an alkene. ' +
            'Alcohols also react with carboxylic acids to form esters, and burn completely to carbon dioxide and water.',
    },
    {
        id: 'chem-isomers',
        subject: 'chemistry',
        question: 'What are isomers?',
        aliases: ['isomers', 'structural isomers', 'chain isomer', 'positional isomer', 'functional group isomer'],
        answer:
            'Isomers share a molecular formula but differ in structure. ' +
            'Chain isomers branch differently, positional isomers move the functional group along the chain, and ' +
            'functional group isomers have a different group entirely. Isomers can have very different properties.',
    },
    {
        id: 'chem-soaps-detergents',
        subject: 'chemistry',
        question: 'How do soaps and detergents work?',
        aliases: ['soap', 'detergent', 'saponification', 'hydrophilic hydrophobic', 'surfactant', 'hard water'],
        answer:
            'A surfactant has a hydrophobic tail and a hydrophilic head, so it surrounds grease and lets water carry ' +
            'it away. Soap is made by saponification, boiling a fat with a strong base. ' +
            'Soap forms a scum in hard water, where synthetic detergents do not.',
    },
    {
        id: 'chem-monitoring-environment',
        subject: 'chemistry',
        question: 'How is water quality monitored?',
        aliases: ['water quality', 'monitoring the environment', 'eutrophication', 'heavy metals', 'dissolved oxygen'],
        answer:
            'Tests cover pH, dissolved oxygen, turbidity, hardness, phosphate and nitrate, and heavy metal ions. ' +
            'Excess nutrients cause eutrophication: algae bloom, then decay and strip the oxygen. ' +
            'AAS measures metal ions at very low concentrations.',
    },
    {
        id: 'chem-conjugate-pairs',
        subject: 'chemistry',
        question: 'What are conjugate acid-base pairs?',
        aliases: ['conjugate pair', 'conjugate base', 'conjugate acid', 'bronsted lowry', 'proton donor acceptor'],
        answer:
            'Brønsted-Lowry defines an acid as a proton donor and a base as a proton acceptor, so every acid has a ' +
            'conjugate base differing by one proton. ' +
            'The stronger the acid, the weaker its conjugate base. Arrhenius only described H⁺ and OH⁻ in water, ' +
            'which is why Brønsted-Lowry replaced it.',
    },
    {
        id: 'chem-strong-weak-acids',
        subject: 'chemistry',
        question: 'What is the difference between a strong acid and a concentrated one?',
        aliases: ['strong vs weak acid', 'degree of ionisation', 'concentrated acid', 'dilute acid', 'weak acid ph'],
        answer:
            'Strength is how completely an acid ionises; concentration is how much acid is in the solution. ' +
            'A strong acid ionises essentially completely, so [H⁺] equals its concentration. ' +
            'A weak acid ionises partially, so its pH is higher than a strong acid at the same concentration.',
    },
    {
        id: 'chem-kw-poh',
        subject: 'chemistry',
        question: 'What is Kw?',
        aliases: ['kw', 'ionic product of water', 'poh', 'ph plus poh', 'self ionisation'],
        answer:
            'Water self-ionises, and Kw = [H₃O⁺][OH⁻] = 1.00 × 10⁻¹⁴ at 25°C. ' +
            'So pH + pOH = 14 at that temperature. ' +
            'Kw rises with temperature, which is why neutral pH is below 7 in hot water while still being neutral.',
    },
    {
        id: 'chem-titration-curves',
        subject: 'chemistry',
        question: 'What does a titration curve show?',
        aliases: ['titration curve', 'equivalence point ph', 'buffer region', 'strong acid weak base curve', 'half equivalence'],
        answer:
            'pH against volume added. The steep section is the equivalence point: pH 7 only for strong acid with ' +
            'strong base, above 7 for weak acid with strong base, below 7 for strong acid with weak base. ' +
            'The flat stretch before it is the buffer region, and at half-equivalence pH = pKa.',
    },
    {
        id: 'chem-amphiprotic',
        subject: 'chemistry',
        question: 'What does amphiprotic mean?',
        aliases: ['amphiprotic', 'amphoteric', 'hydrogencarbonate', 'can act as acid or base'],
        answer:
            'An amphiprotic species can either donate or accept a proton, such as hydrogencarbonate or water. ' +
            'Amphoteric is the wider term for reacting with both acids and bases, which includes species that do so ' +
            'without proton transfer, such as aluminium oxide.',
    },
    {
        id: 'chem-reaction-quotient',
        subject: 'chemistry',
        question: 'What is the reaction quotient Q?',
        aliases: ['reaction quotient', 'q vs k', 'predicting shift', 'not at equilibrium'],
        answer:
            'Q has the same form as Keq but uses concentrations at any moment, not just at equilibrium. ' +
            'If Q < K the reaction runs forward, if Q > K it runs in reverse, and if Q = K it is already at ' +
            'equilibrium. For solubility, Q above Ksp means a precipitate forms.',
    },
    {
        id: 'chem-standard-solutions',
        subject: 'chemistry',
        question: 'What makes a good primary standard?',
        aliases: ['primary standard', 'standard solution', 'volumetric flask', 'standardisation'],
        answer:
            'It must be pure, stable in air, not hygroscopic, of known composition and ideally high molar mass, so ' +
            'weighing errors matter less. ' +
            'Dissolve a weighed mass and make up to the mark in a volumetric flask. ' +
            'A solution that cannot meet this, such as sodium hydroxide, is standardised against one that can.',
    },
    {
        id: 'chem-back-titration',
        subject: 'chemistry',
        question: 'What is a back titration?',
        aliases: ['back titration', 'excess reagent titration', 'indirect titration'],
        answer:
            'React the sample with a measured excess of standard reagent, then titrate what is left over. ' +
            'Moles reacted with the sample are the difference. ' +
            'It is used when the sample is insoluble, impure or reacts too slowly to titrate directly, such as ' +
            'antacid tablets.',
    },
    {
        id: 'chem-gravimetric',
        subject: 'chemistry',
        question: 'How does gravimetric analysis work?',
        aliases: ['gravimetric analysis', 'precipitate mass', 'constant mass', 'filtering and drying'],
        answer:
            'Precipitate the ion you want as an insoluble compound, filter it, then dry and weigh it to constant ' +
            'mass. ' +
            'Convert that mass to moles and back to the ion in the sample. ' +
            'Heating to constant mass matters, since any remaining water inflates the result.',
    },
    {
        id: 'chem-nmr',
        subject: 'chemistry',
        question: 'How do I read an NMR spectrum?',
        aliases: ['nmr', 'proton nmr', 'carbon 13 nmr', 'chemical shift', 'splitting', 'n + 1 rule', 'integration'],
        answer:
            'The number of signals gives the number of distinct environments: hydrogen environments in ¹H NMR, ' +
            'carbon environments in ¹³C. ' +
            'Chemical shift indicates what is nearby, read from the data sheet. ' +
            'In ¹H, integration gives how many hydrogens, and splitting follows the n + 1 rule for neighbours.',
    },
    {
        id: 'chem-infrared',
        subject: 'chemistry',
        question: 'How do I read an infrared spectrum?',
        aliases: ['infrared spectroscopy', 'ir spectrum', 'absorption bands', 'functional group identification', 'wavenumber'],
        answer:
            'Bonds absorb infrared at characteristic wavenumbers, listed on the data sheet. ' +
            'A broad band near 3300 cm⁻¹ suggests O-H, a strong sharp one near 1700 cm⁻¹ suggests C=O. ' +
            'Use it to identify functional groups, then another technique for the full structure.',
    },
    {
        id: 'chem-aas-uv',
        subject: 'chemistry',
        question: 'What do AAS and UV-visible spectroscopy measure?',
        aliases: ['aas', 'atomic absorption spectroscopy', 'uv visible', 'colorimetry', 'calibration curve', 'absorbance'],
        answer:
            'Both measure how much light a sample absorbs, and absorbance rises with concentration. ' +
            'Run standards of known concentration to build a calibration curve, then read the unknown from it. ' +
            'AAS is used for metal ions at trace levels, down to parts per million.',
    },
    {
        id: 'chem-mass-spectrometry',
        subject: 'chemistry',
        question: 'What does mass spectrometry tell me?',
        aliases: ['mass spectrometry', 'molecular ion peak', 'fragmentation', 'm/z', 'base peak'],
        answer:
            'It gives the mass-to-charge ratio of ions. ' +
            'The molecular ion peak, furthest right, gives the molar mass of the whole molecule, and the fragments ' +
            'below it indicate pieces of the structure. ' +
            'The tallest peak is the base peak, from the most stable fragment.',
    },
    {
        id: 'chem-alkene-addition',
        subject: 'chemistry',
        question: 'What are the addition reactions of alkenes?',
        aliases: ['addition reaction', 'hydrogenation', 'halogenation', 'hydration of alkenes', 'markovnikov', 'bromine water test'],
        answer:
            'The double bond opens and adds: hydrogen gives an alkane, a halogen gives a dihaloalkane, water with ' +
            'acid gives an alcohol, and a hydrogen halide gives a haloalkane. ' +
            'Markovnikov\u2019s rule says the hydrogen adds to the carbon that already has more hydrogens. ' +
            'Decolourising bromine water is the test for a double bond.',
    },
    {
        id: 'chem-carboxylic-acids',
        subject: 'chemistry',
        question: 'How do carboxylic acids behave?',
        aliases: ['carboxylic acid', 'cooh', 'weak acid organic', 'neutralisation organic', 'boiling point carboxylic'],
        answer:
            'They are weak acids: they ionise partially, neutralise bases to give a salt and water, and react with ' +
            'carbonates to give carbon dioxide. ' +
            'With an alcohol they form an ester. Strong hydrogen bonding gives them high boiling points for their size.',
    },
    {
        id: 'chem-aldehydes-ketones',
        subject: 'chemistry',
        question: 'What is the difference between an aldehyde and a ketone?',
        aliases: ['aldehyde', 'ketone', 'carbonyl', 'oxidation of alcohols products', 'tollens fehlings'],
        answer:
            'Both contain C=O. In an aldehyde it sits at the end of the chain, in a ketone within it. ' +
            'Primary alcohols oxidise to aldehydes then carboxylic acids; secondary alcohols give ketones, which ' +
            'resist further oxidation. That difference is what Tollens\u2019 and Fehling\u2019s tests detect.',
    },
    {
        id: 'chem-amines-amides',
        subject: 'chemistry',
        question: 'What are amines and amides?',
        aliases: ['amine', 'amide', 'nitrogen functional group', 'peptide link', 'polyamide'],
        answer:
            'Amines contain nitrogen bonded to carbon and are weak bases, accepting a proton on the lone pair. ' +
            'An amide forms when a carboxylic acid reacts with an amine, losing water. ' +
            'That amide link joins amino acids into proteins and monomers into polyamides such as nylon.',
    },
    {
        id: 'chem-homologous-trends',
        subject: 'chemistry',
        question: 'Why do boiling points rise along a homologous series?',
        aliases: ['homologous series trends', 'boiling point organic', 'solubility organic', 'chain length'],
        answer:
            'A longer carbon chain has more electrons, so dispersion forces are stronger and more energy is needed to ' +
            'separate the molecules. ' +
            'Solubility in water moves the other way: the polar functional group dissolves, the non-polar chain does ' +
            'not, so longer chains are less soluble.',
    },
    {
        id: 'chem-organic-technique',
        subject: 'chemistry',
        question: 'What are reflux, distillation and a separating funnel for?',
        aliases: ['reflux', 'fractional distillation', 'separating funnel', 'organic technique', 'purifying an ester'],
        answer:
            'Reflux heats a mixture for a long time without losing volatile substances, since vapour condenses and ' +
            'returns. ' +
            'Distillation then separates by boiling point. ' +
            'A separating funnel splits immiscible layers, such as an ester from the aqueous mixture it formed in.',
    },
    {
        id: 'chem-biofuels',
        subject: 'chemistry',
        question: 'How are biofuels made, and how do they compare with fossil fuels?',
        aliases: ['biofuel', 'fermentation', 'ethanol fuel', 'biodiesel', 'carbon neutral'],
        answer:
            'Fermentation converts glucose to ethanol and carbon dioxide using yeast; biodiesel comes from ' +
            'transesterifying plant oils. ' +
            'They are renewable and closer to carbon neutral, since the crop absorbs carbon dioxide as it grows, but ' +
            'they yield less energy per litre and compete with food crops for land.',
    },
    {
        id: 'chem-triglycerides',
        subject: 'chemistry',
        question: 'What are triglycerides and saponification?',
        aliases: ['triglyceride', 'fatty acid', 'saponification', 'saturated unsaturated fat', 'making soap'],
        answer:
            'A triglyceride is an ester of glycerol with three fatty acids. ' +
            'Saturated chains have no double bonds and pack tightly, so those fats are solid; unsaturated ones kink ' +
            'and stay liquid. ' +
            'Saponification is base hydrolysis of a triglyceride, giving soap and glycerol.',
    },
    {
        id: 'chem-ozone-acid-rain',
        subject: 'chemistry',
        question: 'What causes ozone depletion and acid rain?',
        aliases: ['ozone depletion', 'cfc', 'ozone hole', 'acid rain', 'nox sox'],
        answer:
            'Ultraviolet light splits chlorine from CFCs, and each chlorine radical destroys many ozone molecules ' +
            'before it is removed, which is why the Montreal Protocol banned them. ' +
            'Acid rain comes from sulfur and nitrogen oxides dissolving to form sulfuric and nitric acids.',
    },
];
