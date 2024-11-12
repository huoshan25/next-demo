import type { NextConfig } from "next";
const UnoCSS = require('unocss/webpack').default;
// import UnoCSS from 'unocss/webpack'
const nextConfig: NextConfig = {
  /* config options here */
  // output: 'standalone',
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(UnoCSS())

    // 添加 watch 配置
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules/,
        poll: 1000, // 检查更改的时间间隔
      }
    }

    return config
  },
};

export default nextConfig;
