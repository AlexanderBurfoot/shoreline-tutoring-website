import ScrollReveal from './ScrollReveal';
import './DropInSessions.css';

// TODO: Replace with the real meeting link (Zoom / Google Meet / YouTube Live).
const MEETING_URL = 'https://meet.google.com/shd-mwvq-jrp';

// TODO: Replace with the real recurring session time.
const SESSION_SCHEDULE = 'Every Saturday, 2:00 – 4:00 PM AEST';

const sessionHighlights = [
    {
        title: 'Completely free',
        description:
            'No sign-up, no payment, no commitment. Click the link and join the room when the session starts.',
    },
    {
        title: 'Watch real teaching',
        description:
            'See exactly how a session runs before you ever book a trial: the questions, the explanations, the way confusion gets unpicked in real time.',
    },
    {
        title: 'Drop in with anyone',
        description:
            'Open to as many students and parents as want to attend. Bring a friend, listen in, and ask questions in the chat if you like.',
    },
];

const DropInSessions = () => {
    return (
        <section className="drop-in section" id="free-sessions">
            <div className="container">
                <ScrollReveal width="100%">
                    <div className="drop-in__header">
                        <span className="section-eyebrow">Free Live Sessions</span>
                        <h2 className="drop-in__title">
                            Watch Me Teach, <span className="gold-text">Live &amp; Free</span>
                        </h2>
                        <p className="drop-in__subtitle">
                            Every week I run an open, free-to-join web session where anyone can
                            drop in and watch me teach. It is the simplest way to see the approach
                            in action before booking a trial: no cost, no commitment, just real
                            teaching.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal width="100%">
                    <div className="drop-in__schedule-card">
                        <div className="drop-in__schedule-icon" aria-hidden="true">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div className="drop-in__schedule-content">
                            <span className="drop-in__schedule-label">When</span>
                            <span className="drop-in__schedule-time">{SESSION_SCHEDULE}</span>
                        </div>
                        <a
                            href={MEETING_URL}
                            className="btn btn-primary drop-in__join-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join the Live Session
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </ScrollReveal>

                <div className="drop-in__highlights">
                    {sessionHighlights.map((highlight, index) => (
                        <ScrollReveal key={highlight.title} width="100%" delay={index * 120}>
                            <div className="drop-in__highlight">
                                <span className="drop-in__highlight-check" aria-hidden="true">✓</span>
                                <h3 className="drop-in__highlight-title">{highlight.title}</h3>
                                <p className="drop-in__highlight-description">{highlight.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DropInSessions;
