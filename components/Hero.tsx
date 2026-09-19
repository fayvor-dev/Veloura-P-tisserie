"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FloatingObject from "@/components/FloatingObject";
import PastryIcon from "@/components/PastryIcon";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.7 })
        .from(".hero-line", { opacity: 0, y: 40, duration: 0.9, stagger: 0.12 }, "-=0.4")
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .from(".hero-scene", { opacity: 0, scale: 0.85, duration: 1.1, ease: "power2.out" }, "-=0.9");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,217,162,0.55),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(231,183,155,0.5),transparent_50%)]" />

      <FloatingObject icon="croissant" className="left-[6%] top-[22%]" size={70} depth={1.4} duration={7} color="text-caramel" />
      <FloatingObject icon="wheat" className="left-[14%] top-[68%]" size={54} depth={0.8} duration={9} delay={0.6} color="text-honey" />
      <FloatingObject icon="strawberry" className="right-[10%] top-[18%]" size={50} depth={1.1} duration={6.5} delay={0.3} color="text-strawberry" />
      <FloatingObject icon="chocolate" className="right-[6%] top-[62%]" size={58} depth={1.6} duration={8} delay={0.9} color="text-espresso" />
      <FloatingObject icon="flour" className="left-[42%] top-[10%]" size={40} depth={0.6} duration={10} color="text-vanilla" />
      <FloatingObject icon="vanilla" className="right-[30%] top-[80%]" size={46} depth={0.9} duration={7.5} delay={1.2} color="text-espresso" />

      <div className="container-edge relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="hero-eyebrow mb-5 font-body text-sm text-caramel">
            Veloura Pâtisserie
          </p>
          <h1 className="font-display text-balance text-[13vw] leading-[0.98] tracking-tight text-espresso md:text-[4.6vw]">
            <span className="hero-line block">Baked beautifully.</span>
            <span className="hero-line block italic text-caramel">Made to be remembered.</span>
          </h1>
          <p className="hero-sub mt-6 max-w-md font-body text-lg text-espresso/75">
            Handcrafted pastries, delicate cakes, and warm bread made fresh
            every day.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#menu"
              data-cursor-hover
              className="hero-cta liquid-glass rounded-full px-7 py-3 font-body text-sm text-espresso transition hover:-translate-y-0.5"
            >
              Explore Our Menu
            </a>
            <a
              href="#order"
              data-cursor-hover
              className="hero-cta rounded-full bg-espresso px-7 py-3 font-body text-sm text-cream transition hover:-translate-y-0.5 hover:bg-chocolate"
            >
              Order Online
            </a>
          </div>
        </div>

        <div className="hero-scene relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center md:h-[520px]">
          <div className="absolute h-64 w-64 rounded-full bg-caramel/25 blur-3xl md:h-80 md:w-80" />
          <div
            className="liquid-glass relative flex h-72 w-72 items-center justify-center rounded-full md:h-96 md:w-96"
            style={{ animation: "drift 9s ease-in-out infinite" }}
          >
            <PastryIcon name="croissant" className="h-36 w-36 text-caramel md:h-48 md:w-48" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-espresso/50 md:flex">
        <span className="font-body text-xs tracking-wide">Scroll</span>
        <div className="h-10 w-px animate-pulse bg-espresso/30" />
      </div>
    </section>
  );
}
