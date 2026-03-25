"use client";
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

const ScrollReveal = ({ children, width = 'fit-content', delay = 0 }: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add a small delay for staggered effects if needed
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            style={{
                width,
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}
            className="scroll-reveal"
        >
            <style>{`
                .scroll-reveal.visible {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
            {children}
        </div>
    );
};

export default ScrollReveal;
