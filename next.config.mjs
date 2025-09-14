/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  basePath: '/Barbershop',
  assetPrefix: '/Barbershop',
};

export default nextConfig;