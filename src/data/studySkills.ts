/**
 * How to study, which is the same advice whichever subject a student is sitting.
 *
 * These live outside the subject bank because they belong to no one subject, so
 * they offer no subject page. Like every other answer, each is written by hand
 * and sent exactly as written.
 */
export interface StudySkillEntry {
    id: string;
    question: string;
    aliases: string[];
    answer: string;
}

export const studySkillEntries: StudySkillEntry[] = [
    {
        id: 'skill-study-timetable',
        question: 'How do I make a study timetable that I will actually follow?',
        aliases: ['study timetable', 'study schedule', 'planning study time', 'weekly study plan'],
        answer:
            'Start from the hours you genuinely have after school, sport and sleep, not from the hours you wish you '
            + 'had. Block subjects in short sessions with the weakest topic first while you are fresh, leave two '
            + 'evenings untouched, and review the plan weekly. A timetable with no slack is abandoned by Wednesday.',
    },
    {
        id: 'skill-marking-own-work',
        question: 'How do I mark my own work properly?',
        aliases: ['marking my own work', 'self marking', 'using a marking guide', 'checking my own answers'],
        answer:
            'Use the marking guide or worked solutions and award marks as a marker would, not as you hope. Write '
            + 'beside each lost mark why it went: not known, misread, careless, or ran out of time. The pattern in '
            + 'those reasons tells you what to work on, and it is rarely what you assumed.',
    },
    {
        id: 'skill-exam-stress',
        question: 'How do I manage exam stress?',
        aliases: ['exam stress', 'exam anxiety', 'feeling overwhelmed by exams', 'panic before an exam'],
        answer:
            'Break the content into a list so the size of it becomes finite, work in short sessions with visible '
            + 'progress, and keep sleep and exercise in place first rather than last. Some nerves sharpen '
            + 'performance. If stress is stopping you working at all, that is worth raising with someone rather '
            + 'than pushing through.',
    },
    {
        id: 'skill-night-before',
        question: 'What should I do the night before an exam?',
        aliases: ['night before an exam', 'evening before a test', 'last minute cramming'],
        answer:
            'A light review of summary notes and formulas, everything packed, and an early night. Learning new '
            + 'content the night before rarely sticks and costs the sleep that makes recall fast. Tired recall is '
            + 'slower than rested recall, which is why the last hour is better spent stopping.',
    },
    {
        id: 'skill-revising-a-year',
        question: 'How do I revise a whole year of content?',
        aliases: ['revising a whole year', 'where to start revising', 'too much content to revise'],
        answer:
            'List every topic, then mark each one confident, shaky or unknown. Spend most of the time on shaky '
            + 'topics, since unknown ones take longest for the fewest marks and confident ones need only a check. '
            + 'Work from past questions rather than notes, because recognising content is not the same as using it.',
    },
    {
        id: 'skill-sleep-before-exam',
        question: 'Does sleep matter before an exam?',
        aliases: ['sleep before an exam', 'how much sleep before a test', 'staying up to study'],
        answer:
            'Yes, more than an extra hour of study. Sleep is when what you studied is consolidated, and being tired '
            + 'slows recall and reading accuracy, which is most of what an exam measures. A consistent bedtime in '
            + 'the week beforehand matters more than one long night.',
    },
    {
        id: 'skill-bad-result',
        question: 'How do I handle a bad test result?',
        aliases: ['bad test result', 'failed a test', 'disappointing mark', 'learning from a poor result'],
        answer:
            'Go through the paper question by question and sort the lost marks into content you did not know, '
            + 'questions you misread, and careless slips. Each needs a different response, and the mix is usually '
            + 'more encouraging than the mark. One result measures one morning, not your ability.',
    },
    {
        id: 'skill-active-study',
        question: 'What is the most effective way to study?',
        aliases: ['best way to study', 'effective study methods', 'is rereading notes useful'],
        answer:
            'Retrieval: close the book and write what you remember, then check. Spacing it over days beats one long '
            + 'session, and mixing topics beats blocking one. Rereading and highlighting feel productive and change '
            + 'very little, which is why students who do only those are surprised by their marks.',
    },
    {
        id: 'skill-order-of-a-paper',
        question: 'What is the best order to answer an exam paper?',
        aliases: ['order to answer a paper', 'should I answer in order', 'which question first'],
        answer:
            'Start with the questions you can do quickly to bank marks and settle your nerves, then the heavier '
            + 'ones, leaving anything that stalls you until last. Note the marks available on each question first, '
            + 'so you never spend fifteen minutes on two marks.',
    },
    {
        id: 'skill-unfamiliar-question',
        question: 'What do I do with a question I have never seen before?',
        aliases: ['unfamiliar question', 'question I have never seen', 'unseen application question'],
        answer:
            'Underline what it gives you and what it asks for, then ask which topic that information belongs to. '
            + 'Unfamiliar questions are almost always familiar content in a new context, so write what you know '
            + 'about that content and connect it to what was given.',
    },
];
