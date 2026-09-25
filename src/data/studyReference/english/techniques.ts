/**
 * English: techniques.
 *
 * The language, structural, visual and film techniques students are asked to
 * name and, more importantly, to explain the effect of.
 */
import type { StudyEntry } from '../types';

export const englishTechniquesEntries: StudyEntry[] = [
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
        aliases: ['structural techniques', 'foreshadowing'],
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
        aliases: ['film techniques', 'camera angles', 'mise en scene', 'diegetic sound', 'close up'],
        answer:
            'Shot types: close-up for emotion, long shot for context. Angles: high to diminish, low to empower. ' +
            'Mise en scène is everything arranged in the frame. Diegetic sound exists in the world of the film, ' +
            'non-diegetic does not, such as a soundtrack.',
    },
    {
        id: 'eng-poetry-techniques',
        subject: 'english',
        question: 'How do I analyse a poem?',
        aliases: ['poetry analysis', 'stanza', 'rhyme scheme', 'meter'],
        answer:
            'Read for the shift: where the argument or feeling turns, which in a sonnet is the volta. ' +
            'Then look at form, rhyme and rhythm, line breaks and enjambment, and sound patterns. ' +
            'Always link a formal choice to meaning, never list features on their own.',
    },
    {
        id: 'eng-shakespeare',
        subject: 'english',
        question: 'How do I analyse a Shakespeare play?',
        aliases: ['shakespeare', 'aside'],
        answer:
            'A soliloquy reveals private thought to the audience, an aside is a quick remark others do not hear, and ' +
            'dramatic irony lets the audience know what a character does not. ' +
            'Verse and prose signal status and state of mind, so a shift between them is worth noticing.',
    },
    {
        id: 'eng-narrative-techniques',
        subject: 'english',
        question: 'What are the narrative techniques?',
        aliases: ['narrative techniques', 'point of view', 'flashback'],
        answer:
            'Point of view shapes what a reader can know: first person is intimate but limited, third person ' +
            'omniscient sees everything. An unreliable narrator makes the reader question the account. ' +
            'Structure devices include flashback, foreshadowing and a non-linear order.',
    },
    {
        id: 'eng-language-grammar',
        subject: 'english',
        question: 'What grammar terms come up in analysis?',
        aliases: ['grammar', 'imperative', 'syntax', 'cumulative listing'],
        answer:
            'High modality words, such as "must", show certainty; low modality, such as "might", hedges. ' +
            'Nominalisation turns a verb into a noun, which makes writing formal and impersonal. ' +
            'Imperatives command, and cumulative listing piles detail to overwhelm or emphasise.',
    },
    {
        id: 'eng-tone-mood',
        subject: 'english',
        question: 'What is the difference between tone and mood?',
        aliases: ['tone', 'mood', 'atmosphere', 'voice in a text', 'authorial tone'],
        answer:
            'Tone is the composer\u2019s attitude towards the subject, carried by word choice: bitter, nostalgic, ' +
            'mocking. ' +
            'Mood is the feeling created in the responder: tense, sombre, hopeful. ' +
            'Name the tone precisely rather than calling it negative, and quote the words that create it.',
    },
    {
        id: 'eng-irony',
        subject: 'english',
        question: 'What are the types of irony?',
        aliases: ['irony', 'verbal irony', 'situational irony', 'dramatic irony', 'sarcasm'],
        answer:
            'Verbal irony says the opposite of what is meant, and sarcasm is its cutting form. ' +
            'Situational irony is an outcome opposite to what was expected. ' +
            'Dramatic irony lets the audience know something a character does not, which builds tension.',
    },
    {
        id: 'eng-symbolism-motif',
        subject: 'english',
        question: 'What is the difference between a symbol, a motif and an allusion?',
        aliases: ['symbol', 'motif', 'allusion', 'recurring image', 'intertextual reference'],
        answer:
            'A symbol is an object standing for an idea. ' +
            'A motif is a symbol or image that recurs across a text, gathering meaning each time. ' +
            'An allusion is a reference to another text, person or event, which borrows its associations without ' +
            'explaining them.',
    },
    {
        id: 'eng-characterisation',
        subject: 'english',
        question: 'How do composers build character?',
        aliases: ['characterisation', 'direct characterisation', 'indirect characterisation', 'character development', 'foil'],
        answer:
            'Directly, by describing a character, and indirectly through their speech, actions, thoughts and how ' +
            'others react to them. ' +
            'A foil is a character whose contrast highlights another. ' +
            'Analyse what a choice reveals, not simply what the character does.',
    },
    {
        id: 'eng-setting',
        subject: 'english',
        question: 'How does setting create meaning?',
        aliases: ['setting', 'place in a text', 'pathetic fallacy', 'landscape symbolism', 'time period'],
        answer:
            'Setting establishes atmosphere, shapes what characters can do, and often reflects their inner state. ' +
            'Pathetic fallacy gives the weather human feeling to mirror the mood. ' +
            'In Australian texts especially, landscape frequently carries the thematic weight.',
    },
    {
        id: 'eng-repetition-devices',
        subject: 'english',
        question: 'What are the repetition devices?',
        aliases: ['repetition', 'anaphora', 'tricolon', 'rule of three', 'parallelism', 'refrain'],
        answer:
            'Anaphora repeats a phrase at the start of successive clauses, building rhythm and insistence. ' +
            'A tricolon groups three items for emphasis. ' +
            'Parallelism repeats a structure, and a refrain repeats a line across a poem or song. ' +
            'Each earns marks only when you say what the emphasis achieves.',
    },
    {
        id: 'eng-contrast-devices',
        subject: 'english',
        question: 'What are juxtaposition, antithesis and oxymoron?',
        aliases: ['juxtaposition', 'antithesis', 'oxymoron', 'paradox', 'contrast device'],
        answer:
            'Juxtaposition places two things side by side so the difference shows. ' +
            'Antithesis balances opposites in matching structures. ' +
            'An oxymoron joins contradictory words, such as bitter sweet, and a paradox is a statement that seems ' +
            'contradictory yet holds a truth.',
    },
    {
        id: 'eng-hyperbole-understatement',
        subject: 'english',
        question: 'What are hyperbole, understatement and euphemism?',
        aliases: ['hyperbole', 'understatement', 'litotes', 'euphemism', 'exaggeration'],
        answer:
            'Hyperbole exaggerates for effect and is not meant literally. ' +
            'Understatement deliberately downplays, which can be more powerful than overstating. ' +
            'A euphemism substitutes a mild expression for a blunt one, often to soften or to obscure, which makes ' +
            'it worth examining in political language.',
    },
    {
        id: 'eng-modality-voice',
        subject: 'english',
        question: 'What are modality and active versus passive voice?',
        aliases: ['active voice', 'passive voice', 'high modality', 'agency in a sentence'],
        answer:
            'Modality is the degree of certainty: "must" is high, "might" is low. ' +
            'Active voice puts the doer first and is direct; passive voice moves the action forward and can hide who ' +
            'is responsible, which is why it appears so often in official apologies.',
    },
    {
        id: 'eng-poetic-form',
        subject: 'english',
        question: 'What are the main poetic forms?',
        aliases: ['ballad', 'ode', 'haiku', 'elegy', 'poetic form'],
        answer:
            'A sonnet has fourteen lines and a turn, an ode praises, an elegy mourns, and a ballad tells a story in ' +
            'quatrains. ' +
            'Free verse abandons regular rhyme and metre, which makes any pattern that does appear significant.',
    },
    {
        id: 'eng-rhythm-metre',
        subject: 'english',
        question: 'What are rhythm and metre?',
        aliases: ['metre', 'rhythm', 'iambic pentameter', 'stressed syllables', 'caesura'],
        answer:
            'Metre is the pattern of stressed and unstressed syllables; iambic pentameter is five unstressed-stressed ' +
            'pairs per line, close to natural English speech. ' +
            'A break in the pattern draws attention, and a caesura is a pause within a line that slows the reader.',
    },
    {
        id: 'eng-sound-devices',
        subject: 'english',
        question: 'What are the sound devices?',
        aliases: ['alliteration', 'assonance', 'consonance', 'onomatopoeia', 'sibilance'],
        answer:
            'Alliteration repeats initial consonants, assonance repeats vowel sounds, consonance repeats consonants ' +
            'within words, and sibilance repeats s sounds for a hiss or hush. ' +
            'Onomatopoeia imitates a sound. Link the sound to the feeling it produces, not just to the words it ' +
            'joins.',
    },
];
