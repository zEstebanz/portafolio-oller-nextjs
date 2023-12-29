/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = {
  // Otras configuraciones...
  nextConfig,

  images: {
    domains: ['*'],
    domains: ['i.ytimg.com'],
    domains: ['images.unsplash.com'],
    domains: [
      'facebook.com',
      'fbcdn.net',
    ],
  },
};