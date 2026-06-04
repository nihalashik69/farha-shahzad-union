import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "couple", label: "Couple" },
  { id: "details", label: "Details" },
  { id: "countdown", label: "Countdown" },
  { id: "venue", label: "Venue" },
  { id: "family", label: "Family" },
  { id: "gallery", label: "Gallery" },
  { id: "rsvp", label: "RSVP" },
  { id: "wishes", label: "Wishes" },
  { id: "contact", label: "Contact" },
];

export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") { document.documentElement.classList.add("dark"); setDark(true); }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="glass rounded-full p-3 hover:scale-105 transition"
        >
          {dark ? <Sun size={18} className="text-gold" /> : <Moon size={18} className="text-gold" />}
        </button>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="glass rounded-full p-3 hover:scale-105 transition"
        >
          {open ? <X size={18} className="text-gold" /> : <Menu size={18} className="text-gold" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-4 z-40 glass rounded-2xl py-4 px-2 min-w-48"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="block w-full text-left px-4 py-2 text-sm font-display tracking-wide hover:text-gold transition"
              >
                {l.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
