import type { ReactNode } from 'react';
import {
    GROUP_CLASSES_PATH,
    GROUP_FORMAT,
    IN_PERSON_FIRST_CLASS,
    LESSON_BREAK_MINUTES,
    LESSON_TEACHING_HOURS,
    LAUNCH_DATE_LONG,
    LAUNCH_OFFER,
    SESSION_SLOTS,
    SESSION_START_TIMES,
    SESSION_TIME_NOTE,
    MATHS_COURSES,
    MAX_CLASS_SIZE,
    ONE_ON_ONE_FORMAT,
    ONE_ON_ONE_PATH,
    ONLINE_FIRST_CLASS,
    PROGRAM_HOURLY_RATE,
    PROGRAM_PAID_LESSONS,
    PROGRAM_PRICE,
    PROGRAM_LENGTH,
    PROGRAM_LENGTH_TITLE,
    PROGRAM_SESSIONS,
    PROGRAM_SESSIONS_WORD,
    VENUE_ADDRESS,
} from './groupClassLaunch';
import {
    LESSONS_PER_BUNDLE,
    bundlePricing,
    hourlyPricing,
    perLessonRate,
    type PricingRow,
} from './pricingData';

/**
 * Content for the two learning-format pages, /one-on-one and /group-classes.
 *
 * Both render through the same FormatPage component, so the formats are
 * presented as peers by construction: neither can gain a section, lose one, or
 * drift in styling without the other.
 */

/** A heading split so the middle phrase can take the gold accent treatment. */
export interface Heading {
    lead: string;
    accent?: string;
    trail?: string;
}

export interface SectionHeader {
    eyebrow: string;
    title: Heading;
    subtitle?: ReactNode;
}

export interface FormatFact {
    label: string;
    value: string;
}

export interface AttendanceOption {
    name: string;
    tagline: string;
    description: string;
    points: string[];
}

export interface FormatBenefit {
    title: string;
    description: string;
}

export interface FormatStep {
    step: string;
    title: string;
    description: string;
}

export interface FormatFaq {
    question: string;
    answer: string;
}

/** A single fixed-price program, as opposed to per-year-level rate tables. */
export interface FormatProgramPricing {
    label: string;
    price: string;
    caption: string;
    inclusions: string[];
}

export interface FormatPricingCard {
    label: string;
    note: string;
    rows: PricingRow[];
    /** Bundle cards show the derived per-lesson rate beneath the total. */
    showPerLesson: boolean;
    featured?: boolean;
}

export interface FormatPageContent {
    hero: {
        badge: string;
        title: Heading;
        subtitle: ReactNode;
        facts: FormatFact[];
        primaryCta: { href: string; label: string };
        secondaryCta: { href: string; label: string };
        reassurance: string;
        /** Shows the Shoreline logo as a large, faint centrepiece behind the hero. */
        logoBackdrop?: boolean;
    };
    attendance: { header: SectionHeader; options: AttendanceOption[] };
    benefits: { header: SectionHeader; items: FormatBenefit[] };
    steps: { header: SectionHeader; items: FormatStep[] };
    /** Course streams, where the format runs more than one. */
    courses?: { header: SectionHeader; items: typeof MATHS_COURSES };
    /** The teaching space, shown only by formats that actually meet in it. */
    facilities?: { header: SectionHeader };
    pricing: {
        header: SectionHeader;
        /** Rate tables, or a single program price. Exactly one is used. */
        cards?: FormatPricingCard[];
        program?: FormatProgramPricing;
        footnote: ReactNode;
    };
    faqs: { header: SectionHeader; items: FormatFaq[] };
    finalCta: {
        title: string;
        text: ReactNode;
        note: string;
        /** Format pre-selected in the enquiry form that ends the page. */
        format: string;
    };
}

/** Anchor the hero's secondary button jumps to on both pages. */
export const PRICING_SECTION_ID = 'format-pricing';

/** Anchor of the enquiry form, which now ends each format page. */
const ENQUIRY_ANCHOR = 'contact';
const ONE_ON_ONE_ENQUIRY_HREF = `${ONE_ON_ONE_PATH}#${ENQUIRY_ANCHOR}`;
/** Also used by the homepage, which opens with the same group hero. */
const GROUP_ENQUIRY_HREF = `${GROUP_CLASSES_PATH}#${ENQUIRY_ANCHOR}`;

