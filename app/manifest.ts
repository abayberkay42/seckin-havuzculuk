import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Lüks Havuz Tasarımı & İnşaatı`,
    short_name: SITE_NAME,
    description:
      'İzmir ve Çeşme çevresinde villalar için lüks havuz tasarımı, inşaatı, renovasyonu ve bakımı.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f0e8',
    theme_color: '#16303c',
    lang: 'tr',
    icons: [
      { src: '/icon.png', sizes: 'any', type: 'image/png' },
    ],
  };
}
