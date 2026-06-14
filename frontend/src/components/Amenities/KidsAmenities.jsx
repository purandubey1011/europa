import React from "react";

const KidsAmenities = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 md:px-14">
        {/* Header */}
        <div className="mb-7 grid gap-4 md:mb-14 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 data-split className="text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111] sm:text-5xl md:text-7xl">
            Kids
            <br />
            Amenities
          </h2>

          <p data-reveal className="max-w-2xl text-base font-normal leading-normal text-[#111] md:text-2xl">
            This 10,000 sft 'Panchatantra' themed kids' play
            area is thoughtfully designed to create a holistic
            play experience that stimulates fun, creativity
            and problem-solving skills.
          </p>
        </div>

        {/* Image */}
        <div data-image-reveal className="overflow-hidden rounded-[14px]">
          <img
            data-parallax-img
            src="/amenities/kids/bg.png"
            alt="Kids Amenities"
            className="h-[34vh] min-h-[16rem] w-full object-cover md:h-[700px]"
          />
        </div>

        {/* Bottom Text */}
        <div data-reveal className="mx-auto mt-4 max-w-6xl md:mt-5">
          <p className="text-center text-base font-normal leading-relaxed tracking-[-0.02em] text-[#222] md:text-xl">
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
