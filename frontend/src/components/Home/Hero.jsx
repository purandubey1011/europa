import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section data-hero className="relative min-h-[135svh] bg-white md:min-h-[180vh]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          data-hero-bg
          src="/home/hero/bg4.jpg"
          alt="Europa Siliguri"
          className="h-full w-full object-cover object-top will-change-transform"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="sticky top-0 z-10 flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center px-5 pt-36 text-center sm:pt-40 lg:pt-44">
          <h1
            data-split
            className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#fff] sm:text-6xl md:text-8xl"
          >
            Siliguri's Most Coveted
            <br />
            Home
          </h1>

          <p data-hero-reveal className="mt-5 text-lg font-normal text-[#ffffff] sm:text-2xl">
            7 star living G+2 Townhouses
          </p>

          <h2 data-hero-reveal data-split className="mt-2 text-2xl font-normal text-[#C7A02D] sm:text-3xl">
            Europa Siliguri
          </h2>

          <p data-hero-reveal className="mt-4 max-w-xl text-sm leading-relaxed text-[#ffffff] sm:text-lg">
            Experience a seamless blend of European architecture with
            vibrant Indian elegance.
          </p>

          <button
            data-hero-reveal
            className="mt-6 flex items-center gap-3 rounded-xl bg-[#C7A02D] px-4 py-2 text-sm font-medium uppercase text-white transition duration-500 hover:-translate-y-0.5 hover:bg-[#b58f22]"
          >
            See Plans

            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[#C7A02D]">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
