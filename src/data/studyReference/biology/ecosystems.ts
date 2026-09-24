/**
 * Biology Module 4: Ecosystem Dynamics.
 *
 * Populations, energy flow and how ecosystems change over time.
 */
import type { StudyEntry } from '../types';

export const biologyEcosystemsEntries: StudyEntry[] = [
    {
        id: 'bio-biodiversity-ecosystems',
        subject: 'biology',
        question: 'How do ecosystems and food chains work?',
        aliases: ['food chain', 'food web', 'trophic levels', 'ecosystem', 'biodiversity', 'energy flow'],
        answer:
            'Producers capture light energy, and each trophic level passes on roughly ten per cent of it, which is ' +
            'why chains are short. Decomposers return nutrients to the soil. ' +
            'Greater biodiversity generally makes an ecosystem more resilient to change.',
    },
    {
        id: 'bio-population-dynamics',
        subject: 'biology',
        question: 'What affects population size?',
        aliases: ['population dynamics', 'carrying capacity', 'limiting factors', 'predator prey', 'exponential growth population'],
        answer:
            'Births and immigration raise it; deaths and emigration lower it. ' +
            'Growth is exponential while resources allow, then levels off at the carrying capacity. ' +
            'Limiting factors may be density-dependent, such as disease and competition, or independent, such as fire.',
    },
    {
        id: 'bio-energy-flow',
        subject: 'biology',
        question: 'How does energy flow through an ecosystem?',
        aliases: ['energy flow', 'trophic level', 'ten percent rule', 'pyramid of energy', 'food chain length'],
        answer:
            'Producers capture light energy, and roughly ten per cent passes to each next trophic level; the rest is ' +
            'lost as heat, in respiration and in uneaten parts. ' +
            'That loss limits chains to four or five levels and is why a pyramid of energy always narrows upward.',
    },
    {
        id: 'bio-nutrient-cycles',
        subject: 'biology',
        question: 'How do the carbon and nitrogen cycles work?',
        aliases: ['carbon cycle', 'nitrogen cycle', 'nitrogen fixation', 'decomposers', 'nutrient cycling'],
        answer:
            'Carbon moves between air, organisms and soil through photosynthesis, respiration, decay and combustion. ' +
            'Nitrogen is fixed from the air by bacteria or lightning, taken up by plants, passed along food chains ' +
            'and returned by decomposers, with denitrifying bacteria completing the loop.',
    },
    {
        id: 'bio-sampling-ecology',
        subject: 'biology',
        question: 'How do ecologists sample a population?',
        aliases: ['quadrat', 'transect', 'capture recapture biology', 'random sampling ecology', 'estimating population size'],
        answer:
            'Quadrats estimate abundance of stationary organisms, placed randomly to avoid bias, and a transect shows ' +
            'how distribution changes along a gradient. ' +
            'For mobile animals, capture-recapture estimates the population as the first catch times the second, ' +
            'divided by the number recaptured.',
    },
    {
        id: 'bio-succession',
        subject: 'biology',
        question: 'What is ecological succession?',
        aliases: ['succession', 'pioneer species', 'climax community', 'primary succession', 'secondary succession'],
        answer:
            'A community changes over time as each stage alters conditions for the next. ' +
            'Primary succession starts on bare rock with pioneer species that build soil; secondary succession starts ' +
            'where soil already exists, after fire or clearing, and is faster. ' +
            'It tends towards a relatively stable climax community.',
    },
    {
        id: 'bio-species-interactions',
        subject: 'biology',
        question: 'What are the types of relationship between species?',
        aliases: ['predation', 'competition', 'mutualism', 'parasitism', 'commensalism', 'symbiosis'],
        answer:
            'Competition harms both, predation and parasitism benefit one at the other\u2019s cost, commensalism ' +
            'benefits one without affecting the other, and mutualism benefits both. ' +
            'Interspecific competition is between species, intraspecific within one, and the second is usually ' +
            'fiercer since the needs are identical.',
    },
    {
        id: 'bio-human-impact',
        subject: 'biology',
        question: 'How do humans affect ecosystems?',
        aliases: ['human impact', 'habitat destruction', 'introduced species', 'pollution ecosystem', 'conservation'],
        answer:
            'Habitat clearing, pollution, overharvesting, introduced species and climate change all reduce ' +
            'biodiversity. ' +
            'Introduced species do damage because local species have no adaptations against them. ' +
            'Conservation responds with protected areas, captive breeding, seed banks and restoration.',
    },
    {
        id: 'bio-abiotic-biotic',
        subject: 'biology',
        question: 'What is the difference between abiotic and biotic factors?',
        aliases: ['abiotic factors', 'biotic factors', 'environmental factors', 'niche', 'habitat'],
        answer:
            'Abiotic factors are non-living, such as temperature, light, water, pH and salinity. ' +
            'Biotic factors are living, such as predators, competitors and disease. ' +
            'A habitat is where an organism lives; its niche is the role it plays and the conditions it needs.',
    },
];
