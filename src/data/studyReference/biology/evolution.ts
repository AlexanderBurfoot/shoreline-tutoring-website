/**
 * Biology Module 4: evolution and the evidence for it.
 *
 * Selection, speciation, the kinds of evidence, and the misconceptions that
 * cost marks.
 */
import type { StudyEntry } from '../types';

export const biologyEvolutionEntries: StudyEntry[] = [
    {
        id: 'bio-selection-pressure',
        subject: 'biology',
        question: 'What is a selection pressure?',
        aliases: ['selection pressure', 'what drives natural selection', 'environmental pressure'],
        answer:
            'Any factor that makes survival or reproduction more likely for some variants than others: predators, ' +
            'disease, climate, competition or mate choice. It does not create variation, it only determines which ' +
            'existing variation persists.',
    },
    {
        id: 'bio-fitness-meaning',
        subject: 'biology',
        question: 'What does fitness mean in biology?',
        aliases: ['biological fitness', 'fittest does not mean strongest', 'reproductive success'],
        answer:
            'Reproductive success in a particular environment, not strength or health. A smaller, weaker organism ' +
            'that leaves more surviving offspring is fitter, and fitness changes when the environment does.',
    },
    {
        id: 'bio-adaptation-types',
        subject: 'biology',
        question: 'What are the kinds of adaptation?',
        aliases: ['structural adaptation', 'physiological adaptation', 'behavioural adaptation'],
        answer:
            'Structural features of the body, physiological processes inside it, and behaviour. A kangaroo licking ' +
            'its forearms is behavioural, its concentrated urine physiological, and its large ears structural.',
    },
    {
        id: 'bio-speciation-mechanisms',
        subject: 'biology',
        question: 'What are the ways a new species can form?',
        aliases: ['allopatric speciation', 'sympatric speciation', 'geographic isolation'],
        answer:
            'Allopatric speciation follows geographic separation, so gene flow stops and the populations diverge. ' +
            'Sympatric speciation happens without separation, through differences in timing, behaviour or chromosome ' +
            'number that prevent interbreeding.',
    },
    {
        id: 'bio-reproductive-isolation',
        subject: 'biology',
        question: 'What keeps two species from interbreeding?',
        aliases: ['reproductive isolation', 'isolating mechanisms', 'why species stay separate'],
        answer:
            'Breeding at different times or places, incompatible courtship or anatomy, gametes that will not fuse, or ' +
            'hybrids that are weak or sterile. Any of these stops gene flow, which is what defines them as separate ' +
            'species.',
    },
    {
        id: 'bio-evidence-dna-comparison',
        subject: 'biology',
        question: 'How does DNA comparison show relatedness?',
        aliases: ['dna comparison evidence', 'percentage similarity of dna', 'more differences more distant'],
        answer:
            'The more similar the base sequences, the more recently the lineages shared an ancestor, because ' +
            'differences accumulate over time. Comparing conserved genes lets even very distantly related organisms ' +
            'be placed.',
    },
    {
        id: 'bio-molecular-clock-use',
        subject: 'biology',
        question: 'How does a molecular clock estimate a divergence time?',
        aliases: ['molecular clock', 'estimating divergence time', 'rate of mutation over time'],
        answer:
            'Assuming mutations accumulate at a roughly steady rate, the number of differences between two species ' +
            'estimates how long since they diverged. It needs calibrating against fossils, and the rate differs ' +
            'between genes.',
    },
    {
        id: 'bio-fossil-record-limits',
        subject: 'biology',
        question: 'Why is the fossil record incomplete?',
        aliases: ['gaps in the fossil record', 'why fossils are rare', 'conditions for fossilisation'],
        answer:
            'Fossilisation needs rapid burial in the right sediment, so soft-bodied organisms and forest species are ' +
            'rarely preserved, and later geological activity destroys much of what formed. Absence of a fossil is ' +
            'therefore weak evidence of absence.',
    },
    {
        id: 'bio-dating-methods',
        subject: 'biology',
        question: 'How are fossils and rocks dated?',
        aliases: ['relative dating', 'absolute dating', 'radiometric dating of rock'],
        answer:
            'Relative dating uses the order of strata and index fossils. Absolute dating uses the decay of isotopes ' +
            'in the surrounding rock, choosing an isotope whose half-life suits the age being measured.',
    },
    {
        id: 'bio-australian-biogeography',
        subject: 'biology',
        question: 'What does Australian biodiversity show about evolution?',
        aliases: ['australian marsupials', 'biogeography', 'isolation of australia', 'gondwana'],
        answer:
            'Long isolation after Gondwana broke up let marsupials diversify into niches filled by placental mammals ' +
            'elsewhere. The resulting resemblances between unrelated species are convergent, not inherited.',
    },
    {
        id: 'bio-evolution-misconceptions',
        subject: 'biology',
        question: 'What are the common misconceptions about evolution?',
        aliases: ['misconceptions about evolution', 'evolution is not a ladder', 'individuals do not evolve'],
        answer:
            'That individuals evolve, when populations do; that organisms develop traits because they need them, when ' +
            'variation comes first; and that evolution progresses towards complexity, when it only tracks what ' +
            'reproduces in the current environment.',
    },
    {
        id: 'bio-gene-banks',
        subject: 'biology',
        question: 'Why are seed and gene banks kept?',
        aliases: ['gene bank', 'preserving genetic material'],
        answer:
            'To preserve genetic diversity that modern varieties have lost, as insurance against disease, climate ' +
            'change and extinction. Stored seed, pollen, semen and tissue can reintroduce alleles that no living ' +
            'population still carries.',
    },
];
