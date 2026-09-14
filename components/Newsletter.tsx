"use client";

import { useState } from "react";
import FloatingObject from "@/components/FloatingObject";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <section className="relative overflow-hidden py-28">
      <FloatingObject icon="flour" className="left-[10%] top-[20%]" size={36} depth={0.6} duration={9} />
      <FloatingObject icon="flour" className="right-[14%] top-[60%]" size={28} depth={0.8} duration={7} delay={0.5} />
      <FloatingObject icon="flour" className="left-[30%] bottom-[10%]" size={22} depth={0.5} duration={11} delay={1} />

      <div className="container-edge">
        <div className="liquid-glass mx-auto max-w-2xl rounded-[2.5rem] p-10 text-center md:p-14">
          <h2 className="font-display text-3xl text-espresso md:text-4xl">
            Fresh From The Oven.
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm text-espresso/65">
            Join our little corner of the internet for new creations, seasonal
            treats and bakery stories.
          </p>

          {joined ? (
            <p className="mt-8 font-display text-lg text-caramel">
              Welcome to Veloura — check your inbox soon.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-full border border-espresso/15 bg-white/50 px-5 py-3 font-body text-sm text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-caramel/50"
              />
              <button
                type="submit"
                data-cursor-hover
                className="rounded-full bg-espresso px-6 py-3 font-body text-sm text-cream transition hover:bg-chocolate"
              >
                Join Veloura
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
