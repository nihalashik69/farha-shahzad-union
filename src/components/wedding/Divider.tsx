export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <div className="flex items-center gap-3">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="w-2 h-2 rotate-45 bg-gold/70" />
        <span className="h-px w-24 bg-gold/60" />
        <span className="w-2 h-2 rotate-45 bg-gold/70" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
      {label && (
        <p className="font-script text-2xl md:text-3xl text-gold">{label}</p>
      )}
    </div>
  );
}
