/**
 * Studio placeholder for product photography — a dark, lit pedestal (B&O / Leica).
 * Dark cards read as distinct premium objects against the cream page. Swap for a
 * real next/image (product on a dark studio background) when photography arrives.
 */
export function ProductShot({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-[#2c3644] via-[#1d2630] to-[#131a21] ${className}`}
    >
      {/* top spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(72%_56%_at_50%_-8%,rgba(178,205,228,0.30),transparent_60%)]" />
      {/* soft presence — light catching an object on the pedestal */}
      <div className="absolute left-1/2 top-1/2 h-[48%] w-[38%] -translate-x-1/2 -translate-y-[58%] bg-[radial-gradient(closest-side,rgba(200,222,238,0.16),transparent_72%)]" />
      {/* faint interlocking brand mark, where the product will sit */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="relative block h-14 w-14 opacity-[0.18]">
          <span className="absolute inset-0 rotate-45 rounded-[7px] border border-steel" />
          <span className="absolute inset-[7px] rotate-45 rounded-[5px] border border-steel" />
        </span>
      </div>
      {/* floor shadow + reflection line */}
      <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06]" />
    </div>
  );
}
