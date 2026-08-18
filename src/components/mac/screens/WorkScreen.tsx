import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AppWindow } from "../AppWindow";
import { PROJECTS } from "@/lib/mac";

export function WorkScreen() {
  return (
    <AppWindow title="WORK" subtitle={`${PROJECTS.length} items`} className="h-full">
      <div className="grid gap-4 overflow-y-auto p-6 sm:grid-cols-2 sm:p-8 xl:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group hairline relative overflow-hidden rounded-xl bg-[oklch(1_0_0_/_4%)] p-1 transition-shadow hover:shadow-[var(--glow-red)]"
          >
            <div className="relative h-32 overflow-hidden rounded-lg sm:h-36">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `radial-gradient(120% 100% at 20% 0%, oklch(0.45 0.2 ${p.hue} / 75%), oklch(0.14 0.02 20) 70%)`,
                }}
              />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, oklch(1 0 0 / 25%) 1px, transparent 1px)",
                  backgroundSize: "26px 100%",
                }}
              />
              <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.2em] text-foreground/70">
                {p.year}
              </span>
            </div>
            <div className="flex items-start justify-between gap-3 px-3 pb-4 pt-4">
              <div className="min-w-0">
                <h3 className="text-base font-medium tracking-tight">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.kind}</p>
                <p className="mt-2 text-[11px] text-primary">{p.stack}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[11px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </motion.article>
        ))}
      </div>
    </AppWindow>
  );
}
