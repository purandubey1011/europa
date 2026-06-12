import React from "react";
import { ArrowRight, Play, Club, BedDouble } from "lucide-react";

const Livelife = () => {
  return (
    <section className="bg-[#f3f3f3] py-14">
      <div className="mx-auto max-w-[96rem] px-0">
        {/* Top Content */}
        <div className="mb-16 grid items-start gap-10 px-8 md:px-14 lg:grid-cols-[1.15fr_1fr]">
          <h2 data-split className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#111] md:text-7xl">
            Live Life,
            <br />
            Leisurely
          </h2>

          <div data-stagger-container className="grid gap-x-14 gap-y-6 sm:grid-cols-2">
            <div data-stagger-item className="flex items-start gap-4">
              <Club className="mt-1 h-10 w-10 shrink-0 text-black" />
              <p className="text-xl font-light leading-snug text-[#111] md:text-2xl">
                Dedicated
                <br />
                Club
              </p>
            </div>

            <div data-stagger-item className="flex items-start gap-4">
              <BedDouble className="mt-1 h-10 w-10 shrink-0 text-black" />
              <p className="text-xl font-light leading-snug text-[#111] md:text-2xl">
                5 Bed Luxury
                <br />
                Residences
              </p>
            </div>

            <button data-stagger-item className="flex w-fit items-center gap-3 rounded-xl bg-[#C6A12D] px-5 py-3 text-xs font-medium uppercase text-white transition duration-500 hover:-translate-y-0.5 sm:col-span-2 sm:ml-[21.5vw]">
              Download Brochure
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[#C6A12D]">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>

        {/* Full Width Image */}
        <div data-image-reveal className="group relative w-full overflow-hidden rounded-2xl">
          <img
            data-parallax-img
            src="/home/livelife/img.jpg"
            alt="Europa Siliguri"
            className="h-[80vh] min-h-[28rem] w-full object-cover transition duration-700"
          />

          <div className="absolute inset-0 bg-black/45" />

          <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md transition duration-300 hover:bg-white/40">
            <Play fill="currentColor" className="ml-1 h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Livelife;
