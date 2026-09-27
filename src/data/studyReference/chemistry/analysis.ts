/**
 * Chemistry Module 8: Applying Chemical Ideas.
 *
 * Identifying ions and compounds, spectroscopy, and quantitative analysis.
 */
import type { StudyEntry } from '../types';

export const chemistryAnalysisEntries: StudyEntry[] = [
    {
        id: 'chem-analysis-techniques',
        subject: 'chemistry',
        question: 'Which analysis technique should I use?',
        aliases: ['which technique', 'choosing an analysis technique', 'instrumental analysis', 'identifying a compound'],
        answer:
            'Match the technique to the question. Molar mass and fragments: mass spectrometry. Functional groups: ' +
            'infrared. Carbon and hydrogen skeleton: NMR. Concentration of a metal ion: AAS. ' +
            'Separating a mixture first: chromatography. Structure questions usually need two of them together.',
    },
    {
        id: 'chem-monitoring-atmosphere',
        subject: 'chemistry',
        question: 'How is the atmosphere monitored?',
        aliases: ['monitoring the atmosphere', 'cfcs', 'air pollutants', 'measuring gases in air'],
        answer:
            'Gases are identified and measured by the infrared and ultraviolet wavelengths they absorb, which is how ' +
            'carbon dioxide, methane and ozone are tracked from the ground and from satellites. ' +
            'Chlorine radicals from CFCs destroy ozone catalytically, so a small amount does lasting damage.',
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
        aliases: ['nmr', 'proton nmr', 'chemical shift', 'splitting', 'n + 1 rule'],
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
        aliases: ['aas', 'atomic absorption spectroscopy', 'uv visible', 'absorbance'],
        answer:
            'Both measure how much light a sample absorbs, and absorbance rises with concentration. ' +
            'Run standards of known concentration to build a calibration curve, then read the unknown from it. ' +
            'AAS is used for metal ions at trace levels, down to parts per million.',
    },
    {
        id: 'chem-mass-spectrometry',
        subject: 'chemistry',
        question: 'What does mass spectrometry tell me?',
        aliases: ['mass spectrometry', 'molecular ion peak', 'fragmentation', 'm/z', 'base peak', 'mass spectrometer', 'ms spectrum'],
        answer:
            'It gives the mass-to-charge ratio of ions. ' +
            'The molecular ion peak, furthest right, gives the molar mass of the whole molecule, and the fragments ' +
            'below it indicate pieces of the structure. ' +
            'The tallest peak is the base peak, from the most stable fragment.',
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
        aliases: ['ppm', 'trace concentration'],
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
        aliases: ['water quality', 'turbidity', 'total dissolved solids', 'hardness'],
        answer:
            'pH, dissolved oxygen, turbidity, total dissolved solids, hardness, and phosphate, nitrate and heavy ' +
            'metal ions. ' +
            'Excess nutrients cause eutrophication: algae bloom, then decay and consume the oxygen, killing fish. ' +
            'Metal ions at trace levels are measured by AAS in parts per million.',
    },
    {
        id: 'chem-calibration-curves',
        subject: 'chemistry',
        question: 'How do I use a calibration curve?',
        aliases: ['calibration curve', 'standards', 'absorbance concentration graph', 'reading an unknown'],
        answer:
            'Measure the absorbance of several standards of known concentration and plot absorbance against ' +
            'concentration, which should be a straight line through the origin. ' +
            'Read the unknown\u2019s concentration from its absorbance on that line, and dilute any sample that ' +
            'falls beyond the highest standard.',
    },
    {
        id: 'chem-identifying-unknown',
        subject: 'chemistry',
        question: 'How do I identify an unknown organic compound?',
        aliases: ['identifying an unknown', 'combining spectra', 'structure determination', 'deducing a structure'],
        answer:
            'Take the molecular mass from the mass spectrum, the functional group from infrared, and the carbon and ' +
            'hydrogen environments from NMR, using integration and splitting to place them. ' +
            'Combine the three: no single technique settles a structure, and the answer should cite evidence from ' +
            'each.',
    },
    {
        id: 'chem-carbon-13-nmr',
        subject: 'chemistry',
        question: 'What does carbon-13 NMR show?',
        aliases: ['carbon 13 nmr', 'c13 spectrum', 'number of carbon environments'],
        answer:
            'One peak for each carbon environment, with the shift indicating what the carbon is attached to: around ' +
            '170 to 180 ppm for a carbonyl carbon, 50 to 70 for a carbon bonded to oxygen, and under 50 for a plain ' +
            'alkyl carbon. ' +
            'Counting peaks tests a proposed structure quickly.',
    },
    {
        id: 'chem-nmr-integration',
        subject: 'chemistry',
        question: 'What does the integration trace on an NMR spectrum show?',
        aliases: ['integration', 'peak area ratio', 'how many hydrogens in a peak'],
        answer:
            'Area is proportional to the number of hydrogens in that environment, so the ratio of areas gives the ' +
            'ratio of hydrogens. ' +
            'A 3:2:1 set of areas in ethanol matches CH₃, CH₂ and OH, which together with the shifts fixes the ' +
            'structure.',
    },
    {
        id: 'chem-mass-spec-fragments',
        subject: 'chemistry',
        question: 'What do the fragments in a mass spectrum tell me?',
        aliases: ['fragmentation pattern', 'm/z fragments'],
        answer:
            'The peak at the highest m/z is usually the molecular ion, giving the molar mass. ' +
            'Differences between peaks name the pieces lost: 15 for CH₃, 17 for OH, 29 for CHO or C₂H₅. ' +
            'Those losses point to which groups the molecule contains.',
    },
    {
        id: 'chem-chromatography',
        subject: 'chemistry',
        question: 'How does chromatography separate a mixture?',
        aliases: ['chromatography', 'retention factor', 'rf value', 'stationary and mobile phase'],
        answer:
            'Components distribute themselves between a stationary phase and a moving solvent, and the ones held less ' +
            'tightly travel further. ' +
            'Rf is the distance moved by the spot divided by the distance moved by the solvent, and it is constant for ' +
            'a substance in a given system.',
    },
    {
        id: 'chem-colorimetry',
        subject: 'chemistry',
        question: 'How does colorimetry measure concentration?',
        aliases: ['colorimetry', 'absorbance and concentration', 'beer lambert'],
        answer:
            'A coloured solution absorbs light in proportion to its concentration, so absorbance measured at a fixed ' +
            'wavelength rises linearly with it. ' +
            'Standards give the calibration line, and the unknown is read from it. ' +
            'Very concentrated samples fall off the line and must be diluted.',
    },
    {
        id: 'chem-cation-identification',
        subject: 'chemistry',
        question: 'How are metal cations identified?',
        aliases: ['cation test', 'identifying a metal ion', 'flame test and precipitate'],
        answer:
            'Flame colour narrows it down, then selective precipitation confirms it: adding hydroxide or carbonate ' +
            'gives characteristic colours and solubilities, and some hydroxides redissolve in excess. ' +
            'AAS gives a quantitative answer where the tests only identify.',
    },
    {
        id: 'chem-anion-identification',
        subject: 'chemistry',
        question: 'How are anions identified?',
        aliases: ['anion test', 'carbonate test', 'sulfate test', 'chloride test'],
        answer:
            'Carbonate fizzes with acid and the gas turns limewater cloudy. ' +
            'Sulfate gives a white precipitate with barium that acid does not dissolve. ' +
            'Chloride gives a white precipitate with silver nitrate that darkens in light. ' +
            'Phosphate gives a yellow precipitate with ammonium molybdate.',
    },
    {
        id: 'chem-sample-dilution',
        subject: 'chemistry',
        question: 'Why are samples diluted before instrumental analysis?',
        aliases: ['diluting a sample', 'within the calibration range', 'dilution factor'],
        answer:
            'Because the linear response of an instrument covers a limited range, and a reading above it ' +
            'underestimates the concentration. ' +
            'Dilute into the middle of the range, then multiply the result by the dilution factor to recover the ' +
            'original concentration.',
    },
];
