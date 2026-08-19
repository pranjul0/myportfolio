import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  GanttChartSquare,
  TerminalSquare,
  Mail,
  Linkedin,
  Github,
  FileText,
} from "lucide-react";
import { useRef, useState, type ComponentType } from "react";
import { LINKS, SCREENS, type ScreenId } from "@/lib/mac";

type Item =
  | { kind: "screen"; id: ScreenId; label: string; Icon: ComponentType<{ className?: string }> }
  | { kind: "link"; href: string; label: string; Icon: ComponentType<{ className?: string }> };

const ICONS: Record<ScreenId, ComponentType<{ className?: string }>> = {
  home: Home,
  about: User,
  work: Briefcase,
  experience: GanttChartSquare,
  skills: TerminalSquare,
  contact: Mail,
};

const items: Item[] = [
  ...SCREENS.filter((s) => s.id !== "contact").map((s) => ({
    kind: "screen" as const,
    id: s.id,
    label: s.label,
    Icon: ICONS[s.id],
  })),
  { kind: "link", href: LINKS.email, label: "Gmail", Icon: Mail },
  { kind: "link", href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { kind: "link", href: LINKS.github, label: "GitHub", Icon: Github },
  { kind: "link", href: LINKS.resume, label: "Resume", Icon: FileText },
];

const mobileItems: Item[] = [
  { kind: "screen", id: "home", label: "Home", Icon: Home },
  { kind: "screen", id: "work", label: "Work", Icon: Briefcase },
  { kind: "screen", id: "about", label: "About", Icon: User },
  { kind: "screen", id: "contact", label: "Contact", Icon: Mail },
  { kind: "link", href: LINKS.github, label: "GitHub", Icon: Github },
];

function DockIcon({
  item,
  mouseX,
  active,
  onSelect,
  magnify,
}: {
  item: Item;
  mouseX: MotionValue<number>;
  active: boolean;
  onSelect: (id: ScreenId) => void;
  magnify: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hover, setHover] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds || val === Infinity) return 1000;
    return val - (bounds.x + bounds.width / 2);
  });
  const sizeRaw = useTransform(distance, [-160, 0, 160], [48, magnify ? 74 : 48, 48], {
    clamp: true,
  });
  const size = useSpring(sizeRaw, { stiffness: 320, damping: 22, mass: 0.35 });

  const content = (
    <>
      <item.Icon className="h-1/2 w-1/2 text-foreground/85" />
      <motion.span
        initial={false}
        animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 8 }}
        transition={{ duration: 0.18 }}
        className="glass-panel pointer-events-none absolute -top-11 whitespace-nowrap rounded-lg px-2.5 py-1 text-[11px] text-foreground/90"
      >
        {item.label}
      </motion.span>
    </>
  );

  const className =
    "relative flex aspect-square items-center justify-center rounded-2xl bg-[oklch(1_0_0_/_8%)] hairline transition-colors hover:bg-[oklch(1_0_0_/_14%)]";

  return (
    <div className="flex flex-col items-center gap-1">
      {item.kind === "screen" ? (
        <motion.button
          ref={ref}
          style={{ width: size }}
          className={className}
          aria-label={item.label}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => onSelect(item.id)}
          whileTap={{ scale: 0.9 }}
        >
          {content}
        </motion.button>
      ) : (
        <motion.button
          ref={ref}
          style={{ width: size }}
          className={className}
          aria-label={item.label}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => window.open(item.href, item.href.startsWith("mailto") ? "_self" : "_blank")}
          whileTap={{ scale: 0.9 }}
        >
          {content}
        </motion.button>
      )}
      <span className="h-1 w-1">
        {active && (
          <motion.span
            layoutId="dock-active"
            className="block h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_oklch(0.62_0.235_27)]"
          />
        )}
      </span>
    </div>
  );
}

export function Dock({
  active,
  onSelect,
}: {
  active: ScreenId;
  onSelect: (id: ScreenId) => void;
}) {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.35 }}
      className="fixed bottom-[18px] left-1/2 z-50 -translate-x-1/2"
    >
      <div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="glass-panel hidden items-end gap-3 rounded-3xl px-4 pb-2 pt-3 md:flex"
      >
        {items.map((item) => (
          <DockIcon
            key={item.label}
            item={item}
            mouseX={mouseX}
            magnify={!reduced}
            active={item.kind === "screen" && item.id === active}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="glass-panel flex items-end gap-4 rounded-2xl px-4 pb-1.5 pt-2.5 md:hidden">
        {mobileItems.map((item) => (
          <DockIcon
            key={item.label}
            item={item}
            mouseX={mouseX}
            magnify={false}
            active={item.kind === "screen" && item.id === active}
            onSelect={onSelect}
          />
        ))}
      </div>
    </motion.nav>
  );
}
