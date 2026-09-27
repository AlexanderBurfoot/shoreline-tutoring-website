import './Features.css';
import ScrollReveal from './ScrollReveal';

const features = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Attention that is never spread thin',
        subtitle: 'Exclusive',
        description: 'One-on-one means one tutor and one student for the whole lesson, at your home or online. Group classes stay small and run one course per class, so nobody sits through content meant for someone else.',
        highlights: ['One tutor, one student, one-on-one', 'One course per group class', 'A tutor who knows your child\'s work'],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        title: 'A plan built from where they are',
        subtitle: 'Individualised',
        description: 'We start by finding where marks are actually being lost, then build the plan from there. As your child improves the plan changes with them, rather than following a script written for everyone.',
        highlights: ['Starts with a look at their real work', 'Updated as they improve', 'Homework aimed at their own gaps'],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
        title: 'Taught the way exams are marked',
        subtitle: 'Effective',
        description: 'Every lesson follows the NSW syllabus and practises what markers reward: answering to the question\'s verb, structuring a full-mark response, and past papers under time. Between lessons, questions get an answer within 24 hours.',
        highlights: ['Mapped to the NSW syllabus', 'Past papers and worked solutions', 'Session notes after every lesson'],
    },
];

const Features = () => {
    return (
        <section className="features section" id="about">
            <div className="container">
                <ScrollReveal width="100%">
                    <span className="section-eyebrow">Why Us</span>
                    <h2 className="section-title">Why Choose <span className="gold-text">Shoreline Tutoring</span>?</h2>
                    <p className="section-subtitle">
                        Three things we hold to with every student, whichever way they learn with us.
                    </p>
                </ScrollReveal>

                <div className="features__grid">
                    {features.map((feature, index) => (
                        <ScrollReveal key={feature.title} delay={index * 150}>
                            <div className="features__card features__card--visible spotlight">
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
