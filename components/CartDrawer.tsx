"use client";

import { useCart } from "@/lib/cart";
import PastryIcon from "@/components/PastryIcon";

export default function CartDrawer() {
  const { lines, isOpen, closeCart, setQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-chocolate2/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`liquid-glass fixed right-3 top-3 bottom-3 z-[80] flex w-[calc(100%-1.5rem)] max-w-sm flex-col rounded-3xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-[calc(100%+1rem)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl text-espresso">Your Bag</h3>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" fill="none">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <PastryIcon name="croissant" className="h-16 w-16 text-caramel/60" />
            <p className="mt-4 font-body text-sm text-espresso/60">
              Your bag is empty — something wonderful is waiting on the menu.
            </p>
          </div>
        ) : (
          <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-1">
            {lines.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-4 rounded-2xl bg-white/30 p-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-butter/40">
                  <PastryIcon name={product.icon as any} className="h-8 w-8 text-caramel" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-body text-sm text-espresso">{product.name}</p>
                  <p className="font-body text-xs text-espresso/60">€{product.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="h-7 w-7 rounded-full bg-white/60 font-body text-sm"
                    onClick={() => setQuantity(product.id, quantity - 1)}
                  >
                    −
                  </button>
                  <span className="w-4 text-center font-body text-sm">{quantity}</span>
                  <button
                    className="h-7 w-7 rounded-full bg-white/60 font-body text-sm"
                    onClick={() => setQuantity(product.id, quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  aria-label="Remove"
                  onClick={() => removeItem(product.id)}
                  className="text-espresso/40 hover:text-strawberry"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" fill="none">
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-espresso/10 pt-5">
          <div className="flex items-center justify-between font-body text-sm text-espresso/70">
            <span>Subtotal</span>
            <span className="font-display text-lg text-espresso">€{subtotal.toFixed(2)}</span>
          </div>
          <button
            disabled={lines.length === 0}
            className="mt-4 w-full rounded-full bg-espresso py-3 font-body text-sm text-cream transition hover:bg-chocolate disabled:opacity-40"
          >
            Order Something Wonderful.
          </button>
        </div>
      </aside>
    </>
  );
}
