import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function BootIntro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const steps = reduced ? [300, 600, 900, 1100] : [1500, 2600, 3700, 4500];
    const timers = steps.map((t, i) => window.setTimeout(() => setStage(i + 1), t));
    const end = window.setTimeout(onDone, (reduced ? 1300 : 5000) as number);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
    };
  }, [onDone, reduced]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[oklch(0.05_0_0)]"
      exit={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="h-24 w-24"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.polygon
          points="50,8 90,78 10,78"
          fill="none"
          stroke="oklch(0.62 0.235 27)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reduced ? 0.3 : 1.4, ease: "easeInOut" }}
        />
        <motion.rect
          x="34"
          y="34"
          width="32"
          height="32"
          fill="oklch(0.62 0.235 27)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: stage >= 1 ? 1 : 0, opacity: stage >= 1 ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 16 }}
          style={{ transformOrigin: "50px 50px" }}
        />
      </motion.svg>

      <div className="mt-10 h-20 text-center">
        <AnimatePresence mode="wait">
          {stage === 2 && (
            <motion.h1
              key="name"
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold tracking-[0.4em] text-foreground sm:text-5xl"
            >
              PRANJUL
            </motion.h1>
          )}
          {stage >= 3 && (
            <motion.p
              key="role"
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.55em] text-muted-foreground"
            >
              Frontend Engineer
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-20 h-[2px] w-40 overflow-hidden rounded-full bg-[oklch(1_0_0_/_10%)]">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: reduced ? 1.1 : 4.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
