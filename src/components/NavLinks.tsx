"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { ComponentProps, MouseEvent, ReactNode } from 'react';
import { GROUP_CLASSES_PATH } from '../data/groupClassLaunch';
import { trackEvent } from '../lib/analytics';

/** Where a navigation link sits, reported with each click. */
export type NavLocation = 'header' | 'mobile_menu' | 'footer' | 'reserve_strip';

/** Anchor of the enquiry form on the pages that have one. */
const ENQUIRY_SECTION_ID = 'contact';

const DEFAULT_ENQUIRY_LABEL = 'Book a Free Session';

/** The group page's own calls to action already use this wording. */
const GROUP_ENQUIRY_LABEL = 'Reserve a Free Seat';

/**
 * Records a navigation click in the data layer, so header and footer use can
 * be measured before deciding what either should list. No personal data.
 */
function trackNavigation(location: NavLocation, label: string, destination: string) {
    trackEvent('navigation_click', {
        nav_location: location,
        nav_label: label,
        nav_destination: destination,
    });
}

type TrackedLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'children'> & {
    href: string;
    label: string;
    location: NavLocation;
    /** Custom content; the label is shown when omitted. */
    children?: ReactNode;
};

/** A client-side link that reports the click to analytics. */
export const TrackedLink = ({ href, label, location, onClick, children, ...linkProps }: TrackedLinkProps) => (
    <Link
        href={href}
        onClick={(event) => {
            trackNavigation(location, label, href);
            onClick?.(event);
        }}
        {...linkProps}
    >
        {children ?? label}
    </Link>
);

interface EnquiryLinkProps {
    location: NavLocation;
    className?: string;
    /** Runs once the click is handled, for example to close the mobile menu. */
    onNavigate?: () => void;
}

/**
 * The link to the enquiry form. It scrolls to the form when the current page
 * has one (the homepage and both format pages do) and otherwise opens the
 * homepage form. On the group page it uses that page's wording.
 */
export const EnquiryLink = ({ location, className, onNavigate }: EnquiryLinkProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const label = pathname === GROUP_CLASSES_PATH ? GROUP_ENQUIRY_LABEL : DEFAULT_ENQUIRY_LABEL;

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        trackNavigation(location, label, `#${ENQUIRY_SECTION_ID}`);
        onNavigate?.();

        const form = document.getElementById(ENQUIRY_SECTION_ID);
        if (form) {
            window.history.pushState(null, '', `${pathname}#${ENQUIRY_SECTION_ID}`);
            form.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/#${ENQUIRY_SECTION_ID}`);
        }
    };

    return (
        <a href={`/#${ENQUIRY_SECTION_ID}`} className={className} onClick={handleClick}>
            {label}
        </a>
    );
};
