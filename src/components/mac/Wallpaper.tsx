export function Wallpaper() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[oklch(0.08_0.004_20)]" />
      <div
        className="aurora absolute -left-1/4 top-[-30%] h-[90vh] w-[90vw] rounded-full opacity-40 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.55 0.22 27 / 55%), transparent 65%)",
        }}
      />
      <div
        className="aurora absolute -right-1/4 bottom-[-35%] h-[80vh] w-[80vw] rounded-full opacity-30 blur-[160px]"
        style={{
          animationDelay: "-9s",
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.45 0.18 15 / 60%), transparent 68%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 40%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 40%) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black, transparent 78%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
