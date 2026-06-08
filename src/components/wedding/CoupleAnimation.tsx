import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

interface CoupleAnimationProps {
  detailsRef: React.RefObject<HTMLDivElement>;
  countdownRef: React.RefObject<HTMLDivElement>;
}

export function CoupleAnimation({
  detailsRef,
  countdownRef,
}: CoupleAnimationProps) {
  const { scrollY } = useScroll();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (current) => {
      if (!detailsRef.current || !countdownRef.current) return;

      const start =
        detailsRef.current.offsetTop - 300;

      const end =
        countdownRef.current.offsetTop + 150;

      const p = Math.max(
        0,
        Math.min(1, (current - start) / (end - start))
      );

      setProgress(p);
    });

    return () => unsubscribe();
  }, [scrollY, detailsRef, countdownRef]);

  const brideX =
    progress < 0.8
      ? -300 + (progress / 0.8) * 300 : 0;

  const groomX =
    progress < 0.8
      ? 300 - (progress / 0.8) * 300 : 0;

  const scale =
    progress > 0.8
      ? 1 + ((Math.min(progress, 0.9) - 0.8) / 0.1) * 0.05
      : 1;

  const visible = progress > 0 && progress < 1;

  return (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none"
    >
      <div className="flex items-center justify-center gap-2 md:gap-16 lg:gap-20 -translate-y-24">

        {/* Bride */}
        <motion.div
          style={{
            x: brideX,
            scale,
          }}
          className="w-40 md:w-52 lg:w-64 xl:w-72"
        >
          <img
            src="/farhatha.png"
            alt="Farhatha"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Groom */}
        <motion.div
          style={{
            x: groomX,
            scale,
          }}
          className="w-40 md:w-52 lg:w-64 xl:w-72"
        >
          <img
            src="/kutty.png"
            alt="Kutty"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
