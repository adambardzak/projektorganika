"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { getConsent, type ConsentCategories } from "./CookieBanner";

const GA_ID = "G-2SPQF52FSV";

export function Analytics() {
  const [consent, setConsent] = useState<ConsentCategories | null>(null);

  useEffect(() => {
    // Read stored consent on mount
    setConsent(getConsent());

    // Listen for consent changes
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentCategories>).detail;
      setConsent(detail);
    };
    window.addEventListener("organika-consent", handler);
    return () => window.removeEventListener("organika-consent", handler);
  }, []);

  // Revoke GA when user disables analytics
  useEffect(() => {
    if (consent && !consent.analytics && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }, [consent]);

  return (
    <>
      {/* Vercel Analytics — privacy-friendly, no cookies, always on */}
      <VercelAnalytics />

      {/* GA4 — only when analytics consent is granted */}
      {consent?.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
              });
              gtag('config', '${GA_ID}', {
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel — only when marketing consent is granted */}
      {consent?.marketing && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('consent', 'grant');
            fbq('init', '1295454135154438');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}

// Extend Window for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}
