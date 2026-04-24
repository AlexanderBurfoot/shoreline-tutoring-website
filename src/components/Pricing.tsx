"use client";
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import './Pricing.css';

const PromoPopup = dynamic(() => import('./PromoPopup'), { ssr: false });

interface PricingRow {
    yearLevel: string;
    price: string;
}

const bundlePricing: PricingRow[] = [
    { yearLevel: 'Year 1 – Year 6 / Selective High School / Opportunity Classes', price: '$1600' },
    { yearLevel: 'Year 7 – Year 8', price: '$1,600' },
    { yearLevel: 'Year 9 – Year 10', price: '$1,600' },
    { yearLevel: 'Year 11', price: '$1,800' },
    { yearLevel: 'Year 12', price: '$2,000' },
];

const hourlyPricing: PricingRow[] = [
    { yearLevel: 'Year 1 – Year 6 / Selective High School / Opportunity Classes', price: '$90' },
    { yearLevel: 'Year 7 – Year 8', price: '$90' },
    { yearLevel: 'Year 9 – Year 10', price: '$90' },
    { yearLevel: 'Year 11', price: '$100' },
    { yearLevel: 'Year 12', price: '$110' },
];

const groupBundlePricing: PricingRow[] = [
    { yearLevel: 'Year 1 – Year 6 / Selective High School / Opportunity Classes', price: '$1000' },
    { yearLevel: 'Year 7 – Year 8', price: '$1000' },
    { yearLevel: 'Year 9 – Year 10', price: '$1000' },
    { yearLevel: 'Year 11', price: '$1200' },
    { yearLevel: 'Year 12', price: '$1400' },
];

const groupHourlyPricing: PricingRow[] = [
    { yearLevel: 'Year 1 – Year 6 / Selective High School / Opportunity Classes', price: '$60' },
    { yearLevel: 'Year 7 – Year 8', price: '$60' },
    { yearLevel: 'Year 9 – Year 10', price: '$60' },
    { yearLevel: 'Year 11', price: '$70' },
    { yearLevel: 'Year 12', price: '$80' },
];

const faqs = [
    {
        question: 'How long is each tutoring session?',
        answer: 'Each session is customised in length (one hour or longer) and if desired, structured breaks are implemented to maintain student focus and engagement.',
    },
    {
        question: 'What\'s included in the 20-lesson bundle?',
        answer: 'The bundle includes 20 hours worth of personalised lessons, progress tracking, tailored lesson plans, and exam preparation materials. It\'s the best value for committed students.',
    },
    {
        question: 'Is there a lock-in contract?',
        answer: 'The choice is yours. You can choose to pay for 20 hours in advanced for a 10% discount, or pay as you go, whichever works better for you.',
    },
    {
        question: 'Do you offer sibling discounts?',
        answer: 'Yes, we offer discounts for families enrolling multiple students. Please contact us for details on our family pricing.',
    },
    {
        question: 'What subjects do you offer?',
        answer: 'We offer tutoring in Mathematics, Physics, Chemistry, Economics, Business Studies, NAPLAN Preparation, as well as Selective High School exam and Opportunity Classes exam preparation.',
    },
    {
        question: 'How do I get started?',
        answer: 'Simply book a free trial lesson through our contact form, ring us at 0478 898 516 or email us at contact@shorelinetutoring.com.au. We\'ll assess your child\'s needs and recommend the best approach to achieve their academic goals. We know our results will speak for themselves.',
    },
];

