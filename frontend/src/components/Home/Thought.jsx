import React from "react";

const Thought = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/home/thought/img.jpg"
        alt="Luxury Living"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08111b]/55" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div
          className="
            rounded-[2rem]
            border border-white/15
            bg-white/10
            px-12
            py-10
            text-center
            backdrop-blur-xl
            shadow-[0_8px_40px_rgba(0,0,0,0.35)]
          "
        >
          <h2 className="text-4xl font-light tracking-[-0.03em] text-white md:text-6xl">
            Live Life, Lavishly
          </h2>

          <p className="mt-4 text-lg font-light text-white/90 md:text-2xl">
            Luxury living redefined with global inspiration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Thought;