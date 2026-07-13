import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.128"],
  experimental: {
    // Inlinea el CSS en el HTML: elimina el request render-blocking
    // de la cadena crítica y mejora FCP/LCP.
    inlineCss: true,
  },
};

export default nextConfig;
