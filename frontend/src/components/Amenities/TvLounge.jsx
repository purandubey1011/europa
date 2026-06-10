import React from "react";

const TvLounge = ({
  title = "TV LOUNGE",
  image = "/amenities/tvLounge/bg.png",
  heading = "The Ultimate TV Lounge Experience",
  description = "Unwind in a comfortable setting designed for ultimate relaxation, entertainment, and quality time with loved ones.",
}) => {
  return (
    <section className="bg-[#f3f3f3] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-light uppercase tracking-[0.3em] text-[#704633] md:text-6xl">
            {title}
          </h2>

          <div className="mx-auto mt-4 h-px w-40 bg-[#704633]" />
        </div>

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="aspect-[16/9] w-full object-cover"
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-center md:p-10">
            <h3 className="text-2xl font-light text-white md:text-5xl">
              {heading}
            </h3>

            <p className="mx-auto mt-4 max-w-4xl text-sm text-white/90 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvLounge;