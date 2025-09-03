/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.prod.website-files.com",
      "static.wixstatic.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
