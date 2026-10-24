/**
 * 실제 사례 섹션 — 가장 중요. 진짜 수치 그대로.
 * 펫샵 체크아웃에서 세율 한 줄(0.10 → 0.095)만 바꿨더니 3개 고객 동작이 연쇄 변경.
 * 유닛 테스트는 "3 passed"로 통과했지만 nightward가 잡았다 — 이 대비가 핵심.
 */

const rows = [
  { behavior: "checkout_total", label: "Checkout total", before: "total 30.03", after: "total 29.89" },
  { behavior: "loyalty_points", label: "Loyalty tier · points", before: "silver · 3p", after: "bronze · 2p" },
  { behavior: "shipping_fee", label: "Shipping fee", before: "free shipping", after: "+$3.50" },
];

export default function TwRealCase() {
  return (
    <section id="tw-case" className="relative py-20 sm:py-28 bg-navy-deep overflow-hidden">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none bg-grid"
        aria-hidden
      />
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-aqua/30 bg-aqua/10 text-aqua text-xs font-semibold mb-5 font-mono tracking-wide">
            REAL CASE
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            One tax-rate line changed.
            <br />
            <span className="text-aqua">Three customer behaviors moved with it.</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            In a pet shop checkout, the tax rate went from{" "}
            <code className="px-1.5 py-0.5 rounded bg-white/10 text-aqua font-mono text-base">
              0.10 → 0.095
            </code>
            , a 0.5-point tweak. The only intended change was the total, but three
            customer-facing behaviors quietly changed in a chain.
          </p>
        </div>

        {/* 핵심 대비: 유닛 테스트는 통과, nightward는 잡음 */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-success/25">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-success font-mono text-sm font-semibold">
                ✓ 3 passed
              </span>
              <span className="text-white/40 text-xs">unit tests</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The whole suite was green. Nothing looked wrong to a reviewer or to CI.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-aqua/[0.06] border border-aqua/40">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-aqua font-mono text-sm font-semibold">
                ⚠ 3 behaviors changed
              </span>
              <span className="text-white/40 text-xs">nightward</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              nightward caught the three behaviors that no longer match the approved
              baseline: changes the tests never saw.
            </p>
          </div>
        </div>

        {/* 수치 표 — 값 그대로 */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] mb-8">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] text-xs font-mono uppercase tracking-wider text-white/45 bg-white/[0.03] border-b border-white/10">
            <div className="px-5 py-3">Behavior</div>
            <div className="px-5 py-3">Before · approved</div>
            <div className="px-5 py-3">After · changed</div>
          </div>
          {rows.map((r) => (
            <div
              key={r.behavior}
              className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-white/[0.06] last:border-b-0 text-sm"
            >
              <div className="px-5 py-4">
                <div className="text-white font-mono text-[13px]">{r.behavior}</div>
                <div className="text-white/40 text-xs mt-0.5">{r.label}</div>
              </div>
              <div className="px-5 py-4 text-white/55 font-mono text-[13px]">
                {r.before}
              </div>
              <div className="px-5 py-4 font-mono text-[13px]">
                <span className="text-danger">{r.after}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed border-l-2 border-aqua pl-5 mb-12">
          A 0.5-point tax change →{" "}
          <strong className="text-white">
            the customer lost silver tier and free shipping at once.
          </strong>{" "}
          Invisible to a reviewer, visible to nightward.
        </p>

        {/* 데모 GIF — public/nightward-demo.gif (없어도 빌드 안 깨짐) */}
        <figure className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl shadow-aqua/5 max-w-3xl mx-auto">
          <img
            src="/nightward-demo.gif"
            loading="lazy"
            alt="Demo: an AI fixes one line, every test passes, nightward shows three customer-facing behaviors moved, the gate stops CI, and opening it takes a human-approved baseline diff"
            className="w-full h-auto block"
          />
          <figcaption className="px-5 py-3 text-white/45 text-xs text-center border-t border-white/10 font-mono">
            A real run of the petshop example
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
