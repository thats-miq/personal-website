import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.gr-assets.com" },
      { hostname: "a.ltrbxd.com" },
    ],
  },
};

export default nextConfig;
