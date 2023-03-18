/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://api.ajou.dev:3000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig
