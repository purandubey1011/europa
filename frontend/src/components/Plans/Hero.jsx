import React from "react";

const Hero = () => {
  return (
    <section data-hero className="relative h-screen overflow-hidden bg-black">
      <img
        data-hero-bg
        src="/plans/hero/bg.jpg"
        alt="Plans"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div data-hero-reveal className="rounded-2xl border border-white/20 bg-white/1 px-7 py-3 text-center shadow-2xl backdrop-blur-sm sm:px-8">
          <h1 data-split className="text-4xl font-medium tracking-tight text-white md:text-6xl">
            Plans
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
