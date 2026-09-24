/**
 * The answer bank behind the chat assistant.
 *
 * Every figure, date and address is read from the data files the rest of the
 * site renders from, so a rate or timetable change updates the assistant with
 * no separate edit here. Answers are plain sentences: the assistant sends them
 * as written rather than rephrasing them, which is what keeps it from inventing
 * a price.
 */
import {
    COURSES,
    FACILITY_HIGHLIGHTS,
    FOUNDING_OFFER_OPEN,
    FOUNDING_PLACES_PER_CLASS,
    FOUNDING_TERM_PRICE,
    GROUP_CLASSES_PATH,
    GROUP_SCOPE_SUMMARY,
    IN_PERSON_DAY,
    IN_PERSON_FIRST_CLASS,
    LESSON_BREAK_MINUTES,
    LESSON_TEACHING_HOURS,
    ONE_ON_ONE_PATH,
    ONLINE_DAY,
    ONLINE_FIRST_CLASS,
    SESSION_PRICE,
    SESSION_TIMES_SUMMARY,
    TERM_LABEL,
    TERM_PRICE,
    TERM_SESSIONS,
    TRIAL_OFFER,
    VENUE_ADDRESS,
    VENUE_POSTCODE,
    VENUE_STATE,
    VENUE_SUBURB,
} from './groupClassLaunch';
import { bundlePricing, hourlyPricing, LESSONS_PER_BUNDLE, perLessonRate } from './pricingData';
import { faqs } from './faqData';
import { studyEntries, subjectLinkLabel, subjectPath } from './studyReference';
import { subjects } from './subjectData';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SUBJECTS_PATH } from '../lib/site';

/** A page the assistant can send someone to alongside an answer. */
export interface KnowledgeLink {
    label: string;
    href: string;
}

export interface KnowledgeEntry {
    id: string;
    /** Shown as the suggestion button, and matched against what is typed. */
    question: string;
    /** Extra wordings parents use that the question itself does not contain. */
    keywords: string[];
    answer: string;
    link?: KnowledgeLink;
}

/** A group of entries, shown as one opening choice in the chat. */
export interface KnowledgeTopic {
    id: string;
    label: string;
    entryIds: string[];
}

const ENQUIRY_LINK: KnowledgeLink = { label: 'Send an enquiry', href: '/#contact' };

const PRICING_LINK: KnowledgeLink = { label: 'See full pricing', href: '/pricing' };

/** Lines like "Year 11: $150 per hour, or $2,800 for a 20 lesson bundle". */
function hourlyAndBundleLines(): string {
    return hourlyPricing
        .map((row, index) => {
            const bundle = bundlePricing[index];
            const perLesson = perLessonRate(bundle.price);
            return `${row.shortLabel}: ${row.price} per hour, or ${bundle.price} for a ${LESSONS_PER_BUNDLE} lesson bundle (${perLesson} a lesson).`;
        })
        .join(' ');
}

function groupPriceAnswer(): string {
    const founding = FOUNDING_OFFER_OPEN
        ? ` The first ${FOUNDING_PLACES_PER_CLASS} students in each class pay ${FOUNDING_TERM_PRICE} for the term instead.`
        : '';
    return (
        `Small-group classes are ${SESSION_PRICE} a session, or ${TERM_PRICE} for the ${TERM_LABEL} term of ` +
        `${TERM_SESSIONS} lessons.${founding} Each session is ${LESSON_TEACHING_HOURS} hours of teaching with a ` +
        `${LESSON_BREAK_MINUTES}-minute break.`
    );
}

function courseListAnswer(): string {
    const names = COURSES.map((course) => course.name).join(', ');
    return (
        `Small-group classes run for ${GROUP_SCOPE_SUMMARY}. The courses are: ${names}. ` +
        `Classes are ${IN_PERSON_DAY} in ${VENUE_SUBURB} and ${ONLINE_DAY} online, at ${SESSION_TIMES_SUMMARY}.`
    );
}

function subjectListAnswer(): string {
    const titles = subjects.map((subject) => subject.title).join(', ');
    return `We tutor ${titles}. Each subject has its own page with what we cover and how sessions run.`;
}

function venueAnswer(): string {
    /* The first highlight is the one that answers "how do we get there"; its
       title is already a full claim, so it is quoted rather than rebuilt. */
    const access = FACILITY_HIGHLIGHTS[0]?.title.toLowerCase();
    const walk = access ? ` It is ${access}.` : '';
    return (
        `In-person small-group classes run at ${VENUE_ADDRESS}, ${VENUE_STATE} ${VENUE_POSTCODE}.${walk} ` +
        `One-on-one tutoring comes to your home instead, or runs online.`
    );
}

/**
 * Entries written for the assistant, covering what the FAQ section does not:
 * rates, the timetable, the venue and how to get in touch. FAQ entries are
 * appended below, so both sets are searched together.
 */
