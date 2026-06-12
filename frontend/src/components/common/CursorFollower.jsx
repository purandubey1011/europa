import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const target = useRef({
    x: typeof window === "undefined" ? 0 : window.innerWidth / 2,
    y: typeof window === "undefined" ? 0 : window.innerHeight / 2,
  });
  const current = useRef({
    x: typeof window === "undefined" ? 0 : window.innerWidth / 2,
    y: typeof window === "undefined" ? 0 : window.innerHeight / 2,
  });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (reduceMotion || !canHover) return undefined;

    const cursor = cursorRef.current;
    let frameId;
    let isVisible = false;

    const moveCursor = (event) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      if (!isVisible && cursor) {
        isVisible = true;
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        cursor.classList.add("is-visible");
      }

      if (cursor) {
        const isInteractive = Boolean(
          event.target.closest("a, button, input, textarea, [role='button'], summary"),
        );
        cursor.classList.toggle("is-interactive", isInteractive);
      }
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.22;
      current.current.y += (target.current.y - current.current.y) * 0.22;

      if (cursor) {
        cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    const hideCursor = () => {
      isVisible = false;
      if (cursor) cursor.classList.remove("is-visible", "is-interactive");
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <span ref={cursorRef} className="cursor-follower" aria-hidden="true" />
    </>
  );
};

export default CursorFollower;
