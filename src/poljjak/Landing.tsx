import { useEffect } from "react";
import Footer from "./Footer";

// The app's 햇살 yellow (the icon's sky), fading to pale as the page goes down.
const GRADIENT = "linear-gradient(180deg, #FFE45C 0%, #FFF3A6 45%, #FFF8DC 100%)";
const GLASS = "bg-white/75 backdrop-blur-xl border border-white/80";

// Art: Canva AI pictures in the family.jpg style, made by Poljjak scripts/brand/web-images.mjs.
const FEATURES = [
  { img: "/poljjak/img/feature-map.jpg", title: "놀이터·키즈카페 지도", body: "우리 동네 놀이터, 키즈카페, 놀이방 식당, 공원을 지도로 한눈에. 위치는 휴대폰 안에서만 계산해요." },
  { img: "/poljjak/img/feature-shows.jpg", title: "어린이 공연·축제", body: "가까운 어린이 뮤지컬, 인형극, 마술 공연과 가족 축제를 모아 보여 줘요." },
  { img: "/poljjak/img/feature-playdate.jpg", title: "같이 놀자", body: "날짜와 친구 가족을 고르면 그날 갈 만한 곳을 세 군데 골라 드려요. 초대장은 카카오톡으로 보내요." },
  { img: "/poljjak/img/feature-record.jpg", title: "나들이 기록", body: "나들이 시간과 거리를 기록하고, 아이 사진으로 스토리 카드를 만들어요. 다둥이도 함께요." },
];

export default function Landing() {
  useEffect(() => {
    document.title = "폴짝 - 아이랑 갈 곳·나들이 기록";
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
            이번 주말,
            <br />
            아이랑 어디 가지?
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-[#6B6450]">
            가까운 놀이터·키즈카페·어린이 공연을 한눈에,
            <br />
            다녀온 나들이는 기록으로.
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
          <a
            href="https://apps.apple.com/kr/app/id6834524472"
            className="block w-full rounded-full bg-[#2A2410] text-white font-bold text-[15px] py-4 text-center"
          >
            App Store에서 받기
          </a>
          <p className="mt-3 text-center text-[13px] font-semibold text-[#6B6450]">
            지금은 아이폰에서 쓸 수 있어요 · 안드로이드는 준비 중이에요
          </p>
          <p className="mt-1 text-center text-[13px] text-[#6B6450]">회원가입 없이 · 기록은 내 폰에만</p>
        </div>

        <div className="mt-12 flex flex-col items-center px-6">
          <img
            src="/poljjak/img/story-card.png"
            alt="폴짝 나들이 카드 예시: 45분 · 지우랑 1.8km 폴짝"
            width={720}
            height={1280}
            className="w-[230px] aspect-[9/16] object-cover rounded-[26px] border-4 border-white shadow-[0_18px_40px_rgba(120,100,20,0.22)] bg-[#FFF3A6]"
          />
          <p className="mt-4 text-sm font-bold text-[#6B6450]">45분 · 지우랑 1.8km 폴짝</p>
        </div>

        <section className="px-4 mt-12 space-y-4">
          {FEATURES.map((f) => (
            <div key={f.title} className={`${GLASS} text-[#2A2410] rounded-3xl p-3`}>
              <img
                src={f.img}
                alt=""
                width={800}
                height={600}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-[20px] bg-[#FFF0A0]"
              />
              <div className="px-2 pt-4 pb-2">
                <h2 className="font-bold text-[17px]">{f.title}</h2>
                <p className="text-[14px] leading-relaxed text-[#6B6450] mt-1">{f.body}</p>
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </div>
    </div>
  );
}
