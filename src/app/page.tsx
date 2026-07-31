import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Features from '../components/Features';
import Services from '../components/Services';
import WaysToLearn from '../components/WaysToLearn';
import Approach from '../components/Approach';
// import HeadTutor from '../components/HeadTutor'; // "Meet the Head Tutor" section — hidden for now; re-enable to bring it back.
// import DropInSessions from '../components/DropInSessions'; // Free "Watch Me Teach, Live & Free" sessions — re-enable when able to run them.
import Testimonials from '../components/Testimonials';
import RecentArticles from '../components/RecentArticles';
import CTA from '../components/CTA';

const StudentTestimonials = dynamic(() => import('../components/StudentTestimonials'));
const FAQ = dynamic(() => import('../components/FAQ'));

// Title and description are inherited from the root layout; only the canonical
// is declared here, resolved against `metadataBase`.
export const metadata = {
  alternates: {
    canonical: '/',
  },
};

// Next.js automatically Server-Side Renders these imports by default!
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Features />
      <StudentTestimonials />
      <Services />
      <WaysToLearn />
      <Approach />
      {/* "Meet the Head Tutor" section — hidden for now; uncomment to bring it back. */}
      {/* <HeadTutor /> */}
      {/* Free live sessions — hidden for now; uncomment to bring back "Watch Me Teach, Live & Free". */}
      {/* <DropInSessions /> */}
      <Testimonials />
      <RecentArticles />
      <FAQ />
      <CTA />
    </>
  );
}
