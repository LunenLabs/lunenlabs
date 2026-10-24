/**
 * 문제 섹션 — AI 코딩의 "무한 수정 루프" 고통.
 */

const pains = [
  {
    no: "A",
    title: "Fix A, break B",
    desc: "Ask an AI to fix one bug, and some other behavior changes where you aren't looking. A feature that worked a minute ago now does something slightly different.",
  },
  {
    no: "B",
    title: "Fix B, break C and D",
    desc: "Ask it to fix that, and something else shifts. After a few rounds, nobody can track how far the change has spread.",
  },
  {
    no: "∞",
    title: "A loop that never ends",
    desc: "The tests are green and the diff looks small, but the product keeps drifting. Nothing tells you when it's safe to stop.",
  },
];

export default function TwProblem() {
  return (
    <section id="tw-problem" className="relative py-20 sm:py-28 bg-ink overflow-hidden">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 40% at 50% 0%, rgba(212, 76, 62, 0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-danger/30 bg-danger/10 text-danger text-xs font-semibold mb-5 font-mono tracking-wide">
            THE PROBLEM
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            The real pain of AI coding
            <br />
            <span className="text-danger">comes after the fix.</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            You changed one line, and nothing tells you which behaviors moved with it. So
            the fixing never ends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((p) => (
            <div
              key={p.no}
              className="relative p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-danger/40 transition-all"
            >
              <div className="text-danger/70 text-4xl font-bold mb-4 font-mono leading-none">
                {p.no}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
