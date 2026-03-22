import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState<'enter' | 'exit'>('enter');
    const isFirstRender = useRef(true);

    useEffect(() => {
        // Skip animation on first render
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // Start exit animation
        setTimeout(() => setTransitionStage('exit'), 0);

        const timeout = setTimeout(() => {
            // Swap content and scroll to top
            setDisplayChildren(children);
            if (!location.hash) {
                window.scrollTo(0, 0);
            }
            setTransitionStage('enter');
        }, 250); // Match CSS exit duration

        return () => clearTimeout(timeout);
    }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={`page-transition page-transition--${transitionStage}`}>
            {displayChildren}
        </div>
    );
};

export default PageTransition;
