/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s3.amazonaws.com", "github.blog"],
  },
};

module.exports = nextConfig;
