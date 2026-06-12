import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitText = (element) => {
  if (element.dataset.splitReady === "true") return;

  const parts = Array.from(element.childNodes).flatMap((node) => {
    if (node.nodeName === "BR") return [{ type: "break" }];
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent
        .split(/(\s+)/)
        .filter(Boolean)
        .map((value) => ({ type: /\s+/.test(value) ? "space" : "word", value }));
    }
    return [{ type: "word", value: node.textContent }];
  });

  element.setAttribute("aria-label", element.textContent.trim());
  element.textContent = "";

  parts.forEach((part) => {
    if (part.type === "break") {
      element.appendChild(document.createElement("br"));
      return;
    }

    if (part.type === "space") {
      element.appendChild(document.createTextNode(part.value));
      return;
    }

    const wrap = document.createElement("span");
    const inner = document.createElement("span");
    wrap.className = "cinematic-word-wrap";
    inner.className = "cinematic-word";
    inner.textContent = part.value;
    wrap.appendChild(inner);
    element.appendChild(wrap);
  });

  element.dataset.splitReady = "true";
};

export const useCinematicAnimations = (rootRef, dependency) => {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      root.querySelectorAll("[data-split]").forEach((heading) => {
        heading.style.opacity = "1";
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      root.querySelectorAll("[data-split]").forEach(splitText);

      const hero = root.querySelector("[data-hero]");
      if (hero) {
        const heroBg = hero.querySelector("[data-hero-bg]");
        const heroWords = hero.querySelectorAll("[data-split] .cinematic-word");
        const heroItems = hero.querySelectorAll("[data-hero-reveal]");

        gsap.set(heroBg, { scale: 1.025, yPercent: -1.5, transformOrigin: "center center" });
        gsap.set(heroWords, { opacity: 0, y: 38 });
        gsap.set(heroItems, { opacity: 0, y: 24 });

        const loadTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
        loadTimeline
          .to(heroWords, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.038,
          })
          .to(
            heroItems,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
            },
            "-=0.55",
          );

        if (heroBg) {
          gsap.to(heroBg, {
            yPercent: 3.5,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.9,
            },
          });
        }
      }

      root.querySelectorAll("[data-split]:not([data-hero] [data-split])").forEach((heading) => {
        const words = heading.querySelectorAll(".cinematic-word");
        gsap.set(words, { opacity: 0, y: 34 });
        gsap.to(words, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.032,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 86%",
            once: true,
          },
        });
      });

      root.querySelectorAll("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 28,
          duration: 0.75,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      root.querySelectorAll("[data-stagger-container]").forEach((container) => {
        const items = container.querySelectorAll("[data-stagger-item]");
        gsap.from(items, {
          opacity: 0,
          y: 26,
          duration: 0.72,
          stagger: 0.075,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start: "top 86%",
            once: true,
          },
        });
      });

      root.querySelectorAll("[data-image-reveal]").forEach((frame) => {
        const image = frame.querySelector("img");
        gsap.fromTo(
          frame,
          { clipPath: "inset(5% 0 5% 0)" },
          {
            clipPath: "inset(0% 0 0% 0)",
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: frame,
              start: "top 86%",
              once: true,
            },
          },
        );

        if (image) {
          gsap.from(image, {
            opacity: 0.96,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: frame,
              start: "top 86%",
              once: true,
            },
          });
        }
      });

      root.querySelectorAll("[data-parallax-img]").forEach((image) => {
        gsap.to(image, {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: image.closest("[data-image-reveal]") || image,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef, dependency]);
};
