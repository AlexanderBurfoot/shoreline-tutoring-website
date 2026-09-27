/**
 * English: the terms a senior student is expected to use precisely.
 *
 * Each says what the device does to a reader, since naming a technique without
 * its effect earns nothing.
 */
import type { StudyEntry } from '../types';

export const englishTermEntries: StudyEntry[] = [
    {
        id: 'eng-bathos',
        subject: 'english',
        question: 'What is bathos?',
        aliases: ['bathos', 'anticlimax', 'sudden drop from the serious'],
        answer:
            'An abrupt fall from the elevated to the trivial, producing anticlimax. Used deliberately it deflates a ' +
            'character pretension; used accidentally it undercuts a serious moment, which is why it is worth noticing ' +
            'whether the writer intended it.',
    },
    {
        id: 'eng-litotes',
        subject: 'english',
        question: 'What is litotes?',
        aliases: ['litotes', 'understatement by negation', 'not bad meaning good'],
        answer:
            'Understatement that asserts something by denying its opposite, as in not bad for excellent. It creates a ' +
            'dry, restrained tone, and in a war narrative it often signals feeling too large to state directly.',
    },
    {
        id: 'eng-synecdoche',
        subject: 'english',
        question: 'What is synecdoche?',
        aliases: ['synecdoche', 'part for the whole', 'all hands on deck'],
        answer:
            'Naming a part to mean the whole, as in all hands on deck for the crew, or the whole to mean a part. It ' +
            'focuses attention on the aspect chosen, so hands emphasises labour rather than the people.',
    },
    {
        id: 'eng-metonymy',
        subject: 'english',
        question: 'What is metonymy?',
        aliases: ['metonymy', 'substituting an associated thing', 'the crown means the monarchy'],
        answer:
            'Substituting something closely associated for the thing itself, as in the Crown for the monarchy or ' +
            'Canberra for the federal government. It can distance responsibility, which is why political writing uses ' +
            'it heavily.',
    },
    {
        id: 'eng-zeugma',
        subject: 'english',
        question: 'What is zeugma?',
        aliases: ['zeugma', 'one verb governing two objects', 'yoking two phrases'],
        answer:
            'One word governing two or more others, often with a shift in sense, as in she lost her keys and her ' +
            'temper. The incongruity is the effect: it compresses two ideas and usually produces wit.',
    },
    {
        id: 'eng-epistrophe',
        subject: 'english',
        question: 'What is epistrophe?',
        aliases: ['epistrophe', 'repetition at the end of clauses', 'ending repetition'],
        answer:
            'Repetition of the same word or phrase at the end of successive clauses, the mirror of anaphora. Because ' +
            'the emphasis lands last, it builds towards conviction, which is why speeches close with it.',
    },
    {
        id: 'eng-chiasmus',
        subject: 'english',
        question: 'What is chiasmus?',
        aliases: ['chiasmus', 'reversed parallel structure', 'abba structure'],
        answer:
            'A reversal of grammatical structure in successive phrases, as in ask not what your country can do for ' +
            'you but what you can do for your country. The reversal makes the second half feel like an answer to the ' +
            'first.',
    },
    {
        id: 'eng-in-medias-res',
        subject: 'english',
        question: 'What is in medias res?',
        aliases: ['in medias res', 'starting in the middle of the action', 'opening mid scene'],
        answer:
            'Beginning a narrative in the middle of events rather than at the start, filling in what came before ' +
            'afterwards. It creates immediate momentum and forces the reader to work out the situation, which builds ' +
            'involvement.',
    },
    {
        id: 'eng-deus-ex-machina',
        subject: 'english',
        question: 'What is a deus ex machina?',
        aliases: ['deus ex machina', 'improbable resolution', 'convenient rescue'],
        answer:
            'A resolution arriving from outside the story, unprepared by anything before it. Modern readers treat it ' +
            'as a flaw because it releases the characters from the problem rather than requiring them to resolve it.',
    },
    {
        id: 'eng-verisimilitude',
        subject: 'english',
        question: 'What is verisimilitude?',
        aliases: ['verisimilitude', 'appearance of truth', 'convincing realism'],
        answer:
            'The quality of seeming true, built from consistent detail rather than from accuracy. A fantasy can have ' +
            'high verisimilitude if its world obeys its own rules, which is why the term is about conviction rather ' +
            'than fact.',
    },
    {
        id: 'eng-pastiche',
        subject: 'english',
        question: 'What is pastiche?',
        aliases: ['pastiche', 'imitation of a style', 'pastiche versus parody'],
        answer:
            'A work imitating the style of another, usually in tribute rather than mockery. Parody exaggerates to ' +
            'ridicule; pastiche reproduces to celebrate or to place itself in a tradition, which matters when judging ' +
            'the composer attitude.',
    },
    {
        id: 'eng-leitmotif',
        subject: 'english',
        question: 'What is a leitmotif?',
        aliases: ['leitmotif', 'recurring associated theme', 'musical motif in film'],
        answer:
            'A recurring phrase, image or piece of music tied to a particular character or idea, so its return ' +
            'carries that association. In film the audience recognises the threat before they see it, which is how ' +
            'tension is built without dialogue.',
    },
    {
        id: 'eng-apostrophe-literary',
        subject: 'english',
        question: 'What is apostrophe as a technique?',
        aliases: ['apostrophe technique', 'direct address to the absent', 'addressing death or a city'],
        answer:
            'Direct address to someone absent or dead, or to an abstraction, as in O Death. It heightens emotion and ' +
            'creates intimacy with what cannot answer, which is why it appears in elegy and oratory.',
    },
    {
        id: 'eng-epithet',
        subject: 'english',
        question: 'What is an epithet?',
        aliases: ['epithet', 'descriptive phrase attached to a name', 'swift footed achilles'],
        answer:
            'A descriptive phrase fixed to a name, as in swift-footed Achilles. Repetition makes it part of the ' +
            'identity, and a change in the epithet late in a text signals a change in how the figure is to be seen.',
    },
    {
        id: 'eng-euphony-cacophony',
        subject: 'english',
        question: 'What are euphony and cacophony?',
        aliases: ['euphony', 'cacophony', 'pleasant and harsh sound'],
        answer:
            'Euphony is a pleasing arrangement of sounds, usually long vowels and soft consonants; cacophony is a ' +
            'harsh one, usually clustered hard consonants. Each supports a mood, so name the effect rather than only ' +
            'the term.',
    },
    {
        id: 'eng-plosives',
        subject: 'english',
        question: 'What are plosives in poetry?',
        aliases: ['plosive', 'hard consonants', 'p b t d k g sounds'],
        answer:
            'The abrupt consonants p, b, t, d, k and g, made by stopping the breath and releasing it. Clustered, they ' +
            'sound percussive and can suggest violence, bluntness or impatience, which is what to write about rather ' +
            'than the label.',
    },
    {
        id: 'eng-half-rhyme',
        subject: 'english',
        question: 'What is half rhyme?',
        aliases: ['half rhyme', 'slant rhyme', 'imperfect rhyme'],
        answer:
            'A near rhyme where the sounds almost but do not quite match, as in room and storm. It unsettles the ' +
            'expectation a full rhyme would satisfy, so poets use it where resolution would feel false.',
    },
    {
        id: 'eng-internal-rhyme',
        subject: 'english',
        question: 'What is internal rhyme?',
        aliases: ['internal rhyme', 'rhyme within a line', 'mid line rhyme'],
        answer:
            'Rhyme occurring within a single line rather than at the ends of lines. It quickens the pace and draws ' +
            'two words together for comparison, which end rhyme placed further apart cannot do.',
    },
    {
        id: 'eng-refrain',
        subject: 'english',
        question: 'What is a refrain?',
        aliases: ['refrain', 'repeated line in a poem', 'chorus in a poem'],
        answer:
            'A line or group of lines repeated at intervals, often at the end of each stanza. Because the context has ' +
            'changed by each return, the same words carry a different weight, and tracking that shift is the ' +
            'analysis.',
    },
    {
        id: 'eng-villanelle',
        subject: 'english',
        question: 'What is a villanelle?',
        aliases: ['villanelle', 'nineteen line poem', 'two refrains form'],
        answer:
            'A nineteen line form of five tercets and a quatrain, built on two rhymes and two lines that recur as ' +
            'refrains. The obsessive return of those lines suits grief and resistance, which is why the form is ' +
            'associated with both.',
    },
    {
        id: 'eng-sestina',
        subject: 'english',
        question: 'What is a sestina?',
        aliases: ['sestina', 'thirty nine line poem', 'six repeated end words'],
        answer:
            'A thirty-nine line form of six six-line stanzas and a three-line envoi, reusing the same six end words ' +
            'in a rotating order. The constraint forces new senses out of the same words, which is the point of ' +
            'attempting it.',
    },
    {
        id: 'eng-peripeteia',
        subject: 'english',
        question: 'What is peripeteia?',
        aliases: ['peripeteia', 'reversal of fortune', 'turning point in tragedy'],
        answer:
            'The reversal of a protagonist fortune, the turn from prosperity towards disaster in tragedy. It works ' +
            'best when it follows from the character own choice, so the audience sees the fall as earned rather than ' +
            'inflicted.',
    },
    {
        id: 'eng-anagnorisis',
        subject: 'english',
        question: 'What is anagnorisis?',
        aliases: ['anagnorisis', 'moment of recognition', 'tragic realisation'],
        answer:
            'The moment a character recognises the truth of their situation, often about themselves. Placed after the ' +
            'reversal, it is what turns misfortune into tragedy, because the character now understands what they have ' +
            'done.',
    },
    {
        id: 'eng-nemesis',
        subject: 'english',
        question: 'What is nemesis?',
        aliases: ['nemesis', 'agent of downfall', 'retribution in tragedy'],
        answer:
            'The force or figure that brings retribution, the agent through which a character overreaching is ' +
            'answered. In classical tragedy it carries a sense of cosmic justice rather than mere bad luck.',
    },
    {
        id: 'eng-ethos-pathos-logos',
        subject: 'english',
        question: 'What are ethos, pathos and logos?',
        aliases: ['ethos pathos logos', 'appeals in rhetoric', 'three rhetorical appeals'],
        answer:
            'The three appeals: ethos establishes the speaker credibility, pathos moves the audience feelings, and ' +
            'logos argues from evidence and reason. Strong persuasion uses all three, and naming which one a passage ' +
            'relies on is more useful than listing devices.',
    },
    {
        id: 'eng-tricolon',
        subject: 'english',
        question: 'What is a tricolon?',
        aliases: ['tricolon', 'three parallel phrases'],
        answer:
            'Three parallel words or phrases in succession, as in government of the people, by the people, for the ' +
            'people. Three is enough to establish a pattern and short enough to remember, which is why rhetoric ' +
            'returns to it constantly.',
    },
    {
        id: 'eng-polemic',
        subject: 'english',
        question: 'What is a polemic?',
        aliases: ['polemic', 'strongly argued attack', 'polemical writing'],
        answer:
            'A piece written to attack a position forcefully, making no pretence of balance. Reading one means ' +
            'separating the argument from the heat: a polemic can be right, but its rhetoric is designed to stop you ' +
            'asking.',
    },
    {
        id: 'eng-epiphany',
        subject: 'english',
        question: 'What is an epiphany in literature?',
        aliases: ['epiphany', 'moment of sudden insight', 'realisation in a story'],
        answer:
            'A moment of sudden insight in which an ordinary detail reveals something larger. It often replaces ' +
            'external resolution in modern short fiction, so the story ends with understanding rather than with ' +
            'events settled.',
    },
    {
        id: 'eng-archetype',
        subject: 'english',
        question: 'What is an archetype?',
        aliases: ['archetype', 'recurring character type', 'universal pattern'],
        answer:
            'A character, image or pattern recurring across cultures and periods, such as the mentor, the journey or ' +
            'the outsider. Identifying one is only the start: what matters is how this text uses or resists the ' +
            'expectation it creates.',
    },
    {
        id: 'eng-free-indirect',
        subject: 'english',
        question: 'What is free indirect discourse?',
        aliases: ['free indirect discourse', 'free indirect style', 'third person with a character voice'],
        answer:
            'Third person narration that takes on a character vocabulary and judgements without quotation marks, so ' +
            'the reader hears both narrator and character at once. It allows sympathy and irony simultaneously, which ' +
            'is why it dominates the realist novel.',
    },
];
