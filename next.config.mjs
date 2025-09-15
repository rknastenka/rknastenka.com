/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
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
