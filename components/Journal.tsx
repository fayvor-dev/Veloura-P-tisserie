"use client";

import PastryIcon from "@/components/PastryIcon";

const ARTICLES = [
  { title: "The Thirty-Six Hour Croissant", tag: "Baking", icon: "croissant" },
  { title: "Where Our Vanilla Comes From", tag: "Ingredients", icon: "vanilla" },
  { title: "Inside the Veloura Kitchen at 4am", tag: "Behind the Scenes", icon: "wheat" },
  { title: "A Quiet Autumn Menu", tag: "Seasonal", icon: "tart" },
];

export default function Journal() {
  return (
    <section id="journal" className="relative py-28">
      <div className="container-edge">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-body text-sm text-caramel">From Our Kitchen</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            Journal
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {ARTICLES.map((a) => (
            <a
              key={a.title}
              href="#"
              data-cursor-hover
              className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-vanilla to-peach p-7"
            >
              <PastryIcon
                name={a.icon as any}
                className="absolute right-6 top-6 h-16 w-16 text-espresso/15 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />
              <div className="liquid-glass absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="font-body text-xs text-espresso/50">{a.tag}</span>
                <h3 className="mt-1 font-display text-2xl text-espresso">{a.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
