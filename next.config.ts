import type { NextConfig } from "next";
const UnoCSS = require('unocss/webpack').default;
// import UnoCSS from 'unocss/webpack'
const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  webpack: (config, { dev }) => {
    config.plugins.push(UnoCSS())

    return config
  },
};

export default nextConfig;
