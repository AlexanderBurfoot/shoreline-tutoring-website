import './Hero.css';
const logo = '/ShorelineLogo.png';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__background">
                <div className="hero__gradient"></div>
                <div className="hero__pattern"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <ScrollReveal delay={0}>
                        <div className="hero__tagline animate-fade-in-up">
                            <span className="hero__tagline-item">EXCLUSIVE</span>
                            <span className="hero__tagline-dot">•</span>
                            <span className="hero__tagline-item">INDIVIDUALISED</span>
                            <span className="hero__tagline-dot">•</span>
                            <span className="hero__tagline-item">EFFECTIVE</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h1 className="hero__title animate-fade-in-up delay-100">
                            Unlock Your
                            <span className="hero__title-accent"> Academic Potential</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className="hero__description animate-fade-in-up delay-200">
                            Experience transformative one-on-one tutoring designed to dramatically
                            improve your results through personalized attention and constant support.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="hero__cta-group animate-fade-in-up delay-300">
                            <a href="#contact" className="btn btn-primary btn-lg">
                                Book Your Free Trial Lesson
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#about" className="btn btn-secondary">
                                Learn More
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="hero__stats animate-fade-in-up delay-400">
                            <div className="hero__stat">
                                <span className="hero__stat-number">Syllabus</span>
                                <span className="hero__stat-label">Expert Knowledge</span>
                            </div>
                            <div className="hero__stat-divider"></div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">Tailored</span>
                                <span className="hero__stat-label">Learning Plans</span>
                            </div>
                            <div className="hero__stat-divider"></div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">24/7</span>
                                <span className="hero__stat-label">Student Support</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="hero__visual animate-fade-in-up delay-200">
                    <div className="hero__image-wrapper">
                        <div className="hero__image-decoration hero__image-decoration--1"></div>
                        <div className="hero__image-decoration hero__image-decoration--2"></div>
                        <div className="hero__image-placeholder">
                            <img src={logo} alt="Shoreline Tutoring Logo" className="hero__main-logo" />
                            <div className="hero__float-card hero__float-card--1">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                <span className="hero__float-text">Expert Tutors</span>
                            </div>
                            <div className="hero__float-card hero__float-card--2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                <span className="hero__float-text">Proven Methods</span>
                            </div>
                            <div className="hero__float-card hero__float-card--3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                                <span className="hero__float-text">Personalized</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
