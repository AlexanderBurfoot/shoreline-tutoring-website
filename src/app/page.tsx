import Hero from '../components/Hero';
import ReserveStrip from '../components/ReserveStrip';
import { FormatIntro } from '../components/FormatPage';
import WaysToLearn from '../components/WaysToLearn';
import Services from '../components/Services';
import TrustBadges from '../components/TrustBadges';
import CTA from '../components/CTA';
import JsonLd from '../components/JsonLd';
import { groupClassesPage } from '../data/formatPages';
import { HOMEPAGE_LEADS_WITH_GROUP } from '../data/groupClassLaunch';
import { ORGANIZATION_SCHEMA } from '../lib/structuredData';

/*
 * Sections held back while the homepage is cut down to the group classes
 * opening, the one-on-one hero, the two formats and the closing enquiry form.
 * Each still has a page that owns it, so nothing here is lost to a visitor:
 * the FAQ answers sit on both format pages, the articles on /resources, and
 * the rooms on /group-classes.
 *
 * StudentTestimonials has moved to /one-on-one for good rather than being held
 * back: all three students studied one-on-one, so the quotes prove nothing
 * about a group class. Group testimonials belong on /group-classes once the
 * first classes have run.
 *
 * Restore a section by uncommenting its import and its tag below together.
 *
 * import dynamic from 'next/dynamic';
 * import Features from '../components/Features';
 * import Facilities from '../components/Facilities';
 * import Approach from '../components/Approach';
 * import RecentArticles from '../components/RecentArticles';
 *
 * const FAQ = dynamic(() => import('../components/FAQ'));
 */

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
      {/* <Features /> */}
      {/* Ways to Learn sits directly after "Why Us" so both formats are
          established early, rather than two-thirds down the page. Swapped with
          StudentTestimonials to keep the navy/cream section rhythm. */}
      <WaysToLearn />
      {/* What we teach. Each card marks the four subjects that also run as
          Year 12 classes, and links to that subject's own page. */}
      <Services />
      {/* What we teach, then where we teach it, then the proof. On a
          group-first homepage the rooms already appear in the group half. */}
      {/* {!HOMEPAGE_LEADS_WITH_GROUP && <Facilities />} */}
      {/* <Approach /> */}
      {/* <RecentArticles /> */}
      {/* <FAQ /> */}
      {/* Reassurance last, directly above the form: these answer "how does it
          work", which is a question asked at the point of enquiring rather than
          on arrival. The navy band also separates the two cream sections. */}
      <TrustBadges />
      <CTA />
    </>
  );
}
