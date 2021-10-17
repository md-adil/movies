/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";
module.exports = {
    reactStrictMode: true,
    basePath: isDev ? "" : "/movies",
    assetPrefix: isDev ? "/" : "/movies/",
};
