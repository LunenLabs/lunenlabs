/**
 * CTA 섹션 — 공개 레포 + PyPI 설치 안내.
 */
const GITHUB = "https://github.com/LunenLabs/nightward";
const PYPI = "https://pypi.org/project/nightward/";
const QUICKSTART = `${GITHUB}#quickstart-5-minutes`;

export default function TwCta() {
  return (
    <section id="tw-cta" className="relative py-20 sm:py-28 bg-ink overflow-hidden">
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(45% 40% at 50% 30%, rgba(0, 201, 176, 0.14) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-aqua/30 bg-aqua/10 text-aqua text-xs font-semibold mb-5 font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            OPEN SOURCE · MIT
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Try it in five minutes.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            nightward is a pytest plugin and CLI for Python 3.10+. Installing it makes the{" "}
            <code className="px-1.5 py-0.5 rounded bg-white/10 text-aqua font-mono text-base">
              behavior
            </code>{" "}
            fixture available in every test.
          </p>
        </div>

        <pre className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 mb-8 overflow-x-auto text-sm font-mono leading-relaxed">
          <code>
            <span className="text-white/90">pip install nightward</span>
            {"\n"}
            <span className="text-white/90">pip install "nightward[mcp]"</span>
            <span className="text-white/40">{"  # + MCP server for AI agents"}</span>
          </code>
        </pre>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-aqua text-navy-deep font-semibold hover:bg-aqua-dark hover:text-white transition-all shadow-lg shadow-aqua/20"
          >
            View on GitHub →
          </a>
          <a
            href={QUICKSTART}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/5 text-white border border-white/15 hover:bg-white/10 transition-all"
          >
            5-minute quickstart
          </a>
          <a
            href={PYPI}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/5 text-white border border-white/15 hover:bg-white/10 transition-all"
          >
            PyPI
          </a>
        </div>

        <p className="mt-8 text-center text-white/40 text-xs leading-relaxed">
          Free and MIT-licensed. Issues and feedback are welcome on GitHub.
        </p>
      </div>
    </section>
  );
}
