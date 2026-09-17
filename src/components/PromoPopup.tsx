"use client";
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePathname, useRouter } from 'next/navigation';
import './PromoPopup.css';
import {
    CLASS_PREFERENCE_KEY,
    type ClassPreference,
    GROUP_CLASSES_PATH,
    GROUP_CLASS_DAYS,
    COURSES,
    type Course,
    LESSON_TEACHING_HOURS,
    PROMO_BACKGROUND_IMAGE,
    SESSION_HOURLY_RATE,
    SESSION_PRICE,
    TRIAL_OFFER,
    VENUE_SUBURB,
    firstLessonCountdown,
    type GroupClassDay,
} from '../data/groupClassLaunch';

import { trackEvent } from '../lib/analytics';

const logo = '/ShorelineLogo.png';

const DISMISSED_KEY = 'promo_dismissed';
const CLOSE_ANIMATION_MS = 300;
const COUNTDOWN_TICK_MS = 1000;

/** Shown once the visitor has read this far down the page. */
const SCROLL_TRIGGER_RATIO = 0.4;

/** Backstop for visitors who neither scroll nor move towards leaving. */
const DWELL_FALLBACK_MS = 25000;

/**
 * Routes where the popup would interrupt rather than help: the page it
 * advertises, and the confirmation page shown after an enquiry is sent.
 */
const SUPPRESSED_ROUTES = [GROUP_CLASSES_PATH, '/thank-you'];

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** Two digits, so the countdown does not jitter as numbers change width. */
const pad = (value: number) => String(value).padStart(2, '0');

