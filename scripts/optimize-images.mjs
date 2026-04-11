import sharp from "sharp";
import { readdir, stat, mkdir } from "node:fs/promises";
import { join, parse } from "node:path";

const PUBLIC_DIR = new URL("../public/", import.meta.url).pathname;
const OUT_DIR = join(PUBLIC_DIR, "img");

// [relativeSourceDir, outputSubdir, maxWidth, quality]
const jobs = [
  ["LANDING PAGE GRAFIKA", "grafika", 1600, 82],
  ["LANDING PAGE VÝSLEDKY", "vysledky", 1100, 80],
  ["RECENZE TEXT", "recenze", 900, 80],
  ["img/predapo", "case-studies", 800, 80],
  ["img/sklienty", "s-klienty", 900, 82],
];

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

function slugify(name) {
  const { name: base } = parse(name);
  return base
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function convertFile(src, dest, maxWidth, quality) {
  const img = sharp(src, { failOn: "none" });
  const meta = await img.metadata();
  const resize =
    meta.width && meta.width > maxWidth ? { width: maxWidth } : undefined;
  await img
    .rotate()
    .resize(resize)
    .webp({ quality, effort: 5 })
    .toFile(dest);
  const srcStat = await stat(src);
  const destStat = await stat(dest);
  return { srcSize: srcStat.size, destSize: destStat.size };
}

async function run() {
  await ensureDir(OUT_DIR);
  let totalIn = 0;
  let totalOut = 0;

  for (const [srcDir, outSub, maxWidth, quality] of jobs) {
    const srcPath = join(PUBLIC_DIR, srcDir);
    const outPath = join(OUT_DIR, outSub);
    let entries;
    try {
      entries = await readdir(srcPath);
    } catch (err) {
      if (err.code === "ENOENT") {
        console.log(`SKIP ${srcDir} (not found)`);
        continue;
      }
      throw err;
    }
    await ensureDir(outPath);
    for (const entry of entries) {
      if (entry.startsWith(".")) continue;
      const ext = entry.split(".").pop()?.toLowerCase();
      if (!["png", "jpg", "jpeg", "webp"].includes(ext)) continue;
      const src = join(srcPath, entry);
      const destName = `${slugify(entry)}.webp`;
      const dest = join(outPath, destName);
      try {
        const { srcSize, destSize } = await convertFile(
          src,
          dest,
          maxWidth,
          quality,
        );
        totalIn += srcSize;
        totalOut += destSize;
        const pct = ((1 - destSize / srcSize) * 100).toFixed(0);
        console.log(
          `${srcDir}/${entry}  →  img/${outSub}/${destName}   ${(srcSize / 1024).toFixed(0)}KB → ${(destSize / 1024).toFixed(0)}KB (-${pct}%)`,
        );
      } catch (err) {
        console.error(`FAILED ${src}:`, err.message);
      }
    }
  }

  // Also optimize maty.png at root
  try {
    const src = join(PUBLIC_DIR, "maty.png");
    const dest = join(OUT_DIR, "maty.webp");
    const { srcSize, destSize } = await convertFile(src, dest, 900, 82);
    totalIn += srcSize;
    totalOut += destSize;
    console.log(
      `maty.png  →  img/maty.webp   ${(srcSize / 1024).toFixed(0)}KB → ${(destSize / 1024).toFixed(0)}KB`,
    );
  } catch (err) {
    console.error("FAILED maty.png:", err.message);
  }

  console.log(
    `\nTOTAL: ${(totalIn / 1024 / 1024).toFixed(2)}MB → ${(totalOut / 1024 / 1024).toFixed(2)}MB (-${((1 - totalOut / totalIn) * 100).toFixed(0)}%)`,
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
