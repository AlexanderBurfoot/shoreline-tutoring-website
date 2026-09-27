/**
 * Academic integrity, university pathways and the special cases.
 *
 * Kept separate from how marks and ranks work, since these are the questions a
 * family asks once rather than every term. Anything an institution sets says to
 * confirm it there rather than stating a detail that will age.
 */
import type { HscGuideEntry } from './hscGuide';

export const hscPathwayEntries: HscGuideEntry[] = [
    {
        id: 'hsc-plagiarism',
        question: 'What counts as plagiarism?',
        aliases: ['plagiarism', 'copying someone elses work', 'what counts as plagiarism'],
        answer:
            'Presenting anyone else words, ideas, data or code as your own without acknowledgement, '
            + 'including a friend work, a website, a tutor draft or a previous student assignment. '
            + 'Paraphrasing without a citation still counts, and so does submitting your own work '
            + 'twice.',
    },
    {
        id: 'hsc-ai-in-assignments',
        question: 'Can I use AI for an assignment?',
        aliases: ['using ai for an assignment', 'chatgpt for homework', 'is ai cheating'],
        answer:
            'Submitting text a generator produced as your own work is malpractice, and every HSC '
            + 'student signs a declaration that the work is their own. Using it to explain a concept, '
            + 'generate practice questions or test your understanding is different. Schools set their '
            + 'own rules, so ask before relying on it.',
    },
    {
        id: 'hsc-bibliography',
        question: 'What is the difference between a bibliography and a reference list?',
        aliases: ['bibliography', 'reference list versus bibliography', 'listing sources'],
        answer:
            'A reference list contains only the sources you cited. A bibliography contains everything '
            + 'you consulted, cited or not. Check which the task asks for, follow one style '
            + 'consistently, and include the access date for anything online.',
    },
    {
        id: 'hsc-study-websites',
        question: 'Is using a study website or notes site cheating?',
        aliases: ['using a study website', 'is buying notes cheating', 'shared notes online'],
        answer:
            'Reading someone notes to understand a topic is study. Copying their sentences into your '
            + 'own work is plagiarism, and buying a completed assessment is serious malpractice. The '
            + 'test is whether the work you submit represents your own thinking.',
    },
    {
        id: 'hsc-malpractice-consequences',
        question: 'What happens if a student is caught cheating?',
        aliases: ['caught cheating', 'malpractice consequences', 'penalty for plagiarism'],
        answer:
            'Schools investigate under their malpractice policy, and outcomes range from resubmission '
            + 'to a zero for the task, which puts the course requirement at risk. In an HSC examination '
            + 'NESA handles it directly and can withhold a result. Both processes give the student a '
            + 'chance to respond.',
    },
    {
        id: 'hsc-calculator-apps',
        question: 'Can I use a calculator app in an exam?',
        aliases: ['calculator app', 'phone calculator in an exam', 'which calculator is allowed'],
        answer:
            'No. Only a calculator from the approved list may be used, and phones are not permitted '
            + 'in the room at all. Check the current approved list on the NESA site, since models are '
            + 'added and removed, and use the same calculator all year so it is familiar.',
    },
    {
        id: 'hsc-early-entry',
        question: 'What is early entry to university?',
        aliases: ['early entry', 'early offer', 'offer before the atar'],
        answer:
            'Schemes that make an offer before the ATAR is released, usually on Year 11 and early '
            + 'Year 12 results with a school recommendation, sometimes with an interview or a written '
            + 'application. Each university runs its own, with its own closing dates, so check the ones '
            + 'you are interested in during Term 1.',
    },
    {
        id: 'hsc-bonus-points',
        question: 'What are bonus points?',
        aliases: ['bonus points', 'adjustment factors', 'selection rank'],
        answer:
            'Adjustments some universities add for particular subjects, locations or circumstances. '
            + 'They apply to your selection rank for that course rather than changing your ATAR, so the '
            + 'same student can have different selection ranks at different universities. Each '
            + 'institution publishes its own scheme.',
    },
    {
        id: 'hsc-eas',
        question: 'What is the Educational Access Scheme?',
        aliases: ['educational access scheme', 'eas', 'disadvantage and university entry'],
        answer:
            'A UAC scheme for applicants whose schooling was affected by circumstances beyond their '
            + 'control, such as illness, disrupted schooling, financial hardship or carer '
            + 'responsibilities. It can lead to adjustments or to consideration outside the normal '
            + 'cut-off, and it is applied for through UAC with documentation.',
    },
    {
        id: 'hsc-assumed-knowledge',
        question: 'What is the difference between a prerequisite and assumed knowledge?',
        aliases: ['assumed knowledge', 'prerequisite subject', 'subjects needed for a degree'],
        answer:
            'A prerequisite must be completed or you cannot be admitted. Assumed knowledge is not '
            + 'required but the course is taught as though you have it, so arriving without it means '
            + 'catching up in first year. Check each degree, since requirements differ between '
            + 'universities.',
    },
    {
        id: 'hsc-ucat',
        question: 'What is the UCAT?',
        aliases: ['ucat', 'medicine admissions test', 'test for medicine'],
        answer:
            'An admissions test used by many medicine and dental programs in Australia and New '
            + 'Zealand, sat in the middle of Year 12. It assesses reasoning, decision making and '
            + 'situational judgement rather than course content, so preparation is practice with the '
            + 'question formats and the timing.',
    },
    {
        id: 'hsc-without-an-atar',
        question: 'Can I get into university without an ATAR?',
        aliases: ['university without an atar', 'no atar pathway', 'alternative entry'],
        answer:
            'Yes, through several routes: portfolio or early entry schemes, a TAFE qualification that '
            + 'articulates into a degree, a university enabling or preparation program, or mature age '
            + 'entry later. Many students arrive by one of these, and the degree is the same at the '
            + 'end.',
    },
    {
        id: 'hsc-bridging-course',
        question: 'What is a bridging course?',
        aliases: ['bridging course', 'catching up assumed knowledge', 'summer bridging program'],
        answer:
            'A short course, often over summer, covering the assumed knowledge for a degree, most '
            + 'commonly in mathematics, chemistry or physics. It is designed for students who did not '
            + 'take the subject or want to refresh it, and universities run their own.',
    },
    {
        id: 'hsc-vet-and-atar',
        question: 'Do VET courses count towards the ATAR?',
        aliases: ['vet and the atar', 'do vet courses count', 'category b course'],
        answer:
            'An HSC VET course counts only if the student also sits its optional written HSC '
            + 'examination, and at most one such course can be included. VET courses always count '
            + 'towards the HSC itself, so the question is only about the ATAR calculation.',
    },
    {
        id: 'hsc-life-skills',
        question: 'What is a Life Skills course?',
        aliases: ['life skills course', 'life skills outcomes', 'alternative hsc course'],
        answer:
            'A course with alternative outcomes for students with significant intellectual disability '
            + 'or additional learning needs, developed with the school and family. It contributes to '
            + 'the HSC but is not used in an ATAR calculation, and decisions about it are made through '
            + 'the school learning support process.',
    },
    {
        id: 'hsc-accumulating',
        question: 'Can the HSC be accumulated over several years?',
        aliases: ['accumulating the hsc', 'spreading the hsc over years', 'part time hsc'],
        answer:
            'Yes. NESA allows the HSC to be accumulated across up to five years, so courses can be '
            + 'completed in stages, which suits students managing illness, work or elite sport. An ATAR '
            + 'requires the units to be completed within a set period, so check the current rule with '
            + 'UAC before planning around it.',
    },
    {
        id: 'hsc-repeating',
        question: 'Can I repeat Year 12?',
        aliases: ['repeating year 12', 'redoing the hsc', 'second attempt at the hsc'],
        answer:
            'Yes, either the whole year or particular courses, and the better result is used for each '
            + 'course. It is a large commitment for what is often a modest gain, so it is worth '
            + 'comparing with early entry, a TAFE pathway or a transfer after first year before '
            + 'deciding.',
    },
    {
        id: 'hsc-disability-provisions',
        question: 'What exam adjustments are available for a disability?',
        aliases: ['disability provisions hsc', 'exam adjustments', 'reader or writer in an exam', 'extra time in the hsc'],
        answer:
            'Extra time, rest breaks, a reader, a writer, assistive technology, large print, braille '
            + 'or separate supervision, depending on the need. They are applied for through the school '
            + 'with current evidence, well before the exams, and they aim to remove a disadvantage '
            + 'rather than to give an advantage.',
    },
    {
        id: 'hsc-exam-script',
        question: 'Can I get a copy of my exam script?',
        aliases: ['copy of my exam script', 'getting my exam paper back', 'seeing my hsc paper'],
        answer:
            'HSC scripts are not returned, and marks are not negotiable after release, though NESA '
            + 'has a process for checking that marks were recorded and added correctly. School '
            + 'assessment tasks are usually returned, which is why they are the feedback worth '
            + 'studying.',
    },
    {
        id: 'hsc-appealing-an-assessment-mark',
        question: 'Can I appeal a school assessment mark?',
        aliases: ['appealing an assessment mark', 'disputing a school mark', 'assessment review'],
        answer:
            'Schools must have a review process, usually about whether the task was marked according '
            + 'to the criteria and the school procedures were followed, rather than about a difference '
            + 'of opinion on quality. Raise it promptly and in writing with the specific criterion in '
            + 'question.',
    },
    {
        id: 'hsc-interstate-transfer',
        question: 'What if we move interstate during Year 11 or 12?',
        aliases: ['moving interstate during year 11', 'transferring to the hsc', 'changing states mid course'],
        answer:
            'NESA can recognise study completed in another system, but the course patterns differ, so '
            + 'the earlier the school and NESA are involved the more options remain. Moving during Year '
            + '12 is much harder than during Year 11, because school assessment already completed '
            + 'cannot be transferred directly.',
    },
    {
        id: 'hsc-ib-comparison',
        question: 'How does the International Baccalaureate compare with the HSC?',
        aliases: ['ib versus hsc', 'international baccalaureate comparison', 'which is better ib or hsc'],
        answer:
            'The IB is a fixed six-subject diploma with a compulsory essay, theory of knowledge and '
            + 'service component, converted to a selection rank for Australian entry. The HSC allows a '
            + 'freer subject pattern. Neither is easier; they suit different students, and both lead to '
            + 'the same universities.',
    },
    {
        id: 'hsc-elite-athletes',
        question: 'What arrangements exist for elite athletes and performers?',
        aliases: ['elite athlete arrangements', 'sport and the hsc', 'flexible study for athletes'],
        answer:
            'Schools can adjust timetables and assessment scheduling, and the HSC can be accumulated '
            + 'over several years so a lighter load is possible. Competition clashing with an '
            + 'examination is handled through the illness and misadventure process, so tell the school '
            + 'as soon as the dates are known.',
    },
    {
        id: 'hsc-arriving-late',
        question: 'What happens if I arrive late to an exam?',
        aliases: ['arriving late to an exam', 'late for the hsc', 'missed the start of an exam'],
        answer:
            'Go straight to the examination centre and tell the supervisor: students arriving late '
            + 'are usually admitted and may not get the lost time back, which is then a matter for the '
            + 'misadventure process. Arriving after the paper has finished cannot be remedied, so plan '
            + 'the trip with a wide margin.',
    },
    {
        id: 'hsc-leaving-the-room',
        question: 'Can I leave the room during an exam?',
        aliases: ['leaving the room during an exam', 'toilet break in an exam', 'feeling unwell in an exam'],
        answer:
            'A supervised break is possible, and the time is generally not returned, so it is worth '
            + 'managing fluids beforehand. If you feel unwell, tell a supervisor rather than pushing on '
            + 'quietly, since that creates the record the misadventure process needs.',
    },
    {
        id: 'hsc-deferring',
        question: 'What is deferring a university offer?',
        aliases: ['deferring an offer', 'deferral', 'holding a university place'],
        answer:
            'Accepting a place and delaying the start, usually for a year, so the offer is held '
            + 'rather than reapplied for. Most universities allow it for most courses, some competitive '
            + 'ones do not, and the conditions are set by the institution, so confirm before making '
            + 'plans.',
    },
    {
        id: 'hsc-gap-year',
        question: 'Is a gap year a good idea?',
        aliases: ['gap year', 'taking a year off after school', 'working before university'],
        answer:
            'It suits students who are uncertain about a direction or exhausted, and many return more '
            + 'focused. The risks are losing study habits and drifting past the deferral window. '
            + 'Deciding what the year is for, and deferring rather than declining a place, addresses '
            + 'both.',
    },
];
