"use client";

import { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/menu";

export default function DailyMenu() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll(".menu-card");
      if (!cards?.length) return;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.06, ease: "power3.out" }
      );
    },
    { dependencies: [active], scope: gridRef }
  );

  return (
    <section id="menu" className="relative py-28">
      <div className="container-edge">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm text-caramel">Today&apos;s Selection</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            Fresh From The Oven.
          </h2>
          <p className="mt-4 font-body text-espresso/65">
            Today&apos;s creations, baked fresh and ready when you are.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              data-cursor-hover
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 font-body text-sm transition-colors ${
                active === cat
                  ? "bg-espresso text-cream"
                  : "liquid-glass text-espresso/75 hover:text-espresso"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((product) => (
            <div key={product.id} className="menu-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
