import Link from 'next/link';
import './Services.css';
import ScrollReveal from './ScrollReveal';
import { GROUP_SCOPE_SUMMARY } from '../data/groupClassLaunch';
import { subjects } from '../data/subjectData';
import subjectIcons from './SubjectIcons';

/** Delay between cards revealing, so they arrive as a quick ripple. */
const CARD_STAGGER_MS = 60;

/**
 * A compact card per subject: icon, name, year levels and a link. The full
 * description lives on each subject's own page.
 */
const Services = () => {
    const renderCard = (subject: typeof subjects[0], index: number) => (
        <ScrollReveal key={subject.slug} width="100%" delay={index * CARD_STAGGER_MS}>
            <Link href={`/subjects/${subject.slug}`} className="subject-card" id={`subject-${subject.slug}`}>
                <div className="subject-card__shimmer"></div>
                <span className="subject-card__icon">{subjectIcons[subject.slug] ?? subject.icon}</span>
                <h2 className="subject-card__title">{subject.title}</h2>
                <span className="subject-card__level-value">{subject.level}</span>
                <span className="subject-card__link">
                    Explore
                    <svg className="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </Link>
        </ScrollReveal>
    );

    return (
        <section className="services section" id="services">
            <div className="container">
                <ScrollReveal width="100%">
                    <div className="services__header">
                        <span className="section-eyebrow">What We Teach</span>
                        <h2 className="section-title">Subject <span className="gold-text">Expertise</span></h2>
                        <p className="section-subtitle">
                            Every lesson is mapped to the NSW syllabus and tailored to you. All of
                            these are available one-on-one; small-group classes currently run for{' '}
                            {GROUP_SCOPE_SUMMARY}.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="services-grid">
                    {subjects.map(renderCard)}
                </div>
            </div>
        </section>
    );
};

export default Services;
