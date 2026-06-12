import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const amenities = [
  {
    title: "BANQUET HALL",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "PRACTICAL LUXURY",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "ACTIVE AMENITIES",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "KIDS AMENITIES",
    image:
      "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "SOCIAL AMENITIES",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
  },
];

const Upgrade = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="flex min-h-screen items-center bg-[#f5f5f5] py-16">
      <div className="mx-auto w-full max-w-[96rem] px-8 md:px-14">
        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-2 text-xl font-normal text-[#b2902a]">
              Amenities For One And All
            </p>

            <h2 data-split className="text-6xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#111] md:text-7xl">
              The Perfect
              <br />
              Upgrade!
            </h2>
          </div>

          <p data-reveal className="pt-16 text-right text-xl font-medium text-[#111]">
            Clubhouse & Indoor Amenities Of ~52,000 sft
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.32fr_0.68fr]">
          <div data-stagger-container className="space-y-5">
            {amenities.map((item, index) => (
              <button
                data-stagger-item
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className="group flex w-full items-center justify-between text-left text-2xl font-normal uppercase tracking-[-0.04em] text-[#704633] transition duration-500 hover:-translate-y-0.5 hover:translate-x-0.5"
              >
                <span>{item.title}</span>
                <ArrowRight size={22} className="transition group-hover:translate-x-1" />
              </button>
            ))}
          </div>

          <div data-image-reveal className="overflow-hidden rounded-2xl">
            <img
              data-parallax-img
              key={active}
              src={amenities[active].image}
              alt={amenities[active].title}
              className="h-[48vh] w-full object-cover animate-fade"
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
