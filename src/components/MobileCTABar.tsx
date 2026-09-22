"use client";
import { useEffect, useState, type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import './MobileCTABar.css';
import { trackEvent } from '../lib/analytics';
import { CONTACT_PHONE_E164 } from '../lib/site';

/** Roughly the height of a hero, so the bar appears once past the opening. */
const SHOW_AFTER_PX = 500;

/** The enquiry form's anchor, which every page with a form uses. */
const CONTACT_ID = 'contact';

/** Already converted, so the bar would only be in the way. */
const HIDDEN_PATHS = ['/thank-you'];

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

/**
 * A booking bar pinned to the bottom of the screen on phones, where the
 * header's button is hidden behind the menu. It stays out of the way until the
 * visitor is past the opening, and steps aside once the enquiry form itself is
 * on screen.
 */
const MobileCTABar = () => {
    const pathname = usePathname();
    const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
    const [isFormOnScreen, setIsFormOnScreen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolledPastHero(window.scrollY > SHOW_AFTER_PX);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Re-observed per page: the form is not on every route, and the element is
    // replaced on navigation.
    useEffect(() => {
        const form = document.getElementById(CONTACT_ID);
        if (!form) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsFormOnScreen(entry.isIntersecting),
            { rootMargin: '0px 0px -25% 0px' },
        );
        observer.observe(form);
        // Cleared here rather than in the body above, so leaving a page that
        // has a form for one that does not resets the flag.
        return () => {
            observer.disconnect();
            setIsFormOnScreen(false);
        };
    }, [pathname]);

    const isVisible = isScrolledPastHero && !isFormOnScreen && !HIDDEN_PATHS.includes(pathname);

    /**
     * The link points at the homepage form, which is right for pages without
     * one and works with no JavaScript. Where the page has its own form, the
     * click is handled here instead so the visitor stays put.
     */
    const goToForm = (event: MouseEvent<HTMLAnchorElement>) => {
        trackEvent('mobile_bar_book');
        const form = document.getElementById(CONTACT_ID);
        if (!form) return;
        event.preventDefault();
        form.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`mobile-cta ${isVisible ? 'mobile-cta--visible' : ''}`} aria-hidden={!isVisible}>
            <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="mobile-cta__call"
                aria-label="Call Shoreline Tutoring"
                tabIndex={isVisible ? undefined : -1}
                onClick={() => trackEvent('mobile_bar_call')}
            >
                <PhoneIcon />
            </a>
            <a
                href={`/#${CONTACT_ID}`}
                className="btn btn-primary mobile-cta__book"
                tabIndex={isVisible ? undefined : -1}
                onClick={goToForm}
            >
                Book a Free Lesson
            </a>
        </div>
    );
};

export default MobileCTABar;
