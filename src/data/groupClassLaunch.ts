/**
 * Single source of truth for the small-group class launch.
 *
 * Every surface that advertises the launch (the announcement bar, the promo
 * popup, the hero, the /group-classes page, the pricing tables) reads from
 * here, so the date, time and offer only ever need changing in one place.
 */

/** Launch day in ISO form, used for structured data and countdown maths. */
export const LAUNCH_DATE_ISO = '2026-09-19';

/** First online session in ISO form. Keep one day after LAUNCH_DATE_ISO. */
export const ONLINE_LAUNCH_DATE_ISO = '2026-09-20';

/** Human-readable launch day, used in body copy. */
export const LAUNCH_DATE_LONG = 'Saturday 19 September';

/** Compact launch day, used where space is tight (announcement bar, badges). */
export const LAUNCH_DATE_SHORT = 'Sat 19 Sept';

/**
 * Group classes run on different days by format: in person at St Leonards on
 * Saturdays, and online the following day on Sundays. One-on-one tutoring is
 * scheduled around the family and has no fixed day.
 */
export const IN_PERSON_DAY = 'Saturdays';
export const IN_PERSON_FIRST_CLASS = 'Saturday 19 September';

/** Keep one day after the in-person launch above. */
export const ONLINE_DAY = 'Sundays';
export const ONLINE_FIRST_CLASS = 'Sunday 20 September';

/** Hours of teaching in each weekly lesson, not counting the break. */
export const LESSON_TEACHING_HOURS = 4;

/** Break in the middle of each lesson, in minutes. */
export const LESSON_BREAK_MINUTES = 15;

export interface SessionSlot {
    name: string;
    time: string;
}

/**
 * The two lessons run each day, identical on Saturdays in person and Sundays
 * online: two 2-hour blocks either side of the break, with a 15-minute
 * changeover between the sessions.
 */
export const SESSION_SLOTS: SessionSlot[] = [
    { name: 'Morning session', time: '9:00am – 1:15pm' },
    { name: 'Afternoon session', time: '1:30pm – 5:45pm' },
];

/** Both full session times on one line: "9:00am – 1:15pm or 1:30pm – 5:45pm". */
export const SESSION_TIMES_SUMMARY = SESSION_SLOTS.map((slot) => slot.time).join(' or ');

/** Just the start times: "9:00am or 1:30pm". */
export const SESSION_START_TIMES = SESSION_SLOTS.map((slot) => slot.time.split(' – ')[0]).join(' or ');

/**
 * Clock time of the first morning session, in 24-hour form. The countdown
 * targets this, so keep it in step with the morning slot above.
 */
export const LAUNCH_START_TIME_24H = '09:00';

/**
 * Which session a student joins depends on their course: Standard, Advanced
 * and Extension 1 each run as their own class, so the slot is confirmed on
 * enrolment rather than published per course.
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

/** Length of the HSC program as it reads inside a sentence: "a 4-week program". */
export const PROGRAM_LENGTH = '4-week';

/** The same length, title-cased for headings. */
export const PROGRAM_LENGTH_TITLE = '4-Week';

/** Weekly sessions in the program: four Saturdays in person, or four Sundays online. */
export const PROGRAM_SESSIONS = 4;

/** Session count as a word, for prose. Keep in step with PROGRAM_SESSIONS. */
export const PROGRAM_SESSIONS_WORD = 'four';

/**
 * What small-group classes currently cover, as one clause that reads inside a
 * sentence. Group classes run as focused programs rather than a standing
 * timetable, so this narrows or widens as the range grows. Update it here and
 * every section that scopes the offer follows.
 */
export const GROUP_SCOPE_SUMMARY = 'a 4-week HSC maths intensive for Year 12';

/**
 * Price of the program after the free first week, in whole dollars. The total
 * and the hourly rate shown on the site are both derived from this and the
 * lesson settings above, so they can never disagree.
 */
export const PROGRAM_PRICE_DOLLARS = 900;

/** Lessons paid for: every lesson except the free first week. */
export const PROGRAM_PAID_LESSONS = PROGRAM_SESSIONS - 1;

