import React from "react";

const Fitness = () => {
  return (
    <section className="flex min-h-screen items-center bg-[#704633] py-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-light uppercase tracking-[0.4em] text-white md:text-7xl">
            FITNESS
          </h2>

          <div className="mx-auto mt-4 h-px w-56 bg-white/80" />
        </div>

        {/* Content */}
        <div className="mb-10 grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
          <h3 className="text-3xl font-light leading-tight text-white md:text-5xl">
            Get up and Get Going!
          </h3>

          <div className="flex justify-end">
            <p className="max-w-xl text-lg font-light leading-relaxed text-white/95 md:text-2xl">
              From Yoga and Meditation Deck to Indoor Gymnasium,
              we care about your health too!
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="grid h-[55vh] gap-4 lg:grid-cols-[0.42fr_0.58fr]">
          {/* Left Smaller */}
          <div className="overflow-hidden">
            <img
              src="/amenities/fitness/img1.png"
              alt="Yoga & Meditation"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Right Larger */}
          <div className="overflow-hidden">
            <img
              src="/amenities/fitness/img2.png"
              alt="Gymnasium"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitness;