import { useEffect } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollToPageTop = () => {
  const reduceMotion = prefersReducedMotion();
  const lenis = window.__europaLenis;

  if (!reduceMotion && lenis?.scrollTo) {
    lenis.scrollTo(0, {
      duration: 0.85,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      force: true,
    });
    return;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });
};

export const useRouteScrollTop = (pathname) => {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToPageTop);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const handleInternalRouteClick = (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = event.target.closest?.("a[href]");
      if (!link || link.target) return;

      const url = new URL(link.href, window.location.href);
      const isInternalRoute = url.origin === window.location.origin && !url.hash;

      if (isInternalRoute) {
        window.setTimeout(scrollToPageTop, 0);
      }
    };

    document.addEventListener("click", handleInternalRouteClick, true);

    return () => {
      document.removeEventListener("click", handleInternalRouteClick, true);
    };
  }, []);
};
