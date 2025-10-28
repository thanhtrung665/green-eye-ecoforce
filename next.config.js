/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'placehold.co', 'i.imgur.com'], // THÊM DÒNG NÀY
  },
};

module.exports = nextConfig;
