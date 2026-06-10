import React, { useState } from "react";

const Map = () => {
  const [activeFloor, setActiveFloor] = useState("Ground");

  const floors = ["Ground", "First", "Second"];

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="mx-auto max-w-[96rem] px-8 md:px-14">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <h2 className="text-5xl font-semibold leading-none tracking-[-0.05em] text-[#111] md:text-7xl">
              Europa Floor Plan
            </h2>

            <p className="mt-5 text-lg font-light text-[#222] md:text-2xl">
              A few specifications that bring perfection to the upgrade
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            {floors.map((floor) => (
              <div key={floor}>
                <p className="mb-3 text-2xl font-light text-[#111]">
                  {floor}
                </p>

                <button
                  onClick={() => setActiveFloor(floor)}
                  className={`rounded-xl border px-7 py-3 text-lg transition ${
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
        <div className="overflow-hidden">
          <img
            src="/plans/map/map.png"
            alt="Europa Floor Plan"
            className="w-full h-[80vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;