/** Teaching hours the price covers. */
export const PROGRAM_PAID_HOURS = PROGRAM_PAID_LESSONS * LESSON_TEACHING_HOURS;

/** The price for the rest of the program, e.g. "$900". */
export const PROGRAM_PRICE = `$${PROGRAM_PRICE_DOLLARS}`;

/** The price spread across the paid teaching hours, e.g. "$75". */
export const PROGRAM_HOURLY_RATE = `$${Math.round(PROGRAM_PRICE_DOLLARS / PROGRAM_PAID_HOURS)}`;

export interface MathsCourse {
    id: 'standard' | 'advanced' | 'extension-1';
    /** Full HSC course name. */
    name: string;
    /** Short form for chips and badges. */
    shortName: string;
    /** What the program covers for this course. */
    covers: string;
}

/**
 * The three Year 12 Mathematics courses the program runs for. Each is a
 * separate class, so each needs its own session time once confirmed.
 */
export const MATHS_COURSES: MathsCourse[] = [
    {
        id: 'standard',
        name: 'Mathematics Standard',
        shortName: 'Standard',
        covers:
            'Financial mathematics and annuities, bivariate data and the normal distribution, non-right-angled trigonometry, rates and ratios, and network diagrams including critical path analysis.',
    },
    {
        id: 'advanced',
        name: 'Mathematics Advanced',
        shortName: 'Advanced',
        covers:
            'Graphing techniques and functions, trigonometric functions, differential and integral calculus, series and annuities, and statistical analysis including random variables and the normal distribution.',
    },
    {
        id: 'extension-1',
        name: 'Mathematics Extension 1',
        shortName: 'Extension 1',
        covers:
            'Proof by mathematical induction, vectors, trigonometric identities, further integration and differential equations, and the binomial distribution.',
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

/** The two group-class days, in the compact form used by the promo popup. */
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
 * Optional photograph behind the launch popup's offer panel, e.g.
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
    course: MathsCourse['id'] | null;
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

/** Milliseconds until the first class, broken into display units. */
export function launchCountdown(now: Date = new Date()) {
    const remaining = millisecondsUntilLaunch(now);
    const totalSeconds = Math.floor(remaining / 1000);
    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
        hasStarted: remaining === 0,
    };
}

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
        title: 'Minutes from St Leonards station',
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

/** Upper bound on class size, the core promise of the small-group format. */
export const MAX_CLASS_SIZE = 6;

/** The launch offer, phrased consistently everywhere it appears. */
export const LAUNCH_OFFER = 'First session free';

/**
 * Whether the homepage opens with the group program, with one-on-one tutoring
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
 * Milliseconds until the first session, or 0 once it has started. Used to show
 * a countdown while the launch is still ahead and to hide time-sensitive copy
 * afterwards without needing a deploy.
 */
export function millisecondsUntilLaunch(now: Date = new Date()): number {
    // +10:00 is AEST; daylight saving does not begin until October.
    const launch = new Date(`${LAUNCH_DATE_ISO}T${LAUNCH_START_TIME_24H}:00+10:00`);
    return Math.max(0, launch.getTime() - now.getTime());
}

/**
 * The launch day relative to today in Sydney, as a short phrase for the
 * announcement bar: "Starts today", "Starts tomorrow", "N days to go", or null
 * once the day has passed.
 *
 * Counted in calendar days rather than hours: an hour-based countdown to the
 * 9am start reads "1 day to go" on the morning of the launch itself.
 */
export function launchDayPhrase(now: Date = new Date()): string | null {
    const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
    // en-CA formats as YYYY-MM-DD, which parses to the same UTC midnight basis
    // as LAUNCH_DATE_ISO, so the difference is a whole number of days.
    const sydneyToday = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Australia/Sydney',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(now);
    const daysAway = Math.round((Date.parse(LAUNCH_DATE_ISO) - Date.parse(sydneyToday)) / MILLISECONDS_PER_DAY);

    if (daysAway < 0) return null;
    if (daysAway === 0) return 'Starts today';
    if (daysAway === 1) return 'Starts tomorrow';
    return `${daysAway} days to go`;
}

