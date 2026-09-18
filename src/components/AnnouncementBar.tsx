"use client";
import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import './AnnouncementBar.css';
import {
    ANNOUNCEMENT_DISMISSED_KEY,
    ANNOUNCEMENT_HIDDEN_CLASS,
    FIRST_LESSON_DATE_SHORT,
    GROUP_CLASSES_PATH,
    IN_PERSON_DAY,
    ONLINE_DAY,
    TRIAL_OFFER,
    firstLessonDayPhrase,
} from '../data/groupClassLaunch';

/**
 * The day phrase only needs to be read once per page view, so there is
 * nothing to subscribe to; the unsubscribe callback is a no-op.
 */
const subscribeToNothing = () => () => { };

/** Shown once the first lesson has passed, and in the prerendered HTML. */
const ONGOING_DETAIL = `${IN_PERSON_DAY} in person or ${ONLINE_DAY} online`;

const AnnouncementBar = () => {
    // Rendered server-side so the bar is in the HTML for every first visit;
    // the pre-paint script handles the already-dismissed case without a flash.
    const [isDismissed, setIsDismissed] = useState(false);

    // The page is prerendered at build time, so a build-time phrase would be
    // stale and would not match what the browser computes on hydration. The
    // server snapshot is therefore null, which renders the ongoing wording.
    // That wording is true whatever the date, so nothing stale is ever baked
    // into the HTML; the client upgrades it to the countdown while the first
    // lesson is still ahead, and leaves it alone once the date has passed.
    const dayPhrase = useSyncExternalStore(
        subscribeToNothing,
        () => firstLessonDayPhrase(),
        () => null,
    );

    const handleDismiss = () => {
        setIsDismissed(true);
        document.documentElement.classList.add(ANNOUNCEMENT_HIDDEN_CLASS);
        try {
            sessionStorage.setItem(ANNOUNCEMENT_DISMISSED_KEY, 'true');
        } catch {
            // Private browsing can block storage; dismissal still holds for this page.
        }
    };

    if (isDismissed) return null;

    return (
        <aside className="announcement" aria-label="Year 12 small-group classes announcement">
            <Link href={GROUP_CLASSES_PATH} className="announcement__link">
                <span className="announcement__badge">New</span>

                <span className="announcement__headline">
                    Year 12 Small-Group Classes
                    {dayPhrase ? (
                        <>
                            <span className="announcement__headline-detail"> · maths, physics and chemistry</span>
                            {' '}start {FIRST_LESSON_DATE_SHORT}
                        </>
                    ) : (
                        <span className="announcement__headline-detail"> · {ONGOING_DETAIL}</span>
                    )}
                </span>

                <span className="announcement__offer">{TRIAL_OFFER}</span>

                <span className="announcement__countdown">
                    <span className="announcement__pulse" aria-hidden="true"></span>
                    {dayPhrase ?? 'Enrolling now'}
                </span>

                <span className="announcement__cta">
                    Reserve a spot
                    <svg className="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </Link>

            <button
                className="announcement__close"
                onClick={handleDismiss}
                aria-label="Dismiss announcement"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </aside>
    );
};

export default AnnouncementBar;
