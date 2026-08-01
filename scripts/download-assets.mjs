import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const ROOT = new URL('..', import.meta.url).pathname;
const urls = fs
  .readFileSync('/tmp/ig-img-urls.txt', 'utf8')
  .trim()
  .split('\n')
  .filter(Boolean);
const extra = [
  'https://image-generator.shipany.site/assets/index-kZZ0HuDF.css',
];

async function download(url, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    console.log('skip', dest);
    return;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(dest));
  console.log('ok', dest, fs.statSync(dest).size);
}

const queue = [...urls, ...extra];
const concurrency = 6;
let i = 0;
async function worker() {
  while (i < queue.length) {
    const url = queue[i++];
    const u = new URL(url);
    let dest;
    if (u.pathname.endsWith('.css')) {
      dest = path.join(ROOT, 'docs/clone-v1/assets', path.basename(u.pathname));
    } else {
      dest = path.join(ROOT, 'public', u.pathname.replace(/^\//, ''));
    }
    try {
      await download(url, dest);
    } catch (e) {
      console.error('FAIL', url, e.message);
    }
  }
}
await Promise.all(Array.from({ length: concurrency }, () => worker()));
console.log('done');
