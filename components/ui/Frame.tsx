import { Sheen } from '@/components/ui/Sheen';

/**
 * Double-bezel image frame — a lit, dimensional placeholder until real project
 * photography arrives (swap the inner layers for a next/image then). Spotlight,
 * drifting caustics, a waterline glint and a vignette give it depth so it reads
 * as a cinematic still, not a flat gradient.
 */
export function Frame({
  label,
  variant = 'water',
  className = '',
}: {
  label?: string;
  variant?: 'water' | 'stone';
  className?: string;
}) {
  const water = variant === 'water';

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] bg-black/5 p-1.5 ring-1 ring-black/5 ${className}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] ${
          water
            ? 'bg-[linear-gradient(158deg,#20516a_0%,#16303c_52%,#0c1c25_100%)]'
            : 'bg-[linear-gradient(158deg,#efe8da_0%,#d8ccb6_58%,#b6a688_100%)]'
        }`}
      >
        {/* spotlight */}
        <div
          className={`absolute inset-0 ${
            water
              ? 'bg-[radial-gradient(75%_55%_at_62%_-6%,rgba(169,203,227,0.28),transparent_60%)]'
              : 'bg-[radial-gradient(75%_55%_at_62%_-6%,rgba(255,255,255,0.55),transparent_60%)]'
          }`}
        />

        {water && (
          <>
            <div className="animate-water-drift absolute -right-1/4 -top-1/4 h-[78%] w-[78%] rounded-full bg-[radial-gradient(closest-side,rgba(169,203,227,0.22),transparent_72%)]" />
            <div
              className="animate-water-drift absolute -bottom-1/4 left-[-12%] h-[62%] w-[62%] rounded-full bg-[radial-gradient(closest-side,rgba(130,175,216,0.16),transparent_72%)]"
              style={{ animationDelay: '-6s' }}
            />
            {/* waterline glint */}
            <div className="absolute inset-x-0 top-[34%] h-px bg-white/10" />
          </>
        )}

        {/* vignette grounds the frame */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-44px_64px_-30px_rgba(9,22,30,0.55)]" />

        <Sheen tint={water ? 'light' : 'steel'} />

        {label && (
          <span
            className={`absolute bottom-5 left-6 font-mono text-label uppercase ${
              water ? 'text-canvas/75' : 'text-ink/50'
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
