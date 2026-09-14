"use client";

import { useState } from "react";
import PastryIcon from "@/components/PastryIcon";

const INGREDIENTS = [
  { name: "French Butter", icon: "butter", story: "Cultured in small dairies of Normandy for a deep, tangy richness." },
  { name: "Belgian Chocolate", icon: "chocolate", story: "Single-origin couverture, tempered by hand for a clean snap." },
  { name: "Madagascar Vanilla", icon: "vanilla", story: "Sun-cured pods, hand-split for their full aromatic oils." },
  { name: "Pistachio", icon: "pistachio", story: "Sicilian pistachios, lightly roasted and milled in-house." },
  { name: "Fresh Strawberries", icon: "strawberry", story: "Sourced weekly from nearby growers at peak ripeness." },
  { name: "Artisan Flour", icon: "wheat", story: "Stone-milled, low-gluten flour for a tender, open crumb." },
  { name: "Local Honey", icon: "honey", story: "Raw wildflower honey harvested within fifty kilometres." },
] as const;

export default function Ingredients() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative py-28">
      <div className="container-edge">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-body text-sm text-caramel">Artisanal Ingredients</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            Nothing Ordinary Goes Into Our Kitchen.
          </h2>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {INGREDIENTS.map((ing) => (
            <button
              key={ing.name}
              data-cursor-hover
              onMouseEnter={() => setActive(ing.name)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(ing.name)}
              onBlur={() => setActive(null)}
              className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-br from-white/60 to-butter/30 shadow-glass transition-transform duration-500 hover:-translate-y-2 md:h-36 md:w-36"
              style={{ animation: `drift ${7 + INGREDIENTS.indexOf(ing)}s ease-in-out infinite` }}
            >
              <PastryIcon name={ing.icon} className="h-12 w-12 text-caramel md:h-14 md:w-14" />
              <span className="mt-1 px-2 text-center font-body text-[11px] text-espresso/70">
                {ing.name}
              </span>

              <div
                className={`liquid-glass pointer-events-none absolute -top-4 left-1/2 w-56 -translate-x-1/2 -translate-y-full rounded-2xl p-4 text-left transition-all duration-300 ${
                  active === ing.name ? "opacity-100 visible" : "invisible opacity-0"
                }`}
              >
                <p className="font-display text-sm text-espresso">{ing.name}</p>
                <p className="mt-1 font-body text-xs text-espresso/65">{ing.story}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
