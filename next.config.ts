import type { NextConfig } from "next";

const buildOnlyPackages = [
  "node_modules/@next/swc*/**",
  "node_modules/typescript/**",
  "node_modules/tailwindcss/**",
  "node_modules/@tailwindcss/**",
  "node_modules/postcss/**",
  "node_modules/autoprefixer/**",
  "node_modules/caniuse-lite/**",
  "node_modules/lightningcss/**",
  "node_modules/lightningcss-darwin-x64/**",
  "node_modules/lightningcss-linux-x64-gnu/**",
  "node_modules/magic-string/**",
  "node_modules/@img/**",
  "node_modules/sharp/**",
  "node_modules/next/dist/compiled/webpack/**",
  "node_modules/next/dist/compiled/next-devtools/**",
  "node_modules/next/dist/compiled/babel/**",
  "node_modules/next/dist/compiled/babel-packages/**",
];

const functionAssetExcludes = [
  "public/**",
];

const functionExcludes = [...buildOnlyPackages, ...functionAssetExcludes];

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  outputFileTracingExcludes: {
    "/**": functionExcludes,
    "/": functionExcludes,
    "/_not-found": functionExcludes,
    "/gallery": functionExcludes,
    "/videos": functionExcludes,
    "/api/revalidate": functionExcludes,
    "/opengraph-image": functionExcludes,
    "/robots.txt": functionExcludes,
    "/sitemap.xml": functionExcludes,
  },
};

export default nextConfig;
