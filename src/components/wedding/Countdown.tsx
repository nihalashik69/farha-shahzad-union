import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-07-11T11:00:00+05:30").getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  const items = [
    { label: "Days", v: t.days },
    { label: "Hours", v: t.hours },
    { label: "Minutes", v: t.minutes },
    { label: "Seconds", v: t.seconds },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass rounded-2xl p-4 md:p-6 text-center"
        >
          <div className="font-display text-3xl md:text-5xl text-gold tabular-nums">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-[0.2em] mt-1 text-muted-foreground font-sans">
            {it.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
