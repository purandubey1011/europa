import React from "react";

const Amenities = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden md:h-screen">
      <img
        data-parallax-img
        src="/home/amenities/img.jpg"
        alt="Europa Amenities"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#06111d]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      <div data-stagger-container className="relative z-10 flex min-h-[80vh] flex-col items-start justify-center gap-6 px-5 py-24 sm:px-8 md:h-full md:flex-row md:items-center md:justify-between md:px-14 md:py-0">
        {/* Left Glass Card */}
        <div data-stagger-item className="max-w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-6 text-white shadow-2xl backdrop-blur-xl sm:px-8 md:px-10 md:py-8">
          <p className="mb-4 text-base font-light uppercase tracking-wide md:text-2xl">
            Amenities that give you an
          </p>

          <h2 data-split className="text-3xl font-light tracking-tight sm:text-4xl md:text-6xl">
            Upgraded Lifestyle
          </h2>
        </div>

        {/* Right Glass Card */}
        <div data-stagger-item className="rounded-2xl border border-white/20 bg-white/10 px-5 py-6 text-center text-white shadow-2xl backdrop-blur-sm sm:px-8 md:px-10 md:py-8">
          <p className="text-3xl font-light leading-tight md:text-3xl">
           <span className="text-3xl font-light leading-tight md:text-5xl"> 7 </span> star living
            <br />
            <span className="text-4xl md:text-5xl">G+2</span>{" "}
            <span className="text-2xl md:text-3xl">Townhouses</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
