/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // When hosting on GitHub Pages under a repository subpath (e.g. /Benedict-s-resume),
  // Next needs basePath and assetPrefix so built HTML references the correct locations.
  basePath: '/Benedict-s-resume',
  assetPrefix: '/Benedict-s-resume',
}

export default nextConfig
