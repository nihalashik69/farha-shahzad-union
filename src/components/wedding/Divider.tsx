import divider from "@/assets/divider.png";

export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <img src={divider} alt="" loading="lazy" className="w-64 md:w-80 opacity-70 dark:opacity-90" />
      {label && (
        <p className="font-script text-2xl md:text-3xl text-gold">{label}</p>
      )}
    </div>
  );
}
