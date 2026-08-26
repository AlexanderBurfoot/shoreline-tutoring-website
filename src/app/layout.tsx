import '../index.css';
import 'katex/dist/katex.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import { inter, cormorant } from './fonts';
import { SITE_URL } from '../lib/site';
import Script from 'next/script';

const GTM_CONTAINER_ID = 'GTM-K83P5GHL';

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
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${cormorant.variable}`}>
      {/* Google Tag Manager. Google asks for this as high in the <head> as
          possible; `beforeInteractive` is the closest App Router equivalent.
          Next emits a bootstrap stub at the top of <body> which appends the
          real script to document.head and runs it before hydration. */}
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
      </Script>
      <body>
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
        <ScrollProgress />
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
