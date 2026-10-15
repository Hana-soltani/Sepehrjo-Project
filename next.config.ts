import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "danajou.s3.ir-thr-at1.arvanstorage.ir",
      },
    ],
  },
};

export default nextConfig;