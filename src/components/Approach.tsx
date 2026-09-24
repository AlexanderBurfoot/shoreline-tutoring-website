import Link from 'next/link';
import './Approach.css';
import ApproachTimeline, { type ApproachStep } from './ApproachTimeline';
import { GROUP_CLASSES_PATH } from '../data/groupClassLaunch';

const steps: ApproachStep[] = [
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

                <ApproachTimeline steps={steps} />

            </div>
        </section>
    );
};

export default Approach;
