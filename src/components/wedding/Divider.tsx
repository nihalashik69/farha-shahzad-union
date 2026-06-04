export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      <svg viewBox="0 0 300 30" className="w-72 md:w-96 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="0" y1="15" x2="110" y2="15" strokeOpacity="0.5" />
        <line x1="190" y1="15" x2="300" y2="15" strokeOpacity="0.5" />
        <path d="M120 15 Q 130 5, 140 15 Q 130 25, 120 15 Z" />
        <path d="M180 15 Q 170 5, 160 15 Q 170 25, 180 15 Z" />
        <circle cx="150" cy="15" r="5" />
        <circle cx="150" cy="15" r="1.5" fill="currentColor" />
        <circle cx="115" cy="15" r="1.2" fill="currentColor" />
        <circle cx="185" cy="15" r="1.2" fill="currentColor" />
      </svg>
      {label && (
        <p className="font-script text-2xl md:text-3xl gradient-gold-text">{label}</p>
      )}
    </div>
  );
}
