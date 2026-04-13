"use client";

import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function TrackedCtaLink({ href, onClick, children, ...rest }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    // Meta Pixel — fire-and-forget
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout");
    }

    // GA4 via gtag
    if (typeof window.gtag === "function") {
      window.gtag("event", "begin_checkout", {
        currency: "CZK",
        value: 990,
      });
    }

    // Let the browser navigate normally
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
