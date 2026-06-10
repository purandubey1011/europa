import React from "react";

const Comfort = () => {
  return (
    <section className="bg-[#704633] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-4xl font-light tracking-tight text-white md:text-5xl">
          Your Comfort is our Priority!
        </h2>

        <div className="overflow-hidden">
          <img
            src="/plans/comfort/bg.png"
            alt="Comfort Amenities"
            className="h-[500px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Comfort;