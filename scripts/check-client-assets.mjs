#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const clients = {
  djslyd: {
    files: [
      "data/clients/djslyd.ts",
      "data/config.ts",
      "docs/airtable-seed/djslyd",
    ],
    publicDirs: ["press-kit", "slyd", "logos"],
  },
  "silver-dj": {
    files: ["data/clients/silver-dj.ts", "docs/airtable-seed/silver-dj"],
    publicDirs: ["silver-dj"],
  },
  "arthur-chaps": {
    files: ["data/clients/arthur-chaps.ts"],
    publicDirs: ["arthur-chaps"],
  },
  "yoruboy-dj": {
    files: ["data/clients/yoruboy-dj.ts", "docs/airtable-seed/yoruboy-dj"],
    publicDirs: ["yoruboy"],
  },
};

const allPublicDirs = [...new Set(Object.values(clients).flatMap((client) => client.publicDirs))];

const slug = process.argv[2];
const strict = process.argv.includes("--strict");
const deployCheck = process.argv.includes("--deploy-check");
const printVercelIgnore = process.argv.includes("--print-vercelignore");
const maxAssetBytes = 10 * 1024 * 1024;

if (!slug || !clients[slug]) {
  console.error(
    `Usage: node scripts/check-client-assets.mjs <${Object.keys(clients).join("|")}> [--strict|--deploy-check|--print-vercelignore]`
  );
  process.exit(2);
}

function walk(target) {
  if (!fs.existsSync(target)) return [];
  const stat = fs.statSync(target);
  if (stat.isFile()) return [target];
  return fs.readdirSync(target, { withFileTypes: true }).flatMap((entry) => {
    const next = path.join(target, entry.name);
    return entry.isDirectory() ? walk(next) : [next];
  });
}

function publicRefsFromFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const refs = new Set();
  const pattern = /["'`](\/(?:press-kit|slyd|logos|silver-dj|yoruboy|arthur-chaps)\/[^"'`]+)["'`]/g;
  for (const match of text.matchAll(pattern)) {
    refs.add(match[1]);
  }
  return refs;
}

function isIgnoredPublicFile(file) {
  return (
    file.endsWith(".DS_Store") ||
    file.endsWith(".gitkeep") ||
    file.endsWith("README.md") ||
    file.endsWith(".pdf") ||
    /\.(mov|MOV)$/.test(file) ||
    /\/video-sliverdj-.*\.[mM][pP]4$/.test(file)
  );
}

const config = clients[slug];
const inputFiles = config.files.flatMap(walk).filter((file) => /\.(ts|csv)$/.test(file));
const refs = new Set(inputFiles.flatMap((file) => [...publicRefsFromFile(file)]));
const missing = [...refs].filter((ref) => !fs.existsSync(path.join("public", ref)));

const referencedFiles = [...refs].map((ref) => path.join("public", ref));
const oversizedReferenced = referencedFiles
  .filter((file) => fs.existsSync(file))
  .map((file) => ({ file, size: fs.statSync(file).size }))
  .filter(({ size }) => size > maxAssetBytes);

const ownedPublicFiles = config.publicDirs.flatMap((dir) => walk(path.join("public", dir)));
const referencedSet = new Set(referencedFiles.map((file) => path.normalize(file)));
const unused = ownedPublicFiles
  .filter((file) => !isIgnoredPublicFile(file))
  .filter((file) => !referencedSet.has(path.normalize(file)));

if (printVercelIgnore) {
  const lines = [
    ".git",
    ".next",
    "node_modules",
    ".DS_Store",
    ".env",
    ".env.local",
    ".vercel",
    "docs",
    ".claude/",
  ];

  for (const dir of allPublicDirs) {
    if (!config.publicDirs.includes(dir)) lines.push(`public/${dir}/**`);
  }

  const ignoredOwnedFiles = new Set(
    ownedPublicFiles
      .filter((file) => isIgnoredPublicFile(file) || !referencedSet.has(path.normalize(file)))
      .map((file) => file.split(path.sep).join("/"))
  );

  lines.push(...[...ignoredOwnedFiles].sort());
  console.log(lines.join("\n"));
  process.exit(missing.length || oversizedReferenced.length ? 1 : 0);
}

console.log(`${slug}`);
console.log(`- references checked: ${refs.size}`);
console.log(`- missing referenced files: ${missing.length}`);
console.log(`- referenced files over 10MB: ${oversizedReferenced.length}`);
console.log(`- unreferenced deployable files in owned public dirs: ${unused.length}`);

if (missing.length) {
  console.log("\nMissing:");
  for (const ref of missing) console.log(`- ${ref}`);
}

if (oversizedReferenced.length) {
  console.log("\nReferenced files over 10MB:");
  for (const { file, size } of oversizedReferenced) {
    console.log(`- ${file} (${(size / 1024 / 1024).toFixed(1)}MB)`);
  }
}

if (unused.length) {
  console.log("\nUnreferenced deployable files:");
  for (const file of unused) console.log(`- ${file}`);
}

if (
  missing.length ||
  ((strict || deployCheck) && oversizedReferenced.length) ||
  (strict && unused.length)
) {
  process.exit(1);
}
