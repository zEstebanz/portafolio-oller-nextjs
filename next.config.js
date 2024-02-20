/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  images: {
    domains: ['i.ytimg.com'],
    domains: ['images.unsplash.com'],
    domains: [
      'facebook.com',
      'fbcdn.net',
      "esteban-oller.netlify.app"
    ],
  },
};