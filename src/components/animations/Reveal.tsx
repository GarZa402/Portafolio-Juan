"use client";

import { useEffect, useRef } from "react";

const animations = {
  fadeUp: "animate-fade-up",
  fadeIn: "animate-fade-in",
  slideLeft: "animate-slide-left",
  slideRight: "animate-slide-right",
  zoomIn: "animate-zoom-in",
};

export default function Reveal({
  children,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.15,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(animations[animation]);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, threshold]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={className}
    >
      {children}
    </div>
  );
}
