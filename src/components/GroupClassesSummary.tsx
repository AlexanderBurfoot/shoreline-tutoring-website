import './GroupClassesSummary.css';
import ScrollReveal from './ScrollReveal';
import {
    COURSES,
    FIRST_LESSON_DATE_LONG,
    FIRST_LESSON_DATE_SHORT,
    FIRST_PAID_LESSON_DATE_SHORT,
    FOUNDING_HOURLY_RATE,
    FOUNDING_PLACES,
    FOUNDING_TERM_PRICE,
    GROUP_CLASSES_PATH,
    IN_PERSON_DAY,
    LESSON_BREAK_MINUTES,
    LESSON_TEACHING_HOURS,
    ONLINE_DAY,
    ONLINE_FIRST_CLASS_SHORT,
    ONLINE_FIRST_PAID_LESSON_SHORT,
    ONLINE_TRIAL_LAST_LESSON_SHORT,
    SESSION_START_TIMES,
    TERM_LABEL,
    TERM_PRICE,
    TERM_SESSIONS,
    TRIAL_LAST_LESSON_SHORT,
    TRIAL_OFFER,
    VENUE_SUBURB,
    foundingPlacesOpen,
} from '../data/groupClassLaunch';
import { TrackedLink } from './NavLinks';

const CTA_LABEL = 'See Year 12 Group Classes';

/** The two cohorts, as a card each: same course, different day. */
const COHORTS = [
    {
        id: 'in-person',
        label: `In person · ${VENUE_SUBURB}`,
        free: `Free ${FIRST_LESSON_DATE_SHORT} and ${TRIAL_LAST_LESSON_SHORT}`,
        then: `Then weekly from ${FIRST_PAID_LESSON_DATE_SHORT}`,
    },
    {
        id: 'online',
        label: 'Online · live from home',
        free: `Free ${ONLINE_FIRST_CLASS_SHORT} and ${ONLINE_TRIAL_LAST_LESSON_SHORT}`,
        then: `Then weekly from ${ONLINE_FIRST_PAID_LESSON_SHORT}`,
    },
];

/** The scale of the term at a glance, rather than as a sentence to read. */
const STATS = [
    { value: String(COURSES.length), label: 'courses, one class each' },
    { value: String(TERM_SESSIONS), label: `lessons in ${TERM_LABEL}` },
    { value: `${LESSON_TEACHING_HOURS}hrs`, label: 'teaching every week' },
];

/**
 * The launch at the top of the homepage.
 *
 * It summarises /group-classes rather than reusing FormatIntro, which rendered
 * that page's whole opening here and left the two pages sharing several hundred
 * words. Everything here is a headline the full page expands on, and every path
 * out of the block goes to that page, so the homepage routes rather than
 * competes.
 */
const GroupClassesSummary = () => (
    <section className="group-summary" aria-labelledby="group-summary-title">
        <div className="container group-summary__inner">
            <ScrollReveal width="100%">
                <div className="group-summary__lead">
                    <span className="group-summary__eyebrow">Now enrolling · Year 12</span>

                    {/* The offer is its own element, not a span inside the
                        heading: as one h1 the two claims ran together into a
                        single unreadable string for anything reading the page
                        as text. */}
                    <h1 className="group-summary__title" id="group-summary-title">
                        Year 12 Small-Group Classes
                    </h1>

                    <p className="group-summary__accent">
                        {TRIAL_OFFER} from {FIRST_LESSON_DATE_LONG}
                    </p>

                    <p className="group-summary__detail">
                        One {LESSON_TEACHING_HOURS}-hour lesson a week working through the Year 12
                        course alongside school, with a {LESSON_BREAK_MINUTES}-minute break. Every
                        course runs as its own class, so nobody sits through content meant for a
                        different one.
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={120}>
                <div className="group-summary__panel">
                    <ul className="group-summary__courses" aria-label="Courses running">
                        {COURSES.map((course) => (
                            <li key={course.id} className="group-summary__course">
                                {course.shortName}
                            </li>
                        ))}
                    </ul>

                    <div className="group-summary__cohorts">
                        {COHORTS.map((cohort) => (
                            <div key={cohort.id} className="group-summary__cohort">
                                <span className="group-summary__cohort-label">{cohort.label}</span>
                                <strong className="group-summary__cohort-free">{cohort.free}</strong>
                                <span className="group-summary__cohort-then">{cohort.then}</span>
                            </div>
                        ))}
                    </div>

                    <p className="group-summary__times">
                        {IN_PERSON_DAY} in {VENUE_SUBURB} or {ONLINE_DAY} online,
                        starting {SESSION_START_TIMES}.
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={200}>
                <div className="group-summary__foot">
                    <dl className="group-summary__stats">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="group-summary__stat">
                                <dt className="group-summary__stat-value">{stat.value}</dt>
                                <dd className="group-summary__stat-label">{stat.label}</dd>
                            </div>
                        ))}
                    </dl>

                    <p className="group-summary__price">
                        {foundingPlacesOpen() ? (
                            <>
                                <strong>{FOUNDING_TERM_PRICE}</strong> for {TERM_LABEL} instead
                                of {TERM_PRICE} ({FOUNDING_HOURLY_RATE} an hour) for the
                                first {FOUNDING_PLACES} to sign up
                            </>
                        ) : (
                            <>
                                <strong>{TERM_PRICE}</strong> for {TERM_LABEL}, paid up front once
                                you decide to stay
                            </>
                        )}
                    </p>

                    <TrackedLink
                        href={GROUP_CLASSES_PATH}
                        label={CTA_LABEL}
                        location="group_summary"
                        className="btn btn-primary btn-lg group-summary__cta"
                    >
                        {CTA_LABEL}
                        <svg className="icon-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </TrackedLink>
                </div>
            </ScrollReveal>
        </div>
    </section>
);

export default GroupClassesSummary;
