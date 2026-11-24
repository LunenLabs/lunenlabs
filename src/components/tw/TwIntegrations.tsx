/**
 * Where nightward runs: the Claude Code plugin, any MCP host, and CI.
 * The point to keep: the agent can run the gate and read the verdict, never approve.
 */
import { DOCS, GITHUB, GLAMA, NW_VERSION, TDQS, TDQS_SITE } from "./meta";

const surfaces = [
  {
    tag: "Claude Code",
    title: "The plugin",
    cmd: "/plugin install nightward --marketplace LunenLabs/nightward",
    desc: "Adds the MCP server and a gate-loop skill: Claude runs the gate after its edits and hands intended changes to you instead of approving them. The onboard skill puts new code under the gate. It reads the code without changing it, writes a domain map and the capture tests, and hands you the suspected defects.",
    href: `${GITHUB}#ai-agents-nightward-mcp`,
  },
  {
    tag: "Any MCP host",
    title: "nightward mcp",
    cmd: "claude mcp add nightward -- nightward mcp",
    desc: "A stdio server with two tools, nightward_run and nightward_status. They return the verdict and each change's diff, so the agent sees what moved without marking it reviewed. approve and reject are never exposed.",
    href: `${DOCS}/mcp.md`,
  },
  {
    tag: "CI",
    title: "The GitHub Action",
    cmd: `uses: LunenLabs/nightward@v${NW_VERSION}`,
    desc: "Runs your tests, writes the verdict and the diffs that moved to the job summary, and fails the job unless the boundary is intact. It never approves: intended changes arrive in the PR as a baseline diff.",
    href: `${DOCS}/recipes/ci-github-actions.md`,
  },
];

const verdicts = [
  { v: "intact", tone: "text-success", m: "no unapproved change: done" },
  { v: "breached", tone: "text-danger", m: "fix the code, or stop and ask a human" },
  { v: "partial", tone: "text-warning", m: "approved behaviors were deselected" },
  { v: "incomplete", tone: "text-warning", m: "capture tests failed" },
  { v: "stale", tone: "text-warning", m: "the store moved since the report" },
];

export default function TwIntegrations() {
  return (
    <section id="tw-integrations" className="relative py-20 sm:py-28 bg-navy-deep overflow-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none bg-grid" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-aqua/30 bg-aqua/10 text-aqua text-xs font-semibold mb-5 font-mono tracking-wide">
            WHERE IT RUNS
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Your agent runs the gate.
            <br />
            <span className="text-aqua">Only a human opens it.</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            If the agent that makes a change could also approve it, the gate would turn into a
            changelog. So every surface gives the agent <code className="text-aqua font-mono text-base">run</code>{" "}
            and <code className="text-aqua font-mono text-base">status</code>, and approving stays a
            human CLI command whose result is a file diff in code review.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {surfaces.map((s) => (
            <a
              key={s.tag}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-aqua/40 transition-all"
            >
              <div className="text-aqua/70 text-xs font-mono font-semibold tracking-wide uppercase mb-2">
                {s.tag}
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{s.title}</h3>
              <pre className="mb-5 px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-[12px] font-mono text-white/85 whitespace-pre-wrap [overflow-wrap:break-word]">
                {s.cmd}
              </pre>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{s.desc}</p>
              <span className="mt-auto text-aqua text-sm font-semibold group-hover:translate-x-0.5 transition-transform">
                Docs →
              </span>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
          <p className="text-white/75 text-sm mb-5">
            Every surface returns the same machine verdict. The agent is done only when the
            boundary is <code className="text-success font-mono">intact</code> and not stale.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {verdicts.map((v) => (
              <div key={v.v}>
                <div className={`font-mono text-sm font-semibold mb-1 ${v.tone}`}>{v.v}</div>
                <div className="text-white/50 text-xs leading-snug">{v.m}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Glama TDQS — 무엇을 재는 점수인지까지 함께 밝힌다 (코드 품질·보안 인증이 아님) */}
        <div
          id="tw-rating"
          className="scroll-mt-24 mt-12 rounded-3xl border border-aqua/30 bg-gradient-to-br from-aqua/[0.08] to-transparent p-7 sm:p-10"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <div className="text-aqua/80 text-xs font-mono font-semibold tracking-wide uppercase mb-4">
                Rated by Glama
              </div>
              <div className="flex items-end gap-4 mb-5">
                <span className="w-20 h-20 rounded-2xl bg-aqua text-navy-deep text-5xl font-extrabold flex items-center justify-center">
                  {TDQS.grade}
                </span>
                <span className="pb-1">
                  <span className="block text-white text-4xl font-bold leading-none">
                    {TDQS.score}
                    <span className="text-white/40 text-xl font-semibold"> / 5</span>
                  </span>
                  <span className="block text-white/50 text-xs mt-2">
                    Tool Definition Quality Score · scored {TDQS.scoredOn}
                  </span>
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3 leading-snug">
                Agents understand it on first read.
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Glama, an MCP directory of more than 120,000 servers, grades how well each tool's definition
                tells an AI agent what it does, when to call it, what its parameters mean and
                what it will never do. Both nightward tools are graded{" "}
                {TDQS.tools.map((t, i) => (
                  <span key={t.name}>
                    <code className="text-aqua font-mono text-[13px]">{t.name}</code> {t.grade}
                    {i < TDQS.tools.length - 1 ? " and " : "."}
                  </span>
                ))}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a
                  href={GLAMA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua font-semibold hover:text-aqua-light"
                >
                  See the listing on Glama →
                </a>
                <a
                  href={TDQS_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white"
                >
                  How TDQS is scored
                </a>
              </div>
            </div>

            <div>
              <div className="text-white/45 text-xs font-mono uppercase tracking-wider mb-4">
                The tool set as a whole
              </div>
              <ul className="space-y-5">
                {TDQS.dimensions.map((d) => (
                  <li key={d.name}>
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <span className="text-white font-semibold text-sm">{d.name}</span>
                      <span className="font-mono text-sm text-aqua">{d.score}/5</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-1.5">
                      <div
                        className="h-full rounded-full bg-aqua"
                        style={{ width: `${(d.score / 5) * 100}%` }}
                      />
                    </div>
                    <div className="text-white/50 text-xs">{d.note}</div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/40 text-xs leading-relaxed">
                TDQS is an LLM-graded score with an open methodology. It measures how clearly the
                tools are defined for an agent, not code quality, security, or how many
                regressions nightward catches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
