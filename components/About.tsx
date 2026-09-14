"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PastryIcon from "@/components/PastryIcon";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "12+", label: "Years of Craft" },
  { value: "30+", label: "Daily Creations" },
  { value: "100%", label: "Handcrafted" },
];

export default function About() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-mask",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        }
      );
      gsap.fromTo(
        ".about-copy",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 65%" },
        }
      );
      gsap.utils.toArray<HTMLElement>(".about-stat").forEach((stat, i) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: stat, start: "top 90%" },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-28">
      <div className="container-edge grid items-center gap-14 md:grid-cols-2">
        <div className="about-mask relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-butter via-vanilla to-peach">
          <div className="absolute inset-0 flex items-center justify-center">
            <PastryIcon name="loaf" className="h-40 w-40 text-espresso/25" />
          </div>
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-caramel/30 blur-2xl" />
        </div>

        <div className="about-copy">
          <p className="font-body text-sm text-caramel">About Veloura</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            The Art of Baking.
          </h2>
          <p className="mt-5 max-w-md font-body text-espresso/70">
            At Veloura, baking is more than a process. It is a ritual built
            around patience, craftsmanship and ingredients chosen with
            intention.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="about-stat">
                <p className="font-display text-3xl text-espresso">{stat.value}</p>
                <p className="mt-1 font-body text-xs text-espresso/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
