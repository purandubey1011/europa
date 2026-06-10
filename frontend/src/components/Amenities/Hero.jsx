import React from "react";
import Navbar from '../common/Navbar.jsx'

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <img
        src="/amenities/hero/bg.png"
        alt="Amenities"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

      <Navbar />

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-center text-6xl font-normal uppercase tracking-[0.35em] text-white sm:text-7xl md:text-8xl">
          Amenities
        </h1>
      </div>
    </section>
  );
};

export default Hero;