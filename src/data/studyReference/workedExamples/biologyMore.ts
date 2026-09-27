/**
 * Worked examples: biology, second set.
 *
 * The calculations and data readings biology asks for, each solved with the
 * numbers shown and checked. Written by hand and shown exactly as written, so
 * the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleBiologyMoreEntries: StudyEntry[] = [
    {
        id: 'bio-example-transpiration-rate',
        subject: 'biology',
        question: 'Can you show me a worked example of a transpiration rate?',
        aliases: ['worked example transpiration rate', 'example of a potometer calculation', 'rate of water loss example'],
        answer:
            'A potometer bubble moves 45 mm in 15 minutes through a tube of cross-sectional area 0.8 mm². The volume ' +
            'is 45 × 0.8 = 36 mm³, so the rate is 36 ÷ 15 = 2.4 mm³ per minute. State the conditions alongside it, ' +
            'since a rate without temperature and humidity cannot be compared.',
    },
    {
        id: 'bio-example-enzyme-rate-temperature',
        subject: 'biology',
        question: 'Can you show me a worked example of reading an enzyme rate graph?',
        aliases: ['worked example enzyme rate graph', 'example of optimum temperature from data', 'enzyme activity reading example'],
        answer:
            'Activity rises from 10 °C to a peak at 40 °C, then falls sharply to zero by 60 °C. The optimum is 40 °C. ' +
            'The rise and the fall have different causes: more kinetic energy on the way up, and denaturing on the way ' +
            'down, which is why the fall is steeper than the rise.',
    },
    {
        id: 'bio-example-enzyme-ph-optimum',
        subject: 'biology',
        question: 'Can you show me a worked example of comparing two enzymes by pH?',
        aliases: ['worked example enzyme ph optimum', 'example of comparing pepsin and trypsin', 'ph optimum comparison example'],
        answer:
            'One enzyme peaks at pH 2 and another at pH 8. The first suits the stomach and the second the small ' +
            'intestine, so each optimum matches where the enzyme works rather than being a property of enzymes in ' +
            'general. Link an optimum to its location to earn the second mark.',
    },
    {
        id: 'bio-example-osmosis-mass-change',
        subject: 'biology',
        question: 'Can you show me a worked example of percentage mass change in osmosis?',
        aliases: ['worked example percentage mass change', 'example of a potato in sucrose calculation', 'osmosis mass change example'],
        answer:
            'A potato cylinder starts at 4.20 g and ends at 3.78 g. The change is 3.78 − 4.20 = −0.42 g, so the ' +
            'percentage change is 0.42 ÷ 4.20 × 100 = 10% loss. Percentage change rather than raw mass is used so ' +
            'cylinders of different starting size can be compared.',
    },
    {
        id: 'bio-example-water-potential-direction',
        subject: 'biology',
        question: 'Can you show me a worked example of predicting the direction of water movement?',
        aliases: ['worked example direction of water movement', 'example of water potential comparison', 'which way does water move example'],
        answer:
            'A cell has water potential −800 kPa and sits in a solution at −400 kPa. Water moves from the higher, or ' +
            'less negative, potential to the lower, so it enters the cell and the cell swells. The more negative value ' +
            'is always the stronger pull.',
    },
    {
        id: 'bio-example-cell-count-haemocytometer',
        subject: 'biology',
        question: 'Can you show me a worked example of counting cells in a sample?',
        aliases: ['worked example counting cells', 'example of a cell count per millilitre', 'estimating cells in a culture example'],
        answer:
            'A grid square holds 40 cells and covers a volume of 1.0 × 10⁻⁴ mL. The concentration is 40 ÷ 1.0 × 10⁻⁴ = ' +
            '4.0 × 10⁵ cells per mL. If the sample was diluted ten times first, multiply back to give 4.0 × 10⁶ per mL.',
    },
    {
        id: 'bio-example-scale-bar',
        subject: 'biology',
        question: 'Can you show me a worked example of using a scale bar?',
        aliases: ['worked example scale bar', 'example of finding a real size from a micrograph', 'measuring from a scale bar example'],
        answer:
            'A scale bar labelled 10 μm measures 20 mm on the page, so 1 mm represents 0.5 μm. A cell measuring 35 mm ' +
            'across is therefore 35 × 0.5 = 17.5 μm. Work out what one millimetre stands for before measuring the ' +
            'structure.',
    },
    {
        id: 'bio-example-mitosis-index',
        subject: 'biology',
        question: 'Can you show me a worked example of a mitotic index?',
        aliases: ['worked example mitotic index', 'example of proportion of dividing cells', 'counting cells in mitosis example'],
        answer:
            'Of 250 cells counted, 30 are in a stage of mitosis. The mitotic index is 30 ÷ 250 = 0.12, or 12%. A ' +
            'higher index means a faster dividing tissue, which is why root tips and tumours are the usual examples.',
    },
    {
        id: 'bio-example-monohybrid-ratio-check',
        subject: 'biology',
        question: 'Can you show me a worked example of testing offspring numbers against an expected ratio?',
        aliases: ['worked example expected offspring ratio', 'example of comparing observed and expected', 'testing a genetic ratio example'],
        answer:
            'A cross predicts 3 tall to 1 short among 160 offspring, so the expected numbers are 120 and 40. The ' +
            'observed are 114 and 46. The difference of 6 is small relative to 160, so the data supports the ratio; a ' +
            'shortfall of 40 would not.',
    },
    {
        id: 'bio-example-incomplete-dominance',
        subject: 'biology',
        question: 'Can you show me a worked example of incomplete dominance?',
        aliases: ['worked example incomplete dominance', 'example of a blended phenotype cross', 'pink flower cross example'],
        answer:
            'Crossing a red and a white snapdragon gives all pink offspring, since neither allele masks the other. ' +
            'Crossing two pinks then gives 1 red, 2 pink and 1 white. The giveaway is three phenotypes in a ratio of ' +
            '1:2:1 rather than two in 3:1.',
    },
    {
        id: 'bio-example-multiple-alleles',
        subject: 'biology',
        question: 'Can you show me a worked example of a cross with multiple alleles?',
        aliases: ['worked example multiple alleles', 'example of an abo blood group cross', 'three allele cross example'],
        answer:
            'A parent with group AB crosses with one with group O. The AB parent passes either A or B, and the O parent ' +
            'passes O, so the children are group A or group B in equal proportion. Neither AB nor O can appear, which ' +
            'is what makes this cross informative.',
    },
    {
        id: 'bio-example-linkage-recombination',
        subject: 'biology',
        question: 'Can you show me a worked example of a recombination frequency?',
        aliases: ['worked example recombination frequency', 'example of gene linkage distance', 'map units example'],
        answer:
            'Of 1000 offspring, 80 show a recombinant combination. The recombination frequency is 80 ÷ 1000 = 8%, so ' +
            'the genes are about 8 map units apart. A frequency near 50% means the genes assort independently and are ' +
            'effectively unlinked.',
    },
    {
        id: 'bio-example-pedigree-carrier',
        subject: 'biology',
        question: 'Can you show me a worked example of deducing a carrier from a pedigree?',
        aliases: ['worked example deducing a carrier', 'example of working out a genotype from a family tree', 'pedigree carrier deduction example'],
        answer:
            'Two unaffected parents have an affected child, so the condition is recessive and both parents must be ' +
            'carriers. Since the affected child inherited one recessive allele from each, each parent is heterozygous. ' +
            'Start from any affected child of unaffected parents, because that case settles the inheritance pattern.',
    },
    {
        id: 'bio-example-sex-linked-probability-second',
        subject: 'biology',
        question: 'Can you show me a worked example of a sex-linked cross with a carrier mother?',
        aliases: ['worked example carrier mother cross', 'example of a cross with a carrier mother', 'carrier mother and unaffected father example'],
        answer:
            'A carrier mother and an unaffected father have children. Daughters receive a normal allele from the ' +
            'father, so none is affected, though half are carriers. Sons receive their only X from the mother, so half ' +
            'are affected. The answer differs by sex, so treat them separately.',
    },
    {
        id: 'bio-example-allele-frequency',
        subject: 'biology',
        question: 'Can you show me a worked example of calculating an allele frequency?',
        aliases: ['worked example allele frequency', 'example of counting alleles in a population', 'frequency of an allele example'],
        answer:
            'In 100 diploid individuals there are 200 alleles. If 32 are homozygous dominant and 46 heterozygous, the ' +
            'dominant alleles number 2 × 32 + 46 = 110, so the frequency is 110 ÷ 200 = 0.55. The recessive frequency ' +
            'is then 0.45, and the two must sum to 1.',
    },
    {
        id: 'bio-example-hardy-weinberg-carriers',
        subject: 'biology',
        question: 'Can you show me a worked example of finding the carrier frequency?',
        aliases: ['worked example carrier frequency', 'example of hardy weinberg for carriers', 'proportion of heterozygotes example'],
        answer:
            'One in 2500 people has a recessive condition, so q² = 0.0004 and q = 0.02. Then p is 0.98, and the ' +
            'carrier proportion is 2pq = 2 × 0.98 × 0.02 = 0.039, about 1 in 26. Carriers vastly outnumber affected ' +
            'individuals whenever the allele is rare.',
    },
    {
        id: 'bio-example-population-growth-rate',
        subject: 'biology',
        question: 'Can you show me a worked example of a population growth rate?',
        aliases: ['worked example population growth rate', 'example of births minus deaths', 'rate of population change example'],
        answer:
            'A population of 5000 has 240 births and 150 deaths in a year, with no migration. The increase is 240 − ' +
            '150 = 90, so the growth rate is 90 ÷ 5000 = 0.018, or 1.8% a year. Migration terms must be added where ' +
            'the population is not closed.',
    },
    {
        id: 'bio-example-doubling-time',
        subject: 'biology',
        question: 'Can you show me a worked example of a bacterial doubling time?',
        aliases: ['worked example doubling time', 'example of bacteria dividing over time', 'exponential growth of bacteria example'],
        answer:
            'Bacteria double every 20 minutes. In 3 hours there are 180 ÷ 20 = 9 doublings, so a starting population ' +
            'of 500 becomes 500 × 2⁹ = 500 × 512 = 256,000. Count the doublings first, then raise 2 to that power.',
    },
    {
        id: 'bio-example-biodiversity-index',
        subject: 'biology',
        question: 'Can you show me a worked example of comparing biodiversity between two sites?',
        aliases: ['worked example comparing biodiversity', 'example of species richness and evenness', 'biodiversity comparison example'],
        answer:
            'Site A has 5 species with 20 individuals each; site B has 5 species with 96, 1, 1, 1 and 1. Richness is ' +
            'the same at 5, but A is far more even, so A is the more diverse. Richness alone is not diversity, which ' +
            'is why an index weights abundance too.',
    },
    {
        id: 'bio-example-percentage-frequency',
        subject: 'biology',
        question: 'Can you show me a worked example of percentage frequency in quadrats?',
        aliases: ['worked example percentage frequency', 'example of frequency from quadrats', 'how often a species appears example'],
        answer:
            'A species appears in 14 of 40 quadrats. The percentage frequency is 14 ÷ 40 × 100 = 35%. Frequency ' +
            'records presence only, so a species in every quadrat scores 100% whether it is abundant or sparse, which ' +
            'is why cover is often measured as well.',
    },
    {
        id: 'bio-example-transect-zonation',
        subject: 'biology',
        question: 'Can you show me a worked example of interpreting a transect?',
        aliases: ['worked example interpreting a transect', 'example of zonation on a shore', 'reading a transect example'],
        answer:
            'Along a rocky shore transect, one species occupies 0 to 4 m from the low water mark and another 3 to 9 m. ' +
            'The overlap at 3 to 4 m is where they compete, and the pattern follows exposure time. A transect answers ' +
            'questions about change along a gradient, which a quadrat alone cannot.',
    },
    {
        id: 'bio-example-energy-transfer-efficiency',
        subject: 'biology',
        question: 'Can you show me a worked example of energy transfer efficiency?',
        aliases: ['worked example energy transfer efficiency', 'example of energy lost between trophic levels', 'ten percent rule example'],
        answer:
            'Producers hold 40,000 kJ m⁻² and the herbivores that eat them hold 3600 kJ m⁻². The efficiency is 3600 ÷ ' +
            '40000 × 100 = 9%. The missing energy went to respiration, heat and the parts not eaten, which is why food ' +
            'chains are short.',
    },
    {
        id: 'bio-example-net-primary-productivity',
        subject: 'biology',
        question: 'Can you show me a worked example of net primary productivity?',
        aliases: ['worked example net primary productivity', 'example of gross minus respiration', 'npp calculation example'],
        answer:
            'Gross primary productivity is 9000 kJ m⁻² a year and plant respiration uses 3400. Net primary ' +
            'productivity is 9000 − 3400 = 5600 kJ m⁻² a year, which is what remains available to consumers. Gross ' +
            'minus respiration, always in that order.',
    },
    {
        id: 'bio-example-cardiac-output-second',
        subject: 'biology',
        question: 'Can you show me a worked example of finding a stroke volume?',
        aliases: ['worked example stroke volume', 'example of cardiac output rearranged', 'stroke volume from cardiac output example'],
        answer:
            'Cardiac output is 5.6 L per minute at a heart rate of 70 beats per minute. Stroke volume is the output ' +
            'divided by the rate: 5.6 ÷ 70 = 0.08 L, which is 80 mL per beat. Rearranging rather than recalling the ' +
            'formula is enough here.',
    },
    {
        id: 'bio-example-breathing-rate',
        subject: 'biology',
        question: 'Can you show me a worked example of pulmonary ventilation?',
        aliases: ['worked example pulmonary ventilation', 'example of tidal volume times breathing rate', 'ventilation rate example'],
        answer:
            'Tidal volume is 0.5 L and the breathing rate is 14 breaths per minute. Ventilation is 0.5 × 14 = 7.0 L per ' +
            'minute. During exercise both factors rise, so the product rises much faster than either one alone.',
    },
    {
        id: 'bio-example-oxygen-dissociation',
        subject: 'biology',
        question: 'Can you show me a worked example of reading an oxygen dissociation curve?',
        aliases: ['worked example oxygen dissociation curve', 'example of haemoglobin saturation reading', 'bohr shift example'],
        answer:
            'At a partial pressure of 4 kPa the curve reads 60% saturation, and at 12 kPa it reads 98%. So between ' +
            'tissue and lung the haemoglobin unloads about 38% of its oxygen. Adding carbon dioxide shifts the curve ' +
            'right, so at 4 kPa it would read lower and release more.',
    },
    {
        id: 'bio-example-bmi',
        subject: 'biology',
        question: 'Can you show me a worked example of a body mass index?',
        aliases: ['worked example body mass index', 'example of a bmi calculation', 'bmi from height and mass example'],
        answer:
            'A person is 1.75 m tall and 72 kg. Body mass index is the mass over the height squared: 1.75² = 3.06, then ' +
            '72 ÷ 3.06 = 23.5. The index ignores muscle and frame, which is why it describes populations better than ' +
            'individuals.',
    },
    {
        id: 'bio-example-incidence-and-prevalence',
        subject: 'biology',
        question: 'Can you show me a worked example of incidence and prevalence?',
        aliases: ['worked example incidence and prevalence', 'example of new cases versus total cases', 'epidemiology rate example'],
        answer:
            'In a town of 20,000 there are 400 existing cases and 60 new ones this year. Prevalence is 400 ÷ 20000 = ' +
            '2%, and incidence is 60 ÷ 20000 = 0.3% a year. Prevalence counts everyone with the disease; incidence ' +
            'counts only the new.',
    },
    {
        id: 'bio-example-mortality-rate',
        subject: 'biology',
        question: 'Can you show me a worked example of a mortality rate?',
        aliases: ['worked example mortality rate', 'example of deaths per hundred thousand', 'death rate calculation example'],
        answer:
            'A disease causes 45 deaths in a population of 150,000. The rate is 45 ÷ 150000 = 0.0003, which is 30 per ' +
            '100,000. Rates are quoted per 100,000 so that populations of different sizes can be compared directly.',
    },
    {
        id: 'bio-example-vaccination-coverage',
        subject: 'biology',
        question: 'Can you show me a worked example of interpreting vaccination coverage?',
        aliases: ['worked example vaccination coverage', 'example of herd immunity threshold', 'coverage and outbreak example'],
        answer:
            'A disease needs 92% coverage for herd immunity, and a district reaches 87%. The 5% shortfall leaves enough ' +
            'susceptible people for transmission to continue, so outbreaks remain possible even though most are ' +
            'protected. Compare the figure to the threshold, not to 100%.',
    },
    {
        id: 'bio-example-gel-electrophoresis',
        subject: 'biology',
        question: 'Can you show me a worked example of reading a gel?',
        aliases: ['worked example reading a gel', 'example of gel electrophoresis interpretation', 'dna fragment size example'],
        answer:
            'A sample band sits between marker bands of 500 and 800 base pairs, nearer the 500. Smaller fragments ' +
            'travel further, so the band is roughly 600 base pairs. Read against the ladder rather than by absolute ' +
            'distance, since gels run differently each time.',
    },
    {
        id: 'bio-example-dna-profiling-match',
        subject: 'biology',
        question: 'Can you show me a worked example of interpreting a DNA profile?',
        aliases: ['worked example dna profile', 'example of comparing dna profiles', 'dna evidence interpretation example'],
        answer:
            'A crime sample shares every band with suspect two and only three with suspect one. That points to suspect ' +
            'two, though the strength of the claim depends on how common each band is. A partial match is evidence of ' +
            'nothing on its own, since relatives share bands.',
    },
    {
        id: 'bio-example-transcription-translation',
        subject: 'biology',
        question: 'Can you show me a worked example of transcribing and translating a sequence?',
        aliases: ['worked example transcription and translation', 'example of reading a codon table', 'dna to protein example'],
        answer:
            'The DNA template reads TAC CGA. Transcription pairs each base, giving the messenger sequence AUG GCU. ' +
            'Reading the codon table, AUG is the start codon for methionine and GCU codes for alanine. Transcribe ' +
            'first, then read in threes, never the DNA directly.',
    },
    {
        id: 'bio-example-mutation-effect',
        subject: 'biology',
        question: 'Can you show me a worked example of working out the effect of a mutation?',
        aliases: ['worked example effect of a mutation', 'example of a substitution versus a deletion', 'frameshift example'],
        answer:
            'In the sequence AUG GCU UUA, changing the final A to G alters one codon only, so at most one amino acid ' +
            'changes and may not change at all. Deleting a base instead shifts every codon after it, so the protein ' +
            'beyond that point is wrong. Count how many codons the change reaches.',
    },
    {
        id: 'bio-example-reading-a-cladogram',
        subject: 'biology',
        question: 'Can you show me a worked example of reading a cladogram?',
        aliases: ['worked example reading a cladogram', 'example of finding a common ancestor', 'phylogenetic tree reading example'],
        answer:
            'Species C and D join at a node closer to the tips than the node joining them to B. So C and D share a more ' +
            'recent common ancestor with each other than either does with B. Relatedness is read from where branches ' +
            'meet, never from how close the labels sit on the page.',
    },
    {
        id: 'bio-example-molecular-clock',
        subject: 'biology',
        question: 'Can you show me a worked example of a molecular clock estimate?',
        aliases: ['worked example molecular clock', 'example of dating a divergence', 'differences to time example'],
        answer:
            'Two species differ at 12 sites in a gene that changes at about 2 sites per million years along each ' +
            'lineage, so 4 per million years between them. The divergence is 12 ÷ 4 = 3 million years ago. Remember ' +
            'that change accumulates on both branches.',
    },
    {
        id: 'bio-example-selection-pressure',
        subject: 'biology',
        question: 'Can you show me a worked example of explaining a change in allele frequency?',
        aliases: ['worked example change in allele frequency', 'example of selection over generations', 'explaining a frequency shift example'],
        answer:
            'A resistant allele rises from 2% to 60% over ten generations of pesticide use. Explain in sequence: the ' +
            'variation already existed, the pesticide killed susceptible individuals, survivors bred, and the ' +
            'proportion carrying the allele rose. The pesticide selected the variation; it did not create it.',
    },
    {
        id: 'bio-example-comparing-two-treatments',
        subject: 'biology',
        question: 'Can you show me a worked example of comparing two treatments in an experiment?',
        aliases: ['worked example comparing two treatments', 'example of judging whether a difference matters', 'treatment comparison example'],
        answer:
            'Group A averages 24.0 mm with a range of 22 to 26; group B averages 25.0 mm with a range of 19 to 31. The ' +
            'means differ by 1 mm but the ranges overlap heavily, so the difference is not convincing. Compare the ' +
            'spread as well as the means before claiming an effect.',
    },
    {
        id: 'bio-example-control-choice',
        subject: 'biology',
        question: 'Can you show me a worked example of choosing a control?',
        aliases: ['worked example choosing a control', 'example of a suitable control group', 'what the control should be example'],
        answer:
            'To test whether an enzyme causes a colour change, the control is the same mixture with the enzyme boiled ' +
            'first, not a tube of water. Boiling removes only the variable being tested, leaving everything else the ' +
            'same, which is what makes the comparison fair.',
    },
    {
        id: 'bio-example-sample-size-justification',
        subject: 'biology',
        question: 'Can you show me a worked example of justifying a sample size?',
        aliases: ['worked example justifying a sample size', 'example of how many replicates', 'why repeat the experiment example'],
        answer:
            'Three leaves give readings of 4.1, 4.3 and 9.8 arbitrary units. With three values the outlier cannot be ' +
            'judged, so raise the count to ten: the mean becomes stable and an outlier can be identified rather than ' +
            'guessed at. More replicates reduce the effect of chance variation, not of a flawed method.',
    },
];
