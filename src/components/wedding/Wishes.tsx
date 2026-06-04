import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

type Wish = { name: string; message: string; at: string };

export function Wishes() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    setWishes(JSON.parse(localStorage.getItem("wishes") || "[]"));
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const w: Wish = { name: name.trim(), message: message.trim(), at: new Date().toISOString() };
    const all = [w, ...wishes];
    localStorage.setItem("wishes", JSON.stringify(all));
    setWishes(all);
    setName(""); setMessage("");
    toast.success("Your blessing has been shared.");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-8 space-y-4">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={60}
          className="w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Share your blessings…" rows={3} maxLength={400}
          className="w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg resize-none focus:outline-none focus:border-gold" />
        <button className="px-8 py-3 rounded-full bg-gold text-primary-foreground font-sans uppercase tracking-[0.2em] text-xs hover:opacity-90 transition">
          Send Wish
        </button>
      </form>

      {wishes.length > 0 && (
        <div className="space-y-3">
          {wishes.slice(0, 10).map((w, i) => (
            <motion.div
              key={w.at + i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <p className="font-display italic text-lg">"{w.message}"</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mt-2 font-sans">— {w.name}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
