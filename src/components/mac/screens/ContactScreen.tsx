import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowRight } from "lucide-react";
import { AppWindow } from "../AppWindow";
import { CONTACT, LINKS } from "@/lib/mac";

const rows = [
  { Icon: Mail, label: CONTACT.emailAddress, href: LINKS.email },
  { Icon: Phone, label: CONTACT.phone, href: LINKS.phone },
  { Icon: Linkedin, label: "LinkedIn", href: LINKS.linkedin },
  { Icon: Github, label: "GitHub", href: LINKS.github },
];

export function ContactScreen() {
  return (
    <AppWindow title="Mail.app" subtitle="Drafts — 1" className="h-full">
      <div className="flex h-full flex-col justify-center p-8 sm:p-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          Let&apos;s build something <span className="text-primary text-glow">great.</span>
        </motion.h2>

        <div className="mt-8 grid gap-2 sm:max-w-md">
          {rows.map(({ Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={(href.startsWith("mailto") || href.startsWith("tel")) ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="hairline flex items-center gap-3 rounded-xl bg-[oklch(1_0_0_/_4%)] px-4 py-3 text-sm text-foreground/85 transition-colors hover:bg-[oklch(1_0_0_/_9%)]"
            >
              <Icon className="h-4 w-4 text-primary" />
              {label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href={LINKS.email}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--glow-red)]"
        >
          Send message <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </AppWindow>
  );
}
