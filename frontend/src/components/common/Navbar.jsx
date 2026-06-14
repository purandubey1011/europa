import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "bg-white/75 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 transition-all duration-500 sm:px-8 lg:px-10">
        {/* Logo */}
        <NavLink to="/" className="transition duration-500 hover:opacity-80">
          <img
            src="/home/navbar/logo.png"
            alt="Europa"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </NavLink>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
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

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#222] shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-lg transition md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/35 transition-opacity duration-500 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed right-3 top-20 z-50 w-[min(22rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-white/50 bg-white/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-500 md:hidden ${
          isMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide">
          {[
            ["Home", "/"],
            ["Plans", "/plans"],
            ["Amenities", "/amenities"],
          ].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-4 transition ${
                  isActive ? "bg-[#C9A227] text-white" : "text-[#222] hover:bg-black/5"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button className="mt-4 flex w-full items-center justify-between rounded-xl bg-[#C9A227] px-4 py-3 text-xs font-medium uppercase tracking-wide text-white">
          Book Site Visit
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#C9A227]">
            <ArrowRight size={14} />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
