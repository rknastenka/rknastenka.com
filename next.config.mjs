/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Custom domain configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // No basePath needed for custom domain
};

export default nextConfig;
