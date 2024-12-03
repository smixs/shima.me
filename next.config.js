/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/shima.me',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
