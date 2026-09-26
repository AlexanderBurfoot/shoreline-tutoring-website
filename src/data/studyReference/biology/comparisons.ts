/**
 * Biology: the distinctions students most often blur.
 *
 * Pairs of processes and structures that are routinely confused, and what
 * actually separates them.
 */
import type { StudyEntry } from '../types';

export const biologyComparisonEntries: StudyEntry[] = [
    {
        id: 'bio-gene-versus-chromosome',
        subject: 'biology',
        question: 'What is the difference between a gene and a chromosome?',
        aliases: ['gene versus chromosome', 'how genes sit on chromosomes', 'locus'],
        answer:
            'A chromosome is one long DNA molecule with its packaging proteins; a gene is a section of it coding for ' +
            'a product. One human chromosome carries hundreds to thousands of genes, each at a fixed position called ' +
            'its locus.',
    },
    {
        id: 'bio-virus-versus-bacterium',
        subject: 'biology',
        question: 'What is the difference between a virus and a bacterium?',
        aliases: ['virus versus bacterium', 'are viruses cells'],
        answer:
            'A bacterium is a living cell that reproduces on its own and can be killed by antibiotics. A virus is not ' +
            'a cell, has no metabolism, and can only replicate inside a host cell, which is why antibiotics do ' +
            'nothing to it.',
    },
    {
        id: 'bio-vaccine-versus-antibiotic',
        subject: 'biology',
        question: 'What is the difference between a vaccine and an antibiotic?',
        aliases: ['vaccine versus antibiotic', 'prevention versus treatment', 'why a vaccine is not a cure'],
        answer:
            'A vaccine is given beforehand and trains the immune system to recognise a pathogen, so it prevents ' +
            'disease. An antibiotic is given during a bacterial infection and kills or halts the bacteria, so it ' +
            'treats disease. Neither substitutes for the other.',
    },
    {
        id: 'bio-inhalation-versus-respiration',
        subject: 'biology',
        question: 'What is the difference between breathing and respiration?',
        aliases: ['breathing versus respiration', 'inhalation and respiration', 'is breathing the same as respiration'],
        answer:
            'Breathing is the mechanical movement of air into and out of the lungs. Respiration is the chemical ' +
            'release of energy from glucose inside every cell. Breathing supplies the oxygen that cellular ' +
            'respiration uses, but the two are different processes.',
    },
    {
        id: 'bio-digestion-versus-absorption',
        subject: 'biology',
        question: 'What is the difference between digestion and absorption?',
        aliases: ['digestion versus absorption', 'breaking down and taking in', 'where absorption happens'],
        answer:
            'Digestion breaks large molecules into small ones, mechanically and by enzymes. Absorption moves those ' +
            'small molecules across the gut wall into the blood or lymph, mostly in the small intestine. Food is not ' +
            'nourishing until the second step has happened.',
    },
    {
        id: 'bio-dominant-versus-codominant',
        subject: 'biology',
        question: 'What is the difference between dominant and codominant?',
        aliases: ['dominant versus codominant', 'is codominance the same as dominance', 'both alleles showing'],
        answer:
            'With simple dominance the heterozygote looks identical to the homozygous dominant, so one allele is ' +
            'hidden. With codominance both alleles are fully expressed and both appear, as in roan coats or the AB ' +
            'blood group.',
    },
    {
        id: 'bio-transpiration-versus-translocation',
        subject: 'biology',
        question: 'What is the difference between transpiration and translocation?',
        aliases: ['transpiration versus translocation', 'xylem versus phloem transport', 'water and sugar movement'],
        answer:
            'Transpiration is the loss of water vapour from leaves, which pulls water up the xylem in one direction. ' +
            'Translocation is the movement of sugars through the phloem, which can travel either way and requires ' +
            'energy.',
    },
    {
        id: 'bio-cytoskeleton',
        subject: 'biology',
        question: 'What is the cytoskeleton?',
        aliases: ['cytoskeleton', 'microtubules', 'internal scaffolding of a cell'],
        answer:
            'A network of protein filaments giving the cell its shape, anchoring organelles, and providing tracks ' +
            'along which vesicles are moved. It also builds the spindle that separates chromosomes, so a cell could ' +
            'not divide without it.',
    },
    {
        id: 'bio-selective-permeability',
        subject: 'biology',
        question: 'What does selectively permeable mean?',
        aliases: ['selective permeability', 'selectively permeable membrane', 'why some molecules cross and others do not'],
        answer:
            'The membrane lets some substances through and not others. Small non-polar molecules pass straight ' +
            'through the lipid, water and ions need channels, and large or charged molecules need specific carriers, ' +
            'which is what lets a cell control its own contents.',
    },
    {
        id: 'bio-non-disjunction',
        subject: 'biology',
        question: 'What is non-disjunction?',
        aliases: ['non disjunction', 'chromosomes failing to separate', 'cause of trisomy'],
        answer:
            'A failure of chromosomes or chromatids to separate properly during meiosis, so a gamete carries one too ' +
            'many or too few. Fertilisation then gives a zygote with an abnormal number, as in trisomy 21.',
    },
    {
        id: 'bio-chromosomal-abnormality',
        subject: 'biology',
        question: 'What kinds of chromosomal abnormality are there?',
        aliases: ['chromosomal abnormality', 'deletion duplication inversion translocation', 'structural chromosome change'],
        answer:
            'Changes in number, from non-disjunction, and changes in structure: a deletion loses a section, a ' +
            'duplication repeats one, an inversion reverses one, and a translocation moves a section to a different ' +
            'chromosome. Each can disrupt many genes at once.',
    },
    {
        id: 'bio-water-potential',
        subject: 'biology',
        question: 'Why does water move into or out of a cell?',
        aliases: ['why water moves into a cell', 'direction of osmosis', 'water potential direction'],
        answer:
            'Water moves from where it is more concentrated to where it is less, meaning towards the more ' +
            'concentrated solute. So a cell in pure water gains water and a cell in strong sugar solution loses it, ' +
            'with no energy required either way.',
    },
    {
        id: 'bio-enzyme-specificity',
        subject: 'biology',
        question: 'Why is an enzyme specific to one substrate?',
        aliases: ['enzyme specificity', 'why one enzyme one reaction'],
        answer:
            'Because the active site has a shape and a pattern of charges that fit one substrate. A different ' +
            'molecule cannot bind productively, which is why the body needs thousands of enzymes rather than a few ' +
            'general ones.',
    },
    {
        id: 'bio-denaturation',
        subject: 'biology',
        question: 'What is denaturation?',
        aliases: ['denaturation', 'denatured protein', 'why heat destroys enzymes'],
        answer:
            'The loss of a protein three-dimensional shape when the bonds holding it are broken by heat or extreme ' +
            'pH. Because function depends on shape, the protein stops working, and for most proteins the change ' +
            'cannot be reversed.',
    },
    {
        id: 'bio-atp-cycle',
        subject: 'biology',
        question: 'Why is ATP used rather than glucose directly?',
        aliases: ['why atp and not glucose', 'atp as an energy currency', 'atp adp cycle'],
        answer:
            'Glucose holds far more energy than any single process needs, and releasing it all at once would waste it ' +
            'as heat. ATP releases a small usable amount by losing one phosphate, and it is rebuilt continuously, so ' +
            'it acts as a rechargeable currency.',
    },
    {
        id: 'bio-active-transport-cost',
        subject: 'biology',
        question: 'Why does active transport need energy?',
        aliases: ['why active transport needs energy', 'pumping against the gradient', 'atp in transport'],
        answer:
            'Because it moves substances against their concentration gradient, which diffusion will not do. The pump ' +
            'protein changes shape using ATP, which is why cells doing a lot of pumping, such as in the nephron, are ' +
            'packed with mitochondria.',
    },
    {
        id: 'bio-cell-specialisation-cost',
        subject: 'biology',
        question: 'What is the trade-off in cell specialisation?',
        aliases: ['trade off in specialisation', 'why specialised cells cannot divide', 'differentiated cells'],
        answer:
            'A specialised cell performs one function efficiently but usually loses the ability to divide or become ' +
            'anything else. That is why the body keeps stem cells, and why damage to tissue with no stem population, ' +
            'such as heart muscle, is permanent.',
    },
    {
        id: 'bio-surface-area-adaptations',
        subject: 'biology',
        question: 'How do organisms increase exchange surface area?',
        aliases: ['increasing surface area for exchange', 'adaptations for exchange', 'folded surfaces in biology'],
        answer:
            'By folding and branching: villi and microvilli in the gut, alveoli in the lung, root hairs in soil, gill ' +
            'filaments in water, and the cristae inside a mitochondrion. Each solves the same problem of volume ' +
            'growing faster than surface.',
    },
    {
        id: 'bio-double-circulation-benefit',
        subject: 'biology',
        question: 'Why is a double circulation an advantage?',
        aliases: ['advantage of double circulation', 'why fish have single circulation', 'pressure in two circuits'],
        answer:
            'Blood is repressurised between the lungs and the body, so the body circuit can run at high pressure ' +
            'while the delicate lungs stay at low pressure. A fish with a single circuit loses pressure through the ' +
            'gills, which limits its delivery rate.',
    },
    {
        id: 'bio-counter-current',
        subject: 'biology',
        question: 'What is a counter-current exchange?',
        aliases: ['counter current exchange', 'gills counter current', 'why blood flows opposite to water'],
        answer:
            'Two fluids flowing in opposite directions, so a concentration difference is maintained along the whole ' +
            'length rather than equalising halfway. Fish gills use it to extract far more oxygen than parallel flow ' +
            'would allow.',
    },
    {
        id: 'bio-negative-feedback-example',
        subject: 'biology',
        question: 'How does negative feedback work in a concrete example?',
        aliases: ['negative feedback example', 'thermoregulation feedback loop', 'receptor effector example'],
        answer:
            'Skin and brain receptors detect a rise in body temperature, the hypothalamus acts as the control centre, ' +
            'and effectors respond: sweat glands secrete and vessels dilate. The temperature falls, the stimulus is ' +
            'removed, and the response stops.',
    },
    {
        id: 'bio-hormonal-versus-nervous-speed',
        subject: 'biology',
        question: 'Why are there two coordination systems?',
        aliases: ['why two coordination systems', 'nervous fast hormonal slow', 'comparing coordination systems'],
        answer:
            'The nervous system carries fast, brief, targeted signals for responses needing immediacy. The endocrine ' +
            'system carries slower, longer-lasting, widespread signals for processes such as growth and metabolism. ' +
            'Neither could do the other job efficiently.',
    },
    {
        id: 'bio-mutation-consequence',
        subject: 'biology',
        question: 'Why do most mutations have no effect?',
        aliases: ['why most mutations do nothing', 'silent mutation frequency', 'non coding dna mutation'],
        answer:
            'Most fall in non-coding DNA, and many within genes are silent because the genetic code is degenerate, so ' +
            'a different codon still specifies the same amino acid. Of those that do change a protein, many change it ' +
            'somewhere that does not matter.',
    },
    {
        id: 'bio-selection-speed',
        subject: 'biology',
        question: 'Why does bacterial resistance evolve so quickly?',
        aliases: ['why resistance evolves fast', 'bacterial generation time', 'speed of bacterial evolution'],
        answer:
            'Generations take minutes rather than years, populations number billions, mutation supplies variation ' +
            'constantly, and resistance genes pass sideways on plasmids. Selection therefore acts on enormous ' +
            'variation within days.',
    },
    {
        id: 'bio-vaccination-population',
        subject: 'biology',
        question: 'Why does vaccination protect people who are not vaccinated?',
        aliases: ['herd immunity explained', 'why unvaccinated people are protected', 'vaccination threshold'],
        answer:
            'Because each infection needs a susceptible person to pass to. When enough of the population is immune, ' +
            'chains of transmission break before reaching those who cannot be vaccinated. The threshold is higher for ' +
            'more contagious diseases.',
    },
    {
        id: 'bio-antigenic-variation',
        subject: 'biology',
        question: 'Why do I need a flu vaccination every year?',
        aliases: ['why flu vaccine changes', 'antigenic variation', 'influenza mutation'],
        answer:
            'Influenza changes its surface antigens rapidly, so the memory cells from last year no longer recognise ' +
            'this year strain. The vaccine is reformulated annually against the strains expected to circulate.',
    },
    {
        id: 'bio-epidemiological-evidence',
        subject: 'biology',
        question: 'How is a cause established in epidemiology?',
        aliases: ['establishing cause in epidemiology', 'strength of epidemiological evidence', 'criteria for causation'],
        answer:
            'By a strong and consistent association across different populations, a dose relationship, the exposure ' +
            'preceding the disease, a plausible biological mechanism, and the risk falling when exposure is removed. ' +
            'One study establishes none of this on its own.',
    },
    {
        id: 'bio-technology-and-diagnosis',
        subject: 'biology',
        question: 'How has technology changed diagnosis?',
        aliases: ['technology in diagnosis', 'imaging and genetic testing', 'earlier detection of disease'],
        answer:
            'Imaging finds structural disease before symptoms, blood markers detect organ damage early, and genetic ' +
            'testing identifies risk before onset. Each shifts treatment earlier, and each raises the question of ' +
            'what to do with a risk that may never become a disease.',
    },
    {
        id: 'bio-biodiversity-value',
        subject: 'biology',
        question: 'Why does biodiversity matter beyond conservation?',
        aliases: ['value of biodiversity', 'why species matter', 'biodiversity and resilience'],
        answer:
            'Diverse ecosystems absorb disturbance better, since another species can fill a role. They also supply ' +
            'pollination, water filtration, soil formation and the raw material for medicines, none of which is ' +
            'easily replaced once lost.',
    },
    {
        id: 'bio-classification-changes',
        subject: 'biology',
        question: 'Why does classification keep changing?',
        aliases: ['why classification changes', 'revising taxonomy', 'molecular data changing groups'],
        answer:
            'Because it is a hypothesis about relationships, not a filing system. Molecular comparison has revealed ' +
            'that some groups based on appearance were not related, so the groups were revised to match the evidence.',
    },
    {
        id: 'bio-evolution-evidence-combined',
        subject: 'biology',
        question: 'Why is the evidence for evolution considered so strong?',
        aliases: ['strength of evidence for evolution', 'multiple lines of evidence', 'why evolution is accepted'],
        answer:
            'Because independent lines agree: fossils in the order predicted, comparative anatomy and embryology, ' +
            'biogeography, molecular similarity, and observed selection in the present. Each could be questioned ' +
            'alone; together they point the same way.',
    },
];
