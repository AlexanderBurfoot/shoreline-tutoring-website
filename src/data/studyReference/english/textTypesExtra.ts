/**
 * English: further text types and how each is approached.
 *
 * Memoir, life writing, journalism and online forms, which appear as related
 * texts and in unseen sections.
 */
import type { StudyEntry } from '../types';

export const englishFurtherTextTypeEntries: StudyEntry[] = [
    {
        id: 'eng-memoir',
        subject: 'english',
        question: 'What is distinctive about a memoir?',
        aliases: ['memoir', 'analysing a memoir', 'memoir versus autobiography'],
        answer:
            'A memoir treats one strand of a life rather than the whole of it, shaped by the meaning the writer now ' +
            'finds in it. Attend to the gap between the experiencing self and the narrating self, since that distance ' +
            'is where the reflection lives.',
    },
    {
        id: 'eng-biography-autobiography',
        subject: 'english',
        question: 'What is the difference between biography and autobiography?',
        aliases: ['biography', 'autobiography', 'life writing difference'],
        answer:
            'A biography is written about someone by another person, so it can draw on sources the subject never saw. ' +
            'An autobiography is written by the subject, with the authority of experience and the blind spots that ' +
            'come with it. Both are constructed, neither is neutral.',
    },
    {
        id: 'eng-travel-writing',
        subject: 'english',
        question: 'How do I analyse travel writing?',
        aliases: ['travel writing', 'analysing a travel text', 'writing about place'],
        answer:
            'Ask who is looking and what the gaze assumes: travel writing describes a place for readers elsewhere, so ' +
            'it often reveals as much about the writer culture as about the destination. Detail, comparison and the ' +
            'position of the narrator all carry that.',
    },
    {
        id: 'eng-review',
        subject: 'english',
        question: 'How do I write or analyse a review?',
        aliases: ['review', 'writing a review', 'film or book review'],
        answer:
            'A review describes enough for a reader who has not encountered the work, judges it against a stated ' +
            'criterion, and supports the judgement with specific evidence. Analysing one means identifying the ' +
            'criterion the reviewer is actually using, which is often unstated.',
    },
    {
        id: 'eng-editorial',
        subject: 'english',
        question: 'What is an editorial?',
        aliases: ['editorial', 'opinion piece', 'newspaper editorial'],
        answer:
            'An unsigned piece stating a publication position on a current issue, written to persuade a general ' +
            'readership. It typically concedes a point early to appear reasonable, then argues from shared values, ' +
            'which is the structure to look for.',
    },
    {
        id: 'eng-podcast-audio',
        subject: 'english',
        question: 'How do I analyse a podcast or audio text?',
        aliases: ['podcast', 'audio text analysis', 'radio feature'],
        answer:
            'Sound is the whole toolkit: voice, pace, silence, music, ambient recording and editing. Note who speaks ' +
            'and for how long, since airtime is the audio equivalent of prominence, and note what the listener is ' +
            'left to imagine.',
    },
    {
        id: 'eng-interview',
        subject: 'english',
        question: 'How do I analyse an interview?',
        aliases: ['interview', 'analysing an interview', 'transcript analysis'],
        answer:
            'Read the questions as closely as the answers: what is assumed, what is pressed, what is let pass. The ' +
            'interaction constructs the subject, so an interruption or an unanswered question carries meaning a ' +
            'transcript of answers alone would lose.',
    },
    {
        id: 'eng-blog-online',
        subject: 'english',
        question: 'How do I analyse an online text such as a blog?',
        aliases: ['blog', 'online text analysis', 'digital text conventions'],
        answer:
            'Attend to voice and immediacy, which online writing trades on, and to structure built for scanning: ' +
            'headings, short paragraphs, links and images. The comment thread and the ability to revise silently are ' +
            'both part of how the text works.',
    },
];
