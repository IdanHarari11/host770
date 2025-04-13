/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  distDir: '.next',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['villaorit.co.il'],
  },
  output: 'standalone',
  env: {
    PUBLIC_FOLDER: './public',
  },
  assetPrefix: '',
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
  // הגדרת כתובות URL קבועות לדפים
  async redirects() {
    return [
      // URL ניהולי
      {
        source: '/villa-gilboa',
        destination: '/',
        permanent: true,
      },
      {
        source: '/villa-private-pool',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/northern-israel-family-vacation',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // הגדרת כותרות אבטחה
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 