import Image from 'next/image';
import { Sheen } from '@/components/ui/Sheen';

/**
 * Double-bezel image frame. With a `src` it holds real photography (object-cover
 * into the bezel), keeping the vignette, sheen and label overlay. Without one it
 * falls back to a lit, dimensional placeholder so panels awaiting photography
 * still read as a cinematic still rather than a flat gradient.
 */
export function Frame({
  label,
  variant = 'water',
  src,
  alt = '',
  className = '',
}: {
  label?: string;
  variant?: 'water' | 'stone';
  src?: string;
  alt?: string;
  className?: string;
}) {
  const water = variant === 'water';

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] bg-black/5 p-1.5 ring-1 ring-black/5 ${className}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] ${
          src
            ? 'bg-travertine/40'
            : water
              ? 'bg-[linear-gradient(158deg,#20516a_0%,#16303c_52%,#0c1c25_100%)]'
              : 'bg-[linear-gradient(158deg,#efe8da_0%,#d8ccb6_58%,#b6a688_100%)]'
        }`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover"
          />
        ) : (
          <>
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
                {/* still caustic light — no perpetual drift; the water is calm */}
                <div className="absolute -right-1/4 -top-1/4 h-[78%] w-[78%] rounded-full bg-[radial-gradient(closest-side,rgba(169,203,227,0.20),transparent_72%)]" />
                <div className="absolute -bottom-1/4 left-[-12%] h-[62%] w-[62%] rounded-full bg-[radial-gradient(closest-side,rgba(130,175,216,0.14),transparent_72%)]" />
                {/* waterline glint */}
                <div className="absolute inset-x-0 top-[34%] h-px bg-white/10" />
              </>
            )}
          </>
        )}

        {/* vignette grounds the frame (and keeps a photo's label legible) */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-44px_64px_-30px_rgba(9,22,30,0.55)]" />

        <Sheen tint={water ? 'light' : 'steel'} />

        {label && (
          <span
            className={`absolute bottom-5 left-6 font-mono text-label uppercase ${
              src || water ? 'text-canvas/85' : 'text-ink/50'
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
