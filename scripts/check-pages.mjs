import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist/pages');
const { canonicalUrl } = JSON.parse(readFileSync(path.join(root, 'site.config.json'), 'utf8'));
const base = new URL(canonicalUrl).pathname;
const html = readFileSync(path.join(output, 'index.html'), 'utf8');
assert(html.includes(`rel="canonical" href="${canonicalUrl}"`), 'Canonical URL must use the published project address.');
assert(html.includes(`property="og:url" content="${canonicalUrl}"`), 'Open Graph URL must match the canonical address.');
assert(!html.includes('__SITE_URL__') && !html.includes('__BASE_PATH__'), 'No unresolved metadata markers may ship.');
const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]).filter(url => !url.startsWith('https://'));
assert(assets.length >= 3, 'Expected JavaScript, stylesheet and favicon references.');
for (const url of assets) {
  assert(url.startsWith(base), `Asset escapes the project base path: ${url}`);
  const relative = url.slice(base.length);
  assert(relative && !relative.includes('..') && existsSync(path.join(output, relative)), `Missing emitted asset: ${url}`);
}
for (const file of ['brand.svg', 'favicon.svg', 'releases.json', '.nojekyll']) {
  assert(existsSync(path.join(output, file)), `Missing static file: ${file}`);
}
assert(!existsSync(path.join(output, 'server')), 'The Pages output must not require a Worker server.');
console.log(`Verified static project paths and canonical URL: ${canonicalUrl}`);
