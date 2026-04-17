import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    { path: '../../public/fonts/inter-300.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/inter-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/inter-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/inter-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/inter-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const cormorant = localFont({
  src: [
    { path: '../../public/fonts/cormorant-garamond-300.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/cormorant-garamond-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/cormorant-garamond-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/cormorant-garamond-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/cormorant-garamond-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/cormorant-garamond-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-heading',
  display: 'block',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});
