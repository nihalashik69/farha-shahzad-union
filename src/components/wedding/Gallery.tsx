import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const photos = [g1, g2, g3, g1, g2, g3];

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const close = () => setIdx(null);
  const prev = () => setIdx((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
  const next = () => setIdx((i) => (i === null ? 0 : (i + 1) % photos.length));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
        {photos.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setIdx(i)}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="aspect-[3/4] overflow-hidden rounded-2xl shadow-soft group"
          >
            <img src={src} loading="lazy" alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button onClick={(e) => { e.stopPropagation(); close(); }} className="absolute top-6 right-6 text-white/90 hover:text-gold"><X size={28} /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-white/90 hover:text-gold"><ChevronLeft size={36} /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-white/90 hover:text-gold"><ChevronRight size={36} /></button>
            <motion.img
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              src={photos[idx]} alt="" className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-soft"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
