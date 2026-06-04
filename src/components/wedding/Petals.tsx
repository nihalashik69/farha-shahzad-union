import { useMemo } from "react";

export function Petals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 22,
        size: 8 + Math.random() * 14,
        sway: 20 + Math.random() * 60,
        rotate: Math.random() * 360,
        opacity: 0.25 + Math.random() * 0.35,
        key: i,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.key}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `-${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            ["--sway" as never]: `${p.sway}px`,
            ["--rot" as never]: `${p.rotate}deg`,
          }}
        >
          <svg viewBox="0 0 20 20" className="w-full h-full text-gold/70" fill="currentColor">
            <path d="M10 1 C 14 5, 18 9, 10 19 C 2 9, 6 5, 10 1 Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
