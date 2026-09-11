"use client";
import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './Pricing.css';
import {
    GROUP_CLASSES_PATH,
    LAUNCH_DATE_LONG,
    LESSON_TEACHING_HOURS,
    MATHS_COURSES,
    MAX_CLASS_SIZE,
    PROGRAM_HOURLY_RATE,
    PROGRAM_PRICE,
    PROGRAM_LENGTH,
    PROGRAM_LENGTH_TITLE,
} from '../data/groupClassLaunch';
import {
    LESSONS_PER_BUNDLE,
    bundlePricing,
    hourlyPricing,
    perLessonRate,
    type PricingRow,
} from '../data/pricingData';

const faqs = [
    {
        question: 'How long is each tutoring session?',
        answer: 'Each session is customised in length (one hour or longer) and if desired, structured breaks are implemented to maintain student focus and engagement.',
    },
    {
        question: `What's included in the ${LESSONS_PER_BUNDLE}-lesson bundle?`,
        answer: `The bundle includes ${LESSONS_PER_BUNDLE} hours worth of personalised lessons, progress tracking, tailored lesson plans, and exam preparation materials. It's the best value for committed students.`,
    },
    {
        question: 'Is there a lock-in contract?',
        answer: `The choice is yours. You can choose to pay for ${LESSONS_PER_BUNDLE} hours in advanced for a 10% discount, or pay as you go, whichever works better for you.`,
    },
    {
        question: 'Who are the small-group classes for?',
        answer: `Small-group classes are a ${PROGRAM_LENGTH} HSC program for Year 12 Mathematics Standard, Advanced and Extension 1, starting ${LAUNCH_DATE_LONG}. Each course runs as its own class, capped at ${MAX_CLASS_SIZE} students. Week 1 is free. One-on-one tutoring remains available across Years 1 to 12 in all our subjects.`,
    },
    {
        question: 'Do you offer sibling discounts?',
        answer: 'Yes, we offer discounts for families enrolling multiple students. Please contact us for details on our family pricing.',
    },
    {
        question: 'What subjects do you offer?',
        answer: 'We offer tutoring in English, Mathematics, Physics, Chemistry, Economics, Business Studies, NAPLAN Preparation, as well as Selective High School exam and Opportunity Classes exam preparation.',
    },
    {
        question: 'How do I get started?',
        answer: 'Simply book a free trial lesson through our contact form, ring us at 0452 360 688 or email us at contact@shorelinetutoring.com.au. We\'ll assess your child\'s needs and recommend the best approach to achieve their academic goals. We know our results will speak for themselves.',
    },
];

interface PricingTableProps {
    rows: PricingRow[];
    /** Bundle tables add a derived per-lesson column; hourly tables do not. */
    showPerLesson: boolean;
    priceHeading: string;
    /** Applies the group tables' navy-and-gold treatment. */
    isGroup?: boolean;
    buttonClass: string;
    onGetStarted: () => void;
}

