import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const amenities = [
  {
    title: "BANQUET HALL",
    image: "/amenities/banguetHall/bg.png",
  },
  {
    title: "PRACTICAL LUXURY",
    image: "/amenities/upgrade/bg.jpg",
  },
  {
    title: "ACTIVE AMENITIES",
    image: "/amenities/active/img1.png",
  },
  {
    title: "KIDS AMENITIES",
    image: "/amenities/kids/bg.png",
  },
  {
    title: "SOCIAL AMENITIES",
    image: "/amenities/communityhall/img2.png",
  },
];

const Upgrade = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[96rem] px-5 sm:px-8 md:px-14">
        <div className="mb-12 grid gap-8 sm:mb-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-2 text-base font-normal text-[#b2902a] sm:text-xl">
              Amenities For One And All
            </p>

            <h2 data-split className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#111] sm:text-6xl md:text-7xl">
              The Perfect
              <br />
              Upgrade!
            </h2>
          </div>

          <p data-reveal className="pt-0 text-left text-base font-medium text-[#111] sm:text-xl lg:pt-16 lg:text-right">
            Clubhouse & Indoor Amenities Of ~52,000 sft
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[18rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-14">
          <div className="space-y-3 sm:space-y-4">
            {amenities.map((item, index) => (
              <button
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group flex w-full items-center justify-between gap-5 text-left text-lg font-normal uppercase tracking-[-0.04em] transition duration-500 hover:-translate-y-0.5 hover:translate-x-0.5 sm:text-xl lg:text-2xl ${
                  active === index ? "text-[#704633]" : "text-[#704633]/85"
                }`}
              >
                <span>{item.title}</span>
                <ArrowRight size={22} className="transition group-hover:translate-x-1" />
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#e5e0d7]">
            <img
              data-parallax-img
              key={active}
              src={amenities[active].image}
              alt={amenities[active].title}
              loading="eager"
              className="h-[36vh] min-h-[18rem] w-full animate-fade object-cover sm:h-[44vh] lg:h-[48vh]"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade {
          animation: fade 0.45s ease;
        }
      `}</style>
    </section>
  );
};

export default Upgrade;
