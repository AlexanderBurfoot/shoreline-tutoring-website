"use client";
import Link from 'next/link';
import './NotFound.css';
import SEO from './SEO';

const NotFound = () => {
    return (
        <main className="not-found">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Return to Shoreline Tutoring's homepage to find what you need."
            />
            <div className="not-found__container">
                <span className="not-found__code">404</span>
                <h1 className="not-found__title">Page Not Found</h1>
                <p className="not-found__message">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <div className="not-found__actions">
                    <Link href="/" className="not-found__btn not-found__btn--primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Back to Home
                    </Link>
                    <a href="#contact" onClick={() => window.location.href = '/#contact'} className="not-found__btn not-found__btn--secondary">
                        Contact Us
                    </a>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
