/**
 * Resizes and compresses large images in /public (in place).
 * Run: node scripts/optimize-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const MAX_EDGE = 1920;
const MIN_BYTES_TO_PROCESS = 120 * 1024;
const JPEG_QUALITY = 85;

const exts = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!exts.has(ext)) return;

  const stat = fs.statSync(filePath);
  if (stat.size < MIN_BYTES_TO_PROCESS) return;

  const input = fs.readFileSync(filePath);
  const image = sharp(input);
  const meta = await image.metadata();

  let pipeline = image;
  if (meta.width && meta.height && Math.max(meta.width, meta.height) > MAX_EDGE) {
    pipeline = pipeline.resize(MAX_EDGE, MAX_EDGE, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const isPng = ext.toLowerCase() === ".png";
  let output;
  if (isPng) {
    output = await pipeline
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
  } else {
    output = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();
  }

  if (output.length < stat.size * 0.92) {
    fs.writeFileSync(filePath, output);
    console.log(
      `${path.basename(filePath)}: ${(stat.size / 1024).toFixed(0)} KB → ${(output.length / 1024).toFixed(0)} KB`
    );
  }
}

const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full);
    else if (st.isFile()) files.push(full);
  }
}

walk(publicDir);

for (const f of files) {
  try {
    await processFile(f);
  } catch (e) {
    console.error(f, e.message);
  }
}

console.log("Done.");
