/**
 * Biology: plant structure, transport and adaptation.
 *
 * How plants move water and sugar, control gas exchange, and adapt to dry and
 * aquatic environments.
 */
import type { StudyEntry } from '../types';

export const biologyPlantsEntries: StudyEntry[] = [
    {
        id: 'bio-xylem-phloem-structure',
        subject: 'biology',
        question: 'How do xylem and phloem differ in structure?',
        aliases: ['xylem structure', 'phloem structure', 'dead and living transport tissue'],
        answer:
            'Xylem is made of dead hollow cells reinforced with lignin, forming continuous tubes for water moving up ' +
            'only. Phloem is living, with sieve plates and companion cells, and carries sugars in either direction.',
    },
    {
        id: 'bio-translocation',
        subject: 'biology',
        question: 'How does phloem move sugar?',
        aliases: ['translocation', 'source to sink', 'loading sugar into phloem'],
        answer:
            'Sugar is actively loaded at a source such as a leaf, which draws water in by osmosis and raises the ' +
            'pressure, so the contents flow to a sink where sugar is unloaded. Because loading is active, ' +
            'translocation needs ATP.',
    },
    {
        id: 'bio-stomata-control',
        subject: 'biology',
        question: 'How do stomata open and close?',
        aliases: ['stomata', 'guard cells', 'closing stomata in drought'],
        answer:
            'Guard cells take in potassium ions and then water, so they swell and bend apart, opening the pore. ' +
            'Losing those ions closes it. Plants close stomata in drought and at night, trading photosynthesis for ' +
            'water.',
    },
    {
        id: 'bio-leaf-adaptations',
        subject: 'biology',
        question: 'How is a leaf adapted for photosynthesis?',
        aliases: ['leaf adaptations', 'palisade layer', 'spongy mesophyll', 'thin flat leaf'],
        answer:
            'Broad and thin for light capture and short diffusion distances, a palisade layer packed with ' +
            'chloroplasts near the top, air spaces in the spongy mesophyll for gas movement, and stomata on the ' +
            'underside to limit water loss.',
    },
    {
        id: 'bio-xerophyte-adaptations',
        subject: 'biology',
        question: 'How are desert plants adapted?',
        aliases: ['xerophyte', 'reducing water loss in plants', 'succulent adaptations'],
        answer:
            'Thick waxy cuticles, sunken or fewer stomata, rolled or spine-like leaves, deep or wide roots, and water ' +
            'stored in fleshy tissue. Many also fix carbon at night, so stomata can stay closed through the heat of ' +
            'the day.',
    },
    {
        id: 'bio-hydrophyte-adaptations',
        subject: 'biology',
        question: 'How are water plants adapted?',
        aliases: ['hydrophyte', 'aquatic plant adaptations', 'air spaces in water plants'],
        answer:
            'Air spaces for buoyancy and gas storage, stomata on the upper surface where there is air, thin or absent ' +
            'cuticle, little supporting tissue since water provides support, and finely divided submerged leaves for ' +
            'gas exchange.',
    },
    {
        id: 'bio-plant-mineral-needs',
        subject: 'biology',
        question: 'Which minerals do plants need and why?',
        aliases: ['plant minerals', 'nitrate for plants', 'magnesium for chlorophyll'],
        answer:
            'Nitrate for amino acids and proteins, phosphate for DNA and ATP, potassium for enzyme function and ' +
            'stomata, and magnesium for chlorophyll. A deficiency shows as a characteristic pattern of yellowing or ' +
            'stunting.',
    },
    {
        id: 'bio-tropisms',
        subject: 'biology',
        question: 'How do tropisms work?',
        aliases: ['geotropism', 'auxin distribution'],
        answer:
            'Auxin accumulates on the shaded or lower side and promotes cell elongation there, so the shoot bends ' +
            'towards light or away from gravity. In roots the same hormone inhibits elongation, so roots bend the ' +
            'opposite way.',
    },
    {
        id: 'bio-seed-germination',
        subject: 'biology',
        question: 'What does a seed need to germinate?',
        aliases: ['germination', 'conditions for a seed to sprout', 'dormancy'],
        answer:
            'Water to activate enzymes, oxygen for respiration, and a suitable temperature. Light matters for some ' +
            'species. Dormancy holds the seed until conditions are right, which is why some seeds need fire or cold ' +
            'first.',
    },
    {
        id: 'bio-plant-reproduction-strategies',
        subject: 'biology',
        question: 'Why do plants use both sexual and asexual reproduction?',
        aliases: ['plant reproduction strategies', 'runners and tubers', 'why plants do both'],
        answer:
            'Asexual methods such as runners, tubers and bulbs colonise good conditions quickly with a proven ' +
            'genotype. Sexual reproduction through seeds gives variation and dispersal, which matters when conditions ' +
            'change.',
    },
    {
        id: 'bio-photosynthesis-limiting-factors-detail',
        subject: 'biology',
        question: 'Which factor limits photosynthesis at a given moment?',
        aliases: ['limiting factor at a moment', 'which factor is limiting photosynthesis', 'plateau on a rate graph'],
        answer:
            'The one in shortest supply: raising it increases the rate while raising the others does nothing. On a ' +
            'graph this shows as a rising section followed by a plateau where a different factor has become limiting.',
    },
    {
        id: 'bio-c4-and-cam',
        subject: 'biology',
        question: 'Why do some plants fix carbon differently?',
        aliases: ['c4 plants', 'cam plants', 'fixing carbon at night'],
        answer:
            'To reduce water loss and wasteful oxygen fixation in hot conditions. C4 plants concentrate carbon ' +
            'dioxide in specialised cells, and CAM plants collect it at night and use it by day with stomata closed.',
    },
];
