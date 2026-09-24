/**
 * English reference, Years 7 to 12.
 *
 * English has no formula sheet, so this covers what students most often ask to
 * have defined or structured: techniques, essay shape and how to handle quotes.
 */
import type { StudyEntry } from './types';

export const englishEntries: StudyEntry[] = [
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
        id: 'eng-techniques-language',
        subject: 'english',
        question: 'What are the common language techniques?',
        aliases: ['language techniques', 'metaphor', 'simile', 'personification', 'imagery', 'symbolism'],
        answer:
            'Metaphor states one thing is another; simile compares with "like" or "as"; personification gives human ' +
            'qualities to something not human. Imagery appeals to the senses, symbolism lets an object stand for an ' +
            'idea, and motif is a symbol repeated across a text. Always explain the effect, never just name it.',
    },
    {
        id: 'eng-techniques-structure',
        subject: 'english',
        question: 'What are structural and sound techniques?',
        aliases: ['structural techniques', 'juxtaposition', 'foreshadowing', 'alliteration', 'enjambment', 'tone'],
        answer:
            'Structural: juxtaposition places contrasting ideas together, foreshadowing hints at what comes, and a ' +
            'cyclical structure returns to its opening. Sound: alliteration repeats initial consonants, assonance ' +
            'repeats vowel sounds, and enjambment runs a line into the next to drive pace.',
    },
    {
        id: 'eng-persuasive-devices',
        subject: 'english',
        question: 'What are the persuasive devices?',
        aliases: ['persuasive techniques', 'ethos pathos logos', 'rhetorical question', 'speech techniques'],
        answer:
            'Ethos appeals to credibility, pathos to emotion and logos to logic. ' +
            'Add rhetorical questions, inclusive language such as "we", the rule of three, repetition and direct ' +
            'address. In a speech question, tie each device to the audience it was written for.',
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
        id: 'eng-module-analysis',
        subject: 'english',
        question: 'What is a context, and why does it matter in analysis?',
        aliases: ['context', 'composer context', 'responder context', 'values in a text'],
        answer:
            'Context is the circumstances a text was composed and is received in: historical, cultural, personal. ' +
            'It matters because it shapes the values in the text and how a modern responder reads them. ' +
            'In an essay, use context to explain why a choice was made, not as a paragraph of history.',
    },
    {
        id: 'eng-unseen-texts',
        subject: 'english',
        question: 'How do I approach unseen texts?',
        aliases: ['unseen texts', 'paper 1', 'short answer english', 'comprehension marks'],
        answer:
            'Read the question first, then the text, so you read looking for something. ' +
            'Match your answer length to the marks: roughly one technique with its effect per mark. ' +
            'Every answer needs evidence from the text, even a two-word quote, and must answer the verb in the question.',
    },
    {
        id: 'eng-common-verbs',
        subject: 'english',
        question: 'What do the question verbs mean, such as analyse or evaluate?',
        aliases: ['analyse', 'evaluate', 'discuss', 'explain verb', 'nesa glossary', 'directive verbs'],
        answer:
            'Identify means name it. Explain means give how or why. Analyse means break it into parts and show how ' +
            'they relate. Evaluate means make a judgement against criteria. Discuss means argue the points for and ' +
            'against. Answering a lower verb than the one asked is the most common reason for lost marks.',
    },
    {
        id: 'eng-visual-techniques',
        subject: 'english',
        question: 'What are the visual techniques?',
        aliases: ['visual techniques', 'salience', 'vectors', 'gaze', 'framing', 'colour symbolism', 'image analysis'],
        answer:
            'Salience is what draws the eye first, through size, colour or contrast. Vectors are lines that lead the ' +
            'eye. Gaze is where a subject looks, and demand gaze meets the viewer directly. ' +
            'Also consider framing, angle, where low angles empower, and colour.',
    },
    {
        id: 'eng-film-techniques',
        subject: 'english',
        question: 'What are the film techniques?',
        aliases: ['film techniques', 'camera angles', 'mise en scene', 'diegetic sound', 'editing', 'close up'],
        answer:
            'Shot types: close-up for emotion, long shot for context. Angles: high to diminish, low to empower. ' +
            'Mise en scène is everything arranged in the frame. Diegetic sound exists in the world of the film, ' +
            'non-diegetic does not, such as a soundtrack.',
    },
    {
        id: 'eng-poetry-techniques',
        subject: 'english',
        question: 'How do I analyse a poem?',
        aliases: ['poetry analysis', 'stanza', 'rhyme scheme', 'meter', 'volta', 'sonnet', 'free verse'],
        answer:
            'Read for the shift: where the argument or feeling turns, which in a sonnet is the volta. ' +
            'Then look at form, rhyme and rhythm, line breaks and enjambment, and sound patterns. ' +
            'Always link a formal choice to meaning, never list features on their own.',
    },
    {
        id: 'eng-shakespeare',
        subject: 'english',
        question: 'How do I analyse a Shakespeare play?',
        aliases: ['shakespeare', 'soliloquy', 'dramatic irony', 'aside', 'blank verse', 'iambic pentameter'],
        answer:
            'A soliloquy reveals private thought to the audience, an aside is a quick remark others do not hear, and ' +
            'dramatic irony lets the audience know what a character does not. ' +
            'Verse and prose signal status and state of mind, so a shift between them is worth noticing.',
    },
    {
        id: 'eng-narrative-techniques',
        subject: 'english',
        question: 'What are the narrative techniques?',
        aliases: ['narrative techniques', 'point of view', 'unreliable narrator', 'flashback', 'characterisation'],
        answer:
            'Point of view shapes what a reader can know: first person is intimate but limited, third person ' +
            'omniscient sees everything. An unreliable narrator makes the reader question the account. ' +
            'Structure devices include flashback, foreshadowing and a non-linear order.',
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
        aliases: ['comparative essay', 'textual conversations', 'two texts', 'intertextuality', 'module a'],
        answer:
            'Compare in every paragraph rather than handling one text then the other. ' +
            'Use the same idea as the hinge, and show how each composer treats it differently and why, which usually ' +
            'comes back to their context and purpose.',
    },
    {
        id: 'eng-language-grammar',
        subject: 'english',
        question: 'What grammar terms come up in analysis?',
        aliases: ['grammar', 'modality', 'nominalisation', 'imperative', 'syntax', 'cumulative listing'],
        answer:
            'High modality words, such as "must", show certainty; low modality, such as "might", hedges. ' +
            'Nominalisation turns a verb into a noun, which makes writing formal and impersonal. ' +
            'Imperatives command, and cumulative listing piles detail to overwhelm or emphasise.',
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
];
