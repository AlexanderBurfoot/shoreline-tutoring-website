"use client";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import './PromoPopup.css';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const dismissed = sessionStorage.getItem('promo_dismissed');
        if (dismissed) return;

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('promo_dismissed', 'true');
        }, 300);
    };

    const handleClaim = () => {
        sessionStorage.setItem('promo_dismissed', 'true');
        router.push('/');
        setTimeout(() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
    };

    if (!isVisible) return null;

    return createPortal(
        <>
            <div className={`promo-overlay ${isClosing ? 'promo-overlay--closing' : ''}`} onClick={handleClose} />
            <div className={`promo-popup ${isClosing ? 'promo-popup--closing' : ''}`}>
                <button className="promo-popup__close" onClick={handleClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="promo-popup__badge">Limited Time</div>
                <div className="promo-popup__icon">
                    <img src="/easter-egg.png" alt="Easter Egg with Study Cap" className="promo-popup__icon-img" />
                </div>

                <h3 className="promo-popup__title">Easter Special</h3>

                <div className="promo-popup__discount">
                    <span className="promo-popup__percent">10%</span>
                    <span className="promo-popup__off">OFF</span>
                </div>

                <p className="promo-popup__text">
                    Hop into better grades this Easter! Sign up now and save <strong>10%</strong>{' '}on your first paid lesson.
                    Limited spots available, so don&apos;t miss out!
                </p>

                <button className="btn btn-primary promo-popup__cta" onClick={handleClaim}>
                    Claim Your Discount
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>

                <p className="promo-popup__fine-print">
                    Offer valid for new enrolments this term only.
                </p>
            </div>
        </>,
        document.body
    );
};

export default PromoPopup;