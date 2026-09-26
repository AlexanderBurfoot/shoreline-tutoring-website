/**
 * How the HSC and the ATAR work, which belongs to no single subject.
 *
 * Anything NESA or UAC can change from year to year, such as exam rules and the
 * minimum standard requirements, says where to confirm it rather than stating a
 * figure that will age. Like every other answer, each is written by hand and
 * sent exactly as written.
 */
export interface HscGuideEntry {
    id: string;
    question: string;
    aliases: string[];
    answer: string;
}

export const hscGuideEntries: HscGuideEntry[] = [
    {
        id: 'hsc-atar',
        question: 'What is an ATAR?',
        aliases: ['atar', 'what atar means', 'australian tertiary admission rank'],
        answer:
            'A rank, not a mark. It places a student against everyone in their year across the state, from 0 to '
            + '99.95 in steps of 0.05, so an ATAR of 80 means finishing ahead of about 80% of the age group. It is '
            + 'calculated by UAC from scaled HSC marks, not by NESA.',
    },
    {
        id: 'hsc-atar-calculation',
        question: 'How is the ATAR calculated?',
        aliases: ['how the atar is worked out', 'best ten units', 'which units count for the atar'],
        answer:
            'From the scaled marks of the best ten units, which must include two units of English. The remaining '
            + 'eight units come from a student best results, and only Year 12 courses count. UAC does the scaling '
            + 'and the calculation, so schools can estimate but not determine it.',
    },
    {
        id: 'hsc-scaling',
        question: 'What is scaling?',
        aliases: ['scaling', 'scaled marks', 'why marks are scaled'],
        answer:
            'An adjustment that makes a mark in one course comparable with a mark in another, based on the academic '
            + 'strength of the students who took each course. It does not reward difficulty for its own sake: it '
            + 'reflects how that particular group performed across all their subjects.',
    },
    {
        id: 'hsc-scaling-subject-choice',
        question: 'Should I pick subjects because they scale well?',
        aliases: ['what subjects scale well', 'picking subjects for scaling', 'does scaling mean choosing hard subjects'],
        answer:
            'No. Scaling describes the group that took a course, so a student who struggles in a well-scaling '
            + 'subject gains nothing from it. Doing well in a subject you are suited to beats a middling result in '
            + 'one chosen for its reputation, and interest is what sustains two years of work.',
    },
    {
        id: 'hsc-moderation',
        question: 'What is moderation of school assessment?',
        aliases: ['moderation', 'moderated assessment marks', 'how school marks are adjusted'],
        answer:
            'NESA adjusts each school assessment marks so they are comparable between schools, using how that '
            + 'school students performed in the external exam. The order the school placed its students in is kept '
            + 'exactly; only the spread of marks changes, which is why your rank matters more than your raw mark.',
    },
    {
        id: 'hsc-rank',
        question: 'What is a rank, and why does it matter?',
        aliases: ['assessment rank', 'school rank', 'what is my rank'],
        answer:
            'Your position in your cohort for that course, decided by the total of your assessment tasks. Because '
            + 'moderation preserves the order but replaces the marks, your rank is what your school sends to NESA. '
            + 'Two students a mark apart can end up several marks apart, or together, after moderation.',
    },
    {
        id: 'hsc-marks-versus-ranks',
        question: 'What is the difference between marks and ranks?',
        aliases: ['marks versus ranks', 'is my mark or rank more important', 'raw mark and rank'],
        answer:
            'A mark is what a task earned; a rank is where that places you in the course. Marks vary with how hard '
            + 'a paper was, so they are not comparable between tasks or schools. The rank is, which is why a '
            + 'disappointing mark in a hard task can still be a good result.',
    },
    {
        id: 'hsc-raw-and-aligned',
        question: 'What is the difference between a raw mark and an aligned mark?',
        aliases: ['raw mark', 'aligned mark', 'alignment to bands'],
        answer:
            'The raw mark is what the exam paper scored. The aligned mark is what appears on the certificate after '
            + 'NESA maps raw marks onto the performance bands, so the same standard of work earns the same mark '
            + 'from year to year even when a paper was harder. Alignment usually raises a raw mark.',
    },
    {
        id: 'hsc-final-mark',
        question: 'How is my final HSC mark worked out?',
        aliases: ['how the hsc mark is calculated', 'fifty fifty assessment and exam', 'final hsc mark'],
        answer:
            'Half from school assessment after moderation and half from the external exam after alignment, averaged '
            + 'for each course. So a strong internal record cushions one poor exam, and a strong exam can lift a '
            + 'modest internal record, but neither replaces the other.',
    },
    {
        id: 'hsc-band-descriptors',
        question: 'What are the performance bands?',
        aliases: ['band descriptors', 'what a band 6 is', 'performance bands hsc'],
        answer:
            'Descriptions of what a student at each level can do, from band 1 to band 6 in a two unit course. A '
            + 'band 6 begins at 90 and describes extensive knowledge applied to unfamiliar problems. Reading the '
            + 'descriptors for your courses tells you what the next band actually requires.',
    },
    {
        id: 'hsc-minimum-standard',
        question: 'What is the HSC minimum standard?',
        aliases: ['minimum standard', 'hsc minimum standard tests', 'reading writing numeracy requirement'],
        answer:
            'A requirement to show a functional level of reading, writing and numeracy through short online tests, '
            + 'separate from your courses. Attempts start in Year 10 and can be repeated, and NESA publishes the '
            + 'current rules, so confirm the detail there rather than relying on an older explanation.',
    },
    {
        id: 'hsc-units',
        question: 'What is a unit, and how many do I need?',
        aliases: ['units in the hsc', 'how many units', 'twelve units and ten units'],
        answer:
            'A unit is a measure of course size, with most courses worth two units and roughly 120 hours a year. '
            + 'Students typically study at least twelve units in Year 11 and ten in Year 12, including two units of '
            + 'English, which is the one compulsory subject.',
    },
    {
        id: 'hsc-preliminary-course',
        question: 'What is the Preliminary course?',
        aliases: ['preliminary course', 'year 11 course', 'when the hsc course starts'],
        answer:
            'The Year 11 half of a two year pattern, usually finishing around the end of Term 3, after which the '
            + 'HSC course begins. Preliminary marks do not count towards the ATAR, but the content is assumed '
            + 'knowledge in Year 12, so gaps left there resurface.',
    },
    {
        id: 'hsc-year-11-importance',
        question: 'How much does Year 11 matter for the ATAR?',
        aliases: [
            'does year 11 count for the atar',
            'does year 11 count towards the hsc',
            'importance of year 11',
            'preliminary marks and the atar',
        ],
        answer:
            'Not directly, since only Year 12 courses are used. It matters in two other ways: the content carries '
            + 'forward, and Year 11 is where study habits and assessment technique are built. Students who coast '
            + 'through it usually spend Term 1 of Year 12 catching up.',
    },
    {
        id: 'hsc-year-10-to-11',
        question: 'What changes between Year 10 and Year 11?',
        aliases: ['year 10 to year 11 change', 'starting year 11', 'how senior school is different'],
        answer:
            'Fewer subjects studied in more depth, formal assessment schedules with weightings, and a shift towards '
            + 'extended responses and independent work. The pace assumes you keep up rather than catch up, which is '
            + 'the adjustment most students describe as the hardest part.',
    },
    {
        id: 'hsc-year-11-to-12',
        question: 'What changes between Year 11 and Year 12?',
        aliases: ['year 11 to year 12 change', 'starting the hsc course', 'how year 12 is different'],
        answer:
            'Every mark now counts towards a rank that reaches the certificate, content builds on Preliminary work '
            + 'rather than starting fresh, and tasks are weighted so one major piece can carry a quarter of the '
            + 'course. The volume is similar; the consequences are not.',
    },
    {
        id: 'hsc-assessment-weighting',
        question: 'What is an assessment weighting?',
        aliases: ['assessment weighting', 'how much a task is worth', 'task worth a percentage'],
        answer:
            'The share of the course internal mark a task carries, set out in the school assessment schedule. A '
            + 'task worth 30% moves your rank far more than one worth 10%, so the schedule is worth reading at the '
            + 'start of the year rather than the week before each task.',
    },
    {
        id: 'hsc-trial-exam',
        question: 'What is the trial HSC exam?',
        aliases: ['trial exam', 'trials', 'practice hsc exam at school'],
        answer:
            'The school internal examination, usually in Term 3 of Year 12 and typically the heaviest single '
            + 'weighting in each course. It is the best rehearsal available for the real paper, and for many '
            + 'students it is the task that settles their final rank.',
    },
    {
        id: 'hsc-missed-task',
        question: 'What happens if I miss an assessment task?',
        aliases: ['missing an assessment task', 'absent for a task', 'illness on a task day'],
        answer:
            'Follow the school illness and misadventure process immediately, with documentation. Schools usually '
            + 'either set a substitute task or use an estimate from your other work. Doing nothing risks a zero, '
            + 'which affects the rank more than a poor attempt would.',
    },
    {
        id: 'hsc-illness-misadventure',
        question: 'What is an illness or misadventure application?',
        aliases: ['illness misadventure', 'applying for special consideration', 'sick for an exam'],
        answer:
            'A formal request for your circumstances to be considered when illness or an unexpected event affected '
            + 'a task or exam. It is lodged through the school within a short window with supporting evidence, and '
            + 'it addresses the disadvantage rather than adding marks.',
    },
    {
        id: 'hsc-n-award',
        question: 'What is an N award or a non-completion warning?',
        aliases: ['n award', 'non completion warning', 'not meeting course requirements'],
        answer:
            'A determination that a course requirement has not been met, usually through missed tasks or '
            + 'insufficient work. Schools must send written warnings first, giving a chance to make the work up. An '
            + 'uncorrected N award means the course does not count, which can affect eligibility for the HSC.',
    },
    {
        id: 'hsc-dropping-a-subject',
        question: 'Can I drop or change a subject?',
        aliases: ['dropping a subject', 'changing subjects', 'switching courses in year 11'],
        answer:
            'Usually yes early in Year 11, subject to the school timetable and to keeping the required units and '
            + 'English. Changing later is harder because assessment already completed cannot be recovered. Speak to '
            + 'the year adviser before deciding, since the deadline is a school matter.',
    },
    {
        id: 'hsc-choosing-maths',
        question: 'Which mathematics course should I choose?',
        aliases: ['which maths course', 'standard or advanced maths', 'choosing a maths course'],
        answer:
            'Standard suits students who want mathematics for everyday and workplace contexts, Advanced suits those '
            + 'continuing to quantitative study, and Extension 1 assumes Advanced is comfortable rather than '
            + 'survivable. Base it on current results and on what your intended course at university requires.',
    },
    {
        id: 'hsc-extension-one',
        question: 'Should I do Extension 1 mathematics?',
        aliases: ['should I do extension 1', 'extension 1 maths decision', 'is extension 1 worth it'],
        answer:
            'It suits a student who finds Advanced straightforward and enjoys problems that take time. It adds a '
            + 'unit, so it can lift an ATAR, but only if it does not pull down the other courses. A student who is '
            + 'working hard just to keep pace in Advanced will find it costly.',
    },
    {
        id: 'hsc-extension-two',
        question: 'Should I do Extension 2 mathematics?',
        aliases: ['should I do extension 2', 'extension 2 maths decision', 'is extension 2 hard'],
        answer:
            'It replaces Extension 1 in Year 12 and is the most demanding mathematics course offered, assuming real '
            + 'fluency and a willingness to sit with a problem. It rewards students who like the subject for its '
            + 'own sake. Chosen for the scaling alone, it usually costs more than it returns.',
    },
    {
        id: 'hsc-science-choice',
        question: 'Is physics harder than chemistry, and should I do three sciences?',
        aliases: ['physics or chemistry', 'is physics harder', 'doing three sciences'],
        answer:
            'They are difficult differently: physics leans on mathematics and modelling, chemistry on '
            + 'multi-step reasoning and detail, biology on precise writing and volume. Three sciences is '
            + 'manageable for students who enjoy them, but it leaves little variety in the week and a lot of '
            + 'practical work at once.',
    },
    {
        id: 'hsc-study-hours',
        question: 'How many hours should I study in Year 12?',
        aliases: ['how many hours of study', 'study hours year 12', 'how much study is enough'],
        answer:
            'Consistency matters more than a number, but two to three hours on most school days and a longer block '
            + 'at the weekend is a common pattern that leaves room for sleep and sport. What the hours contain '
            + 'decides their value: practice questions and retrieval beat rereading, whatever the total.',
    },
    {
        id: 'hsc-when-to-start-revision',
        question: 'When should I start HSC revision?',
        aliases: ['when to start revising for the hsc', 'starting hsc revision', 'revision timeline'],
        answer:
            'Summarise each topic as it finishes, so revision is consolidation rather than relearning. Serious '
            + 'past paper work suits the holidays before Trials, and the weeks after Trials are for the gaps those '
            + 'papers exposed. Starting everything in September leaves too little time for the content that needs '
            + 'it.',
    },
    {
        id: 'hsc-atar-estimate',
        question: 'Can anyone estimate my ATAR?',
        aliases: ['atar estimate', 'predicting my atar', 'atar calculator accuracy'],
        answer:
            'Only roughly. An estimate needs your ranks in every course and an assumption about how your cohort '
            + 'performs in the exams, neither of which is settled until afterwards. Online calculators can indicate '
            + 'a range, and treating that range as a target rather than a prediction is the useful approach.',
    },
    {
        id: 'hsc-exam-rules',
        question: 'What can I take into an HSC exam?',
        aliases: ['what to bring to the hsc', 'calculator in the hsc', 'stationery for an exam'],
        answer:
            'Black pens, pencils, a ruler, an eraser and an approved calculator where the course allows one, in a '
            + 'clear container, plus your exam timetable. NESA publishes the approved calculator list and the rules '
            + 'each year, so check the current version rather than assuming.',
    },
    {
        id: 'hsc-exam-format',
        question: 'How long are HSC exams and how is the time structured?',
        aliases: ['how long is an hsc exam', 'reading time in an exam', 'hsc exam timetable'],
        answer:
            'Most papers run between one and a half and three hours, with reading time before writing begins in '
            + 'many courses. Reading time is for planning: choose which extended response to attempt and note the '
            + 'structure before the pen is allowed. The timetable is published by NESA well in advance.',
    },
    {
        id: 'hsc-results-day',
        question: 'What happens on results day?',
        aliases: ['hsc results day', 'when results come out', 'getting the atar'],
        answer:
            'HSC results and the certificate come from NESA, and the ATAR comes separately from UAC, usually within '
            + 'a day of each other in December. University offers follow in rounds after that, with a period to '
            + 'change preferences between them.',
    },
    {
        id: 'hsc-standard-one-and-two',
        question: 'What is the difference between Mathematics Standard 1 and Standard 2?',
        aliases: ['standard 1 versus standard 2', 'maths standard 1', 'which standard maths course'],
        answer:
            'Standard 2 covers more content, including networks and more statistics, and has an HSC '
            + 'examination, so it can count towards an ATAR. Standard 1 is a lighter course aimed at '
            + 'everyday and workplace mathematics, with an optional examination, and it is chosen where '
            + 'mathematics is not needed beyond school.',
    },
    {
        id: 'hsc-major-work',
        question: 'What is a major work?',
        aliases: ['major work', 'hsc major project', 'which courses have a major work'],
        answer:
            'An extended piece produced over most of Year 12 and submitted rather than examined, in '
            + 'courses such as English Extension 2, Society and Culture, Design and Technology and the '
            + 'creative and performing arts. It usually carries a large share of the course mark and is '
            + 'accompanied by a reflection or process documentation.',
    },
    {
        id: 'hsc-choosing-major-work',
        question: 'How do I choose a major work topic?',
        aliases: ['choosing a major work topic', 'major work idea', 'picking a project topic'],
        answer:
            'Choose something you will still find interesting in September, narrow enough to finish, '
            + 'and answerable with the sources or skills you can actually reach. Ambition is the common '
            + 'trap: a smaller idea executed well beats a large one abandoned in Term 3.',
    },
    {
        id: 'hsc-major-work-timeline',
        question: 'How long does a major work take?',
        aliases: ['major work timeline', 'how long a major work takes', 'planning a major project'],
        answer:
            'Most of Year 12, with the proposal early in Term 4 of Year 11, drafting through Terms 1 '
            + 'and 2, and submission around the middle of Term 3. Working backwards from the school '
            + 'deadline with monthly milestones is what keeps it from collapsing into the last '
            + 'fortnight.',
    },
    {
        id: 'hsc-viva-voce',
        question: 'What is a viva voce?',
        aliases: ['viva voce', 'oral defence of a project', 'talking about your major work'],
        answer:
            'A spoken examination in which a student explains and defends their own work, used in '
            + 'some courses alongside a major project. Preparation means being able to say why each '
            + 'decision was made, since the questions follow from what you produced rather than from a '
            + 'syllabus list.',
    },
    {
        id: 'hsc-notes-from-marking-centre',
        question: 'What are the Notes from the Marking Centre?',
        aliases: ['notes from the marking centre', 'marking centre feedback', 'what markers said'],
        answer:
            'A NESA document published after each HSC examination describing what students did well '
            + 'and badly in each question. It is the closest thing available to advice from the markers '
            + 'themselves, and it is the most underused free resource for any course.',
    },
    {
        id: 'hsc-standards-packages',
        question: 'What is a standards package?',
        aliases: ['standards package', 'samples of student work', 'what a band 6 answer looks like'],
        answer:
            'A NESA collection of real student responses at each performance band, with the marker '
            + 'commentary explaining the placement. Reading one shows the difference between a band 4 '
            + 'and a band 6 answer far more clearly than any description can.',
    },
    {
        id: 'hsc-marking-guidelines',
        question: 'How do I use the marking guidelines?',
        aliases: ['using marking guidelines', 'marking criteria for a past paper', 'sample answers hsc'],
        answer:
            'Attempt the question first, then mark your own work against the guidelines strictly, '
            + 'noting where a mark was available that you did not earn. The guidelines also reveal how '
            + 'marks are distributed within a question, which tells you how much to write.',
    },
    {
        id: 'hsc-assessment-free-period',
        question: 'What is an assessment free period?',
        aliases: ['assessment free period', 'no tasks before exams', 'nesa assessment rules'],
        answer:
            'A stretch before the HSC examinations in which schools do not schedule formal tasks, so '
            + 'students can revise. NESA also limits how many tasks a course may have and how much any '
            + 'one can be worth, which is why a school assessment schedule looks the way it does.',
    },
    {
        id: 'hsc-reading-a-syllabus',
        question: 'How do I read a syllabus document?',
        aliases: [
            'reading a syllabus',
            'how to use the syllabus',
            'understanding the syllabus document',
            'what is in a syllabus',
        ],
        answer:
            'Skip the front matter and go to the course content. Each module lists outcomes, which are '
            + 'what you must be able to do, then content points under headings, most beginning with a '
            + 'verb such as investigate, model or analyse. That verb is the level you are examined at, so '
            + 'a point that says analyse will not be satisfied by being able to describe. The glossary at '
            + 'the back defines the key words.',
    },
    {
        id: 'hsc-syllabus-as-checklist',
        question: 'How do I use the syllabus to revise?',
        aliases: [
            'using the syllabus to revise',
            'syllabus checklist',
            'syllabus dot points revision',
            'revising from the syllabus',
        ],
        answer:
            'Turn the content points into a checklist and rate each one confident, shaky or blank. Revise '
            + 'the blanks first, then find past questions on the shaky ones, because a topic you half know '
            + 'loses more marks than one you know you have to look up. Nothing outside the syllabus can be '
            + 'examined, so a complete checklist is a complete course.',
    },
    {
        id: 'hsc-scope-and-sequence',
        question: 'What is a scope and sequence?',
        aliases: [
            'scope and sequence',
            'school teaching program',
            'order topics are taught',
            'teaching schedule document',
        ],
        answer:
            'The school plan for the order and timing of topics across the year. It is written by the '
            + 'faculty, not NESA, so two schools may teach the same syllabus in a different order. Asking '
            + 'for it is worth doing: it tells you what is coming next and which topics a task will cover.',
    },
    {
        id: 'hsc-time-per-mark',
        question: 'How much time should I spend per mark in an exam?',
        aliases: [
            'time per mark',
            'minutes per mark',
            'how long to spend on each question',
            'exam timing per mark',
        ],
        answer:
            'Divide the minutes by the marks before you start. A three hour paper worth 100 marks gives '
            + 'about 1.8 minutes a mark, so a five mark question deserves around nine minutes and no more. '
            + 'Leave ten minutes at the end for the questions you skipped. Overrunning on a favourite '
            + 'question costs marks that were easier to get elsewhere.',
    },
    {
        id: 'hsc-after-trials',
        question: 'What should I do between the trials and the HSC?',
        aliases: [
            'between trials and hsc',
            'after trial exams',
            'revising after the trials',
            'how to use the time before the hsc',
        ],
        answer:
            'Work from the trial paper outwards. Mark it against the guidelines, sort the lost marks into '
            + 'not known, misread and ran out of time, and spend the first fortnight on the not knowns only. '
            + 'Then move to whole past papers under timed conditions, one per subject per week, marking each '
            + 'before attempting the next. New content is rarely the problem by this point.',
    },
];
