import React, { useState } from "react";

const UnitPlans = () => {
  const [activeBlock, setActiveBlock] = useState("7th Floor (2Bhk)");

  return (
    <section className="bg-[#f3f3f3] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-14 text-4xl font-light text-[#6d4635] md:text-5xl">
          CP Greens Unit Plans
        </h2>

        {/* Tabs */}
        <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:gap-20">
          {/* Block 1 */}
          <div>
            <h4 className="mb-2 text-sm uppercase text-[#3d3d3d]">
              Block 1
            </h4>
            <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />

            <div className="flex flex-wrap gap-3">
              <button className="border border-[#b99f92] px-6 py-3 text-[#6d4635] transition hover:bg-[#6d4635] hover:text-white">
                6th Floor (2Bhk)
              </button>

              <button className="bg-[#6d4635] px-6 py-3 text-white">
                7th Floor (2Bhk)
              </button>
            </div>
          </div>

          {/* Block 2 */}
          <div>
            <h4 className="mb-2 text-sm uppercase text-[#3d3d3d]">
              Block 2
            </h4>
            <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />

            <div className="flex flex-wrap gap-3">
              <button className="border border-[#b99f92] px-6 py-3 text-[#6d4635] transition hover:bg-[#6d4635] hover:text-white">
                3th Floor (2Bhk)
              </button>

              <button className="border border-[#b99f92] px-6 py-3 text-[#6d4635] transition hover:bg-[#6d4635] hover:text-white">
                4th Floor (3Bhk)
              </button>
            </div>
          </div>

          {/* Block 3 */}
          <div>
            <h4 className="mb-2 text-sm uppercase text-[#3d3d3d]">
              Block 3
            </h4>
            <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />

            <div className="flex flex-wrap gap-3">
              <button className="border border-[#b99f92] px-6 py-3 text-[#6d4635] transition hover:bg-[#6d4635] hover:text-white">
                5th Floor
              </button>

              <button className="border border-[#b99f92] px-6 py-3 text-[#6d4635] transition hover:bg-[#6d4635] hover:text-white">
                6th Floor
              </button>

              <button className="border border-[#b99f92] px-6 py-3 text-[#6d4635] transition hover:bg-[#6d4635] hover:text-white">
                7th Floor
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Plan Image */}
          <div className="border border-[#d8d8d8] bg-[#efefef] p-1">
            <img
              src="/plans/plans/map.png"
              alt="Floor Plan"
              className="w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-3 text-5xl font-light text-[#6d4635]">
              6TH FLOOR PLAN
            </h3>

            <p className="mb-12 text-2xl font-light text-[#444]">
              Where comfort meets happiness, everyday!
            </p>

            <div className="grid grid-cols-2 gap-y-12">
              <div>
                <p className="mb-2 text-sm uppercase text-[#666]">Date</p>
                <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />
                <p className="text-4xl font-light text-[#2f2f2f]">
                  01/07/20
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase text-[#666]">Scale</p>
                <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />
                <p className="text-4xl font-light text-[#2f2f2f]">
                  1:125
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase text-[#666]">
                  Architect
                </p>
                <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />
                <p className="text-2xl font-light text-[#2f2f2f]">
                  Agrawal & Agrawal
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase text-[#666]">
                  RERA Carpet Area
                </p>
                <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />
                <p className="text-2xl font-light text-[#2f2f2f]">
                  Starting from
                  <br />
                  1050 sq.ft
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitPlans;