export function GeoPattern({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity }}
    >
      <svg width="100%" height="100%" className="text-gold">
        <defs>
          <pattern id="islamic-star" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.7">
              <polygon points="40,8 48,32 72,32 52,48 60,72 40,58 20,72 28,48 8,32 32,32" />
              <circle cx="40" cy="40" r="22" />
              <polygon points="40,20 60,40 40,60 20,40" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star)" />
      </svg>
    </div>
  );
}

export function GlowOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        { l: "10%", t: "20%", s: 6, d: 0 },
        { l: "80%", t: "30%", s: 4, d: 2 },
        { l: "30%", t: "70%", s: 5, d: 4 },
        { l: "70%", t: "75%", s: 3, d: 1 },
        { l: "55%", t: "15%", s: 4, d: 3 },
        { l: "20%", t: "50%", s: 3, d: 5 },
        { l: "90%", t: "60%", s: 5, d: 6 },
      ].map((o, i) => (
        <span
          key={i}
          className="glow-orb"
          style={{
            left: o.l,
            top: o.t,
            width: o.s,
            height: o.s,
            animationDelay: `${o.d}s`,
          }}
        />
      ))}
    </div>
  );
}
