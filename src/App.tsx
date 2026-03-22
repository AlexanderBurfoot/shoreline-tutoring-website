import './index.css';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import BackToTop from './components/BackToTop';
import PageTransition from './components/PageTransition';
import { SectionSkeleton, PageSkeleton } from './components/Skeleton';

// Lazy-load below-the-fold sections
const Features = lazy(() => import('./components/Features'));
const StudentTestimonials = lazy(() => import('./components/StudentTestimonials'));
const Services = lazy(() => import('./components/Services'));
const Approach = lazy(() => import('./components/Approach'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTA = lazy(() => import('./components/CTA'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
const SubjectPage = lazy(() => import('./components/SubjectPage'));
const Pricing = lazy(() => import('./components/Pricing'));
const Resources = lazy(() => import('./components/Resources'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const NotFound = lazy(() => import('./components/NotFound'));

import SEO from './components/SEO';

function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "TutoringService",
    "name": "Shoreline Tutoring",
    "url": "https://shorelinetutoring.com.au",
    "logo": "https://shorelinetutoring.com.au/ShorelineLogo.png",
    "description": "Premium one-on-one tutoring in Sydney for High School subjects including Maths, English, Physics, Chemistry, Commerce, Economics, Business Studies, and Selective/OC/NAPLAN prep.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "priceRange": "$$",
    "areaServed": "Sydney",
    "sameAs": []
  };

  return (
    <main id="main-content">
      <SEO
        title="Shoreline Tutoring"
        description="Premium one-on-one tutoring in Sydney for Mathematics, English, Physics, Chemistry, Commerce, Economics, Business Studies, Selective High School Exam, Opportunity Classes Exam, and NAPLAN. Book your free trial lesson today."
        keywords="tutoring Sydney, HSC tutoring, english tutor, maths tutor, physics tutor, chemistry tutor, commerce tutor, economics tutor, business studies tutor, selective high school exam, opportunity classes exam, NAPLAN preparation, one on one tutoring, private tutor Sydney"
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      <TrustBadges />
      <Suspense fallback={<SectionSkeleton />}>
        <Features />
        <StudentTestimonials />
        <Services />
        <Approach />
        <Testimonials />
        <FAQ />
        <CTA />
      </Suspense>
    </main>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on every route change unless there's a specific hash
    if (!location.hash) {
      // Let PageTransition handle the scroll to 0,0 after its exit animation.
    } else {
      // If there's a hash, attempt to scroll to it
      const id = location.hash.replace('#', '');
      let attempts = 0;

      const scrollInterval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(scrollInterval);
        }
        attempts++;
        if (attempts > 50) clearInterval(scrollInterval); // Give up after 5 seconds to avoid memory leaks
      }, 100);

      return () => clearInterval(scrollInterval);
    }
  }, [location]);

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollProgress />
      <Header />
      <Suspense fallback={<PageSkeleton />}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subjects/:slug" element={<SubjectPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PageTransition>
      </Suspense>
      <BackToTop />
    </div>
  );
}

export default App;
