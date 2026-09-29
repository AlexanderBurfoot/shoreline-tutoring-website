import type { ReactNode } from 'react';
import './TrustBadges.css';
import { FREE_TRIAL_LESSONS } from '../data/groupClassLaunch';
import { LESSONS_PER_BUNDLE } from '../data/pricingData';

export interface TrustBadge {
    icon: ReactNode;
    title: string;
    description: string;
}

const iconProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

/**
 * Claims that hold for both formats, for the homepage, where the visitor has
 * not chosen one yet. Anything true of only one format belongs in
 * ONE_ON_ONE_BADGES below: a strip that describes private lessons while the
 * page is still offering a choice of two reads as a promise the group classes
 * do not keep.
 */
export const SHARED_BADGES: TrustBadge[] = [
    {
        icon: (
            <svg {...iconProps}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
        title: 'NSW Syllabus Specialists',
        // Not "HSC": one-on-one runs from Year 1, so the narrower word left out
        // most of the year levels the badge sits above.
        description: 'Every lesson mapped to the current syllabus',
    },
    {
        icon: (
            <svg {...iconProps}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Free Trial',
        description: `One free lesson one-on-one, ${FREE_TRIAL_LESSONS} in a group class`,
    },
    {
        icon: (
            <svg {...iconProps}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'No Payment Up Front',
        description: 'Decide after the trial, either way',
    },
    {
        icon: (
            <svg {...iconProps}>
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
        title: 'Session Notes',
        description: 'What we covered and what is next, after every lesson',
    },
];

/**
 * True of private lessons only: a group class runs to a fixed Saturday or
 * Sunday timetable and is paid for by the term. These sit on /one-on-one, where
 * they are selling points rather than half-truths.
 */
export const ONE_ON_ONE_BADGES: TrustBadge[] = [
    {
        icon: (
            <svg {...iconProps}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: 'Flexible Scheduling',
        description: 'Sessions booked around your week',
    },
    {
        icon: (
            <svg {...iconProps}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: 'Between-Session Support',
        description: 'Message your tutor any time, reply within 24 hours',
    },
    {
        icon: (
            <svg {...iconProps}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            </svg>
        ),
        title: 'Flexible Pricing',
        description: `Pay by the hour, or prepay for ${LESSONS_PER_BUNDLE} hours and save`,
    },
];

const TrustBadges = ({ badges = SHARED_BADGES }: { badges?: TrustBadge[] }) => {
    return (
        <section className="trust-badges">
            <div className="container">
                <div className="trust-badges__grid">
                    {badges.map((badge) => (
                        <div key={badge.title} className="trust-badges__item">
                            <span className="trust-badges__icon">{badge.icon}</span>
                            <div className="trust-badges__content">
                                <span className="trust-badges__title">{badge.title}</span>
                                <span className="trust-badges__description">{badge.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
