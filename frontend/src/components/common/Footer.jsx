import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const socials = [FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn];

const Footer = () => {
  return (
    <footer className="relative min-h-screen overflow-hidden bg-black text-white">
      <img
        src="/home/footer/bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/85 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 md:px-12">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1fr_34rem]">
          <div>
            <h2 data-split className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl">
              Can't wait to
              <br />
              know more? Let's
              <br />
              talk!
            </h2>

            <p data-reveal className="mt-7 text-base text-white/80">
              Reach out to us for inquiries, sale or buy
            </p>

            <div data-stagger-container className="mt-7 space-y-5">
              <div data-stagger-item>
                <p className="text-sm text-white/60">Phone</p>
                <p className="text-2xl font-light">+91 25 25896 365</p>
              </div>

              <div data-stagger-item>
                <p className="text-sm text-white/60">Enquiries</p>
                <p className="text-2xl font-light">info@gpgreens.com</p>
              </div>

              <div data-stagger-item>
                <p className="text-sm text-white/60">Address</p>
                <p className="text-2xl font-light leading-tight">
                  CP Greens - IGBC
                  <br />
                  Certified Apartments
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form data-reveal className="rounded-2xl border border-white/20 bg-white/15 p-6 backdrop-blur-xl shadow-2xl">
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs text-white">Full Name</span>
                <input
                  placeholder="Enter Full Name"
                  className="h-11 w-full rounded-lg bg-white/25 px-4 text-xs text-white outline-none placeholder:text-white/55"
                />
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs text-white">Email</span>
                  <input
                    placeholder="Enter your Email"
                    className="h-11 w-full rounded-lg bg-white/25 px-4 text-xs text-white outline-none placeholder:text-white/55"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs text-white">Phone</span>
                  <input
                    placeholder="Enter Phone Number"
                    className="h-11 w-full rounded-lg bg-white/25 px-4 text-xs text-white outline-none placeholder:text-white/55"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs text-white">Enquiry</span>
                <input
                  placeholder="Select Enquiry"
                  className="h-11 w-full rounded-lg bg-white/25 px-4 text-xs text-white outline-none placeholder:text-white/55"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white">
                  Your message (optional)
                </span>
                <textarea
                  rows={3}
                  placeholder="Enter Your message (optional)"
                  className="w-full resize-none rounded-lg bg-white/25 px-4 py-3 text-xs text-white outline-none placeholder:text-white/55"
                />
              </label>

              <button className="flex h-11 w-full items-center justify-between rounded-lg bg-[#C6A12D] px-4 text-xs uppercase tracking-wide text-white transition duration-500 hover:-translate-y-0.5">
                Contact Us
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[#C6A12D]">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </form>
        </div>

       {/* Big Text */}
<div className="pointer-events-none relative -mt-6 text-center">
  <h2 data-reveal className="footer-glass text-[17vw] font-semibold leading-none tracking-[-0.08em]">
    EUROPA
  </h2>

  {/* Bottom Fade Mask */}
  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />
</div>

        {/* Bottom */}
        <div className="relative z-20 -mt-4 grid gap-10 lg:grid-cols-[1fr_auto_auto]">
          <div>
            <img
              src="/home/footer/logo.png"
              alt="Europa"
              className="mb-4 h-20"
            />

            <p className="text-xs tracking-wide text-white/70">
              TS RERA No: WBRERA/P/DAR/2023/000259
            </p>

            <p className="mt-4 text-xl font-light">Support@europa.com</p>

            <div className="mt-4 flex gap-3">
              {socials.map((Icon, i) => (
                <button
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 backdrop-blur-sm"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base">Quick Links</h4>
            <div className="space-y-3 text-xs text-white/70">
              <p>Home</p>
              <p>Plans</p>
              <p>Amenities</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base">Areas we cover</h4>
            <div className="space-y-3 text-xs text-white/70">
              <p>Hyderabad</p>
              <p>Bangalore</p>
              <p>Mumbai</p>
              <p>Noida</p>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px bg-white/15" />

        <div className="mt-7 flex flex-col justify-between gap-4 text-xs text-white/60 md:flex-row">
          <p>© 2026 CP Real Estate. All Rights Reserved.</p>

          <div className="flex gap-8">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-glass {
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0.78) 38%,
            rgba(255,255,255,0.18) 72%,
            rgba(255,255,255,0.02) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.25),
            0 24px 45px rgba(0,0,0,0.45);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
