import { useEffect, useRef, useState, type TouchEvent } from 'react';

/** Movement before a touch is judged to be heading sideways or up and down. */
const AXIS_LOCK_PX = 10;

/** Sideways distance at which letting go counts as a swipe. */
const SWIPE_THRESHOLD_PX = 50;

/** How closely the element follows the finger; below 1 it feels weighted. */
const FOLLOW_RATIO = 0.5;

interface SwipeOptions {
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    /** Called when a finger lands, e.g. to pause an auto-advancing carousel. */
    onTouchBegin?: () => void;
    /** Called when the finger lifts, whether or not it swiped. */
    onTouchFinish?: () => void;
    /**
     * How long a swiped element stays where it was let go before returning to
     * rest, so it can fade out in place rather than sliding back first.
     */
    releaseDelayMs: number;
}

/**
 * Horizontal touch swiping for a single element. Returns the handlers to
 * spread onto it and the offset to draw it at while it is being dragged.
 * Up-and-down drags are left alone so the page still scrolls normally; pair
 * this with `touch-action: pan-y` on the element.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight, onTouchBegin, onTouchFinish, releaseDelayMs }: SwipeOptions) {
    const start = useRef<{ x: number; y: number } | null>(null);
    const axis = useRef<'x' | 'y' | null>(null);
    const lastDeltaX = useRef(0);
    const releaseTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const [deltaX, setDeltaX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => () => clearTimeout(releaseTimer.current), []);

    const onTouchStart = (event: TouchEvent) => {
        const touch = event.touches[0];
        start.current = { x: touch.clientX, y: touch.clientY };
        axis.current = null;
        lastDeltaX.current = 0;
        onTouchBegin?.();
    };

    const onTouchMove = (event: TouchEvent) => {
        if (!start.current) return;
        const touch = event.touches[0];
        const dx = touch.clientX - start.current.x;
        const dy = touch.clientY - start.current.y;

        if (!axis.current) {
            if (Math.max(Math.abs(dx), Math.abs(dy)) < AXIS_LOCK_PX) return;
            axis.current = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        }
        if (axis.current !== 'x') return;

        lastDeltaX.current = dx;
        setIsDragging(true);
        setDeltaX(dx);
    };

    const onTouchEnd = () => {
        const dx = lastDeltaX.current;
        const swiped = axis.current === 'x' && Math.abs(dx) >= SWIPE_THRESHOLD_PX;

        if (swiped) {
            if (dx < 0) onSwipeLeft();
            else onSwipeRight();
            releaseTimer.current = setTimeout(() => setDeltaX(0), releaseDelayMs);
        } else {
            setDeltaX(0);
        }

        setIsDragging(false);
        start.current = null;
        axis.current = null;
        onTouchFinish?.();
    };

    return {
        offsetX: deltaX * FOLLOW_RATIO,
        isDragging,
        handlers: { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel: onTouchEnd },
    };
}
