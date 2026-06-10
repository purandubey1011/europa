import React from "react";
import { ChevronRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/plans/banner/bg.jpg"
        alt="CP Greens"
        className="h-52 w-full object-cover md:h-64"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="mb-6 text-3xl font-light text-white md:text-5xl">
          Are you interested in this Property?
        </h2>

        <button className="flex items-center gap-2 bg-[#704633] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#5f3a2b]">
          Connect With Us
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Banner;