import React from "react";
import Navbar from "../common/Navbar";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Floor Plan */}
      <img
        src="/plans/hero/bg.jpg"
        alt="Unit Plans"
        className="absolute  h-[170%] w-[100%] object-cover object-top"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <Navbar />

      {/* Center Text */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-center text-5xl font-medium uppercase tracking-[0.25em] text-white md:text-8xl">
          Unit Plans
        </h1>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default Hero;