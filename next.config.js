/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig
