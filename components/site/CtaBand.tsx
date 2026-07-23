import { SplitReveal } from '@/components/ui/SplitReveal';
import { Button } from '@/components/ui/Button';
import type { AppPathname } from '@/i18n/routing';

/** The CTA never points at a parameterised [slug] page. */
type StaticPathname = Exclude<AppPathname, '/products/[slug]' | '/projects/[slug]'>;

/**
 * The quiet close shared by interior pages — a deep-water band, the interlocking
 * mark, one line and one command. Echoes the home page's invitation without its
 * WebGL, so every page resolves to the same still water.
 */
export function CtaBand({
  title,
  buttonLabel,
  href = '/contact',
}: {
  title: string;
  buttonLabel: string;
  href?: StaticPathname;
}) {
  return (
    <section
      data-nav-theme="dark"
      className="relative overflow-hidden bg-deep px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,16vh,13rem)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_120%,#1d4658_0%,#16303c_50%,#0d1f29_100%)]" />
      <div className="animate-glow-breathe absolute left-1/2 top-1/3 h-[46vmax] w-[46vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(130,175,216,0.14),transparent_72%)]" />

      {/* edge fades — melt the band's top and bottom into the deep sections
          around it (the seam above, the footer below) so there is no hard
          colour line where the glow meets solid deep water. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[2]"
        style={{ height: 'clamp(4rem,10vh,8rem)', background: 'linear-gradient(to bottom, var(--color-deep), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2]"
        style={{ height: 'clamp(5rem,13vh,10rem)', background: 'linear-gradient(to top, var(--color-deep), transparent)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <span aria-hidden="true" className="relative mb-10 inline-block h-12 w-12">
          <span className="absolute inset-0 rotate-45 rounded-[6px] border border-steel/40" />
          <span className="absolute inset-[6px] rotate-45 rounded-[4px] border border-steel/70" />
        </span>
        <SplitReveal as="h2" className="mb-10 max-w-[20ch] font-display text-display text-canvas">
          {title}
        </SplitReveal>
        <Button variant="primary" tone="light" href={href}>
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
