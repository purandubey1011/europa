import React from "react";

const OutdoorLiving = () => {
  const cards = [
    {
      title: "OUTDOOR LIVING AT ITS BEST",
      subtitle:
        "With so many amenities in place, bring the outdoors inside!",
      image: "/plans/outdoor/img1.jpg",
    },
    {
      title: "GREEN LIVING TAKEN TO THE NEXT LEVEL",
      subtitle: "Live in Siliguri's first IGBC Certified Apartment",
      image: "/plans/outdoor/img2.png",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-[40vh] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[70vh]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-5xl text-2xl font-light uppercase tracking-[0.15em] text-white md:text-5xl">
                  {card.title}
                </h2>

                <p className="mt-4 text-sm font-light text-white/90 md:text-xl">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutdoorLiving;