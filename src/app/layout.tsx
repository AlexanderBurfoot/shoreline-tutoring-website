import localFont from 'next/font/local';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';

const inter = localFont({
  src: [
    { path: '../../public/fonts/inter-300.ttf', weight: '300' },
    { path: '../../public/fonts/inter-400.ttf', weight: '400' },
    { path: '../../public/fonts/inter-500.ttf', weight: '500' },
    { path: '../../public/fonts/inter-600.ttf', weight: '600' },
    { path: '../../public/fonts/inter-700.ttf', weight: '700' },
  ],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const cormorantGaramond = localFont({
  src: [
    { path: '../../public/fonts/cormorant-garamond-300.ttf', weight: '300' },
    { path: '../../public/fonts/cormorant-garamond-400.ttf', weight: '400' },
    { path: '../../public/fonts/cormorant-garamond-400-italic.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/cormorant-garamond-500.ttf', weight: '500' },
    { path: '../../public/fonts/cormorant-garamond-600.ttf', weight: '600' },
    { path: '../../public/fonts/cormorant-garamond-700.ttf', weight: '700' },
  ],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

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
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${cormorantGaramond.variable}`}>
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
