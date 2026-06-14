import React from "react";

const LuxuryLife = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#f5f5f5] px-5 py-16 sm:px-6 md:min-h-[80vh]">
      <div className="w-full max-w-6xl">
        {/* Main Row */}
        <div data-stagger-container className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6">
          
          <h2 data-stagger-item data-split className="text-center text-4xl font-normal tracking-[-0.04em] text-[#111] sm:text-5xl md:text-7xl">
            Live Life,
          </h2>

          <div data-stagger-item data-image-reveal className="overflow-hidden rounded-3xl">
            <img
              data-parallax-img
              src="/home/luxury/img.jpg"
              alt="Luxury Living"
              className="h-40 w-40 object-cover md:h-56 md:w-56"
            />
          </div>

          <h2 data-stagger-item data-split className="text-center text-4xl font-normal tracking-[-0.04em] text-[#111] sm:text-5xl md:text-7xl">
            Lavishly
          </h2>
        </div>

        {/* Subtitle */}
        <p data-reveal className="mt-8 text-center text-lg font-normal text-[#222] sm:text-xl md:mt-10 md:text-4xl">
          Luxury living redefined with global inspiration.
        </p>
      </div>
    </section>
  );
};

export default LuxuryLife;
