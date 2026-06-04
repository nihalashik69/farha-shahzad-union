import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { FloatingNav } from "@/components/wedding/FloatingNav";
import { Countdown } from "@/components/wedding/Countdown";
import { Divider } from "@/components/wedding/Divider";
import { RSVP } from "@/components/wedding/RSVP";
import { Wishes } from "@/components/wedding/Wishes";
import { CornerSet } from "@/components/wedding/FloralCorner";
import { Petals } from "@/components/wedding/Petals";
import { GeoPattern, GlowOrbs } from "@/components/wedding/GeoPattern";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shahzad & Farha — Wedding Invitation · 11 July 2026" },
      { name: "description", content: "Join Shahzad & Farha as they begin their journey together. Saturday, 11 July 2026 at Kalarikkal Convention Centre, Kuzhalmannam." },
      { property: "og:title", content: "Shahzad & Farha — Wedding Invitation" },
      { property: "og:description", content: "Saturday, 11 July 2026 · Kalarikkal Convention Centre" },
    ],
  }),
  component: Index,
});

const VENUE = "Kalarikkal Convention Centre, Kulavanmukku, Kuzhalmannam";
const VENUE_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE)}`;
const VENUE_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(VENUE)}&output=embed`;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center mb-14">
      {kicker && <p className="font-sans uppercase tracking-[0.3em] text-xs text-gold mb-3">{kicker}</p>}
      <h2 className="font-display text-4xl md:text-6xl gradient-gold-text inline-block">{title}</h2>
      <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
  pattern = false,
  corners = true,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  pattern?: boolean;
  corners?: boolean;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 overflow-hidden ${className}`}>
      {pattern && <GeoPattern opacity={0.04} />}
      {corners && <CornerSet opacity={0.13} size={180} />}
      <div className="relative z-10 max-w-6xl mx-auto">{children}</div>
    </section>
  );
}


function Index() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addToCalendar = () => {
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Shahzad & Farha Wedding"
    )}&dates=20260711T053000Z/20260711T083000Z&details=${encodeURIComponent(
      "Together with their families, Shahzad & Farha invite you to celebrate their wedding."
    )}&location=${encodeURIComponent(VENUE)}`;
    window.open(url, "_blank");
  };


  return (
    <main className="relative min-h-screen overflow-x-hidden layered-bg">
      <Toaster position="top-center" />
      <FloatingNav />
      <Petals count={16} />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-ivory via-ivory to-secondary/40 dark:from-background dark:to-background">
        <div
          className="absolute inset-0 pointer-events-none opacity-50 [background-image:radial-gradient(circle_at_20%_20%,_color-mix(in_oklab,_var(--gold)_22%,_transparent),_transparent_50%),radial-gradient(circle_at_80%_80%,_color-mix(in_oklab,_var(--gold)_18%,_transparent),_transparent_55%)]"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <GeoPattern opacity={0.05} />
        <div style={{ transform: `translateY(${scrollY * 0.15}px)` }} className="absolute inset-0">
          <CornerSet opacity={0.22} size={260} />
        </div>
        <GlowOrbs />

        <div className="relative z-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="font-script text-2xl md:text-3xl gradient-gold-text mb-6"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
            className="text-xs md:text-sm uppercase tracking-[0.35em] text-muted-foreground mb-12"
          >
            In the name of Allah, the Most Beneficent and Most Merciful
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.2 }}
            className="inline-block ornate-frame"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] gradient-gold-text">
              Shahzad
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
            className="font-script text-5xl md:text-7xl text-gold my-3 md:my-5"
          >
            &amp;
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1.2 }}
            className="inline-block ornate-frame"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] gradient-gold-text">
              Farha
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
            className="mt-12 max-w-md mx-auto font-display italic text-lg md:text-xl text-muted-foreground"
          >
            Together with their families invite you to celebrate their wedding
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9, duration: 0.8 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <p className="font-display text-2xl text-gold">Saturday · 11 July 2026</p>
            <button
              onClick={() => document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-gold to-[oklch(0.65_0.14_75)] text-primary-foreground font-sans uppercase tracking-[0.3em] text-xs hover:opacity-90 transition shadow-soft hover:scale-105"
            >
              Open Invitation
            </button>
          </motion.div>
        </div>
      </section>


      {/* COUPLE */}
      <Section id="couple">
        <Divider label="The Beloved" />
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto">
          <p className="font-script text-4xl md:text-5xl text-gold mb-6">بِسْمِ اللَّهِ</p>
          <p className="font-display italic text-lg md:text-xl text-muted-foreground leading-relaxed">
            "And among His signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>
          <p className="font-sans uppercase tracking-[0.25em] text-xs text-gold mt-4">— Qur'an 30:21</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { name: "Shahzad", role: "The Groom", desc: "Son of Mr. Shahul Hameed (Sabu Moopan) & Mrs. Shyna N.A" },
            { name: "Farha", role: "The Bride", desc: "Daughter of Mr. Firosh Ussanar & Mrs. Khadeeja Firosh" },
          ].map((p, i) => (
            <motion.div key={p.name} {...fadeUp(i * 0.15)} className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <CornerSet opacity={0.18} size={90} />
              <p className="font-sans uppercase tracking-[0.3em] text-xs text-gold mb-4 relative">{p.role}</p>
              <div className="ornate-frame mx-auto">
                <h3 className="font-display text-5xl md:text-6xl gradient-gold-text">{p.name}</h3>
              </div>
              <div className="mx-auto h-px w-16 bg-gold/40 my-5" />
              <p className="text-muted-foreground italic relative">{p.desc}</p>
            </motion.div>

          ))}
        </div>
      </Section>

      {/* DETAILS */}
      <Section id="details" className="bg-secondary/30" pattern>
        <SectionTitle kicker="Save the Date" title="Wedding Details" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { Icon: Calendar, label: "Date", lines: ["Saturday", "11 July 2026"] },
            { Icon: Clock, label: "Time", lines: ["11:00 AM", "to 2:00 PM"] },
            { Icon: MapPin, label: "Venue", lines: ["Kalarikkal Convention Centre", "Kulavanmukku, Kuzhalmannam"] },
          ].map((c, i) => (
            <motion.div key={c.label} {...fadeUp(i * 0.1)} className="glass rounded-3xl p-8 text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                <c.Icon className="text-gold" size={24} />
              </div>
              <p className="font-sans uppercase tracking-[0.25em] text-xs text-gold mb-3">{c.label}</p>
              {c.lines.map((l) => (
                <p key={l} className="font-display text-xl md:text-2xl text-foreground">{l}</p>
              ))}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={addToCalendar} className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition font-sans uppercase tracking-[0.2em] text-xs">
            <Calendar size={16} /> Add to Calendar
          </button>
        </div>
      </Section>

      {/* COUNTDOWN */}
      <Section id="countdown" pattern>
        <SectionTitle kicker="Counting the Moments" title="Until We Celebrate" />
        <Countdown />
      </Section>

      {/* VENUE */}
      <Section id="venue" className="bg-secondary/30" pattern>
        <SectionTitle kicker="The Celebration" title="Our Venue" />
        <motion.div {...fadeUp()} className="glass rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <iframe
            src={VENUE_EMBED}
            className="w-full h-72 md:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue map"
          />
          <div className="p-8 text-center">
            <h3 className="font-display text-2xl md:text-3xl mb-2">Kalarikkal Convention Centre</h3>
            <p className="text-muted-foreground mb-6">Kulavanmukku, Kuzhalmannam</p>
            <a href={VENUE_MAPS} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-primary-foreground font-sans uppercase tracking-[0.2em] text-xs hover:opacity-90 transition shadow-soft">
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </motion.div>
      </Section>

      {/* FAMILY */}
      <Section id="family">
        <SectionTitle kicker="With Blessings From" title="Our Families" />
        <div className="grid md:grid-cols-2 gap-8">
          <FamilyCard
            title="Groom's Family"
            parents={["Mr. Shahul Hameed (Sabu Moopan)", "Mrs. Shyna N.A"]}
            grandparents={[
              ["K. Ismail Moopan (Late)", "K. U. Mariyakutty (Late)"],
              ["N. M. Abubacker (Late)", "P. B. Fathima"],
            ]}
          />
          <FamilyCard
            title="Bride's Family"
            parents={["Mr. Firosh Ussanar", "Mrs. Khadeeja Firosh"]}
            grandparents={[
              ["Ussanar Sahib (Late)", "Sara Umma (Late)"],
              ["Syed Mohammed (Late)", "Umaiba Beevi"],
            ]}
          />
        </div>
      </Section>


      {/* RSVP */}
      <Section id="rsvp" pattern>
        <SectionTitle kicker="Kindly Respond" title="RSVP" />
        <RSVP />
      </Section>

      {/* WISHES */}
      <Section id="wishes" className="bg-secondary/30" pattern>
        <SectionTitle kicker="Du'a & Blessings" title="Leave a Wish" />
        <Wishes />
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <SectionTitle kicker="Reach Out" title="Contact" />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <ContactCard title="Groom's Family" phone="+91 90000 00001" />
          <ContactCard title="Bride's Family" phone="+91 90000 00002" />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative py-16 px-6 text-center border-t border-gold/20">
        <Divider />
        <p className="font-script text-3xl md:text-4xl text-gold mb-3">Shahzad &amp; Farha</p>
        <p className="font-display italic text-muted-foreground">
          With love and blessings from family and friends
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground/70 font-sans">
          11 · 07 · 2026
        </p>
      </footer>
    </main>
  );
}

