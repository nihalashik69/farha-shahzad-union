import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

type Entry = { name: string; phone: string; guests: number; attend: "yes" | "no"; at: string };

export function RSVP() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+91");
  const [guests, setGuests] = useState();
  const [attend, setAttend] = useState<"yes" | "no">("yes");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    const entry: Entry = { name: name.trim(), phone: phone.trim(), guests, attend, at: new Date().toISOString() };
    const all = JSON.parse(localStorage.getItem("rsvp") || "[]");
    all.push(entry);
    localStorage.setItem("rsvp", JSON.stringify(all));
    setSent(true);
    toast.success("Thank you! Your response has been recorded.");
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 text-center max-w-xl mx-auto"
      >
        <p className="font-script text-4xl text-gold mb-4">JazākAllāhu Khayran</p>
        <p className="text-muted-foreground">Your response has been received. We look forward to celebrating with you.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-10 max-w-xl mx-auto space-y-5">
      <Field label="Your Name">
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} required
          className="w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold" />
      </Field>
      <Field label="Phone Number">
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" maxLength={20} required
          className="w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold" />
      </Field>
      <Field label="Number of Guests">
        <input value={guests} onChange={(e) => setGuests(Math.max(1, Math.min(20, +e.target.value || 0)))} type="number" min={0} max={20}
          className="w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold" />
      </Field>
      <Field label="Will you attend?">
        <div className="flex gap-3 pt-2">
          {(["yes", "no"] as const).map((v) => (
            <button key={v} type="button" onClick={() => setAttend(v)}
              className={`flex-1 py-3 rounded-full border transition font-sans text-sm uppercase tracking-wider ${
                attend === v ? "bg-gold text-primary-foreground border-gold" : "border-gold/40 text-foreground hover:border-gold"
              }`}>
              {v === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
            </button>
          ))}
        </div>
      </Field>
      <button type="submit" className="w-full py-4 rounded-full bg-gold text-primary-foreground font-sans uppercase tracking-[0.2em] text-sm hover:opacity-90 transition shadow-soft">
        Send RSVP
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">{label}</span>
      {children}
    </label>
  );
}
