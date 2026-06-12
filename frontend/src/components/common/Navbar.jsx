import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "bg-white/75 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4 transition-all duration-500 lg:px-10">
        {/* Logo */}
        <NavLink to="/" className="transition duration-500 hover:opacity-80">
          <img
            src="/home/navbar/logo.png"
            alt="Europa"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8 text-[13px] font-medium uppercase tracking-wide">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pb-1 transition duration-500 ${
                  isActive
                    ? "border-b border-[#C9A227] text-[#C9A227]"
                    : "text-[#222] hover:text-[#C9A227]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/plans"
              className={({ isActive }) =>
                `pb-1 transition duration-500 ${
                  isActive
                    ? "border-b border-[#C9A227] text-[#C9A227]"
                    : "text-[#222] hover:text-[#C9A227]"
                }`
              }
            >
              Plans
            </NavLink>

            <NavLink
              to="/amenities"
              className={({ isActive }) =>
                `pb-1 transition duration-500 ${
                  isActive
                    ? "border-b border-[#C9A227] text-[#C9A227]"
                    : "text-[#222] hover:text-[#C9A227]"
                }`
              }
            >
              Amenities
            </NavLink>
          </div>

          {/* CTA */}
          <button className="flex items-center overflow-hidden rounded-xl bg-[#C9A227] text-white transition duration-500 hover:-translate-y-0.5 hover:bg-[#b8931f] hover:shadow-[0_12px_24px_rgba(201,162,39,0.18)]">
            <span className="px-5 py-3 text-xs font-medium uppercase tracking-wide">
              Book Site Visit
            </span>

            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#C9A227]">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
