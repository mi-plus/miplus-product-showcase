"use client";

import { useEffect, useRef, useState } from "react";

type HeroSliderProps = {
  slides: React.ReactNode[];
  autoPlay?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
};

export default function HeroSlider({
  slides,
  autoPlay = true,
  intervalMs = 5000,
  pauseOnHover = true,
  showDots = true,
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const pausedRef = useRef(false);
  const slidesCount = slides?.length ?? 0;

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || slidesCount <= 1) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % slidesCount);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, intervalMs, slidesCount]);

  // Measure tallest slide
  useEffect(() => {
    if (!slideRefs.current) return;
    const heights = slideRefs.current.map((ref) => ref?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, [slides]);

  if (slidesCount === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => (pauseOnHover ? (pausedRef.current = true) : null)}
      onMouseLeave={() => (pauseOnHover ? (pausedRef.current = false) : null)}
      aria-roledescription="carousel"
      style={{ height: maxHeight }}
    >
      {/* Slides row */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              slideRefs.current[i] = el; // TypeScript-safe, returns void
            }}
            className="w-full flex-shrink-0 flex flex-col justify-center"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Dots */}
      {showDots && slidesCount > 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-opacity ${
                i === index ? "opacity-100" : "opacity-40"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
