import { useState } from "react";

const faqs: { q: string; a: string }[] = [
  {
    q: "댕마실과 폴짝은 어디서 받을 수 있나요?",
    a: "댕마실은 지금 App Store에서 무료로 받을 수 있어요. 폴짝은 App Store 심사 중이고, 승인되는 대로 공개합니다. 두 앱 모두 지금은 iPhone 전용입니다.",
  },
  {
    q: "앱이 우리 아이의 위치나 사진을 가져가나요?",
    a: "아니요. 댕마실과 폴짝은 회원가입과 자체 서버가 없어서, 산책·나들이 경로와 사진은 휴대폰 안에만 저장됩니다. 분석·광고 SDK도 넣지 않았고, 공유 카드에도 지도·경로·동네 이름은 들어가지 않아요. 자세한 내용은 각 앱 소개 페이지의 개인정보처리방침에서 확인할 수 있습니다.",
  },
  {
    q: "휴대폰을 바꾸면 기록은 어떻게 옮기나요?",
    a: "기록을 서버에 올려 두지 않기 때문에 휴대폰의 백업으로 옮깁니다. 댕마실 기록은 iCloud 등 iPhone 백업에 함께 담기고, 폴짝은 설정에서 만든 백업 파일 하나로도 옮길 수 있어요. 앱을 지우면 기록도 함께 지워지니, 기기를 바꾸기 전에 백업을 꼭 확인해 주세요.",
  },
  {
    q: "nightward는 어떻게 쓰나요?",
    a: "nightward는 MIT 라이선스 오픈소스입니다. pytest와 CLI로 동작하고, AI 에이전트가 직접 실행할 수 있도록 MCP 도구도 제공합니다. 설치 방법과 5분 퀵스타트는 GitHub에 있습니다.",
  },
  {
    q: "SDET Code 테스트 자동화는 어떻게 문의하나요?",
    a: "sdetcode.com에서 서비스 내용을 확인하고 문의하실 수 있습니다.",
  },
  {
    q: "앱 사용 중 문제가 생기면 어디로 연락하나요?",
    a: "댕마실은 dangmasil@lunenlabs.com, 폴짝은 poljjak@lunenlabs.com으로 보내 주세요. 그 밖의 문의는 페이지 하단의 연락처로 받습니다.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-aqua-dark text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-line rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-aqua-light/40 transition-colors"
              >
                <span className="text-navy font-semibold text-base sm:text-lg">
                  {f.q}
                </span>
                <span
                  className={`shrink-0 ml-4 w-6 h-6 rounded-full bg-cream flex items-center justify-center text-aqua-dark transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-mist leading-relaxed text-sm sm:text-base">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
