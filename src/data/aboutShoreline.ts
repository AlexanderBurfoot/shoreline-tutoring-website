/**
 * Why a parent should choose Shoreline, in the assistant's own words.
 *
 * These are the questions a parent asks before booking, which the bank had no
 * answer for: why you rather than someone else, what a first lesson is like, how
 * progress is shown. They matter commercially, so they are worth answering well.
 *
 * Every claim here is already made somewhere on the site: the three feature
 * cards in src/components/Features.tsx, the five steps in
 * src/components/Approach.tsx, and the venue claims confirmed for the St Leonards
 * rooms. Nothing about tutor qualifications, years in business, student numbers
 * or marks achieved appears anywhere on the site, so nothing of that kind is
 * claimed here. Adding any of it needs the owner to confirm it first.
 */
import { TRIAL_OFFER, VENUE_SUBURB } from './groupClassLaunch';
import type { KnowledgeEntry } from './chatbotKnowledge';

const ENQUIRY_LINK = { label: 'Send an enquiry', href: '/#contact' };
const ONE_ON_ONE_LINK = { label: 'See one-on-one tutoring', href: '/one-on-one' };
const GROUP_LINK = { label: 'See group classes', href: '/group-classes' };

export const aboutShorelineEntries: KnowledgeEntry[] = [
    {
        id: 'about-why-choose',
        question: 'Why choose Shoreline Tutoring?',
        keywords: [
            'why choose shoreline', 'why shoreline', 'why you', 'what makes you different',
            'why should we choose you', 'what sets you apart', 'why pick shoreline',
            'convince me', 'what is special about shoreline',
        ],
        answer:
            'Three things, and they are the ones we would want asked. Attention is never spread thin: one-on-one '
            + 'means one tutor and one student for the whole lesson, and group classes stay small with one course per '
            + 'class, so nobody sits through content meant for someone else. The plan is built from where marks are '
            + 'actually being lost rather than from a script, and it changes as your child improves. And lessons are '
            + 'taught the way exams are marked, following the NSW syllabus and practising what markers reward. '
            + `${TRIAL_OFFER}, so you can judge all of that before paying for anything.`,
        link: ENQUIRY_LINK,
    },
    {
        id: 'about-how-we-differ',
        question: 'What makes Shoreline different from other tutoring?',
        keywords: [
            'how are you different', 'different from other tutors', 'compared to other tutoring',
            'versus a tutoring centre', 'why not a big centre', 'difference between you and others',
        ],
        answer:
            'We can only speak for how we work rather than for anyone else. One-on-one is one tutor and one student '
            + 'for the full lesson, at your home or online. Group classes run one course per class and stay small, so '
            + 'the teaching is aimed at the course your child is actually sitting. Questions between lessons get an '
            + 'answer within 24 hours in your WhatsApp group. Whether that suits you better than another option is '
            + 'worth testing on the free first lesson.',
        link: ONE_ON_ONE_LINK,
    },
    {
        id: 'about-first-lesson',
        question: 'What happens in the first lesson?',
        keywords: [
            'what happens in the first lesson', 'first lesson', 'what to expect',
            'initial assessment', 'what happens at the start', 'how do you start',
        ],
        answer:
            'It starts with finding out where your child actually is: their current level, how they learn, and what '
            + 'they are aiming at. We use it to locate where marks are being lost rather than to cover content, and '
            + `you get honest feedback and a suggested plan at the end of it. ${TRIAL_OFFER} and there is no `
            + 'obligation to continue.',
        link: ENQUIRY_LINK,
    },
    {
        id: 'about-lesson-plan',
        question: 'Are lessons planned around my child or the same for everyone?',
        keywords: [
            'is it tailored', 'individual plan', 'personalised', 'same for everyone',
            'do you follow a program', 'custom plan', 'built around my child',
        ],
        answer:
            'The plan is built from your child’s own gaps, not from a set program. We start by finding where marks '
            + 'are being lost, target those while building on what is already strong, and rewrite the plan as they '
            + 'improve rather than following something written for everyone.',
        link: ONE_ON_ONE_LINK,
    },
    {
        id: 'about-exam-technique',
        question: 'Do you teach exam technique or just the content?',
        keywords: [
            'exam technique', 'do you teach technique', 'past papers', 'marking guidelines',
            'how to answer exam questions', 'more than content',
        ],
        answer:
            'Both, because content alone does not earn the marks. Lessons follow the NSW syllabus and practise what '
            + 'markers actually reward: answering to the verb in the question, structuring a response that can reach '
            + 'full marks, and working past papers under time. A student who knows the content but loses marks on '
            + 'presentation is the most common case we see.',
        link: ONE_ON_ONE_LINK,
    },
    {
        id: 'about-between-lessons',
        question: 'Can we ask questions between lessons?',
        keywords: [
            'between lessons', 'ask a question between lessons', 'whatsapp', 'message the tutor',
            'homework help between sessions', 'support outside lessons', 'contact the tutor',
        ],
        answer:
            'Yes. Message your tutor in your WhatsApp group for a quick question or help with homework, and you will '
            + 'have a reply within 24 hours. It is included rather than charged for, because the question a student '
            + 'gets stuck on midweek is usually the one worth answering soonest.',
        link: ENQUIRY_LINK,
    },
    {
        id: 'about-progress-reports',
        question: 'How will I know if my child is improving?',
        keywords: [
            'how do I know it is working', 'progress', 'progress reports', 'track progress',
            'will my child improve', 'measuring improvement', 'feedback to parents',
        ],
        answer:
            'Through regular assessment and written progress updates, so the picture comes from marked work rather '
            + 'than from how a lesson felt. The plan is adjusted when the reports show something is not shifting. We '
            + 'do not promise a particular mark, since nobody honestly can, but you will always be able to see what '
            + 'has changed and what is still being worked on.',
        link: ENQUIRY_LINK,
    },
    {
        id: 'about-small-groups',
        question: 'Why keep the group classes small?',
        keywords: [
            'why small groups', 'how small are the classes', 'class size', 'how many students in a class',
            'small group benefit',
        ],
        answer:
            'So the teaching can still be aimed at the students in the room. Each class runs one course only, which '
            + 'means nobody sits through content meant for a different course, and a small enough group lets a tutor '
            + 'see who has not followed something before it becomes a gap.',
        link: GROUP_LINK,
    },
    {
        id: 'about-one-on-one-or-group',
        question: 'Should we choose one-on-one or a small-group class?',
        keywords: [
            'one on one or group', 'which is better one on one or group', 'group or private',
            'what suits my child', 'should we do group classes', 'private or class',
        ],
        answer:
            'One-on-one suits a student with specific gaps to close, an unusual timetable, or a need to move at their '
            + 'own pace, and it runs at your home or online. A small-group class suits a student who is broadly on '
            + `track and wants structured coverage of one course, and runs in person in ${VENUE_SUBURB} or online. `
            + 'Some families use a class for coverage and add one-on-one before major assessments. Tell us the '
            + 'situation and we will say which we think fits.',
        link: GROUP_LINK,
    },
    {
        id: 'about-distraction-free',
        question: 'What are the in-person classrooms like?',
        keywords: [
            'what are the rooms like', 'classroom', 'facilities', 'what is the venue like',
            'is it quiet', 'learning environment',
        ],
        answer:
            `The rooms are on the Pacific Highway in ${VENUE_SUBURB}, minutes from the station, kept quiet and `
            + 'distraction-free, and equipped for every subject we teach. Sessions are focused, so the whole hour '
            + 'goes on the work rather than on settling a room.',
        link: GROUP_LINK,
    },
];
