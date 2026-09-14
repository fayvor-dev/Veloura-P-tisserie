"use client";

import { useEffect, useState } from "react";

const LINKS = ["Home", "Our Story", "Menu", "Cakes", "Journal", "Contact"];
const SOCIALS = ["Instagram", "TikTok", "Facebook"];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer id="footer" className="relative bg-chocolate2 pb-10 pt-20 text-cream/80">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-cream/10 pb-12 md:flex-row">
          <div>
            <p className="font-display text-2xl text-cream">Veloura Pâtisserie</p>
            <p className="mt-2 max-w-xs font-body text-sm text-cream/50">
              Baked beautifully. Made to be remembered.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <a key={l} href="#" className="font-body text-sm text-cream/70 hover:text-cream">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a key={s} href="#" className="font-body text-sm text-cream/70 hover:text-cream">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-cream/40 md:flex-row">
          <p>© 2026 Veloura Pâtisserie. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`rounded-full border border-cream/20 px-4 py-2 transition-all duration-500 ${
              showTop ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
