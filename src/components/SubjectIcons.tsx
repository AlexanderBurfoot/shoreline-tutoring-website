import React from 'react';

/**
 * SVG icon map keyed by subject slug, replaces emoji icons across the site.
 *
 * Deliberately not a client module: it holds plain markup, and a "use client"
 * module exported to a server component arrives as a reference, not this map,
 * which silently left server-rendered pages on the emoji fallback.
 *
 * Every shape has pathLength={1}, so each stroke measures as one unit however
 * long it is drawn. That lets the subject cards animate all the strokes of an
 * icon over the same time (see Services.css); it changes nothing at rest.
 */
const subjectIcons: Record<string, React.ReactNode> = {
    mathematics: (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line pathLength={1} x1="4" y1="9" x2="20" y2="9" />
            <line pathLength={1} x1="4" y1="15" x2="20" y2="15" />
            <line pathLength={1} x1="10" y1="3" x2="8" y2="21" />
            <line pathLength={1} x1="16" y1="3" x2="14" y2="21" />
        </svg>
    ),
    english: (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path pathLength={1} d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path pathLength={1} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    ),
    physics: (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle pathLength={1} cx="12" cy="12" r="3" />
            <ellipse pathLength={1} cx="12" cy="12" rx="10" ry="4" />
            <ellipse pathLength={1} cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse pathLength={1} cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
    ),
    chemistry: (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path pathLength={1} d="M9 3h6v6l5 8a2 2 0 0 1-1.7 3H5.7A2 2 0 0 1 4 17l5-8V3z" />
            <line pathLength={1} x1="9" y1="3" x2="15" y2="3" />
            <path pathLength={1} d="M10 14h4" />
        </svg>
    ),
    commerce: (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path pathLength={1} d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line pathLength={1} x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
    ),
    economics: (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline pathLength={1} points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline pathLength={1} points="17 6 23 6 23 12" />
        </svg>
    ),
    'business-studies': (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect pathLength={1} x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path pathLength={1} d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    ),
    'selective-high-school': (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path pathLength={1} d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path pathLength={1} d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
        </svg>
    ),
    'oc-prep': (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle pathLength={1} cx="12" cy="12" r="10" />
            <path pathLength={1} d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line pathLength={1} x1="9" y1="9" x2="9.01" y2="9" />
            <line pathLength={1} x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
    ),
    naplan: (
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path pathLength={1} d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect pathLength={1} x="9" y="3" width="6" height="4" rx="1" />
            <path pathLength={1} d="M9 12l2 2 4-4" />
            <line pathLength={1} x1="9" y1="17" x2="15" y2="17" />
        </svg>
    ),
};

export default subjectIcons;
