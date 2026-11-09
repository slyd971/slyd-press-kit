// scripts/check-prod.mjs
// Contrôle qualité avant mise en ligne d'un site presskit.
// Bloque le build en production si une erreur est trouvée.
// Sur les previews, il affiche seulement des avertissements.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const isProd = process.env.VERCEL_ENV === "production";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const errors = [];

// 1. URL du site : doit exister et pointer vers le vrai domaine
if (!siteUrl) {
  errors.push("NEXT_PUBLIC_SITE_URL est manquante");
} else if (/localhost|127\.0\.0\.1|\.vercel\.app/i.test(siteUrl)) {
  errors.push(`NEXT_PUBLIC_SITE_URL pointe vers ${siteUrl} au lieu du domaine final`);
}

// 2. robots et sitemap présents (App Router ou fichiers statiques)
const exists = (paths) => paths.some((p) => existsSync(p));
if (!exists(["app/robots.ts", "app/robots.js", "src/app/robots.ts", "public/robots.txt"])) {
  errors.push("robots manquant (app/robots.ts ou public/robots.txt)");
}
if (!exists(["app/sitemap.ts", "app/sitemap.js", "src/app/sitemap.ts", "public/sitemap.xml"])) {
  errors.push("sitemap manquant (app/sitemap.ts ou public/sitemap.xml)");
}

// 3. Pas de localhost ni de contenu provisoire dans le code et les contenus
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".mdx", ".txt", ".xml"]);
const FORBIDDEN = [
  /localhost/i,
  /127\.0\.0\.1/,
  /lorem ipsum/i,
  /example\.(com|fr)/i,
  /coming soon/i,
  /bientôt disponible/i,
];
const FOLDERS = ["app", "src", "content", "data", "public", "components"];

function walk(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (EXTENSIONS.has(extname(path))) {
      const text = readFileSync(path, "utf8");
      for (const re of FORBIDDEN) {
        if (re.test(text)) errors.push(`${path} contient « ${re.source} »`);
      }
    }
  }
}
FOLDERS.forEach(walk);

// 4. Emails de contact : format valide
const EMAIL_RE = /mailto:([^"'?\s)]+)/g;
const VALID_EMAIL = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;
function checkEmails(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      checkEmails(path);
    } else if (EXTENSIONS.has(extname(path))) {
      const text = readFileSync(path, "utf8");
      for (const [, email] of text.matchAll(EMAIL_RE)) {
        if (email.includes("${")) continue; // template littéral : valeur dynamique
        if (!VALID_EMAIL.test(email)) errors.push(`${path} : email invalide « ${email} »`);
      }
    }
  }
}
FOLDERS.forEach(checkEmails);

// Résultat
if (errors.length === 0) {
  console.log("✅ Check presskit OK");
  process.exit(0);
}

console.log(`\n${isProd ? "❌" : "⚠️"} Check presskit : ${errors.length} problème(s)`);
errors.forEach((e) => console.log(`  - ${e}`));

if (isProd) {
  console.log("\nDéploiement production bloqué. Corrige puis repousse.\n");
  process.exit(1);
}
console.log("\n(Preview : build autorisé, à corriger avant la prod.)\n");
