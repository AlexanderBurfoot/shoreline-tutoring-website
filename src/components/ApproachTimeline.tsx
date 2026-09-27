"use client";
import { useEffect, useRef, useState } from 'react';

export interface ApproachStep {
    number: string;
    title: string;
    description: string;
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * How far down the screen the "reading line" sits, as a share of its height.
 * A step lights up as its number crosses this line.
 */
const READING_LINE = 0.6;

/** Custom property the fill reads its length from, 0 to 1. */
const PROGRESS_PROPERTY = '--timeline-progress';

/** Custom property for the track's length: first number's centre to the last's. */
const TRACK_LENGTH_PROPERTY = '--track-length';

const centreOf = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height / 2;
};

/**
 * The Our Approach steps, joined by a gold line that fills as the visitor
 * scrolls. Each step lights up as the line reaches it. With reduced motion
 * the whole timeline shows fully lit (see Approach.css), and only the track's
 * length is measured.
 */
const ApproachTimeline = ({ steps }: { steps: ApproachStep[] }) => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [litCount, setLitCount] = useState(0);

    useEffect(() => {
        const timeline = timelineRef.current;
        if (!timeline) return;
        // The track's length is layout, so it is measured even with reduced
        // motion; only the scroll-driven fill and lighting are skipped.
        const tracksScroll = !window.matchMedia(REDUCED_MOTION_QUERY).matches;

        let pendingFrame = 0;
        const update = () => {
            pendingFrame = 0;
            const numbers = [...timeline.querySelectorAll<HTMLElement>('.approach__step-number')];
            if (numbers.length === 0) return;

            const first = centreOf(numbers[0]);
            const last = centreOf(numbers[numbers.length - 1]);
            timeline.style.setProperty(TRACK_LENGTH_PROPERTY, `${last - first}px`);
            if (!tracksScroll) return;

            const readingLine = window.innerHeight * READING_LINE;
            const progress = Math.min(1, Math.max(0, (readingLine - first) / (last - first)));
            timeline.style.setProperty(PROGRESS_PROPERTY, progress.toFixed(3));
            setLitCount(numbers.filter((number) => centreOf(number) <= readingLine).length);
        };
        // Scroll events can arrive several times a frame; measure once per frame.
        const scheduleUpdate = () => {
            if (!pendingFrame) pendingFrame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        return () => {
            cancelAnimationFrame(pendingFrame);
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
        };
    }, []);

    return (
        <div className="approach__timeline" ref={timelineRef}>
            {/* One continuous track behind the numbers, filled as the page scrolls. */}
            <div className="approach__track" aria-hidden="true">
                <div className="approach__track-fill" />
            </div>
            {steps.map((step, index) => (
                <div
                    key={step.number}
                    className={`approach__step ${index < litCount ? 'approach__step--lit' : ''}`}
                >
                    <div className="approach__step-number">
                        <span>{step.number}</span>
                    </div>
                    <div className="approach__step-content">
                        <h3 className="approach__step-title">{step.title}</h3>
                        <p className="approach__step-description">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApproachTimeline;
