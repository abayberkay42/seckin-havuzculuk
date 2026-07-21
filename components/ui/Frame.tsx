import { Sheen } from '@/components/ui/Sheen';

/**
 * Double-bezel image frame. Holds a water/stone gradient placeholder until real
 * project photography is dropped in — swap the inner div for a next/image then.
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
  const bg =
    variant === 'water'
      ? 'bg-[radial-gradient(130%_130%_at_28%_18%,#20516a_0%,#16303c_58%,#0d1f29_100%)]'
      : 'bg-[radial-gradient(130%_130%_at_28%_18%,#efe8da_0%,#d8ccb6_62%,#b7a789_100%)]';

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] bg-black/5 p-1.5 ring-1 ring-black/5 ${className}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] ${bg} shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]`}
      >
        {/* faint caustic drift so the placeholder still feels like water */}
        {variant === 'water' && (
          <div className="animate-water-drift absolute -right-1/4 -top-1/4 h-[80%] w-[80%] rounded-full bg-[radial-gradient(closest-side,rgba(169,203,227,0.22),transparent_72%)]" />
        )}
        <Sheen tint={variant === 'water' ? 'light' : 'steel'} />
        {label && (
          <span
            className={`absolute bottom-4 left-5 font-mono text-label uppercase ${
              variant === 'water' ? 'text-canvas/70' : 'text-ink/50'
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
