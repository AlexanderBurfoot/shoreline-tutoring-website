"use client";
import { useState, type FormEvent } from 'react';
import './CTA.css';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subjects: string[];
    message: string;
}

const SUBJECTS = [
    'Mathematics', 'Physics', 'Chemistry', 'Economics',
    'Business Studies', 'Selective High School Exam', 'Opportunity Classes Exam', 'NAPLAN Preparation', 'Other',
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const CTA = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subjects: [],
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubjectToggle = (subject: string) => {
        setFormData(prev => ({
            ...prev,
            subjects: prev.subjects.includes(subject)
                ? prev.subjects.filter(s => s !== subject)
                : [...prev.subjects, subject],
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        if (formData.subjects.length === 0) {
            setStatus('error');
            setErrorMessage('Please select at least one subject of interest.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subjects: [], message: '' });
        } catch (err) {
            setStatus('error');
            setErrorMessage(
                err instanceof Error
                    ? err.message
                    : 'Something went wrong. Please try emailing us directly.'
            );
        }
    };

    return (
        <section className="cta section" id="contact">
            <div className="cta__background">
                <div className="cta__pattern"></div>
            </div>

            <div className="container">
                <div className="cta__content">
                    <span className="cta__label">Start Your Journey</span>
                    <h2 className="cta__title">
                        Ready to Unlock Your
                        <span className="cta__title-accent"> Academic Potential?</span>
                    </h2>
                    <p className="cta__description">
                        Book a free trial lesson today and discover how our exclusive, individualized
                        approach can transform your academic journey. Limited spots available.
                    </p>

                    {status === 'success' ? (
                        <div className="cta__success">
                            <div className="cta__success-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h3 className="cta__success-title">Thank You!</h3>
                            <p className="cta__success-message">
                                Your enquiry has been sent successfully. We'll be in touch within 24 hours to arrange your free trial lesson.
                            </p>
                            <button
                                className="btn btn-primary cta__submit"
                                onClick={() => setStatus('idle')}
                                type="button"
                            >
                                Send Another Enquiry
                            </button>
                        </div>
                    ) : (
                        <form className="cta__form" onSubmit={handleSubmit}>
                            <div className="cta__form-row cta__form-row--two">
                                <div className="cta__input-group">
                                    <label htmlFor="name" className="cta__label-text">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="cta__input"
                                        placeholder="John Smith"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="cta__input-group">
                                    <label htmlFor="phone" className="cta__label-text">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="cta__input"
                                        placeholder="0400 000 000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="cta__input-group cta__input-group--full">
                                <label htmlFor="email" className="cta__label-text">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="cta__input"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="cta__input-group cta__input-group--full">
                                <label className="cta__label-text">Subjects of Interest</label>
                                <div className="cta__subjects-grid">
                                    {SUBJECTS.map(subject => {
                                        const isActive = formData.subjects.includes(subject);
                                        return (
                                            <button
                                                key={subject}
                                                type="button"
                                                className={`cta__subject-chip ${isActive ? 'cta__subject-chip--active' : ''}`}
                                                onClick={() => handleSubjectToggle(subject)}
                                                aria-pressed={isActive}
                                            >
                                                {isActive && <span className="cta__chip-check">✓</span>}
                                                {subject}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="cta__input-group cta__input-group--full">
                                <label htmlFor="message" className="cta__label-text">Tell us about your goals</label>
                                <textarea
                                    id="message"
                                    className="cta__input cta__textarea"
                                    placeholder="Share your academic goals and any specific areas you'd like to improve..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            {status === 'error' && (
                                <div className="cta__error">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="15" y1="9" x2="9" y2="15" />
                                        <line x1="9" y1="9" x2="15" y2="15" />
                                    </svg>
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className={`btn btn-primary cta__submit ${status === 'submitting' ? 'cta__submit--loading' : ''}`}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <span className="cta__spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Book Your Free Trial Lesson
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    <div className="cta__contact-options">
                        <p className="cta__or">Or reach out directly</p>
                        <div className="cta__options">
                            <a href="tel:+61490222817" className="cta__option">
                                <span className="cta__option-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </span>
                                <span>0478 898 516</span>
                            </a>
                            <a href="mailto:contact@shorelinetutoring.com.au" className="cta__option">
                                <span className="cta__option-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                                <span>contact@shorelinetutoring.com.au</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
