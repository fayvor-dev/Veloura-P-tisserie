"use client";

import FloatingObject from "@/components/FloatingObject";
import PastryIcon from "@/components/PastryIcon";

export default function DarkDessert() {
  return (
    <section id="order" className="relative overflow-hidden bg-chocolate py-32 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(215,162,75,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:26px_26px]" />

      <FloatingObject icon="chocolate" className="left-[10%] top-[16%]" size={60} depth={1.2} duration={9} color="text-honey" />
      <FloatingObject icon="strawberry" className="right-[12%] top-[20%]" size={48} depth={0.9} duration={7} delay={0.4} color="text-strawberry" />
      <FloatingObject icon="macaron" className="left-[16%] bottom-[14%]" size={54} depth={1.3} duration={8} delay={0.7} color="text-peach" />

      <div className="container-edge relative text-center">
        <p className="font-body text-sm text-honey">Dark & Decadent</p>
        <h2 className="mx-auto mt-3 max-w-xl font-display text-4xl text-cream md:text-5xl">
          There Is Always Room For Dessert.
        </h2>

        <div className="relative mx-auto mt-14 flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-espresso to-chocolate2 shadow-glassDark md:h-72 md:w-72">
          <div className="absolute inset-4 rounded-full border border-honey/20" />
          <PastryIcon name="cake" className="h-24 w-24 text-honey md:h-32 md:w-32" />
        </div>

        <a
          href="#menu"
          data-cursor-hover
          className="liquid-glass-dark mt-14 inline-block rounded-full px-8 py-3 font-body text-sm text-cream transition hover:-translate-y-0.5"
        >
          Discover Desserts
        </a>
      </div>
    </section>
  );
}
