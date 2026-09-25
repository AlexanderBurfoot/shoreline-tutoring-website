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
    {
        id: 'eng-feature-article',
        subject: 'english',
        question: 'How do I write a feature article?',
        aliases: ['feature article', 'writing a feature article', 'magazine article for english'],
        answer:
            'Open with a specific scene or person rather than a general claim, establish why it matters, then move ' +
            'between narrative detail and wider comment. Use subheadings and a byline if the task allows, keep ' +
            'paragraphs short, and close by returning to the opening image.',
    },
    {
        id: 'eng-letter-writing',
        subject: 'english',
        question: 'How do I write a letter for English?',
        aliases: ['writing a letter for english', 'letter as a text type', 'epistolary response'],
        answer:
            'Match the register to the recipient and the purpose, and let the relationship between writer and reader ' +
            'do the characterisation. A letter reveals the writer as much as the subject, so what they choose to omit ' +
            'or excuse is where the interest lies.',
    },
    {
        id: 'eng-building-tension',
        subject: 'english',
        question: 'How do I build tension in a piece of writing?',
        aliases: ['building tension', 'creating suspense', 'pace in a story'],
        answer:
            'Delay what the reader wants to know, shorten the sentences as the moment approaches, and give the ' +
            'character less information than the reader has, or more. A short paragraph after a long one lands hard, ' +
            'and specific detail feels more threatening than a general threat.',
    },
    {
        id: 'eng-model-comparative-paragraph',
        subject: 'english',
        question: 'Can you show me an example of a comparative paragraph?',
        aliases: ['example of a comparative paragraph', 'model paragraph comparing two texts', 'integrating two texts example'],
        answer:
            'Open with the shared idea, analyse one text, then move across with a connective that states the ' +
            'relationship. For instance: both texts treat exile as a loss of language, though where the poem mourns ' +
            'it in fragments, the later memoir recovers it in careful prose, which measures how the passing century ' +
            'changed what could be said.',
    },
    {
        id: 'eng-model-discursive-opening',
        subject: 'english',
        question: 'Can you show me an example of a discursive opening?',
        aliases: ['example of a discursive opening', 'model discursive introduction', 'how to start a discursive piece'],
        answer:
            'Begin with something specific and unresolved, then widen. For instance: my grandmother kept every ' +
            'receipt, and I have never decided whether that was thrift or fear. It raises a question the piece can ' +
            'explore rather than announcing a position to defend.',
    },
    {
        id: 'eng-model-persuasive-paragraph',
        subject: 'english',
        question: 'Can you show me an example of a persuasive paragraph?',
        aliases: ['example of a persuasive paragraph', 'model persuasive writing', 'persuasive body paragraph example'],
        answer:
            'State the reason, give the evidence, answer the objection, then close on the consequence. For instance: ' +
            'later start times improve results, since adolescent sleep cycles shift by two hours; the timetable ' +
            'objection is real but solvable, and the alternative is a generation taught while half asleep.',
    },
    {
        id: 'eng-model-reflection',
        subject: 'english',
        question: 'Can you show me an example of a reflection statement?',
        aliases: ['example of a reflection statement', 'model reflection english', 'explaining my own choices example'],
        answer:
            'Name the choice, the intended effect, and the influence. For instance: I ended on an unfinished sentence ' +
            'so the reader supplies what the narrator cannot say, a technique I took from the fragmented closing of ' +
            'the prescribed text.',
    },
    {
        id: 'eng-module-b-approach',
        subject: 'english',
        question: 'How do I approach a Module B critical study?',
        aliases: ['module b approach', 'critical study of literature', 'writing about textual integrity'],
        answer:
            'Argue a position on the text value, supported by close analysis of how its parts work together. It ' +
            'rewards knowing a few passages extremely well rather than the whole text loosely, and it expects an ' +
            'informed personal judgement rather than a survey of critics.',
    },
    {
        id: 'eng-common-module-approach',
        subject: 'english',
        question: 'How do I approach the Common Module?',
        aliases: ['common module approach', 'texts and human experiences', 'writing about human experiences'],
        answer:
            'Write about what the text reveals about human behaviour, and about the anomalies and paradoxes in it, ' +
            'rather than about the plot. The strongest responses treat the experience as complicated: the text shows ' +
            'both the comfort and the cost of something.',
    },
    {
        id: 'eng-analysing-structure-of-argument',
        subject: 'english',
        question: 'How do I analyse the structure of an argument in a text?',
        aliases: ['analysing an argument structure', 'how an argument is built', 'ordering of reasons in a text'],
        answer:
            'Label what each paragraph does, then look at the order: what is conceded early to earn trust, where the ' +
            'strongest evidence sits, and what is left to the end to be remembered. The sequence is a strategy, and ' +
            'naming it is analysis.',
    },
    {
        id: 'eng-writing-about-context-pitfall',
        subject: 'english',
        question: 'Where should background about the period go in an essay?',
        aliases: ['how much context in an essay', 'context paragraph pitfall', 'using context well'],
        answer:
            'Only what changes how a passage reads, and inside the analysis rather than in a block at the start. A ' +
            'sentence of context that explains why an image would unsettle its first audience is worth a paragraph of ' +
            'background that could preface any essay.',
    },
    {
        id: 'eng-comparing-form',
        subject: 'english',
        question: 'How do I compare texts in different forms?',
        aliases: ['comparing a film and a novel', 'comparing different forms', 'cross form comparison'],
        answer:
            'Compare what each form can do with the shared idea rather than listing differences. A novel can render ' +
            'thought directly and a film cannot, so a film shows interiority through performance and framing, and ' +
            'that constraint is the point of the comparison.',
    },
    {
        id: 'eng-quotation-bank',
        subject: 'english',
        question: 'How do I build a quotation bank?',
        aliases: ['quotation bank', 'organising quotes by theme', 'learning quotes for an essay'],
        answer:
            'Group short quotations by idea rather than by chapter, five or six per idea, each with the technique and ' +
            'a one-line note on effect. Organised that way, an unexpected question can be answered by recombining ' +
            'what you already know.',
    },
    {
        id: 'eng-planning-under-time',
        subject: 'english',
        question: 'How do I plan an English response in five minutes?',
        aliases: ['planning an english response quickly', 'essay plan in five minutes', 'exam planning english'],
        answer:
            'Write the thesis as one sentence answering the question, then three paragraph ideas in order, each with ' +
            'the quotation you will start from. Nothing else. That is enough to keep an argument straight for forty ' +
            'minutes.',
    },
    {
        id: 'eng-improving-a-draft',
        subject: 'english',
        question: 'How do I improve a draft essay?',
        aliases: ['improving an essay draft', 'redrafting an essay', 'what to fix first in a draft'],
        answer:
            'Check the argument first: does each paragraph advance the thesis, and does the thesis answer the ' +
            'question. Then evidence, then expression. Polishing sentences in a paragraph that should be cut is the ' +
            'commonest waste of redrafting time.',
    },
    {
        id: 'eng-avoiding-technique-lists',
        subject: 'english',
        question: 'How do I stop my essay becoming a list of techniques?',
        aliases: ['avoiding a technique list', 'stop listing devices'],
        answer:
            'Start each sentence with the idea rather than the device, so the technique arrives as evidence for a ' +
            'claim. If a sentence would still make sense with a different technique named, it is identification ' +
            'rather than analysis.',
    },
    {
        id: 'eng-writing-with-authority',
        subject: 'english',
        question: 'How do I write with authority about a text?',
        aliases: ['writing with authority', 'confident essay voice', 'sounding convincing in an essay'],
        answer:
            'Make claims and support them, rather than hedging with seems to or perhaps. Authority comes from ' +
            'precision: naming exactly what a text does, in its own detail, is more convincing than any amount of ' +
            'emphatic language.',
    },
    {
        id: 'eng-text-you-dislike',
        subject: 'english',
        question: 'How do I write well about a text I dislike?',
        aliases: ['writing about a text I dislike', 'hating the prescribed text', 'analysing a text you do not enjoy'],
        answer:
            'Separate judgement from analysis: a text can be studied precisely by someone unmoved by it. If the ' +
            'module allows evaluation, a well-argued reservation supported by close reading scores better than forced ' +
            'enthusiasm, which markers recognise instantly.',
    },
    {
        id: 'eng-unprepared-question',
        subject: 'english',
        question: 'What do I do if the question asks about something I did not prepare?',
        aliases: ['unprepared english question', 'question on an aspect I did not study', 'unexpected essay question'],
        answer:
            'Take the keyword and make it the subject of your thesis, then reach for the evidence you know best and ' +
            'show how it speaks to that idea. Close analysis of familiar passages, redirected honestly, beats a ' +
            'prepared essay on a different question.',
    },
    {
        id: 'eng-two-ideas-at-once',
        subject: 'english',
        question: 'How do I handle a question with two concepts in it?',
        aliases: ['question with two concepts', 'two ideas in one question', 'linking two ideas in an essay'],
        answer:
            'Address the relationship between them rather than each in turn: does one cause, limit or complicate the ' +
            'other. A thesis naming that relationship holds the essay together where two separate halves will not.',
    },
    {
        id: 'eng-using-a-critical-reading',
        subject: 'english',
        question: 'How do I use a critical reading without name-dropping?',
        aliases: ['using a critical reading', 'referring to critics', 'critical perspective in an essay'],
        answer:
            'Use it as a lens that changes what you notice in the text, then show what it reveals in a specific ' +
            'passage. Naming a critic without demonstrating the reading adds nothing, and Module B rewards your ' +
            'judgement rather than theirs.',
    },
    {
        id: 'eng-analysing-a-title',
        subject: 'english',
        question: 'Can I write about a text title?',
        aliases: ['analysing a title', 'significance of a title', 'writing about the title'],
        answer:
            'Yes, where it is doing work: a title can frame the whole reading, promise something the text withholds, ' +
            'or take on a second meaning by the close. Return to it at the end of the essay, since that is where its ' +
            'shift becomes visible.',
    },
    {
        id: 'eng-analysing-an-opening',
        subject: 'english',
        question: 'How do I analyse the opening of a text?',
        aliases: ['analysing an opening', 'first page analysis', 'why openings matter'],
        answer:
            'Ask what it establishes and what it withholds: voice, setting, the terms on which we read, and the ' +
            'question that keeps us going. Openings are heavily revised by writers, so almost everything in them is ' +
            'deliberate.',
    },
    {
        id: 'eng-analysing-an-ending',
        subject: 'english',
        question: 'How do I analyse the ending of a text?',
        aliases: ['analysing an ending', 'writing about a conclusion', 'why the ending matters'],
        answer:
            'Ask what is resolved, what is left open, and whether the close returns to something from the opening ' +
            'changed. An ending that refuses resolution is making an argument, and saying what that argument is ' +
            'usually lifts a paragraph.',
    },
    {
        id: 'eng-silence-and-absence',
        subject: 'english',
        question: 'Can I write about what a text leaves out?',
        aliases: ['writing about absence', 'silence in a text', 'what a text omits'],
        answer:
            'Yes, and it often distinguishes a strong response: whose voice is missing, what is never described, ' +
            'where the narration stops. The claim has to be anchored in something on the page, such as a scene ending ' +
            'before the event it promised.',
    },
    {
        id: 'eng-minor-character',
        subject: 'english',
        question: 'Is it worth writing about a minor character?',
        aliases: ['minor character', 'writing about a secondary character', 'minor characters in an essay'],
        answer:
            'Often yes, because markers see the same two figures repeatedly. A minor character usually exists to ' +
            'reveal something about a major one or about the world of the text, and naming that function is more ' +
            'interesting than another paragraph on the protagonist.',
    },
    {
        id: 'eng-setting-as-character',
        subject: 'english',
        question: 'What does it mean to say setting works like a character?',
        aliases: ['setting as a character', 'place acting on characters', 'setting with agency'],
        answer:
            'That the place acts on the people rather than only surrounding them: constraining choices, carrying ' +
            'memory, or shifting as they do. Demonstrate it by showing the setting change alongside the character ' +
            'rather than by asserting the idea.',
    },
];
