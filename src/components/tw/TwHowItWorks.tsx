/**
 * 동작 방식 — capture → approve → gate 3스텝.
 */

const steps = [
  {
    no: "01",
    cmd: "capture",
    title: "Capture behavior",
    desc: "Before you change anything, your tests record what the code does today with a behavior(...) fixture: real outputs like checkout_total, loyalty_points and shipping_fee. You don't write expected values.",
  },
  {
    no: "02",
    cmd: "approve",
    title: "Approve the boundary",
    desc: "After a change, nightward lists only the behaviors that moved, grouped by feature. Only what a human approves as intended becomes the new baseline, as a JSON diff that goes through code review.",
  },
  {
    no: "03",
    cmd: "gate",
    title: "Stop at the boundary",
    desc: "If a later change moves a behavior outside the approved boundary, the gate stays closed. Your agent loop finally gets a clear signal for when it's done.",
  },
];

export default function TwHowItWorks() {
  return (
    <section id="tw-how" className="relative py-20 sm:py-28 bg-ink overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-aqua/30 bg-aqua/10 text-aqua text-xs font-semibold mb-5 font-mono tracking-wide">
            HOW IT WORKS
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Three steps are enough.
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            Without writing a single new assertion, nightward takes today's behavior as the
            baseline and watches for anything that drifts from it. Your AI agent can run the
            gate (CLI or MCP); only a human can open it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={s.no} className="relative">
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-aqua/40 transition-all h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-aqua/40 text-3xl font-bold font-mono leading-none">
                    {s.no}
                  </div>
                  <code className="px-2.5 py-1 rounded-md bg-aqua/10 text-aqua text-xs font-mono font-semibold">
                    {s.cmd}
                  </code>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-3 text-aqua/40 text-xl z-10"
                  aria-hidden
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
