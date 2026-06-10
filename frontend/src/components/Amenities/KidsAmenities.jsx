import React from "react";

const KidsAmenities = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-20">
      <div className="mx-auto max-w-[96rem] px-8 md:px-14">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#111] md:text-7xl">
            Kids
            <br />
            Amenities
          </h2>

          <p className="max-w-2xl text-md font-normal leading-normal text-[#111] md:text-2xl">
            This 10,000 sft 'Panchatantra' themed kids' play
            area is thoughtfully designed to create a holistic
            play experience that stimulates fun, creativity
            and problem-solving skills.
          </p>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-[14px]">
          <img
            src="/amenities/kids/bg.png"
            alt="Kids Amenities"
            className="h-[700px] w-full object-cover"
          />
        </div>

        {/* Bottom Text */}
        <div className="mx-auto mt-5 max-w-6xl">
          <p className="text-center text-lg font-normal leading-normal tracking-[-0.02em] text-[#222] md:text-xl">
            The Kids' amenities are designed with safety in mind,
            featuring soft and padded flooring. From iconic play
            structures to the sand & play water every detail is
            crafted to inspire adventure and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KidsAmenities;