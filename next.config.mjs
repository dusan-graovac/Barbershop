/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Barbershop' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Barbershop' : '',
};

export default nextConfig;