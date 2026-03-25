"use client";
import './Approach.css';

const steps = [
    {
        number: '01',
        title: 'Initial Assessment',
        description: 'We begin with a comprehensive evaluation of your current level, learning style, and goals to create a detailed understanding of where you are and where you want to be.',
    },
    {
        number: '02',
        title: 'Custom Learning Plan',
        description: 'Your dedicated tutor crafts a personalized curriculum designed specifically for you, targeting weak areas while building on your strengths.',
    },
    {
        number: '03',
        title: 'One-on-One Sessions',
        description: 'Engage in focused, distraction-free tutoring sessions where every minute is dedicated to your progress and understanding.',
    },
    {
        number: '04',
        title: 'Constant Support',
        description: 'Between sessions, receive ongoing guidance, homework help, and encouragement. Your tutor is always just a message away.',
    },
    {
        number: '05',
        title: 'Progress Tracking',
        description: 'Regular assessments and detailed progress reports ensure we stay on track and adjust strategies for optimal results.',
    },
];

const Approach = () => {
    return (
        <section className="approach section" id="approach">
            <div className="container">
                <div className="approach__header">
                    <span className="section-eyebrow">How It Works</span>
                    <h2 className="section-title">Our Approach</h2>
                    <p className="section-subtitle">
                        A proven methodology that transforms potential into achievement through structured, personalized guidance.
                    </p>
                </div>

                <div className="approach__timeline">
                    {steps.map((step, index) => (
                        <div key={step.number} className="approach__step">
                            <div className="approach__step-number">
                                <span>{step.number}</span>
                            </div>
                            <div className="approach__step-content">
                                <h3 className="approach__step-title">{step.title}</h3>
                                <p className="approach__step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="approach__step-line"></div>}
                        </div>
                    ))}
                </div>

                <div className="approach__highlight">
                    <div className="approach__highlight-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                    </div>
                    <div className="approach__highlight-content">
                        <h3 className="approach__highlight-title">Constant Support Guarantee</h3>
                        <p className="approach__highlight-text">
                            Unlike other tutoring services, our commitment doesn't end when the session does.
                            Students can reach their tutors anytime for quick questions, homework help, or just
                            encouragement before a big test.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
