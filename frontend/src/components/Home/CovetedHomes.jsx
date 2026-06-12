import React from "react";
import { Play } from "lucide-react";

const CovetedHomes = () => {
  return (
    <section className="bg-[#f5f5f5] py-14">
      <div className="mx-auto max-w-[96rem]">
        {/* Top Content */}
        <div className="mb-12 flex flex-col justify-between gap-8 px-8 md:flex-row md:px-14">
          {/* Left */}
          <h2 data-split className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-7xl">
            Siliguri's Most
            <br />
            Coveted Homes
          </h2>

          {/* Right */}
 <div data-reveal className="text-left md:text-right">
  <p className="font-light text-[#111]">
    <span className="text-5xl md:text-7xl">7</span>
    <span className="ml-2 text-2xl md:text-4xl">
      star living
    </span>
  </p>

  <p className="mt-1 font-light text-[#111]">
    <span className="text-5xl md:text-7xl">G+2</span>
    <span className="ml-2 text-2xl md:text-4xl">
      Townhouses
    </span>
  </p>
</div>
        </div>

        {/* Image */}
        <div data-image-reveal className="group relative overflow-hidden rounded-[2rem]">
          <img
            data-parallax-img
            src="/home/convetedHome/bg.jpg"
            alt="Europa Siliguri"
            className="h-[80vh] w-full object-cover transition duration-700"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Play Button */}
          <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition duration-300 hover:bg-white/25">
            <Play
              fill="currentColor"
              className="ml-1 h-7 w-7"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CovetedHomes;
