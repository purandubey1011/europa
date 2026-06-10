import React from "react";

const CommunityHall = () => {
  return (
    <section className="flex min-h-screen items-center bg-[#f3f3f3] py-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-light uppercase tracking-[0.35em] text-[#704633] md:text-6xl">
            COMMUNITY HALL
          </h2>

          <div className="mx-auto mt-4 h-px w-72 bg-[#704633]" />
        </div>

        {/* Text Row */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <h3 className="text-3xl font-light leading-tight text-[#704633] md:text-5xl">
            Get up and Get Going!
          </h3>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-xl text-right text-base font-light leading-relaxed text-[#333] md:text-xl">
              From Yoga and Meditation Deck to Indoor Gymnasium,
              we care about your health too!
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="grid h-[45vh] gap-4 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="overflow-hidden">
            <img
              src="/amenities/communityhall/img1.png"
              alt="TV Lounge"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src="/amenities/communityhall/img2.png"
              alt="Community Hall"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHall;