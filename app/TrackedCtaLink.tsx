"use client";

import { useEffect, useMemo, useState, type AnchorHTMLAttributes, type FormEvent, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { track } from "@vercel/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function TrackedCtaLink({ href, onClick, children, ...rest }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const openModal = () => {
    setSubmitError(null);
    setIsOpen(true);

    track("lead_form_open", { label: "organika" });
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitting(false);
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    e.preventDefault();
    openModal();

    // Meta Pixel
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }

    // GA4: open lead form
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        method: "popup_form",
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !consent || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          consent,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Nepodařilo se odeslat formulář.");
      }

      track("lead_form_submit", { label: "organika" });

      if (typeof window.gtag === "function") {
        window.gtag("event", "sign_up", {
          method: "popup_form",
        });
      }

      window.location.href = href;
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error instanceof Error ? error.message : "Nepodařilo se odeslat formulář.");
    }
  };

  const isDisabled = useMemo(
    () => !name.trim() || !email.trim() || !consent || isSubmitting,
    [name, email, consent, isSubmitting],
  );

  const modal =
    mounted && isOpen
      ? createPortal(
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <button
              type="button"
              aria-label="Zavřít formulář"
              className="absolute inset-0 bg-black/85"
              onClick={closeModal}
            />

            <div className="relative z-10 w-full max-w-[460px] rounded-2xl border border-[#1a2a1b] bg-[#091109] p-5 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <button
                type="button"
                aria-label="Zavřít"
                onClick={closeModal}
                className="absolute right-3 top-3 h-8 w-8 rounded-full border border-[#244026] text-[#9cb89c] hover:text-white hover:border-[#3a5a3c]"
              >
                ×
              </button>

              <h3 className="text-white font-bold text-xl md:text-2xl pr-8">Získej přístup zdarma</h3>
              <p className="text-[#9cb89c] text-sm md:text-base mt-2">
                Vyplň jméno a e-mail. Po odeslání tě hned přesměrujeme do programu.
              </p>

              <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jméno"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[#1a2a1b] bg-[#0a120b] px-4 py-3 text-white placeholder:text-[#6b8a6b] outline-none focus:border-[#4ade80]/60"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#1a2a1b] bg-[#0a120b] px-4 py-3 text-white placeholder:text-[#6b8a6b] outline-none focus:border-[#4ade80]/60"
                />

                <label className="flex items-start gap-2.5 text-[#9cb89c] text-xs leading-relaxed">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-[#4ade80]"
                  />
                  <span>
                    Odesláním formuláře souhlasíš se zpracováním osobních údajů a se zasláním informací k tréninku.
                  </span>
                </label>

                {submitError && (
                  <p className="text-[#fca5a5] text-xs leading-relaxed">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isDisabled}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-4 text-base font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Odesílám..." : "Přejít do programu"}
                </button>
              </form>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <a href={href} onClick={handleClick} {...rest}>
        {children}
      </a>
      {modal}
    </>
  );
}
