import Link from 'next/link';
import './WaysToLearn.css';
import ScrollReveal from './ScrollReveal';

interface LearningFormat {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    points: string[];
    icon: React.ReactNode;
}

const formats: LearningFormat[] = [
    {
        eyebrow: 'Fully Dedicated',
        title: 'One-on-One Tutoring',
        tagline: 'The whole session, built entirely around one student.',
        description:
            'Private sessions where every minute is spent on your goals, at your pace. The most personalised way to learn, with a plan shaped around exactly where you are and where you want to be.',
        points: [
            'Completely tailored lesson plans',
            'Flexible scheduling to suit you',
            'Maximum one-on-one attention',
        ],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        eyebrow: 'Learn Together',
        title: 'Small-Group Classes',
        tagline: 'Learn alongside a small group of peers at a similar level.',
        description:
            'Structured termly classes that keep groups small, so students still get real attention while learning from shared discussion, healthy motivation, and a lower per-student rate.',
        points: [
            'Small classes grouped by level',
            'Lower cost per student',
            'Peer motivation and discussion',
        ],
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
                            Every student is different, so we offer two formats built on the same
                            syllabus expertise and support. Choose the one that fits, or ask us
                            which suits your child best.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="ways__grid">
                    {formats.map((format, index) => (
                        <ScrollReveal key={format.title} width="100%" delay={index * 120}>
                            <div className="ways__card">
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
                                <Link href="/pricing" className="ways__card-link">
                                    View pricing
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
