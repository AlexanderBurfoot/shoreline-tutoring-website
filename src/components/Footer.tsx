"use client";
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__brand">
                        <a href="#" className="footer__logo">
                            <span className="footer__logo-text">Shoreline</span>
                            <span className="footer__logo-accent">Tutoring</span>
                        </a>
                        <p className="footer__tagline">
                            EXCLUSIVE • INDIVIDUALISED • EFFECTIVE
                        </p>
                        <p className="footer__description">
                            Premium one-on-one tutoring designed to dramatically improve student results
                            through constant support and personalized attention.
                        </p>
                    </div>

                    <div className="footer__links">
                        <div className="footer__column">
                            <h4 className="footer__heading">Quick Links</h4>
                            <ul className="footer__list">
                                <li><Link href="/#about">About Us</Link></li>
                                <li><Link href="/#services">Services</Link></li>
                                <li><Link href="/#approach">Our Approach</Link></li>
                                <li><Link href="/#testimonials">Our Promise</Link></li>
                                <li><Link href="/#contact">Contact</Link></li>
                                <li><Link href="/resources">Resources</Link></li>
                                <li><Link href="/pricing">Pricing</Link></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__heading">Subjects</h4>
                            <ul className="footer__list">
                                <li><a href="/subjects/english">English</a></li>
                                <li><a href="/subjects/mathematics">Mathematics</a></li>
                                <li><a href="/subjects/physics">Physics</a></li>
                                <li><a href="/subjects/chemistry">Chemistry</a></li>
                                <li><a href="/subjects/economics">Economics</a></li>
                                <li><a href="/subjects/business-studies">Business Studies</a></li>
                                <li><a href="/subjects/commerce">Commerce</a></li>
                                <li><a href="/subjects/selective-high-school">Selective High School Exam</a></li>
                                <li><a href="/subjects/oc-prep">OC Exam</a></li>
                                <li><a href="/subjects/naplan">NAPLAN Preparation</a></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__heading">Contact</h4>
                            <ul className="footer__list footer__contact-list">
                                <li>
                                    <span className="footer__icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </span>
                                    Sydney, Australia
                                </li>
                                <li>
                                    <span className="footer__icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </span>
                                    <a href="tel:+61478898516">0478 898 516</a>
                                </li>
                                <li>
                                    <span className="footer__icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    </span>
                                    <a href="mailto:contact@shorelinetutoring.com.au">contact@shorelinetutoring.com.au</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Shoreline Tutoring. All rights reserved.
                    </p>
                    {/*
                    <div className="footer__social">
                        <a href="#" className="footer__social-link" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a href="#" className="footer__social-link" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                        <a href="#" className="footer__social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </a>
                    </div>
                    */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
