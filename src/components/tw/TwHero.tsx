export default function TwHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
      {/* Dark aurora backdrop */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(55% 50% at 80% 15%, rgba(0, 201, 176, 0.16) 0%, transparent 60%), radial-gradient(50% 55% at 12% 85%, rgba(10, 26, 63, 0.85) 0%, transparent 70%), linear-gradient(180deg, #0F1626 0%, #0A1A3F 100%)",
        }}
      />
      {/* Subtle grid — dev/terminal 느낌 */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none bg-grid"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-aqua/30 bg-aqua/10 text-aqua text-xs font-semibold mb-7 font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
            nightward · open source · MIT · on PyPI
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] mb-6">
            AI fixes one bug
            <br />
            <span className="bg-gradient-to-r from-aqua to-aqua-dark bg-clip-text text-transparent">
              and quietly breaks something else.
            </span>
          </h1>

          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-3 max-w-2xl">
            nightward shows you that quiet change and{" "}
            <strong className="text-white">stops at the boundary you approved.</strong>
          </p>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
            A regression gate for AI-made changes. When Claude Code or Cursor edits your code,
            nightward catches the real blast radius of a one-line fix: every behavior that
            moved, even when the tests stay green.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-14">
            <button
              onClick={() => scrollTo("tw-case")}
              className="px-7 py-3.5 rounded-full bg-aqua text-navy-deep font-semibold hover:bg-aqua-dark hover:text-white hover:scale-[1.02] transition-all shadow-lg shadow-aqua/20"
            >
              See a real catch →
            </button>
            <button
              onClick={() => scrollTo("tw-cta")}
              className="px-7 py-3.5 rounded-full bg-white/5 text-white border border-white/15 hover:bg-white/10 transition-all"
            >
              Get started
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { v: "capture", l: "Capture what the code does" },
              { v: "approve", l: "A human approves the baseline" },
              { v: "gate", l: "Block anything unapproved" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-aqua text-lg sm:text-xl font-bold mb-1 font-mono">
                  {s.v}
                </div>
                <div className="text-white/50 text-xs leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center text-white/35 text-xs">
        <span>↓ Scroll to learn more</span>
      </div>
    </section>
  );
}
