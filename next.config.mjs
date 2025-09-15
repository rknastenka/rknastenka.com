/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Since this is a user GitHub Pages site (itzbana.github.io), no basePath needed
  // If this were a project site, you'd need: basePath: '/repository-name'
};

export default nextConfig;
