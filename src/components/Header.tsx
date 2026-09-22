"use client";
import { useEffect, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';
import { subjects } from '../data/subjectData';
import { GROUP_CLASSES_PATH, HOMEPAGE_LEADS_WITH_GROUP, ONE_ON_ONE_PATH } from '../data/groupClassLaunch';
import subjectIcons from './SubjectIcons';
import { EnquiryLink, TrackedLink, type NavLocation } from './NavLinks';

const LOGO_SRC = '/Shoreline-Logo.png';
const LOGO_WIDTH = 1966;
const LOGO_HEIGHT = 1289;

/** Scroll distance after which the header turns solid. */
const SOLID_HEADER_SCROLL_PX = 50;

interface PageLink {
  href: string;
  label: string;
}

/** The two ways to learn lead the menu, group classes first while they lead the site. */
const FORMAT_LINKS: PageLink[] = [
  { href: GROUP_CLASSES_PATH, label: 'Group Classes' },
  { href: ONE_ON_ONE_PATH, label: 'One-on-One' },
];

/** Pages listed after the Subjects dropdown. */
const TRAILING_LINKS: PageLink[] = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
];

/** Staggers the mobile menu's entrance animation. */
const itemIndexStyle = (index: number) => ({ '--item-index': index }) as CSSProperties;

const isCurrentPage = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

/** Pages that open on a navy section, where the header starts light-on-dark. */
const hasDarkOpening = (pathname: string) =>
  pathname.startsWith('/subjects') ||
  pathname.startsWith('/resources') ||
  pathname === '/pricing' ||
  pathname === '/thank-you' ||
  pathname === GROUP_CLASSES_PATH ||
  pathname === ONE_ON_ONE_PATH ||
  // A group-first homepage opens on the navy group hero.
  (pathname === '/' && HOMEPAGE_LEADS_WITH_GROUP);

interface NavItemProps {
  link: PageLink;
  index: number;
  pathname: string;
  location: NavLocation;
  onNavigate: () => void;
}

const NavItem = ({ link, index, pathname, location, onNavigate }: NavItemProps) => (
  <li className="header__nav-item" style={itemIndexStyle(index)}>
    <TrackedLink
      href={link.href}
      label={link.label}
      location={location}
      className="header__nav-link"
      aria-current={isCurrentPage(pathname, link.href) ? 'page' : undefined}
      onClick={onNavigate}
    />
  </li>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`header__dropdown-chevron ${isOpen ? 'header__dropdown-chevron--open' : ''}`}
    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

interface SubjectsMenuProps {
  index: number;
  location: NavLocation;
  onNavigate: () => void;
}

/** Opens on hover on desktop and on tap in the mobile menu. */
const SubjectsMenu = ({ index, location, onNavigate }: SubjectsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="header__nav-item header__nav-item--dropdown"
      style={itemIndexStyle(index)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="header__nav-link header__nav-link--dropdown"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        Subjects
        <ChevronIcon isOpen={isOpen} />
      </button>

      <div className={`header__dropdown ${isOpen ? 'header__dropdown--open' : ''}`}>
        <div className="header__dropdown-inner">
          {subjects.map((subject) => (
            <TrackedLink
              key={subject.slug}
              href={`/subjects/${subject.slug}`}
              label={subject.title}
              location={location}
              className="header__dropdown-item"
              prefetch={false}
              onClick={() => {
                setIsOpen(false);
                onNavigate();
              }}
            >
              <span className="header__dropdown-icon">{subjectIcons[subject.slug] ?? subject.icon}</span>
              <div>
                <span className="header__dropdown-name">{subject.title}</span>
                <span className="header__dropdown-level">{subject.level}</span>
              </div>
            </TrackedLink>
          ))}
        </div>
      </div>
    </li>
  );
};

interface HeaderNavProps {
  pathname: string;
  isMobileMenuOpen: boolean;
  onNavigate: () => void;
}

/** The page links, inline on desktop and a slide-in panel on phones. */
const HeaderNav = ({ pathname, isMobileMenuOpen, onNavigate }: HeaderNavProps) => {
  const location: NavLocation = isMobileMenuOpen ? 'mobile_menu' : 'header';
  const trailingStartIndex = FORMAT_LINKS.length + 1;

  return (
    <nav id="mobile-navigation" className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
      <ul className="header__nav-list">
        {FORMAT_LINKS.map((link, index) => (
          <NavItem key={link.href} link={link} index={index} pathname={pathname} location={location} onNavigate={onNavigate} />
        ))}
        <SubjectsMenu index={FORMAT_LINKS.length} location={location} onNavigate={onNavigate} />
        {TRAILING_LINKS.map((link, index) => (
          <NavItem
            key={link.href}
            link={link}
            index={trailingStartIndex + index}
            pathname={pathname}
            location={location}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
      <EnquiryLink location="mobile_menu" className="btn btn-primary header__cta-mobile" onNavigate={onNavigate} />
    </nav>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SOLID_HEADER_SCROLL_PX);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const headerClassName = [
    'header',
    isScrolled && 'header--scrolled',
    hasDarkOpening(pathname) && !isScrolled && 'header--dark',
    pathname.startsWith('/resources/') && 'header--solid-navy',
    isMobileMenuOpen && 'header--menu-open',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClassName}>
      <div className="header__container container">
        <Link href="/" className="header__logo">
          <img src={LOGO_SRC} alt="Shoreline Tutoring" className="header__logo-image" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
          <span className="header__logo-text">Shoreline</span>
          <span className="header__logo-accent">Tutoring</span>
        </Link>

        <HeaderNav pathname={pathname} isMobileMenuOpen={isMobileMenuOpen} onNavigate={closeMobileMenu} />

        <EnquiryLink location="header" className="btn btn-primary header__cta" />

        <button
          className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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
        onClick={closeMobileMenu}
      />
    </header>
  );
};

export default Header;
