import type { ReactNode } from 'react';
import './Privacy.css';
import { VENUE_ADDRESS } from '../../data/groupClassLaunch';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, PRIVACY_PATH } from '../../lib/site';

/** Change whenever the substance of the policy changes. */
const LAST_UPDATED = '23 September 2026';

const OAIC_URL = 'https://www.oaic.gov.au';
const GOOGLE_AD_CENTER_URL = 'https://myadcenter.google.com';

export const metadata = {
    title: 'Privacy Policy',
    description:
        'How Shoreline Tutoring collects, uses and looks after the personal information you share through our website.',
    alternates: {
        canonical: PRIVACY_PATH,
    },
};

const EmailLink = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const ExternalLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

interface PolicySection {
    heading: string;
    body: ReactNode;
}

/**
 * Describes what the site actually does: the enquiry form fields, the services
 * that receive enquiries (see src/app/api/contact/route.ts), session storage
 * Google Tag Manager, Cloudflare Turnstile on the enquiry form, and the Google
 * Maps embed in the venue card
 * (src/components/VenueMap.tsx). Update this whenever any of those change.
 */
const SECTIONS: PolicySection[] = [
    {
        heading: 'Who we are',
        body: (
            <p>
                Shoreline Tutoring provides one-on-one tutoring at home and online, and small-group
                classes, with in-person classes at {VENUE_ADDRESS}. For any privacy question, email <EmailLink /> or
                call <a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>.
            </p>
        ),
    },
    {
        heading: 'What we collect',
        body: (
            <>
                <p>When you send an enquiry through our website, we collect:</p>
                <ul>
                    <li>your name and email address</li>
                    <li>your phone number, if you give it</li>
                    <li>how you would like to learn, and any message you write</li>
                    <li>the subjects you are interested in or, for group classes, the course and day you want</li>
                </ul>
                <p>
                    We also keep what you tell us when you call or email us. To stop spam, our server briefly
                    checks the internet (IP) address an enquiry comes from, but we do not save it with your enquiry.
                </p>
            </>
        ),
    },
    {
        heading: 'How we use it',
        body: (
            <p>
                We use your details to reply to your enquiry, arrange a free trial lesson or class, and talk
                with you about tutoring. We do not sell your personal information, and we will not add you to a
                marketing list without asking you first.
            </p>
        ),
    },
    {
        heading: 'Who helps us handle it',
        body: (
            <>
                <p>We use a small number of service providers to run the website and receive enquiries:</p>
                <ul>
                    <li>Microsoft 365, which delivers enquiries to our inbox</li>
                    <li>Upstash, which keeps a backup copy of each enquiry so none are lost</li>
                    <li>a team messaging service, such as Slack or Discord, which alerts us to new enquiries</li>
                    <li>our website hosting provider, whose server logs may hold an enquiry if it cannot be delivered</li>
                    <li>Google, which provides the measurement tools described below</li>
                    <li>Cloudflare, which checks the enquiry form for automated submissions and answers chat questions our own content cannot</li>
                </ul>
                <p>Some of these providers may store information outside Australia.</p>
            </>
        ),
    },
    {
        heading: 'Cookies and browser storage',
        body: (
            <>
                <p>
                    Our website uses your browser&apos;s session storage to remember small choices during a visit,
                    such as closing the announcement banner or the class offer, and which class you picked. It is
                    cleared when you close the browser tab.
                </p>
                <p>
                    We use Google Tag Manager to load Google&apos;s measurement and advertising tools, such as Google
                    Ads conversion tracking. These may set cookies to count visits and show which ads lead to
                    enquiries. Our website does not send them the details you type into the enquiry form. You can
                    block or delete cookies in your browser settings, and control how Google uses your information
                    for ads at <ExternalLink href={GOOGLE_AD_CENTER_URL}>myadcenter.google.com</ExternalLink>.
                </p>
                <p>
                    Our enquiry form uses Cloudflare Turnstile to check that a real person is sending
                    it rather than an automated program. For that check, Cloudflare processes technical
                    information about your browser and connection. It does not see what you type into
                    the form.
                </p>
                <p>
                    The map of our St Leonards rooms is provided by Google Maps. It loads only if you choose to show
                    it, and Google may then set its own cookies.
                </p>
                <p>
                    Our chat assistant answers most questions from the content of this website, without sending
                    anything anywhere. If it cannot answer a typed question, that question alone is sent to
                    Cloudflare Workers AI, which generates a reply. We remove email addresses, phone numbers and
                    street addresses before sending, and we ask you not to type names or personal details into the
                    chat. Cloudflare states that it does not use this content to train AI models. We do not keep a
                    record of what you type.
                </p>
            </>
        ),
    },
    {
        heading: 'Students under 18',
        body: (
            <p>
                Most enquiries come from parents or guardians. If you are under 18, please check with a parent or
                guardian before sending us your details.
            </p>
        ),
    },
    {
        heading: 'How long we keep it',
        body: (
            <p>
                We keep enquiry details for as long as we need them to respond to you and provide tutoring, and
                delete them when they are no longer needed.
            </p>
        ),
    },
    {
        heading: 'Seeing or correcting your information',
        body: (
            <p>
                You can ask to see, correct or delete the personal information we hold about you by emailing{' '}
                <EmailLink />.
            </p>
        ),
    },
    {
        heading: 'Complaints',
        body: (
            <p>
                If you are concerned about how we have handled your information, please contact us first so we
                can put it right. If you are not satisfied with our response, you can contact the Office of the
                Australian Information Commissioner at <ExternalLink href={OAIC_URL}>oaic.gov.au</ExternalLink>.
            </p>
        ),
    },
    {
        heading: 'Changes to this policy',
        body: <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>,
    },
];

export default function PrivacyRoute() {
    return (
        <div className="privacy-page">
            <div className="container">
                <article className="privacy-page__inner">
                    <h1 className="privacy-page__title">Privacy Policy</h1>
                    <p className="privacy-page__updated">Last updated {LAST_UPDATED}</p>
                    <p className="privacy-page__intro">
                        This policy explains what personal information we collect through this website, how we use
                        it, and the choices you have.
                    </p>
                    {SECTIONS.map((section) => (
                        <section key={section.heading} className="privacy-page__section">
                            <h2>{section.heading}</h2>
                            {section.body}
                        </section>
                    ))}
                </article>
            </div>
        </div>
    );
}
