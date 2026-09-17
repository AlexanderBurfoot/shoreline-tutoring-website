/**
 * Single source of truth for the weekly small-group classes.
 *
 * Every surface that advertises the classes (the announcement bar, the promo
 * popup, the hero, the /group-classes page, the pricing tables) reads from
 * here, so a date, time, price or course only ever needs changing in one place.
 */

/** IANA zone for every class time on the site. */
const SYDNEY_TIME_ZONE = 'Australia/Sydney';

/** First lesson in ISO form, used for structured data and countdown maths. */
export const FIRST_LESSON_DATE_ISO = '2026-10-03';

/** First online lesson in ISO form. Keep one day after the in-person date. */
export const ONLINE_FIRST_LESSON_DATE_ISO = '2026-10-04';

/** Human-readable first lesson, used in body copy. */
export const FIRST_LESSON_DATE_LONG = 'Saturday 3 October';

/** Compact form, used where space is tight (announcement bar, badges). */
export const FIRST_LESSON_DATE_SHORT = 'Sat 3 Oct';

/**
 * Classes run on different days by format: in person at St Leonards on
 * Saturdays, and online the following day on Sundays. One-on-one tutoring is
 * scheduled around the family and has no fixed day.
 */
export const IN_PERSON_DAY = 'Saturdays';
export const IN_PERSON_FIRST_CLASS = 'Saturday 3 October';

/** Keep one day after the in-person date above. */
export const ONLINE_DAY = 'Sundays';
export const ONLINE_FIRST_CLASS = 'Sunday 4 October';

/** Hours of teaching in each weekly lesson, not counting the break. */
export const LESSON_TEACHING_HOURS = 3;

/** Break in the middle of each lesson, in minutes. */
export const LESSON_BREAK_MINUTES = 30;

export interface SessionSlot {
    name: string;
    time: string;
}

/**
 * The two lessons run each day, identical on Saturdays in person and Sundays
 * online: three hours of teaching either side of the break, with half an hour
 * between the sessions for one group to leave before the next arrives.
 */
export const SESSION_SLOTS: SessionSlot[] = [
    { name: 'Morning session', time: '10:00am – 1:30pm' },
    { name: 'Afternoon session', time: '2:00pm – 5:30pm' },
];

/** Both session times on one line: "10:00am – 1:30pm or 2:00pm – 5:30pm". */
export const SESSION_TIMES_SUMMARY = SESSION_SLOTS.map((slot) => slot.time).join(' or ');

/** Just the start times: "10:00am or 2:00pm". */
export const SESSION_START_TIMES = SESSION_SLOTS.map((slot) => slot.time.split(' – ')[0]).join(' or ');

/**
 * Clock time of the first morning session, in 24-hour form. The countdown
 * targets this, so keep it in step with the morning slot above.
 */
export const FIRST_LESSON_START_TIME_24H = '10:00';

/**
 * Which session a student joins depends on their course, so the slot is
 * confirmed on enrolment rather than published per course.
 */
export const SESSION_TIME_NOTE = `Each Saturday in St Leonards and each Sunday online runs two sessions: ${SESSION_SLOTS[0].time} and ${SESSION_SLOTS[1].time}. Every session is ${LESSON_TEACHING_HOURS} hours of teaching with a ${LESSON_BREAK_MINUTES}-minute break, and which one you join depends on your course.`;

/** Parts of the venue address, kept separate for structured data. */
export const VENUE_STREET = '558 Pacific Highway';
/** Suburb alone, for copy where the full address would be too long. */
export const VENUE_SUBURB = 'St Leonards';
export const VENUE_STATE = 'NSW';
export const VENUE_POSTCODE = '2065';

/** Street address of the in-person teaching space. */
export const VENUE_ADDRESS = `${VENUE_STREET}, ${VENUE_SUBURB}`;

/** The venue as a schema.org PostalAddress, for structured data. */
export const VENUE_POSTAL_ADDRESS = {
    '@type': 'PostalAddress',
    streetAddress: VENUE_STREET,
    addressLocality: VENUE_SUBURB,
    addressRegion: VENUE_STATE,
    postalCode: VENUE_POSTCODE,
    addressCountry: 'AU',
};

