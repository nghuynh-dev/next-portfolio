/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
}

module.exports = nextConfig
