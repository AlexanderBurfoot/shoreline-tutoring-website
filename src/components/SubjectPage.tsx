"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSubjectBySlug, subjects } from '../data/subjectData';
import { blogPosts } from '../data/blogData';
import subjectIcons from './SubjectIcons';
import ScrollReveal from './ScrollReveal';
import './SubjectPage.css';
import './Resources.css';
import './RecentArticles.css';

const SubjectPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const router = useRouter();
    // displayedSlug controls which content is rendered, it only updates AFTER exit animation
    const [displayedSlug, setDisplayedSlug] = useState(slug);
    const [pageState, setPageState] = useState<'enter' | 'visible' | 'exit'>('enter');

    useEffect(() => {
        if (displayedSlug !== slug) {
            // New slug arrived, fade out the OLD content first
            setTimeout(() => setPageState('exit'), 0);
            const timer = setTimeout(() => {
                // Exit done, swap to new content, scroll up, then fade in
                setDisplayedSlug(slug);
                window.scrollTo(0, 0);
                setPageState('enter');
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setPageState('visible');
                    });
                });
            }, 300);
            return () => clearTimeout(timer);
        } else {
            // First load or after swap fade in
            window.scrollTo(0, 0);
            requestAnimationFrame(() => {
                setPageState('visible');
            });
        }
    }, [slug, displayedSlug]);

    const subject = getSubjectBySlug(displayedSlug || '');

    if (!subject) {
        return (
            <div className="subject-page__not-found">
                <h2>Subject not found</h2>
                <p>The subject you're looking for doesn't exist.</p>
                <Link href="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    const currentIndex = subjects.findIndex((s) => s.slug === slug);
    const prevSubject = currentIndex > 0 ? subjects[currentIndex - 1] : null;
    const nextSubject = currentIndex < subjects.length - 1 ? subjects[currentIndex + 1] : null;

    const normalizedSubject = subject.title.toLowerCase();
    const relatedPostsList = blogPosts.filter(post => {
        const titleMatch = post.title.toLowerCase().includes(normalizedSubject);
        const excerptMatch = post.excerpt.toLowerCase().includes(normalizedSubject);
        
        const isMath = normalizedSubject.includes('math');
        const mathMatch = isMath && (post.title.toLowerCase().includes('math') || post.excerpt.toLowerCase().includes('math'));
        
        const isEnglish = normalizedSubject.includes('english');
        const englishMatch = isEnglish && (post.title.toLowerCase().includes('english') || post.excerpt.toLowerCase().includes('english'));

        const isScience = normalizedSubject.includes('chemistry') || normalizedSubject.includes('physics') || normalizedSubject.includes('science');
        const scienceMatch = isScience && (post.title.toLowerCase().includes('science') || post.title.toLowerCase().includes('chemistry') || post.title.toLowerCase().includes('physics'));

        return titleMatch || excerptMatch || mathMatch || englishMatch || scienceMatch;
    }).slice(0, 2);

    const displayPosts = relatedPostsList.length > 0 ? relatedPostsList : blogPosts.slice(0, 2);

    return (
        <main className={`subject-page subject-page--${pageState}`}>
            <section className="subject-page__hero">
                <div className="subject-page__hero-bg">
                    <div className="subject-page__hero-gradient"></div>
                    <div className="subject-page__hero-orb subject-page__hero-orb--1"></div>
                    <div className="subject-page__hero-orb subject-page__hero-orb--2"></div>
                    <div className="subject-page__hero-mesh"></div>
                </div>
                <div className="container">
                    <button onClick={() => router.push('/')} className="subject-page__back">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Subjects
                    </button>

                    <ScrollReveal delay={0} width="100%">
                        <div className="subject-page__hero-content">
                            <span className="subject-page__icon-large">{subjectIcons[subject.slug] ?? subject.icon}</span>
                            <div className="subject-page__hero-text">
                                <span className="subject-page__level-badge">{subject.level}</span>
                                <h1 className="subject-page__title">{subject.title}</h1>
                                <p className="subject-page__tagline">{subject.heroTagline}</p>
                                <button onClick={() => { router.push('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); }} className="btn btn-primary subject-page__hero-cta">
                                    Book Your Free Trial Lesson
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stats Bar */}
            <ScrollReveal delay={100} width="100%">
                <section className="subject-page__stats">
                    <div className="container">
                        <div className="subject-page__stats-grid">
                            {subject.stats.map((stat, i) => (
                                <div key={i} className="subject-page__stat">
                                    <span className="subject-page__stat-value">{stat.value}</span>
                                    <span className="subject-page__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Content */}
            <section className="subject-page__content section">
                <div className="container">
                    <div className="subject-page__layout">
                        <div className="subject-page__main">
                            {/* Overview */}
                            <ScrollReveal delay={100} width="100%">
                                <div className="subject-page__section">
                                    <div className="subject-page__section-header">
                                        <span className="subject-page__section-num">01</span>
                                        <h2 className="subject-page__section-title">Overview</h2>
                                    </div>
                                    {subject.overview.map((paragraph, i) => (
                                        <p key={i} className="subject-page__overview-p">{paragraph}</p>
                                    ))}
                                </div>
                            </ScrollReveal>

                            {/* Topics Covered */}
                            <ScrollReveal delay={200} width="100%">
                                <div className="subject-page__section">
                                    <div className="subject-page__section-header">
                                        <span className="subject-page__section-num">02</span>
                                        <h2 className="subject-page__section-title">Topics We Cover</h2>
                                    </div>
                                    <div className="subject-page__topics-grid">
                                        {subject.topicsCovered.map((topic) => (
                                            <div key={topic} className="subject-page__topic-item">
                                                <svg className="subject-page__check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                                <span>{topic}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* What You'll Learn */}
                            <ScrollReveal delay={300} width="100%">
                                <div className="subject-page__section">
                                    <div className="subject-page__section-header">
                                        <span className="subject-page__section-num">03</span>
                                        <h2 className="subject-page__section-title">What You'll Learn</h2>
                                    </div>
                                    <div className="subject-page__learn-grid">
                                        {subject.whatYouLearn.map((item, i) => (
                                            <div key={item} className="subject-page__learn-card">
                                                <span className="subject-page__learn-num">{String(i + 1).padStart(2, '0')}</span>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* What a Session Looks Like */}
                            <ScrollReveal delay={350} width="100%">
                                <div className="subject-page__section">
                                    <div className="subject-page__section-header">
                                        <span className="subject-page__section-num">04</span>
                                        <h2 className="subject-page__section-title">What a Session Looks Like</h2>
                                    </div>
                                    <div className="subject-page__session-timeline">
                                        {subject.sessionStructure.map((step, i) => (
                                            <div key={i} className="subject-page__session-step">
                                                <div className="subject-page__session-marker">
                                                    <span className="subject-page__session-dot" />
                                                    {i < subject.sessionStructure.length - 1 && (
                                                        <span className="subject-page__session-line" />
                                                    )}
                                                </div>
                                                <div className="subject-page__session-content">
                                                    <span className="subject-page__session-duration">{step.duration}</span>
                                                    <h4 className="subject-page__session-title">{step.title}</h4>
                                                    <p className="subject-page__session-desc">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Sidebar */}
                        <aside className="subject-page__sidebar">
                            {/* Exam Tips */}
                            <ScrollReveal delay={150} width="100%">
                                <div className="subject-page__tips-card">
                                    <h3 className="subject-page__tips-title">
                                        <span className="subject-page__tips-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 18h6" /><path d="M10 22h4" />
                                                <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
                                            </svg>
                                        </span>
                                        Exam Tips
                                    </h3>
                                    <ul className="subject-page__tips-list">
                                        {subject.examTips.map((tip) => (
                                            <li key={tip} className="subject-page__tips-item">{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Why Us */}
                            <ScrollReveal delay={250} width="100%">
                                <div className="subject-page__why-card">
                                    <h3 className="subject-page__why-title">
                                        <span className="subject-page__why-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                        </span>
                                        Why Shoreline?
                                    </h3>
                                    <ul className="subject-page__why-list">
                                        {subject.whyUs.map((point) => (
                                            <li key={point} className="subject-page__why-item">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Testimonial */}
                            <ScrollReveal delay={300} width="100%">
                                <div className="subject-page__testimonial-card">
                                    <svg className="subject-page__quote-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.183 11 15c0 1.933-1.567 3.5-3.5 3.5-1.294 0-2.476-.663-2.917-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.183 21 15c0 1.933-1.567 3.5-3.5 3.5-1.294 0-2.476-.663-2.917-1.179z" />
                                    </svg>
                                    <p className="subject-page__testimonial-quote">
                                        "{subject.testimonial.quote}"
                                    </p>
                                    <div className="subject-page__testimonial-author">
                                        <span className="subject-page__testimonial-name">{subject.testimonial.name}</span>
                                        <span className="subject-page__testimonial-result">{subject.testimonial.result}</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* CTA Card */}
                            <ScrollReveal delay={350} width="100%">
                                <div className="subject-page__cta-card">
                                    <h3 className="subject-page__cta-title">{subject.ctaText}</h3>
                                    <p className="subject-page__cta-description">
                                        Book a free trial lesson and experience the difference.
                                    </p>
                                    <button onClick={() => { router.push('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 400); }} className="btn btn-primary subject-page__cta-btn">
                                        Book Your Free Trial Lesson
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </ScrollReveal>
                        </aside>
                    </div>

                    {/* Related Study Guides */}
                    {displayPosts.length > 0 && (
                        <ScrollReveal delay={150} width="100%">
                            <div className="subject-page__related-guides">
                                <div className="subject-page__related-header">
                                    <h2 className="subject-page__section-title">Related Study Guides</h2>
                                    <Link href="/resources" className="subject-page__view-all-link">
                                        View All <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                                <div className="subject-page__related-grid">
                                    {displayPosts.map((post) => (
                                        <Link href={`/resources/${post.slug}`} className="resource-card" key={post.id}>
                                            <div className="resource-card__image-wrapper">
                                                <Image
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(max-width: 600px) 100vw, 400px"
                                                    className="resource-card__image"
                                                />
                                            </div>
                                            <div className="resource-card__content">
                                                <div className="resource-card__meta">
                                                    <span className="resource-card__category">{post.category}</span>
                                                    <span className="resource-card__read-time">{post.readTime}</span>
                                                </div>
                                                <h3 className="resource-card__title">{post.title}</h3>
                                                <span className="resource-card__read-more">Read Guide <span className="arrow">→</span></span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Navigation */}
                    <ScrollReveal delay={200} width="100%">
                        <nav className="subject-page__nav">
                            {prevSubject ? (
                                <Link href={`/subjects/${prevSubject.slug}`} className="subject-page__nav-link subject-page__nav-link--prev">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                    <div>
                                        <span className="subject-page__nav-label">Previous</span>
                                        <span className="subject-page__nav-name">{prevSubject.title}</span>
                                    </div>
                                </Link>
                            ) : <div />}
                            {nextSubject ? (
                                <Link href={`/subjects/${nextSubject.slug}`} className="subject-page__nav-link subject-page__nav-link--next">
                                    <div>
                                        <span className="subject-page__nav-label">Next</span>
                                        <span className="subject-page__nav-name">{nextSubject.title}</span>
                                    </div>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ) : <div />}
                        </nav>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
};

export default SubjectPage;
