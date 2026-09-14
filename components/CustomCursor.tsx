"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        el.classList.add("is-hovering");
      }
    };

    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        el.classList.remove("is-hovering");
      }
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return <div ref={cursorRef} className="veloura-cursor" />;
}
