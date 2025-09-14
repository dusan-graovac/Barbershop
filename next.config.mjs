/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  // Add basePath and assetPrefix for GitHub Pages
  assetPrefix: process.env.GITHUB_PAGES ? '/Barbershop' : '',
  basePath: process.env.GITHUB_PAGES ? '/Barbershop' : '',
};

export default nextConfig;