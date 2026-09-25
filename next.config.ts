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
  // next/image optimized variants: cache the optimizer output for 31 days
  // (source assets change rarely; a filename bump busts it when they do).
  images: {
    minimumCacheTTL: 2678400,
  },
  // Launch-hygiene security headers. HSTS only engages once served over HTTPS
  // (harmless on http localhost). X-Frame-Options guards against clickjacking;
  // we embed Google Maps, nobody needs to embed us.
  async headers() {
    const IMMUTABLE = 'public, max-age=31536000, immutable';
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
      // ORDER MATTERS: when several rules set the same header, the LAST matching
      // rule wins. The generic image rule therefore comes first and the specific
      // immutable directories after it, so they override it for frames/videos.
      //
      // Static brand/image assets in /public: cache a day, revalidate in the
      // background for a week — instant serve without the year-long lock-in that
      // immutable would impose on files that might be swapped in place.
      {
        source: '/:path*.(webp|jpg|jpeg|png|avif|gif|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      // Hero frame sequences and videos never change once shipped — the biggest
      // CWV leak was these serving `max-age=0, must-revalidate` (revalidated on
      // every visit). Fingerprint-free but effectively immutable content.
      { source: '/frames-desktop/:path*', headers: [{ key: 'Cache-Control', value: IMMUTABLE }] },
      { source: '/frames-mobile/:path*', headers: [{ key: 'Cache-Control', value: IMMUTABLE }] },
      { source: '/videos/:path*', headers: [{ key: 'Cache-Control', value: IMMUTABLE }] },
    ];
  },
};

export default withNextIntl(nextConfig);
