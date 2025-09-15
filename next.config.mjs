/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure static export works properly
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Custom domain configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
