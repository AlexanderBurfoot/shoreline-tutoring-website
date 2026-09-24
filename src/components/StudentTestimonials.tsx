"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import './StudentTestimonials.css';
import ScrollReveal from './ScrollReveal';
import { useSwipe } from '../lib/useSwipe';

/** How long a testimonial takes to fade out before the next one replaces it. */
const SLIDE_FADE_MS = 300;

/** Applied while a quote is cut to its preview length. */
const QUOTE_CLAMPED_CLASS = 'student-testimonial-card__text--clamped';

const testimonials = [
    {
        id: 1,
        name: 'Charlotte S',
        yearLevel: 'Year 12 IB Chemistry',
        quote: 'I have really enjoyed my Year 12 IB Chemistry tutoring at Shoreline Tutoring, and my tutor has made a huge difference to both my confidence and my results. Before I started, I found the calculation side of Chemistry difficult, especially moles, stoichiometry, and longer multi-step questions. What helped me most was the way my tutor explained things, he broke difficult ideas down clearly and always linked the maths-based problems to the chemistry behind them, which made topics that had previously felt overwhelming much easier to understand.\n\nWhat I appreciated most was that he never just taught me to memorise a method. He made sure I understood why each step worked and how to apply the same thinking across different types of questions. After each session, he set targeted homework and practice exam questions for each Chemistry subtopic and sub-subtopic we covered, which helped me consolidate what I had learned and build real confidence with the kinds of questions that come up in exams. That structured approach made a big difference to my problem-solving skills, and topics I once found daunting started to feel manageable.\n\nOver time, I became more accurate, faster, and far less stressed in quantitative Chemistry. I have improved enormously through his tutoring and would wholeheartedly recommend him to any student looking to build genuine confidence and a much stronger understanding of IB courses.',
        result: 'IB Chemistry',
        icon: '🧪',
    },
    {
        id: 2,
        name: 'Jason H',
        yearLevel: 'HSC Mathematics Standard & Physics',
        quote: 'I was struggling to be motivated in school, I just put in the bare minimum, and I saw it as just something to get through.\n\nMy tutor from Shoreline Tutoring was much better than previous tutors I had. He actually makes the content interesting and uses multiple ways to explain things and doesn\'t move on until it clicks, especially with trigonometry, electromagnetism, advanced mechanics, I actually understood the content unlike before. The homework he gave me focused on exactly what I struggled with, so every session felt worth showing up for.\n\nMy teachers started noticing the improvement before I even realised it myself and soon my marks went up. My tutor is now helping me plan my future by spending time with me looking at uni courses, something I did not do before. I would recommend Shoreline Tutoring to anyone looking to enjoy learning much more, stay motivated and greatly improve their marks.',
        result: 'HSC Maths & Physics',
        icon: '📐',
    },
    {
        id: 3,
        name: 'Father of Will L',
        yearLevel: 'Selective High School Preparation',
        quote: 'When we started preparing our son for the NSW Selective High School exam, we knew he needed extra support, especially with writing and some of the more difficult English comprehension questions. Straight away the tutor took the time to understand the types of questions he found challenging and worked with him patiently to build his skills.\n\nOver the following weeks we noticed clear improvements in his English comprehension, mathematics, and thinking skills. He became much more confident tackling harder questions and explaining his reasoning.\n\nThe biggest improvement was in his writing. The tutor helped him develop stronger creative writing by encouraging descriptive language, literary techniques, and more thoughtful characters and ideas. His persuasive writing also improved through learning clear paragraph structure. The tutor even set regular typing practice so he could work quickly and accurately in the exam.\n\nMost importantly, our son now approaches the exam with much greater confidence. We are very grateful for the support and would happily recommend this tutor to other families preparing for the Selective High School exam.',
        result: 'Selective Prep',
        icon: '🏆',
    },
];

interface ExpandableQuoteProps {
    id: string;
    text: string;
    isExpanded: boolean;
    onToggle: () => void;
}

/**
 * A quote clamped to a set number of lines (see --quote-lines), so every card
 * is the same height and the carousel does not jump between stories. The
 * toggle appears only when the text is actually cut off.
 */
