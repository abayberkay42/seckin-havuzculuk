import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {
    // A stray package-lock.json in the home directory makes Next infer the
    // workspace root as C:\Users\abayb; pin it to this project instead.
    root: import.meta.dirname,
  },
  experimental: {
    // Route changes animate via the browser's View Transitions API — the
    // "su-silme" page transitions run on compositor snapshots, not live DOM.
    viewTransition: true,
  },
  // Launch-hygiene security headers. HSTS only engages once served over HTTPS
  // (harmless on http localhost). X-Frame-Options guards against clickjacking;
  // we embed Google Maps, nobody needs to embed us.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
