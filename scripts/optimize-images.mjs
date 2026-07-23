import sharp from "sharp";
import { readdir, stat, mkdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const BACKUP = join(__dirname, "..", "public", "_originals");

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg"]);

async function main() {
  // Create backup dir
  await mkdir(BACKUP, { recursive: true });

  const files = await readdir(PUBLIC);
  const images = files.filter((f) => IMAGE_EXTS.has(extname(f).toLowerCase()));

  console.log(`Found ${images.length} images to optimize\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of images) {
    const srcPath = join(PUBLIC, file);
    const backupPath = join(BACKUP, file);
    const webpPath = join(PUBLIC, basename(file, extname(file)) + ".webp");

    const srcStat = await stat(srcPath);
    totalBefore += srcStat.size;

    // Backup original if not already backed up
    try {
      await stat(backupPath);
    } catch {
      await sharp(srcPath).toFile(backupPath);
    }

    // Convert to WebP with quality optimization
    await sharp(srcPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);

    const webpStat = await stat(webpPath);
    totalAfter += webpStat.size;

    const reduction = ((1 - webpStat.size / srcStat.size) * 100).toFixed(1);
    console.log(
      `✅ ${file.padEnd(22)} ${(srcStat.size / 1024).toFixed(0).padStart(5)}KB → ${(webpStat.size / 1024).toFixed(0).padStart(5)}KB  (${reduction}% saved)`
    );
  }

  console.log(
    `\n📦 Total: ${(totalBefore / 1024).toFixed(0)}KB → ${(totalAfter / 1024).toFixed(0)}KB  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% saved)`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
