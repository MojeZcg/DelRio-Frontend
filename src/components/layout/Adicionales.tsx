"use client";

import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export default function Adicionales() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Analytics />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-V542ZKE2VK`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V542ZKE2VK', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
    </>
  );
}
