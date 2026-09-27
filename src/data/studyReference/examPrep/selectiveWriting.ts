/**
 * Selective High School Placement Test: the writing task.
 *
 * Planning, structure and craft for a piece written in thirty minutes.
 */
import type { StudyEntry } from '../types';

export const selectiveWritingEntries: StudyEntry[] = [
    {
        id: 'sel-writing-quick-plan',
        subject: 'selective-high-school',
        question: 'How do I plan a test essay in three minutes?',
        aliases: ['planning quickly', 'three minute plan', 'essay plan under time pressure'],
        answer:
            'Decide the one idea the piece is about, then jot three or four stages in order. Three minutes of ' +
            'planning saves more than it costs, because most lost marks come from a piece that wanders.',
    },
    {
        id: 'sel-writing-structure-narrative',
        subject: 'selective-high-school',
        question: 'How should a short narrative be structured?',
        aliases: ['narrative structure', 'orientation complication resolution', 'short story shape'],
        answer:
            'Set the scene briefly, introduce a complication early, build it, then resolve it. In a short piece, ' +
            'start close to the trouble: a whole paragraph of scene setting leaves no room for the story.',
    },
    {
        id: 'sel-writing-structure-persuasive',
        subject: 'selective-high-school',
        question: 'How should a persuasive piece be structured?',
        aliases: ['persuasive structure', 'introduction body conclusion', 'arguing a position'],
        answer:
            'State the position clearly, give two or three reasons with evidence or examples, answer the strongest ' +
            'objection, then close by restating the position in different words. Sitting on the fence is what loses ' +
            'marks.',
    },
    {
        id: 'sel-writing-opening-lines',
        subject: 'selective-high-school',
        question: 'How do I write an opening that earns attention?',
        aliases: ['strong opening', 'first sentence of a story', 'hook the reader'],
        answer:
            'Begin with action, speech or a detail that raises a question, not with waking up or with the weather. ' +
            'One concrete image in the first line does more than three sentences of description.',
    },
    {
        id: 'sel-writing-endings',
        subject: 'selective-high-school',
        question: 'How do I finish a piece well?',
        aliases: ['ending a story', 'conclusion of a piece', 'last line'],
        answer:
            'Return to something from the opening, changed by what happened. Avoid it was all a dream and avoid ' +
            'explaining the message: trust the reader to see what the piece has shown them.',
    },
    {
        id: 'sel-writing-show-not-tell',
        subject: 'selective-high-school',
        question: 'How do I show a feeling instead of naming it?',
        aliases: ['showing a feeling', 'instead of saying he was sad', 'physical detail for emotion'],
        answer:
            'Give the physical detail the feeling causes: hands that will not stay still, a reply that comes too ' +
            'quickly. Naming the emotion tells the reader what to think; showing it lets them arrive there.',
    },
    {
        id: 'sel-writing-vocabulary-choice',
        subject: 'selective-high-school',
        question: 'How do I use better vocabulary without sounding forced?',
        aliases: ['word choice in writing', 'precise verbs', 'avoiding thesaurus words'],
        answer:
            'Choose precise verbs and nouns rather than decorating with adjectives. Trudged says more than walked ' +
            'slowly. A word you would not use in speech and cannot define exactly will read as a word borrowed for ' +
            'the test.',
    },
    {
        id: 'sel-writing-sentence-variety',
        subject: 'selective-high-school',
        question: 'How do I vary my sentences?',
        aliases: ['sentence variety', 'short sentence for effect', 'starting sentences differently'],
        answer:
            'Mix lengths: a short sentence after two long ones lands hard. Start some sentences with something other ' +
            'than the subject, such as a time or a participle, so the rhythm does not become a list.',
    },
    {
        id: 'sel-writing-paragraphing',
        subject: 'selective-high-school',
        question: 'When should I start a new paragraph?',
        aliases: ['paragraphing', 'when to start a new paragraph', 'paragraph length'],
        answer:
            'On a change of time, place, speaker or idea. In a persuasive piece, one reason per paragraph. A page ' +
            'with no paragraph breaks loses marks for structure however good the sentences are.',
    },
    {
        id: 'sel-writing-dialogue',
        subject: 'selective-high-school',
        question: 'How do I punctuate and use dialogue?',
        aliases: ['writing dialogue', 'speech marks', 'new line for a new speaker'],
        answer:
            'Punctuation goes inside the speech marks, and each new speaker starts on a new line. Use dialogue to ' +
            'reveal character or move the story, not to exchange greetings.',
    },
    {
        id: 'sel-writing-describing-place',
        subject: 'selective-high-school',
        question: 'How do I describe a place without listing?',
        aliases: ['describing a setting', 'sensory description', 'atmosphere in writing'],
        answer:
            'Choose three details, not ten, and include at least one that is not visual: a sound, a smell, a ' +
            'temperature. Let the character notice them, so the description also tells us something about the person.',
    },
    {
        id: 'sel-writing-handwriting-time',
        subject: 'selective-high-school',
        question: 'How do I manage the time in the writing task?',
        aliases: ['time in the writing task', 'how long to spend planning', 'leaving time to check'],
        answer:
            'For a thirty minute task: three minutes planning, twenty two writing, five checking. Checking catches ' +
            'missing full stops, lost capitals and half-finished sentences, which are the cheapest marks in the ' +
            'paper.',
    },
    {
        id: 'sel-writing-responding-to-stimulus',
        subject: 'selective-high-school',
        question: 'How do I respond to a picture or quotation prompt?',
        aliases: ['stimulus prompt', 'writing from a picture', 'using the quotation given'],
        answer:
            'Find one specific element in the stimulus and build the piece around it rather than describing the whole ' +
            'thing. The marker wants to see the connection, so make it clear early, then write your own piece.',
    },
    {
        id: 'sel-writing-common-errors',
        subject: 'selective-high-school',
        question: 'What errors cost the most marks in test writing?',
        aliases: ['common writing errors', 'their there they re', 'run on sentence', 'tense slipping'],
        answer:
            'Slipping tense partway through, run-on sentences joined by commas, missing apostrophes, and homophone ' +
            'confusion such as their and there. Each is easy to catch in a final read and expensive to leave.',
    },
    {
        id: 'sel-writing-marking-criteria',
        subject: 'selective-high-school',
        question: 'What do markers actually reward?',
        aliases: ['writing marking criteria', 'what markers look for', 'how writing is scored'],
        answer:
            'A clear purpose and structure, ideas developed rather than listed, control of sentences and punctuation, ' +
            'and vocabulary used precisely. Length alone earns nothing: a shorter piece that does all four scores ' +
            'higher.',
    },
];
