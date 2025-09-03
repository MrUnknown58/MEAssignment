/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Static HTML export. Run with: npm run export
   * Outputs to ./out (default). Suitable for static hosting (S3, GitHub Pages, Netlify drop-in, etc.)
   */
  output: "export",
  images: {
    /**
     * next export cannot run the built-in Image Optimization server.
     * Setting unoptimized ensures <Image> renders plain <img> tags while keeping layout benefits.
     */
    unoptimized: true,
    domains: [
      "cdn.prod.website-files.com",
      "static.wixstatic.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