/** Google Maps link for the venue, used wherever the address is shown. */
export const VENUE_MAP_URL =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${VENUE_ADDRESS}, NSW, Australia`)}`;

/**
 * What small-group classes currently cover, as one clause that reads inside a
 * sentence. Update it here and every section that scopes the offer follows.
 */
export const GROUP_SCOPE_SUMMARY = 'Year 12 maths, physics and chemistry';

/** The term the published schedule runs to. */
export const TERM_LABEL = 'Term 4';

/** Last lesson of the published schedule, in body copy. */
export const TERM_LAST_LESSON_LONG = 'Saturday 12 December';

/** Lessons in the published schedule, counting the free first one. */
export const TERM_SESSIONS = 11;

/** Price of a single lesson, in whole dollars. */
export const SESSION_PRICE_DOLLARS = 250;

/** The first lesson is free, so every other lesson in the term is paid. */
export const TERM_PAID_SESSIONS = TERM_SESSIONS - 1;

/** Cost of the published schedule, with the free first lesson excluded. */
export const TERM_PRICE_DOLLARS = SESSION_PRICE_DOLLARS * TERM_PAID_SESSIONS;

/** A single lesson, e.g. "$250". */
export const SESSION_PRICE = `$${SESSION_PRICE_DOLLARS}`;

/** The whole term, e.g. "$2,500". */
export const TERM_PRICE = `$${TERM_PRICE_DOLLARS.toLocaleString('en-AU')}`;

/** A lesson spread across its teaching hours, e.g. "$83". */
export const SESSION_HOURLY_RATE = `$${Math.round(SESSION_PRICE_DOLLARS / LESSON_TEACHING_HOURS)}`;

/** The trial offer, phrased consistently everywhere it appears. */
export const TRIAL_OFFER = 'First lesson free';

export interface Course {
    id: 'maths-standard' | 'maths-advanced' | 'maths-extension-1' | 'physics' | 'chemistry';
    /** Full HSC course name. */
    name: string;
    /** Short form for chips and badges. */
    shortName: string;
    /** What the class covers for this course. */
    covers: string;
}

/**
 * The Year 12 courses classes run for. Each is a separate class, so each needs
 * its own session time once confirmed. A course that draws no interest is
 * removed from this list rather than advertised and quietly not run.
 */
export const COURSES: Course[] = [
    {
        id: 'maths-standard',
        name: 'Mathematics Standard',
        shortName: 'Standard',
        covers:
            'Financial mathematics and annuities, bivariate data and the normal distribution, non-right-angled trigonometry, rates and ratios, and network diagrams including critical path analysis.',
    },
    {
        id: 'maths-advanced',
        name: 'Mathematics Advanced',
        shortName: 'Advanced',
        covers:
            'Graphing techniques and functions, trigonometric functions, differential and integral calculus, series and annuities, and statistical analysis including random variables and the normal distribution.',
    },
    {
        id: 'maths-extension-1',
        name: 'Mathematics Extension 1',
        shortName: 'Extension 1',
        covers:
            'Proof by mathematical induction, vectors, trigonometric identities, further integration and differential equations, and the binomial distribution.',
    },
    {
        id: 'physics',
        name: 'Physics',
        shortName: 'Physics',
        covers:
            'Advanced mechanics including projectile and circular motion, electromagnetism, the nature of light from electromagnetic waves to special relativity, and from the universe to the atom.',
    },
    {
        id: 'chemistry',
        name: 'Chemistry',
        shortName: 'Chemistry',
        covers:
            'Equilibrium and acid reactions, acid and base reactions including titration and buffers, organic chemistry from hydrocarbons to polymers, and applying chemical ideas through qualitative and instrumental analysis.',
    },
];

export interface GroupClassDay {
    id: 'in-person' | 'online';
    label: string;
    schedule: string;
    firstClass: string;
    /** Short name for the enquiry form's day choice and the enquiry email. */
    shortLabel: string;
}

