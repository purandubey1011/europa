import React from "react";

const Childcare = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-light uppercase tracking-[0.35em] text-[#704633] md:text-7xl">
            CHILDCARE
          </h2>

          <div className="mx-auto mt-4 h-px w-56 bg-[#704633]" />
        </div>

        {/* Top Row */}
        <div className="grid gap-1 lg:grid-cols-[0.3fr_0.7fr]">
          {/* Left Content */}
          <div className="flex flex-col justify-between bg-[#704633] p-6 text-white lg:p-8">
            <h3 className="max-w-xs text-3xl font-light leading-tight">
              Nurture their Childhood with Premium Amenities!
            </h3>

            <p className="max-w-xs text-lg font-light leading-relaxed text-white/95">
              From Children's Play Area to Kids Creche, we understand the
              needs of your Little Ones!
            </p>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden">
            <img
              src="/amenities/childcare/img1.png"
              alt="Childcare"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-1 grid gap-1 lg:grid-cols-[0.7fr_0.3fr]">
          {/* Left Image */}
          <div className="overflow-hidden">
            <img
              src="/amenities/childcare/img2.png"
              alt="Outdoor Childcare"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between bg-[#704633] p-6 text-white lg:p-8">
            <h3 className="text-3xl font-light leading-tight">
              22,000 sq.ft of Childcare Amenities
            </h3>

            <p className="text-lg font-light leading-relaxed text-white/95">
              At CP, childcare facilities have been methodically organised to
              include indoor as well as outdoor spaces to ensure holistic
              development of the little ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Childcare;