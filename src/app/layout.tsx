import '../index.css';
import 'katex/dist/katex.min.css';
import AnnouncementBar from '../components/AnnouncementBar';
import PromoPopup from '../components/PromoPopup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import MobileCTABar from '../components/MobileCTABar';
import ScrollProgress from '../components/ScrollProgress';
import { inter, cormorant } from './fonts';
import { SHARE_IMAGE, SITE_URL } from '../lib/site';
import Script from 'next/script';
import { ANNOUNCEMENT_DISMISSED_KEY, ANNOUNCEMENT_HIDDEN_CLASS } from '../data/groupClassLaunch';
import { GOOGLE_ADS_ID } from '../lib/analytics';

const GTM_CONTAINER_ID = 'GTM-K83P5GHL';

/**
 * Runs before first paint so a visitor who already dismissed the announcement
 * bar this session never sees it flash in and disappear. The bar itself is
 * server-rendered, which keeps the launch in the HTML for every first visit.
 */
const ANNOUNCEMENT_DISMISS_SCRIPT = `try{if(sessionStorage.getItem('${ANNOUNCEMENT_DISMISSED_KEY}'))document.documentElement.classList.add('${ANNOUNCEMENT_HIDDEN_CLASS}')}catch(e){}`;

// Note: `alternates` is deliberately absent here. Next.js inherits whole
// metadata objects into child segments, so a canonical set at the root would
// point every route at the homepage. Each route declares its own.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Shoreline Tutoring | One-on-One & Small-Group Tutoring | Sydney',
    // Child routes supply only their own title; the brand suffix is appended.
    template: '%s | Shoreline Tutoring',
  },
  description: 'Premium one-on-one tutoring and small-group classes designed to dramatically improve your results through constant support.',
  keywords: 'tutoring, private tutor, group tutoring, small group classes, HSC tutoring, IB tutoring, maths tutoring, English tutoring, Sydney tutor, one on one tutoring',
  verification: {
    google: 'Wv-KvBbu8SvKDVnYb6cXI-IFmJPcZIt2-BUDb_B5BYU',
  },
  openGraph: {
    type: 'website',
    title: 'Shoreline Tutoring - Exclusive, Individualised, Effective',
    description: 'Premium one-on-one tutoring and small-group classes designed to dramatically improve your results through constant support.',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [SHARE_IMAGE.url],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning on <html>: the pre-paint script below may add the
  // announcement-dismissed class before React hydrates, which would otherwise be
  // reported as a className mismatch. It covers only this element's own
  // attributes, not the tree beneath it.
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Google Tag Manager. Google asks for this as high in the <head> as
            possible; `beforeInteractive` is the closest App Router equivalent.
            Next hoists it out of this position: it emits a bootstrap stub at
            the top of <body>, which appends the real script to document.head
            and runs it before hydration. Placement in this tree is therefore
            cosmetic, so it sits inside <body> where the nesting is valid. */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>
        {/* Google Tag Manager (noscript). Google specifies immediately after
            the opening <body> tag; Next injects its own nodes ahead of this,
            which is harmless as the iframe only serves JS-disabled visitors. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Google Ads tag, identifying the account on every page so conversions
            and remarketing work. It is loaded here rather than through Tag
            Manager: adding an Ads tag in the container as well would count
            every conversion twice. */}
        <Script
          id="google-ads-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
        <script
          id="announcement-dismiss-state"
          dangerouslySetInnerHTML={{ __html: ANNOUNCEMENT_DISMISS_SCRIPT }}
        />
        <ScrollProgress />
        <AnnouncementBar />
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <BackToTop />
        <MobileCTABar />
        <PromoPopup />
      </body>
    </html>
  );
}