/** The two class days, in the compact form used by the promo popup. */
export const GROUP_CLASS_DAYS: GroupClassDay[] = [
    {
        id: 'in-person',
        label: 'In person · St Leonards',
        schedule: `${IN_PERSON_DAY}, ${SESSION_TIMES_SUMMARY}`,
        firstClass: IN_PERSON_FIRST_CLASS,
        shortLabel: 'Saturday in person',
    },
    {
        id: 'online',
        label: 'Online · live from home',
        schedule: `${ONLINE_DAY}, ${SESSION_TIMES_SUMMARY}`,
        firstClass: ONLINE_FIRST_CLASS,
        shortLabel: 'Sunday online',
    },
];

/**
 * Optional photograph behind the promo popup's offer panel, e.g.
 * '/facilities/teaching-room.webp'. Leave empty to keep the plain gradient;
 * a dark overlay is applied over whatever is set so the text stays readable.
 */
export const PROMO_BACKGROUND_IMAGE = '';

/**
 * Session-storage key carrying the popup's course and day choice to the group
 * page's enquiry form, which reads and clears it when it mounts.
 */
export const CLASS_PREFERENCE_KEY = 'group_class_preference';

/** What the popup stores under CLASS_PREFERENCE_KEY, as JSON. */
export interface ClassPreference {
    course: Course['id'] | null;
    day: GroupClassDay['id'] | null;
}

/**
 * Answers to "How would you like to learn?" on the enquiry form. Kept here
 * rather than in the form component so page content can pre-select one: values
 * exported from a client component are not usable from server code.
 */
export const ONE_ON_ONE_FORMAT = 'One-on-one tutoring';
export const GROUP_FORMAT = 'Small-group classes';
export const LEARNING_FORMATS = [ONE_ON_ONE_FORMAT, GROUP_FORMAT, 'Not sure yet'];

export interface FacilityHighlight {
    title: string;
    description: string;
}

/**
 * What makes the St Leonards space worth travelling to. Each claim has been
 * confirmed as accurate for the premises; check any new one before adding it,
 * since they appear on every page that mentions the venue.
 */
export const FACILITY_HIGHLIGHTS: FacilityHighlight[] = [
    {
        title: 'Minutes from St Leonards train station and Crows Nest metro station',
        description:
            'On the Pacific Highway and a short walk from the station, so students can get themselves to and from class without a lift.',
    },
    {
        title: 'Quiet and distraction-free',
        description:
            'A dedicated study environment away from the noise of home, which for many students is the single biggest difference in-person makes.',
    },
    {
        title: 'Equipped for every subject',
        description:
            'Whiteboards for working through mathematics and science, and space to write and mark full-length essays for English and the humanities.',
    },
];

export interface FacilityImage {
    /** Path under /public, e.g. '/facilities/classroom.webp'. */
    src: string;
    /** Describe what is actually shown; this is read aloud by screen readers. */
    alt: string;
}

/**
 * Photographs of the St Leonards space. The gallery is hidden entirely while
 * this is empty, so the site never shows a broken image before the photos land.
 *
 * Drop files into `public/facilities/` and add an entry each, for example:
 *   { src: '/facilities/teaching-room.webp', alt: 'A teaching room set up for a small group class' },
 *
 * Landscape images work best; roughly 1200x800 or wider, saved as .webp.
 */
export const FACILITY_IMAGES: FacilityImage[] = [];

/**
 * Whether the homepage opens with the group classes, with one-on-one tutoring
 * underneath. This is the single switch for that layout: set it to false to
 * restore the one-on-one-led homepage. It has no automatic expiry and stays on
 * until the owner decides (review currently planned for around 26 December).
 */
export const HOMEPAGE_LEADS_WITH_GROUP = true;

/** Routes for the two learning formats, which are peers in the navigation. */
export const GROUP_CLASSES_PATH = '/group-classes';
export const ONE_ON_ONE_PATH = '/one-on-one';

/**
 * Session-storage key recording that a visitor dismissed the announcement bar.
 * Shared by the bar and by the pre-paint script in the root layout.
 */
