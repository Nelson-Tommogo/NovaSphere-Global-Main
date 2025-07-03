/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // required for next export
  },
}

export default nextConfig
