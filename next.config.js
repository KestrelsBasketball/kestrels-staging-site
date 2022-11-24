/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
    deviceSizes: [375, 425, 650, 768, 960, 1280, 1400],
  },
};
