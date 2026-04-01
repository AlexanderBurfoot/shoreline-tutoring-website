import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import './ThankYou.css';

export default function ThankYouPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Thank You - Shoreline Tutoring",
    "url": "https://shorelinetutoring.com.au/thank-you",
  };

  return (
    <>
      <SEO
        title="Thank You | Shoreline Tutoring"
        description="Thank you for reaching out to Shoreline Tutoring. We will be in contact shortly."
        canonical="/thank-you"
        schema={schema}
      />
      <main className="thank-you">
        <div className="thank-you__background">
          <div className="thank-you__pattern"></div>
        </div>

        <div className="container thank-you__container">
          <div className="thank-you__content">
            <div className="thank-you__icon-wrapper">
              <svg className="thank-you__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <span className="thank-you__label">Submission Successful</span>
            <h1 className="thank-you__title">
              Thank you for <span className="thank-you__title-accent">reaching out!</span>
            </h1>
            <p className="thank-you__description">
              We have received your enquiry and our team will be in touch with you shortly to discuss your academic goals and organize your free trial lesson.
            </p>
            
            <div className="thank-you__actions">
              <Link href="/" className="btn btn-primary thank-you__btn">
                Return to Homepage
              </Link>
            </div>
            
            <div className="thank-you__contact">
              <p>Need immediate assistance?</p>
              <a href="tel:+61478898516" className="thank-you__contact-link">Call us at 0478 898 516</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
