import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export on `npm run build`
  images: {
    domains: ['example.com'], // Update this with actual domains or remove if not using next/image
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent ESLint from breaking the build
  },
}

export default nextConfig
