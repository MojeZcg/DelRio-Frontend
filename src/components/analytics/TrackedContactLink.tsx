// components/TrackedContactLink.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  contactType: "whatsapp" | "phone" | "email" | "maps";
  contactArea: string;
  contactLabel: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  }
}

export function TrackedContactLink({
  href,
  children,
  className,
  target,
  rel,
  contactType,
  contactArea,
  contactLabel,
}: Props) {
  function handleClick() {
    window.gtag?.("event", "contact_click", {
      contact_type: contactType,
      contact_area: contactArea,
      contact_label: contactLabel,
    });
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
