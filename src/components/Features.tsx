"use client";
import './Features.css';
import ScrollReveal from './ScrollReveal';

const features = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Exclusive',
        subtitle: 'Premium Education',
        description: 'Limited enrollment ensures every student receives the elite attention they deserve. Our selective approach guarantees exceptional quality and dedicated support.',
        highlights: ['Strictly limited spots', 'Handpicked resources', 'Premium attention'],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        title: 'Individualized',
        subtitle: 'Tailored Learning',
        description: 'Every learning plan is crafted specifically for your unique needs, learning style, and goals. No two students are alike, and neither are our approaches.',
        highlights: ['Custom curricula', 'Adaptive teaching', 'Personal roadmap'],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
        title: 'Effective',
        subtitle: 'Proven Strategies',
        description: 'Our methodology is built on the latest syllabus requirements and exam techniques. We focus on high-yield strategies to help you achieve your personal best.',
        highlights: ['Syllabus mastery', 'Exam technique', 'Continuous feedback'],
    },
];

const Features = () => {
    return (
        <section className="features section" id="about">
            <div className="container">
                <ScrollReveal width="100%">
                    <span className="section-eyebrow">Why Us</span>
                    <h2 className="section-title">Why Choose Shoreline Tutoring?</h2>
                    <p className="section-subtitle">
                        Our three pillars of excellence ensure your success is not just possible; it is inevitable.
                    </p>
                </ScrollReveal>

                <div className="features__grid">
                    {features.map((feature, index) => (
                        <ScrollReveal key={feature.title} delay={index * 150}>
                            <div className="features__card features__card--visible">
                                <div className="features__icon-wrapper">
                                    <span className="features__icon">{feature.icon}</span>
                                </div>

                                <div className="features__content">
                                    <span className="features__subtitle">{feature.subtitle}</span>
                                    <h3 className="features__title">{feature.title}</h3>
                                    <p className="features__description">{feature.description}</p>

                                    <ul className="features__highlights">
                                        {feature.highlights.map((highlight) => (
                                            <li key={highlight} className="features__highlight">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M20 6L9 17L4 12"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
