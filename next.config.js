/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'd1fdloi71mui9q.cloudfront.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
