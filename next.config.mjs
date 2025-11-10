/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/My-resume',
  assetPrefix: '/My-resume',
}

export default nextConfig
