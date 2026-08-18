import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HomeScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[11px] uppercase tracking-[0.5em] text-muted-foreground"
      >
        Pranjul&apos;s Mac
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
      >
        Pran<span className="text-primary text-glow">jul</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
      >
        Frontend Developer with 4 years of experience building scalable web, desktop and mobile
        products with React, Next.js, React Native and TypeScript.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex items-center gap-2 text-xs text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        Scroll to open applications
      </motion.div>
    </div>
  );
}
