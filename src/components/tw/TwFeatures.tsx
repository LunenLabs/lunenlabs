/**
 * What 0.3 added beyond the capture → approve → gate core. Each card says what the feature
 * does and, where it matters, what it never does (the human keeps every approval).
 */
import { CHANGELOG, DOCS, NW_VERSION } from "./meta";

const features = [
  {
    name: "Semantic judge",
    code: "semantic=True",
    desc: "AI-written text changes its wording on every run. Mark it semantic and commit a judge: it decides only whether two outputs mean the same thing, and every ruling goes into a committed ledger.",
    href: `${DOCS}/semantic-judge.md`,
  },
  {
    name: "Review depth",
    code: "[tool.nightward.review]",
    desc: "Per feature group, choose how much a review shows, from whole diffs to one line, and when the agent asks: now, at the end of the task, or at the PR. It never decides whether a human approves.",
    href: `${DOCS}/review-depth.md`,
  },
  {
    name: "Domain maps",
    code: "onboard skill",
    desc: "The rules each behavior guards, like \"orders of 50.00 or more ship free\", shown next to its diff, so a reviewer sees what a value should be beside what it became. The onboard skill writes them for you.",
    href: `${DOCS}/domain-maps.md`,
  },
  {
    name: "Capture coverage",
    code: "coverage = \"src/app\"",
    desc: "Lists the public functions that no capture test ran: the places where a change can't breach the gate. Information only; it never changes the verdict.",
    href: `${CHANGELOG}`,
  },
  {
    name: "Dashboard",
    code: "nightward view",
    desc: "A static, read-only site with the verdict, the counts and the diffs grouped by feature, plus copy-paste approve and reject commands. Decisions stay in the CLI.",
    href: `${DOCS}/dashboard.md`,
  },
  {
    name: "doctor",
    code: "nightward doctor",
    desc: "Explains what moved and suggests scrub rules only for values that are volatile by evidence. Timestamps and UUIDs are masked by default.",
    href: `${DOCS}/normalization.md`,
  },
];

export default function TwFeatures() {
  return (
    <section id="tw-features" className="relative py-20 sm:py-28 bg-ink overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-aqua/30 bg-aqua/10 text-aqua text-xs font-semibold mb-5 font-mono tracking-wide">
            NEW IN 0.3 · v{NW_VERSION}
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Built from running it
            <br />
            <span className="text-white/50">on real projects.</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            The core stays three commands. Around it, 0.3 adds what dogfooding on a FastAPI
            backend asked for: gating AI text, reviews sized to each feature, and knowing what
            the gate can't see.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-aqua/40 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-white font-bold text-lg leading-snug">{f.name}</h3>
                <code className="shrink-0 px-2 py-1 rounded-md bg-aqua/10 text-aqua text-[11px] font-mono font-semibold">
                  {f.code}
                </code>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </a>
          ))}
        </div>

        <p className="mt-8 text-white/45 text-sm">
          Every change, and what it means when you upgrade, is in the{" "}
          <a
            href={CHANGELOG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua/80 underline underline-offset-2 hover:text-aqua"
          >
            CHANGELOG
          </a>
          .
        </p>
      </div>
    </section>
  );
}
