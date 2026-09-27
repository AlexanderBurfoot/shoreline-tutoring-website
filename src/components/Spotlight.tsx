"use client";
import { useEffect } from 'react';
import './Spotlight.css';

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/** The marker class a card opts in with; the glow itself is in Spotlight.css. */
const SPOTLIGHT_SELECTOR = '.spotlight';

/**
 * Tells whichever `.spotlight` card the pointer is over where the pointer is,
 * so its glow can follow. One listener serves every card on every page, and it
 * does nothing at all on touch screens or for visitors who ask for reduced
 * motion. Renders nothing.
 */
const Spotlight = () => {
    useEffect(() => {
        const hasFinePointer = window.matchMedia(FINE_POINTER_QUERY).matches;
        const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
        if (!hasFinePointer || prefersReducedMotion) return;

        let pendingFrame = 0;
        let latest: PointerEvent | null = null;

        const moveGlow = () => {
            pendingFrame = 0;
            if (!latest) return;
            const card = (latest.target as Element | null)?.closest<HTMLElement>(SPOTLIGHT_SELECTOR);
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--spot-x', `${latest.clientX - rect.left}px`);
            card.style.setProperty('--spot-y', `${latest.clientY - rect.top}px`);
        };

        // Pointer events can arrive several times a frame; the glow moves once per frame.
        const onPointerMove = (event: PointerEvent) => {
            latest = event;
            if (!pendingFrame) pendingFrame = requestAnimationFrame(moveGlow);
        };

        document.addEventListener('pointermove', onPointerMove, { passive: true });
        return () => {
            document.removeEventListener('pointermove', onPointerMove);
            cancelAnimationFrame(pendingFrame);
        };
    }, []);

    return null;
};

export default Spotlight;
