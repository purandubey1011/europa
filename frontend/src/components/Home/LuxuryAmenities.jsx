import React from "react";
import { ArrowRight } from "lucide-react";

const LuxuryAmenities = () => {
  const images = [
    "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section className="overflow-hidden bg-[#f5f5f5] py-16">
      <div className="mx-auto max-w-[96rem]">
        <div className="mb-14 flex flex-col justify-between gap-8 px-8 md:flex-row md:items-start md:px-14">
          <h2 data-split className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#111] md:text-7xl">
            Live Life,
            <br />
            Luxuriously
          </h2>

          <div data-reveal className="md:text-right">
            <p className="text-lg font-light text-[#111] md:text-2xl">
              Amenities that give you an Upgraded Lifestyle
            </p>

            <button className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[#C6A12D] px-5 py-3 text-xs font-medium uppercase text-white transition duration-500 hover:-translate-y-0.5">
              Amenities
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[#C6A12D]">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>

        <div data-stagger-container className="flex gap-6 overflow-hidden">
          {images.map((image, index) => (
            <div
              data-stagger-item
              data-image-reveal
              key={index}
              className="h-[38vh] min-w-[22rem] overflow-hidden rounded-2xl md:min-w-[32rem]"
            >
              <img
                data-parallax-img
                src={image}
                alt="Luxury Amenity"
                className="h-full w-full object-cover transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryAmenities;
