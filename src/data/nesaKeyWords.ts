/**
 * What the verb at the front of an exam question is asking for.
 *
 * NESA publishes a glossary of these key words and uses them deliberately, so
 * the difference between outline and explain is the difference between two and
 * six marks. Each answer here is written in our own words rather than quoted,
 * and says what a student should actually put on the page.
 *
 * Subject files carry the subject-specific advice, such as what explain
 * requires in chemistry. These entries are the plain definitions.
 */
import type { StudySkillEntry } from './studySkills';

export const nesaKeyWordEntries: StudySkillEntry[] = [
    {
        id: 'keyword-account',
        question: 'What does account for mean in an exam question?',
        aliases: ['account for', 'account for meaning', 'what account for means'],
        answer:
            'Give the reasons. Account for asks why something is the case, not what it is, so the answer needs a '
            + 'cause and effect stated. Used on its own, account means to state the features of something, but in '
            + 'exams it almost always appears as account for.',
    },
    {
        id: 'keyword-analyse',
        question: 'What does analyse mean in an exam question?',
        aliases: ['analyse', 'analyse meaning', 'analyze', 'what analyse means'],
        answer:
            'Break something into its parts and show how they relate. Naming the parts is only half of it: the marks '
            + 'come from the relationship between them and what that relationship implies. An answer that lists '
            + 'features without connecting them has described, not analysed.',
    },
    {
        id: 'keyword-apply',
        question: 'What does apply mean in an exam question?',
        aliases: ['apply', 'apply meaning', 'what apply means in a question'],
        answer:
            'Use what you know in the situation given. The marks are for the transfer, so the answer has to mention '
            + 'the specifics of the scenario rather than restating the general principle. A correct principle applied '
            + 'to nothing scores poorly.',
    },
    {
        id: 'keyword-appreciate',
        question: 'What does appreciate mean in an exam question?',
        aliases: ['appreciate', 'appreciate meaning', 'what appreciate means'],
        answer:
            'Show that you understand why something matters or what value it has. It asks for the significance of a '
            + 'thing, not a description of it, so the answer names a consequence or an implication.',
    },
    {
        id: 'keyword-assess',
        question: 'What does assess mean in an exam question?',
        aliases: ['assess', 'assess meaning', 'what assess means in a question'],
        answer:
            'Judge the size, value or quality of something and say how you reached that judgement. Assess needs a '
            + 'verdict supported by criteria. It sits close to evaluate, which asks for the same judgement with more '
            + 'weight on the criteria themselves.',
    },
    {
        id: 'keyword-calculate',
        question: 'What does calculate mean in an exam question?',
        aliases: ['calculate', 'calculate meaning', 'what calculate means'],
        answer:
            'Work out a numerical answer, showing the steps. Calculate expects arithmetic or algebra with working, a '
            + 'unit on the result, and sensible rounding. Even when a question says calculate, unsupported answers '
            + 'usually lose the method marks.',
    },
    {
        id: 'keyword-clarify',
        question: 'What does clarify mean in an exam question?',
        aliases: ['clarify', 'clarify meaning', 'what clarify means'],
        answer:
            'Make something plainer by explaining it more precisely or giving an example. Clarify assumes the idea is '
            + 'already on the table and asks you to remove the ambiguity in it, often by distinguishing it from '
            + 'something it is confused with.',
    },
    {
        id: 'keyword-classify',
        question: 'What does classify mean in an exam question?',
        aliases: ['classify', 'classify meaning', 'what classify means'],
        answer:
            'Sort things into groups on a stated basis. The basis matters as much as the groups, so name the criterion '
            + 'you are sorting on. Classifying without saying what the categories mean leaves the marker guessing.',
    },
    {
        id: 'keyword-compare',
        question: 'What does compare mean in an exam question?',
        aliases: ['compare', 'compare meaning', 'what compare means in a question'],
        answer:
            'Show how things are similar and how they differ. Compare wants both, addressed together rather than as '
            + 'two separate descriptions. Words such as whereas and both are what turn two paragraphs into a '
            + 'comparison.',
    },
    {
        id: 'keyword-construct',
        question: 'What does construct mean in an exam question?',
        aliases: ['construct', 'construct meaning', 'what construct means'],
        answer:
            'Build or draw something: a graph, a table, a diagram or an argument. In maths and science it usually '
            + 'means produce the thing accurately, with axes labelled and scales even, because the construction '
            + 'itself carries the marks.',
    },
    {
        id: 'keyword-contrast',
        question: 'What does contrast mean in an exam question?',
        aliases: ['contrast', 'contrast meaning', 'what contrast means in a question'],
        answer:
            'Show the differences only. Unlike compare, contrast does not ask for similarities, so spending half the '
            + 'answer on what two things share wastes the space. Name the point of difference and both sides of it.',
    },
    {
        id: 'keyword-critically-analyse',
        question: 'What does critically analyse mean in an exam question?',
        aliases: ['critically analyse', 'critically evaluate', 'what critically means in a question', 'critically'],
        answer:
            'Critically adds a layer of judgement to the verb after it. Critically analyse means break it down and '
            + 'then judge the strength of what you found; critically evaluate means judge it and weigh how good the '
            + 'evidence for that judgement is. In both, the marks sit in the judgement, not the description.',
    },
    {
        id: 'keyword-deduce',
        question: 'What does deduce mean in an exam question?',
        aliases: ['deduce', 'deduce meaning', 'what deduce means', 'deduction in a question'],
        answer:
            'Reach a conclusion from the information given. Deduce expects you to show the reasoning that gets you '
            + 'there, using only what is in the question or what follows from it. A correct conclusion with no chain '
            + 'behind it rarely earns full marks.',
    },
    {
        id: 'keyword-define',
        question: 'What does define mean in an exam question?',
        aliases: ['define', 'define meaning', 'what define means in a question'],
        answer:
            'State precisely what a term means. A definition names the category the thing belongs to and what '
            + 'separates it from its neighbours. Examples do not substitute for a definition, though one may follow it.',
    },
    {
        id: 'keyword-demonstrate',
        question: 'What does demonstrate mean in an exam question?',
        aliases: ['demonstrate', 'demonstrate meaning', 'what demonstrate means'],
        answer:
            'Show something is the case, usually by example or by reasoning. Demonstrate asks for evidence rather '
            + 'than assertion, so the answer needs the worked instance or the specific case that makes the point '
            + 'undeniable.',
    },
    {
        id: 'keyword-describe',
        question: 'What does describe mean in an exam question?',
        aliases: ['describe', 'describe meaning', 'what describe means in a question'],
        answer:
            'State the features and characteristics. Describe asks what something is or what happens, not why, so a '
            + 'cause is not required and will not earn extra. Two or three precise features usually match a two or '
            + 'three mark allocation.',
    },
    {
        id: 'keyword-discuss',
        question: 'What does discuss mean in an exam question?',
        aliases: ['discuss', 'discuss meaning', 'what discuss means in a question'],
        answer:
            'Put forward points for and against, then arrive somewhere. Discuss is the invitation to show two sides, '
            + 'so a one-sided answer caps itself. Finish with a position rather than trailing off after the second '
            + 'viewpoint.',
    },
    {
        id: 'keyword-distinguish',
        question: 'What does distinguish mean in an exam question?',
        aliases: ['distinguish', 'distinguish meaning', 'what distinguish means', 'distinguish between'],
        answer:
            'Say what makes two things different. Distinguish wants the difference stated explicitly rather than left '
            + 'implicit in two descriptions, and in science it often wants the one test or feature that tells them '
            + 'apart.',
    },
    {
        id: 'keyword-evaluate',
        question: 'What does evaluate mean in an exam question?',
        aliases: ['evaluate', 'evaluate meaning', 'what evaluate means in a question'],
        answer:
            'Make a judgement against criteria and support it. An evaluation states what good would look like, '
            + 'measures the thing against that, and commits to a verdict. Listing advantages and disadvantages and '
            + 'stopping there is the most common way to lose these marks.',
    },
    {
        id: 'keyword-examine',
        question: 'What does examine mean in an exam question?',
        aliases: ['examine', 'examine meaning', 'what examine means in a question'],
        answer:
            'Look at something closely and in an ordered way. Examine asks you to investigate the detail of an issue '
            + 'and report what is there, which sits between describe and analyse in how much interpretation it wants.',
    },
    {
        id: 'keyword-explain',
        question: 'What does explain mean in an exam question?',
        aliases: ['explain', 'explain meaning', 'what explain means in a question'],
        answer:
            'Give the reason or the how. Explain asks for cause, mechanism or relationship, so the word because or '
            + 'its equivalent should appear in the thinking even if not in the sentence. Restating the phenomenon in '
            + 'other words is the commonest miss.',
    },
    {
        id: 'keyword-extract',
        question: 'What does extract mean in an exam question?',
        aliases: ['extract', 'extract meaning', 'what extract means in a question'],
        answer:
            'Pull the relevant information out of the material provided. Extract is a reading instruction: the answer '
            + 'is in the stimulus, and the marks are for selecting the right part of it rather than for adding '
            + 'knowledge of your own.',
    },
    {
        id: 'keyword-extrapolate',
        question: 'What does extrapolate mean in an exam question?',
        aliases: ['extrapolate', 'extrapolate meaning', 'what extrapolate means', 'extrapolation'],
        answer:
            'Extend a pattern beyond the data you have. On a graph it means continuing the line of best fit past the '
            + 'plotted points to read a value. Say that the estimate assumes the trend holds, because outside the '
            + 'measured range that assumption is doing the work.',
    },
    {
        id: 'keyword-identify',
        question: 'What does identify mean in an exam question?',
        aliases: ['identify', 'identify meaning', 'what identify means in a question'],
        answer:
            'Name or recognise it. Identify is the lowest demand verb, usually worth one mark, and a single word or '
            + 'short phrase is the whole answer. Writing a paragraph where identify was asked costs time and earns '
            + 'nothing extra.',
    },
    {
        id: 'keyword-interpret',
        question: 'What does interpret mean in an exam question?',
        aliases: ['interpret', 'interpret meaning', 'what interpret means in a question'],
        answer:
            'Draw meaning out of something. Interpret a graph or a table by saying what the numbers show about the '
            + 'situation, not by reading the numbers aloud. The answer should be a statement about the world, not '
            + 'about the axes.',
    },
    {
        id: 'keyword-investigate',
        question: 'What does investigate mean in an exam question?',
        aliases: ['investigate', 'investigate meaning', 'what investigate means'],
        answer:
            'Plan, carry out or work through an inquiry to find something out. In a written exam it usually means set '
            + 'out how you would find the answer, including what you would measure and what you would control.',
    },
    {
        id: 'keyword-justify',
        question: 'What does justify mean in an exam question?',
        aliases: ['justify', 'justify meaning', 'what justify means in a question', 'justification'],
        answer:
            'Give the reasons that support a conclusion or a choice. Justify presumes a position has been taken and '
            + 'asks why it is the right one, so the answer argues rather than describes, and where relevant says why '
            + 'the alternatives are weaker.',
    },
    {
        id: 'keyword-outline',
        question: 'What does outline mean in an exam question?',
        aliases: ['outline', 'outline meaning', 'what outline means in a question'],
        answer:
            'Sketch the main features in brief. Outline asks for the shape of something without the detail, so a few '
            + 'sentences covering the key points is the whole answer. It is not an invitation to explain.',
    },
    {
        id: 'keyword-predict',
        question: 'What does predict mean in an exam question?',
        aliases: ['predict', 'predict meaning', 'what predict means in a question', 'prediction'],
        answer:
            'Say what will happen and, where the marks allow, why. Predict expects a definite outcome based on a '
            + 'principle or a trend rather than a guess, and the reasoning is what separates a prediction from a '
            + 'hope.',
    },
    {
        id: 'keyword-propose',
        question: 'What does propose mean in an exam question?',
        aliases: ['propose', 'propose meaning', 'what propose means in a question'],
        answer:
            'Put forward a course of action, a plan or an explanation for consideration. Propose asks you to suggest '
            + 'something workable and say enough about it that its merits can be judged. A bare suggestion with no '
            + 'reasoning is half an answer.',
    },
    {
        id: 'keyword-recall',
        question: 'What does recall mean in an exam question?',
        aliases: ['recall', 'recall meaning', 'what recall means in a question'],
        answer:
            'State remembered facts. Recall is a low demand verb like identify: give the information without '
            + 'explaining or justifying it. It appears where a question is testing knowledge rather than reasoning.',
    },
    {
        id: 'keyword-recommend',
        question: 'What does recommend mean in an exam question?',
        aliases: ['recommend', 'recommend meaning', 'what recommend means in a question'],
        answer:
            'Advise on a course of action and say why it is the best available. Recommend needs a single clear '
            + 'choice, the reason it wins, and usually a word on what it was chosen over. Hedging between two options '
            + 'is not a recommendation.',
    },
    {
        id: 'keyword-summarise',
        question: 'What does summarise mean in an exam question?',
        aliases: ['summarise', 'summarize', 'summarise meaning', 'what summarise means'],
        answer:
            'Express the main points concisely. Summarise asks you to reduce material without losing what matters, so '
            + 'the skill is in what you leave out. Keep the proportions of the original rather than dwelling on the '
            + 'part you found interesting.',
    },
    {
        id: 'keyword-synthesise',
        question: 'What does synthesise mean in an exam question?',
        aliases: ['synthesise', 'synthesize', 'synthesise meaning', 'what synthesise means', 'synthesis in a question'],
        answer:
            'Put separate pieces together into a whole. Synthesise asks you to combine information from several '
            + 'sources, texts or topics into one coherent position, which means the answer must say something none '
            + 'of the sources said on its own.',
    },
    {
        id: 'keyword-marks-and-verbs',
        question: 'How do I know how much to write from the verb in the question?',
        aliases: [
            'how much to write for each verb',
            'verb tells you how much to write',
            'matching answer length to the command word',
            'how long should an answer be',
        ],
        answer:
            'The verb and the mark allocation agree with each other, so read both. Identify, state and recall are one '
            + 'mark and one line. Outline and describe are two or three marks and as many features. Explain and '
            + 'analyse need reasoning, so allow a paragraph. Discuss, assess, evaluate and justify carry the big mark '
            + 'values and need a position argued. When the verb and the marks seem to disagree, trust the marks.',
    },
];
