import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'docs',
  basePath: '/sisely-web',
  assetPrefix: '/sisely-web',
};

export default nextConfig;
