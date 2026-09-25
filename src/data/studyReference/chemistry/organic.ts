/**
 * Chemistry Module 7: Organic Chemistry.
 *
 * Hydrocarbons, functional groups, the reactions between them, and polymers.
 */
import type { StudyEntry } from '../types';

export const chemistryOrganicEntries: StudyEntry[] = [
    {
        id: 'chem-functional-groups',
        subject: 'chemistry',
        question: 'What are the main organic functional groups?',
        aliases: ['functional groups', 'alcohol', 'ester', 'homologous series'],
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
        aliases: ['soap', 'detergent', 'hydrophilic hydrophobic', 'surfactant', 'hard water'],
        answer:
            'A surfactant has a hydrophobic tail and a hydrophilic head, so it surrounds grease and lets water carry ' +
            'it away. Soap is made by saponification, boiling a fat with a strong base. ' +
            'Soap forms a scum in hard water, where synthetic detergents do not.',
    },
    {
        id: 'chem-alkene-addition',
        subject: 'chemistry',
        question: 'What are the addition reactions of alkenes?',
        aliases: ['addition reaction', 'hydrogenation', 'hydration of alkenes', 'markovnikov'],
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
        aliases: ['fractional distillation', 'separating funnel', 'organic technique', 'purifying an ester'],
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
        id: 'chem-alkanes-properties',
        subject: 'chemistry',
        question: 'What are alkanes and why are they unreactive?',
        aliases: ['alkanes', 'saturated hydrocarbon', 'cnh2n+2', 'why alkanes are unreactive', 'natural gas'],
        answer:
            'Alkanes are saturated hydrocarbons with only single bonds, general formula CₙH₂ₙ₊₂. ' +
            'The C-C and C-H bonds are strong and non-polar, so few reagents attack them, which is why they are ' +
            'useful as fuels and solvents but poor starting materials.',
    },
    {
        id: 'chem-alkenes-alkynes',
        subject: 'chemistry',
        question: 'What are alkenes and alkynes?',
        aliases: ['alkene', 'alkyne', 'unsaturated', 'double bond', 'triple bond', 'cnh2n'],
        answer:
            'Alkenes contain a carbon-carbon double bond, general formula CₙH₂ₙ; alkynes contain a triple bond, ' +
            'CₙH₂ₙ₋₂. ' +
            'Both are unsaturated and far more reactive than alkanes, since the extra bonds open readily in addition ' +
            'reactions.',
    },
    {
        id: 'chem-fractional-distillation',
        subject: 'chemistry',
        question: 'How is crude oil separated?',
        aliases: ['fractional distillation crude oil', 'fractions', 'petroleum', 'cracking', 'refinery'],
        answer:
            'Crude oil is heated and fed into a column that is hotter at the bottom. ' +
            'Each fraction condenses where the temperature matches its boiling range, so shorter chains rise higher. ' +
            'Cracking then breaks long chains into the shorter, more valuable ones, including alkenes for plastics.',
    },
    {
        id: 'chem-addition-polymerisation',
        subject: 'chemistry',
        question: 'How does addition polymerisation work?',
        aliases: ['addition polymerisation', 'monomer to polymer', 'repeating unit', 'polyethene formation'],
        answer:
            'Many alkene monomers open their double bonds and join end to end, losing nothing in the process. ' +
            'The repeating unit is drawn with the bonds extending beyond the brackets and n outside. ' +
            'Polyethene, polypropene, PVC and polystyrene are all made this way.',
    },
    {
        id: 'chem-condensation-polymers-detail',
        subject: 'chemistry',
        question: 'How do condensation polymers form?',
        aliases: ['condensation polymerisation', 'nylon formation', 'polyester formation', 'losing water polymer', 'monomers with two groups'],
        answer:
            'Each monomer carries two reactive groups, so a chain can grow at both ends, and a small molecule, ' +
            'usually water, is released at each link. ' +
            'A diacid with a diol gives a polyester; a diacid with a diamine gives a polyamide such as nylon. ' +
            'Proteins form the same way from amino acids.',
    },
    {
        id: 'chem-safety-organic',
        subject: 'chemistry',
        question: 'What safety precautions matter in organic chemistry?',
        aliases: ['safety organic chemistry', 'flammable', 'fume cupboard', 'risk assessment chemistry', 'msds'],
        answer:
            'Most organic solvents are volatile and flammable, so heat with a water bath rather than a flame and work ' +
            'in a fume cupboard. ' +
            'Concentrated acids are corrosive and their dilution is strongly exothermic. ' +
            'A risk assessment names each hazard, its risk and the control for it.',
    },
];
