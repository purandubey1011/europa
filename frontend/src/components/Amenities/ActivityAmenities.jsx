import React from "react";

const ActiveAmenities = () => {
    return (
        <section className="bg-[#f5f5f5] py-16 lg:py-20">
            <div className="mx-auto max-w-[96rem] px-8 md:px-14">
                {/* Header */}
                <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <h2 data-split className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#111] md:text-7xl">
                        Active
                        <br />
                        Amenities
                    </h2>

                    <p data-reveal className="max-w-3xl text-lg font-light leading-relaxed text-[#111] md:text-2xl">
                        Fitness, just the way you like it! Landmark offers
                        the most extensive sports facilities spread over
                        ~18,500 sft including a sprawling swimming pool
                        to help you unwind.
                    </p>
                </div>

                {/* Images */}
                <div data-stagger-container className="grid gap-6 md:grid-cols-2">
                    {/* Swimming Pool */}
                    <div data-stagger-item>
                        <div data-image-reveal className="overflow-hidden rounded-xl">
                            <img
                                data-parallax-img
                                src="/amenities/active/img1.png"
                                alt="Swimming Pool"
                                className="h-[320px] w-full object-cover transition duration-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-2xl font-light text-[#111] md:text-4xl">
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
                                className="h-[320px] w-full object-cover transition duration-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-2xl font-light uppercase text-[#111] md:text-4xl">
                            GYM
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActiveAmenities;
