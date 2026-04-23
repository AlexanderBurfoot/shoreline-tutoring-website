import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Features from '../components/Features';
import Services from '../components/Services';
import Approach from '../components/Approach';
import HeadTutor from '../components/HeadTutor';
import Testimonials from '../components/Testimonials';
import RecentArticles from '../components/RecentArticles';
import CTA from '../components/CTA';

const StudentTestimonials = dynamic(() => import('../components/StudentTestimonials'));
const FAQ = dynamic(() => import('../components/FAQ'));

// Next.js automatically Server-Side Renders these imports by default!
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Features />
      <StudentTestimonials />
      <Services />
      <Approach />
      <HeadTutor />
      <Testimonials />
      <RecentArticles />
      <FAQ />
      <CTA />
    </>
  );
}