/** Cheapest real hourly figure for a format, which always comes from a bundle. */
const lowestRate = (rows: PricingRow[]) => perLessonRate(rows[0].price);

export const oneOnOnePage: FormatPageContent = {
    hero: {
        badge: 'Enrolling now',
        title: { lead: 'Every Session, Built Around', accent: 'One Student' },
        subtitle: (
            <>
                Private tutoring <strong>online, live with your tutor</strong>, with a plan shaped
                entirely around where your child is and where they want to get to. Start with a
                free trial lesson and decide afterwards.
            </>
        ),
        facts: [
            { label: 'Session length', value: 'One hour or longer, your choice' },
            { label: 'When', value: 'Scheduled around your week' },
            { label: 'Where', value: 'Online, live with your tutor' },
            { label: 'Attention', value: 'One student, the whole session' },
        ],
        primaryCta: { href: ONE_ON_ONE_ENQUIRY_HREF, label: 'Book a Free Trial Lesson' },
        secondaryCta: { href: `#${PRICING_SECTION_ID}`, label: 'See Tutoring Pricing' },
        reassurance: 'No payment up front. No obligation to continue after the trial lesson.',
    },
    attendance: {
        header: {
            eyebrow: 'How It Works',
            title: { lead: 'Live online,', accent: 'one to one' },
            subtitle:
                'Every lesson is a live video session with your tutor. It is not a recording, a chatbot or a worksheet emailed over. It is the same lesson you would get across a table, without the travel.',
        },
        options: [
            {
                name: 'Live video',
                tagline: 'Face to face, wherever you are.',
                description:
                    'Your tutor and your child talk through the work in real time, so a misunderstanding gets caught the moment it appears rather than at the end of a worksheet.',
                points: [
                    'Questions asked and answered as they come up',
                    'No travel, so no time lost either side of the lesson',
                    'Easier to fit around sport, work and family schedules',
                ],
            },
            {
                name: 'Shared whiteboard',
                tagline: 'Working shown, and marked as you go.',
                description:
                    'Both of you write on the same screen, so your child shows their working and the tutor marks it live. That is the part that matters most for maths, science and long-form writing.',
                points: [
                    'Diagrams, proofs and full worked solutions',
                    'Every board saved and sent after the lesson',
                    'Session notes and personalised homework each time',
                ],
            },
        ],
    },
    benefits: {
        header: {
            eyebrow: 'Why One-on-One',
            title: { lead: 'The whole hour', accent: 'is theirs' },
            subtitle:
                'Nothing is shared and nothing is averaged. The lesson goes exactly where your child needs it to go.',
        },
        items: [
            {
                title: 'No attention to share',
                description:
                    'Every question gets answered the moment it comes up, and no misunderstanding survives to the end of the lesson. Nothing is left for later.',
            },
            {
                title: 'A plan built for one student',
                description:
                    'We work from your child’s actual gaps, not a generic scheme of work. The plan is rewritten as they improve, so the lessons keep pointing at what is still hard.',
            },
            {
                title: 'Moves at their pace',
                description:
                    'A topic that clicks in ten minutes takes ten minutes. One that needs three lessons gets three lessons. Nobody is held back and nobody is dragged along.',
            },
            {
                title: 'Scheduled around your week',
                description:
                    'Lessons are booked to suit your family rather than a fixed timetable, which makes them far easier to sustain across a whole term.',
            },
        ],
    },
    steps: {
        header: {
            eyebrow: 'The Free Trial Lesson',
            title: { lead: 'What actually', accent: 'happens' },
            subtitle:
                'No sales pitch. Your child sits a real lesson, and you get an honest read on whether the tutor is right for them.',
        },
        items: [
            {
                step: '1',
                title: 'A quick chat before the lesson',
                description:
                    'We ask what your child is studying, where they feel stuck, and what they want out of the term, so the first lesson is aimed at something real.',
            },
            {
                step: '2',
                title: 'A full, ordinary lesson',
                description:
                    'Not a demo. Your child does real work, gets real feedback, and finishes with something they understand better than when they started.',
            },
            {
                step: '3',
                title: 'You decide afterwards',
                description:
                    'We send a short note on how the lesson went and what we would work on next. If it is not the right fit, that is genuinely the end of it.',
            },
        ],
    },
    pricing: {
        header: {
            eyebrow: 'What It Costs',
            title: { lead: `From ${lowestRate(bundlePricing)}`, accent: 'an hour' },
            subtitle: (
                <>
                    One-on-one starts at {lowestRate(bundlePricing)} per hour on a bundle, or{' '}
                    {hourlyPricing[0].price} pay-as-you-go. The trial lesson is free either way, and
                    there is no lock-in contract.
                </>
            ),
        },
        cards: [
            {
                label: 'Pay by the hour',
                note: 'No bundle, no commitment. Start after your free trial lesson and stop whenever you like.',
                rows: hourlyPricing,
                showPerLesson: false,
            },
            {
                label: `${LESSONS_PER_BUNDLE}-lesson bundle`,
                note: `A full term at a lower hourly rate, with an individualised study plan across the ${LESSONS_PER_BUNDLE} lessons.`,
                rows: bundlePricing,
                showPerLesson: true,
                featured: true,
            },
        ],
        footnote: (
            <>
                Family discounts apply when you enrol more than one student. Year 12 Mathematics
                students can also join our {PROGRAM_LENGTH} HSC small-group program.
            </>
        ),
    },
    faqs: {
        header: {
            eyebrow: 'Questions & Answers',
            title: { lead: 'Before you book' },
        },
        items: [
            {
                question: 'Is the trial lesson really free?',
                answer:
                    'Yes. Your child sits a full lesson at no cost, with nothing to pay up front and no obligation to continue afterwards.',
            },
            {
                question: 'How long is each lesson?',
                answer:
                    'Lessons are customised in length, from one hour upwards, and we build in structured breaks where they help a student keep focus.',
            },
            {
                question: 'What do we need for an online lesson?',
                answer:
                    'A laptop or tablet with a camera and a stable internet connection. A stylus or drawing tablet helps for maths and science but is not required. Plenty of students write on paper and hold it up to the camera, and the tutor marks from there.',
            },
            {
                question: 'Is there a lock-in contract?',
                answer: `No. Pay per hour with no commitment, or pay for ${LESSONS_PER_BUNDLE} hours up front for a lower rate, whichever works better for you.`,
            },
            {
                question: 'Which year levels and subjects do you cover?',
                answer:
                    'English, Mathematics, Physics, Chemistry, Economics and Business Studies, plus NAPLAN, Selective High School and Opportunity Classes preparation across the tested year levels.',
            },
            {
                question: 'How does this compare with small-group classes?',
                answer:
                    'One-on-one gives your child the whole session and a plan built only for them. Group classes cost substantially less per hour and add peer discussion, capped at a handful of students. Many families start with one and add the other.',
            },
        ],
    },
    finalCta: {
        title: 'Start with a free trial lesson',
        text: (
            <>
                Tell us your child&apos;s year level and subject, and we will match them with the
                right tutor. The trial lesson costs nothing.
            </>
        ),
        format: ONE_ON_ONE_FORMAT,
        note: 'No lock-in contract. Pay by the hour or by the bundle.',
    },
};

