/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/Benedict-s-resume',
  assetPrefix: '/Benedict-s-resume/',
}

export default nextConfig
