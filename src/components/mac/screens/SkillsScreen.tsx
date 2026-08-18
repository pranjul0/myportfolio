import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { AppWindow } from "../AppWindow";
import { SKILLS } from "@/lib/mac";

export function SkillsScreen() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? SKILLS.length : 0);

  useEffect(() => {
    if (reduced) return;
    setCount(0);
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c >= SKILLS.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, 130);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <AppWindow title="Terminal.app" subtitle="zsh — 80×24" className="h-full">
      <div className="p-6 font-mono text-sm sm:p-10">
        <p className="text-muted-foreground">
          Last login: today on ttys001
        </p>
        <p className="mt-3">
          <span className="text-primary">pranjul@macbook</span> ~ % <span>ls skills/</span>
        </p>
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
          {SKILLS.slice(0, count).map((s) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-foreground/85"
            >
              <span className="text-primary/70">›</span> {s}
            </motion.span>
          ))}
        </div>
        <p className="mt-6">
          <span className="text-primary">pranjul@macbook</span> ~ %{" "}
          <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-foreground/80" />
        </p>
      </div>
    </AppWindow>
  );
}
