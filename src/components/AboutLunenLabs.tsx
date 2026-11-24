export default function AboutLunenLabs() {
  const principles = [
    {
      title: "회원가입 없이, 기록은 내 폰에",
      desc: "댕마실과 폴짝에는 로그인도, 자체 서버도 없습니다. 산책·나들이 경로와 사진은 휴대폰 안에만 저장되고, 분석·광고 SDK도 넣지 않았습니다.",
    },
    {
      title: "위치가 드러나지 않는 공유",
      desc: "스토리 카드에는 아이 사진과 날짜, 시간, 거리만 담습니다. 지도와 경로, 동네 이름은 넣지 않아 자랑은 마음껏 하고 집 위치는 지킵니다.",
    },
    {
      title: "사람이 승인한 변경만 내보냅니다",
      desc: "AI와 함께 빠르게 만들되, 동작이 바뀌는 지점은 사람이 확인합니다. SDET Code에서 쌓은 이 원칙을 도구로 만든 것이 nightward입니다.",
    },
    {
      title: "있는 것만 말합니다",
      desc: "앱에 실제로 있는 기능만 소개합니다. 과장이나 최상급 표현 대신, 직접 써 보고 확인할 수 있는 사실로 말합니다.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-aqua-dark text-sm font-semibold tracking-wider uppercase mb-3">
            About LunenLabs
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
            달빛처럼 조용히, 일상의 곁을 지킵니다.
          </h2>
          <p className="text-mist text-lg leading-relaxed">
            루넨랩스라는 이름은 "달의 빛(Lunen)"에서 시작했습니다. 화려한 스포트라이트가
            아니라 저녁 산책길과 놀이터, 그리고 모두가 잠든 밤의 배포 파이프라인처럼 —
            일상의 가장자리에서 묵묵히 작동하는 소프트웨어를 만듭니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-line rounded-3xl overflow-hidden">
          {principles.map((p, i) => (
            <div
              key={i}
              className="bg-white p-8 sm:p-10 hover:bg-aqua-light/40 transition-colors"
            >
              <div className="text-aqua-dark text-sm font-semibold mb-3">
                0{i + 1}
              </div>
              <h3 className="text-navy text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-mist leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {[
            {
              k: "Track 01 · 일상 기록 앱",
              v: "댕마실 · 폴짝",
              note: "반려견·아이와 보낸 바깥 시간을 기록하는 iOS 앱",
            },
            {
              k: "Track 02 · 품질 엔지니어링",
              v: "SDET Code · nightward",
              note: "테스트 자동화 서비스와 오픈소스 회귀 게이트",
            },
            {
              k: "운영 방식",
              v: "직접 만들고, 직접 운영합니다",
              note: "기획 · 개발 · 스토어 출시 · 문의 응대까지 한 곳에서 책임집니다",
            },
            {
              k: "법인 상태",
              v: "사업자등록 진행 중",
              note: "제품 운영에 맞춰 진행",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-line rounded-2xl p-6"
            >
              <div className="text-mist text-xs uppercase tracking-wider mb-2">
                {item.k}
              </div>
              <div className="text-navy font-bold text-lg mb-1">{item.v}</div>
              <div className="text-mist text-sm">{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
