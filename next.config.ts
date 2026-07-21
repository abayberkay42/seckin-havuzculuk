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
};

export default withNextIntl(nextConfig);
