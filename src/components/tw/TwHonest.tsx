/**
 * 정직 섹션 — "nightward가 하는 것 / 안 하는 것" + 스냅샷 테스트와의 비교.
 * 신뢰 형성용. "버그를 찾아준다" 식 오버클레임 절대 금지.
 * 판단은 사람 몫이라는 점, 그리고 스냅샷 라이브러리가 더 나은 경우도 분명히 한다.
 */
import { DOCS, GITHUB } from "./meta";

const does = [
  "Shows every change from what you approved, with nothing left out",
  "Gives the AI fix loop a stop signal (the gate)",
  "Groups the blast radius by feature",
  "Lists what it can't see: public functions no capture test ran",
];

const doesNot = [
  "Decide whether a change is a bug (there is no correctness oracle)",
  "Generate tests for you",
  "Decide what the \"right\" behavior is",
  "Sandbox your agent: the gate is a convention, and every bypass leaves a trace in git",
  "Work outside Python and pytest (other languages are out of scope for now)",
];

const compare = [
  {
    row: "A mismatch",
    snap: "fails the test; a test stops at its first failing assertion",
    nw: "is recorded; one run lists every moved behavior, grouped by feature",
  },
  {
    row: "Accepting changes",
    snap: "an update flag rewrites snapshots, or you edit the approved file",
    nw: "approve accepts only what review showed you, and never removes a behavior in bulk",
  },
  {
    row: "A machine verdict",
    snap: "the pytest exit code",
    nw: "status --json, MCP tools and a GitHub Action; never intact when tests were deselected, failed, or the store moved",
  },
  {
    row: "Reworded AI text",
    snap: "a mismatch every run",
    nw: "an optional semantic judge with a committed ledger",
  },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const linkCls = "text-aqua/80 underline underline-offset-2 hover:text-aqua";

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

        <p className="mt-8 text-white/45 text-sm leading-relaxed max-w-3xl">
          "Boundary intact" means no <em>captured</em> behavior changed, nothing more. Read the{" "}
          <a href={`${DOCS}/threat-model.md`} {...ext} className={linkCls}>
            threat model
          </a>{" "}
          and{" "}
          <a href={`${DOCS}/normalization.md`} {...ext} className={linkCls}>
            what nightward normalizes
          </a>{" "}
          before you rely on a green gate.
        </p>

        {/* 스냅샷 테스트와의 비교 */}
        <div className="mt-20">
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            Already using snapshot tests?
          </h3>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-3xl">
            nightward is snapshot testing underneath: capture, approve, compare. If people make
            your changes, syrupy, inline-snapshot or ApprovalTests may be all you need. nightward
            is built for the loop where an agent makes the change.
          </p>

          <div className="rounded-2xl border border-white/10 overflow-x-auto bg-white/[0.02]">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[0.8fr_1fr_1.2fr] text-xs font-mono uppercase tracking-wider text-white/45 bg-white/[0.03] border-b border-white/10">
                <div className="px-5 py-3" />
                <div className="px-5 py-3">Snapshot libraries</div>
                <div className="px-5 py-3 text-aqua/80">nightward</div>
              </div>
              {compare.map((c) => (
                <div
                  key={c.row}
                  className="grid grid-cols-[0.8fr_1fr_1.2fr] border-b border-white/[0.06] last:border-b-0 text-sm"
                >
                  <div className="px-5 py-4 text-white font-semibold">{c.row}</div>
                  <div className="px-5 py-4 text-white/50 leading-relaxed">{c.snap}</div>
                  <div className="px-5 py-4 text-white/85 leading-relaxed">{c.nw}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-white/45 text-sm leading-relaxed max-w-3xl">
            Where they're better: inline-snapshot keeps the value next to the assertion, syrupy
            has serializers for many types and needs no extra command, and ApprovalTests exists
            for many languages. They can run side by side with nightward in one suite.{" "}
            <a href={`${GITHUB}#how-it-compares-with-snapshot-testing`} {...ext} className={linkCls}>
              Full comparison
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
