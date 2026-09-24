"use client";
import { useState } from 'react';
import './FAQ.css';
import ScrollReveal from './ScrollReveal';
import { faqs } from '../data/faqData';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <ScrollReveal width="100%">
                    <span className="section-eyebrow">Common Questions</span>
                    <h2 className="section-title">Frequently Asked <span className="gold-text">Questions</span></h2>
                    <p className="section-subtitle">
                        Everything parents and students ask before getting started.
                    </p>
                </ScrollReveal>

                <div className="faq__list">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 60}>
                            <div className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}>
                                <h3 style={{ margin: 0, padding: 0 }}>
                                    <button
                                        className="faq__question"
                                        onClick={() => toggle(index)}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`faq-answer-${index}`}
                                        id={`faq-question-${index}`}
                                    >
                                        <span className="faq__question-text">{faq.question}</span>
                                        <span className="faq__chevron">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    id={`faq-answer-${index}`}
                                    className="faq__answer-wrapper"
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                >
                                    <p className="faq__answer">{faq.answer}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
