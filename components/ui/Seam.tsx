type Tone = 'canvas' | 'surface' | 'navy' | 'deep';

/**
 * Connective tissue between sections. Instead of a hard horizontal cut where one
 * flat colour meets the next, a short strip melts the outgoing tone into the
 * incoming one — the way light fades as water deepens. Because each section is a
 * solid colour, the strip's ends match perfectly and the seam disappears; what
 * remains is a soft tonal breath that carries the eye from one section into the
 * next. Pure paint, no JS, no layout risk.
 */
export function Seam({ from, to }: { from: Tone; to: Tone }) {
  return (
    <div
      aria-hidden="true"
      className="h-[clamp(3.5rem,9vh,7rem)] w-full"
      style={{
        background: `linear-gradient(to bottom, var(--color-${from}) 0%, var(--color-${to}) 100%)`,
      }}
    />
  );
}
