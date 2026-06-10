import React, { useState } from "react";

const Plans = () => {
  const [activePlan, setActivePlan] = useState("4bhk");

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="text-5xl font-semibold tracking-[-0.04em] text-[#111] md:text-6xl">
            Plans
          </h2>

          <div className="flex gap-10">
            {/* 4 BHK */}
            <div>
              <h3 className="mb-4 text-3xl font-light text-[#111]">
                4
                <span className="ml-1 text-xl uppercase">BHK</span>
              </h3>

              <button
                onClick={() => setActivePlan("4bhk")}
                className={`rounded-xl border px-8 py-4 text-xl transition ${
                  activePlan === "4bhk"
                    ? "border-[#C6A12D] bg-[#C6A12D] text-white"
                    : "border-[#C6A12D] bg-transparent text-[#8c7a3d]"
                }`}
              >
                2,423
                <span className="ml-1 text-sm uppercase">SFT</span>
              </button>
            </div>

            {/* 5 BHK */}
            <div>
              <h3 className="mb-4 text-3xl font-light text-[#111]">
                5
                <span className="ml-1 text-xl uppercase">BHK</span>
              </h3>

              <button
                onClick={() => setActivePlan("5bhk")}
                className={`rounded-xl border px-8 py-4 text-xl transition ${
                  activePlan === "5bhk"
                    ? "border-[#C6A12D] bg-[#C6A12D] text-white"
                    : "border-[#C6A12D] bg-transparent text-[#8c7a3d]"
                }`}
              >
                2,423
                <span className="ml-1 text-sm uppercase">SFT</span>
              </button>
            </div>
          </div>
        </div>

        {/* Plan Image */}
        <div className="flex justify-center">
          <img
            src={
              activePlan === "4bhk"
                ? "/home/plans/map2.png"
                : "/home/plans/map2.png"
            }
            alt="Floor Plan"
            className="w-full max-w-7xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;