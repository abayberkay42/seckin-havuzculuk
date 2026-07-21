'use client';

import { motion } from 'motion/react';

type ManifestoProps = { eyebrow: string; body: string };

/**
 * The hero dissolves into this. Cream ground, oversized editorial statement —
 * the documentary's thesis. Placeholder for Step 3's full "Kimlik" scene; here
 * it exists so the hero's scroll-out has something to surface into.
 */
export function Manifesto({ eyebrow, body }: ManifestoProps) {
  return (
    <section
      data-nav-theme="light"
      className="relative bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(8rem,18vh,16rem)]"
    >
      <div className="max-w-[64rem]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex items-center gap-4 font-mono text-label uppercase text-ink/50"
        >
          <span className="h-px w-10 bg-bronze/60" />
          {eyebrow}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display text-ink"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
