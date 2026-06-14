import React, { useState } from "react";

const Map = () => {
  const [activeFloor, setActiveFloor] = useState("Ground");

  const floors = ["Ground", "First", "Second"];

  return (
    <section className="bg-[#f5f5f5] py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 md:px-14">
        {/* Header */}
        <div className="mb-7 flex flex-col justify-between gap-6 sm:mb-10 lg:mb-14 lg:flex-row lg:items-start">
          <div>
            <h2 data-split className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#111] sm:text-5xl md:text-7xl">
              Europa Floor Plan
            </h2>

            <p data-reveal className="mt-4 max-w-md text-base font-light leading-relaxed text-[#222] md:mt-5 md:text-2xl">
              A few specifications that bring perfection to the upgrade
            </p>
          </div>

          <div data-stagger-container className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-8">
            {floors.map((floor) => (
              <div data-stagger-item key={floor}>
                <p className="mb-2 text-lg font-light text-[#111] sm:mb-3 sm:text-2xl">
                  {floor}
                </p>

                <button
                  onClick={() => setActiveFloor(floor)}
                  className={`w-full rounded-xl border px-4 py-3 text-base transition duration-500 hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:text-lg ${
                    activeFloor === floor
                      ? "border-[#C6A12D] bg-[#C6A12D] text-white"
                      : "border-[#C6A12D] bg-transparent text-[#5b4c2b]"
                  }`}
                >
                  2,423{" "}
                  <span className="text-sm uppercase">
                    SFT
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Map Image */}
        <div data-image-reveal className="overflow-hidden">
          <img
            data-parallax-img
            src="/plans/map/map.png"
            alt="Europa Floor Plan"
            className="h-[34vh] min-h-[14rem] w-full object-contain sm:h-[48vh] md:h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
