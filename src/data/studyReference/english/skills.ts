/**
 * English: exam and study skills.
 *
 * Reading unseen texts, understanding question verbs, and studying a text
 * closely.
 */
import type { StudyEntry } from '../types';

export const englishSkillsEntries: StudyEntry[] = [
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
        aliases: ['question verbs', 'directive verbs', 'nesa glossary', 'command words in english'],
        answer:
            'Identify means name it. Explain means give how or why. Analyse means break it into parts and show how ' +
            'they relate. Evaluate means make a judgement against criteria. Discuss means argue the points for and ' +
            'against. Answering a lower verb than the one asked is the most common reason for lost marks.',
    },
    {
        id: 'eng-reading-strategies',
        subject: 'english',
        question: 'How do I read a text closely for study?',
        aliases: ['close reading', 'note taking english', 'study a novel'],
        answer:
            'Annotate as you read, marking technique, effect and how it links to the module idea. ' +
            'Build a quote bank grouped by idea rather than by chapter, since essays are organised by argument. ' +
            'Ten well-understood quotes beat fifty half-remembered ones.',
    },
    {
        id: 'eng-short-answer-technique',
        subject: 'english',
        question: 'How do I structure a short answer response?',
        aliases: ['short answer', 'how many techniques', 'marks per answer', 'paper 1 section 1'],
        answer:
            'Roughly one developed point per mark. ' +
            'For a 3-mark question, give a technique, a brief quote and the effect, then link to the question, three ' +
            'times over or in three linked sentences. ' +
            'Start by answering the question directly rather than introducing the text.',
    },
    {
        id: 'eng-comparing-unseen',
        subject: 'english',
        question: 'How do I compare two unseen texts?',
        aliases: ['comparing unseen texts', 'both texts question', 'similarities and differences', 'comparative short answer'],
        answer:
            'Find the common idea first, then show how each text treats it differently, with a technique and a quote ' +
            'from each. ' +
            'Handle both texts in the same paragraph rather than one after the other, and make the difference the ' +
            'point of the answer.',
    },
    {
        id: 'eng-annotating',
        subject: 'english',
        question: 'How should I annotate a text?',
        aliases: ['annotating', 'marking up a text', 'notes in the margin', 'study notes english'],
        answer:
            'Mark the technique, its effect, and the idea it serves, in three short notes rather than a paragraph. ' +
            'Use one colour per theme so patterns emerge. ' +
            'Annotation that just highlights pretty lines will not help in an exam; annotation that names effects ' +
            'becomes essay material.',
    },
    {
        id: 'eng-essay-adaptation',
        subject: 'english',
        question: 'How do I adapt a prepared essay to the question?',
        aliases: ['prepared essay', 'answering the question english', 'memorised essay'],
        answer:
            'Keep your evidence, change the argument to fit. ' +
            'Rewrite the thesis and every topic sentence using the question\u2019s key words, then adjust the ' +
            'analysis to explain that idea. ' +
            'Markers spot an unadapted essay instantly, and it caps the mark however well written it is.',
    },
    {
        id: 'eng-reading-widely',
        subject: 'english',
        question: 'Does reading widely actually help my marks?',
        aliases: ['reading widely', 'improve english marks', 'wider reading', 'related material'],
        answer:
            'Yes, in three ways: it builds vocabulary and sentence rhythm you absorb rather than memorise, it ' +
            'supplies related material for modules that need it, and it makes unseen texts less unfamiliar. ' +
            'Short stories, essays and quality journalism repay the time most.',
    },
    {
        id: 'eng-speech-delivery',
        subject: 'english',
        question: 'What makes a spoken presentation work?',
        aliases: ['delivering a speech', 'pace and pause in speaking', 'eye contact when presenting'],
        answer:
            'Pace slow enough to be followed, pauses where the audience needs to think, variation in volume, and eye ' +
            'contact that moves. Write for the ear: short sentences, concrete nouns, and signposts the listener can ' +
            'follow without a page.',
    },
    {
        id: 'eng-listening-task',
        subject: 'english',
        question: 'How do I answer a listening task?',
        aliases: ['listening task', 'note taking while listening', 'audio text questions'],
        answer:
            'Read the questions before the first playing, take notes on the first pass and fill detail on the second. ' +
            'Note tone, emphasis and pauses as well as words, since in a spoken text delivery carries meaning.',
    },
    {
        id: 'eng-multimodal-presentation',
        subject: 'english',
        question: 'How do I plan a multimodal presentation?',
        aliases: ['multimodal presentation', 'slides with a speech', 'combining modes'],
        answer:
            'Decide what each mode does that the others cannot, so images carry what would be slow to describe and ' +
            'speech carries the argument. Slides crowded with the words you are saying make both weaker.',
    },
    {
        id: 'eng-feedback-and-drafting',
        subject: 'english',
        question: 'How do I use feedback to redraft?',
        aliases: ['using feedback', 'redrafting', 'acting on marker comments'],
        answer:
            'Separate comments about the idea from comments about expression and fix the ideas first, since rewording ' +
            'a paragraph that argues the wrong thing wastes the work. Then reread the whole piece for the change you ' +
            'made, not just the sentence.',
    },
];
