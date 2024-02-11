/** @type {import('next').NextConfig} */
module.exports = {
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
