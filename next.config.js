/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: process.env.OUTPUT,
  // async rewrites() {
  //   return { beforeFiles: [{ source: "/api/:path*", destination: `${process.env.API_SERVER}/:path*` }] };
  // },
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

console.log({ API_SERVER: process.env.API_SERVER });

export default nextConfig;
