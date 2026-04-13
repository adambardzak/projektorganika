"use client";

import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function TrackedCtaLink({ href, onClick, children, ...rest }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    // Fire-and-forget — don't block navigation
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout");
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "begin_checkout", {
        currency: "CZK",
        value: 990,
      });
    }

    // Let the browser navigate normally (no preventDefault)
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
