"use client";

import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

export default function ClientEnhancements() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Analytics />
    </>
  );
}
