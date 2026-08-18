import { motion } from "framer-motion";
import { AppWindow } from "../AppWindow";

const timeline = [
  {
    role: "Senior Software Engineer",
    company: "PaisaBazaar, Gurgaon",
    period: "Oct 2025 — Present",
    points: [
      "Optimising the Bureau (CIBIL Score) platform with React and TypeScript, improving Core Web Vitals and page load speed.",
      "Building scalable, reusable UI components with state management, API integrations and secure data handling for high-traffic fintech.",
      "Partnering with product, backend and QA to ship end-to-end credit score and loan eligibility journeys.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "VectoScalar Technologies, Noida",
    period: "Feb 2022 — Sep 2025",
    points: [
      "Built the Pokerbaazi desktop app in Electron + React with IPC across multiple windows.",
      "Created Admin Boot, a published npm component library that cut admin dashboard build time by over 70%.",
      "Delivered Find My Venue listings with MUI, Google Maps and UAE-restricted map views; shipped Dehurdle on React Native with MST, Firebase and Clevertap.",
    ],
  },
  {
    role: "Education",
    company: "Manipal University Jaipur · Punjabi University Patiala",
    period: "2018 — 2023",
    points: [
      "Master's in Computer Application — CGPA 8.38 (2021–2023).",
      "Bachelor's in Computer Application — 74.3% (2018–2021).",
    ],
  },
];

export function ExperienceScreen() {
  return (
    <AppWindow title="Experience.app" subtitle="Career timeline" className="h-full">
      <div className="relative p-8 sm:p-12">
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[38px] top-12 h-[calc(100%-6rem)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:left-[54px]"
        />
        <div className="space-y-10">
          {timeline.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="relative pl-8"
            >
              <span className="absolute -left-[3px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_oklch(0.62_0.235_27)]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {job.period}
              </p>
              <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
                {job.role} <span className="text-primary">— {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </AppWindow>
  );
}
