import Link from 'next/link';
import './Services.css';
import ScrollReveal from './ScrollReveal';
import { subjects } from '../data/subjectData';
import subjectIcons from './SubjectIcons';

const Services = () => {
    // Split into 2-2-2-2-2 rows
    const row1 = subjects.slice(0, 2);  // English, Mathematics
    const row2 = subjects.slice(2, 4);  // Physics, Chemistry
    const row3 = subjects.slice(4, 6);  // Economics, Business Studies
    const row4 = subjects.slice(6, 8);  // Commerce, Selective
    const row5 = subjects.slice(8, 10); // OC, NAPLAN

    const renderCard = (subject: typeof subjects[0], index: number) => (
        <ScrollReveal key={subject.slug} width="100%" delay={index * 100}>
            <Link href={`/subjects/${subject.slug}`} className="subject-card" id={`subject-${subject.slug}`}>
                <div className="subject-card__shimmer"></div>
                <span className="subject-card__icon">{subjectIcons[subject.slug] ?? subject.icon}</span>
                <h2 className="subject-card__title">{subject.title}</h2>
                <p className="subject-card__description">{subject.shortDescription}</p>
                <div className="subject-card__level">
                    <span className="subject-card__level-label">Level</span>
                    <span className="subject-card__level-value">{subject.level}</span>
                </div>
                <span className="subject-card__link">
                    Explore Subject
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                            Every lesson is mapped to the NSW syllabus and tailored to you.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="services-grid services-grid--row-2">
                    {row1.map((s, i) => renderCard(s, i))}
                </div>
                <div className="services-grid services-grid--row-2">
                    {row2.map((s, i) => renderCard(s, i + 2))}
                </div>
                <div className="services-grid services-grid--row-2">
                    {row3.map((s, i) => renderCard(s, i + 4))}
                </div>
                <div className="services-grid services-grid--row-2">
                    {row4.map((s, i) => renderCard(s, i + 6))}
                </div>
                <div className="services-grid services-grid--row-2">
                    {row5.map((s, i) => renderCard(s, i + 8))}
                </div>
            </div>
        </section>
    );
};

export default Services;
