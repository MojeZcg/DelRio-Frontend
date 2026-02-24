"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientEnhancements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
