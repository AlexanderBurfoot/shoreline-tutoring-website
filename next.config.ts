import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Hosts allowed to reach the dev server's internal endpoints (/_next/*, the
   * HMR WebSocket). Next only allows `localhost` and the hostname it was
   * started with by default; anything else is blocked, which stops Client
   * Components hydrating and leaves scroll-reveal content stuck at opacity 0.
   *
   * 192.0.0.2 is this machine's en0 address. Add any other host you open the
   * dev server from, such as another LAN IP or a tunnel hostname. Development only:
   * this has no effect on `next build` or `next start`.
   */
  allowedDevOrigins: ['192.0.0.2'],

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
