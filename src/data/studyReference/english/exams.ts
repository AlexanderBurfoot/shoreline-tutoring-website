/**
 * English: examination craft.
 *
 * Timing, adapting a prepared response, integrating two texts and the errors
 * that cost the most marks.
 */
import type { StudyEntry } from '../types';

export const englishExamsEntries: StudyEntry[] = [
    {
        id: 'eng-essay-timing',
        subject: 'english',
        question: 'How do I time an English essay?',
        aliases: ['timing an english essay', 'forty minute essay', 'how long to plan an essay'],
        answer:
            'For a forty minute essay: five minutes planning, thirty writing, five checking. Plan the thesis and the ' +
            'three paragraph ideas, not the sentences. Finishing a weaker conclusion beats abandoning a strong ' +
            'paragraph mid-sentence.',
    },
    {
        id: 'eng-unseen-annotation',
        subject: 'english',
        question: 'What should I mark up on an unseen passage under time?',
        aliases: ['marking up a passage in an exam', 'what to note on an unseen text', 'reading an unseen passage fast'],
        answer:
            'One read for meaning, then mark only what you will use: the turn, two or three techniques, and the line ' +
            'that states the idea. Annotating everything costs time you need for writing.',
    },
    {
        id: 'eng-adapting-thesis',
        subject: 'english',
        question: 'How do I adapt a prepared thesis to an unexpected question?',
        aliases: ['adapting a prepared essay', 'unexpected question', 'reshaping a thesis'],
        answer:
            'Take the question keyword and make it the subject of your thesis sentence, then choose which prepared ' +
            'paragraphs genuinely serve it and cut the rest. A prepared essay reproduced unchanged is the most ' +
            'heavily penalised approach there is.',
    },
    {
        id: 'eng-handling-two-part-questions',
        subject: 'english',
        question: 'How do I answer a question with two parts?',
        aliases: ['two part question', 'question with two demands', 'addressing both halves'],
        answer:
            'Address both, in the order given, and link them. If it asks how and to what extent, the how is analysis ' +
            'and the extent is judgement, and an answer with only the first cannot reach the top band.',
    },
    {
        id: 'eng-quote-memorisation-system',
        subject: 'english',
        question: 'How do I memorise quotes efficiently?',
        aliases: ['memorising quotes', 'short quotes to learn'],
        answer:
            'Learn short quotations grouped by idea rather than by chapter, five or six per idea, each with the ' +
            'technique attached. Write them from memory rather than rereading, and prefer a phrase you can embed to a ' +
            'sentence you must introduce.',
    },
    {
        id: 'eng-related-text-choice',
        subject: 'english',
        question: 'What makes a good related text?',
        aliases: ['choosing a related text', 'related text criteria', 'unusual related text'],
        answer:
            'One that genuinely illuminates the module idea, that you can analyse closely, and that is not the ' +
            'prescribed text of another course. A short film, poem or article is often easier to handle well than a ' +
            'novel.',
    },
    {
        id: 'eng-comparative-integration',
        subject: 'english',
        question: 'How do I integrate two texts in one paragraph?',
        aliases: ['integrating two texts', 'comparative paragraph structure', 'not writing about one then the other'],
        answer:
            'Open with the shared idea, analyse one text, then move to the second with a connective that states the ' +
            'relationship, and close on what the comparison reveals. Separate blocks of text one and text two read as ' +
            'two essays.',
    },
    {
        id: 'eng-discursive-voice',
        subject: 'english',
        question: 'What voice suits a discursive piece?',
        aliases: ['discursive voice', 'exploratory tone', 'discursive versus persuasive'],
        answer:
            'Exploratory and personal rather than conclusive: it considers, digresses and qualifies, and may end ' +
            'unresolved. A discursive piece that argues one position throughout has become persuasive, which is a ' +
            'different form.',
    },
    {
        id: 'eng-imaginative-constraints',
        subject: 'english',
        question: 'How do I write an imaginative piece to a prompt?',
        aliases: ['imaginative writing to a prompt', 'using the stimulus', 'creative response constraints'],
        answer:
            'Use the prompt as a starting point rather than a summary to illustrate, and make the connection visible ' +
            'early. One character, one moment and one change is enough for the length available.',
    },
    {
        id: 'eng-reflection-quoting-self',
        subject: 'english',
        question: 'How do I quote my own writing in a reflection?',
        aliases: ['quoting your own writing', 'reflection statement evidence', 'explaining my own technique'],
        answer:
            'Quote a short phrase, name the technique, and state the effect you intended and why you chose it, ' +
            'linking it to a studied text where you can. Unquoted general claims about your intentions earn nothing.',
    },
    {
        id: 'eng-expression-marks',
        subject: 'english',
        question: 'How do I improve expression under exam conditions?',
        aliases: ['improving expression', 'clear sentences in an exam', 'avoiding waffle'],
        answer:
            'One idea per sentence, verbs doing the work, and no sentence you would not say aloud. Cut phrases such ' +
            'as it can be seen that, which delay the point by four words each time.',
    },
    {
        id: 'eng-common-essay-errors',
        subject: 'english',
        question: 'What loses the most marks in an English essay?',
        aliases: ['common essay errors', 'technique listing', 'ignoring the question'],
        answer:
            'Retelling the plot, listing techniques without effects, ignoring the question, writing about only one of ' +
            'two required texts, and a conclusion that introduces a new idea. Each is a structural failure rather ' +
            'than a matter of style.',
    },
    {
        id: 'eng-narrative-structure-terms',
        subject: 'english',
        question: 'What are the parts of a narrative structure?',
        aliases: ['exposition', 'rising action', 'climax', 'denouement', 'parts of a story structure'],
        answer:
            'Exposition sets the situation, rising action builds the complication, the climax is the turning point, ' +
            'and the falling action and resolution settle what follows. Naming the stage matters less than showing ' +
            'what the text does with it, such as a climax withheld.',
    },
    {
        id: 'eng-allegory',
        subject: 'english',
        question: 'What is an allegory?',
        aliases: ['allegory', 'allegorical reading', 'story standing for something else'],
        answer:
            'A text whose surface story consistently stands for something else, usually political or moral, so every ' +
            'element has a counterpart. It differs from symbolism in being sustained: one symbol does not make an ' +
            'allegory.',
    },
    {
        id: 'eng-diction',
        subject: 'english',
        question: 'What is diction, and how do I write about it?',
        aliases: ['diction', 'word choice analysis', 'formal and colloquial diction'],
        answer:
            'The kind of words a writer chooses: formal or colloquial, abstract or concrete, plain or elevated. Name ' +
            'the register and quote two words that establish it, then say what the choice implies about the speaker ' +
            'or their attitude to the subject.',
    },
    {
        id: 'eng-plot-versus-structure',
        subject: 'english',
        question: 'What is the difference between plot and structure?',
        aliases: ['plot versus structure', 'is structure the same as plot', 'order of events versus events'],
        answer:
            'Plot is what happens; structure is the order and shape in which the reader receives it. Two texts can ' +
            'share a plot and differ entirely in structure, and writing about structure means writing about the ' +
            'arrangement rather than retelling the events.',
    },
    {
        id: 'eng-form-versus-genre',
        subject: 'english',
        question: 'What is the difference between form and genre?',
        aliases: ['form versus genre', 'is form the same as genre', 'novel is a form'],
        answer:
            'Form is the kind of text it physically is: novel, play, film, poem, speech. Genre is the tradition it ' +
            'belongs to: gothic, satire, tragedy, dystopia. A gothic novel and a gothic film share genre but not ' +
            'form.',
    },
    {
        id: 'eng-quote-versus-paraphrase',
        subject: 'english',
        question: 'What is the difference between quoting and paraphrasing?',
        aliases: ['quote versus paraphrase', 'when to paraphrase', 'do I need quotation marks'],
        answer:
            'A quotation reproduces the exact words inside quotation marks, which lets you analyse the word choice. A ' +
            'paraphrase restates the content in your own words, which suits plot detail you need briefly. Analysis of ' +
            'language needs the quotation.',
    },
    {
        id: 'eng-quotes-per-paragraph',
        subject: 'english',
        question: 'How many quotations should a paragraph have?',
        aliases: ['how many quotes per paragraph', 'number of quotations in a paragraph', 'too many quotes'],
        answer:
            'Usually two or three short embedded ones, each analysed. A paragraph with six quotations has room to ' +
            'explain none of them, and a paragraph with none has no evidence, so the test is whether every quotation ' +
            'is doing work.',
    },
    {
        id: 'eng-contractions-in-essays',
        subject: 'english',
        question: 'Can I use contractions and first person in an essay?',
        aliases: ['contractions in an essay', 'can I write I in an essay', 'formal register in an essay'],
        answer:
            'Write out contractions in full, since analytical register expects it. First person is acceptable in a ' +
            'reflection statement and in some discursive writing, but in an essay the argument is stronger stated ' +
            'directly than prefaced with I think.',
    },
];
