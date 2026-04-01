import Link from 'next/link';
import SEO from '../../components/SEO';
import './ThankYou.css';

export const metadata = {
  title: 'Thank You | Shoreline Tutoring',
  description: 'Thank you for reaching out to Shoreline Tutoring. We will be in contact shortly.',
};

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
        {/* Background */}
        <div className="thank-you__bg">
          <div className="thank-you__bg-gradient"></div>
          <div className="thank-you__bg-dots"></div>
          <div className="thank-you__bg-glow thank-you__bg-glow--1"></div>
          <div className="thank-you__bg-glow thank-you__bg-glow--2"></div>
        </div>

        <div className="container thank-you__container">
          {/* Main Card */}
          <div className="thank-you__card">
            <div className="thank-you__card-shine"></div>

            {/* Success Badge */}
            <div className="thank-you__badge">
              <div className="thank-you__badge-ring"></div>
              <div className="thank-you__badge-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            <span className="thank-you__label">Enquiry Received</span>

            <h1 className="thank-you__title">
              Thank you for choosing
              <span className="thank-you__title-accent"> Shoreline Tutoring</span>
            </h1>

            <p className="thank-you__subtitle">
              Your enquiry has been received. A member of our team will personally review your details and be in touch shortly to discuss your academic goals.
            </p>

            {/* What Happens Next Timeline */}
            <div className="thank-you__timeline">
              <h2 className="thank-you__timeline-heading">What happens next</h2>
              <div className="thank-you__steps">
                <div className="thank-you__step">
                  <div className="thank-you__step-number">1</div>
                  <div className="thank-you__step-content">
                    <h3>We review your enquiry</h3>
                    <p>Our team will carefully review your academic goals and subject preferences.</p>
                  </div>
                </div>
                <div className="thank-you__step">
                  <div className="thank-you__step-number">2</div>
                  <div className="thank-you__step-content">
                    <h3>Personal consultation</h3>
                    <p>We&apos;ll reach out within 24 hours to discuss the best tutor match for you.</p>
                  </div>
                </div>
                <div className="thank-you__step">
                  <div className="thank-you__step-number">3</div>
                  <div className="thank-you__step-content">
                    <h3>Free trial lesson</h3>
                    <p>Experience a complimentary session tailored to your specific needs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="thank-you__actions">
              <Link href="/" className="btn btn-primary thank-you__btn-home">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Return to Homepage
              </Link>
              <Link href="/resources" className="thank-you__btn-resources">
                Browse Study Resources
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="thank-you__contact-bar">
            <p>Need to speak with someone right away?</p>
            <div className="thank-you__contact-links">
              <a href="tel:+61478898516" className="thank-you__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                0478 898 516
              </a>
              <a href="mailto:contact@shorelinetutoring.com.au" className="thank-you__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@shorelinetutoring.com.au
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
