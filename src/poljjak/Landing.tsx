import { useEffect } from "react";
import Footer from "./Footer";

// The app's 햇살 yellow (the icon's sky), fading to pale as the page goes down.
const GRADIENT = "linear-gradient(180deg, #FFE45C 0%, #FFF3A6 45%, #FFF8DC 100%)";
const GLASS = "bg-white/75 backdrop-blur-xl border border-white/80";

const FEATURES = [
  { icon: "👧", title: "다둥이 함께 기록", body: "아이마다 사진과 주간 바깥놀이 목표를 따로. 함께 나간 아이들 모두에게 기록돼요." },
  { icon: "🛝", title: "아이랑 갈 곳·키즈 핫플 추천", body: "놀이터, 공원, 유아숲, 키즈카페를 가까운 순으로. 위치는 휴대폰 안에서만 계산해요." },
  { icon: "📸", title: "집 위치 노출 없는 스토리 공유", body: "아이 사진과 시간·거리만 담은 카드 한 장. 지도와 장소, 시각은 넣지 않아요." },
  { icon: "🔒", title: "회원가입 없이 내 폰에만 안전 보관", body: "로그인 없이 바로 시작. 아이 위치와 사진은 다른 곳으로 보내지 않아요." },
];

export default function Landing() {
  useEffect(() => {
    document.title = "폴짝 - 우리 아이 나들이 일기";
  }, []);

  return (
    <div className="min-h-screen text-[#2A2410]" style={{ background: GRADIENT, fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif" }}>
      <div className="max-w-md mx-auto">
        <header className="px-6 pt-7 flex items-center gap-2 font-extrabold text-base">
          <img src="/poljjak/img/icon.png" alt="" className="w-8 h-8 rounded-[9px]" />
          폴짝
        </header>

        <section className="px-6 pt-8">
          <h1 className="text-[34px] leading-[1.2] font-black tracking-[-0.5px]">
            나들이 끝나면
            <br />
            스토리 각 📸
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-[#6B6450]">
            오늘 아이와 걸은 시간과 거리, 가장 예쁜 사진을
            <br />
            스토리 카드 한 장으로.
          </p>
        </section>

        <div className="mt-7 px-6">
          <img
            src="/poljjak/img/family.jpg"
            alt="엄마, 아빠와 함께 공원 산책길을 신나게 걷는 아이 그림"
            width={800}
            height={800}
            className="w-full aspect-square object-cover rounded-[28px] border-4 border-white shadow-[0_18px_40px_rgba(120,100,20,0.22)] bg-[#FFF3A6]"
          />
        </div>

        <div className="px-6 mt-8">
          <div
            aria-disabled="true"
            className="w-full rounded-full bg-white/70 backdrop-blur-xl border border-white text-[#2A2410] font-bold text-[15px] py-4 text-center"
          >
            App Store 출시 준비 중 · 곧 만나요
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center px-6">
          <img
            src="/poljjak/img/story-card.png"
            alt="폴짝 나들이 카드 예시: 45분 · 지우랑 1.8km 폴짝 ✨"
            className="w-[230px] aspect-[9/16] object-cover rounded-[26px] border-4 border-white shadow-[0_18px_40px_rgba(120,100,20,0.22)] bg-[#FFF3A6]"
          />
          <p className="mt-4 text-sm font-bold text-[#6B6450]">45분 · 지우랑 1.8km 폴짝 ✨</p>
        </div>

        <section className="px-4 mt-12 space-y-3">
          {FEATURES.map((f) => (
            <div key={f.title} className={`${GLASS} text-[#2A2410] rounded-3xl p-5 flex gap-4 items-start`}>
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#FFF0A0] flex items-center justify-center text-[22px]">
                {f.icon}
              </div>
              <div>
                <h2 className="font-bold text-[15px]">{f.title}</h2>
                <p className="text-[13px] leading-relaxed text-[#6B6450] mt-1">{f.body}</p>
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </div>
    </div>
  );
}
