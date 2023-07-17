/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["casaverde-server.vercel.app"],
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