const ASSISTANT_ENTRIES: KnowledgeEntry[] = [
    {
        id: 'one-on-one-price',
        question: 'How much does one-on-one tutoring cost?',
        keywords: ['price', 'prices', 'pricing', 'rate', 'rates', 'fee', 'fees', 'hourly', 'per hour', 'bundle', 'expensive', 'afford'],
        answer: `One-on-one tutoring is priced by year level, and costs the same at your home or online. ${hourlyAndBundleLines()}`,
        link: PRICING_LINK,
    },
    {
        id: 'group-price',
        question: 'How much do small-group classes cost?',
        keywords: ['group price', 'group cost', 'class cost', 'term price', 'founding', 'per session'],
        answer: groupPriceAnswer(),
        link: { label: 'See group classes', href: GROUP_CLASSES_PATH },
    },
    {
        id: 'group-courses',
        question: 'Which courses do the small-group classes run for?',
        keywords: ['which courses', 'course list', 'group subjects', 'hsc classes', 'maths advanced', 'maths extension', 'maths standard', 'year 12 classes', 'courses'],
        answer: courseListAnswer(),
        link: { label: 'See group classes', href: GROUP_CLASSES_PATH },
    },
    {
        id: 'group-start-dates',
        question: 'When do the small-group classes start?',
        keywords: ['classes start', 'start date', 'starting', 'first class', 'first lesson', 'when do classes begin', 'timetable', 'schedule', 'times', 'what time', 'saturday', 'sunday'],
        answer:
            `In-person classes start ${IN_PERSON_FIRST_CLASS} in ${VENUE_SUBURB}, and online classes start ` +
            `${ONLINE_FIRST_CLASS}. Sessions run at ${SESSION_TIMES_SUMMARY}, and which one you join depends on the course.`,
        link: { label: 'See group classes', href: GROUP_CLASSES_PATH },
    },
    {
        id: 'subjects',
        question: 'Which subjects do you tutor?',
        keywords: [
            'subject', 'subjects', 'english', 'maths', 'mathematics', 'physics', 'chemistry', 'biology',
            'economics', 'business', 'commerce', 'selective', 'naplan', 'oc', 'offer', 'primary', 'years',
            'what year levels', 'do you teach primary', 'age groups',
        ],
        answer: subjectListAnswer(),
        link: { label: 'Browse subjects', href: SUBJECTS_PATH },
    },
    {
        id: 'location',
        question: 'Where are you based?',
        keywords: ['location', 'where', 'address', 'venue', 'st leonards', 'parking', 'station', 'travel', 'come to us'],
        answer: venueAnswer(),
        link: { label: 'See group classes', href: GROUP_CLASSES_PATH },
    },
    {
        id: 'trial',
        question: 'Is the first lesson really free?',
        keywords: ['trial', 'free lesson', 'try', 'no obligation', 'first session'],
        answer: `${TRIAL_OFFER}, with no obligation. We use it to find your child's current level and show you how we teach, then give you honest feedback and a suggested plan.`,
        link: ENQUIRY_LINK,
    },
    {
        id: 'one-on-one-format',
        question: 'Do you tutor at home or online?',
        keywords: ['home visit', 'in person', 'online', 'zoom', 'travel to us', 'at home', 'face to face'],
        answer:
            'One-on-one tutoring runs at your home or live online, whichever suits you, and the price is the same either way. ' +
            `Small-group classes run in person in ${VENUE_SUBURB} on ${IN_PERSON_DAY} and online on ${ONLINE_DAY}.`,
        link: { label: 'See one-on-one tutoring', href: ONE_ON_ONE_PATH },
    },
    {
        id: 'contact',
        question: 'How do I get in touch or book?',
        keywords: ['book', 'booking', 'enquire', 'enquiry', 'contact', 'phone', 'call', 'email', 'speak to someone', 'sign up', 'enrol'],
        answer: `Send an enquiry through the form and we will come back to you. You can also call ${CONTACT_PHONE_DISPLAY} or email ${CONTACT_EMAIL}.`,
        link: ENQUIRY_LINK,
    },
];

/** FAQ answers, matched on the same footing as the entries written above. */
const FAQ_ENTRIES: KnowledgeEntry[] = faqs.map((faq) => ({
    id: `faq-${faq.id}`,
    question: faq.question,
    keywords: [],
    answer: faq.answer,
}));

/**
 * The study reference bank: formulas and definitions for the subjects we tutor.
 * Each answer is quoted exactly as written in src/data/studyReference, and each
 * offers the subject page, so a student who wanted a formula can see the
 * tutoring that teaches it.
 */
const STUDY_ENTRIES: KnowledgeEntry[] = studyEntries.map((entry) => ({
    id: entry.id,
    question: entry.question,
    keywords: entry.aliases,
    answer: entry.answer,
    link: { label: subjectLinkLabel(entry.subject), href: subjectPath(entry.subject) },
}));

export const knowledgeEntries: KnowledgeEntry[] = [
    ...ASSISTANT_ENTRIES,
    ...FAQ_ENTRIES,
    ...STUDY_ENTRIES,
];

/** Just the study answers, for the chat's "what can you help with" suggestions. */
export const studyKnowledgeEntries: KnowledgeEntry[] = STUDY_ENTRIES;

/** The opening choices, each holding the entries parents pick between. */
export const knowledgeTopics: KnowledgeTopic[] = [
    { id: 'pricing', label: 'Pricing', entryIds: ['one-on-one-price', 'group-price', 'faq-hourly-vs-bundle'] },
    { id: 'subjects', label: 'Subjects', entryIds: ['subjects', 'faq-subjects-and-years'] },
    { id: 'group', label: 'Group classes', entryIds: ['group-courses', 'group-start-dates', 'group-price'] },
    { id: 'format', label: 'Home or online', entryIds: ['one-on-one-format', 'location'] },
    { id: 'getting-started', label: 'Getting started', entryIds: ['trial', 'faq-how-often', 'contact'] },
    { id: 'during', label: 'How lessons work', entryIds: ['faq-session-length', 'faq-homework-and-notes', 'faq-progress-updates'] },
    /* A sample of the study bank, so students see that formulas and definitions
       can be asked for. The bank holds far more than these three. */
    { id: 'study', label: 'Study help', entryIds: ['maths-sphere-volume', 'chem-gibbs-free-energy', 'eng-essay-structure'] },
];

export function findEntryById(id: string): KnowledgeEntry | undefined {
    return knowledgeEntries.find((entry) => entry.id === id);
}
