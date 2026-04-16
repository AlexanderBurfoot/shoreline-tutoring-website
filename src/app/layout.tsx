import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';

export const metadata = {
  title: 'Shoreline Tutoring | Premium One-on-One Tutoring | Sydney',
  description: 'Premium one-on-one tutoring designed to dramatically improve your results through constant support.',
  keywords: 'tutoring, private tutor, HSC tutoring, IB tutoring, maths tutoring, English tutoring, Sydney tutor, one on one tutoring',
  verification: {
    google: 'Wv-KvBbu8SvKDVnYb6cXI-IFmJPcZIt2-BUDb_B5BYU',
  },
  openGraph: {
    type: 'website',
    title: 'Shoreline Tutoring - Exclusive, Individualised, Effective',
    description: 'Premium one-on-one tutoring designed to dramatically improve your results through constant support.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
        />
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
