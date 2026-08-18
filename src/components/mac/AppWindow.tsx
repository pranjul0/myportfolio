import type { ReactNode } from "react";

export function AppWindow({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-panel flex w-full flex-col overflow-hidden rounded-2xl ${className}`}
      style={{ willChange: "transform" }}
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-[var(--glass-border)] px-4 py-3">
        <span className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.19_25)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.78_0.15_80)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.72_0.16_150)]" />
        </span>
        <span className="text-xs font-medium tracking-wide text-foreground/80">{title}</span>
        {subtitle && (
          <span className="ml-auto hidden text-[11px] text-muted-foreground sm:block">
            {subtitle}
          </span>
        )}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
