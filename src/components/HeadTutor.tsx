import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import './HeadTutor.css';

const philosophyPillars = [
    {
        title: 'Breaking through mark plateaus',
        description:
            'Students plateau at every level: a Year 8 stuck at 75%, a Year 10 at 82%, an HSC student at Band 5. The pattern is almost never effort; it is a specific reasoning gap that routine practice does not surface. Our first session is entirely diagnostic: we find the exact step where understanding breaks down, and rebuild from there. Marks lift when the underlying reasoning does, not before.',
    },
    {
        title: 'Memorising past papers backfires',
        description:
            'Students who memorise past-paper answers ace any question they have already seen and fail any question that has been rephrased. HSC examiners know this and rephrase every year. The fix is teaching the structure beneath the content, so that an unfamiliar question reveals a familiar pattern. Slower in the first fortnight, dramatically faster after that.',
    },
    {
        title: 'Exam-day performance is trained, not hoped for',
        description:
            'Most students prepare for exams by studying content; very few prepare for the exam itself. The result is a child who knew the material on Thursday and could not retrieve it on Saturday. We regularly run sessions under exam conditions (time pressure, sequential question difficulty, the specific feeling of seeing something unexpected) so that exam day is familiar rather than foreign.',
    },
];

const outcomeStats = [
    { value: '100+', label: 'students tutored since 2020' },
    { value: '43 → 90+', label: 'mark transformations seen in multiple students after sustained one-on-one work' },
    { value: '7+ years', label: 'of applied CS, finance, and tutoring experience' },
];

const HeadTutor = () => {
    return (
        <section className="head-tutor section" id="head-tutor">
            <div className="container">
                <ScrollReveal width="100%">
                    <div className="head-tutor__inner">
                        <div className="head-tutor__portrait-wrapper">
                            <img
                                src="/head-tutor.webp"
                                alt="Portrait of Alexander Burfoot, head tutor at Shoreline Tutoring"
                                className="head-tutor__portrait"
                                loading="lazy"
                            />
                        </div>

                        <div className="head-tutor__content">
                            <span className="section-eyebrow">Meet the Head Tutor</span>
                            <h2 className="head-tutor__title">
                                Led by <span className="gold-text">Alexander Burfoot</span>
                            </h2>
                            <p className="head-tutor__bio">
                                Over seven years of tutoring experience, a dual degree in Finance
                                and Computer Science, and work at a boutique hedge fund, the big 4 consultancy firm Deloitte,
                                and in state government. Each of those roles demanded translating
                                complex analytical work for very different audiences: quantitative
                                peers, executive clients, and non-technical stakeholders. Most tutors
                                specialise in one discipline; this combination is what makes
                                explanations land regardless of where a student&apos;s confusion
                                actually is.
                            </p>

                            <ul className="head-tutor__credentials">
                                <li className="head-tutor__credential">
                                    <span className="head-tutor__credential-icon" aria-hidden="true">✓</span>
                                    Dual degree in Finance and Computer Science: a rare combination
                                    for a tutor, purpose-built for HSC breadth
                                </li>
                                <li className="head-tutor__credential">
                                    <span className="head-tutor__credential-icon" aria-hidden="true">✓</span>
                                    Founder of AurumQuanta, an AI-focused software engineering firm;
                                    the active industry practice keeps the ML thinking in sessions
                                    current
                                </li>
                                <li className="head-tutor__credential">
                                    <span className="head-tutor__credential-icon" aria-hidden="true">✓</span>
                                    Active fluency across Mathematics (including Extension),
                                    Economics, Business Studies, and Commerce
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Availability + year-level signal */}
                <ScrollReveal width="100%">
                    <div className="head-tutor__availability">
                        Currently accepting a limited number of new students across Years 1 – 12 for 2026
                    </div>
                </ScrollReveal>

                {/* Cross-disciplinary insight callout */}
                <ScrollReveal width="100%">
                    <div className="head-tutor__insight">
                        <span className="section-eyebrow">Cross-disciplinary Edge</span>
                        <h3 className="head-tutor__insight-title">
                            What training machines and modelling finance taught me
                            about teaching
                        </h3>
                        <p className="head-tutor__insight-body">
                            Training a machine learning model teaches a discipline most tutors
                            never develop. You cannot just show the model the right answer;
                            you have to structure how it learns so understanding generalises
                            beyond the example. Students who memorise past-paper answers and
                            then fail on rephrased questions are experiencing what ML researchers
                            call <em>overfitting</em>. At AurumQuanta, the AI-focused software
                            engineering firm I founded, the techniques I use daily across CS,
                            machine learning, and quantitative finance carry over directly to
                            how I teach: diagnose the exact failure point, vary examples
                            aggressively so patterns become principles, and treat every wrong
                            answer as diagnostic data, so difficult and confusing topics become
                            fully understood.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Teaching Philosophy cards */}
                <ScrollReveal width="100%">
                    <div className="head-tutor__philosophy-header">
                        <span className="section-eyebrow">Teaching Philosophy</span>
                        <h3 className="head-tutor__philosophy-title">
                            Three principles that shape every session
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="head-tutor__philosophy-grid">
                    {philosophyPillars.map((pillar, index) => (
                        <ScrollReveal key={pillar.title} width="100%" delay={index * 120}>
                            <div className="head-tutor__philosophy-card">
                                <span className="head-tutor__philosophy-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h4 className="head-tutor__philosophy-card-title">{pillar.title}</h4>
                                <p className="head-tutor__philosophy-card-description">{pillar.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Outcomes stats */}
                <ScrollReveal width="100%">
                    <div className="head-tutor__stats">
                        {outcomeStats.map((stat) => (
                            <div key={stat.label} className="head-tutor__stat">
                                <span className="head-tutor__stat-value">{stat.value}</span>
                                <span className="head-tutor__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Closing CTA */}
                <ScrollReveal width="100%">
                    <div className="head-tutor__cta-block">
                        <h3 className="head-tutor__cta-title">Ready to see this in action?</h3>
                        <p className="head-tutor__cta-text">
                            A free trial lesson is the fastest way to tell if this approach
                            is the right fit for your child.
                        </p>
                        <Link href="/#contact" className="btn btn-primary head-tutor__cta-btn">
                            Book Your Free Trial Lesson
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HeadTutor;
