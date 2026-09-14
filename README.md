# Veloura Pâtisserie

A premium, highly animated Next.js bakery website — Apple-inspired Liquid Glass,
anti-gravity floating pastries, GSAP + Lenis scroll storytelling, and a
procedural Three.js signature croissant.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS — design tokens in `tailwind.config.ts`
- GSAP + ScrollTrigger, Lenis smooth scroll (`components/SmoothScroll.tsx`)
- Three.js / React Three Fiber — procedural 3D croissant (`components/Croissant3D.tsx`)

## Notes

- All pastry/ingredient imagery is original SVG line-art (`components/PastryIcon.tsx`)
  rather than stock photography, so the site has no external image dependencies —
  swap in real photography or a GLTF croissant model whenever you're ready
  (the 3D scene is structured so a `.glb` can drop in easily).
- `prefers-reduced-motion` disables Lenis, cursor and floating-object motion.
- The cart in the navbar is a full working frontend flow (add/remove/quantity/subtotal);
  wire the "Order Something Wonderful" button up to a real checkout/payment provider.
