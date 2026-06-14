import React from "react";

const BanquetHall = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 md:px-14">
        {/* Header */}
        <div className="mb-7 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-start md:gap-6">
          <h2 data-split className="text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111] sm:text-5xl md:text-7xl">
            Banquet
            <br />
            Hall
          </h2>

          <p data-reveal className="text-base font-light text-[#111] md:pt-2 md:text-2xl">
            Grand Celebrations, Timeless Memories
          </p>
        </div>

        {/* Image */}
        <div data-image-reveal className="overflow-hidden rounded-[.5rem]">
          <img
            data-parallax-img
            src="/amenities/banguetHall/bg.png"
            alt="Banquet Hall"
            className="h-[32vh] min-h-[15rem] w-full object-cover transition duration-700 md:h-[65vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default BanquetHall;
