"use client";
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setScrollProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollProgress);

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollProgress}%`,
                height: '4px',
                background: 'var(--color-gold-gradient)',
                zIndex: 9999,
                transition: 'width 0.1s ease-out',
                boxShadow: '0 0 10px var(--color-gold-primary)'
            }}
        />
    );
};

export default ScrollProgress;
