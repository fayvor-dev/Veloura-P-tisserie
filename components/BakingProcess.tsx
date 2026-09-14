"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { n: "01", title: "Select", text: "Premium ingredients carefully chosen." },
  { n: "02", title: "Prepare", text: "Measured and prepared by hand." },
  { n: "03", title: "Rest", text: "Time allows the dough to develop." },
  { n: "04", title: "Bake", text: "Slowly baked until golden perfection." },
  { n: "05", title: "Finish", text: "Hand decorated and carefully presented." },
];

export default function BakingProcess() {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const el = track.current;
        const sec = section.current;
        if (!el || !sec) return;
        const distance = el.scrollWidth - window.innerWidth;
        gsap.to(el, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 0.8,
            pin: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section ref={section} className="relative overflow-hidden bg-vanilla/40 py-28 md:py-0">
      <div className="md:flex md:h-screen md:flex-col md:justify-center">
        <div className="container-edge mb-10 md:mb-14">
          <p className="font-body text-sm text-caramel">The Process</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            From Flour to Something Wonderful.
          </h2>
        </div>

        <div
          ref={track}
          className="flex flex-col gap-6 px-6 md:flex-row md:gap-10 md:pl-[6vw] md:pr-[20vw]"
        >
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="liquid-glass flex min-w-[280px] shrink-0 flex-col justify-between rounded-3xl p-8 md:h-[320px] md:w-[360px]"
            >
              <span className="font-display text-5xl text-caramel/60">{step.n}</span>
              <div>
                <h3 className="font-display text-2xl text-espresso">{step.title}</h3>
                <p className="mt-2 font-body text-sm text-espresso/65">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