const SELLING_POINTS = [
    'Works through the Year 12 course alongside school',
    'Every course runs as its own class',
    `In person at ${VENUE_SUBURB} or live online`,
    'No payment up front, no obligation to continue',
];

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [selectedDay, setSelectedDay] = useState<GroupClassDay['id'] | null>(null);
    const [selectedCourse, setSelectedCourse] = useState<Course['id'] | null>(null);
    // Safe to compute directly: the popup renders nothing until a trigger
    // fires on the client, so there is no server output to mismatch.
    const [countdown, setCountdown] = useState(() => firstLessonCountdown());
    const dialogRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    const isSuppressed = SUPPRESSED_ROUTES.includes(pathname);

    /**
     * The single source of truth for whether the dialog is on screen. The
     * popup lives in the root layout, so a client-side navigation onto a
     * suppressed route has to both hide it and release the scroll lock.
     */
    const isOpen = isVisible && !isSuppressed;

    // Shown on whichever comes first: intent to leave, reading far enough down
    // the page, or simply staying a while.
    useEffect(() => {
        if (isSuppressed) return;
        if (sessionStorage.getItem(DISMISSED_KEY)) return;

        let shown = false;

        const cleanup = () => {
            clearTimeout(timer);
            document.removeEventListener('mouseout', onMouseOut);
            window.removeEventListener('scroll', onScroll);
        };

        const show = (trigger: string) => {
            if (shown) return;
            shown = true;
            cleanup();
            trackEvent('promo_shown', { trigger });
            setIsVisible(true);
        };

        const onMouseOut = (event: MouseEvent) => {
            if (!event.relatedTarget && event.clientY <= 0) show('exit_intent');
        };

        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollable > 0 && window.scrollY / scrollable >= SCROLL_TRIGGER_RATIO) {
                show('scroll_depth');
            }
        };

        const timer = setTimeout(() => show('dwell_time'), DWELL_FALLBACK_MS);
        document.addEventListener('mouseout', onMouseOut);
        window.addEventListener('scroll', onScroll, { passive: true });

        return cleanup;
    }, [isSuppressed]);

    useEffect(() => {
        if (!isOpen) return;
        const tick = setInterval(() => setCountdown(firstLessonCountdown()), COUNTDOWN_TICK_MS);
        return () => clearInterval(tick);
    }, [isOpen]);

    const close = (reason: string) => {
        trackEvent('promo_dismissed', { reason });
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
            sessionStorage.setItem(DISMISSED_KEY, 'true');
        }, CLOSE_ANIMATION_MS);
    };

    // Full-screen dialog behaviour: lock the page behind it, keep Tab inside
    // it, close on Escape, and hand focus back where it came from.
    useEffect(() => {
        if (!isOpen) return;

        const dialog = dialogRef.current;
        const previouslyFocused = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialog?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close('escape_key');
                return;
            }
            if (event.key !== 'Tab' || !dialog) return;

            const focusable = Array.from(
                dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
            ).filter(element => !element.hasAttribute('disabled'));
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKeyDown);
            previouslyFocused?.focus?.();
        };
    }, [isOpen]);

    const handleDaySelect = (day: GroupClassDay) => {
        const next = selectedDay === day.id ? null : day.id;
        setSelectedDay(next);
        if (next) trackEvent('promo_day_selected', { day: day.id });
    };

    const handleCourseSelect = (course: Course) => {
        const next = selectedCourse === course.id ? null : course.id;
        setSelectedCourse(next);
        if (next) trackEvent('promo_course_selected', { course: course.id });
    };

    /**
     * Carries the chosen course and day to the group page's enquiry form, which
     * reads this key when it mounts and pre-selects them. No event is fired: a
     * form already on the current page would consume the choice before the
     * navigation below replaces it.
     */
    const handleClaim = () => {
        // Close before navigating: the dialog covers the page and locks body
        // scroll, so leaving it mounted would hide the form it routes to.
        setIsVisible(false);
        sessionStorage.setItem(DISMISSED_KEY, 'true');

        const preference: ClassPreference = { course: selectedCourse, day: selectedDay };

        trackEvent('promo_claimed', {
            day: selectedDay ?? 'unspecified',
            course: selectedCourse ?? 'unspecified',
        });

        try {
            if (selectedCourse || selectedDay) {
                sessionStorage.setItem(CLASS_PREFERENCE_KEY, JSON.stringify(preference));
            } else {
                sessionStorage.removeItem(CLASS_PREFERENCE_KEY);
            }
        } catch {
            // Private browsing can block storage; the enquiry still works.
        }
        // The group page ends in its own enquiry form, pre-set to small-group classes.
        router.push(`${GROUP_CLASSES_PATH}#contact`);
    };

    const handleDetails = () => {
        setIsVisible(false);
        sessionStorage.setItem(DISMISSED_KEY, 'true');
        trackEvent('promo_details', {});
        router.push(GROUP_CLASSES_PATH);
    };

    if (!isOpen) return null;

    const countdownUnits = [
        { value: countdown.days, label: countdown.days === 1 ? 'Day' : 'Days' },
        { value: countdown.hours, label: 'Hrs' },
        { value: countdown.minutes, label: 'Min' },
        { value: countdown.seconds, label: 'Sec' },
    ];

    const chosenCourse = COURSES.find(option => option.id === selectedCourse) ?? null;

    return createPortal(
        <>
            <div
                className={`promo-overlay ${isClosing ? 'promo-overlay--closing' : ''}`}
                onClick={() => close('overlay_click')}
            />
            <div
                ref={dialogRef}
                tabIndex={-1}
                className={`promo-popup ${isClosing ? 'promo-popup--closing' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="promo-popup-title"
            >
                <button className="promo-popup__close" onClick={() => close('close_button')} aria-label="Close">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Left: the offer */}
                <div
                    className={`promo-panel promo-panel--brand ${PROMO_BACKGROUND_IMAGE ? 'promo-panel--photo' : ''}`}
                    style={PROMO_BACKGROUND_IMAGE ? { backgroundImage: `url(${PROMO_BACKGROUND_IMAGE})` } : undefined}
                >
                    <div className="promo-panel__inner">
                        <img src={logo} alt="Shoreline Tutoring" className="promo-popup__logo" width={1966} height={1289} />

                        <h2 className="promo-popup__title" id="promo-popup-title">
                            Year 12 Small-Group
                            <span className="promo-popup__title-accent">Weekly Classes</span>
                        </h2>

                        <div className="promo-popup__discount">
                            <span className="promo-popup__percent">FREE</span>
                            <span className="promo-popup__off">first&nbsp;lesson</span>
                        </div>

                        {!countdown.hasStarted && (
                            <div className="promo-popup__countdown">
                                <span className="promo-popup__countdown-label">First lesson starts in</span>
                                <div className="promo-popup__countdown-units">
                                    {countdownUnits.map(unit => (
                                        <div key={unit.label} className="promo-popup__unit">
                                            <span className="promo-popup__unit-value">{pad(unit.value)}</span>
                                            <span className="promo-popup__unit-label">{unit.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <ul className="promo-popup__points">
                            {SELLING_POINTS.map(point => (
                                <li key={point} className="promo-popup__point">
                                    <span className="promo-popup__point-check" aria-hidden="true">✓</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right: the choices */}
                <div className="promo-panel promo-panel--choose">
                    <div className="promo-step">
                        <h3 className="promo-step__title">
                            <span className="promo-step__number">1</span>
                            Pick your day
                        </h3>
                        <div className="promo-popup__days" role="group" aria-label="Choose a class day">
                            {GROUP_CLASS_DAYS.map(day => {
                                const isActive = selectedDay === day.id;
                                return (
                                    <button
                                        key={day.id}
                                        type="button"
                                        className={`promo-popup__day ${isActive ? 'promo-popup__day--active' : ''}`}
                                        onClick={() => handleDaySelect(day)}
                                        aria-pressed={isActive}
                                    >
                                        <span className="promo-popup__day-tick" aria-hidden="true">
                                            {isActive ? '✓' : ''}
                                        </span>
                                        <span className="promo-popup__day-label">{day.label}</span>
                                        <strong className="promo-popup__day-when">{day.schedule}</strong>
                                        <span className="promo-popup__day-start">From {day.firstClass}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="promo-step">
                        <h3 className="promo-step__title">
                            <span className="promo-step__number">2</span>
                            Pick your course
                        </h3>
                        <div className="promo-popup__years" role="group" aria-label="Choose your Year 12 course">
                            {COURSES.map(course => {
                                const isActive = selectedCourse === course.id;
                                return (
                                    <button
                                        key={course.id}
                                        type="button"
                                        className={`promo-popup__year ${isActive ? 'promo-popup__year--active' : ''}`}
                                        onClick={() => handleCourseSelect(course)}
                                        aria-pressed={isActive}
                                        aria-label={`Year 12 ${course.name}`}
                                    >
                                        {course.shortName}
                                    </button>
                                );
                            })}
                        </div>

                        <p className={`promo-popup__rate ${chosenCourse ? 'promo-popup__rate--shown' : ''}`} aria-live="polite">
                            {chosenCourse
                                ? <>Year 12 {chosenCourse.name}: <strong>{SESSION_PRICE}</strong> per {LESSON_TEACHING_HOURS}-hour lesson ({SESSION_HOURLY_RATE} an hour), first lesson free.</>
                                : `One ${LESSON_TEACHING_HOURS}-hour lesson a week, working through the Year 12 course alongside school. ${TRIAL_OFFER}.`}
                        </p>
                    </div>

                    <div className="promo-popup__actions">
                        <button className="btn btn-primary promo-popup__cta" onClick={handleClaim}>
                            {selectedDay || selectedCourse ? 'Save My Seat' : 'Reserve a Free Seat'}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button className="promo-popup__secondary" onClick={handleDetails}>
                            Or see full class details
                        </button>

                        <p className="promo-popup__fine-print">
                            Every course runs as its own class, so you are never sitting through
                            content meant for a different one.
                        </p>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default PromoPopup;
