/**
 * NAPLAN: how the tests work and how to approach them.
 *
 * The format, the online platform, timing, and what preparation actually helps.
 */
import type { StudyEntry } from '../types';

export const naplanApproachEntries: StudyEntry[] = [
    {
        id: 'nap-writing-setting-economy',
        subject: 'naplan',
        question: 'How much description does a setting need?',
        aliases: ['how much description', 'setting in a short piece', 'describing economically'],
        answer:
            'Two or three specific details, chosen for the mood you want, and then get on with the story. A paragraph ' +
            'of description before anything happens loses the reader and the marks for structure.',
    },
    {
        id: 'nap-writing-punctuation-marks',
        subject: 'naplan',
        question: 'Which punctuation earns marks in NAPLAN writing?',
        aliases: ['punctuation marks in writing criteria', 'using a range of punctuation', 'commas and apostrophes in writing'],
        answer:
            'Correct sentence punctuation first, then commas in lists and after introductory phrases, apostrophes, ' +
            'and speech punctuation. A range used correctly scores above a wider range used wrongly.',
    },
    {
        id: 'nap-writing-spelling-strategy',
        subject: 'naplan',
        question: 'What should I do about a word I cannot spell?',
        aliases: ['word i cannot spell', 'spelling in the writing task', 'choosing a simpler word'],
        answer:
            'Write it as close as you can, or choose a word you know, but do not avoid the idea. Spelling is one ' +
            'criterion among ten, so losing the idea to protect the spelling is a bad trade.',
    },
    {
        id: 'nap-numeracy-question-format',
        subject: 'naplan',
        question: 'What kinds of numeracy question appear?',
        aliases: ['numeracy question formats', 'multiple choice and typed answers', 'drag and drop numeracy'],
        answer:
            'Multiple choice, typed numerical answers, and interactive formats such as dragging items or marking a ' +
            'point. For typed answers, check the unit asked for and whether a decimal or fraction is expected.',
    },
    {
        id: 'nap-numeracy-working-out',
        subject: 'naplan',
        question: 'Should I show working in NAPLAN numeracy?',
        aliases: ['showing working in naplan', 'rough paper for numeracy', 'working out on screen'],
        answer:
            'Only the answer is marked, but working on the provided paper prevents errors and lets you check. Holding ' +
            'a multi-step calculation in your head is where most avoidable mistakes come from.',
    },
    {
        id: 'nap-numeracy-unit-check',
        subject: 'naplan',
        question: 'Why do I keep losing marks on units?',
        aliases: ['losing marks on units', 'answer in the wrong unit', 'checking the unit asked for'],
        answer:
            'Because the question and the data often use different units, and the answer must match the one ' +
            'requested. Circle the unit in the question before calculating, then check the answer against it.',
    },
    {
        id: 'nap-numeracy-diagram-reading',
        subject: 'naplan',
        question: 'How do I read a diagram in a numeracy question?',
        aliases: ['reading a diagram', 'not to scale diagram', 'labels on a diagram'],
        answer:
            'Read every label and note anything marked not to scale, since the drawing may mislead deliberately. Add ' +
            'the information from the text onto the diagram before starting, so everything is in one place.',
    },
    {
        id: 'nap-numeracy-multi-part',
        subject: 'naplan',
        question: 'How do I handle a question with several pieces of information?',
        aliases: ['question with lots of information', 'multi part numeracy question', 'organising the information'],
        answer:
            'List what you are given and what is asked, then work out what connects them. Some information is ' +
            'deliberately not needed, so identifying what the question actually wants is part of the task.',
    },
    {
        id: 'nap-parents-role',
        subject: 'naplan',
        question: 'How can a parent help with NAPLAN?',
        aliases: ['how parents can help naplan', 'supporting a child for naplan', 'parent role naplan'],
        answer:
            'Keep it in proportion, ensure sleep and breakfast, read with or near the child, and follow up any gap ' +
            'the report reveals. Treating it as a major event raises anxiety, which lowers the result it was meant to ' +
            'improve.',
    },
    {
        id: 'nap-results-use',
        subject: 'naplan',
        question: 'What should we do with the NAPLAN report?',
        aliases: ['using naplan results', 'reading the report', 'acting on naplan results'],
        answer:
            'Use it to find specific gaps, comparing the areas within the report rather than the overall band, then ' +
            'raise those with the teacher. It describes one morning of work and is most useful as a prompt for a ' +
            'conversation.',
    },
    {
        id: 'nap-participation',
        subject: 'naplan',
        question: 'Is NAPLAN compulsory, and can a child be withdrawn?',
        aliases: ['is naplan compulsory', 'withdrawing from naplan', 'exemption from naplan'],
        answer:
            'Participation is expected of all students in those year levels, but withdrawal is possible on religious ' +
            'or philosophical grounds, and exemptions exist for some students with disability or limited English. ' +
            'Both are arranged through the school in advance, in writing.',
    },
    {
        id: 'nap-school-comparison',
        subject: 'naplan',
        question: 'How are schools compared using NAPLAN?',
        aliases: ['comparing schools', 'my school website', 'school results naplan'],
        answer:
            'Results are published per school on the My School website alongside a measure of the socio-educational ' +
            'background of its students, so schools are compared with statistically similar ones rather than raw ' +
            'averages. A single cohort is small, so year-to-year movement is noisy.',
    },
    {
        id: 'nap-what-results-cannot-tell',
        subject: 'naplan',
        question: 'What can NAPLAN results not tell me?',
        aliases: ['limits of naplan results', 'what naplan does not measure', 'is naplan a measure of ability'],
        answer:
            'They measure a narrow band of literacy and numeracy on one morning, so they say nothing about effort, ' +
            'creativity, science, the arts, or how a child is progressing against their own past work. They are most ' +
            'useful for spotting one specific gap.',
    },
    {
        id: 'nap-helping-with-writing',
        subject: 'naplan',
        question: 'How can I help my child with NAPLAN writing at home?',
        aliases: ['helping with writing at home', 'practising writing with a parent', 'supporting naplan writing'],
        answer:
            'Ten minutes of writing to a prompt, two or three times a week, then read it together and pick one thing ' +
            'to improve rather than correcting everything. Reading aloud what they wrote catches most punctuation ' +
            'problems without a lesson.',
    },
    {
        id: 'nap-explaining-to-a-child',
        subject: 'naplan',
        question: 'How do I explain NAPLAN to a young child?',
        aliases: ['explaining naplan to a child', 'talking to my child about naplan', 'reassuring a child about a test'],
        answer:
            'Describe it as a set of activities that shows the teacher what the class has learned, not a test they ' +
            'can pass or fail. Children take their cue from the adult tone, so treating it as ordinary is what keeps ' +
            'it ordinary.',
    },
    {
        id: 'nap-test-feels-hard',
        subject: 'naplan',
        question: 'What if my child says the test was too hard?',
        aliases: ['test felt too hard', 'child found naplan hard', 'difficult questions in the test'],
        answer:
            'In an adaptive test, answering well leads to harder questions, so finding it hard is often a sign of ' +
            'doing well. That is worth explaining beforehand, because a child who expects every question to be ' +
            'answerable can be shaken by one that is not.',
    },
    {
        id: 'nap-week-before',
        subject: 'naplan',
        question: 'What should we do in the week before NAPLAN?',
        aliases: ['week before naplan', 'preparing the week before', 'last week before the test'],
        answer:
            'Very little that is new. Familiarise with the online format if that has not been done, keep routines ' +
            'steady, and answer any questions the child has about what will happen. Anxiety in the last week costs ' +
            'more marks than the extra practice earns.',
    },
    {
        id: 'nap-unwell-on-the-day',
        subject: 'naplan',
        question: 'What if my child is unwell on a NAPLAN day?',
        aliases: ['unwell on a naplan day', 'missing a naplan test', 'catch up session naplan'],
        answer:
            'Schools run catch-up sessions within the testing window for students who miss a test, so contact the ' +
            'school rather than sending a sick child. If a test is missed entirely, that result is simply not ' +
            'reported.',
    },
    {
        id: 'nap-typing-practice',
        subject: 'naplan',
        question: 'Should my child practise typing for the online tests?',
        aliases: ['typing for naplan', 'practising typing', 'online writing test typing'],
        answer:
            'Yes for Year 5 and above, where writing is typed. A student who hunts for keys spends attention on the ' +
            'keyboard rather than the writing, and short regular typing practice through the year fixes it without ' +
            'any focus on the test.',
    },
    {
        id: 'nap-on-screen-calculator',
        subject: 'naplan',
        question: 'How does the on-screen calculator work?',
        aliases: ['on screen calculator naplan', 'using the calculator in the online test', 'calculator section online'],
        answer:
            'It appears only in the calculator section and works like a basic calculator with a mouse or keypad. ' +
            'Practising with it beforehand matters, because entering a long calculation with a mouse is slower than ' +
            'students expect.',
    },
    {
        id: 'nap-technology-problem',
        subject: 'naplan',
        question: 'What happens if the technology fails during a test?',
        aliases: ['technology failure in naplan', 'computer problem during the test', 'internet drops out naplan'],
        answer:
            'The platform is designed to resume where the student left off, and schools have procedures for ' +
            'interruptions including rescheduling within the window. It is worth telling a child in advance so a ' +
            'glitch does not read as their mistake.',
    },
    {
        id: 'nap-comparing-years',
        subject: 'naplan',
        question: 'Can I compare my child NAPLAN results between years?',
        aliases: ['comparing naplan results between years', 'growth between naplan tests', 'tracking progress naplan'],
        answer:
            'Broadly yes, since the tests are placed on a common scale, so growth between Year 3 and Year 5 can be ' +
            'described. Treat a single cohort movement cautiously though, because one morning of testing carries a ' +
            'lot of noise.',
    },
    {
        id: 'nap-planning-tutoring',
        subject: 'naplan',
        question: 'How can NAPLAN results guide tutoring?',
        aliases: ['using naplan to plan tutoring', 'what results tell a tutor', 'targeting weak areas'],
        answer:
            'Use the sub-areas rather than the overall band: a gap in measurement or in punctuation is actionable, ' +
            'where a lower overall numeracy figure is not. Bring the report to a first session, since it shortens the ' +
            'diagnosis considerably.',
    },
    {
        id: 'nap-what-teachers-do',
        subject: 'naplan',
        question: 'What do teachers do with NAPLAN results?',
        aliases: ['what teachers do with naplan', 'how schools use results', 'school planning from naplan'],
        answer:
            'They use them alongside their own assessment to identify patterns across a cohort, group students for ' +
            'support, and inform planning. For an individual child a teacher own observations are the better guide, ' +
            'since they cover the whole year.',
    },
    {
        id: 'nap-sharing-the-report',
        subject: 'naplan',
        question: 'Should I show my child their NAPLAN report?',
        aliases: ['showing a child their naplan report', 'discussing results with a child', 'talking about naplan results'],
        answer:
            'Yes, framed as information rather than a verdict, and focused on the specific areas rather than the ' +
            'overall position. A child who sees one area to work on responds better than one who takes away a single ' +
            'number about themselves.',
    },
    {
        id: 'nap-numeracy-vs-literacy',
        subject: 'naplan',
        question: 'What if my child is much stronger in one area?',
        aliases: ['stronger in numeracy than literacy', 'uneven naplan results', 'gap between areas'],
        answer:
            'A wide gap is common and useful information. Support the weaker area without withdrawing the stronger ' +
            'one, since confidence in one subject often carries a student through difficulty in another.',
    },
];
