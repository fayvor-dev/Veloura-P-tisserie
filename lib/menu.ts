import { Product } from "@/lib/cart";

export const products: Product[] = [
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    price: 4.5,
    category: "Pastries",
    description: "Flaky layers of cultured butter and golden pastry.",
    icon: "croissant",
  },
  {
    id: "pistachio-eclair",
    name: "Pistachio Éclair",
    price: 6.5,
    category: "Pastries",
    description: "Silky pistachio cream with a delicate vanilla glaze.",
    icon: "eclair",
  },
  {
    id: "midnight-chocolate-cake",
    name: "Midnight Chocolate Cake",
    price: 8.0,
    category: "Cakes",
    description: "Dark chocolate sponge layered with silky ganache.",
    icon: "cake",
  },
  {
    id: "strawberry-cloud",
    name: "Strawberry Cloud",
    price: 7.5,
    category: "Desserts",
    description: "Fresh strawberries, vanilla cream and delicate sponge.",
    icon: "cloud-cake",
  },
  {
    id: "honey-almond-tart",
    name: "Honey Almond Tart",
    price: 6.0,
    category: "Desserts",
    description: "Almond cream, honey and crisp pastry.",
    icon: "tart",
  },
  {
    id: "butter-brioche",
    name: "Butter Brioche",
    price: 5.0,
    category: "Bread",
    description: "Soft, rich and freshly baked.",
    icon: "brioche",
  },
  {
    id: "sourdough-miche",
    name: "Sourdough Miche",
    price: 6.5,
    category: "Bread",
    description: "Naturally leavened, thirty-six hour rise, deep crust.",
    icon: "loaf",
  },
  {
    id: "veloura-signature-latte",
    name: "Veloura Signature Latte",
    price: 4.0,
    category: "Coffee",
    description: "Single-origin espresso, steamed milk, a trace of honey.",
    icon: "coffee",
  },
];

export const categories = [
  "All",
  "Pastries",
  "Cakes",
  "Bread",
  "Desserts",
  "Coffee",
] as const;
