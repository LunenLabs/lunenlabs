import { useState, useEffect } from "react";

/**
 * nightward 페이지 전용 Header.
 * PT Header를 미러링하되, nightward 고유 톤(다크 ink 배경 / 모노 악센트)으로.
 * 좌측에 모회사 LunenLabs 로고(홈 복귀) 유지.
 */
export default function TwHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* 한국어 페이지로 나갈 땐 전체 로드 — 한국어 <head>(lang/title)를 다시 받기 위해 */}
          <a
            href="/"
            className="flex items-center gap-2 group text-white/60 hover:text-white transition-colors"
          >
            <span
              className="w-7 h-7 rounded-full bg-gradient-to-br from-navy to-aqua"
              aria-hidden
            />
            <span className="text-sm font-medium tracking-tight hidden sm:inline">
              ← LunenLabs
            </span>
          </a>
          <span className="hidden sm:block w-px h-5 bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-aqua" aria-hidden />
            <span className="font-bold text-white tracking-tight font-mono">nightward</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {[
            { id: "tw-problem", label: "Problem" },
            { id: "tw-case", label: "Real case" },
            { id: "tw-how", label: "How it works" },
            { id: "tw-honest", label: "Scope" },
          ].map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              className="text-white/65 hover:text-aqua transition-colors"
            >
              {it.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("tw-cta")}
            className="px-4 py-2 rounded-full bg-aqua text-navy-deep font-semibold text-sm hover:bg-aqua-dark hover:text-white transition-all"
          >
            Get started
          </button>
        </nav>
        <button
          onClick={() => scrollTo("tw-cta")}
          className="md:hidden px-3.5 py-1.5 rounded-full bg-aqua text-navy-deep font-semibold text-xs"
        >
          Get started
        </button>
      </div>
    </header>
  );
}