export const groupClassesPage: FormatPageContent = {
    hero: {
        badge: 'Year 12 Maths · Now enrolling',
        title: { lead: `A ${PROGRAM_LENGTH_TITLE} HSC Maths Program`, accent: `From ${LAUNCH_DATE_LONG}` },
        subtitle: (
            <>
                For Year 12 <strong>Mathematics Standard, Advanced and Extension 1</strong>:{' '}
                {PROGRAM_SESSIONS_WORD} weekly sessions covering the whole course before your HSC exams, capped at{' '}
                {MAX_CLASS_SIZE} students, in person at {VENUE_ADDRESS} on Saturdays or live online
                on Sundays. <strong>Week 1 is free.</strong>
            </>
        ),
        facts: [
            { label: 'Program length', value: `${PROGRAM_SESSIONS} weeks · one ${LESSON_TEACHING_HOURS}-hour lesson a week` },
            { label: 'In person · St Leonards', value: `From ${IN_PERSON_FIRST_CLASS}, ${SESSION_START_TIMES}` },
            { label: 'Online · live from home', value: `From ${ONLINE_FIRST_CLASS}, ${SESSION_START_TIMES}` },
            { label: 'Price', value: `Week 1 free, then ${PROGRAM_PRICE} (${PROGRAM_HOURLY_RATE} an hour)` },
        ],
        primaryCta: { href: GROUP_ENQUIRY_HREF, label: 'Reserve a Free Seat' },
        // A route plus anchor rather than a bare anchor, so the same button works
        // on the homepage (which opens this page) and here (which jumps down).
        secondaryCta: { href: `${GROUP_CLASSES_PATH}#${PRICING_SECTION_ID}`, label: 'See Pricing & What’s Included' },
        reassurance: 'Week 1 is free. No payment up front, and no obligation to continue.',
        logoBackdrop: true,
    },
    courses: {
        header: {
            eyebrow: 'Three Courses',
            title: { lead: 'One class per', accent: 'course' },
            subtitle:
                'Standard, Advanced and Extension 1 each run as their own class. Nobody sits through content that is not on their paper, and nothing is watered down to suit a mixed room.',
        },
        items: MATHS_COURSES,
    },
    facilities: {
        header: {
            eyebrow: 'Where We Teach',
            title: { lead: 'Our', accent: 'St Leonards', trail: 'rooms' },
            subtitle:
                `Our Saturday small-group classes run from a proper teaching space at ${VENUE_ADDRESS}, a short walk from the station. Prefer to learn from home? Every class runs live online too.`,
        },
    },
    attendance: {
        header: {
            eyebrow: 'Two Ways to Attend',
            title: { lead: 'Saturdays', accent: 'or', trail: 'Sundays' },
            subtitle:
                `The same ${PROGRAM_LENGTH} program, the same content and the same price, on two different days. In person at ${VENUE_ADDRESS} on Saturdays, or live online on Sundays.`,
        },
        options: [
            {
                name: 'Saturdays · in person',
                tagline: 'In the room, with the whiteboard and the group.',
                description:
                    `Each session is ${LESSON_TEACHING_HOURS} hours of teaching with a ${LESSON_BREAK_MINUTES}-minute break, in our quiet, distraction-free rooms at ${VENUE_ADDRESS}, working through problems on the board with written work marked on the spot.`,
                points: [
                    `First session ${IN_PERSON_FIRST_CLASS}`,
                    ...SESSION_SLOTS.map((slot) => `${slot.name} ${slot.time}`),
                    'Quiet teaching rooms, minutes from St Leonards station',
                ],
            },
            {
                name: 'Sundays · online',
                tagline: 'The same program, joined from home.',
                description:
                    `The same ${LESSON_TEACHING_HOURS}-hour sessions as a live video class with a shared whiteboard, not a recording. Students ask questions out loud and work through the same material as the Saturday group.`,
                points: [
                    `First session ${ONLINE_FIRST_CLASS}`,
                    ...SESSION_SLOTS.map((slot) => `${slot.name} ${slot.time}`),
                    'Live and interactive, never pre-recorded',
                ],
            },
        ],
    },
    benefits: {
        header: {
            eyebrow: 'Why This Program',
            title: { lead: 'The whole course,', accent: 'before the exam' },
            subtitle:
                `${PROGRAM_SESSIONS_WORD.charAt(0).toUpperCase()}${PROGRAM_SESSIONS_WORD.slice(1)} focused sessions can cover every topic, provided the room is small and the plan is built around the paper.`,
        },
        items: [
            {
                title: 'Full course coverage in four weeks',
                description:
                    `A fixed plan across the ${PROGRAM_SESSIONS_WORD} sessions that works through every Year 12 topic in your course, so nothing is left to chance in the last fortnight.`,
            },
            {
                title: `Never more than ${MAX_CLASS_SIZE} students`,
                description:
                    'Small enough that every student is asked questions and gets their working checked. This close to the HSC, quietly misunderstanding something is expensive.',
            },
            {
                title: 'Built around the exam, not the term',
                description:
                    'Past HSC questions, marking criteria and the traps that cost marks every year, rather than a rerun of what school already covered.',
            },
            {
                title: 'The same tutors as our one-on-one students',
                description:
                    'Identical syllabus expertise and lesson planning, at a fraction of the cost per student because the room is shared.',
            },
        ],
    },
    steps: {
        header: {
            eyebrow: 'Week 1 Is Free',
            title: { lead: 'What actually', accent: 'happens' },
            subtitle:
                'No trial-lesson theatre. Week 1 is a real session of the program, and you decide before week 2 whether to continue.',
        },
        items: [
            {
                step: '1',
                title: 'Tell us your course',
                description:
                    'Standard, Advanced or Extension 1, and where you currently feel weakest. That determines which class you join and what we watch for in the first session.',
            },
            {
                step: '2',
                title: 'Sit week 1, free',
                description:
                    'A full session of the program, not a demo. Real content, real past-paper work, and real feedback alongside the other students.',
            },
            {
                step: '3',
                title: 'Decide before week 2',
                description:
                    'We send a short note on how the session went and what the remaining weeks cover. If it is not right, that is genuinely the end of it.',
            },
        ],
    },
    pricing: {
        header: {
            eyebrow: 'What It Costs',
            title: { lead: 'One price,', accent: 'whole program' },
            subtitle: (
                <>
                    Week 1 is free. If you continue, {PROGRAM_PRICE} covers the remaining{' '}
                    {PROGRAM_PAID_LESSONS} lessons, which works out to {PROGRAM_HOURLY_RATE} an hour.
                    The price is the same whether you attend in person or online.
                </>
            ),
        },
        program: {
            label: `${PROGRAM_LENGTH_TITLE} HSC program`,
            price: PROGRAM_PRICE,
            caption: `${PROGRAM_HOURLY_RATE} an hour for the remaining ${PROGRAM_PAID_LESSONS} lessons · week 1 free`,
            inclusions: [
                `All ${PROGRAM_SESSIONS_WORD} lessons, ${LESSON_TEACHING_HOURS} hours of teaching each`,
                `A class of no more than ${MAX_CLASS_SIZE} students`,
                'Past HSC papers and worked solutions',
                'Personalised homework after every session',
                'Saturdays in person or Sundays online, same price',
            ],
        },
        footnote: (
            <>
                Family discounts apply when you enrol more than one student. One-on-one tutoring
                starts at {lowestRate(bundlePricing)} an hour if you would rather your child had the
                whole session.
            </>
        ),
    },
    faqs: {
        header: {
            eyebrow: 'Questions & Answers',
            title: { lead: 'Before you book' },
        },
        items: [
            {
                question: 'Who are these classes for?',
                answer:
                    'Year 12 students sitting Mathematics Standard, Advanced or Extension 1 in the upcoming HSC. Each course runs as its own class. We do not currently run group classes for other year levels or subjects, though one-on-one tutoring is available across Years 1 to 12.',
            },
            {
                question: 'Is week 1 really free?',
                answer:
                    `Yes. The first of the ${PROGRAM_SESSIONS_WORD} sessions costs nothing, with nothing to pay up front. You only pay if you decide to stay for the rest of the program.`,
            },
            {
                question: 'Can you really cover the whole course in four weeks?',
                answer:
                    `The program is planned across the ${PROGRAM_SESSIONS_WORD} sessions to work through every Year 12 topic in your course, at revision pace rather than teaching it from scratch. It is built for students who have seen the content at school and need it consolidated and drilled against past papers before the exam.`,
            },
            {
                question: 'Can I choose between in person and online?',
                answer:
                    'Yes. Both run the same program at the same price, so pick whichever suits your week when you enquire. Saturdays are in person at St Leonards, Sundays are live online.',
            },
            {
                question: 'What if the class fills up?',
                answer: `Because we cap classes at ${MAX_CLASS_SIZE} students, places genuinely run out. If your course is full we will let you know rather than squeezing another student in.`,
            },
            {
                question: 'What time is my class?',
                answer: `${SESSION_TIME_NOTE} Tell us which course you are sitting and whether Saturday or Sunday suits, and we will confirm your session.`,
            },
            {
                question: 'What if I miss a week?',
                answer:
                    'Tell us as early as you can. Where there is room, you can sit that week with the other day\u2019s group. The Saturday and Sunday classes cover the same material and we will send the session notes either way.',
            },
        ],
    },
    finalCta: {
        title: `The program starts ${LAUNCH_DATE_LONG}`,
        text: (
            <>
                Tell us which course you are sitting and whether Saturdays or Sundays suit, and we
                will save you a seat. {LAUNCH_OFFER}.
            </>
        ),
        format: GROUP_FORMAT,
        note: `Places are limited to ${MAX_CLASS_SIZE} students per class.`,
    },
};
