/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'experimental-serverless-trace',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // Add more paths as needed
    }
  },
};

export default nextConfig;
