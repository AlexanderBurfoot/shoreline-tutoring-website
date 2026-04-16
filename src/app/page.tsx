import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Features from '../components/Features';
import StudentTestimonials from '../components/StudentTestimonials';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Testimonials from '../components/Testimonials';
import RecentArticles from '../components/RecentArticles';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

// Next.js automatically Server-Side Renders these imports by default!
export default function HomePage() {
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
    <>
      <SEO
        title="Shoreline Tutoring - Exclusive, Individualised, Effective"
        description="Premium one-on-one tutoring in Sydney for Mathematics, English, Physics, Chemistry, Commerce, Economics, Business Studies, Selective High School Exam, Opportunity Classes Exam, and NAPLAN. Book your free trial lesson today."
        keywords="tutoring Sydney, HSC tutoring, english tutor, maths tutor, physics tutor, chemistry tutor, commerce tutor, economics tutor, business studies tutor, selective high school exam, opportunity classes exam, NAPLAN preparation, one on one tutoring, private tutor Sydney"
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      <TrustBadges />
      <Features />
      <StudentTestimonials />
      <Services />
      <Approach />
      <Testimonials />
      <RecentArticles />
      <FAQ />
      <CTA />
    </>
  );
}
