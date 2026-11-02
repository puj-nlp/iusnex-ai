// Run after editing docs/assets/css/styles.css to refresh the public CSS URL.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const css = readFileSync(new URL('docs/assets/css/styles.css', root));
const hash = createHash('sha256').update(css).digest('hex').slice(0, 12);
const name = `styles.${hash}.css`;
writeFileSync(new URL(`docs/assets/css/${name}`, root), css);
const htmlPath = new URL('docs/index.html', root);
const html = readFileSync(htmlPath, 'utf8');
const pattern = /href="assets\/css\/styles(?:\.[a-f0-9]+)?\.css(?:\?[^"]*)?"/g;
if ([...html.matchAll(pattern)].length !== 1) {
  throw new Error('Expected exactly one project stylesheet link.');
}
writeFileSync(htmlPath, html.replace(pattern, `href="assets/css/${name}"`));
console.log(`Stylesheet ready: ${name}`);
