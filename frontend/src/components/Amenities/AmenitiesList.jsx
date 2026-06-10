import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const amenities = [
  {
    name: "GAMES ROOM",
    image: "/amenities/ameAt/img.png",
  },
  {
    name: "CHILDCARE",
    image: "/amenities/ameAt/img.png",
  },
  {
    name: "INDOOR GYM",
    image: "/amenities/ameAt/img.png",
  },
  {
    name: "TV LOUNGE",
    image: "/amenities/ameAt/img.png",
  },
  {
    name: "COMMUNITY HALL",
    image: "/amenities/ameAt/img.png",
  },
];

const AmenitiesList = () => {
  const [activeAmenity, setActiveAmenity] = useState(0);

  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-16 text-4xl font-light text-[#704633] md:text-5xl">
          Amenities at CP Greens
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-[320px_1fr]">
          {/* Left Menu */}
          <div className="space-y-5">
            {amenities.map((item, index) => (
              <button
                key={item.name}
                onMouseEnter={() => setActiveAmenity(index)}
                onClick={() => setActiveAmenity(index)}
                className={`group flex w-full items-center justify-between border-b border-transparent pb-2 text-left text-xl transition-all duration-300 ${
                  activeAmenity === index
                    ? "text-[#704633]"
                    : "text-[#704633]/90 hover:text-[#704633]"
                }`}
              >
                <span className="font-light tracking-wide">
                  {item.name}
                </span>

                <ArrowRight
                  size={20}
                  className={`transition-transform duration-300 ${
                    activeAmenity === index
                      ? "translate-x-1"
                      : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={amenities[activeAmenity].image}
              alt={amenities[activeAmenity].name}
              className="aspect-[16/8] w-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesList;