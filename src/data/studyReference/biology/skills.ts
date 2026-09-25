/**
 * Biology: Working Scientifically.
 *
 * Designing biological investigations and presenting their data.
 */
import type { StudyEntry } from '../types';

export const biologySkillsEntries: StudyEntry[] = [
    {
        id: 'bio-scientific-method-bio',
        subject: 'biology',
        question: 'How do I write a hypothesis and design a biology experiment?',
        aliases: ['hypothesis', 'controlled experiment', 'depth study', 'variables biology', 'sample size'],
        answer:
            'A hypothesis is a testable prediction linking the independent and dependent variables. ' +
            'Control every other variable, use a control group, and keep the sample large enough for the result to ' +
            'mean something. Living things vary, so repeats matter more here than in physics.',
    },
    {
        id: 'bio-depth-study-data',
        subject: 'biology',
        question: 'How do I analyse a set of results?',
        aliases: ['analysing results', 'mean and range', 'anomalous results', 'interpreting a trend'],
        answer:
            'Calculate a mean from the repeats and note the range, then describe the pattern using figures from your ' +
            'own results. ' +
            'Explain it with biology rather than restating the numbers. ' +
            'Identify anomalies and say what might have caused them rather than quietly dropping them.',
    },
    {
        id: 'bio-graphing-biology',
        subject: 'biology',
        question: 'How should I present biological data?',
        aliases: ['graphing biology', 'choosing a graph', 'error bars biology', 'tables of results', 'trends in data'],
        answer:
            'Put the independent variable on the x-axis, label both axes with units, and choose a line graph for ' +
            'continuous data or a column graph for categories. ' +
            'Plot means from repeats, show the spread if you can, and describe the trend with figures from your own ' +
            'data before explaining it.',
    },
    {
        id: 'bio-controls-biology',
        subject: 'biology',
        question: 'Why does a biology experiment need a control?',
        aliases: ['control group', 'controlled experiment biology', 'placebo', 'comparison group'],
        answer:
            'A control provides the comparison that shows the change came from the variable you altered rather than ' +
            'from something else. ' +
            'In trials a placebo group controls for the effect of believing you are treated, and blinding stops ' +
            'expectations from shifting the measurements.',
    },
    {
        id: 'bio-ethics-animals',
        subject: 'biology',
        question: 'What ethical rules apply to biological investigations?',
        aliases: ['ethics biology', 'animal ethics', 'informed consent', 'working with living things'],
        answer:
            'Work with living things needs a justification, the minimum number of organisms, and care to avoid harm. ' +
            'Human participants must give informed consent and have their data kept private. ' +
            'School investigations usually substitute models or existing data where the ethical cost would be real.',
    },
    {
        id: 'bio-reliability-validity',
        subject: 'biology',
        question: 'What do reliability, validity and accuracy mean?',
        aliases: ['reliability', 'validity', 'accuracy biology', 'repeating a trial'],
        answer:
            'Reliable means repeating the method gives the same result, improved by more trials. ' +
            'Valid means the method actually tests the hypothesis, with only one variable changed. ' +
            'Accurate means close to the true value. ' +
            'A reliable experiment can still be invalid, which is the distinction markers look for.',
    },
    {
        id: 'bio-first-hand-secondary',
        subject: 'biology',
        question: 'What is the difference between a first-hand and a secondary-sourced investigation?',
        aliases: ['first hand investigation', 'secondary sourced data', 'primary data biology', 'using published data'],
        answer:
            'First-hand means you collect the data yourself, so you control the method and know its limitations. ' +
            'Secondary-sourced means you analyse data someone else gathered, which allows scales you could never ' +
            'reach, such as decades of rainfall, but requires you to judge the source.',
    },
    {
        id: 'bio-biological-drawing',
        subject: 'biology',
        question: 'How do I draw a biological diagram?',
        aliases: ['biological drawing', 'labelling a diagram', 'scale bar', 'drawing what you see'],
        answer:
            'Use a sharp pencil, clean unbroken lines and no shading, draw only what you can actually see, and make ' +
            'it large enough to label. ' +
            'Add a title, horizontal label lines that touch the structure, the magnification and a scale bar.',
    },
    {
        id: 'bio-qualitative-quantitative',
        subject: 'biology',
        question: 'What is the difference between qualitative and quantitative data?',
        aliases: ['qualitative data', 'quantitative data', 'descriptive observations', 'measured observations'],
        answer:
            'Quantitative data are numbers with units, which can be graphed and compared statistically. ' +
            'Qualitative data are descriptions such as colour change, texture or behaviour. ' +
            'Good investigations record both, since a colour change often explains what the numbers show.',
    },
    {
        id: 'bio-risk-assessment',
        subject: 'biology',
        question: 'How do I write a risk assessment?',
        aliases: ['risk assessment', 'hazard', 'lab safety biology', 'managing a risk'],
        answer:
            'List each hazard, state the harm it could cause, then give the control that reduces it. ' +
            'A hazard is the thing; the risk is how likely and how serious the harm. ' +
            'For living material, include handling, hygiene and safe disposal.',
    },
    {
        id: 'bio-fieldwork-error',
        subject: 'biology',
        question: 'What can go wrong when counting organisms in the field?',
        aliases: ['observer bias', 'sampling error', 'counting organisms', 'miscounting a quadrat'],
        answer:
            'Placing quadrats where the plants look interesting rather than at random, missing small or hidden ' +
            'organisms, counting the same mobile animal twice, and different observers judging cover differently. ' +
            'Random placement, an agreed counting rule and more samples all reduce these.',
    },
    {
        id: 'bio-source-reliability',
        subject: 'biology',
        question: 'How do I judge whether a source is reliable?',
        aliases: ['reliable source', 'peer reviewed', 'bias in a source', 'referencing'],
        answer:
            'Ask who wrote it, what expertise they have, who funded it, when it was published, and whether it was ' +
            'peer reviewed. ' +
            'Check whether other independent sources agree. ' +
            'A source with an interest in the conclusion is not useless, but it needs corroborating.',
    },
    {
        id: 'bio-model-limitations',
        subject: 'biology',
        question: 'Why do biological models have limitations?',
        aliases: ['model limitations', 'scientific model', 'why a model is simplified', 'analogy in biology'],
        answer:
            'A model deliberately simplifies to make something visible or calculable, so it always omits detail. ' +
            'A lock and key model of enzymes explains specificity but not flexibility. ' +
            'Naming what a model leaves out is usually the mark being awarded.',
    },
    {
        id: 'bio-choosing-a-sampling-method',
        subject: 'biology',
        question: 'Which sampling method suits which organism?',
        aliases: ['choosing a sampling method', 'quadrat or transect choice', 'sampling mobile animals'],
        answer:
            'Quadrats for plants and slow-moving organisms, transects where there is a gradient, capture-recapture ' +
            'for mobile animals, and traps or nets for insects and aquatic life. Match the method to how the organism ' +
            'moves.',
    },
    {
        id: 'bio-calculating-abundance',
        subject: 'biology',
        question: 'How do I estimate abundance from quadrat data?',
        aliases: ['estimating abundance', 'scaling up quadrat counts', 'percentage cover'],
        answer:
            'Find the mean count per quadrat, then multiply by the number of quadrat areas in the whole site. For ' +
            'plants, percentage cover is often more useful than counting individuals, since one plant may spread ' +
            'widely.',
    },
    {
        id: 'bio-capture-recapture-assumptions',
        subject: 'biology',
        question: 'What does capture-recapture assume?',
        aliases: ['capture recapture assumptions', 'lincoln index assumptions', 'why an estimate can be wrong'],
        answer:
            'That marks stay on and do not affect survival, that marked animals mix back in fully, and that no ' +
            'births, deaths or migration occur between the two catches. Breaking any of these biases the estimate.',
    },
    {
        id: 'bio-processing-biological-data',
        subject: 'biology',
        question: 'How do I process biological data before drawing a conclusion?',
        aliases: ['processing biological data', 'calculating a rate from data', 'means and ranges in biology'],
        answer:
            'Calculate means and a measure of spread, convert to a rate where time is involved, and present the data ' +
            'in the form the trend is clearest in. State the number of replicates, since a mean of two tells the ' +
            'reader little.',
    },
    {
        id: 'bio-statistical-significance-biology',
        subject: 'biology',
        question: 'What does it mean for a biological difference to be significant?',
        aliases: ['statistical significance in biology', 'is the difference real', 'overlapping error bars'],
        answer:
            'That it is unlikely to have arisen by chance given the variation in the data. If error bars overlap ' +
            'substantially, the difference between two means may be sampling variation rather than a real effect.',
    },
    {
        id: 'bio-choosing-a-graph-biology',
        subject: 'biology',
        question: 'Which graph should I use for biological data?',
        aliases: ['choosing a graph in biology', 'line or column graph biology', 'scatterplot for two variables'],
        answer:
            'A line graph where the independent variable is continuous, a column graph for categories, a scatterplot ' +
            'to look for a relationship between two measured variables, and a histogram for the distribution of one.',
    },
    {
        id: 'bio-using-secondary-data',
        subject: 'biology',
        question: 'How do I use secondary data well in a depth study?',
        aliases: ['using secondary data', 'citing a data source', 'combining data sets'],
        answer:
            'Record where each data set came from and when, check the method behind it, and do not combine data ' +
            'collected by incompatible methods. Then analyse it rather than reproducing it, which is where the marks ' +
            'are.',
    },
    {
        id: 'bio-writing-a-biology-conclusion',
        subject: 'biology',
        question: 'How do I write a conclusion in biology?',
        aliases: ['writing a biology conclusion', 'answering the question with data', 'conclusion versus discussion'],
        answer:
            'Answer the question directly, quote the figures that support it, state the limitation that most affects ' +
            'confidence, and say what would be tested next. A conclusion that repeats the method has not concluded ' +
            'anything.',
    },
    {
        id: 'bio-ethics-in-fieldwork',
        subject: 'biology',
        question: 'What ethical issues arise in biological fieldwork?',
        aliases: ['fieldwork ethics', 'disturbing habitat', 'handling animals in the field', 'permits for collecting'],
        answer:
            'Minimising disturbance, returning organisms unharmed to where they were found, avoiding breeding ' +
            'seasons, obtaining permits, and respecting Aboriginal land and cultural sites. The default is to observe ' +
            'rather than collect.',
    },
    {
        id: 'bio-command-terms-biology',
        subject: 'biology',
        question: 'What do the biology command terms require?',
        aliases: ['biology command terms', 'explain versus describe', 'assess in biology'],
        answer:
            'Identify or outline needs the briefest correct statement, describe needs features, explain needs a cause ' +
            'or mechanism, compare needs both similarities and differences, and assess or evaluate needs a judgement ' +
            'with criteria.',
    },
];