const Pricing = () => {
    const router = useRouter();

    const handleGetStarted = useCallback(() => {
        router.push('/#contact');
    }, [router]);

    return (
        <div className="pricing-page">
            <PromoPopup />
            <section className="pricing-hero">
                <div className="pricing-hero__bg"></div>
                <div className="container pricing-hero__content">
                    <span className="section-eyebrow">Pricing</span>
                    <h1 className="pricing-hero__title">
                        Invest in Your <span className="gold-text">Academic Future</span>
                    </h1>
                    <p className="pricing-hero__subtitle">
                        Transparent pricing based on your year level. Every session includes personalised,
                        one-on-one tutoring tailored to your goals.
                    </p>
                </div>
            </section>

            {/* One-on-One Category Heading */}
            <section className="pricing-category-heading pricing-category-heading--alt">
                <div className="container pricing-category-heading__inner">
                    <span className="section-eyebrow">Option 1</span>
                    <h2 className="pricing-category-heading__title">One-on-One Tutoring</h2>
                    <p className="pricing-category-heading__text">
                        Dedicated sessions focused entirely on your child, at the pace and
                        depth they need.
                    </p>
                </div>
            </section>

            {/* 20-Lesson Bundle Pricing */}
            <section className="pricing-table-section pricing-table-section--alt section">
                <div className="container">
                    <div className="pricing-table-header">
                        <span className="pricing-table-badge">Best Value</span>
                        <h3 className="pricing-table-title">20-Lesson Bundle</h3>
                        <p className="pricing-table-subtitle">
                            Save more with our lesson bundles, the most popular choice for families committed to long-term results.
                        </p>
                    </div>
                    <div className="pricing-table-wrapper">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Year Level</th>
                                    <th>Bundle Price</th>
                                    <th>Per Lesson</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bundlePricing.map((row) => {
                                    const bundleNum = parseInt(row.price.replace(/[$,]/g, ''));
                                    const perLesson = `$${(bundleNum / 20).toFixed(0)}`;
                                    return (
                                        <tr key={row.yearLevel}>
                                            <td className="pricing-table__level">{row.yearLevel}</td>
                                            <td className="pricing-table__price">{row.price}</td>
                                            <td><span className="pricing-table__per-lesson">{perLesson}/hr</span></td>
                                            <td className="pricing-table__action">
                                                <button onClick={handleGetStarted} className="btn btn-primary pricing-table__btn">
                                                    Get Started
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Per-Hour Pricing */}
            <section className="pricing-table-section pricing-table-section--alt section">
                <div className="container">
                    <div className="pricing-table-header">
                        <span className="pricing-table-badge pricing-table-badge--secondary">Flexible</span>
                        <h3 className="pricing-table-title">Per-Hour Pricing</h3>
                        <p className="pricing-table-subtitle">
                            Prefer flexibility? Pay as you go with our per-hour rates, no commitment required.
                        </p>
                    </div>
                    <div className="pricing-table-wrapper">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Year Level</th>
                                    <th>Hourly Rate</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {hourlyPricing.map((row) => (
                                    <tr key={row.yearLevel}>
                                        <td className="pricing-table__level">{row.yearLevel}</td>
                                        <td className="pricing-table__price">{row.price}/hr</td>
                                        <td className="pricing-table__action">
                                            <button onClick={handleGetStarted} className="btn btn-secondary pricing-table__btn">
                                                Get Started
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Group Classes Category Heading */}
            <section className="pricing-category-heading">
                <div className="container pricing-category-heading__inner">
                    <span className="section-eyebrow">Option 2</span>
                    <h2 className="pricing-category-heading__title">Small-Group Classes</h2>
                    <p className="pricing-category-heading__text">
                        Sessions shared with a small number of peers working at a similar level,
                        at a lower per-student rate.
                    </p>
                </div>
            </section>

            {/* Group Class 20-Lesson Bundle */}
            <section className="pricing-table-section section">
                <div className="container">
                    <div className="pricing-table-header">
                        <span className="pricing-table-badge">Best Value</span>
                        <h3 className="pricing-table-title">20-Lesson Group Bundle</h3>
                        <p className="pricing-table-subtitle">
                            Save more with our group-class bundles. The most popular choice for
                            families comfortable with peer-based learning.
                        </p>
                    </div>
                    <div className="pricing-table-wrapper">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Year Level</th>
                                    <th>Bundle Price</th>
                                    <th>Per Lesson</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupBundlePricing.map((row) => {
                                    const bundleNum = parseInt(row.price.replace(/[$,]/g, ''));
                                    const perLesson = `$${(bundleNum / 20).toFixed(0)}`;
                                    return (
                                        <tr key={row.yearLevel}>
                                            <td className="pricing-table__level">{row.yearLevel}</td>
                                            <td className="pricing-table__price">{row.price}</td>
                                            <td><span className="pricing-table__per-lesson">{perLesson}/hr</span></td>
                                            <td className="pricing-table__action">
                                                <button onClick={handleGetStarted} className="btn btn-primary pricing-table__btn">
                                                    Get Started
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Group Class Per-Hour Pricing */}
            <section className="pricing-table-section section">
                <div className="container">
                    <div className="pricing-table-header">
                        <span className="pricing-table-badge pricing-table-badge--secondary">Flexible</span>
                        <h3 className="pricing-table-title">Group Per-Hour Pricing</h3>
                        <p className="pricing-table-subtitle">
                            Prefer flexibility with the group-class rate? Pay as you go with our
                            per-hour group rates, no commitment required.
                        </p>
                    </div>
                    <div className="pricing-table-wrapper">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Year Level</th>
                                    <th>Hourly Rate</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupHourlyPricing.map((row) => (
                                    <tr key={row.yearLevel}>
                                        <td className="pricing-table__level">{row.yearLevel}</td>
                                        <td className="pricing-table__price">{row.price}/hr</td>
                                        <td className="pricing-table__action">
                                            <button onClick={handleGetStarted} className="btn btn-secondary pricing-table__btn">
                                                Get Started
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Value Proposition Banner */}
            <section className="pricing-value">
                <div className="container">
                    <div className="pricing-value__inner">
                        <div className="pricing-value__item">
                            <span className="pricing-value__icon">🎯</span>
                            <div>
                                <strong>Free Trial Lesson</strong>
                                <p>Experience our approach risk-free before committing.</p>
                            </div>
                        </div>
                        <div className="pricing-value__divider"></div>
                        <div className="pricing-value__item">
                            <span className="pricing-value__icon">📋</span>
                            <div>
                                <strong>No Lock-in Contracts</strong>
                                <p>Flexible term-by-term arrangements, cancel anytime.</p>
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
                            Book a free trial lesson and discover the Shoreline difference. No obligation, no pressure; just results.
                        </p>
                        <button onClick={handleGetStarted} className="btn btn-primary pricing-bottom-cta__btn">
                            Book Your Free Trial Lesson
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