export const ANNOUNCEMENT_DISMISSED_KEY = 'group_launch_announcement_dismissed';

/** Class set on <html> to hide the announcement bar and collapse its offset. */
export const ANNOUNCEMENT_HIDDEN_CLASS = 'announcement-dismissed';

/**
 * How far the given instant sits from UTC in Sydney, in milliseconds.
 *
 * Formatting an instant as Sydney local time and parsing the result as though
 * it were UTC shifts it by exactly the zone offset, so the difference between
 * the two is that offset.
 */
function sydneyOffsetMilliseconds(instant: number): number {
    // en-CA formats as YYYY-MM-DD, HH:MM:SS, which Date.parse reads when the
    // comma is swapped for the ISO date-time separator.
    const localised = new Intl.DateTimeFormat('en-CA', {
        timeZone: SYDNEY_TIME_ZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23',
    }).format(instant);

    return Date.parse(`${localised.replace(', ', 'T')}Z`) - instant;
}

/**
 * The instant at which a Sydney wall-clock date and time occurs.
 *
 * The offset cannot be hardcoded. Daylight saving begins at 2am on Sunday
 * 4 October 2026, so the Saturday in-person class is +10:00 and the Sunday
 * online class the very next morning is +11:00. Written as a fixed offset, one
 * of the two is always an hour wrong.
 *
 * Worked values, which a change here must keep true:
 *   10:00 on Sat 3 Oct 2026 is 2026-10-03T00:00:00Z
 *   10:00 on Sun 4 Oct 2026 is 2026-10-03T23:00:00Z
 * Twenty-four hours apart on the clock, twenty-three in elapsed time.
 */
export function sydneyInstant(isoDate: string, time24h: string): number {
    const asIfUtc = Date.parse(`${isoDate}T${time24h}:00Z`);
    // Correct by the offset at a first guess, then again in case that guess
    // landed on the far side of a daylight-saving transition.
    const firstGuess = asIfUtc - sydneyOffsetMilliseconds(asIfUtc);
    return asIfUtc - sydneyOffsetMilliseconds(firstGuess);
}

/**
 * Milliseconds until the first lesson, or 0 once it has started. Used to show a
 * countdown while the first lesson is still ahead. Classes run every week after
 * it, so surfaces that use this must fall back to ongoing enrolment copy rather
 * than to a date that has passed.
 */
export function millisecondsUntilFirstLesson(now: Date = new Date()): number {
    const firstLesson = sydneyInstant(FIRST_LESSON_DATE_ISO, FIRST_LESSON_START_TIME_24H);
    return Math.max(0, firstLesson - now.getTime());
}

/** Milliseconds until the first lesson, broken into display units. */
export function firstLessonCountdown(now: Date = new Date()) {
    const remaining = millisecondsUntilFirstLesson(now);
    const totalSeconds = Math.floor(remaining / 1000);
    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
        hasStarted: remaining === 0,
    };
}

/**
 * The first lesson relative to today in Sydney, as a short phrase: "Starts
 * today", "Starts tomorrow", "N days to go", or null once the day has passed.
 *
 * Counted in calendar days rather than hours: an hour-based countdown to the
 * 10am start reads "1 day to go" on the morning of the lesson itself.
 */
export function firstLessonDayPhrase(now: Date = new Date()): string | null {
    const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
    // en-CA formats as YYYY-MM-DD, which parses to the same UTC midnight basis
    // as FIRST_LESSON_DATE_ISO, so the difference is a whole number of days.
    const sydneyToday = new Intl.DateTimeFormat('en-CA', {
        timeZone: SYDNEY_TIME_ZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(now);
    const daysAway = Math.round(
        (Date.parse(FIRST_LESSON_DATE_ISO) - Date.parse(sydneyToday)) / MILLISECONDS_PER_DAY,
    );

    if (daysAway < 0) return null;
    if (daysAway === 0) return 'Starts today';
    if (daysAway === 1) return 'Starts tomorrow';
    return `${daysAway} days to go`;
}
