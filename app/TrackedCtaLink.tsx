"use client";

import { type AnchorHTMLAttributes, type MouseEvent } from "react";
import { track } from "@vercel/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function TrackedCtaLink({ href, onClick, children, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    // Vercel Analytics custom event
    track("cta_click", { label: "checkout", value: 697 });

    // Meta Pixel
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout", {
        currency: "CZK",
        value: 697,
      });
    }

    // GA4
    if (typeof window.gtag === "function") {
      window.gtag("event", "begin_checkout", {
        currency: "CZK",
        value: 697,
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
