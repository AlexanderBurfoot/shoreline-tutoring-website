import '../index.css';
import 'katex/dist/katex.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import { inter, cormorant } from './fonts';
import { SITE_URL } from '../lib/site';

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
      <body>
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
