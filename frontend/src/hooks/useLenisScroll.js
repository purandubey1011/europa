import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLenisScroll = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      syncTouch: false,
    });

    window.__europaLenis = lenis;

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    lenis.on("scroll", ScrollTrigger.update);
    frameId = requestAnimationFrame(raf);

    document.documentElement.classList.add("lenis");

    return () => {
      cancelAnimationFrame(frameId);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      delete window.__europaLenis;
      document.documentElement.classList.remove("lenis");
    };
  }, []);
};
