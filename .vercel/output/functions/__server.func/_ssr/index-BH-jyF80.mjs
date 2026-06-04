import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { C as Calendar, a as Clock, M as MapPin, N as Navigation, S as Sun, b as Moon, X, c as Menu, P as Phone, d as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const links = [
  { id: "home", label: "Home" },
  { id: "couple", label: "Couple" },
  { id: "details", label: "Details" },
  { id: "countdown", label: "Countdown" },
  { id: "venue", label: "Venue" },
  { id: "family", label: "Family" },
  { id: "rsvp", label: "RSVP" },
  { id: "wishes", label: "Wishes" },
  { id: "contact", label: "Contact" }
];
function FloatingNav() {
  const [open, setOpen] = reactExports.useState(false);
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed top-4 right-4 z-50 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: toggleTheme,
          "aria-label": "Toggle theme",
          className: "glass rounded-full p-3 hover:scale-105 transition",
          children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 18, className: "text-gold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18, className: "text-gold" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(!open),
          "aria-label": "Menu",
          className: "glass rounded-full p-3 hover:scale-105 transition",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18, className: "text-gold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 18, className: "text-gold" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.nav,
      {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 30 },
        transition: { duration: 0.3 },
        className: "fixed top-20 right-4 z-40 glass rounded-2xl py-4 px-2 min-w-48",
        children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => go(l.id),
            className: "block w-full text-left px-4 py-2 text-sm font-display tracking-wide hover:text-gold transition",
            children: l.label
          },
          l.id
        ))
      }
    ) })
  ] });
}
const TARGET = (/* @__PURE__ */ new Date("2026-07-11T11:00:00+05:30")).getTime();
function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(d / 864e5),
    hours: Math.floor(d / 36e5 % 24),
    minutes: Math.floor(d / 6e4 % 60),
    seconds: Math.floor(d / 1e3 % 60)
  };
}
function Countdown() {
  const [t, setT] = reactExports.useState(diff());
  reactExports.useEffect(() => {
    const id = setInterval(() => setT(diff()), 1e3);
    return () => clearInterval(id);
  }, []);
  const items = [
    { label: "Days", v: t.days },
    { label: "Hours", v: t.hours },
    { label: "Minutes", v: t.minutes },
    { label: "Seconds", v: t.seconds }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: i * 0.08 },
      className: "glass rounded-2xl p-4 md:p-6 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-5xl text-gold tabular-nums", children: String(it.v).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm uppercase tracking-[0.2em] mt-1 text-muted-foreground font-sans", children: it.label })
      ]
    },
    it.label
  )) });
}
function Divider({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 my-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 300 30", className: "w-72 md:w-96 h-8 text-gold", fill: "none", stroke: "currentColor", strokeWidth: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "15", x2: "110", y2: "15", strokeOpacity: "0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "190", y1: "15", x2: "300", y2: "15", strokeOpacity: "0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M120 15 Q 130 5, 140 15 Q 130 25, 120 15 Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M180 15 Q 170 5, 160 15 Q 170 25, 180 15 Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "150", cy: "15", r: "5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "150", cy: "15", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "115", cy: "15", r: "1.2", fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "185", cy: "15", r: "1.2", fill: "currentColor" })
    ] }),
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl md:text-3xl gradient-gold-text", children: label })
  ] });
}
function RSVP() {
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [guests, setGuests] = reactExports.useState(1);
  const [attend, setAttend] = reactExports.useState("yes");
  const [sent, setSent] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    const entry = { name: name.trim(), phone: phone.trim(), guests, attend, at: (/* @__PURE__ */ new Date()).toISOString() };
    const all = JSON.parse(localStorage.getItem("rsvp") || "[]");
    all.push(entry);
    localStorage.setItem("rsvp", JSON.stringify(all));
    setSent(true);
    toast.success("Thank you! Your response has been recorded.");
  };
  if (sent) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "glass rounded-3xl p-10 text-center max-w-xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-4xl text-gold mb-4", children: "JazākAllāhu Khayran" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your response has been received. We look forward to celebrating with you." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "glass rounded-3xl p-6 md:p-10 max-w-xl mx-auto space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        value: name,
        onChange: (e) => setName(e.target.value),
        maxLength: 80,
        required: true,
        className: "w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        value: phone,
        onChange: (e) => setPhone(e.target.value),
        type: "tel",
        maxLength: 20,
        required: true,
        className: "w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Number of Guests", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        value: guests,
        onChange: (e) => setGuests(Math.max(1, Math.min(20, +e.target.value || 1))),
        type: "number",
        min: 1,
        max: 20,
        className: "w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Will you attend?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 pt-2", children: ["yes", "no"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setAttend(v),
        className: `flex-1 py-3 rounded-full border transition font-sans text-sm uppercase tracking-wider ${attend === v ? "bg-gold text-primary-foreground border-gold" : "border-gold/40 text-foreground hover:border-gold"}`,
        children: v === "yes" ? "Joyfully Accept" : "Regretfully Decline"
      },
      v
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-4 rounded-full bg-gold text-primary-foreground font-sans uppercase tracking-[0.2em] text-sm hover:opacity-90 transition shadow-soft", children: "Send RSVP" })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans", children: label }),
    children
  ] });
}
function Wishes() {
  const [name, setName] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [wishes, setWishes] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setWishes(JSON.parse(localStorage.getItem("wishes") || "[]"));
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const w = { name: name.trim(), message: message.trim(), at: (/* @__PURE__ */ new Date()).toISOString() };
    const all = [w, ...wishes];
    localStorage.setItem("wishes", JSON.stringify(all));
    setWishes(all);
    setName("");
    setMessage("");
    toast.success("Your blessing has been shared.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "glass rounded-3xl p-6 md:p-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "Your name",
          maxLength: 60,
          className: "w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg focus:outline-none focus:border-gold"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: message,
          onChange: (e) => setMessage(e.target.value),
          placeholder: "Share your blessings…",
          rows: 3,
          maxLength: 400,
          className: "w-full bg-transparent border-b border-gold/40 py-2 font-display text-lg resize-none focus:outline-none focus:border-gold"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-8 py-3 rounded-full bg-gold text-primary-foreground font-sans uppercase tracking-[0.2em] text-xs hover:opacity-90 transition", children: "Send Wish" })
    ] }),
    wishes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: wishes.slice(0, 10).map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        className: "glass rounded-2xl p-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic text-lg", children: [
            '"',
            w.message,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.2em] text-gold mt-2 font-sans", children: [
            "— ",
            w.name
          ] })
        ]
      },
      w.at + i
    )) })
  ] });
}
const rotations = {
  tl: "rotate(0deg)",
  tr: "rotate(90deg)",
  br: "rotate(180deg)",
  bl: "rotate(270deg)"
};
const positions = {
  tl: "top-0 left-0",
  tr: "top-0 right-0",
  bl: "bottom-0 left-0",
  br: "bottom-0 right-0"
};
function FloralCorner({
  pos,
  size = 220,
  opacity = 0.18
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": true,
      className: `pointer-events-none absolute ${positions[pos]} z-0`,
      style: { width: size, height: size, transform: rotations[pos], opacity },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "w-full h-full text-gold", fill: "none", stroke: "currentColor", strokeWidth: "0.8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 10 C 60 20, 90 60, 90 110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 10 C 30 50, 70 70, 110 90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M30 12 Q 50 30, 45 55 Q 70 50, 80 30 Q 95 55, 80 80 Q 110 80, 120 60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M45 55 Q 55 45, 65 55 Q 55 65, 45 55 Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 30 Q 92 22, 100 32 Q 92 42, 80 30 Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 80 Q 92 72, 100 82 Q 92 92, 80 80 Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M110 90 Q 122 82, 130 92 Q 122 102, 110 90 Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          [0, 60, 120, 180, 240, 300].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "35", cy: "35", rx: "3", ry: "7", transform: `rotate(${a} 35 35)` }, a)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "35", cy: "35", r: "2", fill: "currentColor" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { opacity: "0.8", children: [
          [0, 72, 144, 216, 288].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "120", cy: "60", rx: "2.5", ry: "6", transform: `rotate(${a} 120 60)` }, a)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "120", cy: "60", r: "1.6", fill: "currentColor" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { opacity: "0.7", children: [0, 90, 180, 270].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "90", cy: "110", rx: "2", ry: "5", transform: `rotate(${a} 90 110)` }, a)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "70", r: "1.2", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "20", r: "1.2", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "130", cy: "30", r: "1.2", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "100", r: "1.2", fill: "currentColor" })
      ] })
    }
  );
}
function CornerSet({ opacity = 0.15, size = 200 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloralCorner, { pos: "tl", opacity, size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloralCorner, { pos: "tr", opacity, size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloralCorner, { pos: "bl", opacity, size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloralCorner, { pos: "br", opacity, size })
  ] });
}
function Petals({ count = 14 }) {
  const petals = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 18 + Math.random() * 22,
      size: 8 + Math.random() * 14,
      sway: 20 + Math.random() * 60,
      rotate: Math.random() * 360,
      opacity: 0.25 + Math.random() * 0.35,
      key: i
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-[1] overflow-hidden", children: petals.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "petal",
      style: {
        left: `${p.left}%`,
        width: p.size,
        height: p.size,
        animationDelay: `-${p.delay}s`,
        animationDuration: `${p.duration}s`,
        opacity: p.opacity,
        ["--sway"]: `${p.sway}px`,
        ["--rot"]: `${p.rotate}deg`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 20 20", className: "w-full h-full text-gold/70", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 1 C 14 5, 18 9, 10 19 C 2 9, 6 5, 10 1 Z" }) })
    },
    p.key
  )) });
}
function GeoPattern({ opacity = 0.05 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 z-0",
      style: { opacity },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", className: "text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "islamic-star", x: "0", y: "0", width: "80", height: "80", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { fill: "none", stroke: "currentColor", strokeWidth: "0.7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "40,8 48,32 72,32 52,48 60,72 40,58 20,72 28,48 8,32 32,32" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "40", r: "22" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "40,20 60,40 40,60 20,40" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#islamic-star)" })
      ] })
    }
  );
}
function GlowOrbs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    { l: "10%", t: "20%", s: 6, d: 0 },
    { l: "80%", t: "30%", s: 4, d: 2 },
    { l: "30%", t: "70%", s: 5, d: 4 },
    { l: "70%", t: "75%", s: 3, d: 1 },
    { l: "55%", t: "15%", s: 4, d: 3 },
    { l: "20%", t: "50%", s: 3, d: 5 },
    { l: "90%", t: "60%", s: 5, d: 6 }
  ].map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "glow-orb",
      style: {
        left: o.l,
        top: o.t,
        width: o.s,
        height: o.s,
        animationDelay: `${o.d}s`
      }
    },
    i
  )) });
}
const VENUE = "Kalarikkal Convention Centre, Kulavanmukku, Kuzhalmannam";
const VENUE_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE)}`;
const VENUE_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(VENUE)}&output=embed`;
function fadeUp(delay = 0) {
  return {
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: "-80px"
    },
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  };
}
function SectionTitle({
  kicker,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
    kicker && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans uppercase tracking-[0.3em] text-xs text-gold mb-3", children: kicker }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl gradient-gold-text inline-block", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" })
  ] });
}
function Section({
  id,
  children,
  className = "",
  pattern = false,
  corners = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: `relative py-24 md:py-32 px-6 overflow-hidden ${className}`, children: [
    pattern && /* @__PURE__ */ jsxRuntimeExports.jsx(GeoPattern, { opacity: 0.04 }),
    corners && /* @__PURE__ */ jsxRuntimeExports.jsx(CornerSet, { opacity: 0.13, size: 180 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-6xl mx-auto", children })
  ] });
}
function Index() {
  const [scrollY, setScrollY] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const addToCalendar = () => {
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Shahzad & Farha Wedding")}&dates=20260711T053000Z/20260711T083000Z&details=${encodeURIComponent("Together with their families, Shahzad & Farha invite you to celebrate their wedding.")}&location=${encodeURIComponent(VENUE)}`;
    window.open(url, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-x-hidden layered-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Petals, { count: 16 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-ivory via-ivory to-secondary/40 dark:from-background dark:to-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none opacity-50 [background-image:radial-gradient(circle_at_20%_20%,_color-mix(in_oklab,_var(--gold)_22%,_transparent),_transparent_50%),radial-gradient(circle_at_80%_80%,_color-mix(in_oklab,_var(--gold)_18%,_transparent),_transparent_55%)]", style: {
        transform: `translateY(${scrollY * 0.3}px)`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GeoPattern, { opacity: 0.05 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        transform: `translateY(${scrollY * 0.15}px)`
      }, className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CornerSet, { opacity: 0.22, size: 260 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlowOrbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: -10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1
        }, className: "font-script text-2xl md:text-3xl gradient-gold-text mb-6", children: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.3,
          duration: 1
        }, className: "text-xs md:text-sm uppercase tracking-[0.35em] text-muted-foreground mb-12", children: "In the name of Allah, the Most Beneficent and Most Merciful" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.5,
          duration: 1.2
        }, className: "inline-block ornate-frame", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] gradient-gold-text", children: "Shahzad" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          scale: 0.8
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          delay: 0.9,
          duration: 0.8
        }, className: "font-script text-5xl md:text-7xl text-gold my-3 md:my-5", children: "&" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.1,
          duration: 1.2
        }, className: "inline-block ornate-frame", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] gradient-gold-text", children: "Farha" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1.6,
          duration: 1
        }, className: "mt-12 max-w-md mx-auto font-display italic text-lg md:text-xl text-muted-foreground", children: "Together with their families invite you to celebrate their wedding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.9,
          duration: 0.8
        }, className: "mt-10 flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-gold", children: "Saturday · 11 July 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => document.getElementById("couple")?.scrollIntoView({
            behavior: "smooth"
          }), className: "mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-gold to-[oklch(0.65_0.14_75)] text-primary-foreground font-sans uppercase tracking-[0.3em] text-xs hover:opacity-90 transition shadow-soft hover:scale-105", children: "Open Invitation" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "couple", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { label: "The Beloved" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(), className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-4xl md:text-5xl text-gold mb-6", children: "بِسْمِ اللَّهِ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-lg md:text-xl text-muted-foreground leading-relaxed", children: '"And among His signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans uppercase tracking-[0.25em] text-xs text-gold mt-4", children: "— Qur'an 30:21" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto", children: [{
        name: "Shahzad",
        role: "The Groom",
        desc: "Son of Mr. Shahul Hameed (Sabu Moopan) & Mrs. Shyna N.A"
      }, {
        name: "Farha",
        role: "The Bride",
        desc: "Daughter of Mr. Firosh Ussanar & Mrs. Khadeeja Firosh"
      }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(i * 0.15), className: "glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CornerSet, { opacity: 0.18, size: 90 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans uppercase tracking-[0.3em] text-xs text-gold mb-4 relative", children: p.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ornate-frame mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-5xl md:text-6xl gradient-gold-text", children: p.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-px w-16 bg-gold/40 my-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground italic relative", children: p.desc })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "details", className: "bg-secondary/30", pattern: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "Save the Date", title: "Wedding Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        Icon: Calendar,
        label: "Date",
        lines: ["Saturday", "11 July 2026"]
      }, {
        Icon: Clock,
        label: "Time",
        lines: ["11:00 AM", "to 2:00 PM"]
      }, {
        Icon: MapPin,
        label: "Venue",
        lines: ["Kalarikkal Convention Centre", "Kulavanmukku, Kuzhalmannam"]
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(i * 0.1), className: "glass rounded-3xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: "text-gold", size: 24 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans uppercase tracking-[0.25em] text-xs text-gold mb-3", children: c.label }),
        c.lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl md:text-2xl text-foreground", children: l }, l))
      ] }, c.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: addToCalendar, className: "inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition font-sans uppercase tracking-[0.2em] text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }),
        " Add to Calendar"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "countdown", pattern: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "Counting the Moments", title: "Until We Celebrate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "venue", className: "bg-secondary/30", pattern: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "The Celebration", title: "Our Venue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(), className: "glass rounded-3xl overflow-hidden max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: VENUE_EMBED, className: "w-full h-72 md:h-96 border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Venue map" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl mb-2", children: "Kalarikkal Convention Centre" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Kulavanmukku, Kuzhalmannam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: VENUE_MAPS, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-primary-foreground font-sans uppercase tracking-[0.2em] text-xs hover:opacity-90 transition shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 16 }),
            " Get Directions"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "family", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "With Blessings From", title: "Our Families" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyCard, { title: "Groom's Family", parents: ["Mr. Shahul Hameed (Sabu Moopan)", "Mrs. Shyna N.A"], grandparents: [["K. Ismail Moopan (Late)", "K. U. Mariyakutty (Late)"], ["N. M. Abubacker (Late)", "P. B. Fathima"]], joinedBy: ["Shahabas", "Raifa", "Ahmed", "Nihal", "Aftab", "Ayaan"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyCard, { title: "Bride's Family", parents: ["Mr. Firosh Ussanar", "Mrs. Khadeeja Firosh"], grandparents: [["Ussanar Sahib (Late)", "Sara Umma (Late)"], ["Syed Mohammed (Late)", "Umaiba Beevi"]], joinedBy: ["", "", "", ""] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "rsvp", pattern: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "Kindly Respond", title: "RSVP" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RSVP, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "wishes", className: "bg-secondary/30", pattern: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "Du'a & Blessings", title: "Leave a Wish" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wishes, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "contact", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "Reach Out", title: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { title: "Groom's Family", phone: "+91 98475 80197" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { title: "Bride's Family", phone: "+91 90000 00002" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative py-16 px-6 text-center border-t border-gold/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-3xl md:text-4xl text-gold mb-3", children: "Shahzad & Farha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-muted-foreground", children: "With love and blessings from family and friends" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground/70 font-sans", children: "11 · 07 · 2026" })
    ] })
  ] });
}
function FamilyCard({
  title,
  parents,
  grandparents,
  joinedby
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(), className: "glass rounded-3xl p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans uppercase tracking-[0.3em] text-xs text-gold text-center mb-6", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-6", children: parents.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl md:text-2xl", children: p }, p)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gold/30 my-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 font-sans", children: "Grandparents" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 text-center", children: grandparents.map((pair, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: pair.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-muted-foreground", children: g }, g)) }, i)) })
  ] });
}
function ContactCard({
  title,
  phone
}) {
  const clean = phone.replace(/\D/g, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(), className: "glass rounded-3xl p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans uppercase tracking-[0.3em] text-xs text-gold mb-2", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl mb-6", children: phone }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${clean}`, className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-primary-foreground text-xs uppercase tracking-[0.2em] font-sans hover:opacity-90 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
        " Call"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${clean}`, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold text-gold text-xs uppercase tracking-[0.2em] font-sans hover:bg-gold hover:text-primary-foreground transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14 }),
        " WhatsApp"
      ] })
    ] })
  ] });
}
export {
  Index as component
};
