import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';

export const metadata = {
  title: 'Shoreline Tutoring | Premium One-on-One Tutoring | Sydney',
  description: 'Premium one-on-one tutoring designed to dramatically improve your results through constant support.',
  keywords: 'tutoring, private tutor, HSC tutoring, IB tutoring, maths tutoring, English tutoring, Sydney tutor, one on one tutoring',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: 'Shoreline Tutoring - Exclusive, Individualized, Effective',
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
