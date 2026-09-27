/**
 * Selective High School Placement Test: reading.
 *
 * How each kind of reading question is answered, and how to pace the section.
 */
import type { StudyEntry } from '../types';

export const selectiveReadingEntries: StudyEntry[] = [
    {
        id: 'sel-reading-main-idea',
        subject: 'selective-high-school',
        question: 'How do I find the main idea of a passage?',
        aliases: ['main idea', 'central point of a text', 'what the passage is mostly about'],
        answer:
            'Ask what the whole passage is about rather than what any one paragraph says. The main idea covers every ' +
            'part of the text, so an option that is true of only the first paragraph is too narrow to be right.',
    },
    {
        id: 'sel-reading-purpose',
        subject: 'selective-high-school',
        question: 'How do I work out the author purpose?',
        aliases: ['author purpose', 'why the text was written', 'to inform persuade entertain'],
        answer:
            'Ask what the writer wanted the reader to do or feel: understand something, agree with something, or ' +
            'enjoy something. The tone and the kind of evidence used usually give it away faster than the content ' +
            'does.',
    },
    {
        id: 'sel-reading-tone',
        subject: 'selective-high-school',
        question: 'How do I identify tone in a passage?',
        aliases: ['tone of a passage', 'attitude of the writer', 'nostalgic or critical tone'],
        answer:
            'Look at the loaded words: the adjectives and verbs the writer chose when a neutral one was available. ' +
            'One sarcastic phrase can set the tone of a whole paragraph, so quote the word that told you.',
    },
    {
        id: 'sel-reading-inference-detail',
        subject: 'selective-high-school',
        question: 'How do I answer an inference question without guessing?',
        aliases: ['inference question', 'reading between the lines', 'implied meaning'],
        answer:
            'Find the line that hints at it, then choose the option that goes only one small step beyond what is ' +
            'written. If you cannot point at the words that support it, it is a guess rather than an inference.',
    },
    {
        id: 'sel-reading-word-in-context',
        subject: 'selective-high-school',
        question: 'How do I work out what a word means in its context?',
        aliases: ['word in context', 'meaning from surrounding words', 'unfamiliar word in a passage'],
        answer:
            'Cover the word and decide what would fit the sentence, then pick the option closest to that. The most ' +
            'common dictionary meaning is often not the one being used, which is why substitution beats recall.',
    },
    {
        id: 'sel-reading-compare-texts',
        subject: 'selective-high-school',
        question: 'How do I answer a question that covers both passages?',
        aliases: ['comparing two passages', 'both texts agree', 'difference between two writers'],
        answer:
            'Work out each writer position separately first, in a few words, then compare. Questions usually ask ' +
            'where they agree, where they differ, or how one would respond to the other.',
    },
    {
        id: 'sel-reading-text-structure',
        subject: 'selective-high-school',
        question: 'How do I answer questions about how a text is organised?',
        aliases: ['text structure', 'organisation of a passage', 'order of ideas'],
        answer:
            'Label what each paragraph does in two or three words: raises a problem, gives an example, answers an ' +
            'objection, concludes. The pattern of those labels is the structure the question is asking about.',
    },
    {
        id: 'sel-reading-fiction-character',
        subject: 'selective-high-school',
        question: 'How do I answer questions about a character?',
        aliases: ['character question', 'what the character feels', 'how a character is shown'],
        answer:
            'Look at what the character does and says rather than at what the narrator states. Actions under pressure ' +
            'reveal character, and the question usually rewards the option supported by an action.',
    },
    {
        id: 'sel-reading-setting',
        subject: 'selective-high-school',
        question: 'How does setting matter in a reading passage?',
        aliases: ['setting of a story', 'atmosphere of a place', 'mood created by a place'],
        answer:
            'Setting creates mood and constrains what can happen. A storm outside a house is rarely only weather: the ' +
            'description of place is usually doing work on how the reader feels about the events.',
    },
    {
        id: 'sel-reading-poetry-imagery',
        subject: 'selective-high-school',
        question: 'How do I write about imagery in a poem?',
        aliases: ['imagery in a poem', 'sensory language', 'picture created by words'],
        answer:
            'Name the image, name the sense it appeals to, then say what feeling it creates. An answer that names a ' +
            'technique without saying what it makes the reader feel has only done half the work.',
    },
    {
        id: 'sel-reading-figurative',
        subject: 'selective-high-school',
        question: 'How do I explain a metaphor or simile in a passage?',
        aliases: ['metaphor in a passage', 'simile explanation', 'figurative language question'],
        answer:
            'Say what two things are being compared and what they share. The mark is in the shared quality, not in ' +
            'the label: a simile comparing a crowd to a river suggests movement in one unstoppable direction.',
    },
    {
        id: 'sel-reading-persuasive-devices',
        subject: 'selective-high-school',
        question: 'How do I spot persuasive techniques in a text?',
        aliases: ['persuasive techniques', 'rhetorical question', 'emotive language', 'expert opinion'],
        answer:
            'Look for emotive words, rhetorical questions, statistics, expert quotation, repetition and appeals to ' +
            'fairness. Then say what each is trying to make the reader think, which is what the question really asks.',
    },
    {
        id: 'sel-reading-fact-opinion',
        subject: 'selective-high-school',
        question: 'How do I tell fact from opinion in a passage?',
        aliases: ['fact or opinion', 'verifiable statement', 'judgement word'],
        answer:
            'A fact can be checked; an opinion contains a judgement such as best, should or unfair. A sentence can ' +
            'hold both, and questions often use a statistic wrapped in a judgement to test exactly that.',
    },
    {
        id: 'sel-reading-cloze',
        subject: 'selective-high-school',
        question: 'How do I do gap-filling questions?',
        aliases: ['cloze question', 'which sentence fits the gap'],
        answer:
            'Read the sentence before and after the gap and look for a link word or a pronoun that must refer to ' +
            'something. The right option continues the idea and matches the tone; the wrong ones usually change the ' +
            'subject.',
    },
    {
        id: 'sel-reading-skimming',
        subject: 'selective-high-school',
        question: 'Should I read the passage or the questions first?',
        aliases: ['read the questions first', 'skimming a passage', 'approach to a reading test'],
        answer:
            'Skim the passage once for the shape of it, then read the questions, then reread the relevant parts ' +
            'closely. Reading every word carefully first costs time you need later.',
    },
    {
        id: 'sel-reading-time-per-question',
        subject: 'selective-high-school',
        question: 'How do I pace the reading section?',
        aliases: ['pacing the reading section', 'time per reading question', 'running out of time reading'],
        answer:
            'Divide the time by the number of texts, not by the number of questions, and keep to it. Leave a hard ' +
            'question, mark it, and come back: the next text may be easier and worth the same marks.',
    },
];
