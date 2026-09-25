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
    {
        id: 'skill-flashcards',
        question: 'How do I use flashcards effectively?',
        aliases: ['flashcards', 'using flash cards', 'anki'],
        answer:
            'One fact per card, written as a question so you have to retrieve rather than recognise. '
            + 'Say the answer before turning it over, and set aside the ones you get wrong for a second '
            + 'pass rather than shuffling them back in. Reviewing over several days beats one long '
            + 'sitting.',
    },
    {
        id: 'skill-summarising',
        question: 'How do I summarise a chapter usefully?',
        aliases: ['summarising a chapter', 'how to make summary notes', 'condensing notes'],
        answer:
            'Read a section, then write the summary with the book closed, in your own words. Copying '
            + 'while reading produces neat notes you have not learned. Aim to reduce a chapter to a '
            + 'page, and note what you could not recall, because that is the part to revisit.',
    },
    {
        id: 'skill-mind-maps',
        question: 'When is a mind map worth making?',
        aliases: ['mind map', 'concept map', 'diagram of a topic'],
        answer:
            'When a topic has many connected parts and you need the links rather than the detail, '
            + 'such as a biology module or the causes of an event. It is less useful for procedures, '
            + 'where the order matters and a worked example teaches more.',
    },
    {
        id: 'skill-learning-formulas',
        question: 'How do I learn formulas properly?',
        aliases: ['learning formulas', 'memorising formulas', 'remembering equations'],
        answer:
            'Use them rather than reading them: work problems until the substitution is automatic, '
            + 'and write the formula from memory before each attempt. Knowing what each symbol means '
            + 'and what the units are makes the formula far harder to misremember.',
    },
    {
        id: 'skill-concentration',
        question: 'How do I concentrate for longer?',
        aliases: ['concentrating for longer', 'focus while studying', 'attention span study'],
        answer:
            'Work in fixed blocks with the phone in another room, and start with the hardest task '
            + 'while attention is freshest. Twenty-five minutes of genuine work beats an hour of '
            + 'interrupted work, and a specific goal for the block matters more than its length.',
    },
    {
        id: 'skill-interleaving',
        question: 'What is interleaving?',
        aliases: ['interleaving', 'mixing topics when studying', 'blocked versus mixed practice'],
        answer:
            'Mixing different topics or question types within a study session rather than doing one '
            + 'kind repeatedly. It feels harder and produces better retention, because you have to work '
            + 'out which method applies, which is exactly what an exam requires.',
    },
    {
        id: 'skill-rereading-trap',
        question: 'Why does rereading feel productive but teach little?',
        aliases: ['rereading notes', 'why rereading does not work', 'illusion of knowing', 'stop rereading'],
        answer:
            'Because recognising material feels like knowing it. The second reading is easier, and '
            + 'that ease is mistaken for mastery. Closing the book and writing what you remember is '
            + 'uncomfortable for the same reason it works: it shows you what is missing.',
    },
    {
        id: 'skill-practical-exam',
        question: 'How do I prepare for a practical exam?',
        aliases: ['preparing for a practical exam', 'skills assessment prac', 'practical test preparation'],
        answer:
            'Rehearse the procedures rather than reading them: know the apparatus, the order of '
            + 'steps, the safety controls and how to record results. Practise the calculations you will '
            + 'need on the data, since that is where time is lost under pressure.',
    },
    {
        id: 'skill-asking-for-help',
        question: 'How do I ask a teacher for help effectively?',
        aliases: ['asking a teacher for help', 'how to ask for help', 'getting help with a topic'],
        answer:
            'Bring the specific question and what you have already tried, rather than saying you do '
            + 'not understand the topic. Showing the point at which your working breaks down lets a '
            + 'teacher fix the actual gap in a couple of minutes.',
    },
    {
        id: 'skill-catching-up',
        question: 'How do I catch up after missing school?',
        aliases: ['catching up after absence', 'missed classes', 'behind after being away'],
        answer:
            'Find out what was covered rather than what was set, since the explanation matters more '
            + 'than the exercises. Work forward from the earliest gap, because later topics usually '
            + 'depend on it, and ask for the one worked example the class was given.',
    },
    {
        id: 'skill-study-with-a-friend',
        question: 'Is studying with a friend useful?',
        aliases: ['studying with a friend', 'study group', 'revising together'],
        answer:
            'Yes for explaining and testing each other, which forces retrieval, and for comparing '
            + 'marking of the same past question. It works badly for learning new content, where one '
            + 'person ends up teaching and the other listening. Agree what you are doing before you '
            + 'start.',
    },
    {
        id: 'skill-planning-an-assignment',
        question: 'How do I plan an assignment?',
        aliases: ['planning an assignment', 'assignment schedule', 'starting a major work'],
        answer:
            'Work backwards from the due date with dates for research, a first draft and a final '
            + 'read, and put the draft date at two thirds of the time available. Read the marking '
            + 'rubric before starting rather than at the end, since it tells you what the task actually '
            + 'rewards.',
    },
    {
        id: 'skill-avoiding-last-minute',
        question: 'How do I stop leaving assignments to the last minute?',
        aliases: ['stop leaving work late', 'avoiding last minute assignments', 'procrastinating on assignments'],
        answer:
            'Make the first step small enough to be unavoidable: open the document and write the '
            + 'heading and three dot points. Most avoidance is about starting rather than working, and '
            + 'a task already begun is far easier to return to.',
    },
    {
        id: 'skill-balancing-sport',
        question: 'How do I balance sport or music with study?',
        aliases: ['balancing sport and study', 'too many commitments', 'fitting study around training'],
        answer:
            'Timetable study around the fixed commitments rather than hoping for spare time, and use '
            + 'the short gaps for review rather than new content. Students with full schedules often do '
            + 'better, because the constraint forces the planning that others postpone.',
    },
    {
        id: 'skill-using-past-papers-generally',
        question: 'How do I get the most out of past papers?',
        aliases: ['using past papers properly', 'past paper technique', 'how many past papers'],
        answer:
            'Do them under time, mark them against the guide, and rework every lost mark before the '
            + 'next one. Three papers reviewed properly teach more than ten done and filed. Keep the '
            + 'most recent paper unseen until close to the exam so you have one honest rehearsal.',
    },
    {
        id: 'skill-helping-without-doing',
        question: 'How do I help my child without doing the work for them?',
        aliases: ['helping without doing the work', 'how much help is too much', 'supporting homework'],
        answer:
            'Ask questions rather than giving answers: what is the question asking, what have you '
            + 'tried, where did it stop making sense. Sitting nearby while they work beats working '
            + 'alongside them, because the aim is a student who can start without you.',
    },
    {
        id: 'skill-study-space',
        question: 'How do I set up a study space?',
        aliases: ['study space', 'where should my child study', 'desk setup for study'],
        answer:
            'A consistent place with good light, the phone elsewhere and only the current subject on '
            + 'the desk. It does not have to be a bedroom, and for some students a shared table works '
            + 'better because it is visible. What matters is that sitting there means working.',
    },
    {
        id: 'skill-screen-time',
        question: 'How do I manage screen time around study?',
        aliases: ['screen time and study', 'phone distraction', 'devices during homework'],
        answer:
            'Separate the device used for work from the one used for everything else, and put the '
            + 'second in another room during study blocks. Notifications cost more than the seconds '
            + 'they take, because returning to a difficult task is the expensive part.',
    },
    {
        id: 'skill-refusing-to-study',
        question: 'What do I do if my child refuses to study?',
        aliases: ['child refuses to study', 'wont do homework', 'resistance to studying'],
        answer:
            'Find out which it is: not knowing where to start, not seeing the point, or fear of doing '
            + 'it badly. Each needs a different response, and a smaller first step usually helps more '
            + 'than a longer conversation about effort.',
    },
    {
        id: 'skill-perfectionism',
        question: 'How do I support a perfectionist?',
        aliases: ['perfectionist student', 'afraid of getting it wrong', 'over checking work'],
        answer:
            'Set a time limit per task so finishing becomes the goal rather than flawlessness, and '
            + 'praise the attempt at hard work rather than the mark. A student who cannot hand in an '
            + 'imperfect draft will avoid starting, which costs far more than the imperfection would.',
    },
    {
        id: 'skill-organisation',
        question: 'How do I help a disorganised student?',
        aliases: ['disorganised student', 'helping with organisation', 'losing track of work'],
        answer:
            'One place for everything: a single planner, a folder per subject, and a weekly '
            + 'five-minute sort. Most disorganisation is a system problem rather than a character '
            + 'problem, and the system has to be simple enough to survive a bad week.',
    },
    {
        id: 'skill-using-a-planner',
        question: 'How do I use a planner or diary properly?',
        aliases: ['using a planner', 'homework diary', 'writing down due dates'],
        answer:
            'Record the due date and also when you will do it, since a list of deadlines is not a '
            + 'plan. Check it at the same time each day, and put long tasks in as several entries '
            + 'rather than one, so a major work does not sit untouched until the week before.',
    },
    {
        id: 'skill-tutoring-homework',
        question: 'Should tutoring come with homework?',
        aliases: ['tutoring homework', 'work between tutoring sessions', 'practice after a lesson'],
        answer:
            'Usually a small amount, so the session is consolidated while it is fresh. It should be '
            + 'short enough to actually be done and specific enough to check. Hours of extra work on '
            + 'top of school load tends to be started and abandoned.',
    },
    {
        id: 'skill-is-tutoring-working',
        question: 'How do I know whether tutoring is working?',
        aliases: ['is tutoring working', 'measuring tutoring progress', 'when to expect improvement'],
        answer:
            'Look for the student attempting work they previously avoided, explaining a method rather '
            + 'than reciting it, and asking sharper questions. Marks follow, but they lag by a term, '
            + 'because a rank reflects the whole cohort rather than one student progress.',
    },
    {
        id: 'skill-tutoring-frequency',
        question: 'How often should tutoring happen?',
        aliases: ['how often tutoring', 'tutoring frequency', 'weekly or fortnightly tutoring'],
        answer:
            'Weekly suits most students, because it matches the pace new content arrives at and keeps '
            + 'the gap short enough to act on. Fortnightly can work for a confident student needing '
            + 'checkpoints. More than weekly is usually a sign the underlying gap is older than the '
            + 'current topic.',
    },
    {
        id: 'skill-preparing-for-a-session',
        question: 'How do I prepare for a tutoring session?',
        aliases: ['preparing for a tutoring session', 'what to bring to tutoring', 'getting the most from a lesson'],
        answer:
            'Bring the specific questions that stopped you, the marked work, and the assessment '
            + 'notification if one is coming. A session that starts with a real question goes further '
            + 'than one that starts with working out what to cover.',
    },
    {
        id: 'skill-talking-to-a-teacher',
        question: 'How do I raise a concern with a teacher?',
        aliases: ['talking to a teacher', 'raising a concern at school', 'emailing a teacher'],
        answer:
            'Be specific and ask for information rather than opening with a judgement: which topics '
            + 'are weakest, what the next assessment covers, what they would work on first. Teachers '
            + 'see the cohort, so their answer usually reframes the problem usefully.',
    },
    {
        id: 'skill-reading-a-report',
        question: 'How do I read a school report?',
        aliases: ['reading a school report', 'understanding a report card', 'what grades mean on a report'],
        answer:
            'Read the comments before the grades, and compare subjects against each other rather than '
            + 'against an ideal. A grade shows position; the comment usually says whether the cause is '
            + 'content, effort or organisation, which is what can be acted on.',
    },
    {
        id: 'skill-disliked-subject',
        question: 'How do I help with a subject my child dislikes?',
        aliases: ['subject my child hates', 'disliked subject', 'motivation in one subject'],
        answer:
            'Dislike usually follows difficulty rather than causing it, so find the point where it '
            + 'stopped making sense and repair that. Competence changes the feeling far more reliably '
            + 'than encouragement does.',
    },
    {
        id: 'skill-rebuilding-confidence',
        question: 'How do I rebuild confidence after a poor result?',
        aliases: ['rebuilding confidence', 'after a bad result', 'confidence after failure'],
        answer:
            'Go through the paper and separate what was not known from what was misread or rushed, '
            + 'which usually makes the result look smaller. Then pick one topic to fix and one habit to '
            + 'change, so the next attempt has a visible reason to go better.',
    },
    {
        id: 'skill-encouraging-reading',
        question: 'How do I encourage a reluctant reader?',
        aliases: ['encouraging reading', 'reluctant reader', 'getting a child to read'],
        answer:
            'Let them choose, including comics, magazines and audiobooks, and keep it separate from '
            + 'schoolwork. Reading volume is what builds vocabulary and fluency, and volume comes from '
            + 'enjoyment rather than from the reading level of the book.',
    },
    {
        id: 'skill-siblings',
        question: 'How do I handle siblings comparing themselves?',
        aliases: ['siblings comparing', 'comparing children', 'sibling rivalry and marks'],
        answer:
            'Discuss progress against their own earlier work rather than against each other, and '
            + 'avoid using one as the standard even approvingly. Different subjects, teachers and '
            + 'cohorts make the comparison meaningless anyway.',
    },
    {
        id: 'skill-learning-difficulty',
        question: 'When should we seek an assessment for a learning difficulty?',
        aliases: ['assessment for a learning difficulty', 'suspecting dyslexia', 'when to get tested'],
        answer:
            'When the gap between effort and result persists despite support, or a specific skill '
            + 'such as reading, spelling or number recall lags well behind everything else. Start with '
            + 'the school learning support team, since an assessment can also unlock adjustments for '
            + 'exams.',
    },
    {
        id: 'skill-focus-difficulty',
        question: 'How do I support a student who finds focus difficult?',
        aliases: ['student who cannot focus', 'short attention span study', 'help concentrating on study'],
        answer:
            'Shorter blocks with a stated goal, visible progress, movement between them, and the '
            + 'hardest task first. Written steps help more than verbal instructions. If it is affecting '
            + 'every setting rather than only study, that is worth raising with the school or a GP.',
    },
    {
        id: 'skill-memorisation',
        question: 'How do I help with memorising content?',
        aliases: ['helping with memorisation', 'memorising for an exam', 'remembering facts'],
        answer:
            'Test rather than review: ask the questions and let them answer from memory, then check. '
            + 'Spacing it over days and mixing topics beats one long session, and content understood '
            + 'first is far easier to retain than content met for the first time as something to '
            + 'memorise.',
    },
    {
        id: 'skill-assignment-overload',
        question: 'What do we do when several assignments are due at once?',
        aliases: ['assignments due at once', 'assignment overload', 'too many tasks at the same time'],
        answer:
            'List them with their weightings and due dates, then work in that order rather than by '
            + 'whichever feels most urgent. Finishing a smaller task completely frees more attention '
            + 'than making partial progress on all of them.',
    },
    {
        id: 'skill-holidays',
        question: 'How should school holidays be used for study?',
        aliases: ['study during the holidays', 'holiday revision', 'using the break well'],
        answer:
            'A short daily block in the first and last weeks, with a genuine break between, and a '
            + 'focus on consolidating the term just finished rather than reading ahead. Students who '
            + 'work through the whole break arrive at the new term already tired.',
    },
    {
        id: 'skill-part-time-work',
        question: 'How do we balance part-time work with Year 12?',
        aliases: ['part time work and year 12', 'working while studying', 'job during the hsc'],
        answer:
            'A shift or two a week is manageable and often helps structure, but check that it does '
            + 'not fall the night before assessments or across the trial period. Where hours are needed '
            + 'for financial reasons, the fix is timetabling study around them rather than dropping '
            + 'study.',
    },
    {
        id: 'skill-family-year-12',
        question: 'How do we prepare as a family for Year 12?',
        aliases: ['preparing for year 12 as a family', 'supporting a year 12 student', 'family and the hsc'],
        answer:
            'Agree early on quiet times, transport and what household jobs continue, since resentment '
            + 'about small things surfaces under pressure. Keep asking about things other than school, '
            + 'and treat the year as demanding rather than exceptional.',
    },
    {
        id: 'skill-burnout',
        question: 'What does burnout look like, and what helps?',
        aliases: ['burnout', 'exhausted from study', 'losing motivation completely'],
        answer:
            'Sustained exhaustion, cynicism about work that used to matter, and falling output '
            + 'despite more hours. It is different from ordinary tiredness because rest over a weekend '
            + 'does not fix it. Reducing load deliberately, restoring sleep and exercise, and talking '
            + 'to someone rather than pushing through are what help.',
    },
    {
        id: 'skill-handwriting-speed',
        question: 'How do I write faster by hand in an exam?',
        aliases: ['handwriting speed', 'writing faster in an exam', 'hand hurts when writing'],
        answer:
            'Practise writing at length by hand well before the exams, since speed and stamina are '
            + 'physical and typing does not build them. Keep letters small and consistent rather than '
            + 'neat, and if pain or speed is a genuine barrier, that is grounds for exam provisions '
            + 'rather than something to endure.',
    },
];
