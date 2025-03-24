import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/sisely-web',
  assetPrefix: '/sisely-web/',
  trailingSlash: true,
};

export default nextConfig;
