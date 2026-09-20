import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import ReserveStrip from '../components/ReserveStrip';
import { FormatIntro } from '../components/FormatPage';
import TrustBadges from '../components/TrustBadges';
import Features from '../components/Features';
import Services from '../components/Services';
import WaysToLearn from '../components/WaysToLearn';
import Facilities from '../components/Facilities';
import Approach from '../components/Approach';
import RecentArticles from '../components/RecentArticles';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import { groupClassesPage } from '../data/formatPages';
import { HOMEPAGE_LEADS_WITH_GROUP, VENUE_POSTAL_ADDRESS } from '../data/groupClassLaunch';
import { CONTACT_EMAIL, CONTACT_PHONE_E164, SITE_URL } from '../lib/site';

const StudentTestimonials = dynamic(() => import('../components/StudentTestimonials'));
const FAQ = dynamic(() => import('../components/FAQ'));

// Title and description are inherited from the root layout; only the canonical
// is declared here, resolved against `metadataBase`.
export const metadata = {
  alternates: {
    canonical: '/',
  },
};

/** The business itself, for search results and map listings. */
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Shoreline Tutoring',
  url: SITE_URL,
  logo: `${SITE_URL}/ShorelineLogo.png`,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
  address: VENUE_POSTAL_ADDRESS,
};

// Next.js automatically Server-Side Renders these imports by default!
export default function HomePage() {
  return (
    <>
      <JsonLd data={ORGANIZATION_SCHEMA} />
      {HOMEPAGE_LEADS_WITH_GROUP ? (
        <>
          {/* Group-first layout: the exact opening of the group classes page
              (hero, courses, session times, St Leonards rooms), then the
              one-on-one half opens with the hero in section mode.
              Switch off with HOMEPAGE_LEADS_WITH_GROUP in groupClassLaunch.ts. */}
          <FormatIntro content={groupClassesPage} />
          <ReserveStrip />
          <Hero asSection />
        </>
      ) : (
        <Hero />
      )}
      <TrustBadges />
      <Features />
      {/* Ways to Learn sits directly after "Why Us" so both formats are
          established early, rather than two-thirds down the page. Swapped with
          StudentTestimonials to keep the navy/cream section rhythm. */}
      <WaysToLearn />
      <Services />
      {/* What we teach, then where we teach it, then the proof. On a
          group-first homepage the rooms already appear in the group half. */}
      {!HOMEPAGE_LEADS_WITH_GROUP && <Facilities />}
      <StudentTestimonials />
      <Approach />
      <RecentArticles />
      <FAQ />
      <CTA />
    </>
  );
}
