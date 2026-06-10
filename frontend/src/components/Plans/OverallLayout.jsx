import React from "react";

const OverallLayout = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-light tracking-tight text-[#704633] md:text-5xl">
            Overall Block Layout
          </h2>

          <p className="text-lg font-light text-[#444] md:text-xl">
            A bird's-eye view of your dream lifestyle.
          </p>
        </div>

        {/* Layout Image */}
        <div className="flex justify-center">
          <img
            src="/plans/overall/bg.png"
            alt="Overall Block Layout"
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OverallLayout;