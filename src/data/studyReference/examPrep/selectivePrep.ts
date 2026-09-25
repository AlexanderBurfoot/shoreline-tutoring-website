/**
 * Selective High School Placement Test: preparing and sitting the test.
 *
 * Timelines, how placement works, practice strategy and the day itself.
 */
import type { StudyEntry } from '../types';

export const selectivePrepEntries: StudyEntry[] = [
    {
        id: 'sel-thinking-time-puzzles',
        subject: 'selective-high-school',
        question: 'How do I solve rate and work puzzles?',
        aliases: ['work rate puzzle', 'how long will it take together', 'combined rate problem'],
        answer:
            'Convert to a rate per unit time, add the rates, then invert. If one person takes 4 hours and another 6, ' +
            'their rates are a quarter and a sixth per hour, so together it is 2.4 hours.',
    },
    {
        id: 'sel-reading-vocabulary-context',
        subject: 'selective-high-school',
        question: 'How do I handle a question with several possible meanings?',
        aliases: ['several possible meanings', 'shades of meaning', 'closest in meaning question'],
        answer:
            'Read the sentence again and ask which meaning fits the tone as well as the sense. Test questions choose ' +
            'words where the common meaning is not the one used, so the surrounding words decide it.',
    },
    {
        id: 'sel-reading-poetry-structure',
        subject: 'selective-high-school',
        question: 'Why is a poem set out the way it is?',
        aliases: ['stanza and rhyme in a test', 'layout of a poem', 'line length in a poem'],
        answer:
            'Look at line length, stanza breaks, repetition and where the poem turns, then link that shape to the ' +
            'meaning. A one-line stanza or a broken rhyme is deliberate and usually the answer.',
    },
    {
        id: 'sel-reading-author-attitude',
        subject: 'selective-high-school',
        question: 'How do I work out the writer attitude to a subject?',
        aliases: ['writer attitude', 'how the author feels', 'loaded words in a text'],
        answer:
            'Find the words the writer chose where a neutral one was available, and the details they included or ' +
            'omitted. Attitude sits in selection as much as in statement.',
    },
    {
        id: 'sel-writing-planning-structure',
        subject: 'selective-high-school',
        question: 'What plan should I write before a Selective writing task?',
        aliases: ['plan for the writing task', 'what to jot down before writing', 'quick outline'],
        answer:
            'For a narrative: character, want, obstacle, turning point, ending. For a persuasive piece: position, ' +
            'three reasons, the objection, the close. Five lines of notes, no sentences.',
    },
    {
        id: 'sel-writing-persuasive-evidence',
        subject: 'selective-high-school',
        question: 'What counts as evidence in a persuasive piece?',
        aliases: ['evidence in persuasive writing', 'examples and statistics', 'supporting an argument'],
        answer:
            'Specific examples, plausible figures, expert opinion and analogy. Specificity is what persuades: one ' +
            'named example does more than three general claims, and invented statistics should be plausible rather ' +
            'than extravagant.',
    },
    {
        id: 'sel-writing-counter-argument',
        subject: 'selective-high-school',
        question: 'Should I mention the other side of the argument?',
        aliases: ['acknowledging the other side', 'rebuttal in persuasive writing', 'counter argument for a young writer'],
        answer:
            'Yes, briefly, and then answer it. Acknowledging and rebutting shows you have understood the issue, which ' +
            'markers reward, while ignoring it leaves the strongest objection standing.',
    },
    {
        id: 'sel-writing-narrative-voice',
        subject: 'selective-high-school',
        question: 'Should I write in first or third person?',
        aliases: ['first or third person', 'choosing a narrator', 'point of view in a test story'],
        answer:
            'First person is easier for immediate feeling and a single viewpoint. Third person allows more scope and ' +
            'is easier to keep consistent. Choose before you start and do not change partway, which is a common and ' +
            'costly slip.',
    },
    {
        id: 'sel-writing-dialogue-use',
        subject: 'selective-high-school',
        question: 'How much dialogue should a short story have?',
        aliases: ['how much dialogue', 'using speech in a story', 'dialogue that does work'],
        answer:
            'Enough to reveal character or move the story, usually a few exchanges. Pages of greetings fill space ' +
            'without advancing anything, and every line of speech should tell us something the narration would take ' +
            'longer to say.',
    },
    {
        id: 'sel-writing-time-management',
        subject: 'selective-high-school',
        question: 'How do I split the time in the writing task?',
        aliases: ['splitting writing time', 'how long to write', 'leaving time to check writing'],
        answer:
            'Roughly a tenth planning, three quarters writing and the rest checking. For thirty minutes that is ' +
            'three, twenty two and five. Running out with two paragraphs unwritten costs more than an unpolished ' +
            'sentence.',
    },
    {
        id: 'sel-writing-length',
        subject: 'selective-high-school',
        question: 'How long should my writing be?',
        aliases: ['how long should my writing be', 'length of a test piece', 'is longer better'],
        answer:
            'Long enough to develop one idea properly, usually one to two pages by hand. Length earns nothing by ' +
            'itself: a complete shorter piece scores above a longer one that stops mid-story.',
    },
    {
        id: 'sel-writing-openings-variety',
        subject: 'selective-high-school',
        question: 'What are good ways to open a piece of writing?',
        aliases: ['ways to open a piece', 'starting with dialogue', 'starting in the middle of action'],
        answer:
            'With action, with speech, with a striking detail, or with a short statement that raises a question. ' +
            'Avoid opening with the weather, with waking up, or by announcing what the piece will be about.',
    },
    {
        id: 'sel-writing-vocabulary-risk',
        subject: 'selective-high-school',
        question: 'Should I use ambitious vocabulary in a test?',
        aliases: ['using ambitious vocabulary', 'risk of long words', 'precise words in writing'],
        answer:
            'Use words you know precisely, including their connotation. A precise ordinary word beats a long word ' +
            'used slightly wrongly, because the error is more visible than the ambition.',
    },
    {
        id: 'sel-writing-editing-checklist',
        subject: 'selective-high-school',
        question: 'What should I check in the final minutes of a writing task?',
        aliases: ['final check on writing', 'editing checklist', 'last minutes of the writing task'],
        answer:
            'Sentences that run on, missing capitals and full stops, tense changes, repeated words, and paragraph ' +
            'breaks. Read it in your head at speaking pace: where you stumble, so will the marker.',
    },
    {
        id: 'sel-test-day-logistics',
        subject: 'selective-high-school',
        question: 'What happens on Selective test day?',
        aliases: ['test day logistics', 'what to bring to the test', 'test day routine', 'what to bring', 'what to eat before a test', 'eat', 'breakfast before a test'],
        answer:
            'Arrive early with the authority to attend advice, identification, pencils, an eraser and water. Sessions ' +
            'run one after another with short breaks, so bring something to eat and expect the day to be longer than ' +
            'the test time.',
    },
    {
        id: 'sel-after-the-test',
        subject: 'selective-high-school',
        question: 'What should we do after the test?',
        aliases: ['after the test', 'when results come out', 'waiting for results'],
        answer:
            'Put it down and return to normal school work, since nothing more can be changed. Results and offers ' +
            'arrive months later, and in the meantime the schoolwork that continues is what any school will build on.',
    },
    {
        id: 'sel-appeals',
        subject: 'selective-high-school',
        question: 'Can a Selective test result be appealed?',
        aliases: ['appeal a result', 'challenge a test result', 'review of a placement decision'],
        answer:
            'The mark itself is not open to appeal, since every paper is marked the same way. What can be raised is a ' +
            'problem affecting the sitting, through the illness and misadventure process, and that has to be lodged ' +
            'with the department within its stated window rather than after results.',
    },
    {
        id: 'sel-disability-provisions',
        subject: 'selective-high-school',
        question: 'Are there provisions for a student with a disability or medical condition?',
        aliases: ['disability provisions', 'special provisions', 'extra time in the test', 'adjustments for a test'],
        answer:
            'Yes. Adjustments such as extra time, rest breaks, a reader or assistive technology can be requested, ' +
            'with supporting documentation, as part of the application rather than on the day. Apply for them early, ' +
            'because approval takes time.',
    },
    {
        id: 'sel-reading-speed',
        subject: 'selective-high-school',
        question: 'How do I read faster without losing accuracy?',
        aliases: ['improve reading speed', 'reading faster', 'reading stamina for a test'],
        answer:
            'Read more, daily, in longer stretches than the test requires, so thirty minutes of dense text stops ' +
            'feeling long. Practise reading a passage once at a steady pace and then answering, rather than ' +
            'rereading, since rereading is what actually costs the time.',
    },
    {
        id: 'sel-official-information',
        subject: 'selective-high-school',
        question: 'Where do I check the official test details?',
        aliases: ['official information', 'where to check dates', 'department of education test information'],
        answer:
            'The NSW Department of Education publishes the dates, the application window, the participating schools ' +
            'and the current test structure each year, and those details change. Anything time-sensitive should be ' +
            'confirmed there rather than from a tutoring site or a forum.',
    },
    {
        id: 'sel-improving-thinking-skills',
        subject: 'selective-high-school',
        question: 'How do I improve a thinking skills score?',
        aliases: ['improving thinking skills', 'getting better at reasoning questions', 'thinking skills practice'],
        answer:
            'Work through questions slowly at first, writing why each wrong option is wrong, since the reasoning is ' +
            'the skill rather than the answer. Speed comes later. Students who only do timed sets keep making the ' +
            'same category of error faster.',
    },
    {
        id: 'sel-final-month',
        subject: 'selective-high-school',
        question: 'What should preparation look like in the final month?',
        aliases: ['final month of preparation', 'last four weeks before the test', 'tapering practice'],
        answer:
            'One full timed paper a week, reviewed thoroughly, plus short targeted work on the weakest question type. ' +
            'Stop introducing new material in the last fortnight and keep sleep steady, since the gain from another ' +
            'paper is smaller than the loss from fatigue.',
    },
    {
        id: 'sel-balancing-school-and-prep',
        subject: 'selective-high-school',
        question: 'How do we balance test preparation with school work?',
        aliases: ['balancing school and test prep', 'too much homework and preparation', 'fitting in practice'],
        answer:
            'School work comes first, because the placement score includes school assessment. Two or three short ' +
            'preparation sessions a week is enough alongside it, and dropping sport or sleep to fit more in usually ' +
            'costs more than it gains.',
    },
];
