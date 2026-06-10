import React from "react";
import Navbar from "../common/Navbar";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/plans/hero/bg.jpg"
        alt="Plans"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Navbar */}
      <Navbar />

      {/* Center Glass Title */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="rounded-2xl border border-white/20 bg-white/1 px-8 py-2 text-center shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl font-normal tracking-tight text-white md:text-6xl">
            Plans
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;