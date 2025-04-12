/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  distDir: '.next',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  env: {
    PUBLIC_FOLDER: './public',
  },
  assetPrefix: '',
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
};

module.exports = nextConfig; 