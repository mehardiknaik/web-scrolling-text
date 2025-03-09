import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? '/web-scrolling-text' : '',
  basePath: isProd ? '/web-scrolling-text' : '',
  images: {
    unoptimized: true, // Disable default image optimization
  },
};

export default nextConfig;
