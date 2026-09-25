import { Link } from '@/i18n/navigation';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { districts } from '@/content/districts';

/**
 * A quiet row of district links for the service pages. The construction and
 * maintenance intros already name all six districts as plain text; this turns
 * that mention into crawlable internal links, so the two strongest service
 * pages pass authority to each district page (hub → spoke).
 */
export function ServiceAreaLinks({ locale }: { locale: string }) {
  const tr = locale === 'tr';
  return (
    <section
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pt-[clamp(6rem,12vh,10rem)]"
    >
      <div className="mx-auto max-w-[52rem] text-center">
        <Eyebrow tone="dark" className="mb-8 justify-center">
          {tr ? 'Hizmet verdiğimiz bölgeler' : 'Where we work'}
        </Eyebrow>
        <ul className="flex flex-wrap justify-center gap-3">
          {districts.map((d) => (
            <li key={d.slug}>
              <Link
                href={{ pathname: '/service-areas/[slug]', params: { slug: d.slug } }}
                className="block rounded-full border border-ink/15 px-5 py-2 font-mono text-label uppercase tracking-wide text-ink/65 transition-colors duration-300 hover:border-ink/40 hover:text-ink"
              >
                {d.name.tr}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
