/**
 * NAPLAN reading, conventions of language and writing.
 *
 * Reading question types, spelling, grammar and punctuation, and the two
 * writing genres with what the marking guide rewards.
 */
import type { StudyEntry } from '../types';

export const naplanLiteracyEntries: StudyEntry[] = [
    {
        id: 'nap-reading-question-types',
        subject: 'naplan',
        question: 'What kinds of question appear in NAPLAN reading?',
        aliases: ['naplan reading question types', 'locating information', 'interpreting a text'],
        answer:
            'Locating a stated detail, working out the meaning of a word, drawing an inference, identifying purpose ' +
            'or audience, and linking ideas across the text. Knowing which kind you are facing tells you whether to ' +
            'search or to think.',
    },
    {
        id: 'nap-reading-locating',
        subject: 'naplan',
        question: 'How do I find a detail quickly in a passage?',
        aliases: ['locating a detail', 'scanning for information', 'finding the answer in the text'],
        answer:
            'Take a distinctive word from the question, then scan for it or a synonym rather than rereading from the ' +
            'start. The answer is almost always within a sentence or two of where that word appears.',
    },
    {
        id: 'nap-reading-sequence',
        subject: 'naplan',
        question: 'How do I answer questions about the order of events?',
        aliases: ['order of events', 'sequencing a text', 'what happened first'],
        answer:
            'Number the events in the margin as you read. Watch for words such as earlier, before and meanwhile, ' +
            'which tell you the order of events is not the order of the sentences.',
    },
    {
        id: 'nap-reading-cause-effect',
        subject: 'naplan',
        question: 'How do I answer cause and effect questions?',
        aliases: ['cause and effect in a text', 'why did it happen', 'because in a passage'],
        answer:
            'Find the because, so or therefore, or the sentence that answers why. Check the direction: the question ' +
            'may want the cause when the text leads with the effect.',
    },
    {
        id: 'nap-reading-pronouns',
        subject: 'naplan',
        question: 'How do I work out what a pronoun refers to?',
        aliases: ['what does it refer to', 'pronoun reference', 'this and that in a text'],
        answer:
            'Look at the sentence before and try each candidate in place of the pronoun. The one that keeps the ' +
            'sentence sensible and grammatical is the referent, and it is usually the nearest matching noun.',
    },
    {
        id: 'nap-text-purpose-audience',
        subject: 'naplan',
        question: 'How do I identify purpose and audience?',
        aliases: ['purpose of a text', 'intended audience', 'who is the text written for'],
        answer:
            'Ask what the text wants the reader to do and who would need it. Vocabulary level, the examples chosen ' +
            'and where the text would appear all point to the audience.',
    },
    {
        id: 'nap-text-features',
        subject: 'naplan',
        question: 'What are text features and why are they tested?',
        aliases: ['text features', 'headings and subheadings', 'captions and diagrams', 'glossary'],
        answer:
            'Headings, subheadings, captions, labels, diagrams, bold words and contents pages help a reader find and ' +
            'organise information. Questions ask what a feature does, so answer with its job rather than describing ' +
            'it.',
    },
    {
        id: 'nap-visual-texts',
        subject: 'naplan',
        question: 'How do I answer questions about an image in a text?',
        aliases: ['image in a text', 'reading a diagram', 'what the picture adds'],
        answer:
            'Say what the image shows and what it adds that the words do not: a scale, a location, an emotion or a ' +
            'comparison. An image that only repeats the text is rarely the answer.',
    },
    {
        id: 'nap-spelling-patterns',
        subject: 'naplan',
        question: 'What spelling patterns are worth learning?',
        aliases: ['spelling patterns', 'silent letters', 'doubling the consonant', 'ie and ei'],
        answer:
            'Double the final consonant before adding -ing to a short-vowel word, drop the e before a vowel suffix, ' +
            'change y to i before most endings, and remember that i comes before e except after c in many but not all ' +
            'words.',
    },
    {
        id: 'nap-spelling-homophones',
        subject: 'naplan',
        question: 'Which homophones cause the most errors?',
        aliases: ['homophones', 'their there they re', 'to too two', 'your you re'],
        answer:
            'Their shows belonging, there is a place, they are is a contraction. To is a direction, too means also or ' +
            'excessive, two is the number. Reading the sentence with the full form expanded settles it.',
    },
    {
        id: 'nap-spelling-prefix-suffix',
        subject: 'naplan',
        question: 'How do prefixes and suffixes change a word?',
        aliases: ['prefix', 'suffix', 'adding un and dis', 'word building'],
        answer:
            'A prefix goes before the root and usually changes meaning: un, dis, re, pre, mis. A suffix goes after ' +
            'and usually changes the word class: ly makes an adverb, ness a noun, able an adjective.',
    },
    {
        id: 'nap-spelling-proofreading',
        subject: 'naplan',
        question: 'How do I find the misspelt word in a sentence?',
        aliases: ['finding the misspelt word', 'proofreading task', 'spot the spelling error'],
        answer:
            'Read the sentence slowly, checking each longer word letter by letter, and be suspicious of double ' +
            'letters and endings. Writing the word out as you think it should be often makes the error obvious.',
    },
    {
        id: 'nap-grammar-word-classes',
        subject: 'naplan',
        question: 'What are the parts of speech?',
        aliases: ['noun verb adjective adverb', 'word classes'],
        answer:
            'Nouns name, verbs do, adjectives describe nouns, adverbs describe verbs, pronouns replace nouns, ' +
            'prepositions show position or time, and conjunctions join. The same word can change class depending on ' +
            'its job in the sentence.',
    },
    {
        id: 'nap-grammar-subject-verb',
        subject: 'naplan',
        question: 'What is subject-verb agreement?',
        aliases: ['subject verb agreement', 'singular and plural verb', 'the team is or are'],
        answer:
            'A singular subject takes a singular verb. The trap is a phrase between them: in the box of apples is on ' +
            'the table, the subject is box, not apples.',
    },
    {
        id: 'nap-grammar-tense',
        subject: 'naplan',
        question: 'How do I keep tense consistent?',
        aliases: ['verb tense', 'consistent tense', 'past present future'],
        answer:
            'Choose past or present for the piece and stay with it, changing only when the meaning requires it. ' +
            'Irregular verbs cause most errors: went not goed, brought not bringed.',
    },
    {
        id: 'nap-grammar-clauses',
        subject: 'naplan',
        question: 'What is the difference between a phrase and a clause?',
        aliases: ['phrase and clause', 'main clause', 'subordinate clause'],
        answer:
            'A clause has a verb and its subject; a phrase does not. A main clause stands alone as a sentence, and a ' +
            'subordinate clause, beginning with a word such as because or although, needs one to attach to.',
    },
    {
        id: 'nap-grammar-conjunctions',
        subject: 'naplan',
        question: 'How do I join sentences correctly?',
        aliases: ['joining sentences', 'conjunction', 'comma splice'],
        answer:
            'Use a conjunction such as and, but, because or although, or a semicolon. A comma alone between two ' +
            'complete sentences is a comma splice, which is one of the most commonly marked errors.',
    },
    {
        id: 'nap-punctuation-sentences',
        subject: 'naplan',
        question: 'What are the rules for ending and starting a sentence?',
        aliases: ['full stop', 'sentence boundaries'],
        answer:
            'Capital letter at the start and for proper nouns, and a full stop, question mark or exclamation mark at ' +
            'the end. Run-on sentences and sentence fragments are both marked down, so read for where the voice would ' +
            'stop.',
    },
    {
        id: 'nap-punctuation-commas',
        subject: 'naplan',
        question: 'When do I use a comma?',
        aliases: ['comma rules', 'comma in a list', 'comma after an introductory phrase'],
        answer:
            'Between items in a list, after an introductory phrase, around extra information that could be lifted ' +
            'out, and before a conjunction joining two complete clauses. Not simply wherever you would pause.',
    },
    {
        id: 'nap-punctuation-apostrophes',
        subject: 'naplan',
        question: 'How do apostrophes work?',
        aliases: ['apostrophe', 'possession apostrophe', 'contraction apostrophe', 'its and it is'],
        answer:
            'They mark a contraction, as in do not becoming dont with the apostrophe replacing the o, or possession: ' +
            'the dog bowl becomes the dogs bowl with an apostrophe before the s. Plurals never take one.',
    },
    {
        id: 'nap-punctuation-quotation',
        subject: 'naplan',
        question: 'How do I punctuate speech and quotations?',
        aliases: ['quotation marks', 'punctuating speech', 'comma before speech'],
        answer:
            'Open the speech marks, use a capital for the first word spoken, and keep the comma, full stop or ' +
            'question mark inside them. A new speaker starts on a new line.',
    },
    {
        id: 'nap-punctuation-other',
        subject: 'naplan',
        question: 'What do colons, semicolons and dashes do?',
        aliases: ['colon', 'semicolon', 'brackets and dashes'],
        answer:
            'A colon introduces a list or explanation. A semicolon joins two closely related complete clauses. ' +
            'Brackets and paired dashes hold an aside that the sentence would survive without.',
    },
    {
        id: 'nap-writing-narrative-ideas',
        subject: 'naplan',
        question: 'How do I get an idea for a NAPLAN narrative quickly?',
        aliases: ['narrative idea', 'story prompt', 'what to write about'],
        answer:
            'Take the prompt and ask who wants something, what stops them, and what they do about it. One character, ' +
            'one problem and one place is enough for the time available.',
    },
    {
        id: 'nap-writing-narrative-marking',
        subject: 'naplan',
        question: 'What does the narrative marking guide reward?',
        aliases: ['narrative marking criteria', 'how narratives are scored', 'ideas and character marks'],
        answer:
            'Audience, text structure, ideas, character and setting, vocabulary, cohesion, paragraphing, sentence ' +
            'structure, punctuation and spelling, each scored separately. Spelling and punctuation carry real marks, ' +
            'so the final check matters.',
    },
    {
        id: 'nap-writing-persuasive-plan',
        subject: 'naplan',
        question: 'How do I plan a persuasive text?',
        aliases: ['planning a persuasive text', 'position and reasons', 'persuasive plan'],
        answer:
            'Write your position in one sentence, then three reasons in the order you will use them, strongest last, ' +
            'with one example each. Add the objection you will answer. That plan is the piece in miniature.',
    },
    {
        id: 'nap-writing-persuasive-language',
        subject: 'naplan',
        question: 'What language makes writing persuasive?',
        aliases: ['persuasive language', 'modality', 'emotive words', 'inclusive language'],
        answer:
            'High modality words such as must and will, emotive vocabulary, inclusive we and us, rhetorical ' +
            'questions, and evidence that sounds specific. Used sparingly they persuade; used constantly they sound ' +
            'like an advertisement.',
    },
    {
        id: 'nap-writing-cohesion',
        subject: 'naplan',
        question: 'How do I make my writing flow?',
        aliases: ['cohesion in writing', 'linking words', 'connecting paragraphs'],
        answer:
            'Link paragraphs with words that show the relationship, such as however, as a result and in contrast, and ' +
            'repeat a key word from the end of one paragraph near the start of the next.',
    },
    {
        id: 'nap-writing-openings',
        subject: 'naplan',
        question: 'How should I start a NAPLAN writing task?',
        aliases: ['starting a naplan piece', 'first paragraph', 'introduction that works'],
        answer:
            'For a narrative, begin in the middle of something happening. For a persuasive piece, state the position ' +
            'in the first sentence. Either way, do not spend the first paragraph explaining what you are about to ' +
            'write.',
    },
    {
        id: 'nap-writing-vocabulary',
        subject: 'naplan',
        question: 'How do I show a strong vocabulary?',
        aliases: ['vocabulary in naplan writing', 'precise word choice', 'avoiding said and nice'],
        answer:
            'Replace vague words with precise ones and cut adverbs that prop up a weak verb: whispered rather than ' +
            'said quietly. Two or three well-chosen words matter more than a piece crowded with long ones.',
    },
    {
        id: 'nap-writing-editing',
        subject: 'naplan',
        question: 'What should I check in the last five minutes?',
        aliases: ['editing a piece', 'final check', 'proofreading my writing'],
        answer:
            'Full stops and capitals, one idea per paragraph, tense consistency, apostrophes, and any word you were ' +
            'unsure how to spell. These are the marks most easily recovered.',
    },
    {
        id: 'nap-writing-handwriting',
        subject: 'naplan',
        question: 'Does handwriting and presentation matter?',
        aliases: ['handwriting in naplan', 'presentation of writing', 'legibility'],
        answer:
            'Only in that the marker must be able to read it. No marks are given for neatness, but a word that cannot ' +
            'be deciphered cannot be credited, and crossing out clearly is better than writing over.',
    },
    {
        id: 'nap-test-conditions',
        subject: 'naplan',
        question: 'What are the NAPLAN test conditions?',
        aliases: ['naplan test conditions', 'online naplan', 'how long is each test'],
        answer:
            'The tests are done online from Year 3 onward except Year 3 writing, which is on paper. Each sitting is ' +
            'short, between 40 and 65 minutes, and the questions come one at a time so earlier answers cannot be ' +
            'reviewed freely.',
    },
    {
        id: 'nap-band-meaning',
        subject: 'naplan',
        question: 'What do the NAPLAN proficiency levels mean?',
        aliases: ['exceeding developing', 'naplan bands explained'],
        answer:
            'Results are reported as exceeding, strong, developing or needs additional support, against an expected ' +
            'standard for the year level. They describe one morning of work, not a childs ability, and are most ' +
            'useful for spotting a specific gap.',
    },
    {
        id: 'nap-preparing-without-stress',
        subject: 'naplan',
        question: 'How do I prepare for NAPLAN without stress?',
        aliases: ['preparing for naplan', 'naplan anxiety', 'how much practice is enough'],
        answer:
            'A little familiarisation with the format, a few timed practice questions, and normal sleep and ' +
            'breakfast. Heavy drilling raises anxiety without raising scores, since the tests measure skills built ' +
            'over years.',
    },
];
