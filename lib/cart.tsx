"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Pastries" | "Cakes" | "Bread" | "Desserts" | "Coffee";
  description: string;
  icon: string;
};

type CartLine = { product: Product; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  subtotal: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, quantity: l.quantity + 1 } : l
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, quantity } : l))
    );
  }, []);

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
    [lines]
  );

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    setQuantity,
    subtotal,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
