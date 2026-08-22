import { copyFile, mkdir, readdir, rename, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const outputDir = resolve(process.argv[2] ?? 'dist');
const appDir = join(outputDir, 'app');
const rootFiles = new Set([
  '404.html',
  'llms.txt',
  'robots.txt',
  'sitemap.xml',
]);

await rm(appDir, { recursive: true, force: true });
await mkdir(appDir, { recursive: true });

for (const entry of await readdir(outputDir, { withFileTypes: true })) {
  if (entry.name === 'app' || rootFiles.has(entry.name)) continue;
  await rename(join(outputDir, entry.name), join(appDir, entry.name));
}

await copyFile(join(outputDir, '404.html'), join(appDir, '404.html'));
