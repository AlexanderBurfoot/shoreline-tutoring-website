/**
 * English for primary years, which the site tutors from Year 1.
 *
 * Reading foundations and the early writing forms, answered for a parent helping
 * at home as much as for the student.
 */
import type { StudyEntry } from '../types';

export const englishPrimaryEntries: StudyEntry[] = [
    {
        id: 'eng-phonics',
        subject: 'english',
        question: 'What is phonics?',
        aliases: ['phonics', 'sounding out words', 'letter sounds'],
        answer:
            'Teaching the sounds letters and letter groups make, so a child can decode a word they have never seen ' +
            'rather than relying on memory or pictures. It is the foundation of reading, and gaps in it show up years ' +
            'later as slow, effortful reading.',
    },
    {
        id: 'eng-sight-words',
        subject: 'english',
        question: 'What are sight words?',
        aliases: ['sight words', 'high frequency words', 'words to know instantly'],
        answer:
            'Common words a child learns to recognise instantly, including ones that do not follow the usual sound ' +
            'patterns, such as said, was and the. Reading them without decoding frees attention for the rest of the ' +
            'sentence.',
    },
    {
        id: 'eng-blending',
        subject: 'english',
        question: 'How do I help a child blend sounds?',
        aliases: ['blending sounds', 'putting sounds together', 'how to blend when reading'],
        answer:
            'Say each sound slowly and then run them together, stretching rather than stopping between them, so c-a-t ' +
            'becomes caaat and then cat. Start with three-sound words and keep the sounds pure, saying mmm rather ' +
            'than muh.',
    },
    {
        id: 'eng-digraph',
        subject: 'english',
        question: 'What is a digraph?',
        aliases: ['digraph', 'two letters one sound', 'sh ch th sounds'],
        answer:
            'Two letters making a single sound, as in sh, ch, th, ai and oo. Recognising them as one unit is what ' +
            'stops a child sounding out s-h-i-p as four sounds, and most early reading difficulty sits here.',
    },
    {
        id: 'eng-syllable',
        subject: 'english',
        question: 'What is a syllable?',
        aliases: ['syllable', 'counting syllables', 'breaking a word into beats'],
        answer:
            'A beat in a word, each with one vowel sound: el-e-phant has three. Clapping them out helps with reading ' +
            'long words and with spelling, since most spelling rules apply syllable by syllable rather than to the ' +
            'whole word.',
    },
    {
        id: 'eng-reading-aloud',
        subject: 'english',
        question: 'How do I help with reading aloud?',
        aliases: ['reading aloud', 'listening to my child read', 'helping with home reading'],
        answer:
            'Let them try a hard word for a few seconds, then supply it rather than letting the sentence collapse. ' +
            'Ask what happened at the end of a page rather than after every line, and reread favourite books, since ' +
            'fluency grows from familiarity.',
    },
    {
        id: 'eng-reading-fluency',
        subject: 'english',
        question: 'What is reading fluency?',
        aliases: ['reading fluency', 'reading smoothly', 'expression when reading'],
        answer:
            'Reading at a comfortable pace, in phrases rather than word by word, with expression that shows the ' +
            'meaning is understood. It matters because a child spending all their effort on decoding has none left ' +
            'for comprehension.',
    },
    {
        id: 'eng-comprehension-primary',
        subject: 'english',
        question: 'What does comprehension actually involve?',
        aliases: ['comprehension', 'understanding what you read', 'reading for meaning'],
        answer:
            'More than answering questions: following who is doing what, picturing the scene, predicting, noticing ' +
            'when something no longer makes sense, and going back to fix it. A child who reads accurately but cannot ' +
            'retell has a comprehension gap rather than a reading one.',
    },
    {
        id: 'eng-paragraph-primary',
        subject: 'english',
        question: 'How do I write a paragraph at primary school?',
        aliases: ['paragraph at primary school', 'writing a paragraph for kids', 'topic sentence for primary'],
        answer:
            'One idea per paragraph: a sentence saying what it is about, two or three adding detail or an example, ' +
            'and one rounding it off. A new paragraph starts when the idea, time or place changes, which is the habit ' +
            'to build before high school.',
    },
    {
        id: 'eng-book-report',
        subject: 'english',
        question: 'How do I write a book report?',
        aliases: ['book report', 'writing about a book', 'book review for school'],
        answer:
            'Name the book and author, say briefly what happens without giving away the ending, then spend most of it ' +
            'on what you thought and why, with an example from the story. The opinion with evidence is the part being ' +
            'assessed.',
    },
    {
        id: 'eng-recount',
        subject: 'english',
        question: 'How do I write a recount?',
        aliases: ['recount', 'writing a recount', 'retelling an event'],
        answer:
            'Set the scene with who, when and where, tell the events in order using time words, and finish with how ' +
            'it ended or how you felt. It is written in past tense, and choosing which details to leave out is what ' +
            'makes it readable.',
    },
    {
        id: 'eng-narrative-primary',
        subject: 'english',
        question: 'How do I write a story at primary school?',
        aliases: ['narrative for primary school', 'writing a story for kids', 'story structure for primary'],
        answer:
            'A beginning that introduces a character and a place, a problem that gets worse, and an ending that ' +
            'solves it. One character and one problem is enough, and showing what the character does is more ' +
            'interesting than describing what they look like.',
    },
];
