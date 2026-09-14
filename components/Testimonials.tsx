"use client";

const REVIEWS = [
  { quote: "Everything tastes as beautiful as it looks.", name: "Amelia R." },
  { quote: "The croissants are dangerously good.", name: "Daniel M." },
  { quote: "Veloura has become our weekend ritual.", name: "Sofia K." },
];

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="container-edge">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-body text-sm text-caramel">Customer Stories</p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            Loved at First Bite.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <blockquote
              key={r.name}
              className="liquid-glass rounded-3xl p-8"
              style={{ animation: `drift ${8 + i}s ease-in-out infinite` }}
            >
              <p className="font-display text-xl leading-snug text-espresso">
                &ldquo;{r.quote}&rdquo;
              </p>
              <cite className="mt-5 block font-body text-sm not-italic text-espresso/60">
                — {r.name}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
