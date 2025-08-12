import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import process from 'node:process';

// Copies the built index.html to 404.html so GitHub Pages serves the SPA on deep links
const outDir = 'docs';
const src = resolve(outDir, 'index.html');
const dest = resolve(outDir, '404.html');

async function run() {
  try {
    const html = await readFile(src, 'utf8');
    await writeFile(dest, html);
    console.log(`Copied ${src} -> ${dest}`);
  } catch (err) {
    console.error('Failed to create 404.html', err);
    process.exit(1);
  }
}

run();
