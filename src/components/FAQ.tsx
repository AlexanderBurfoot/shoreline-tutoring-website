"use client";
import { useState } from 'react';
import './FAQ.css';
import ScrollReveal from './ScrollReveal';

const faqs = [
    {
        question: 'How does the free trial lesson work?',
        answer: 'Your first lesson is completely free with no obligation. We use it to understand your child\'s current level, identify specific areas for improvement, and show you exactly how our tutoring approach works. After the session, we\'ll provide honest feedback and a recommended learning plan.',
    },
    {
        question: 'What subjects and year levels do you cover?',
        answer: 'We offer one-on-one tutoring in Mathematics, Physics, Chemistry, Economics, and Business Studies for Years 7–12 (including HSC). We also provide targeted preparation programs for Selective High School entry, Opportunity Classes (OC), and NAPLAN across all tested year levels.',
    },
    {
        question: 'Are lessons online or in person?',
        answer: 'Lessons are conducted in-person at the student\'s home, at a public location such as a library, or online, whichever option suits each student best.',
    },
    {
        question: 'How long is each session?',
        answer: 'Each session length is tailored to the individual student. Factors including age, subject complexity, concentration, and how the student is progressing on the day, all shape how long each lesson is. Breaks can also be built into longer sessions to keep energy and concentration at their best. For students preparing for major exams, we can arrange extended or more frequent sessions as needed.',
    },
    {
        question: 'How often should my child have tutoring?',
        answer: 'We recommend at least once a week to build consistent momentum and keep concepts fresh between school lessons. That said, frequency is flexible, some students prefer with a single session per week, while others thrive from more regular tuition. We\'ll work with you to find a rhythm that suits your child\'s schedule and goals, and be flexible especially around exam periods.',
    },
    {
        question: 'Do you provide homework and notes after each session?',
        answer: 'Yes! After every session, your child receives notes summarising what was covered, along with targeted homework and practice questions. This ensures nothing is forgotten and gives students structured material to revise between sessions.',
    },
    {
        question: 'How do I track my child\'s progress?',
        answer: 'We keep parents informed every step of the way through a dedicated WhatsApp group that includes the student, parents, tutor, and tutor\'s assistant. You\'ll receive regular updates covering topics completed, areas of improvement, and upcoming focus areas, and we always welcome questions between sessions!',
    },
    {
        question: 'What is the difference between per-hour and bundle pricing?',
        answer: 'Our 20 Lesson Bundle offers a 10% discounted rate compared to per-hour pricing, it is ideal for students committed to consistent improvement over a term. Per-hour pricing gives you flexibility if you prefer to book on a session-by-session basis. Visit our Pricing page for full details.',
    },
];

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
                    <h2 className="section-title">Frequently Asked Questions</h2>
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
