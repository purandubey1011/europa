import React from "react";

const ActiveAmenities = () => {
    return (
        <section className="bg-[#f5f5f5] py-10 md:py-16 lg:py-20">
            <div className="mx-auto max-w-[96rem] px-5 sm:px-8 md:px-14">
                {/* Header */}
                <div className="mb-7 grid gap-4 md:mb-14 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <h2 data-split className="text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111] sm:text-5xl md:text-7xl">
                        Active
                        <br />
                        Amenities
                    </h2>

                    <p data-reveal className="max-w-3xl text-base font-light leading-relaxed text-[#111] md:text-2xl">
                        Fitness, just the way you like it! Landmark offers
                        the most extensive sports facilities spread over
                        ~18,500 sft including a sprawling swimming pool
                        to help you unwind.
                    </p>
                </div>

                {/* Images */}
                <div data-stagger-container className="grid gap-8 md:grid-cols-2 md:gap-6">
                    {/* Swimming Pool */}
                    <div data-stagger-item>
                        <div data-image-reveal className="overflow-hidden rounded-xl">
                            <img
                                data-parallax-img
                                src="/amenities/active/img1.png"
                                alt="Swimming Pool"
                                className="h-[220px] w-full object-cover transition duration-700 sm:h-[280px] md:h-[320px]"
                            />
                        </div>

                        <h3 className="mt-3 text-center text-2xl font-light text-[#111] md:mt-4 md:text-4xl">
                            Swimming Pool
                        </h3>
                    </div>

                    {/* Gym */}
                    <div data-stagger-item>
                        <div data-image-reveal className="overflow-hidden rounded-xl">
                            <img
                                data-parallax-img
                                src="/amenities/active/img2.png"
                                alt="Gym"
                                className="h-[220px] w-full object-cover transition duration-700 sm:h-[280px] md:h-[320px]"
                            />
                        </div>

                        <h3 className="mt-3 text-center text-2xl font-light uppercase text-[#111] md:mt-4 md:text-4xl">
                            GYM
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActiveAmenities;
