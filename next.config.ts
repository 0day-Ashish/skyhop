import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS output in ./out, deployable to any static host.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
