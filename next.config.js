/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    remotePatterns: [
      { protocol: 'https', hostname: 'monedatreasuryblog.com' },
      { protocol: 'https', hostname: 'moneda-treasury.000webhostapp.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'bumblebee-dev-files.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'c76c7bbc41.mjedge.net' },
      { protocol: 'https', hostname: 'content.thebrief24.com' },
      { protocol: 'https', hostname: 'global.ariseplay.com' },
      { protocol: 'https', hostname: 'energychamber.org' },
    ],
  },
};

module.exports = nextConfig;
