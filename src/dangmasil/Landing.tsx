import { useEffect } from "react";
import Footer from "./Footer";

const GRADIENT = "linear-gradient(170deg, #FF9A8B 0%, #FF6A88 45%, #FF99AC 100%)";

const FEATURES = [
  { icon: "🐶", title: "여러 아이 함께", body: "아이마다 사진과 주간 목표를 따로. 함께 나간 아이들 모두에게 기록돼요." },
  { icon: "🗺️", title: "걸은 길을 지도에", body: "주머니에 넣고 화면이 꺼져도, 산책이 끝나면 경로를 그려 줘요." },
  { icon: "📸", title: "스토리에 바로 공유", body: "아이 사진과 시간·거리가 담긴 카드 한 장. 지도와 위치는 넣지 않아요." },
  { icon: "🔒", title: "회원가입 없이, 내 폰에만", body: "로그인 없이 바로 시작. 산책 기록은 다른 곳으로 보내지 않아요." },
];

export default function Landing() {
  useEffect(() => {
    document.title = "댕마실 - 강아지 산책 기록";
  }, []);

  return (
    <div className="min-h-screen text-white" style={{ background: GRADIENT, fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif" }}>
      <div className="max-w-md mx-auto">
        <header className="px-6 pt-7 flex items-center gap-2 font-extrabold text-base">
          <img src="/dangmasil/img/icon.png" alt="" className="w-8 h-8 rounded-[9px]" />
          댕마실
        </header>

        <section className="px-6 pt-8">
          <h1 className="text-[34px] leading-[1.2] font-black tracking-[-0.5px]">
            산책 끝나면
            <br />
            스토리 각 📸
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-white/90">
            오늘 걸은 시간과 거리, 우리 아이 사진을
            <br />
            예쁜 카드 한 장으로.
          </p>
        </section>

        <div className="mt-8 flex justify-center px-6">
          <img
            src="/dangmasil/img/story-card.png"
            alt="댕마실 산책 카드 예시: 아이 사진 위에 45분, 보리와 3.2km 마실 완료"
            className="w-[230px] aspect-[9/16] object-cover rounded-[26px] border-4 border-white shadow-[0_18px_40px_rgba(120,0,40,0.35)] bg-[#ffd0da]"
          />
        </div>

        <div className="px-6 mt-8">
          <div
            aria-disabled="true"
            className="w-full rounded-full bg-white text-[#FF4F7B] font-bold text-[15px] py-4 text-center"
          >
            App Store 출시 준비 중 · 곧 만나요
          </div>
        </div>

        <section className="px-4 mt-12 space-y-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white/95 text-[#3A2A2E] rounded-3xl p-5 flex gap-4 items-start">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#FFE1E7] flex items-center justify-center text-[22px]">
                {f.icon}
              </div>
              <div>
                <h2 className="font-bold text-[15px]">{f.title}</h2>
                <p className="text-[13px] leading-relaxed text-[#8A6F72] mt-1">{f.body}</p>
              </div>
            </div>
          ))}
        </section>

        <Footer tone="light" />
      </div>
    </div>
  );
}
