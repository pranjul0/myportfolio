import { createFileRoute } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useCallback, useState } from "react";
import { BootIntro } from "@/components/mac/BootIntro";
import { Dock } from "@/components/mac/Dock";
import { MenuBar } from "@/components/mac/MenuBar";
import { Wallpaper } from "@/components/mac/Wallpaper";
import { HomeScreen } from "@/components/mac/screens/HomeScreen";
import { AboutScreen } from "@/components/mac/screens/AboutScreen";
import { WorkScreen } from "@/components/mac/screens/WorkScreen";
import { ExperienceScreen } from "@/components/mac/screens/ExperienceScreen";
import { SkillsScreen } from "@/components/mac/screens/SkillsScreen";
import { ContactScreen } from "@/components/mac/screens/ContactScreen";
import { SCREENS, type ScreenId } from "@/lib/mac";

const TITLE = "Pranjul — Frontend Developer Portfolio";
const DESC =
  "Interactive macOS-inspired portfolio of Pranjul, frontend developer with 4 years of React, Next.js, React Native and TypeScript experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Desktop,
});

const VIEWS: Record<ScreenId, () => React.ReactElement> = {
  home: HomeScreen,
  about: AboutScreen,
  work: WorkScreen,
  experience: ExperienceScreen,
  skills: SkillsScreen,
  contact: ContactScreen,
};

function Desktop() {
  const [booted, setBooted] = useState(false);
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(SCREENS.length - 1, Math.floor(p * SCREENS.length + 0.0001));
    setIndex((cur) => (cur === next ? cur : next));
  });

  const goTo = useCallback((id: ScreenId) => {
    const i = SCREENS.findIndex((s) => s.id === id);
    const max = document.body.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: (max * (i + 0.5)) / SCREENS.length,
      behavior: "smooth",
    });
  }, []);

  const screen = SCREENS[index] ?? SCREENS[0];
  const View = VIEWS[screen.id];
  const isFull = screen.id === "home";

  return (
    <>
      <AnimatePresence>{!booted && <BootIntro onDone={() => setBooted(true)} />}</AnimatePresence>

      {/* scroll driver */}
      <div style={{ height: `${SCREENS.length * 100}vh` }} aria-hidden />

      <motion.main
        initial={{ opacity: 0, scale: 1.03 }}
        animate={booted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 overflow-hidden"
      >
        <Wallpaper />
        <MenuBar section={screen.label} />

        <div className="absolute inset-0 flex items-center justify-center px-4 pb-28 pt-14 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.section
              key={screen.id}
              initial={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: 30, filter: "blur(14px)" }
              }
              animate={
                reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
              }
              exit={
                reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -20, filter: "blur(14px)" }
              }
              transition={
                reduced
                  ? { duration: 0.25 }
                  : { type: "spring", stiffness: 190, damping: 26, mass: 0.7 }
              }
              style={{ willChange: "transform, opacity, filter" }}
              className={`h-full w-full ${isFull ? "" : "mx-auto max-w-6xl"}`}
            >
              <View />
            </motion.section>
          </AnimatePresence>
        </div>

        <Dock active={screen.id} onSelect={goTo} />
      </motion.main>
    </>
  );
}
