"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import './Header.css';
const logo = '/ShorelineLogo.png';
import { subjects } from '../data/subjectData';
import subjectIcons from './SubjectIcons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const pathname = usePathname();
  const isHome = pathname === '/';
  const isSubjectPage = pathname.startsWith('/subjects');
  const isPricingPage = pathname === '/pricing';
  const isResourcesPage = pathname.startsWith('/resources');
  const isThankYouPage = pathname === '/thank-you';
  const isDarkHeader = isSubjectPage || isPricingPage || isResourcesPage || isThankYouPage;

  // Handle hash-based navigation: scroll on same page, or navigate home then scroll
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isHome) {
      window.history.pushState(null, '', `/#${sectionId}`);
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Simply navigate to home with the hash. App.tsx will handle the scrolling globally.
      router.push(`/#${sectionId}`);
    }
  }, [isHome, router]);

  const navLinks = [
    { href: 'about', label: 'About' },
    { href: 'approach', label: 'Our Approach' },
    { href: 'testimonials', label: 'Our Promise' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isDarkHeader && !isScrolled ? 'header--dark' : ''} ${''} ${isMobileMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="header__container container">
        <Link href="/" className="header__logo">
          <img src={logo} alt="Shoreline Tutoring" className="header__logo-image" />
          <span className="header__logo-text">Shoreline</span>
          <span className="header__logo-accent">Tutoring</span>
        </Link>

        <nav id="mobile-navigation" className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {/* About link */}
            <li className="header__nav-item" style={{ '--item-index': 0 } as React.CSSProperties}>
              <a
                href="#about"
                className="header__nav-link"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>

            {/* Subjects dropdown */}
            <li
              className="header__nav-item header__nav-item--dropdown"
              style={{ '--item-index': 1 } as React.CSSProperties}
              onMouseEnter={() => setIsSubjectsOpen(true)}
              onMouseLeave={() => setIsSubjectsOpen(false)}
            >
              <button
                className="header__nav-link header__nav-link--dropdown"
                onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
                aria-expanded={isSubjectsOpen}
              >
                Subjects
                <svg className={`header__dropdown-chevron ${isSubjectsOpen ? 'header__dropdown-chevron--open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div className={`header__dropdown ${isSubjectsOpen ? 'header__dropdown--open' : ''}`}>
                <div className="header__dropdown-inner">
                  {subjects.map((subject) => (
                    <Link
                      key={subject.slug}
                      href={`/subjects/${subject.slug}`}
                      className="header__dropdown-item"
                      onClick={() => {
                        setIsSubjectsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span className="header__dropdown-icon">{subjectIcons[subject.slug] ?? subject.icon}</span>
                      <div>
                        <span className="header__dropdown-name">{subject.title}</span>
                        <span className="header__dropdown-level">{subject.level}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {navLinks.slice(1).map((link, i) => (
              <li key={link.href} className="header__nav-item" style={{ '--item-index': i + 2 } as React.CSSProperties}>
                <a
                  href={`#${link.href}`}
                  className="header__nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Resources link */}
            <li className="header__nav-item" style={{ '--item-index': 4 } as React.CSSProperties}>
              <Link href="/resources"
                className="header__nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
            </li>
            <li className="header__nav-item" style={{ '--item-index': 5 } as React.CSSProperties}>
              <Link href="/pricing"
                className="header__nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
          </ul>
          <a
            href="#contact"
            className="btn btn-primary header__cta-mobile"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Book Trial Lesson
          </a>
        </nav>

        <a
          href="#contact"
          className="btn btn-primary header__cta"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Book Trial Lesson
        </a>

        <button
          className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile backdrop overlay */}
      <div
        className={`header__backdrop ${isMobileMenuOpen ? 'header__backdrop--visible' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;

