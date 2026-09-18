import Link from 'next/link';
import './WaysToLearn.css';
import ScrollReveal from './ScrollReveal';
import {
    GROUP_CLASSES_PATH,
    ONE_ON_ONE_PATH,
    GROUP_SCOPE_SUMMARY,
    FIRST_LESSON_DATE_LONG,
    LESSON_TEACHING_HOURS,
    TRIAL_OFFER,
} from '../data/groupClassLaunch';

interface LearningFormat {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    points: string[];
    icon: React.ReactNode;
    /** Corner badge naming what this format offers to start with. */
    flash?: string;
    /** Lifts a card out of the pair. Marks whichever format the site is leading with. */
    featured?: boolean;
    /** Where the card's link goes, and what it says. */
    link: { href: string; label: string };
}

const formats: LearningFormat[] = [
    {
        eyebrow: 'Fully Dedicated',
        title: 'One-on-One Tutoring',
        tagline: 'The whole session, built entirely around one student.',
        description:
            'Private online sessions where every minute is spent on your goals, at your pace. The most personalised way to learn, with a plan shaped around exactly where you are and where you want to be.',
        points: [
            'Live online, one to one with your tutor',
            'Completely tailored lesson plans',
            'Flexible scheduling to suit you',
        ],
        flash: 'Free trial lesson',
        link: { href: ONE_ON_ONE_PATH, label: 'See one-on-one tutoring' },
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        eyebrow: 'Year 12',
        title: 'Small-Group Classes',
        tagline: 'One course, one class, every week of the term.',
        description:
            `Weekly ${LESSON_TEACHING_HOURS}-hour classes working through the Year 12 course alongside school. Every course runs as its own class, so nobody sits through content meant for a different one.`,
        points: [
            `Weekly from ${FIRST_LESSON_DATE_LONG}`,
            'Maths Standard, Advanced and Extension 1, Physics and Chemistry',
            'In person on Saturdays or online on Sundays',
        ],
        flash: TRIAL_OFFER,
        featured: true,
        link: { href: GROUP_CLASSES_PATH, label: 'See small-group classes' },
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
];

const WaysToLearn = () => {
    return (
        <section className="ways section" id="ways-to-learn">
            <div className="container">
                <ScrollReveal width="100%">
                    <div className="ways__header">
                        <span className="section-eyebrow">Ways to Learn</span>
                        <h2 className="ways__title">
                            Two Ways to <span className="gold-text">Learn With Us</span>
                        </h2>
                        <p className="ways__subtitle">
                            One-on-one tutoring runs all year, across every year level and subject.
                            Small-group classes run weekly through the term, currently for{' '}
                            {GROUP_SCOPE_SUMMARY}. Ask us which suits your child best.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="ways__grid">
                    {formats.map((format, index) => (
                        <ScrollReveal key={format.title} width="100%" delay={index * 120}>
                            <div className={`ways__card ${format.featured ? 'ways__card--featured' : ''}`}>
                                {format.flash && (
                                    <span className="ways__card-flash">{format.flash}</span>
                                )}
                                <div className="ways__card-icon" aria-hidden="true">
                                    {format.icon}
                                </div>
                                <span className="ways__card-eyebrow">{format.eyebrow}</span>
                                <h3 className="ways__card-title">{format.title}</h3>
                                <p className="ways__card-tagline">{format.tagline}</p>
                                <p className="ways__card-description">{format.description}</p>
                                <ul className="ways__card-points">
                                    {format.points.map((point) => (
                                        <li key={point} className="ways__card-point">
                                            <span className="ways__card-check" aria-hidden="true">✓</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={format.link.href} className="ways__card-link">
                                    {format.link.label}
                                    <svg className="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaysToLearn;
