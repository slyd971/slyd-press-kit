import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "**": [
      "./public/**/*.mp4",
      "./public/**/*.mov",
      "./public/**/*.webm",
      "./public/**/*.pdf",
      "./public/**/*.zip",
    ],
  },
};

export default nextConfig;
