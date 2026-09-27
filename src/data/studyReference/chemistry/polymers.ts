/**
 * Chemistry Module 7: polymers and biological molecules.
 *
 * Addition and condensation polymers, why a polymer suits a use, and the
 * chemistry of proteins, carbohydrates, fats and soaps.
 */
import type { StudyEntry } from '../types';

export const chemistryPolymersEntries: StudyEntry[] = [
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
        id: 'chem-plastics-properties',
        subject: 'chemistry',
        question: 'Why do plastics have such different properties?',
        aliases: ['plastic properties', 'chain packing', 'cross linking', 'flexible or rigid plastic', 'side groups'],
        answer:
            'Chain length, branching, side groups and cross-linking decide how closely chains pack and how easily ' +
            'they slide. ' +
            'Close packing gives strength and rigidity; branching gives flexibility; cross-linking gives a rigid ' +
            'thermoset that cannot be remelted.',
    },
    {
        id: 'chem-polymer-properties-structure',
        subject: 'chemistry',
        question: 'How does polymer structure decide whether a plastic can be remelted?',
        aliases: ['thermoplastic', 'thermosetting plastic', 'cross links and remelting'],
        answer:
            'A thermoplastic has separate chains held by intermolecular forces, so heating lets them slide and it can ' +
            'be remoulded and recycled. A thermoset is cross-linked into one network, so heating decomposes rather ' +
            'than softens it.',
    },
    {
        id: 'chem-recycling-plastics',
        subject: 'chemistry',
        question: 'Why are some plastics hard to recycle?',
        aliases: ['recycling plastics', 'mixed plastic waste', 'why thermosets cannot be recycled'],
        answer:
            'Different polymers must be separated because they melt at different temperatures and do not mix, ' +
            'additives and dyes contaminate the melt, and cross-linked plastics cannot be melted at all.',
    },
    {
        id: 'chem-biopolymers',
        subject: 'chemistry',
        question: 'What are biopolymers?',
        aliases: ['biopolymer', 'polylactic acid', 'biodegradable plastic', 'cellulose as a polymer'],
        answer:
            'Polymers made by living things or from renewable feedstocks: cellulose, starch, proteins, and polylactic ' +
            'acid made from fermented plant sugar. ' +
            'Many are biodegradable because enzymes can break their ester or amide links, which carbon-carbon chains ' +
            'resist.',
    },
    {
        id: 'chem-amino-acids',
        subject: 'chemistry',
        question: 'What are amino acids and peptide bonds?',
        aliases: ['amino acid', 'peptide bond', 'zwitterion'],
        answer:
            'An amino acid carries both an amine and a carboxylic acid group, so it can act as either, and exists as a ' +
            'zwitterion at intermediate pH. ' +
            'The amine of one condenses with the acid of the next, releasing water and forming a peptide bond, which ' +
            'makes proteins condensation polymers.',
    },
    {
        id: 'chem-carbohydrates',
        subject: 'chemistry',
        question: 'What are carbohydrates chemically?',
        aliases: ['carbohydrate', 'glucose structure', 'glycosidic link', 'starch and cellulose difference'],
        answer:
            'Polyhydroxy aldehydes or ketones, usually ring-shaped, that join by condensation through glycosidic links. ' +
            'Starch and cellulose are both glucose polymers; the difference in how the rings are linked is why we can ' +
            'digest one and not the other.',
    },
    {
        id: 'chem-triglycerides',
        subject: 'chemistry',
        question: 'What are triglycerides and saponification?',
        aliases: ['triglyceride', 'fatty acid', 'saturated unsaturated fat', 'making soap'],
        answer:
            'A triglyceride is an ester of glycerol with three fatty acids. ' +
            'Saturated chains have no double bonds and pack tightly, so those fats are solid; unsaturated ones kink ' +
            'and stay liquid. ' +
            'Saponification is base hydrolysis of a triglyceride, giving soap and glycerol.',
    },
    {
        id: 'chem-saponification-detail',
        subject: 'chemistry',
        question: 'What happens during saponification?',
        aliases: ['saponification', 'making soap from fat', 'base hydrolysis of an ester'],
        answer:
            'A fat is hydrolysed by a strong base, giving glycerol and the salts of the fatty acids, which are soap. ' +
            'It is base hydrolysis of an ester, and unlike esterification it goes essentially to completion.',
    },
    {
        id: 'chem-soaps-detergents',
        subject: 'chemistry',
        question: 'How do soaps and detergents work?',
        aliases: ['soap', 'detergent', 'hydrophilic hydrophobic', 'surfactant'],
        answer:
            'A surfactant has a hydrophobic tail and a hydrophilic head, so it surrounds grease and lets water carry ' +
            'it away. Soap is made by saponification, boiling a fat with a strong base. ' +
            'Soap forms a scum in hard water, where synthetic detergents do not.',
    },
    {
        id: 'chem-detergent-vs-soap',
        subject: 'chemistry',
        question: 'Why do detergents work in hard water when soap does not?',
        aliases: ['detergent versus soap', 'soap scum in hard water', 'why detergents lather'],
        answer:
            'Soap forms an insoluble scum with the calcium and magnesium ions in hard water. Detergents have a ' +
            'different head group whose calcium salts stay soluble, so they lather and clean in hard water.',
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
];
