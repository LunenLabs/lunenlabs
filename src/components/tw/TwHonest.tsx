/**
 * 정직 섹션 — "nightward가 하는 것 / 안 하는 것".
 * 신뢰 형성용. "버그를 찾아준다" 식 오버클레임 절대 금지.
 * 판단은 사람 몫이라는 점을 분명히 한다.
 */

const does = [
  "Shows every change from what you approved, with nothing left out",
  "Gives the AI fix loop a stop signal (the gate)",
  "Groups the blast radius by feature",
];

const doesNot = [
  "Decide whether a change is a bug (there is no correctness oracle)",
  "Generate tests for you",
  "Decide what the \"right\" behavior is",
];

export default function TwHonest() {
  return (
    <section id="tw-honest" className="relative py-20 sm:py-28 bg-navy-deep overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 bg-white/5 text-white/70 text-xs font-semibold mb-5 font-mono tracking-wide">
            HONEST SCOPE
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            What nightward does,
            <br />
            <span className="text-white/50">and what it doesn't.</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            nightward only <strong className="text-white">shows</strong> every change; it never
            judges whether it's a bug. Deciding what the right behavior is always stays with a
            human.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* 하는 것 */}
          <div className="p-7 rounded-2xl bg-aqua/[0.05] border border-aqua/25">
            <div className="text-aqua font-semibold text-sm mb-5 font-mono tracking-wide">
              ✅ Does
            </div>
            <ul className="space-y-4">
              {does.map((d) => (
                <li key={d} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                  <span className="shrink-0 mt-0.5 text-aqua font-bold">+</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* 안 하는 것 */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/12">
            <div className="text-white/55 font-semibold text-sm mb-5 font-mono tracking-wide">
              ❌ Doesn't
            </div>
            <ul className="space-y-4">
              {doesNot.map((d) => (
                <li key={d} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                  <span className="shrink-0 mt-0.5 text-danger font-bold">−</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-white/45 text-sm leading-relaxed max-w-2xl">
          nightward is not a bug finder. It shows exactly what changed, so a human can decide
          faster and with more confidence.
        </p>
      </div>
    </section>
  );
}
