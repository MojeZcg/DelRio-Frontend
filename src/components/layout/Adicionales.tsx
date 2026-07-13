"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const GA_ID = "G-V542ZKE2VK";

// Carga gtag recién en la primera interacción del usuario para no
// bloquear el main thread durante la carga inicial de la página.
function DeferredGoogleAnalytics() {
  useEffect(() => {
    let loaded = false;
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

    const load = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, load));

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      const init = document.createElement("script");
      init.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(init);
    };

    events.forEach((e) =>
      window.addEventListener(e, load, { once: true, passive: true }),
    );
    return () => events.forEach((e) => window.removeEventListener(e, load));
  }, []);

  return null;
}

export default function Adicionales() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Analytics />
      <DeferredGoogleAnalytics />
    </>
  );
}
