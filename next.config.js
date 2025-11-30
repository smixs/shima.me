/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true, // Enabled image optimization
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
