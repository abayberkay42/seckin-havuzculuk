// IndexNow ping: tells Bing, Yandex, Naver and Seznam (via api.indexnow.org)
// that the site's URLs are new or changed, instead of waiting for a recrawl.
// Google does not use IndexNow — it keeps using the sitemap in Search Console.
//
// Run after a deploy has gone live:   npm run indexnow
// Optional: pass specific URLs to submit only those:
//   npm run indexnow -- https://seckinhavuzculuk.com/tr/blog/new-post
//
// The key file public/<KEY>.txt must be live at the site root (it is served
// from /public), which is how the search engines verify ownership.

const HOST = 'seckinhavuzculuk.com';
const KEY = '219602eb5d85687b097992fc8fdb8555';
const ORIGIN = `https://${HOST}`;

async function sitemapUrls() {
  const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
  const urls = new Set();
  // <loc> entries plus every hreflang alternate (EN pages only appear there)
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1]);
  for (const m of xml.matchAll(/hreflang="(?!x-default)[^"]+" href="([^"]+)"/g)) urls.add(m[1]);
  return [...urls];
}

const keyCheck = await fetch(`${ORIGIN}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  console.error(`Key file ${ORIGIN}/${KEY}.txt is not live yet — deploy first.`);
  process.exit(1);
}

const argUrls = process.argv.slice(2).filter((u) => u.startsWith(ORIGIN));
const urlList = argUrls.length ? argUrls : await sitemapUrls();

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted (key validation pending). Anything else is an error.
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