const PricingTable = ({
    rows,
    showPerLesson,
    priceHeading,
    isGroup = false,
    buttonClass,
    onGetStarted,
}: PricingTableProps) => (
    <div className={`pricing-table-wrapper ${isGroup ? 'pricing-table-wrapper--group' : ''}`}>
        <table className={`pricing-table ${isGroup ? 'pricing-table--group' : ''}`}>
            <thead>
                <tr>
                    <th>Year Level</th>
                    <th>{priceHeading}</th>
                    {showPerLesson && <th>Per Lesson</th>}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.yearLevel}>
                        <td className="pricing-table__level">{row.yearLevel}</td>
                        <td className="pricing-table__price">
                            {showPerLesson ? row.price : `${row.price}/hr`}
                        </td>
                        {showPerLesson && (
                            <td>
                                <span className="pricing-table__per-lesson">
                                    {perLessonRate(row.price)}/hr
                                </span>
                            </td>
                        )}
                        <td className="pricing-table__action">
                            <button onClick={onGetStarted} className={`btn ${buttonClass} pricing-table__btn`}>
                                Get Started
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Pricing = () => {
    const router = useRouter();

    const handleGetStarted = useCallback(() => {
        router.push('/#contact');
    }, [router]);

    return (
        <div className="pricing-page">
            <section className="pricing-hero">
                <div className="pricing-hero__bg"></div>
                <div className="container pricing-hero__content">
                    <span className="section-eyebrow">Pricing</span>
                    <h1 className="pricing-hero__title">
                        Invest in Your <span className="gold-text">Academic Future</span>
                    </h1>
                    <p className="pricing-hero__subtitle">
                        Transparent pricing. One-on-one tutoring across Years 1 to 12, and a
                        {' '}{PROGRAM_LENGTH} small-group HSC program for Year 12 Mathematics.
                    </p>
                </div>
            </section>

            {/* Year 12 maths program. Group leads the page for the launch;
                swap the two category blocks to put one-on-one first. */}
            <section className="pricing-category-heading">
                <div className="container pricing-category-heading__inner">
                    <span className="section-eyebrow">Option 1</span>
                    <h2 className="pricing-category-heading__title">Year 12 HSC Maths Program</h2>
                    <p className="pricing-category-heading__text">
                        A {PROGRAM_LENGTH} small-group program covering the whole Year 12 course
                        before the HSC, for Mathematics Standard, Advanced and Extension 1. Each
                        course runs as its own class of no more than {MAX_CLASS_SIZE} students,
                        with one {LESSON_TEACHING_HOURS}-hour lesson a week starting{' '}
                        {LAUNCH_DATE_LONG}.
                    </p>
                </div>
            </section>

            <section className="pricing-table-section section">
                <div className="container">
                    <div className="pricing-table-header">
                        <span className="pricing-table-badge">Week 1 free</span>
                        <h3 className="pricing-table-title">{PROGRAM_LENGTH_TITLE} Program</h3>
                        <p className="pricing-table-subtitle">
                            One price for the whole program, the same whether you attend in person
                            on Saturdays or online on Sundays. Sit week 1 free and only pay if you
                            decide to stay.
                        </p>
                    </div>

                    <div className="pricing-program">
                        <div className="pricing-program__price">
                            {PROGRAM_PRICE}
                            <small>for the rest of the {PROGRAM_LENGTH} program · {PROGRAM_HOURLY_RATE} an hour · week 1 free</small>
                        </div>
                        <ul className="pricing-program__courses">
                            {MATHS_COURSES.map((course) => (
                                <li key={course.id} className="pricing-program__course">
                                    <span className="pricing-program__check" aria-hidden="true">✓</span>
                                    Year 12 {course.name}
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleGetStarted} className="btn btn-primary pricing-program__btn">
                            Reserve a Free Seat
                        </button>
                        <Link href={GROUP_CLASSES_PATH} className="pricing-program__link">
                            See what the program covers
                        </Link>
                    </div>
                </div>
            </section>

            {/* One-on-One Category Heading */}
            <section className="pricing-category-heading pricing-category-heading--alt">
                <div className="container pricing-category-heading__inner">
                    <span className="section-eyebrow">Option 2</span>
                    <h2 className="pricing-category-heading__title">One-on-One Tutoring</h2>
                    <p className="pricing-category-heading__text">
                        Dedicated sessions focused entirely on your child, at the pace and
                        depth they need.
                    </p>
                </div>
            </section>

            {/* One-on-One Bundle */}
            <section className="pricing-table-section pricing-table-section--alt section">
                <div className="container">
                    <div className="pricing-table-header">
                        <span className="pricing-table-badge">Best Value</span>
                        <h3 className="pricing-table-title">{LESSONS_PER_BUNDLE}-Lesson Bundle</h3>
                        <p className="pricing-table-subtitle">
                            Save more with our lesson bundles.
                            Includes a highly individualised 11 week structured study plan,
                            making this the most popular choice for families
                            committed to long-term results.
                        </p>
                    </div>
                    <PricingTable
                        rows={bundlePricing}
                        showPerLesson
                        priceHeading="Bundle Price"
                        buttonClass="btn-primary"
                        onGetStarted={handleGetStarted}
                    />
                </div>
            </section>

            {/* One-on-One Per-Hour */}
            <section className="pricing-table-section pricing-table-section--alt section">
                <div className="container">
                    <div className="pricing-table-header">
                        <span className="pricing-table-badge pricing-table-badge--secondary">Flexible</span>
                        <h3 className="pricing-table-title">Per-Hour Pricing</h3>
                        <p className="pricing-table-subtitle">
                            Prefer flexibility? Pay as you go with our per-hour rates, no commitment required.
                        </p>
                    </div>
                    <PricingTable
                        rows={hourlyPricing}
                        showPerLesson={false}
                        priceHeading="Hourly Rate"
                        buttonClass="btn-secondary"
                        onGetStarted={handleGetStarted}
                    />
                </div>
            </section>

            {/* Value Proposition Banner */}
            <section className="pricing-value">
                <div className="container">
                    <div className="pricing-value__inner">
                        <div className="pricing-value__item">
                            <span className="pricing-value__icon">🎯</span>
                            <div>
                                <strong>Free First Session</strong>
                                <p>Try either format risk-free before committing.</p>
                            </div>
                        </div>
                        <div className="pricing-value__divider"></div>
                        <div className="pricing-value__item">
                            <span className="pricing-value__icon">📋</span>
                            <div>
                                <strong>Personalised Homework</strong>
                                <p>Homework is created after each lesson, targeting weak areas.</p>
                            </div>
                        </div>
                        <div className="pricing-value__divider"></div>
                        <div className="pricing-value__item">
                            <span className="pricing-value__icon">👨‍👩‍👧‍👦</span>
                            <div>
                                <strong>Family Discounts</strong>
                                <p>Special rates for families enrolling multiple students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="pricing-faq section">
                <div className="container">
                    <span className="section-eyebrow">Questions & Answers</span>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">
                        Everything you need to know about our tutoring services and pricing.
                    </p>
                    <div className="pricing-faq__grid">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="pricing-faq__item">
                                <h4 className="pricing-faq__question">{faq.question}</h4>
                                <p className="pricing-faq__answer">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="pricing-bottom-cta">
                <div className="container">
                    <div className="pricing-bottom-cta__inner">
                        <h1 className="pricing-bottom-cta__title">
                            Ready to Get Started?
                        </h1>
                        <p className="pricing-bottom-cta__text">
                            Book a free session in whichever format suits, one-on-one or small-group, and discover the Shoreline difference. No obligation, no pressure; just results.
                        </p>
                        <button onClick={handleGetStarted} className="btn btn-primary pricing-bottom-cta__btn">
                            Book Your Free Session
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
