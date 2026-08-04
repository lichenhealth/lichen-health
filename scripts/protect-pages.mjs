// Optional password protection for per-prospect weave pages (founder
// 2026-08-04: "in case partners want the content secured, not just
// un-findable sans the URL").
//
// Runs automatically after `npm run build` (postbuild). Reads the
// GITIGNORED weave-passwords.json in the repo root:
//
//   { "4windsweave": "the-passphrase", "gaiaweave": "another" }
//
// Every listed page's dist/<slug>/index.html is AES-256 encrypted in place
// via staticrypt — the passphrase decrypts it in the browser, so this is
// real encryption, not a bypassable overlay. Pages not listed stay open.
// No passwords file at all = clean no-op, so the build never breaks.
//
// --remember 30 keeps a partner signed in for a month on their device.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const passwordsFile = join(root, 'weave-passwords.json');

if (!existsSync(passwordsFile)) {
  console.log('protect-pages: no weave-passwords.json — all pages stay open.');
  process.exit(0);
}

const passwords = JSON.parse(readFileSync(passwordsFile, 'utf8'));

for (const [slug, password] of Object.entries(passwords)) {
  const page = join(root, 'dist', slug, 'index.html');
  if (!existsSync(page)) {
    console.warn(`protect-pages: dist/${slug}/index.html not found — skipped.`);
    continue;
  }
  execFileSync('npx', [
    'staticrypt', page,
    '-p', password,
    '-d', join(root, 'dist', slug),
    '--remember', '30',
    '--template-title', 'Lichen — a private conversation',
    '--template-instructions', 'This page is shared in confidence. Enter the passphrase from your Lichen contact.',
    '--template-button', 'Open',
    '--template-error', 'That passphrase didn’t open it — check with your Lichen contact.',
    '--template-color-primary', '#F5A36D',
    '--template-color-secondary', '#F0EEE9',
  ], { stdio: 'inherit' });
  console.log(`protect-pages: /${slug} is now passphrase-protected.`);
}
