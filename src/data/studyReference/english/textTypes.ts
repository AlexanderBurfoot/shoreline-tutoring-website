/**
 * English: the forms and how each is analysed.
 *
 * What to write about when the text is a novel, play, film, poem, speech or
 * multimodal text, and how form itself carries meaning.
 */
import type { StudyEntry } from '../types';

export const englishTextTypeEntries: StudyEntry[] = [
    {
        id: 'eng-prose-fiction-form',
        subject: 'english',
        question: 'What should I say about the form of a novel?',
        aliases: ['novel as a form', 'prose fiction form', 'form of a novel'],
        answer:
            'That it has room to develop interiority and time. Comment on narrative voice, chapter structure, pacing ' +
            'and how the novel controls what the reader knows and when, which is where its meaning is shaped rather ' +
            'than merely carried.',
    },
    {
        id: 'eng-short-story-form',
        subject: 'english',
        question: 'How is a short story different to analyse?',
        aliases: ['short story form', 'analysing a short story', 'compression in a short story'],
        answer:
            'Compression is everything: it opens close to the crisis, implies what a novel would state, and often ' +
            'ends without resolution. Small details carry disproportionate weight, so a single image is usually worth ' +
            'a paragraph.',
    },
    {
        id: 'eng-drama-form',
        subject: 'english',
        question: 'What is distinctive about analysing drama?',
        aliases: ['drama form', 'stagecraft', 'analysing a play', 'dramatic techniques'],
        answer:
            'The text is written to be performed, so stage directions, entrances, silences, asides and the visual ' +
            'arrangement of bodies carry meaning. Refer to the audience rather than the reader, and treat performance ' +
            'as part of the text.',
    },
    {
        id: 'eng-film-form',
        subject: 'english',
        question: 'What should I write about when analysing film?',
        aliases: ['film form', 'analysing a film', 'cinematic meaning'],
        answer:
            'Treat the camera as the narrator. Shot type, angle, movement, editing pace, sound bridge, diegetic and ' +
            'non-diegetic sound and mise en scene are the language, so name the technique and then what it positions ' +
            'the viewer to feel.',
    },
    {
        id: 'eng-poetry-form-analysis',
        subject: 'english',
        question: 'How do I write about poetic form?',
        aliases: ['poetic form analysis', 'why a poet chose a form', 'form and meaning in poetry'],
        answer:
            'Ask what the form does to the content: a sonnet sets up a turn, free verse refuses an imposed order, a ' +
            'stanza break can enact a separation. Form is an argument about the subject, not decoration on it.',
    },
    {
        id: 'eng-nonfiction-form',
        subject: 'english',
        question: 'How do I analyse a speech, essay or memoir?',
        aliases: ['nonfiction analysis', 'analysing a speech', 'memoir and essay form'],
        answer:
            'Identify the speaker persona, the audience and the occasion, then show how structure and voice build ' +
            'authority and shift the audience position. In nonfiction, the constructed persona is as made as any ' +
            'fictional character.',
    },
    {
        id: 'eng-media-texts',
        subject: 'english',
        question: 'How do I analyse a media text?',
        aliases: ['media text analysis', 'news article analysis', 'advertisement analysis'],
        answer:
            'Look at selection and omission first: what is included, what is left out, what is named and what is ' +
            'passive. Then headline, image, caption, placement and register, and say whose interests the ' +
            'representation serves.',
    },
    {
        id: 'eng-graphic-and-multimodal',
        subject: 'english',
        question: 'How do I analyse a graphic novel or multimodal text?',
        aliases: ['graphic novel analysis', 'multimodal text', 'panel and gutter'],
        answer:
            'Read image and word as one system: panel size and shape, the gutter where the reader supplies the ' +
            'missing action, colour palette, and the relation between caption and picture, which may agree, add or ' +
            'contradict.',
    },
    {
        id: 'eng-appropriation',
        subject: 'english',
        question: 'What is an appropriation, and how do I write about one?',
        aliases: ['appropriation', 'reimagining a text', 'adapting a text for a new context'],
        answer:
            'A later text that reworks an earlier one for a new context and audience. Write about what is kept, what ' +
            'is changed and what that change reveals about the values of the new context rather than listing ' +
            'differences.',
    },
    {
        id: 'eng-intertextuality',
        subject: 'english',
        question: 'What is intertextuality?',
        aliases: ['intertextuality', 'texts referring to texts', 'dialogue between texts'],
        answer:
            'The way texts carry and answer each other, through allusion, imitation, parody or direct reworking. The ' +
            'meaning sits in the relationship, so the strongest analysis reads both texts as speaking rather than one ' +
            'copying.',
    },
    {
        id: 'eng-genre',
        subject: 'english',
        question: 'How do I write about genre?',
        aliases: ['genre conventions', 'subverting a genre', 'genre expectations'],
        answer:
            'Name the conventions the audience expects, then show where the text meets, bends or refuses them. A text ' +
            'that subverts a convention relies on the audience knowing it, so the subversion is only meaningful ' +
            'against the expectation.',
    },
    {
        id: 'eng-narrative-voice',
        subject: 'english',
        question: 'How do I write about narrative voice and point of view?',
        aliases: ['narrative voice', 'first person narration', 'limited third person', 'unreliable narrator'],
        answer:
            'Ask who is telling this, what they can know, and what they have reason to conceal. First person gives ' +
            'intimacy and bias together, limited third person controls sympathy, and omniscience can judge. ' +
            'Unreliability is a structural argument.',
    },
    {
        id: 'eng-structure-and-shape',
        subject: 'english',
        question: 'How do I write about the structure of a text?',
        aliases: ['structure of a text', 'non linear narrative', 'frame narrative', 'cyclical structure'],
        answer:
            'Track the order the reader receives things in, not the order they happened. Flashback, frame narrative, ' +
            'in medias res and cyclical endings all withhold or recontextualise, which is how structure produces ' +
            'meaning rather than merely organising it.',
    },
    {
        id: 'eng-characterisation-methods',
        subject: 'english',
        question: 'What are the specific methods of characterisation?',
        aliases: ['methods of characterisation', 'direct and indirect characterisation', 'foil character'],
        answer:
            'Direct statement, dialogue and idiolect, action under pressure, what others say, physical detail, ' +
            'interior monologue, and contrast with a foil. The strongest evidence is a choice the character makes ' +
            'when it costs them something.',
    },
    {
        id: 'eng-setting-symbolic',
        subject: 'english',
        question: 'How can setting work symbolically?',
        aliases: ['symbolic setting', 'landscape as meaning', 'place as a character'],
        answer:
            'When place carries the theme: a decaying house for a declining family, a locked garden for withheld ' +
            'feeling. Show that the setting changes as the meaning does, which is what separates symbolism from ' +
            'description.',
    },
];