const ExpandableQuote = ({ id, text, isExpanded, onToggle }: ExpandableQuoteProps) => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isCutOff, setIsCutOff] = useState(false);

    // Measured on every resize and every new quote. Observing fires once
    // straight away, which covers a quote replacing one of the same height.
    useEffect(() => {
        const element = textRef.current;
        if (!element) return;
        const observer = new ResizeObserver(() => {
            // Only meaningful while clamped; expanded text is never cut off.
            if (element.classList.contains(QUOTE_CLAMPED_CLASS)) {
                setIsCutOff(element.scrollHeight > element.clientHeight + 1);
            }
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, [text]);

    return (
        <>
            <p
                id={id}
                ref={textRef}
                className={`student-testimonial-card__text ${isExpanded ? '' : QUOTE_CLAMPED_CLASS}`}
            >
                {text}
            </p>
            {isCutOff && (
                <button
                    type="button"
                    className="student-testimonial-card__more"
                    aria-expanded={isExpanded}
                    aria-controls={id}
                    onClick={onToggle}
                >
                    {isExpanded ? 'Show less' : 'Read more'}
                </button>
            )}
        </>
    );
};

const StudentTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const goToSlide = useCallback((index: number) => {
        if (index === activeIndex) return;
        setIsExpanded(false);
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveIndex(index);
            setTimeout(() => setIsTransitioning(false), 50);
        }, SLIDE_FADE_MS);
    }, [activeIndex]);

    const nextSlide = useCallback(() => {
        goToSlide((activeIndex + 1) % testimonials.length);
    }, [activeIndex, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
    }, [activeIndex, goToSlide]);

    // Auto-rotation, held while a story is expanded so it is not whisked away mid-read
    const isHeld = isPaused || isExpanded;
    useEffect(() => {
        if (isHeld) {
            if (timerRef.current) clearInterval(timerRef.current);
            return;
        }
        timerRef.current = setInterval(nextSlide, 8000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHeld, nextSlide]);

    // Pause on hover
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    // Swipe on touchscreens: left for the next story, right for the previous.
    const swipe = useSwipe({
        onSwipeLeft: nextSlide,
        onSwipeRight: prevSlide,
        onTouchBegin: () => setIsPaused(true),
        onTouchFinish: () => setIsPaused(false),
        releaseDelayMs: SLIDE_FADE_MS,
    });

    /**
     * Collapsing a long story on a phone can leave the reader below the card, so
     * the card is brought back into view when that happens.
     */
    const toggleExpanded = () => {
        const collapsing = isExpanded;
        setIsExpanded(!collapsing);
        const card = containerRef.current;
        if (collapsing && card && card.getBoundingClientRect().top < 0) {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const t = testimonials[activeIndex];

    return (
        <section className="student-testimonials section" id="student-testimonials">
            <div className="container">
                <ScrollReveal width="100%">
                    <span className="section-eyebrow">Student Stories</span>
                    <h2 className="section-title">What Our <span className="gold-text">Students Say</span></h2>
                    <p className="section-subtitle">
                        Real results from real students and families. Here's how Shoreline Tutoring has helped them achieve their goals.
                    </p>
                </ScrollReveal>

                <div
                    className="student-testimonials__carousel"
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="student-testimonials__nav-btn student-testimonials__nav-btn--prev"
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <button
                        className="student-testimonials__nav-btn student-testimonials__nav-btn--next"
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    <div
                        className={[
                            'student-testimonial-card',
                            isTransitioning && 'student-testimonial-card--fading',
                            swipe.isDragging && 'student-testimonial-card--dragging',
                        ].filter(Boolean).join(' ')}
                        style={{ translate: `${swipe.offsetX}px 0` }}
                        {...swipe.handlers}
                    >
                        <div className="student-testimonial-card__top">
                            <span className="student-testimonial-card__icon">{t.icon}</span>
                            <div className="student-testimonial-card__meta">
                                <strong className="student-testimonial-card__name">{t.name}</strong>
                                <span className="student-testimonial-card__year">{t.yearLevel}</span>
                            </div>
                            <span className="student-testimonial-card__result">{t.result}</span>
                        </div>
                        <div className="student-testimonial-card__quote-mark">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                            </svg>
                        </div>
                        <ExpandableQuote
                            id={`testimonial-quote-${t.id}`}
                            text={t.quote}
                            isExpanded={isExpanded}
                            onToggle={toggleExpanded}
                        />
                    </div>

                    {/* Controls */}
                    <div className="student-testimonials__controls">
                        <div className="student-testimonials__dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`student-testimonials__dot ${index === activeIndex ? 'student-testimonials__dot--active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="student-testimonials__progress">
                        <div
                            className={`student-testimonials__progress-bar ${isHeld ? 'student-testimonials__progress-bar--paused' : ''}`}
                            key={activeIndex}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentTestimonials;
