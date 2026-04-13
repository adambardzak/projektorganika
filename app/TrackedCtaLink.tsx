"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@vercel/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function TrackedCtaLink({ href, onClick, children, ...rest }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    // Vercel Analytics custom event
    track("cta_click", { label: "checkout", value: 990 });

    // Meta Pixel
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout");
    }

    // GA4
    if (typeof window.gtag === "function") {
      window.gtag("event", "begin_checkout", {
        currency: "CZK",
        value: 990,
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
