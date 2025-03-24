import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: isProduction ? 'export' : undefined,
  distDir: isProduction ? 'docs' : '.next',
  basePath: isProduction ? '/sisely-web' : '',
  assetPrefix: isProduction ? '/sisely-web' : '',
};

export default nextConfig;
