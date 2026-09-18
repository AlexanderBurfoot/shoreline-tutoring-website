"use client";
import { useEffect, useRef } from 'react';
import type { ReactNode, Ref } from 'react';
import './ParallaxScene.css';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/** Custom property the layers inside a scene read their offset from. */
const PROGRESS_PROPERTY = '--parallax-progress';

/** Decimal places kept when writing progress, enough for sub-pixel movement. */
const PROGRESS_PRECISION = 3;

interface ParallaxSceneProps {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'section';
    id?: string;
}

/**
 * How far the element is through its pass across the viewport: -1 as its
 * centre enters at the bottom, 0 with its centre at the viewport's centre,
 * and 1 as its centre leaves at the top.
 */
function measureProgress(element: HTMLElement): number {
    const rect = element.getBoundingClientRect();
    const halfViewport = window.innerHeight / 2;
    const elementCentre = rect.top + rect.height / 2;
    const travel = halfViewport + rect.height / 2;
    const progress = (halfViewport - elementCentre) / travel;
    return Math.min(1, Math.max(-1, progress));
}

/**
 * Wraps a group of `.parallax-layer` elements and keeps their shared scroll
 * progress up to date. Each layer's movement (its depth) is set in CSS, so
 * this component never needs to know what it contains. Visitors who ask for
 * reduced motion get the static layout, as no progress is ever written.
 */
const ParallaxScene = ({ children, className, as: Tag = 'div', id }: ParallaxSceneProps) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const scene = ref.current;
        if (!scene || window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

        let pendingFrame = 0;
        const update = () => {
            pendingFrame = 0;
            scene.style.setProperty(PROGRESS_PROPERTY, measureProgress(scene).toFixed(PROGRESS_PRECISION));
        };
        // Scroll events can fire several times per frame; measure once per frame.
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
        <Tag ref={ref as Ref<HTMLDivElement>} className={className} id={id}>
            {children}
        </Tag>
    );
};

export default ParallaxScene;
