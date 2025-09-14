/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only add basePath/assetPrefix when building for GitHub Pages
  ...(process.env.GITHUB_PAGES && {
    assetPrefix: '/Barbershop/',
    basePath: '/Barbershop',
  }),
};

export default nextConfig;