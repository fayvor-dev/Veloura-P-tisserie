"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import PastryIcon from "@/components/PastryIcon";
import { Product, useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const handleMove = (e: React.PointerEvent) => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateX: -py * 8,
      rotateY: px * 8,
      y: -6,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, y: 0, duration: 0.6, ease: "power3.out" });
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      data-cursor-hover
      className="liquid-glass group relative flex flex-col rounded-3xl p-6"
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
    >
      <div className="relative mb-5 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-white/50 to-butter/30">
        <PastryIcon
          name={product.icon as any}
          className="h-20 w-20 text-caramel transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
        />
      </div>
      <h3 className="font-display text-xl text-espresso">{product.name}</h3>
      <p className="mt-2 flex-1 font-body text-sm text-espresso/65">
        {product.description}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-display text-lg text-caramel">
          €{product.price.toFixed(2)}
        </span>
        <button
          onClick={() => addItem(product)}
          className="translate-y-1 rounded-full bg-espresso px-4 py-2 font-body text-xs text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
