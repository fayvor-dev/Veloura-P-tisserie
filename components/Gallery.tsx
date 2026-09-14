"use client";

import FloatingObject from "@/components/FloatingObject";

const ITEMS: { icon: any; label: string; className: string; size: number; depth: number; duration: number }[] = [
  { icon: "croissant", label: "Croissant", className: "left-[6%] top-[10%]", size: 88, depth: 1.2, duration: 8 },
  { icon: "cake", label: "Cake", className: "left-[30%] top-[45%]", size: 96, depth: 0.7, duration: 9.5 },
  { icon: "macaron", label: "Macarons", className: "right-[28%] top-[8%]", size: 72, depth: 1.4, duration: 7 },
  { icon: "coffee", label: "Coffee", className: "right-[6%] top-[50%]", size: 84, depth: 0.9, duration: 8.5 },
  { icon: "chocolate", label: "Chocolate", className: "left-[12%] bottom-[6%]", size: 80, depth: 1.6, duration: 6.5 },
  { icon: "eclair", label: "Pastries", className: "right-[16%] bottom-[10%]", size: 76, depth: 1.0, duration: 9 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-28">
      <div className="container-edge">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-body text-sm text-caramel">Anti-Gravity Gallery</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            A Little Something Extraordinary.
          </h2>
        </div>
      </div>

      <div className="relative mx-auto mt-16 h-[560px] max-w-5xl md:h-[620px]">
        {ITEMS.map((item) => (
          <div key={item.label} className={`absolute ${item.className}`}>
            <FloatingObject
              icon={item.icon}
              size={item.size}
              depth={item.depth}
              duration={item.duration}
              className="relative left-0 top-0"
              color="text-caramel"
            />
            <p className="mt-2 text-center font-body text-xs text-espresso/50">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
