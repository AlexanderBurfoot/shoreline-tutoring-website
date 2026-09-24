/**
 * Chemistry, Year 12 Modules 7 and 8.
 *
 * Organic chemistry, and applying chemical ideas: synthesis, spectroscopy and
 * quantitative analysis.
 */
import type { StudyEntry } from '../types';

export const chemistryOrganicAnalysisEntries: StudyEntry[] = [
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
            'Chemical shift, in ppm relative to tetramethylsilane at 0, indicates what is nearby; read the ranges ' +
            'from the data sheet. ' +
            'In ¹H, integration gives how many hydrogens are in each environment, and a signal splits into n + 1 ' +
            'peaks where n is the number of hydrogens on the adjacent carbon.',
    },
    {
        id: 'chem-infrared',
        subject: 'chemistry',
        question: 'How do I read an infrared spectrum?',
        aliases: ['infrared spectroscopy', 'ir spectrum', 'absorption bands', 'functional group identification', 'wavenumber'],
        answer:
            'Bonds absorb infrared at characteristic wavenumbers, listed on the data sheet. ' +
            'A broad band around 3200 to 3550 cm⁻¹ suggests an alcohol O-H, a strong one around 1680 to 1750 cm⁻¹ ' +
            'suggests C=O, and a very broad band from about 2500 to 3400 cm⁻¹ is the O-H of a carboxylic acid. ' +
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
    {
        id: 'chem-tests',
        subject: 'chemistry',
        question: 'What are the common qualitative tests?',
        aliases: ['flame test', 'test for gases', 'qualitative analysis', 'precipitation test'],
        answer:
            'Flame tests identify metal ions by colour, such as lithium red, sodium yellow, potassium lilac and copper ' +
            'blue-green. Limewater turning milky shows carbon dioxide, a glowing splint relighting shows oxygen, and a ' +
            'popping splint shows hydrogen.',
    },
    {
        id: 'chem-ppm',
        subject: 'chemistry',
        question: 'What does parts per million mean?',
        aliases: ['ppm', 'parts per million', 'trace concentration', 'mg per litre'],
        answer:
            'One part per million is one milligram per litre in a dilute water solution, or one milligram per ' +
            'kilogram by mass. ' +
            'It is the usual unit for trace analysis, such as metal ions in drinking water measured by AAS.',
    },
    {
        id: 'chem-percentage-yield',
        subject: 'chemistry',
        question: 'How do I calculate percentage yield?',
        aliases: ['percentage yield', 'theoretical yield', 'actual yield', 'atom economy'],
        answer:
            'Percentage yield = actual ÷ theoretical × 100. ' +
            'Yields fall short because of side reactions, incomplete reaction, and losses in transferring and ' +
            'purifying. Atom economy asks a different question: what fraction of the reactant mass ends up in the ' +
            'product you want.',
    },
    {
        id: 'chem-structural-formulae',
        subject: 'chemistry',
        question: 'How do I read a structural formula?',
        aliases: ['structural formula', 'condensed formula', 'skeletal structure', 'drawing organic structures', 'general formula'],
        answer:
            'Find the longest continuous carbon chain, then the functional group hanging off it: those two give the ' +
            'name. A condensed formula groups each carbon with its hydrogens, and a skeletal one shows bonds as lines ' +
            'with carbons at the corners. Members of a homologous series differ by one CH₂ and share a general formula.',
    },
    {
        id: 'chem-reaction-pathways',
        subject: 'chemistry',
        question: 'How do I answer a reaction pathway question?',
        aliases: ['reaction pathway', 'flowchart organic', 'synthesis route', 'converting one compound to another', 'reagents and conditions'],
        answer:
            'Each arrow needs a reagent and a condition. The standard steps: alkene to alcohol by hydration with ' +
            'acid, alkane to haloalkane by halogen with ultraviolet light, haloalkane to alcohol by aqueous base, ' +
            'alcohol to aldehyde or acid by acidified dichromate, and acid plus alcohol to ester with concentrated ' +
            'sulfuric acid under reflux.',
    },
    {
        id: 'chem-oxidising-organics',
        subject: 'chemistry',
        question: 'What oxidises alcohols, and what do you see?',
        aliases: ['acidified dichromate', 'permanganate', 'oxidising agent organic', 'colour change oxidation', 'orange to green'],
        answer:
            'Acidified potassium dichromate turns from orange to green as it oxidises; acidified permanganate turns ' +
            'from purple to colourless. ' +
            'Primary alcohols oxidise to an aldehyde then a carboxylic acid, secondary to a ketone, and tertiary do ' +
            'not oxidise, which is how the three classes are told apart.',
    },
    {
        id: 'chem-functional-group-tests',
        subject: 'chemistry',
        question: 'How do I test which functional group a compound has?',
        aliases: ['chemical test functional group', 'bromine water test', 'test for an acid', 'distinguishing compounds', 'wet test'],
        answer:
            'Bromine water decolourising shows a carbon-carbon double bond. ' +
            'Fizzing with a carbonate shows a carboxylic acid. ' +
            'Acidified dichromate changing colour shows a primary or secondary alcohol, and no change points to ' +
            'tertiary. Say what you would observe, not just the reagent.',
    },
    {
        id: 'chem-boiling-point-classes',
        subject: 'chemistry',
        question: 'Why do boiling points differ between functional groups?',
        aliases: ['compare boiling points', 'boiling point across classes', 'why alcohols boil higher', 'solubility comparison'],
        answer:
            'At similar size, the order is alkane below aldehyde and ketone, below alcohol, below carboxylic acid. ' +
            'Alkanes have only dispersion forces, carbonyls add dipole-dipole, alcohols hydrogen bond, and acids ' +
            'hydrogen bond in pairs. Water solubility follows the same order and falls as the carbon chain lengthens.',
    },
    {
        id: 'chem-emission-spectra',
        subject: 'chemistry',
        question: 'What do emission and absorption spectra show in chemistry?',
        aliases: ['emission spectrum chemistry', 'absorption spectrum', 'spectral lines element', 'energy levels electron'],
        answer:
            'Electrons occupy discrete energy levels, so an atom emits or absorbs only certain wavelengths. ' +
            'The pattern is unique to the element, which is what flame tests show qualitatively and AAS measures ' +
            'quantitatively.',
    },
    {
        id: 'chem-complex-ions',
        subject: 'chemistry',
        question: 'What are complex ions and ligands?',
        aliases: ['complex ion', 'ligand', 'coloured solution', 'coordination', 'colorimetry colour'],
        answer:
            'A metal cation surrounded by ligands, which donate a lone pair to it. ' +
            'Many are strongly coloured, which is why forming one deliberately gives a solution enough colour to ' +
            'measure by colorimetry. Complex formation can also keep an ion in solution that would otherwise ' +
            'precipitate.',
    },
    {
        id: 'chem-first-nations-chemistry',
        subject: 'chemistry',
        question: 'How is Aboriginal and Torres Strait Islander Peoples\u2019 chemical knowledge examined?',
        aliases: ['aboriginal chemical knowledge', 'first nations chemistry', 'traditional processes', 'indigenous knowledge chemistry'],
        answer:
            'The syllabus asks you to analyse traditional practices as chemistry. ' +
            'Examples include leaching and repeated washing to remove toxic components from plant foods, and using ' +
            'naturally acidic or basic materials in preparation. ' +
            'Answer with the chemical process involved, such as dissolution or neutralisation, not just the practice.',
    },
    {
        id: 'chem-polymer-uses',
        subject: 'chemistry',
        question: 'Why is a particular polymer chosen for a use?',
        aliases: ['named polymers', 'hdpe ldpe', 'pvc', 'polystyrene', 'thermoplastic thermoset', 'recycling polymers', 'biodegradable'],
        answer:
            'Structure decides properties. Tightly packed straight chains, as in HDPE, give strength and rigidity; ' +
            'branched chains, as in LDPE, give flexibility. ' +
            'Thermoplastics soften on heating and can be remelted and recycled; thermosets are cross-linked and ' +
            'cannot. Most addition polymers resist breakdown, which is why disposal is the problem.',
    },
    {
        id: 'chem-alloys',
        subject: 'chemistry',
        question: 'Why is an alloy stronger than a pure metal?',
        aliases: ['alloy', 'steel', 'brass', 'metal properties', 'malleability alloy'],
        answer:
            'A pure metal has identical atoms in neat layers that slide easily, which is why it is soft and ductile. ' +
            'Adding atoms of a different size disrupts those layers, so they resist sliding and the alloy is harder ' +
            'and stronger, though usually less malleable.',
    },
    {
        id: 'chem-combustion-greenhouse',
        subject: 'chemistry',
        question: 'What is the difference between complete and incomplete combustion?',
        aliases: ['complete combustion', 'incomplete combustion', 'carbon monoxide', 'soot', 'greenhouse gas'],
        answer:
            'Complete combustion in plenty of oxygen gives carbon dioxide and water. ' +
            'Limited oxygen gives carbon monoxide, which is toxic, and carbon as soot, releasing less energy. ' +
            'Carbon dioxide, methane and water vapour absorb infrared radiation, which is the greenhouse effect.',
    },
    {
        id: 'chem-ester-hydrolysis',
        subject: 'chemistry',
        question: 'What is ester hydrolysis?',
        aliases: ['ester hydrolysis', 'breaking an ester', 'base hydrolysis', 'uses of esters'],
        answer:
            'Acid hydrolysis reverses esterification, giving back the carboxylic acid and alcohol, and is reversible. ' +
            'Base hydrolysis gives the carboxylate salt and the alcohol, and is not reversible because the salt will ' +
            'not react back. Esters are used as flavours, fragrances and solvents.',
    },
    {
        id: 'chem-substitution-alkanes',
        subject: 'chemistry',
        question: 'How do alkanes react?',
        aliases: ['substitution reaction alkane', 'halogenation', 'uv light reaction', 'radical substitution'],
        answer:
            'Alkanes are unreactive apart from combustion and substitution. ' +
            'With a halogen and ultraviolet light, a hydrogen is replaced by a halogen atom, and because any hydrogen ' +
            'can go, a mixture of products forms. That is the contrast with addition to an alkene, which is fast and ' +
            'gives one product.',
    },
    {
        id: 'chem-precipitation-titration',
        subject: 'chemistry',
        question: 'What is a precipitation titration?',
        aliases: ['precipitation titration', 'silver nitrate titration', 'halide content', 'end point precipitate'],
        answer:
            'The titrant forms an insoluble product with the analyte, and the end point shows as a colour or ' +
            'precipitate change. ' +
            'Silver nitrate against a halide is the usual case. Convert the titre to moles, apply the ratio, then ' +
            'work back to the mass and percentage in the sample.',
    },
    {
        id: 'chem-water-quality',
        subject: 'chemistry',
        question: 'What is tested in water quality analysis?',
        aliases: ['water quality', 'dissolved oxygen', 'eutrophication', 'turbidity', 'total dissolved solids', 'hardness'],
        answer:
            'pH, dissolved oxygen, turbidity, total dissolved solids, hardness, and phosphate, nitrate and heavy ' +
            'metal ions. ' +
            'Excess nutrients cause eutrophication: algae bloom, then decay and consume the oxygen, killing fish. ' +
            'Metal ions at trace levels are measured by AAS in parts per million.',
    },
];
