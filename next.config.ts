import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to ./out,
  // which Cloudflare (Workers static assets) serves directly — no server.
  output: "export",
  // /about -> /about/index.html, so every page is a real file on disk.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
