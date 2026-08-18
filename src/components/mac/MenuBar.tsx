import { motion } from "framer-motion";
import { BatteryMedium, Wifi, Search } from "lucide-react";
import { useEffect, useState } from "react";

export function MenuBar({ section }: { section: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = window.setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="glass-panel absolute inset-x-0 top-0 z-40 hidden h-9 items-center justify-between px-5 text-[12px] text-foreground/80 md:flex"
      style={{ borderRadius: 0, borderWidth: "0 0 1px 0", boxShadow: "none" }}
    >
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 100 100" className="h-3.5 w-3.5">
          <polygon points="50,8 90,78 10,78" fill="none" stroke="currentColor" strokeWidth="8" />
        </svg>
        <span className="font-semibold tracking-wide">PRANJUL</span>
        <span className="text-foreground/50">File</span>
        <span className="text-foreground/50">View</span>
        <span className="text-foreground/50">Window</span>
      </div>
      <motion.span
        key={section}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-1/2 -translate-x-1/2 text-foreground/70"
      >
        {section}
      </motion.span>
      <div className="flex items-center gap-3.5 text-foreground/70">
        <Search className="h-3.5 w-3.5" />
        <Wifi className="h-3.5 w-3.5" />
        <BatteryMedium className="h-4 w-4" />
        <span className="tabular-nums">{time}</span>
      </div>
    </motion.header>
  );
}
