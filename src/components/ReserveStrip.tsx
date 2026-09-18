import './ReserveStrip.css';
import {
    FIRST_LESSON_DATE_LONG,
    GROUP_CLASSES_PATH,
    TRIAL_OFFER,
} from '../data/groupClassLaunch';
import { TrackedLink } from './NavLinks';

/** The enquiry form at the end of the group classes page, pre-set to small-group classes. */
const GROUP_ENQUIRY_HREF = `${GROUP_CLASSES_PATH}#contact`;

const CTA_LABEL = 'Reserve a Free Seat';

/**
 * Closes the group half of a group-first homepage with a direct route to the
 * group enquiry form, before the page moves on to one-on-one tutoring. Clicks
 * are tracked, so they can be compared with the group enquiries that follow.
 */
const ReserveStrip = () => (
    <section className="reserve-strip" aria-label="Reserve a place in a small-group class">
        <div className="container reserve-strip__inner">
            <p className="reserve-strip__text">
                <strong className="reserve-strip__headline">Weekly classes from {FIRST_LESSON_DATE_LONG}</strong>
                <span className="reserve-strip__detail">
                    {TRIAL_OFFER} · Every course runs as its own class
                </span>
            </p>
            <TrackedLink
                href={GROUP_ENQUIRY_HREF}
                label={CTA_LABEL}
                location="reserve_strip"
                className="btn btn-primary btn-lg reserve-strip__cta"
            >
                {CTA_LABEL}
                <svg className="icon-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </TrackedLink>
        </div>
    </section>
);

export default ReserveStrip;
