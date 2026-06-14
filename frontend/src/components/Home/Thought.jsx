import React from "react";

const Thought = () => {
  return (
    <section className="relative min-h-[72svh] overflow-hidden md:h-screen">
      {/* Background */}
      <img
        data-parallax-img
        src="/home/thought/img.jpg"
        alt="Luxury Living"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08111b]/55" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[72svh] items-center justify-center px-6 py-16 md:h-full md:min-h-0 md:py-0">
        <div
          data-reveal
          className="
            rounded-[2rem]
            border border-white/15
            bg-white/10
            px-6
            py-8
            text-center
            backdrop-blur-xl
            shadow-[0_8px_40px_rgba(0,0,0,0.35)]
          "
        >
          <h2 data-split className="text-3xl font-light tracking-[-0.03em] text-white sm:text-4xl md:text-6xl">
            Live Life, Lavishly
          </h2>

          <p className="mt-4 text-base font-light text-white/90 md:text-2xl">
            Luxury living redefined with global inspiration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Thought;
