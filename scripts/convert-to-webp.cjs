/* ============================================================================
   convert-to-webp.cjs
   Converts every .png / .jpg / .jpeg inside /public to a .webp sibling.
   Originals are KEPT (so nothing breaks if a reference is missed).

   Run once:
     npm install sharp --save-dev
     node scripts/convert-to-webp.cjs
   ============================================================================ */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const QUALITY = 80; // good quality / big size win
const exts = new Set(['.png', '.jpg', '.jpeg']);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

(async () => {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('public/ folder not found at', PUBLIC_DIR);
    process.exit(1);
  }

  const files = walk(PUBLIC_DIR).filter(f => exts.has(path.extname(f).toLowerCase()));
  let done = 0, skipped = 0, saved = 0, failed = 0;

  for (const file of files) {
    const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
    try {
      // skip if an up-to-date webp already exists
      if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(file).mtimeMs) {
        skipped++;
        continue;
      }
      const before = fs.statSync(file).size;
      await sharp(file).webp({ quality: QUALITY }).toFile(out);
      const after = fs.statSync(out).size;
      saved += (before - after);
      done++;
      console.log(`  ok  ${path.relative(PUBLIC_DIR, out)}  (${(before/1024|0)}KB -> ${(after/1024|0)}KB)`);
    } catch (e) {
      failed++;
      console.warn(`  !!  failed: ${path.relative(PUBLIC_DIR, file)} - ${e.message}`);
    }
  }

  console.log('\n----------------------------------------');
  console.log(`converted: ${done}, skipped: ${skipped}, failed: ${failed}`);
  console.log(`approx saved: ${(saved/1024/1024).toFixed(1)} MB`);
  console.log('Originals kept. Next: node scripts/update-image-refs.cjs');
})();
