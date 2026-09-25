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
        aliases: ['structural techniques', 'sound techniques', 'shape of a text'],
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
        aliases: ['film techniques', 'camera angles', 'mise en scene', 'close up'],
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
        aliases: ['setting', 'place in a text', 'landscape symbolism', 'time period'],
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
    {
        id: 'eng-allusion-types',
        subject: 'english',
        question: 'What kinds of allusion are there?',
        aliases: ['biblical allusion', 'classical allusion', 'historical allusion'],
        answer:
            'Biblical, classical, literary, historical and popular. An allusion works by importing the associations ' +
            'of the source, so the analysis is what those associations add here, not the fact that a reference was ' +
            'made.',
    },
    {
        id: 'eng-satire',
        subject: 'english',
        question: 'How does satire work?',
        aliases: ['satire', 'parody', 'satirical exaggeration'],
        answer:
            'It exaggerates or imitates its target so the flaw becomes visible and ridiculous. Because it depends on ' +
            'the audience recognising the target, satire dates quickly, and it can be mistaken for endorsement when ' +
            'the target is forgotten.',
    },
    {
        id: 'eng-irony-in-drama',
        subject: 'english',
        question: 'What is dramatic irony?',
        aliases: ['audience knows more', 'irony in a play'],
        answer:
            'The audience knows something a character does not, so ordinary lines carry a second meaning. It creates ' +
            'tension and sympathy at once, and it is built by the order in which information is given rather than by ' +
            'any single line.',
    },
    {
        id: 'eng-foreshadowing',
        subject: 'english',
        question: 'How does foreshadowing work?',
        aliases: ['foreshadowing', 'hinting at what comes', 'planting a detail'],
        answer:
            'A detail planted early gains meaning later, so the ending feels inevitable rather than arbitrary. On ' +
            'rereading, the hint is obvious, which is the effect the writer wanted.',
    },
    {
        id: 'eng-pathetic-fallacy',
        subject: 'english',
        question: 'What is pathetic fallacy?',
        aliases: ['pathetic fallacy', 'weather reflecting mood', 'landscape and emotion'],
        answer:
            'Giving nature the emotions of a character or scene, so a storm accompanies rage. It is a specific kind ' +
            'of personification, and naming it precisely is better than calling it imagery.',
    },
    {
        id: 'eng-motif-vs-theme',
        subject: 'english',
        question: 'What is the difference between a motif and a theme?',
        aliases: ['motif versus theme', 'recurring image or idea', 'theme as a statement'],
        answer:
            'A motif is a recurring concrete element, such as an image or phrase; a theme is the idea the text ' +
            'explores. Motifs are the evidence, themes are the argument, which is why a theme should be a statement ' +
            'rather than one word.',
    },
    {
        id: 'eng-juxtaposition-uses',
        subject: 'english',
        question: 'How do I write about juxtaposition?',
        aliases: ['juxtaposition effect', 'placing two things side by side', 'contrast for meaning'],
        answer:
            'Name the two things placed together and say what the collision reveals: hypocrisy, loss, or scale. The ' +
            'meaning is in the reader making the comparison, so the analysis must state what comparison is invited.',
    },
    {
        id: 'eng-structure-of-argument',
        subject: 'english',
        question: 'How do composers build an argument in nonfiction?',
        aliases: ['structure of an argument', 'building a case in a speech', 'ordering reasons'],
        answer:
            'They establish common ground, then evidence, then answer the objection, keeping the strongest point for ' +
            'last where it is remembered. Tracking that order shows the strategy, which is more than listing the ' +
            'devices used.',
    },
    {
        id: 'eng-visual-composition',
        subject: 'english',
        question: 'How do I analyse the composition of an image?',
        aliases: ['visual composition', 'vectors and gaze', 'framing in an image'],
        answer:
            'Start with salience, what the eye goes to and why, then vectors such as gaze or lines that direct ' +
            'attention, framing, the angle and distance of the viewer, colour and any written text. Each positions ' +
            'the viewer.',
    },
    {
        id: 'eng-film-sound',
        subject: 'english',
        question: 'How does sound work in film?',
        aliases: ['film sound', 'diegetic sound', 'non diegetic score', 'silence in film'],
        answer:
            'Diegetic sound belongs to the world on screen; non-diegetic sound, such as the score, does not. Music ' +
            'tells the audience how to feel before the scene does, and sudden silence is one of the strongest effects ' +
            'available.',
    },
    {
        id: 'eng-editing-pace',
        subject: 'english',
        question: 'What does editing contribute to meaning?',
        aliases: ['film editing', 'cutting pace', 'montage', 'jump cut'],
        answer:
            'The rhythm of cutting controls tension, and what is cut against what creates meaning by juxtaposition. ' +
            'Long takes build unease or intimacy; rapid cutting fragments and disorients.',
    },
    {
        id: 'eng-camera-angles-meaning',
        subject: 'english',
        question: 'What do camera angles and shot types signify?',
        aliases: ['camera angle', 'low angle shot', 'wide shot meaning'],
        answer:
            'A low angle looks up and confers power, a high angle diminishes, a close-up forces intimacy and reveals ' +
            'emotion, and a wide shot isolates a figure in a setting. Say what the viewer is positioned to feel, not ' +
            'just what is framed.',
    },
    {
        id: 'eng-characterisation-in-film',
        subject: 'english',
        question: 'How is character built in film without narration?',
        aliases: ['characterisation in film', 'costume and props', 'performance and gesture'],
        answer:
            'Through costume, props, setting, how the camera treats them, how other characters look at them, and the ' +
            'performance itself. The absence of interior monologue is why film leans on the visual to carry what a ' +
            'novel would state.',
    },
    {
        id: 'eng-adaptation-analysis',
        subject: 'english',
        question: 'How do I compare a film adaptation with its text?',
        aliases: ['film adaptation comparison', 'what the film changed', 'why an adaptation cuts material'],
        answer:
            'Ask what the change in form required, what was cut and what was added, and what the new emphasis reveals ' +
            'about the context of the adaptation. Fidelity is not the criterion; what each form can do is.',
    },
    {
        id: 'eng-context-types',
        subject: 'english',
        question: 'Which kind of background belongs in an answer?',
        aliases: ['production and reception', 'historical background in an answer', 'how much background to include'],
        answer:
            'The context of production, including the composer life and historical moment, and the context of ' +
            'reception, which changes over time. Bring in only the context that changes how the text reads, not a ' +
            'paragraph of background.',
    },
    {
        id: 'eng-values-in-texts',
        subject: 'english',
        question: 'How do I write about the values in a text?',
        aliases: ['values in a text', 'assumptions of a text', 'whose values are endorsed'],
        answer:
            'Ask what the text treats as normal or desirable, who is given a voice and who is not, and what it ' +
            'punishes or rewards. Values sit in the structure and the endings as much as in what characters say.',
    },
    {
        id: 'eng-stream-of-consciousness',
        subject: 'english',
        question: 'What is stream of consciousness?',
        aliases: ['stream of consciousness', 'interior monologue style', 'thought as it happens'],
        answer:
            'Narration that follows a character thoughts as they occur, with the associations, interruptions and ' +
            'fragments of real thinking rather than ordered sentences. It gives intimacy and unreliability at once, ' +
            'since the reader receives the thought unedited.',
    },
    {
        id: 'eng-bildungsroman',
        subject: 'english',
        question: 'What is a bildungsroman?',
        aliases: ['bildungsroman', 'coming of age novel', 'novel of growing up'],
        answer:
            'A novel following a protagonist from youth into maturity, structured around the experiences that form ' +
            'them. Writing about one means tracking what the character loses as well as gains, since the form is ' +
            'about the cost of growing up.',
    },
    {
        id: 'eng-polysyndeton',
        subject: 'english',
        question: 'What are polysyndeton and asyndeton?',
        aliases: ['polysyndeton', 'asyndeton', 'repeated conjunctions', 'omitting conjunctions'],
        answer:
            'Polysyndeton repeats conjunctions where they are not needed, which slows the rhythm and piles detail on ' +
            'detail. Asyndeton removes them entirely, which quickens it and creates urgency. Both change pace rather ' +
            'than meaning.',
    },
];
