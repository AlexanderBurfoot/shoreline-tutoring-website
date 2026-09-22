import Link from 'next/link';
import './Approach.css';
import { GROUP_CLASSES_PATH } from '../data/groupClassLaunch';

const steps = [
    {
        number: '01',
        title: 'Initial Assessment',
        description: 'We begin with a comprehensive evaluation of your current level, learning style, and goals to create a detailed understanding of where you are and where you want to be.',
    },
    {
        number: '02',
        title: 'Custom Learning Plan',
        description: 'Your tutor builds the plan around your goals and your gaps, targeting weak areas while building on strengths, and rewrites it as you improve.',
    },
    {
        number: '03',
        title: 'Focused Sessions',
        description: 'Engage in focused, distraction-free sessions where the whole hour is dedicated to your progress and understanding.',
    },
    {
        number: '04',
        title: 'Support Between Sessions',
        description: 'Message your tutor any time in your WhatsApp group for a quick question or help with homework, and get a reply within 24 hours.',
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
                    <h2 className="section-title">Our <span className="gold-text">Approach</span></h2>
                    <p className="section-subtitle">
                        A proven methodology that transforms potential into achievement through structured, personalised guidance.
                        This is how one-on-one tutoring runs; small-group classes follow a
                        weekly course plan shared by everyone in the room.{' '}
                        <Link href={GROUP_CLASSES_PATH} className="section-subtitle__link">
                            See small-group classes
                        </Link>.
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

            </div>
        </section>
    );
};

export default Approach;
