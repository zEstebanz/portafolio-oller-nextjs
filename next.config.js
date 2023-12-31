/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = {

  images: {
    domains: ['i.ytimg.com'],
    domains: ['images.unsplash.com'],
    domains: [
      'facebook.com',
      'fbcdn.net',
    ],
  },
};