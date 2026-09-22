import { Fragment } from 'react';
import Link from 'next/link';
import './Hero.css';
const logo = '/Shoreline-Logo.png';
import ScrollReveal from './ScrollReveal';
import ParallaxScene from './ParallaxScene';
import EnquiryLink from './EnquiryLink';
import {
    FIRST_LESSON_DATE_LONG,
    GROUP_CLASSES_PATH,
    ONE_ON_ONE_FORMAT,
    ONE_ON_ONE_PATH,
    TRIAL_OFFER,
} from '../data/groupClassLaunch';

interface HeroProps {
    /**
     * Render as the opening of the one-on-one half of a group-first homepage
     * rather than as the page hero: no full-screen height, no launch pill (the
     * group program already sits above it), an h2 so the page keeps a single
     * h1, and calls to action aimed at one-on-one tutoring.
     */
    asSection?: boolean;
}

const PAGE_TAGLINE = ['EXCLUSIVE', 'INDIVIDUALISED', 'EFFECTIVE'];
const SECTION_TAGLINE = ['ONE-ON-ONE TUTORING', 'ALL YEARS', 'ALL SUBJECTS'];

const ArrowIcon = () => (
    <svg className="icon-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const Hero = ({ asSection = false }: HeroProps) => {
    const TitleTag = asSection ? 'h2' : 'h1';
    const taglineItems = asSection ? SECTION_TAGLINE : PAGE_TAGLINE;

    return (
        <section
            className={`hero ${asSection ? 'hero--section' : ''}`}
            id={asSection ? 'one-on-one-tutoring' : undefined}
        >
            <div className="hero__background">
                <div className="hero__gradient"></div>
                <div className="hero__pattern"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <ScrollReveal delay={0}>
                        <div className="hero__tagline animate-fade-in-up">
                            {taglineItems.map((item, index) => (
                                <Fragment key={item}>
                                    {index > 0 && <span className="hero__tagline-dot">•</span>}
                                    <span className="hero__tagline-item">{item}</span>
                                </Fragment>
                            ))}
                        </div>
                        {!asSection && (
                            <Link href={GROUP_CLASSES_PATH} className="hero__launch animate-fade-in-up">
                                <span className="hero__launch-pulse" aria-hidden="true"></span>
                                <span className="hero__launch-text">
                                    Year 12 small-group classes, weekly from {FIRST_LESSON_DATE_LONG}
                                </span>
                                <span className="hero__launch-offer">{TRIAL_OFFER}</span>
                            </Link>
                        )}
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <TitleTag className="hero__title animate-fade-in-up delay-100">
                            Unlock Your{' '}
                            <span className="hero__title-accent">Academic Potential</span>
                        </TitleTag>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className="hero__description animate-fade-in-up delay-200">
                            {asSection
                                ? 'Private one-on-one tutoring at your home or live online, across every year level and subject, with a learning plan shaped entirely around your child.'
                                : 'Experience transformative tutoring, one-on-one or in small groups, designed to dramatically improve your results through personalised attention and constant support.'}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="hero__cta-group animate-fade-in-up delay-300">
                            {asSection ? (
                                <>
                                    <EnquiryLink format={ONE_ON_ONE_FORMAT} className="btn btn-primary btn-lg">
                                        Book a Free Trial Lesson
                                        <ArrowIcon />
                                    </EnquiryLink>
                                    <Link href={ONE_ON_ONE_PATH} className="btn btn-secondary">
                                        See One-on-One Tutoring
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <a href="#contact" className="btn btn-primary btn-lg">
                                        Book Your Free Session
                                        <ArrowIcon />
                                    </a>
                                    <a href="#ways-to-learn" className="btn btn-secondary">
                                        Compare Both Formats
                                    </a>
                                </>
                            )}
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
                                <span className="hero__stat-number">24 hours</span>
                                <span className="hero__stat-label">Message Replies</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ParallaxScene className="hero__visual animate-fade-in-up delay-200">
                    <div className="hero__image-wrapper">
                        <div className="hero__image-decoration hero__image-decoration--1 parallax-layer"></div>
                        <div className="hero__image-decoration hero__image-decoration--2 parallax-layer"></div>
                        <div className="hero__image-placeholder">
                            <img src={logo} alt="Shoreline Tutoring Logo" className="hero__main-logo parallax-layer" width={1966} height={1289} />
                            <div className="hero__float-card hero__float-card--1 parallax-layer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                <span className="hero__float-text">Expert Tutors</span>
                            </div>
                            <div className="hero__float-card hero__float-card--2 parallax-layer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                <span className="hero__float-text">Proven Methods</span>
                            </div>
                            <div className="hero__float-card hero__float-card--3 parallax-layer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                                <span className="hero__float-text">Personalised</span>
                            </div>
                        </div>
                    </div>
                </ParallaxScene>
            </div>

            {!asSection && (
                <div className="hero__scroll-indicator">
                    <div className="hero__scroll-mouse">
                        <div className="hero__scroll-wheel"></div>
                    </div>
                    <span>Scroll to explore</span>
                </div>
            )}
        </section>
    );
};

export default Hero;
