import './GroupClassesSummary.css';
import {
    COURSES,
    FIRST_LESSON_DATE_LONG,
    FOUNDING_OFFER_SHORT,
    GROUP_CLASSES_PATH,
    IN_PERSON_DAY,
    LESSON_TEACHING_HOURS,
    ONLINE_DAY,
    TRIAL_OFFER,
    VENUE_SUBURB,
    foundingPlacesOpen,
} from '../data/groupClassLaunch';
import { TrackedLink } from './NavLinks';

const CTA_LABEL = 'See Year 12 Group Classes';

/**
 * The launch in one block, for the top of the homepage.
 *
 * It deliberately summarises /group-classes rather than reusing FormatIntro,
 * which rendered that page's whole opening here and left the two pages sharing
 * several hundred words. Everything below is a headline the full page expands
 * on, and there is one way out of the block, so the homepage routes rather than
 * competes.
 */
const GroupClassesSummary = () => (
    <section className="group-summary" aria-labelledby="group-summary-title">
        <div className="container group-summary__inner">
            <span className="group-summary__eyebrow">Now enrolling · Year 12</span>

            {/* The offer is its own element, not a span inside the heading: as
                one h1 the two claims ran together into a single unreadable
                string for anything reading the page as text. */}
            <h1 className="group-summary__title" id="group-summary-title">
                Year 12 Small-Group Classes
            </h1>

            <p className="group-summary__accent">
                {TRIAL_OFFER} from {FIRST_LESSON_DATE_LONG}
            </p>

            <ul className="group-summary__courses" aria-label="Courses running">
                {COURSES.map((course) => (
                    <li key={course.id} className="group-summary__course">
                        {course.shortName}
                    </li>
                ))}
            </ul>

            <p className="group-summary__detail">
                One {LESSON_TEACHING_HOURS}-hour lesson a week, {IN_PERSON_DAY} in {VENUE_SUBURB}{' '}
                or {ONLINE_DAY} online. Every course runs as its own class.
            </p>

            {foundingPlacesOpen() && (
                <p className="group-summary__offer">Founding offer: {FOUNDING_OFFER_SHORT}</p>
            )}

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
    </section>
);

export default GroupClassesSummary;
