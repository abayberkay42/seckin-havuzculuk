// Verifies every [anchor](kind:target) link token in the site's content.
//
// content/blog.ts guards its own posts at module load, but the same syntax is
// now used in messages/*.json (service-page prose), which nothing was checking
// — a typo'd product slug would have shipped as a 404. This walks both.
//
//   node scripts/check-links.mjs
// Exits non-zero on a broken target, so it can gate a commit or a build.

import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const TOKEN = /\[([^\]]+)\]\((product|post|area|page):([a-z0-9-]+)\)/g;
const PAGES = ['construction', 'maintenance', 'products', 'projects', 'contact', 'service-areas'];

const read = (p) => readFile(path.join(ROOT, p), 'utf8');
const slugs = (src, re) => new Set([...src.matchAll(re)].map((m) => m[1]));

const cat = await read('content/catalogue.ts');
const productSlugs = slugs(cat.slice(cat.indexOf('export const products')), /"slug": "([a-z0-9-]+)"/g);
const postSlugs = slugs(await read('content/blog.ts'), /slug: '([a-z0-9-]+)'/g);
const areaSlugs = slugs(await read('content/districts.ts'), /slug: '([a-z0-9-]+)'/g);

const known = {
  product: productSlugs,
  post: postSlugs,
  area: areaSlugs,
  page: new Set(PAGES),
};

/** Every string in a JSON tree, with a dotted path for the error message. */
function* strings(node, trail = '') {
  if (typeof node === 'string') yield [trail, node];
  else if (Array.isArray(node)) for (const [i, v] of node.entries()) yield* strings(v, `${trail}[${i}]`);
  else if (node && typeof node === 'object')
    for (const [k, v] of Object.entries(node)) yield* strings(v, trail ? `${trail}.${k}` : k);
}

const bad = [];
let checked = 0;

for (const loc of ['tr', 'en']) {
  const msgs = JSON.parse(await read(`messages/${loc}.json`));
  for (const [where, text] of strings(msgs)) {
    for (const m of text.matchAll(TOKEN)) {
      checked++;
      if (!known[m[2]].has(m[3])) bad.push(`messages/${loc}.json ${where} -> ${m[2]}:${m[3]}`);
    }
  }
}

for (const f of ['content/blog.ts', 'content/districts.ts', 'content/legal.ts', 'content/services.ts']) {
  const src = await read(f);
  for (const m of src.matchAll(TOKEN)) {
    checked++;
    if (!known[m[2]].has(m[3])) bad.push(`${f} -> ${m[2]}:${m[3]}`);
  }
}

if (bad.length) {
  console.error(`Kırık iç link (${bad.length}):`);
  for (const b of bad) console.error('  ' + b);
  process.exit(1);
}
console.log(`ic link kontrolu: ${checked} link, hepsi gecerli`);
