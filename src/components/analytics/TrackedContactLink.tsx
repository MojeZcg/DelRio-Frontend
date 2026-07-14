// components/TrackedContactLink.tsx
"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ContactType = "whatsapp" | "phone" | "email" | "maps";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: string;
  target?: string;
  rel?: string;
  contactType: ContactType;
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

export function trackContactClick(params: {
  contactType: ContactType;
  contactArea: string;
  contactLabel: string;
}) {
  window.gtag?.("event", "contact_click", {
    contact_type: params.contactType,
    contact_area: params.contactArea,
    contact_label: params.contactLabel,
  });
}

export function TrackedContactLink({
  href,
  children,
  className,
  style,
  title,
  target,
  rel,
  contactType,
  contactArea,
  contactLabel,
}: Props) {
  function handleClick() {
    trackContactClick({ contactType, contactArea, contactLabel });
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      title={title}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
