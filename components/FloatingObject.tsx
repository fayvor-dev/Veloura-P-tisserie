"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PastryIcon from "@/components/PastryIcon";

type IconName = React.ComponentProps<typeof PastryIcon>["name"];

export default function FloatingObject({
  icon,
  className = "",
  depth = 1,
  size = 64,
  duration = 8,
  delay = 0,
  color = "text-caramel",
}: {
  icon: IconName;
  className?: string;
  depth?: number;
  size?: number;
  duration?: number;
  delay?: number;
  color?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = outer.current;
    if (!el) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const relX = (e.clientX / window.innerWidth - 0.5) * depth * 24;
      const relY = (e.clientY / window.innerHeight - 0.5) * depth * 24;
      quickX(relX);
      quickY(relY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [depth]);

  return (
    <div ref={outer} className={`pointer-events-none absolute ${className}`}>
      <div
        className={`${color} opacity-80`}
        style={{
          width: size,
          height: size,
          animation: `drift ${duration}s ease-in-out ${delay}s infinite`,
        }}
      >
        <PastryIcon name={icon} className="h-full w-full" />
      </div>
    </div>
  );
}
