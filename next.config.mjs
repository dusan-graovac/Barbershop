/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  ...(isProd && isGitHubPages && {
    basePath: '/Barbershop',
    assetPrefix: '/Barbershop',
  }),
};

export default nextConfig;