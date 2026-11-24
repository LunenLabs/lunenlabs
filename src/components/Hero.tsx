import { DANGMASIL_APP_STORE } from "../data/links";

const lineup = [
  { value: "댕마실", label: "강아지 산책 기록 · App Store 출시" },
  { value: "폴짝", label: "아이 나들이 기록 · App Store 심사 중" },
  { value: "nightward", label: "AI 변경 회귀 게이트 · 오픈소스" },
  { value: "SDET Code", label: "테스트 자동화 · 운영 중" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center bg-aurora overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aqua/40 bg-aqua/10 text-aqua text-xs font-medium mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
          댕마실 App Store 출시 · 폴짝 심사 중
        </div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
          작은 일상과 단단한 코드를
          <br />
          <span className="bg-gradient-to-r from-aqua to-aqua-light bg-clip-text text-transparent">
            만드는 스튜디오
          </span>
        </h1>

        <p className="text-white/75 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
          루넨랩스(LunenLabs)는 강아지 산책과 아이 나들이를 기록하는 앱, 그리고
          AI 시대에도 소프트웨어가 조용히 망가지지 않도록 지키는 품질 도구를 만드는
          한국의 소프트웨어 스튜디오입니다.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-14">
          <button
            onClick={() => scrollTo("products")}
            className="px-7 py-3.5 rounded-full bg-aqua text-navy-deep font-semibold hover:bg-aqua-light hover:scale-[1.02] transition-all shadow-lg shadow-aqua/20"
          >
            제품 둘러보기 →
          </button>
          <a
            href={DANGMASIL_APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/8 text-white border border-white/20 hover:bg-white/15 transition-all"
          >
            댕마실 App Store에서 받기
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 max-w-3xl">
          {lineup.map((s) => (
            <div key={s.value}>
              <div className="text-aqua text-xl sm:text-2xl font-bold mb-1">
                {s.value}
              </div>
              <div className="text-white/55 text-xs sm:text-sm leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center text-white/40 text-xs">
        <span>↓ 스크롤하여 더 알아보기</span>
      </div>
    </section>
  );
}
