import type { ReactNode } from 'react';
import {
    GROUP_CLASSES_PATH,
    GROUP_FORMAT,
    IN_PERSON_FIRST_CLASS,
    LESSON_BREAK_MINUTES,
    LESSON_TEACHING_HOURS,
    FIRST_LESSON_DATE_LONG,
    TRIAL_OFFER,
    SESSION_SLOTS,
    SESSION_START_TIMES,
    SESSION_TIME_NOTE,
    COURSES,
    ONE_ON_ONE_FORMAT,
    ONE_ON_ONE_PATH,
    ONLINE_FIRST_CLASS,
    FOUNDING_HOURLY_RATE,
    FOUNDING_PLACES_PER_CLASS,
    FOUNDING_TERM_PRICE,
    SESSION_PRICE,
    TERM_HOURLY_RATE,
    TERM_LABEL,
    TERM_PAID_SESSIONS,
    TERM_PRICE,
    TERM_SAVING,
    VENUE_ADDRESS,
    anyFoundingPlaces,
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
    courses?: { header: SectionHeader; items: typeof COURSES };
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
                Private tutoring <strong>at your home or live online</strong>, with a plan shaped
                entirely around where your child is and where they want to get to. Start with a
                free trial lesson and decide afterwards.
            </>
        ),
        facts: [
            { label: 'Session length', value: 'One hour or longer, your choice' },
            { label: 'When', value: 'Scheduled around your week' },
            { label: 'Where', value: 'At your home or live online' },
            { label: 'Attention', value: 'One student, the whole session' },
        ],
        primaryCta: { href: ONE_ON_ONE_ENQUIRY_HREF, label: 'Book a Free Trial Lesson' },
        secondaryCta: { href: `#${PRICING_SECTION_ID}`, label: 'See Tutoring Pricing' },
        reassurance: 'No payment up front. No obligation to continue after the trial lesson.',
        logoBackdrop: true,
    },
    attendance: {
        header: {
            eyebrow: 'How It Works',
            title: { lead: 'At home or online,', accent: 'one to one' },
            subtitle:
                'Your tutor comes to your home, or teaches your child in a live video lesson. Either way it is the same tutor, the same plan and the same price, so choose whichever fits your week.',
        },
        options: [
            {
                name: 'At your home',
                tagline: 'Your tutor comes to you.',
                description:
                    'Lessons happen wherever your child studies best, so there is nothing to organise beyond being home. The tutor works through problems on paper beside them and marks as they go.',
                points: [
                    'No travel for your child, before or after the lesson',
                    'Past papers and textbooks worked through side by side',
                    'The same price as learning online',
                ],
            },
            {
                name: 'Live online',
                tagline: 'Face to face, wherever you are.',
                description:
                    'A live video lesson with a shared whiteboard, so your child shows their working and the tutor marks it in real time. It is not a recording or a worksheet emailed over.',
                points: [
                    'Diagrams, proofs and full worked solutions on screen',
                    'Every board saved and sent after the lesson',
                    'Easy to fit around sport, work and family schedules',
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
                Family discounts apply when you enrol more than one student. Year 12 students
                can also join our weekly small-group classes.
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
                    'One-on-one gives your child the whole session and a plan built only for them. Group classes cost substantially less per hour, add peer discussion, and run one class per course. Many families start with one and add the other.',
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
        badge: 'Year 12 · Now enrolling',
        title: { lead: 'Year 12 Small-Group Classes', accent: `Weekly from ${FIRST_LESSON_DATE_LONG}` },
        subtitle: (
            <>
                For Year 12 <strong>Mathematics Standard, Advanced and Extension 1, Physics and
                Chemistry</strong>: one {LESSON_TEACHING_HOURS}-hour lesson a week working through
                the course alongside school, in person at {VENUE_ADDRESS} on Saturdays or live
                online on Sundays. <strong>The first lesson is free.</strong>
            </>
        ),
        facts: [
            { label: 'Each week', value: `One ${LESSON_TEACHING_HOURS}-hour lesson · ${LESSON_BREAK_MINUTES}-minute break` },
            { label: 'In person · St Leonards', value: `From ${IN_PERSON_FIRST_CLASS}, ${SESSION_START_TIMES}` },
            { label: 'Online · live from home', value: `From ${ONLINE_FIRST_CLASS}, ${SESSION_START_TIMES}` },
            {
                label: 'Price',
                value: anyFoundingPlaces()
                    ? `${TRIAL_OFFER}. Founding places ${FOUNDING_TERM_PRICE} for the term`
                    : `${TRIAL_OFFER}, then ${TERM_PRICE} for the term`,
            },
        ],
        primaryCta: { href: GROUP_ENQUIRY_HREF, label: 'Book a Free Lesson' },
        // A route plus anchor rather than a bare anchor, so the same button works
        // on the homepage (which opens this page) and here (which jumps down).
        secondaryCta: { href: `${GROUP_CLASSES_PATH}#${PRICING_SECTION_ID}`, label: 'See Pricing & What’s Included' },
        reassurance: 'The first lesson is free. No payment up front, and no obligation to continue.',
        logoBackdrop: true,
    },
    courses: {
        header: {
            eyebrow: 'Five Courses',
            title: { lead: 'One class per', accent: 'course' },
            subtitle:
                'Standard, Advanced, Extension 1, Physics and Chemistry each run as their own class. Nobody sits through content that is not on their paper, and nothing is watered down to suit a mixed room.',
        },
        items: COURSES,
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
                `The same classes, the same content and the same price, on two different days. In person at ${VENUE_ADDRESS} on Saturdays, or live online on Sundays.`,
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
                    'Quiet teaching rooms, minutes from St Leonards train station and Crows Nest metro station',
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
            eyebrow: 'Why These Classes',
            title: { lead: 'Your course,', accent: 'every week' },
            subtitle:
                'A class that follows one course and one plan, week after week, rather than a room of students working on five different things.',
        },
        items: [
            {
                title: 'Every course runs as its own class',
                description:
                    'Standard, Advanced, Extension 1, Physics and Chemistry each have their own room and their own plan. Nobody sits through content that is not on their paper.',
            },
            {
                title: 'Alongside school, week by week',
                description:
                    'Each lesson consolidates what school has just covered and gets ahead of what is coming, so the work compounds across the year instead of being crammed at the end.',
            },
            {
                title: 'Past HSC questions from the first lesson',
                description:
                    'Marking criteria and the traps that cost marks every year, worked in from the start rather than saved for a revision block in October.',
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
            eyebrow: 'First Lesson Free',
            title: { lead: 'What actually', accent: 'happens' },
            subtitle:
                'No trial-lesson theatre. Your first lesson is an ordinary week of the class, and you decide afterwards whether to keep coming.',
        },
        items: [
            {
                step: '1',
                title: 'Tell us your course',
                description:
                    'Standard, Advanced, Extension 1, Physics or Chemistry, and where you currently feel weakest. That determines which class you join and what we watch for in the first lesson.',
            },
            {
                step: '2',
                title: 'Sit your first lesson, free',
                description:
                    'An ordinary week of the class, not a demo. Real content, real past-paper work, and real feedback alongside the other students.',
            },
            {
                step: '3',
                title: 'Decide afterwards',
                description:
                    'We send a short note on how the lesson went and what the class covers next. If it is not right, that is genuinely the end of it.',
            },
        ],
    },
    pricing: {
        header: {
            eyebrow: 'What It Costs',
            title: { lead: 'Pay for the term,', accent: 'or week by week' },
            subtitle: (
                <>
                    The first lesson is free.{' '}
                    {anyFoundingPlaces() && (
                        <>
                            The first {FOUNDING_PLACES_PER_CLASS} students in each class take a founding
                            place at {FOUNDING_TERM_PRICE} for the rest of {TERM_LABEL}.{' '}
                        </>
                    )}
                    After that it is {TERM_PRICE} for the {TERM_PAID_SESSIONS} paid lessons,
                    saving {TERM_SAVING} on paying {SESSION_PRICE} a lesson each week. The price
                    is the same in person or online.
                </>
            ),
        },
        program: {
            // Leads with founding places while any class has them, then the term rate.
            ...(anyFoundingPlaces()
                ? {
                    label: `Founding place · first ${FOUNDING_PLACES_PER_CLASS} students per class`,
                    price: FOUNDING_TERM_PRICE,
                    caption: `for ${TERM_LABEL} · ${FOUNDING_HOURLY_RATE} an hour · then ${TERM_PRICE} a term or ${SESSION_PRICE} a lesson`,
                }
                : {
                    label: `${TERM_LABEL}, paid up front`,
                    price: TERM_PRICE,
                    caption: `${TERM_HOURLY_RATE} an hour · saves ${TERM_SAVING} · or ${SESSION_PRICE} a lesson weekly`,
                }),
            inclusions: [
                `${LESSON_TEACHING_HOURS} hours of teaching every lesson`,
                'A class that runs only your course',
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
                    'Year 12 students sitting Mathematics Standard, Advanced or Extension 1, Physics or Chemistry. Each course runs as its own class. We do not currently run group classes for other year levels or subjects, though one-on-one tutoring is available across Years 1 to 12.',
            },
            {
                question: 'Is the first lesson really free?',
                answer:
                    'Yes. Your first lesson costs nothing, with nothing to pay up front. You only pay if you decide to keep coming.',
            },
            {
                question: 'How do the classes fit around school?',
                answer:
                    'Each week follows the Year 12 course your school is teaching, consolidating what has just been covered and getting ahead of what is coming next. The aim is that school and class reinforce each other across the year, rather than the class becoming a second set of homework.',
            },
            {
                question: 'Can I choose between in person and online?',
                answer:
                    'Yes. Both cover the same material at the same price, so pick whichever suits your week when you enquire. Saturdays are in person at St Leonards, Sundays are live online.',
            },
            {
                question: 'Can I join partway through the term?',
                answer: 'Yes. Classes run every week through the term, so you can start whenever suits and still sit your first lesson free. Tell us which course you are in and we will let you know what the class has covered so far.',
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
        title: `Classes run weekly from ${FIRST_LESSON_DATE_LONG}`,
        text: (
            <>
                Tell us which course you are sitting and whether Saturdays or Sundays suit, and we
                will save you a seat. {TRIAL_OFFER}.
            </>
        ),
        format: GROUP_FORMAT,
        note: 'Every course runs as its own class, so tell us which one you are sitting.',
    },
};
