import React from "react";

const BanquetHall = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-20">
      <div className="mx-auto max-w-[96rem] px-8 md:px-14">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <h2 data-split className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#111] md:text-7xl">
            Banquet
            <br />
            Hall
          </h2>

          <p data-reveal className="pt-2 text-lg font-light text-[#111] md:text-2xl">
            Grand Celebrations, Timeless Memories
          </p>
        </div>

        {/* Image */}
        <div data-image-reveal className="overflow-hidden rounded-[.5rem]">
          <img
            data-parallax-img
            src="/amenities/banguetHall/bg.png"
            alt="Banquet Hall"
            className="h-[65vh] w-full object-cover transition duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default BanquetHall;
