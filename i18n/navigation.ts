import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware Link/router that resolves internal keys to the right public slug.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
