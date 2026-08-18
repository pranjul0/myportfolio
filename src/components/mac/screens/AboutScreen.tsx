import { motion } from "framer-motion";
import { AppWindow } from "../AppWindow";

const traits = [
  "4 years of frontend engineering",
  "React · Next.js · React Native · Electron",
  "State: Redux, MobX, MST, Zustand",
  "Node.js + Express APIs, MongoDB & PostgreSQL",
  "AWS & Firebase deployments",
  "MCA, Manipal University Jaipur (8.38 CGPA)",
];

export function AboutScreen() {
  return (
    <AppWindow title="About.app" subtitle="~/pranjul/about" className="h-full">
      <div className="grid h-full gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-medium leading-snug tracking-tight sm:text-4xl"
          >
            &ldquo;I build interfaces that are{" "}
            <span className="text-primary">fast, scalable</span> and impossible to
            ignore.&rdquo;
          </motion.h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Four years of shipping production frontends — reusable component libraries, fintech
            dashboards, marketplaces, desktop apps and React Native products. I care about clean
            architecture, Core Web Vitals, and the engineer who reads the code after me.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {traits.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="hairline rounded-xl bg-[oklch(1_0_0_/_4%)] px-4 py-3 text-sm text-foreground/85"
            >
              <span className="mr-2 text-primary">—</span>
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </AppWindow>
  );
}
