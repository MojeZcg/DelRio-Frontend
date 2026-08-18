import type { NextConfig } from "next";

// Cabeceras de seguridad. El sitio no mandaba ninguna: sin X-Frame-Options ni
// frame-ancestors se lo puede embeber en un iframe ajeno y superponerle
// controles (clickjacking sobre los botones de contacto), sin HSTS la primera
// visita por http queda expuesta a que se la intercepte antes del redirect, y
// sin nosniff el navegador adivina el tipo de una respuesta y puede terminar
// ejecutando como script algo que se subió como otra cosa.
//
// A diferencia del panel, acá NO va X-Robots-Tag: este sitio tiene que indexarse.
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
];

// La CSP sólo en producción, para no pelear con el HMR de `next dev`.
//
// `'unsafe-inline'` en script-src es lo que pide el bootstrap que Next inyecta
// en el HTML, más el snippet de inicialización de gtag; en style-src lo pide
// `inlineCss`, que mete el CSS en la página a propósito. `'unsafe-eval'` lo
// necesita el runtime de Next. Con eso la CSP no frena un XSS inline, pero sí
// corta lo que más importa acá: cargar scripts de un host que no esté en la
// lista, y que la página termine embebida en un iframe de otro.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  // googletagmanager: analítica, cargada de forma diferida desde Adicionales.tsx
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.128"],
  experimental: {
    // Inlinea el CSS en el HTML: elimina el request render-blocking
    // de la cadena crítica y mejora FCP/LCP.
    inlineCss: true,
  },
  async headers() {
    const headers = [...securityHeaders];

    if (process.env.NODE_ENV === "production") {
      headers.push({
        key: "Content-Security-Policy",
        value: contentSecurityPolicy,
      });
    }

    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
