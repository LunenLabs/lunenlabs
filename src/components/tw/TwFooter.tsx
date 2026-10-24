/**
 * nightward 페이지 전용 영어 footer (공용 Footer는 한국어).
 * 한국어 페이지 링크는 <a>로 전체 로드 — 한국어 <head>(lang/title)를 다시 받기 위해.
 */
export default function TwFooter() {
  return (
    <footer className="bg-navy-deep text-white/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-wrap items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-navy to-aqua" aria-hidden />
          <span className="text-white font-semibold tracking-tight">LunenLabs</span>
          <span className="text-white/40">· software studio, Seoul</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="https://github.com/LunenLabs/nightward"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-aqua transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://pypi.org/project/nightward/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-aqua transition-colors"
          >
            PyPI
          </a>
          <a href="mailto:jhryu115@gmail.com" className="hover:text-aqua transition-colors">
            Contact
          </a>
          <a href="/privacy" className="hover:text-aqua transition-colors">
            Privacy (Korean)
          </a>
          <a href="/" className="hover:text-aqua transition-colors">
            LunenLabs home (Korean)
          </a>
        </nav>
        <div className="w-full text-xs text-white/35">© 2026 LunenLabs.</div>
      </div>
    </footer>
  );
}
