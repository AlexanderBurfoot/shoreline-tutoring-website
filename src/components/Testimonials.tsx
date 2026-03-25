"use client";
import './Testimonials.css';
import ScrollReveal from './ScrollReveal';

const commitments = [
    {
        id: 1,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
            </svg>
        ),
        title: 'HSC-Aligned Curriculum',
        description: 'Every lesson is built around the latest NSW syllabus. We teach what the examiners are actually looking for.',
    },
    {
        id: 2,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Free Trial Lesson',
        description: 'Experience our approach risk-free. See the difference personalised, one-on-one attention makes from day one.',
    },
    {
        id: 3,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: 'Progress Reports',
        description: 'Regular, detailed feedback on your child\'s growth. Know exactly where they stand and where they\'re heading.',
    },
    {
        id: 4,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: 'Flexible Scheduling',
        description: 'Sessions that fit your lifestyle: weekdays, weekends, or school holidays. We come to you or connect online.',
    },
    {
        id: 5,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: 'Between-Session Support',
        description: 'Have a question before an exam? Reach out anytime. We\'re here to help beyond the scheduled lesson.',
    },
    {
        id: 6,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            </svg>
        ),
        title: 'Flexible Pricing',
        description: 'Pay as you go per lesson, or prepay for 20 lessons and receive a discount. No lock-in contracts, just options that suit you.',
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <ScrollReveal width="100%">
                    <span className="section-eyebrow">What You Get</span>
                    <h2 className="section-title">Our Promise</h2>
                    <p className="section-subtitle">
                        We believe in earning your trust through action, not words. Here's what every student receives.
                    </p>
                </ScrollReveal>

                <div className="commitments-grid">
                    {commitments.map((item, index) => (
                        <ScrollReveal key={item.id} width="100%" delay={index * 80}>
                            <div className="commitment-card">
                                <span className="commitment-card__icon">{item.icon}</span>
                                <h3 className="commitment-card__title">{item.title}</h3>
                                <p className="commitment-card__description">{item.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
