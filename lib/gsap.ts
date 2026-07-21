'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

// SplitText & the scroll plugins ship free with GSAP 3.13+, no club licence.
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/** The single easing the whole site animates on — "water finding its level". */
export const WATER_EASE = 'power3.out';

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  Object.assign(window, { __gsap: gsap, __ScrollTrigger: ScrollTrigger });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
