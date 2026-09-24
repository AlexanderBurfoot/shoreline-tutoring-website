/**
 * English: writing.
 *
 * Essays, creative and discursive writing, and the craft of putting a response
 * together.
 */
import type { StudyEntry } from '../types';

export const englishWritingEntries: StudyEntry[] = [
    {
        id: 'eng-essay-structure',
        subject: 'english',
        question: 'How should I structure an essay paragraph?',
        aliases: ['teel', 'peel', 'body paragraph', 'essay structure', 'paragraph structure'],
        answer:
            'TEEL: Topic sentence answering the question, Evidence in a short quote, Explanation of how the technique ' +
            'creates meaning, and a Link back to the question. ' +
            'The explanation should be the longest part, since that is where the marks sit, not in retelling the plot.',
    },
    {
        id: 'eng-thesis',
        subject: 'english',
        question: 'What makes a good thesis statement?',
        aliases: ['thesis', 'introduction', 'thesis statement', 'how to start an essay'],
        answer:
            'A thesis is an arguable claim that answers the exact question asked, not a description of the text. ' +
            'It should name what the composer does and why it matters, and every paragraph should visibly support it. ' +
            'If nobody could disagree with your thesis, it is a summary rather than an argument.',
    },
    {
        id: 'eng-quote-integration',
        subject: 'english',
        question: 'How do I integrate quotes properly?',
        aliases: ['quote integration', 'embedding quotes', 'how to quote', 'textual evidence'],
        answer:
            'Keep quotes short and run them into your own sentence, so the grammar still works. ' +
            'Name the technique, then explain the effect on the responder. ' +
            'A long quote dropped in on its own line spends words without earning marks.',
    },
    {
        id: 'eng-text-types',
        subject: 'english',
        question: 'What is the difference between discursive, persuasive and imaginative writing?',
        aliases: ['discursive', 'persuasive writing', 'imaginative writing', 'reflective writing', 'writing styles'],
        answer:
            'Persuasive argues one position throughout. Discursive explores several angles on an idea without ' +
            'committing to one, and can be more personal in voice. Imaginative tells a story or creates a world. ' +
            'Reflective looks back on an experience and what it taught you.',
    },
    {
        id: 'eng-creative-writing',
        subject: 'english',
        question: 'How do I write a strong creative piece?',
        aliases: ['creative writing', 'short story', 'imaginative response', 'show dont tell', 'story structure'],
        answer:
            'Show rather than tell: give the detail that implies the feeling instead of naming it. ' +
            'Keep the scope small, since a moment handled well beats a whole life rushed. ' +
            'Vary sentence length for pace, and make the ending land on an image rather than an explanation.',
    },
    {
        id: 'eng-comparative-essay',
        subject: 'english',
        question: 'How do I write a comparative essay on two texts?',
        aliases: ['comparative essay', 'comparing two texts', 'two texts essay', 'intertextuality'],
        answer:
            'Compare in every paragraph rather than handling one text then the other. ' +
            'Use the same idea as the hinge, and show how each composer treats it differently and why, which usually ' +
            'comes back to their context and purpose.',
    },
    {
        id: 'eng-editing-checklist',
        subject: 'english',
        question: 'How do I edit my own writing?',
        aliases: ['editing', 'proofreading', 'drafting', 'improve my writing', 'word choice'],
        answer:
            'Read it aloud: anything you stumble over needs rewriting. Cut adverbs and filler, and replace vague ' +
            'verbs with precise ones. Check each paragraph answers the question rather than retelling the text, ' +
            'and check every quote is punctuated and integrated.',
    },
    {
        id: 'eng-essay-planning',
        subject: 'english',
        question: 'How do I plan an essay in an exam?',
        aliases: ['essay planning', 'exam technique english', 'unseen question', 'adapting an essay', 'timed essay'],
        answer:
            'Spend the first few minutes underlining the key words and verbs, then sketch a thesis and three topic ' +
            'sentences that answer them. ' +
            'Adapt your prepared material to the question rather than writing it out unchanged, which markers spot ' +
            'immediately.',
    },
    {
        id: 'eng-speech-writing',
        subject: 'english',
        question: 'How do I write and deliver a speech?',
        aliases: ['speech writing', 'oral presentation', 'delivery', 'audience engagement', 'public speaking'],
        answer:
            'Open with something that earns attention, signpost your argument, and use short sentences that are easy ' +
            'to say aloud. ' +
            'Direct address and rhetorical questions bring the audience in. ' +
            'Rehearse for pace and pause deliberately at the turns in the argument.',
    },
    {
        id: 'eng-punctuation',
        subject: 'english',
        question: 'What are the common punctuation and expression mistakes?',
        aliases: ['punctuation', 'apostrophe', 'comma splice', 'semicolon', 'its vs its', 'expression marks'],
        answer:
            'Apostrophes show possession or omission, never plurals. A comma cannot join two sentences: use a full ' +
            'stop, a semicolon or a conjunction. "Its" is possessive, "it\u2019s" means it is. ' +
            'Vary sentence length, and cut words that add nothing.',
    },
    {
        id: 'eng-introduction-conclusion',
        subject: 'english',
        question: 'How do I write an introduction and conclusion?',
        aliases: ['introduction', 'conclusion', 'opening an essay', 'ending an essay', 'signposting'],
        answer:
            'An introduction states the thesis, names the texts and composers, and signposts the ideas each paragraph ' +
            'will handle, in about four sentences. ' +
            'A conclusion returns to the thesis with the weight of the argument behind it and widens slightly, ' +
            'without introducing new evidence.',
    },
    {
        id: 'eng-topic-sentences',
        subject: 'english',
        question: 'What makes a good topic sentence?',
        aliases: ['topic sentence', 'paragraph opening', 'linking to the question', 'argument sentence'],
        answer:
            'It states the argument of that paragraph and uses the wording of the question, so a marker can see the ' +
            'relevance immediately. ' +
            'It should be a claim about meaning, not a statement of what happens in the text.',
    },
    {
        id: 'eng-analysis-depth',
        subject: 'english',
        question: 'How do I analyse rather than describe?',
        aliases: ['analysis vs description', 'how to analyse', 'retelling the plot', 'depth of analysis'],
        answer:
            'Description says what happens; analysis says how the composer made it mean something, and why that ' +
            'matters to the question. ' +
            'Name the technique, quote briefly, explain the effect on the responder, then link to the idea. ' +
            'If a sentence could appear in a plot summary, it is not analysis.',
    },
    {
        id: 'eng-discursive-writing-craft',
        subject: 'english',
        question: 'How do I write a discursive piece?',
        aliases: ['discursive writing', 'exploring an idea', 'personal voice', 'discursive structure'],
        answer:
            'Circle an idea rather than argue one side: raise a question, turn it over through anecdote, example and ' +
            'reflection, and allow the position to shift. ' +
            'Voice matters more than structure, though a returning image or phrase gives the piece shape.',
    },
    {
        id: 'eng-reflection-statement',
        subject: 'english',
        question: 'How do I write a reflection statement?',
        aliases: ['reflection statement', 'explaining my choices', 'module c reflection', 'justifying technique'],
        answer:
            'Explain what you were trying to achieve, which techniques you chose and why, and what influenced you, ' +
            'referring to the stimulus or studied texts. ' +
            'Quote your own writing as evidence. Write about craft and effect on the reader, not about how you felt ' +
            'writing it.',
    },
    {
        id: 'eng-vocabulary-expression',
        subject: 'english',
        question: 'How do I improve my expression?',
        aliases: ['expression marks', 'sophisticated vocabulary', 'sentence variety', 'academic tone', 'concise writing'],
        answer:
            'Use precise words rather than long ones, and vary sentence length so the writing has rhythm. ' +
            'Cut fillers such as "really" and "in today\u2019s society". ' +
            'Use the present tense for what a text does, and keep the tone formal without becoming stiff.',
    },
    {
        id: 'eng-integrating-context',
        subject: 'english',
        question: 'How much context should I include?',
        aliases: ['using context', 'how much history', 'context in an essay', 'avoiding context dumps'],
        answer:
            'Only as much as explains a composer\u2019s choice. ' +
            'Weave it into the sentence that analyses the technique, rather than giving a paragraph of background. ' +
            'A marker rewards context that illuminates the text, not context that proves you researched.',
    },
    {
        id: 'eng-appreciating-form',
        subject: 'english',
        question: 'How do I write about a text\u2019s form?',
        aliases: ['form of a text', 'genre conventions', 'medium', 'why this form', 'form and meaning'],
        answer:
            'Ask what the form allows that another would not: a play gives immediacy and staging, a novel gives ' +
            'interiority, a film gives image and sound together. ' +
            'Strong responses treat form as a choice that shapes meaning, not as a label.',
    },
    {
        id: 'eng-planning-time',
        subject: 'english',
        question: 'How should I use my time in an English exam?',
        aliases: ['exam timing english', 'time per section', '40 minutes essay', 'reading time strategy'],
        answer:
            'Divide the time by the marks, then hold to it: an essay worth 20 marks in a 40-minute slot gets 5 ' +
            'minutes to plan and 35 to write. ' +
            'Use reading time to underline the key words and choose your texts. ' +
            'An unfinished essay loses more than an unpolished one.',
    },
    {
        id: 'eng-quote-memorisation',
        subject: 'english',
        question: 'How do I memorise quotes effectively?',
        aliases: ['memorising quotes', 'learning quotes', 'quote bank', 'remembering evidence'],
        answer:
            'Learn short quotes, five words or fewer, grouped by idea rather than by chapter, since essays are ' +
            'organised by argument. ' +
            'Attach each to a technique and an effect, because you need all three in the sentence anyway. ' +
            'Ten flexible quotes beat forty you can only half recall.',
    },
];
