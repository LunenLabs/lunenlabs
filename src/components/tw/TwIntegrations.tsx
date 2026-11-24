/**
 * Where nightward runs: the Claude Code plugin, any MCP host, and CI.
 * The point to keep: the agent can run the gate and read the verdict, never approve.
 */
import { DOCS, GITHUB, NW_VERSION } from "./meta";

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
      </div>
    </section>
  );
}
