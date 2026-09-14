"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    year: "Long Fermentation",
    text: "Our doughs rest for up to thirty-six hours, developing flavor that cannot be rushed.",
  },
  {
    year: "Small-Batch Baking",
    text: "Every tray is limited by hand, never by machine, so quality never competes with volume.",
  },
  {
    year: "Handcrafted Pastries",
    text: "Lamination, shaping and finishing are done by hand, layer by layer, every morning.",
  },
  {
    year: "Premium Ingredients",
    text: "French butter, Belgian chocolate and Madagascar vanilla form the foundation of everything we bake.",
  },
  {
    year: "Modern Creativity",
    text: "Traditional technique meets contemporary flavor pairing, reimagined each season.",
  },
];

export default function Story() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".story-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );
      gsap.utils.toArray<HTMLElement>(".story-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 82%" },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section id="story" ref={root} className="relative py-28">
      <div className="container-edge">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-body text-sm text-caramel">Our Story</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            Slow Baking. Beautiful Results.
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-2xl">
          <div className="absolute left-[7px] top-0 h-full w-px bg-espresso/10 md:left-1/2">
            <div className="story-line h-full w-full bg-caramel" />
          </div>

          <ul className="space-y-14">
            {MILESTONES.map((m, i) => (
              <li
                key={m.year}
                className={`story-item relative pl-8 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-caramel bg-cream md:left-auto ${
                    i % 2 === 0 ? "md:right-[-7px]" : "md:left-[-7px]"
                  }`}
                />
                <h3 className="font-display text-lg text-espresso">{m.year}</h3>
                <p className="mt-1 font-body text-sm text-espresso/65">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
