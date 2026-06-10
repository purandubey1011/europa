import React from "react";

const Amenities = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="/home/amenities/img.jpg"
        alt="Europa Amenities"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#06111d]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      <div className="relative z-10 flex h-full items-center justify-between px-8 md:px-14">
        {/* Left Glass Card */}
        <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-7 text-white shadow-2xl backdrop-blur-xl md:px-10 md:py-8">
          <p className="mb-4 text-lg font-light uppercase tracking-wide md:text-2xl">
            Amenities that give you an
          </p>

          <h2 className="text-4xl font-light tracking-tight md:text-6xl">
            Upgraded Lifestyle
          </h2>
        </div>

        {/* Right Glass Card */}
        <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-7 text-center text-white shadow-2xl backdrop-blur-sm md:px-10 md:py-8">
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