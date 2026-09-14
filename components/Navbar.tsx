"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import PastryIcon from "@/components/PastryIcon";

const LINKS = [
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Cakes", href: "#gallery" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        data-cursor-hover
        className={`liquid-glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-[padding,background] duration-500 ${
          scrolled ? "md:px-6 md:py-3" : "md:px-8 md:py-4"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(255,250,240,0.5), rgba(255,255,255,0.18))"
            : undefined,
        }}
      >
        <a href="#top" className="font-display text-xl tracking-tight text-espresso">
          Veloura
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-body text-sm text-espresso/80 transition-colors hover:text-espresso"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-caramel transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-espresso/80 transition hover:bg-white/40 md:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button
            onClick={openCart}
            aria-label="Shopping bag"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-espresso/80 transition hover:bg-white/40"
          >
            <PastryIcon name="butter" className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-strawberry text-[10px] text-cream">
                {count}
              </span>
            )}
          </button>
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="liquid-glass absolute left-4 right-4 top-[calc(100%+8px)] rounded-3xl p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-lg text-espresso"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