function FamilyCard({ title, parents, grandparents }: { title: string; parents: string[]; grandparents: string[][] }) {
  return (
    <motion.div {...fadeUp()} className="glass rounded-3xl p-8">
      <p className="font-sans uppercase tracking-[0.3em] text-xs text-gold text-center mb-6">{title}</p>
      <div className="text-center mb-6">
        {parents.map((p) => (
          <p key={p} className="font-display text-xl md:text-2xl">{p}</p>
        ))}
      </div>
      <div className="h-px bg-gold/30 my-6" />
      <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 font-sans">Grandparents</p>
      <div className="space-y-4 text-center">
        {grandparents.map((pair, i) => (
          <div key={i}>
            {pair.map((g) => (
              <p key={g} className="font-display italic text-muted-foreground">{g}</p>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactCard({ title, phone }: { title: string; phone: string }) {
  const clean = phone.replace(/\D/g, "");
  return (
    <motion.div {...fadeUp()} className="glass rounded-3xl p-8 text-center">
      <p className="font-sans uppercase tracking-[0.3em] text-xs text-gold mb-2">{title}</p>
      <p className="font-display text-2xl mb-6">{phone}</p>
      <div className="flex gap-3 justify-center">
        <a href={`tel:${clean}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-primary-foreground text-xs uppercase tracking-[0.2em] font-sans hover:opacity-90 transition">
          <Phone size={14} /> Call
        </a>
        <a href={`https://wa.me/${clean}`} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold text-gold text-xs uppercase tracking-[0.2em] font-sans hover:bg-gold hover:text-primary-foreground transition">
          <MessageCircle size={14} /> WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
