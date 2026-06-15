import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const AppLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const rootRef = useRef(null);
  const progressRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const progress = progressRef.current;
    const line = lineRef.current;

    if (!root || !progress || !line) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("site-loading");
    document.body.classList.add("site-loading");
    window.__europaLenis?.stop?.();

    if (reduceMotion) {
      const timeout = window.setTimeout(() => {
        document.documentElement.classList.remove("site-loading");
        document.body.classList.remove("site-loading");
        window.__europaLenis?.start?.();
        setIsVisible(false);
      }, 350);

      return () => {
        window.clearTimeout(timeout);
        document.documentElement.classList.remove("site-loading");
        document.body.classList.remove("site-loading");
        window.__europaLenis?.start?.();
      };
    }

    const count = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.set(root, { autoAlpha: 1 });
      gsap.set("[data-loader-reveal]", { y: 24, autoAlpha: 0 });
      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

      const timeline = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          document.documentElement.classList.remove("site-loading");
          document.body.classList.remove("site-loading");
          window.__europaLenis?.start?.();
          setIsVisible(false);
        },
      });

      timeline
        .to("[data-loader-reveal]", {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.08,
        })
        .to(
          count,
          {
            value: 100,
            duration: 1.65,
            ease: "power2.inOut",
            onUpdate: () => {
              progress.textContent = String(Math.round(count.value)).padStart(3, "0");
            },
          },
          "-=0.5",
        )
        .to(
          line,
          {
            scaleX: 1,
            duration: 1.65,
            ease: "power2.inOut",
          },
          "<",
        )
        .to("[data-loader-reveal]", {
          y: -20,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.04,
        })
        .to(
          root,
          {
            yPercent: -100,
            duration: 0.95,
            ease: "power4.inOut",
          },
          "-=0.35",
        );
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("site-loading");
      document.body.classList.remove("site-loading");
      window.__europaLenis?.start?.();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-[#eee7dc] text-[#2a2118]"
      role="status"
      aria-live="polite"
      aria-label="Loading Europa"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.82),rgba(238,231,220,0.92)_44%,rgba(218,206,189,0.72)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />

      <div className="relative z-10 flex w-full max-w-[42rem] flex-col items-center px-8 text-center">
        <div data-loader-reveal className="mb-9">
          <img
            src="/home/navbar/logo.png"
            alt="Europa"
            className="mx-auto h-20 w-auto object-contain sm:h-24"
          />
        </div>

        <p
          data-loader-reveal
          className="text-[1.2rem] font-medium uppercase tracking-[0.72em] text-[#947425]"
        >
          Siliguri
        </p>

        

        <div data-loader-reveal className="mt-16 flex w-full items-center gap-8">
          <div className="h-px flex-1 overflow-hidden bg-[#2a2118]/15">
            <div ref={lineRef} className="h-full w-full bg-[#c6a12d]" />
          </div>

          <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[#2a2118]/70">
            <span>Loading</span>
            <span ref={progressRef}>000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
