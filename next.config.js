/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: process.env.OUTPUT,
  exportPathMap: async function (_, { dev }) {
    if (dev) {
      return;
    }
    return {
      "/": { page: "/[[...index]]" },
    };
  },
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_SERVER: process.env.API_SERVER,
  },
};

export default nextConfig;
