"use client";
import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import './AnnouncementBar.css';
import {
    ANNOUNCEMENT_DISMISSED_KEY,
    ANNOUNCEMENT_HIDDEN_CLASS,
    GROUP_CLASSES_PATH,
    LAUNCH_DATE_SHORT,
    PROGRAM_LENGTH,
    launchDayPhrase,
} from '../data/groupClassLaunch';

/**
 * The launch phrase only needs to be read once per page view, so there is
 * nothing to subscribe to; the unsubscribe callback is a no-op.
 */
const subscribeToNothing = () => () => { };

const AnnouncementBar = () => {
    // Rendered server-side so the launch is in the HTML for every first visit;
    // the pre-paint script handles the already-dismissed case without a flash.
    const [isDismissed, setIsDismissed] = useState(false);

    // The page is prerendered at build time, so a build-time phrase would be
    // stale and would not match what the browser computes on hydration. The
    // server snapshot is therefore null and the phrase appears on the client;
    // the date and the offer carry the bar until it does.
    const dayPhrase = useSyncExternalStore(
        subscribeToNothing,
        () => launchDayPhrase(),
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
        <aside className="announcement" aria-label="Year 12 HSC maths program announcement">
            <Link href={GROUP_CLASSES_PATH} className="announcement__link">
                <span className="announcement__badge">New</span>

                <span className="announcement__headline">
                    Year 12 HSC Maths
                    <span className="announcement__headline-detail"> · {PROGRAM_LENGTH} program</span>
                    {' '}starts {LAUNCH_DATE_SHORT}
                </span>

                <span className="announcement__offer">Week 1 free</span>

                {dayPhrase && (
                    <span className="announcement__countdown">
                        <span className="announcement__pulse" aria-hidden="true"></span>
                        {dayPhrase}
                    </span>
                )}

                <span className="announcement__cta">
                    Reserve a spot
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
