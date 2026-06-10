import React from "react";
import Navbar from "../common/Navbar";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/amenities/hero/img.jpg"
        alt="Amenities"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Navbar */}
      <Navbar />

      {/* Center Glass Card */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/.2 px-12 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          {/* subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />

          <div className="relative text-center">
            <p className="mb-4 text-lg font-medium uppercase tracking-[0.35em] text-[#C6A12D] md:text-2xl">
              Luxurious
            </p>

            <h1 className="text-4xl font-normal text-white md:text-5xl">
              Amenities Of Europa
            </h1>

            <p className="mt-5 text-xl font-light uppercase tracking-wide text-white/90 md:text-xl">
              Spread Across | ~52,000 sft
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default Hero;