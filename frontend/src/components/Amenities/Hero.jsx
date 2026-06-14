import React from "react";

const Hero = () => {
  return (
    <section data-hero className="relative h-screen overflow-hidden">
      <img
        data-hero-bg
        src="/amenities/hero/img.jpg"
        alt="Amenities"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div data-hero-reveal className="relative max-w-[calc(100vw-2rem)] overflow-hidden rounded-[2rem] border border-white/20 bg-white/.2 px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />

          <div className="relative text-center">
            <p data-hero-reveal data-split className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#C6A12D] sm:text-lg md:text-2xl">
              Luxurious
            </p>

            <h1 data-split className="text-3xl font-normal text-white sm:text-4xl md:text-5xl">
              Amenities Of Europa
            </h1>

            <p data-hero-reveal data-split className="mt-5 text-sm font-light uppercase tracking-wide text-white/90 sm:text-xl md:text-xl">
              Spread Across | ~52,000 sft
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default Hero;
