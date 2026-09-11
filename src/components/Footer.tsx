import Link from 'next/link';
import type { ReactNode } from 'react';
import './Footer.css';
import { subjects } from '../data/subjectData';
import { GROUP_CLASSES_PATH, ONE_ON_ONE_PATH, VENUE_ADDRESS, VENUE_MAP_URL } from '../data/groupClassLaunch';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, PRIVACY_PATH } from '../lib/site';
import { EnquiryLink, TrackedLink } from './NavLinks';

interface FooterLink {
    href: string;
    label: string;
}

/** What we offer. The enquiry link is added after these. */
const FORMAT_LINKS: FooterLink[] = [
    { href: GROUP_CLASSES_PATH, label: 'Group Classes' },
    { href: ONE_ON_ONE_PATH, label: 'One-on-One Tutoring' },
    { href: '/pricing', label: 'Pricing' },
];

/** Homepage sections and the blog, which the header no longer lists. */
const ABOUT_LINKS: FooterLink[] = [
    { href: '/#about', label: 'About Us' },
    { href: '/#approach', label: 'Our Approach' },
    { href: '/#testimonials', label: 'Our Promise' },
    { href: '/resources', label: 'Resources' },
];

/** Built from the subject data, so names and new subjects match the header. */
const SUBJECT_LINKS: FooterLink[] = subjects.map((subject) => ({
    href: `/subjects/${subject.slug}`,
    label: subject.title,
}));

const ICON_PROPS = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
} as const;

const PinIcon = () => (
    <svg {...ICON_PROPS}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = () => (
    <svg {...ICON_PROPS}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg {...ICON_PROPS}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const ContactDetails = () => (
    <ul className="footer__contact-list">
        <li>
            <span className="footer__icon"><PinIcon /></span>
            <span className="footer__contact-text">
                <span className="footer__contact-label">In-person classes</span>
                <a href={VENUE_MAP_URL} target="_blank" rel="noopener noreferrer">{VENUE_ADDRESS}</a>
            </span>
        </li>
        <li>
            <span className="footer__icon"><PhoneIcon /></span>
            <a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>
        </li>
        <li>
            <span className="footer__icon"><MailIcon /></span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
    </ul>
);

const FooterBrand = () => (
    <div className="footer__brand">
        <Link href="/" className="footer__logo">
            <span className="footer__logo-text">Shoreline</span>
            <span className="footer__logo-accent">Tutoring</span>
        </Link>
        <p className="footer__tagline">EXCLUSIVE • INDIVIDUALISED • EFFECTIVE</p>
        <p className="footer__description">
            Online one-on-one tutoring for every year level and subject, plus small-group HSC
            classes in St Leonards and online.
        </p>
        <ContactDetails />
    </div>
);

const LinkList = ({ links }: { links: FooterLink[] }) => (
    <>
        {links.map((link) => (
            <li key={link.href}>
                <TrackedLink href={link.href} label={link.label} location="footer" prefetch={false} />
            </li>
        ))}
    </>
);

interface FooterColumnProps {
    heading: string;
    className?: string;
    children: ReactNode;
}

const FooterColumn = ({ heading, className = '', children }: FooterColumnProps) => (
    <div className={`footer__column ${className}`}>
        <h2 className="footer__heading">{heading}</h2>
        <ul className="footer__list">{children}</ul>
    </div>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <FooterBrand />
                    <nav className="footer__links" aria-label="Footer">
                        <FooterColumn heading="Ways to Learn">
                            <LinkList links={FORMAT_LINKS} />
                            <li>
                                <EnquiryLink location="footer" className="footer__enquiry-link" />
                            </li>
                        </FooterColumn>
                        <FooterColumn heading="Shoreline">
                            <LinkList links={ABOUT_LINKS} />
                        </FooterColumn>
                        <FooterColumn heading="Subjects" className="footer__column--subjects">
                            <LinkList links={SUBJECT_LINKS} />
                        </FooterColumn>
                    </nav>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Shoreline Tutoring. All rights reserved.
                    </p>
                    <TrackedLink
                        href={PRIVACY_PATH}
                        label="Privacy Policy"
                        location="footer"
                        className="footer__legal-link"
                        prefetch={false}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
