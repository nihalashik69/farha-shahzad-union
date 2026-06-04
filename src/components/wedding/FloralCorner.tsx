type Pos = "tl" | "tr" | "bl" | "br";

const rotations: Record<Pos, string> = {
  tl: "rotate(0deg)",
  tr: "rotate(90deg)",
  br: "rotate(180deg)",
  bl: "rotate(270deg)",
};

const positions: Record<Pos, string> = {
  tl: "top-0 left-0",
  tr: "top-0 right-0",
  bl: "bottom-0 left-0",
  br: "bottom-0 right-0",
};

export function FloralCorner({
  pos,
  size = 220,
  opacity = 0.18,
}: {
  pos: Pos;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${positions[pos]} z-0`}
      style={{ width: size, height: size, transform: rotations[pos], opacity }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full text-gold" fill="none" stroke="currentColor" strokeWidth="0.8">
        {/* arabesque branch */}
        <path d="M10 10 C 60 20, 90 60, 90 110" />
        <path d="M10 10 C 30 50, 70 70, 110 90" />
        <path d="M30 12 Q 50 30, 45 55 Q 70 50, 80 30 Q 95 55, 80 80 Q 110 80, 120 60" />
        {/* leaves */}
        <path d="M45 55 Q 55 45, 65 55 Q 55 65, 45 55 Z" />
        <path d="M80 30 Q 92 22, 100 32 Q 92 42, 80 30 Z" />
        <path d="M80 80 Q 92 72, 100 82 Q 92 92, 80 80 Z" />
        <path d="M110 90 Q 122 82, 130 92 Q 122 102, 110 90 Z" />
        {/* small flowers */}
        <g>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="35" cy="35" rx="3" ry="7" transform={`rotate(${a} 35 35)`} />
          ))}
          <circle cx="35" cy="35" r="2" fill="currentColor" />
        </g>
        <g opacity="0.8">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="120" cy="60" rx="2.5" ry="6" transform={`rotate(${a} 120 60)`} />
          ))}
          <circle cx="120" cy="60" r="1.6" fill="currentColor" />
        </g>
        <g opacity="0.7">
          {[0, 90, 180, 270].map((a) => (
            <ellipse key={a} cx="90" cy="110" rx="2" ry="5" transform={`rotate(${a} 90 110)`} />
          ))}
        </g>
        {/* dots */}
        <circle cx="20" cy="70" r="1.2" fill="currentColor" />
        <circle cx="60" cy="20" r="1.2" fill="currentColor" />
        <circle cx="130" cy="30" r="1.2" fill="currentColor" />
        <circle cx="50" cy="100" r="1.2" fill="currentColor" />
      </svg>
    </div>
  );
}

export function CornerSet({ opacity = 0.15, size = 200 }: { opacity?: number; size?: number }) {
  return (
    <>
      <FloralCorner pos="tl" opacity={opacity} size={size} />
      <FloralCorner pos="tr" opacity={opacity} size={size} />
      <FloralCorner pos="bl" opacity={opacity} size={size} />
      <FloralCorner pos="br" opacity={opacity} size={size} />
    </>
  );
}
