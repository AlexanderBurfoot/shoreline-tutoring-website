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
        aliases: ['food chain', 'food web', 'trophic levels', 'ecosystem'],
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
    {
        id: 'bio-ecological-pyramids',
        subject: 'biology',
        question: 'Why do ecological pyramids narrow towards the top?',
        aliases: ['pyramid of numbers', 'pyramid of biomass', 'inverted pyramid', 'comparing pyramids'],
        answer:
            'Because most of the energy at each level is lost as heat and in respiration, so less is available to the ' +
            'level above. ' +
            'A pyramid of biomass or energy therefore always narrows upward. ' +
            'A pyramid of numbers can look inverted, since one large tree supports thousands of insects.',
    },
    {
        id: 'bio-biomagnification',
        subject: 'biology',
        question: 'What is biomagnification?',
        aliases: ['biomagnification', 'bioaccumulation', 'ddt in food chain', 'toxins concentrating'],
        answer:
            'A substance the body cannot break down or excrete builds up in each organism, and a predator eats many ' +
            'prey, so the concentration multiplies at every level. ' +
            'Top predators end up with the highest load, which is why DDT thinned the eggshells of birds of prey.',
    },
    {
        id: 'bio-eutrophication',
        subject: 'biology',
        question: 'What is eutrophication?',
        aliases: ['eutrophication', 'algal bloom', 'fertiliser runoff', 'dissolved oxygen crash'],
        answer:
            'Fertiliser or sewage runoff adds nitrates and phosphates to water, algae multiply into a bloom, then die ' +
            'and are decomposed by bacteria that consume the dissolved oxygen. ' +
            'Fish and invertebrates suffocate, so the enrichment ends in a dead zone.',
    },
    {
        id: 'bio-keystone-species',
        subject: 'biology',
        question: 'What is a keystone species?',
        aliases: ['keystone species', 'trophic cascade', 'removing a top predator'],
        answer:
            'A species whose effect on a community is far larger than its abundance suggests. ' +
            'Removing it triggers a cascade: without sea otters, sea urchins strip the kelp forest, and every species ' +
            'that shelters there declines.',
    },
    {
        id: 'bio-niche-partitioning',
        subject: 'biology',
        question: 'How do similar species coexist?',
        aliases: ['niche partitioning', 'resource partitioning', 'competitive exclusion', 'fundamental and realised niche'],
        answer:
            'By dividing the resource: feeding at different heights, times or on different sizes of prey. ' +
            'Competitive exclusion says two species cannot occupy an identical niche indefinitely, so the realised ' +
            'niche each one actually uses is narrower than the range it could tolerate.',
    },
    {
        id: 'bio-water-cycle',
        subject: 'biology',
        question: 'How does water move through an ecosystem?',
        aliases: ['water cycle', 'evapotranspiration', 'groundwater', 'precipitation and runoff'],
        answer:
            'Evaporation from surfaces and transpiration from plants carry water into the air, where it condenses and ' +
            'falls as precipitation. ' +
            'Some runs off into rivers, some soaks down to groundwater, and plants draw it back up, so the same water ' +
            'circulates indefinitely.',
    },
    {
        id: 'bio-threatened-species-protection',
        subject: 'biology',
        question: 'How are threatened species protected?',
        aliases: ['threatened species', 'captive breeding', 'seed bank', 'national park protection', 'wildlife corridor'],
        answer:
            'By protecting habitat in reserves, linking fragments with corridors, controlling introduced predators, ' +
            'breeding in captivity for release, and storing genetic material in seed banks. ' +
            'Habitat protection matters most, since a captive population has nowhere to return to without it.',
    },
    {
        id: 'bio-habitat-fragmentation',
        subject: 'biology',
        question: 'Why does habitat fragmentation matter?',
        aliases: ['habitat fragmentation', 'edge effect', 'patch size', 'isolated populations'],
        answer:
            'Splitting one large habitat into patches cuts the interior area, exposes more edge to wind, weeds and ' +
            'predators, and isolates populations so they cannot interbreed. ' +
            'Small isolated groups lose genetic diversity and are far more likely to die out locally.',
    },
    {
        id: 'bio-invasive-species-australia',
        subject: 'biology',
        question: 'Why are cane toads and rabbits such a problem in Australia?',
        aliases: ['cane toad', 'rabbit plague', 'feral animals', 'biological control gone wrong'],
        answer:
            'They arrived without the predators, parasites and competitors that limited them at home, so numbers grew ' +
            'unchecked. ' +
            'Rabbits strip vegetation and cause erosion; cane toads poison native predators that try to eat them. ' +
            'Both were introductions intended to help.',
    },
    {
        id: 'bio-ecosystem-services',
        subject: 'biology',
        question: 'What do humans gain from functioning ecosystems?',
        aliases: ['ecosystem services', 'pollination service', 'natural capital', 'benefits from ecosystems'],
        answer:
            'Pollination of crops, clean water filtered through wetlands, soil formation, flood control, carbon ' +
            'storage, timber, fisheries and medicines. ' +
            'These are called ecosystem services because replacing them artificially, where it is possible at all, ' +
            'costs far more than protecting them.',
    },
    {
        id: 'bio-density-dependent-factors',
        subject: 'biology',
        question: 'What is the difference between density-dependent and density-independent factors?',
        aliases: ['density dependent', 'density independent', 'crowding and disease', 'drought effect on numbers'],
        answer:
            'Density-dependent factors bite harder as a population grows: competition for food, disease spreading ' +
            'through crowds, and predators attracted to abundance. ' +
            'Density-independent factors such as drought, fire and frost hit the same proportion whatever the ' +
            'population size.',
    },
    {
        id: 'bio-primary-productivity',
        subject: 'biology',
        question: 'What is primary productivity?',
        aliases: ['primary productivity', 'gross and net productivity', 'energy fixed by producers'],
        answer:
            'The rate at which producers convert light into chemical energy. Gross productivity is the total fixed; ' +
            'net productivity is what remains after the plants own respiration, and that is what supports every level ' +
            'above.',
    },
    {
        id: 'bio-food-web-disturbance',
        subject: 'biology',
        question: 'What happens to a food web when one species is removed?',
        aliases: ['removing a species from a food web', 'knock on effects in a web', 'food web disturbance'],
        answer:
            'Its predators lose a food source and its prey increase, and those changes spread. A web with many ' +
            'alternative links absorbs the loss better than a simple chain, which is one reason diversity confers ' +
            'stability.',
    },
    {
        id: 'bio-carrying-capacity-limits',
        subject: 'biology',
        question: 'What sets the carrying capacity of a habitat?',
        aliases: ['what limits carrying capacity', 'resource that runs out first', 'habitat capacity'],
        answer:
            'Whichever resource runs short first: food, water, nesting sites, territory or light. Raising everything ' +
            'except the limiting resource changes nothing, and carrying capacity itself shifts with the seasons.',
    },
    {
        id: 'bio-exponential-vs-logistic',
        subject: 'biology',
        question: 'What is the difference between exponential and logistic growth?',
        aliases: ['exponential growth curve', 'logistic growth curve', 's shaped population curve'],
        answer:
            'Exponential growth is unrestricted and gives a J shape. Logistic growth slows as resources become ' +
            'limiting and levels off at the carrying capacity, giving an S shape. Real populations often overshoot ' +
            'and oscillate around it.',
    },
    {
        id: 'bio-adaptations-to-climate',
        subject: 'biology',
        question: 'How do organisms cope with temperature extremes?',
        aliases: ['coping with heat', 'coping with cold', 'hibernation and torpor', 'countercurrent heat exchange'],
        answer:
            'Insulation, body size and shape, countercurrent blood flow in extremities, sheltering, migrating, and ' +
            'entering torpor or hibernation. Behaviour is usually the first response because it is the fastest.',
    },
    {
        id: 'bio-fire-ecology-australia',
        subject: 'biology',
        question: 'What role does fire play in Australian ecosystems?',
        aliases: ['fire ecology', 'cultural burning', 'seeds needing fire', 'regeneration after fire'],
        answer:
            'Many species need fire to release seed or clear competition, and the interval between fires shapes which ' +
            'species persist. Aboriginal cultural burning used frequent low-intensity fire, which produced a ' +
            'different mosaic from infrequent intense fire.',
    },
    {
        id: 'bio-restoration-ecology',
        subject: 'biology',
        question: 'How is a degraded ecosystem restored?',
        aliases: ['restoring an ecosystem', 'revegetation', 'removing weeds and pests'],
        answer:
            'Remove the cause of the damage, control introduced predators and weeds, replant with local species, ' +
            'restore the water regime, then monitor for years. Restoration rarely reproduces the original system ' +
            'exactly.',
    },
    {
        id: 'bio-monitoring-an-ecosystem',
        subject: 'biology',
        question: 'How is the health of an ecosystem monitored?',
        aliases: ['monitoring ecosystem health', 'indicator species', 'water quality as an indicator'],
        answer:
            'Repeated surveys of abundance and diversity at fixed sites, plus abiotic measurements and indicator ' +
            'species that are sensitive to change. Trends over years matter more than any single survey.',
    },
    {
        id: 'bio-competition-types',
        subject: 'biology',
        question: 'What is the difference between intraspecific and interspecific competition?',
        aliases: ['intraspecific competition', 'interspecific competition', 'competition within a species'],
        answer:
            'Intraspecific competition is between members of the same species, so it is the most intense, since their ' +
            'needs are identical. Interspecific competition is between species with overlapping needs, and it can end ' +
            'in exclusion or in partitioning.',
    },
    {
        id: 'bio-trophic-efficiency-consequences',
        subject: 'biology',
        question: 'Why are there so few top predators?',
        aliases: ['why few top predators', 'energy limits food chain length', 'why food chains are short'],
        answer:
            'Because roughly a tenth of the energy passes to each level, so the energy left after four or five ' +
            'transfers cannot support many individuals. That is also why eating plants feeds more people than eating ' +
            'meat.',
    },
];
