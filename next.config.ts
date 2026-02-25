import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.128"],
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
