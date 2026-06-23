/* ============================================================================
   update-image-refs.cjs
   Rewrites image references in /src from .png/.jpg/.jpeg to .webp,
   but ONLY when the matching .webp actually exists in /public.
   This makes it safe: a reference is only changed if the WebP is really there.

   Run AFTER convert-to-webp.cjs:
     node scripts/update-image-refs.cjs
   ============================================================================ */
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const codeExts = new Set(['.jsx', '.js', '.ts', '.tsx', '.css']);

// match a quoted/url() path that ends in an image extension
const refRe = /(["'`(])(\/?[^"'`()\s]+?)\.(png|jpe?g)(["'`)])/gi;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// resolve a code reference like "/images/x" to a file path inside /public
function publicWebpExists(refPath) {
  // strip leading slash; ignore http(s) and data URIs
  if (/^(https?:|data:)/i.test(refPath)) return false;
  const clean = decodeURIComponent(refPath.replace(/^\//, ''));
  const webp = path.join(PUBLIC_DIR, clean + '.webp');
  return fs.existsSync(webp);
}

let filesChanged = 0, refsChanged = 0;

for (const file of walk(SRC_DIR).filter(f => codeExts.has(path.extname(f).toLowerCase()))) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  content = content.replace(refRe, (m, open, p, ext, close) => {
    if (publicWebpExists(p)) {
      refsChanged++;
      changed = true;
      return `${open}${p}.webp${close}`;
    }
    return m; // leave untouched if no webp on disk
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    filesChanged++;
    console.log('  updated', path.relative(SRC_DIR, file));
  }
}

console.log('\n----------------------------------------');
console.log(`files changed: ${filesChanged}, references rewritten: ${refsChanged}`);
console.log('Now run: npm run build  (then redeploy the new dist)');
